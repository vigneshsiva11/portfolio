import { useEffect, useState } from "react";
import {
  dismissMusicPrompt,
  getMusicState,
  initMusicController,
  subscribeMusicState,
  toggleMusic,
} from "./musicController";

export const useMusicController = () => {
  const [state, setState] = useState(getMusicState());
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    initMusicController();
    return subscribeMusicState(setState);
  }, []);

  useEffect(() => {
    if (state.isPlaying || state.hasSessionButtonInteraction || state.promptDismissed) {
      setShowPrompt(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowPrompt(true);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [state.isPlaying, state.hasSessionButtonInteraction, state.promptDismissed]);

  useEffect(() => {
    if (!showPrompt) {
      return undefined;
    }

    const autoDismissTimer = window.setTimeout(() => {
      dismissMusicPrompt();
      setShowPrompt(false);
    }, 6000);

    return () => {
      window.clearTimeout(autoDismissTimer);
    };
  }, [showPrompt]);

  const dismissPrompt = () => {
    dismissMusicPrompt();
    setShowPrompt(false);
  };

  return {
    isPlaying: state.isPlaying,
    showPrompt,
    dismissPrompt,
    toggleMusic,
  };
};
