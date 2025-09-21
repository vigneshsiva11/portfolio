import "./intro.css";
import me1edit from "../../assets/me1edit.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContainer">
        <div className="introContent">
          <span className="hello">Hi I am</span>
          <h1 className="introName">Vignesh</h1>
          <h2 className="introTitle">Website Developer</h2>

          <div className="socialIcons">
            <a
              href="https://github.com/vigneshsiva11"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
            >
              <img
                src={github}
                alt="GitHub"
                onError={(e) => {
                  console.log("GitHub image failed to load:", e.target.src);
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-s-05ba4b301/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                onError={(e) => {
                  console.log("LinkedIn image failed to load:", e.target.src);
                }}
              />
            </a>
          </div>

          <div className="introButtons">
            <a
              href="/vignesh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="introImage">
          <div className="imageContainer">
            <img src={me1edit} alt="Vignesh" className="profileImage" />
            <div className="imageBackground"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
