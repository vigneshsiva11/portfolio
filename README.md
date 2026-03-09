# Vignesh Portfolio

A modern single-page developer portfolio built with React and Framer Motion, featuring smooth section-based navigation, animated project showcases, an interactive particle background, custom cursor effects, and optional background music.

## Overview

This project is a personal portfolio website designed to present:

- Intro / hero section
- Skills and capabilities
- Tech stack grouping
- Project highlights with GitHub and live links
- Contact call-to-action

The UI is optimized for a polished portfolio experience with motion and subtle ambient effects while keeping content readability as the priority.

## Key Features

- Section-based single-page layout (`Home`, `About`, `Work`, `Contact`)
- Framer Motion entrance and scroll-triggered animations
- Fixed interactive background FX:
  - Starfield particles
  - Neural connection lines
  - Three.js depth particle layer
- Custom cursor system with hover + motion behavior
- Music controller:
  - Dedicated music toggle button in hero controls
  - Fade-in/fade-out playback transitions
  - Looping playback
  - Local/session persistence for music preference and prompt dismiss state
  - Floating "Audio Experience" suggestion prompt
- Responsive design for desktop and mobile viewports

## Tech Stack

- React 19
- React Router
- Framer Motion
- Three.js
- React Icons
- Font Awesome (React wrapper)
- CSS (component-scoped + global styles)
- Create React App toolchain (`react-scripts`)


## Getting Started

### Install

```bash
npm install
```

### Run in development

```bash
npm start
```

App runs at `http://localhost:3000`.

### Production build

```bash
npm run build
```

## Scripts

- `npm start` - start local dev server
- `npm run build` - create production build
- `npm test` - run test runner
- `npm run eject` - eject CRA config (irreversible)


## Effects System Notes

Global effects are initialized once in `src/index.js`:

- `initGlobalFX()` for background + cursor overlays
- `initMusicController()` for global audio lifecycle

This ensures effects and audio state persist smoothly during in-app navigation.