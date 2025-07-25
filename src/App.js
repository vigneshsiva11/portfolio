import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Certifications from "./components/certificates/certificates"; 


function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App;
