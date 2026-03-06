const lerp = (start, end, amt) => start + (end - start) * amt;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "summary",
  "[role='button']",
  "[tabindex]:not([tabindex='-1'])",
  ".workCard",
  ".workActionBtn",
  ".navItem",
  ".iconBtn",
  ".resumeBtn",
].join(",");

const setCursorVisibility = (visible, dot, ring) => {
  const opacity = visible ? "1" : "0";
  dot.style.opacity = opacity;
  ring.style.opacity = opacity;
};

export const initCursorFX = () => {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (!finePointer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const existingRoot = document.getElementById("fx-cursor-root");
  if (existingRoot) {
    return () => {};
  }

  const root = document.createElement("div");
  root.id = "fx-cursor-root";
  root.className = "fx-cursor-root";

  const dot = document.createElement("div");
  dot.className = "fx-cursor-dot";

  const ring = document.createElement("div");
  ring.className = "fx-cursor-ring";

  root.appendChild(dot);
  root.appendChild(ring);
  document.body.appendChild(root);
  document.documentElement.classList.add("fx-cursor-enabled");

  const pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    ringX: window.innerWidth / 2,
    ringY: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    vx: 0,
    vy: 0,
    angle: 0,
    visible: false,
  };

  let hoveredElement = null;
  let hoveredRect = null;
  let hoverActive = false;
  let isDown = false;
  let rafId = 0;

  const getInteractiveTarget = (target) => target?.closest(INTERACTIVE_SELECTOR) || null;

  const onMove = (event) => {
    pointer.targetX = event.clientX;
    pointer.targetY = event.clientY;
    pointer.x = event.clientX;
    pointer.y = event.clientY;

    if (!pointer.visible) {
      pointer.visible = true;
      setCursorVisibility(true, dot, ring);
    }
  };

  const onOver = (event) => {
    hoveredElement = getInteractiveTarget(event.target);
    hoverActive = Boolean(hoveredElement);
    hoveredRect = hoveredElement ? hoveredElement.getBoundingClientRect() : null;
    root.classList.toggle("is-hover", hoverActive);
  };

  const onOut = (event) => {
    if (!hoveredElement) return;

    const nextTarget = event.relatedTarget;
    if (nextTarget && hoveredElement.contains(nextTarget)) {
      return;
    }

    hoveredElement = null;
    hoveredRect = null;
    hoverActive = false;
    root.classList.remove("is-hover");
  };

  const onDown = () => {
    isDown = true;
    root.classList.add("is-down");
  };

  const onUp = () => {
    isDown = false;
    root.classList.remove("is-down");
  };

  const onLeave = () => {
    pointer.visible = false;
    setCursorVisibility(false, dot, ring);
  };

  const onEnter = () => {
    pointer.visible = true;
    setCursorVisibility(true, dot, ring);
  };

  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("mouseover", onOver, { passive: true });
  window.addEventListener("mouseout", onOut, { passive: true });
  window.addEventListener("mousedown", onDown, { passive: true });
  window.addEventListener("mouseup", onUp, { passive: true });
  window.addEventListener("mouseleave", onLeave, { passive: true });
  window.addEventListener("mouseenter", onEnter, { passive: true });

  const animate = () => {
    let targetX = pointer.targetX;
    let targetY = pointer.targetY;

    if (hoverActive && hoveredElement) {
      hoveredRect = hoveredElement.getBoundingClientRect();

      const centerX = hoveredRect.left + hoveredRect.width / 2;
      const centerY = hoveredRect.top + hoveredRect.height / 2;

      const dx = centerX - pointer.targetX;
      const dy = centerY - pointer.targetY;
      const distance = Math.hypot(dx, dy);
      const magneticDistance = Math.max(110, Math.max(hoveredRect.width, hoveredRect.height) * 1.7);
      const influence = clamp(1 - distance / magneticDistance, 0, 1);

      targetX += dx * influence * 0.22;
      targetY += dy * influence * 0.22;
    }

    pointer.ringX = lerp(pointer.ringX, targetX, 0.18);
    pointer.ringY = lerp(pointer.ringY, targetY, 0.18);

    pointer.vx = lerp(pointer.vx, pointer.ringX - targetX, 0.18);
    pointer.vy = lerp(pointer.vy, pointer.ringY - targetY, 0.18);

    const speed = Math.hypot(pointer.vx, pointer.vy);
    pointer.angle = Math.atan2(pointer.vy, pointer.vx) || 0;

    const stretch = clamp(speed * 0.34, 0, 0.28);
    const scaleX = 1 + stretch;
    const scaleY = 1 - stretch * 0.62;

    dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;

    const hoverScale = hoverActive ? 1.18 : 1;
    const downScale = isDown ? 0.92 : 1;
    const finalScale = hoverScale * downScale;
    ring.style.transform = `translate3d(${pointer.ringX}px, ${pointer.ringY}px, 0) translate(-50%, -50%) rotate(${pointer.angle}rad) scale(${scaleX * finalScale}, ${scaleY * finalScale})`;

    rafId = window.requestAnimationFrame(animate);
  };

  setCursorVisibility(false, dot, ring);
  rafId = window.requestAnimationFrame(animate);

  return () => {
    window.cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseover", onOver);
    window.removeEventListener("mouseout", onOut);
    window.removeEventListener("mousedown", onDown);
    window.removeEventListener("mouseup", onUp);
    window.removeEventListener("mouseleave", onLeave);
    window.removeEventListener("mouseenter", onEnter);
    document.documentElement.classList.remove("fx-cursor-enabled");
    root.remove();
  };
};
