import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) {
      return undefined;
    }

    const root = document.documentElement;

    const onMove = (event) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const isInteractive = (target) =>
      Boolean(
        target?.closest(
          "a, button, input, textarea, .workCard, .navItem, .workActionBtn, .iconBtn, .resumeBtn"
        )
      );

    const onOver = (event) => {
      if (isInteractive(event.target)) {
        root.classList.add("is-cursor-hover");
      }
    };

    const onOut = (event) => {
      if (isInteractive(event.target)) {
        root.classList.remove("is-cursor-hover");
      }
    };

    const onDown = () => root.classList.add("is-cursor-down");
    const onUp = () => root.classList.remove("is-cursor-down");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      root.classList.remove("is-cursor-hover");
      root.classList.remove("is-cursor-down");
    };
  }, []);

  return (
    <>
      <span aria-hidden="true" className="cursorRing" />
      <span aria-hidden="true" className="cursorDot" />
    </>
  );
};

export default Cursor;
