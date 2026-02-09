import "./skills.css";
import { motion } from "framer-motion";
import UIDesign from "../../assets/ui-design.png";
import WebDevelopment from "../../assets/website-design.png";

const skillItems = [
  {
    img: UIDesign,
    alt: "UI/UX Design",
    title: "UI/UX Design",
    description: "Creating user interfaces with modern design principles.",
  },
  {
    img: WebDevelopment,
    alt: "Web Development",
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using HTML, CSS, JavaScript, and React.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skillsSection">
      <div className="sectionShell">
        <motion.h2
          className="skillsTitle"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          What I do
        </motion.h2>

        <motion.p
          className="skillsDesc"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I’m a passionate web developer who builds clean, user-friendly interfaces with React, HTML, CSS, and JavaScript, backed by scalable server-side solutions using Node.js, and Express. With experience in databases like MongoDB and SQL, I create full-stack applications that are visually refined, performant, and built to scale — where design meets reliable engineering.
        </motion.p>

        <div className="skillsGrid">
          {skillItems.map((skill, index) => (
            <motion.article
              key={skill.title}
              className="skillCard"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <img src={skill.img} alt={skill.alt} className="skillCardIcon" />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
