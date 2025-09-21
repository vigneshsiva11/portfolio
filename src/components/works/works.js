import React, { useState } from "react";
import "./works.css";

import project_image_1 from "../../assets/project_image_1.png";
import project_image_2 from "../../assets/project_image_2.png";
import project_image_4 from "../../assets/project_image_4.png";
import classless from "../../assets/classless.png";

import { FaGithub } from "react-icons/fa";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: classless,
      title: "Classless - Inclusive AI Tutor",
      description:
        "Classless is an inclusive AI tutor that ensures every student can learn, regardless of their access to technology. Features include: Smartphone/Web App with AI tutor and step-by-step explanations in local languages, SMS Mode for feature phones where students text questions and receive AI-powered answers, IVR (Call-in Tutor) for students to call a toll-free number and ask in their language to get spoken answers, and Community Learning Stations with shared devices in schools for group learning.",
      github: "https://github.com/vigneshsiva11/classless-app",
    },
    {
      img: project_image_2,
      title: "E-Commerce Website",
      description:
        "A modern, responsive E-Commerce Web Application built with HTML, CSS, and Font Awesome for UI icons. This comprehensive e-commerce template features multiple pages including home, shop, about, and contact sections with a fully designed shopping front end.",
      github: "https://github.com/vigneshsiva11/ecommerce",
    },
    {
      img: project_image_4,
      title: "Memory Matching Game",
      description:
        "A simple and fun Memory Matching Game built using HTML, CSS, and JavaScript, featuring icons from Font Awesome. Test your memory skills by flipping the cards and matching pairs!",
      github: "https://github.com/vigneshsiva11/memorygame",
    },
    {
      img: project_image_1,
      title: "Currency Converter",
      description:
        "A simple, responsive Currency Converter Web App built using HTML, CSS, and JavaScript, powered by the Frankfurter API. Convert values between currencies with real-time exchange rates.",
      github: "https://github.com/vigneshsiva11/currencyconverter",
    },
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="workDesc">
        Here are a few of my projects. Click to learn more about each one.
      </span>

      <div className="worksImgs">
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.img}
            alt={project.title}
            className="worksImg"
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modalOverlay" onClick={() => setSelectedProject(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="modalImg"
            />
            <h3>{selectedProject.title}</h3>
            <p className="modalDesc">{selectedProject.description}</p>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="githubLink"
            >
              <FaGithub className="modalGithubIcon" />
            </a>

            <p className="modalExitText">Click anywhere to exit</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
