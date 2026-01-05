import React, { useState, useRef } from "react";
import "./works.css";

import project_image_1 from "../../assets/project_image_1.png";
import project_image_2 from "../../assets/project_image_2.png";
import project_image_4 from "../../assets/project_image_4.png";
import classless from "../../assets/classless.png";
import pathfinder from "../../assets/pathfinder.png";

import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

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
    {
      img: pathfinder,
      title: "Pathfinding Visualizer",
      description:
        "A fully interactive and responsive web application to visualize various pathfinding algorithms and maze generation techniques. Built with React, TypeScript, and Vite, this tool helps users understand how different algorithms navigate through a grid to find the shortest path between two points.",
      github: "https://github.com/vigneshsiva11/path-finder-visualizer",
      liveLink: "https://path-finder-algo-sigma.vercel.app/",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="workDesc">
        Here are a few of my projects. Click to learn more about each one.
      </span>

      <div className="carouselContainer">
        <button className="carouselButton left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="worksImgs" ref={scrollContainerRef}>
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

        <button className="carouselButton right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
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

            <div className="modalLinks">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modalButton githubButton"
              >
                <FaGithub className="buttonIcon" />
                <span>GitHub</span>
              </a>

              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modalButton liveButton"
                >
                  <FaExternalLinkAlt className="buttonIcon" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <p className="modalExitText">Click anywhere to exit</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
