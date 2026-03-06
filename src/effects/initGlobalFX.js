import { initBackgroundFX } from "./backgroundFX";
import { initCursorFX } from "./cursorFX";

let initialized = false;
let cleanupFns = [];

export const initGlobalFX = () => {
  if (initialized) {
    return () => {};
  }

  initialized = true;
  cleanupFns = [initBackgroundFX(), initCursorFX()].filter(Boolean);

  return () => {
    cleanupFns.forEach((cleanup) => {
      if (typeof cleanup === "function") {
        cleanup();
      }
    });

    cleanupFns = [];
    initialized = false;
  };
};
