import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDevelopment from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skilltitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design principles with proficiency in HTML, CSS, and
        JavaScript. In addition to front-end design, I also work as a Java
        developer, building scalable backend systems using Java, Spring Boot,
        and Hibernate. This combination of design and development skills allows
        me to create full-stack web applications that are both functional and
        visually engaging.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={UIDesign}
            alt="UI/UX Design"
            className="skillBarImg"
            onError={(e) => {
              console.log("UI Design image failed to load:", e.target.src);
            }}
          />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Creating user interfaces with modern design principles.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={WebDevelopment}
            alt="Web Development"
            className="skillBarImg"
            onError={(e) => {
              console.log(
                "Web Development image failed to load:",
                e.target.src
              );
            }}
          />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              Building responsive and dynamic websites using HTML, CSS,
              JavaScript, and React.
            </p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={AppDesign}
            alt="Java Development"
            className="skillBarImg"
            onError={(e) => {
              console.log(
                "Java Development image failed to load:",
                e.target.src
              );
            }}
          />
          <div className="skillBarText">
            <h2>Java Development</h2>
            <p>
              Developing robust and scalable backend systems using Java, Spring
              Boot, and Hibernate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
