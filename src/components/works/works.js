import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./works.css";

import project_image_1 from "../../assets/project_image_1.png";
import project_image_2 from "../../assets/project_image_2.png";
import project_image_4 from "../../assets/project_image_4.png";
import classless from "../../assets/classless.png";
import pathfinder from "../../assets/pathfinder.png";

const Works = () => {
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
      liveLink: "https://e-com-fe-eosin.vercel.app/",
    },
    {
      img: project_image_4,
      title: "Memory Matching Game",
      description:
        "A simple and fun Memory Matching Game built using HTML, CSS, and JavaScript, featuring icons from Font Awesome. Test your memory skills by flipping the cards and matching pairs!",
      github: "https://github.com/vigneshsiva11/memorygame",
      liveLink: "https://flip-here.vercel.app",
    },
    {
      img: project_image_1,
      title: "Currency Converter",
      description:
        "A simple, responsive Currency Converter Web App built using HTML, CSS, and JavaScript, powered by the Frankfurter API. Convert values between currencies with real-time exchange rates.",
      github: "https://github.com/vigneshsiva11/currencyconverter",
      liveLink: "https://currency-here.vercel.app",
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

  return (
    <section id="works" className="worksSection">
      <div className="sectionShell worksShell">
        <motion.h2
          className="worksTitle"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="workDesc"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Here are a few of my projects. Click to learn more about each one.
        </motion.p>

        <div className="workCards">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="workCard"
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="workContent">
                <div className="workActions">
                  <a
                    className="workActionBtn"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub />
                  </a>
                  {project.liveLink && (
                    <a
                      className="workActionBtn"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="workImageWrap">
                <img src={project.img} alt={project.title} className="worksImg" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
