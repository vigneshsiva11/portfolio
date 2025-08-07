import './techstack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faJava, 
  faGitAlt, 
  faGithub,
  faNodeJs,
  faFigma
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCode, 
  faServer,
  faWind
} from '@fortawesome/free-solid-svg-icons';

const TechStack = () => {
  const frontendTechs = [
    { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: faCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
    { name: 'React', icon: faReact, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: faWind, color: '#06B6D4' }
  ];

  const backendTechs = [
    { name: 'Java', icon: faJava, color: '#ED8B00' },
    { name: 'Node.js', icon: faNodeJs, color: '#339933' },
    { name: 'Express.js', icon: faServer, color: '#000000' }
  ];

  const programmingLanguages = [
    { name: 'Java', icon: faJava, color: '#ED8B00' },
    { name: 'C++', icon: faCode, color: '#00599C' }
  ];

  const databases = [
    { name: 'SQL', icon: faDatabase, color: '#336791' }
  ];

  const tools = [
    { name: 'Git', icon: faGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: faGithub, color: '#181717' },
    { name: 'VS Code', icon: faCode, color: '#007ACC' },
    { name: 'Figma', icon: faFigma, color: '#F24E1E' }
  ];

  return (
    <section id='techstack'>
      <h2 className="techStackTitle">Tech Stack</h2>
      <span className="techStackDesc">
        Technologies and tools I use to bring ideas to life
      </span>

      <div className="techStackContainer">
        {/* Frontend Technologies */}
        <div className="techCategory">
          <h3 className="categoryTitle">Frontend</h3>
          <div className="techGrid">
            {frontendTechs.map((tech, index) => (
              <div key={index} className="techItem">
                <div className="techIcon">
                  <FontAwesomeIcon 
                    icon={tech.icon} 
                    style={{ color: tech.color, fontSize: '2.5rem' }}
                  />
                </div>
                <div className="techInfo">
                  <h4>{tech.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="techCategory">
          <h3 className="categoryTitle">Backend</h3>
          <div className="techGrid">
            {backendTechs.map((tech, index) => (
              <div key={index} className="techItem">
                <div className="techIcon">
                  <FontAwesomeIcon 
                    icon={tech.icon} 
                    style={{ color: tech.color, fontSize: '2.5rem' }}
                  />
                </div>
                <div className="techInfo">
                  <h4>{tech.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="techCategory">
          <h3 className="categoryTitle">Programming Languages</h3>
          <div className="techGrid">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="techItem">
                <div className="techIcon">
                  <FontAwesomeIcon 
                    icon={lang.icon} 
                    style={{ color: lang.color, fontSize: '2.5rem' }}
                  />
                </div>
                <div className="techInfo">
                  <h4>{lang.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="techCategory">
          <h3 className="categoryTitle">Database</h3>
          <div className="techGrid">
            {databases.map((database, index) => (
              <div key={index} className="techItem">
                <div className="techIcon">
                  <FontAwesomeIcon 
                    icon={database.icon} 
                    style={{ color: database.color, fontSize: '2.5rem' }}
                  />
                </div>
                <div className="techInfo">
                  <h4>{database.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Others */}
        <div className="techCategory">
          <h3 className="categoryTitle">Tools & Others</h3>
          <div className="toolsGrid">
            {tools.map((tool, index) => (
              <div key={index} className="toolItem">
                <div className="toolIcon">
                  <FontAwesomeIcon 
                    icon={tool.icon} 
                    style={{ color: tool.color, fontSize: '2.5rem' }}
                  />
                </div>
                <span className="toolName">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;