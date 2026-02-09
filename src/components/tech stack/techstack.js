import "./techstack.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faJava,
  faGitAlt,
  faGithub,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faServer,
  faWind,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const techGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: faHtml5, color: "#E34F26" },
      { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
      { name: "React", icon: faReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: faWind, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", icon: faJava, color: "#ED8B00" },
      { name: "Node.js", icon: faNodeJs, color: "#339933" },
      { name: "Express.js", icon: faServer, color: "#D6D6D6" },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: faJava, color: "#ED8B00" },
      { name: "C++", icon: faCode, color: "#00599C" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "SQL", icon: faDatabase, color: "#336791" },
      { name: "MongoDB", icon: faLeaf, color: "#47A248" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", icon: faGitAlt, color: "#F05032" },
      { name: "GitHub", icon: faGithub, color: "#F9F9F9" },
      { name: "VS Code", icon: faCode, color: "#007ACC" },
      { name: "Figma", icon: faFigma, color: "#F24E1E" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="techSection">
      <div className="sectionShell">
        <motion.h2
          className="techTitle"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <motion.p
          className="techDesc"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <div className="techGroups">
          {techGroups.map((group, gIndex) => (
            <motion.article
              key={group.title}
              className="techGroup"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: gIndex * 0.06 }}
            >
              <h3>{group.title}</h3>
              <div className="techItems">
                {group.items.map((item) => (
                  <div key={`${group.title}-${item.name}`} className="techItemCard">
                    <span className="techIconWrap">
                      <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} />
                    </span>
                    <span className="techLabel">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
