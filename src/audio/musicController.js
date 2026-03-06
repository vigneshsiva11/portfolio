import portfolioMusicTrack from "./sundari.mp3";

const TARGET_VOLUME = 0.25;
const FADE_DURATION = 500;

const STORAGE_ENABLED_KEY = "portfolio_music_enabled";
const SESSION_PROMPT_DISMISSED_KEY = "portfolio_music_prompt_dismissed";

let audioElement = null;
let isPlaying = false;
let fadeFrame = 0;
let fadeToken = 0;
let hasSessionButtonInteraction = false;
let promptDismissed = false;
let shouldResumeOnInteraction = false;
let resumeListenerBound = false;
let initialized = false;

const listeners = new Set();
const clamp01 = (value) => Math.min(1, Math.max(0, value));

const readBool = (storage, key) => {
  try {
    return storage.getItem(key) === "1";
  } catch {
    return false;
  }
};

const writeBool = (storage, key, value) => {
  try {
    storage.setItem(key, value ? "1" : "0");
  } catch {
    // Ignore storage failures (private mode, quota, etc.)
  }
};

const notify = () => {
  const snapshot = getMusicState();
  listeners.forEach((listener) => listener(snapshot));
};

const ensureAudio = () => {
  if (audioElement) {
    return audioElement;
  }

  audioElement = new Audio(portfolioMusicTrack);
  audioElement.loop = true;
  audioElement.preload = "auto";
  audioElement.volume = 0;

  audioElement.addEventListener("ended", () => {
    audioElement.currentTime = 0;
    audioElement.play().catch(() => {});
  });

  return audioElement;
};

const stopFade = () => {
  if (fadeFrame) {
    window.cancelAnimationFrame(fadeFrame);
    fadeFrame = 0;
  }
};

const fadeVolume = (targetVolume, duration = FADE_DURATION) => {
  const audio = ensureAudio();
  stopFade();

  const startVolume = clamp01(audio.volume);
  const safeTarget = clamp01(targetVolume);
  const safeDuration = Math.max(1, duration);
  const token = ++fadeToken;
  const startTime = performance.now();

  return new Promise((resolve) => {
    const tick = (now) => {
      if (token !== fadeToken) {
        resolve();
        return;
      }

      const progress = Math.min(1, (now - startTime) / safeDuration);
      const nextVolume = startVolume + (safeTarget - startVolume) * progress;
      audio.volume = clamp01(nextVolume);

      if (progress < 1) {
        fadeFrame = window.requestAnimationFrame(tick);
        return;
      }

      fadeFrame = 0;
      resolve();
    };

    fadeFrame = window.requestAnimationFrame(tick);
  });
};

const saveEnabledPreference = (value) => {
  writeBool(localStorage, STORAGE_ENABLED_KEY, value);
};

const bindResumeOnInteraction = () => {
  if (resumeListenerBound || !shouldResumeOnInteraction) {
    return;
  }

  const resume = async () => {
    window.removeEventListener("pointerdown", resume);
    window.removeEventListener("keydown", resume);
    window.removeEventListener("touchstart", resume);
    resumeListenerBound = false;

    if (!shouldResumeOnInteraction) {
      return;
    }

    shouldResumeOnInteraction = false;
    await playMusic();
  };

  resumeListenerBound = true;
  window.addEventListener("pointerdown", resume, { passive: true, once: true });
  window.addEventListener("keydown", resume, { passive: true, once: true });
  window.addEventListener("touchstart", resume, { passive: true, once: true });
};

export const initMusicController = () => {
  if (initialized) {
    return;
  }

  ensureAudio();

  promptDismissed = readBool(sessionStorage, SESSION_PROMPT_DISMISSED_KEY);

  const enabledOnLastVisit = readBool(localStorage, STORAGE_ENABLED_KEY);
  shouldResumeOnInteraction = enabledOnLastVisit;
  bindResumeOnInteraction();

  initialized = true;
  notify();
};

export const getMusicState = () => ({
  isPlaying,
  hasSessionButtonInteraction,
  promptDismissed,
});

export const subscribeMusicState = (listener) => {
  listeners.add(listener);
  listener(getMusicState());

  return () => {
    listeners.delete(listener);
  };
};

export const dismissMusicPrompt = () => {
  promptDismissed = true;
  writeBool(sessionStorage, SESSION_PROMPT_DISMISSED_KEY, true);
  notify();
};

export const playMusic = async () => {
  const audio = ensureAudio();
  if (isPlaying) {
    return true;
  }

  try {
    audio.volume = 0;
    await audio.play();
    await fadeVolume(TARGET_VOLUME);
    isPlaying = true;
    shouldResumeOnInteraction = false;
    saveEnabledPreference(true);
    notify();
    return true;
  } catch {
    isPlaying = false;
    notify();
    return false;
  }
};

export const pauseMusic = async () => {
  const audio = ensureAudio();
  if (!isPlaying) {
    audio.pause();
    return;
  }

  isPlaying = false;
  notify();
  await fadeVolume(0);
  audio.pause();
  shouldResumeOnInteraction = false;
  saveEnabledPreference(false);
};

export const toggleMusic = async () => {
  hasSessionButtonInteraction = true;
  shouldResumeOnInteraction = false;

  if (isPlaying) {
    await pauseMusic();
    return false;
  }

  await playMusic();
  return true;
};
