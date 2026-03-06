import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './effects/effects.css';
import { initGlobalFX } from './effects/initGlobalFX';
import { initMusicController } from './audio/musicController';

initGlobalFX();
initMusicController();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

