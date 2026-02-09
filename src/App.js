import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import TechStack from "./components/tech stack/techstack";
import Cursor from "./components/cursor/cursor";
import Preloader from "./components/preloader/preloader";

function Home() {
  return (
    <motion.div
      className="main-container"
      initial={{ opacity: 0, y: 14, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <Cursor />
      <Navbar />
      <Intro />
      <Skills />
      <TechStack />
      <Works />
      <Contact />
    </motion.div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setShowHome(true), 1850);
    const hideIntroTimer = setTimeout(() => setShowIntro(false), 2250);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(hideIntroTimer);
    };
  }, []);

  return (
    <Router>
      <AnimatePresence>{showIntro && <Preloader />}</AnimatePresence>
      <Routes>
        <Route path="/" element={showHome ? <Home /> : null} />
      </Routes>
    </Router>
  );
}

export default App;
