import * as THREE from "three";

const STAR_COUNT = 96;
const CONNECT_DISTANCE = 120;
const MOUSE_REPEL_DISTANCE = 120;

const lerp = (start, end, amt) => start + (end - start) * amt;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const randomRange = (min, max) => Math.random() * (max - min) + min;

const createStar = (width, height) => {
  const layer = Math.random();
  const radius = layer > 0.82 ? randomRange(1.8, 2.8) : randomRange(0.8, 1.7);
  const speedScale = layer > 0.82 ? 0.18 : 0.36;

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomRange(-0.28, 0.28) * speedScale,
    vy: randomRange(-0.24, 0.24) * speedScale,
    radius,
    alpha: randomRange(0.4, 0.95),
    twinkleOffset: Math.random() * Math.PI * 2,
    layer,
  };
};

const createThreeSystem = (canvas) => {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(56, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 84;

  const meshCount = 120;
  const positions = new Float32Array(meshCount * 3);
  const colors = new Float32Array(meshCount * 3);
  const drift = new Float32Array(meshCount * 3);

  for (let i = 0; i < meshCount; i += 1) {
    const i3 = i * 3;
    const depth = randomRange(-40, 40);
    positions[i3] = randomRange(-80, 80);
    positions[i3 + 1] = randomRange(-45, 45);
    positions[i3 + 2] = depth;

    const isPurple = Math.random() > 0.45;
    colors[i3] = isPurple ? 0.72 : 0.86;
    colors[i3 + 1] = isPurple ? 0.63 : 0.89;
    colors[i3 + 2] = isPurple ? 1 : 1;

    drift[i3] = randomRange(-0.015, 0.015);
    drift[i3 + 1] = randomRange(-0.018, 0.018);
    drift[i3 + 2] = randomRange(-0.01, 0.01);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 1.15,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.52,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  const state = {
    renderer,
    scene,
    camera,
    points,
    drift,
    pointerTargetX: 0,
    pointerTargetY: 0,
    pointerX: 0,
    pointerY: 0,
  };

  return state;
};

export const initBackgroundFX = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const existing = document.getElementById("fx-background-root");
  if (existing) {
    return () => {};
  }

  const root = document.createElement("div");
  root.id = "fx-background-root";
  root.className = "fx-background-root";

  const networkCanvas = document.createElement("canvas");
  networkCanvas.className = "fx-network-canvas";

  const threeCanvas = document.createElement("canvas");
  threeCanvas.className = "fx-depth-canvas";

  root.appendChild(networkCanvas);
  root.appendChild(threeCanvas);

  document.body.prepend(root);

  const ctx = networkCanvas.getContext("2d", { alpha: true });
  if (!ctx) {
    return () => {
      root.remove();
    };
  }

  let width = window.innerWidth;
  let height = window.innerHeight;

  const stars = Array.from({ length: STAR_COUNT }, () => createStar(width, height));

  const pointer = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    active: false,
  };

  const threeState = createThreeSystem(threeCanvas);
  const basePositions = threeState.points.geometry.attributes.position.array.slice(0);

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;

    networkCanvas.width = Math.floor(width * Math.min(window.devicePixelRatio || 1, 1.6));
    networkCanvas.height = Math.floor(height * Math.min(window.devicePixelRatio || 1, 1.6));
    networkCanvas.style.width = `${width}px`;
    networkCanvas.style.height = `${height}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(networkCanvas.width / width, networkCanvas.height / height);

    threeState.camera.aspect = width / height;
    threeState.camera.updateProjectionMatrix();
    threeState.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    threeState.renderer.setSize(width, height, false);
  };

  resize();

  const onMove = (event) => {
    pointer.targetX = event.clientX;
    pointer.targetY = event.clientY;
    pointer.active = true;

    threeState.pointerTargetX = (event.clientX / width - 0.5) * 2;
    threeState.pointerTargetY = (event.clientY / height - 0.5) * 2;
  };

  const onLeave = () => {
    pointer.active = false;
    threeState.pointerTargetX = 0;
    threeState.pointerTargetY = 0;
  };

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("mouseleave", onLeave, { passive: true });

  let rafId = 0;

  const drawStar = (star, time) => {
    const twinkle = 0.72 + Math.sin(time * 0.0011 + star.twinkleOffset) * 0.22;
    const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3.6);
    glow.addColorStop(0, `rgba(226, 221, 255, ${0.52 * twinkle * star.alpha})`);
    glow.addColorStop(1, "rgba(183, 155, 255, 0)");

    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius * 3.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(246, 243, 255, ${0.58 * twinkle * star.alpha})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  };

  const animate = (time) => {
    pointer.x = lerp(pointer.x, pointer.targetX, 0.12);
    pointer.y = lerp(pointer.y, pointer.targetY, 0.12);

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i += 1) {
      const star = stars[i];

      star.x += star.vx;
      star.y += star.vy;

      if (pointer.active) {
        const dx = star.x - pointer.x;
        const dy = star.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_REPEL_DISTANCE && dist > 0.001) {
          const force = (MOUSE_REPEL_DISTANCE - dist) / MOUSE_REPEL_DISTANCE;
          star.x += (dx / dist) * force * 0.55;
          star.y += (dy / dist) * force * 0.55;
        }
      }

      if (star.x < -16) star.x = width + 16;
      if (star.x > width + 16) star.x = -16;
      if (star.y < -16) star.y = height + 16;
      if (star.y > height + 16) star.y = -16;
    }

    for (let i = 0; i < stars.length; i += 1) {
      const a = stars[i];
      for (let j = i + 1; j < stars.length; j += 1) {
        const b = stars[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < CONNECT_DISTANCE) {
          const alpha = clamp(1 - dist / CONNECT_DISTANCE, 0, 1) * 0.2;
          ctx.strokeStyle = `rgba(190, 173, 255, ${alpha})`;
          ctx.lineWidth = 0.72;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < stars.length; i += 1) {
      drawStar(stars[i], time);
    }

    threeState.pointerX = lerp(threeState.pointerX, threeState.pointerTargetX, 0.045);
    threeState.pointerY = lerp(threeState.pointerY, threeState.pointerTargetY, 0.045);

    const positionAttr = threeState.points.geometry.attributes.position;
    const positions = positionAttr.array;

    for (let i = 0; i < positions.length; i += 3) {
      const index = i / 3;
      positions[i] = basePositions[i] + threeState.drift[i] * time * 0.018;
      positions[i + 1] = basePositions[i + 1] + threeState.drift[i + 1] * time * 0.018;
      positions[i + 2] = basePositions[i + 2] + Math.sin(time * 0.0004 + index * 0.25) * 0.9;
    }

    positionAttr.needsUpdate = true;

    threeState.points.rotation.y = lerp(threeState.points.rotation.y, threeState.pointerX * 0.12, 0.035);
    threeState.points.rotation.x = lerp(threeState.points.rotation.x, -threeState.pointerY * 0.1, 0.035);
    threeState.points.position.x = lerp(threeState.points.position.x, threeState.pointerX * 2.4, 0.05);
    threeState.points.position.y = lerp(threeState.points.position.y, -threeState.pointerY * 1.8, 0.05);

    threeState.renderer.render(threeState.scene, threeState.camera);

    rafId = window.requestAnimationFrame(animate);
  };

  rafId = window.requestAnimationFrame(animate);

  return () => {
    window.cancelAnimationFrame(rafId);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseleave", onLeave);

    threeState.points.geometry.dispose();
    threeState.points.material.dispose();
    threeState.renderer.dispose();

    root.remove();
  };
};
