import "./intro.css";
import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";
import me1edit from "../../assets/me1edit.jpg";
import { useMusicController } from "../../audio/useMusicController";

const Intro = () => {
  const { isPlaying, showPrompt, dismissPrompt, toggleMusic } = useMusicController();

  return (
    <section id="intro" className="introSection">
      <div className="introBackdrop" />
      <div className="introTint" />

      <div className="sectionShell introCenter">
        <motion.p
          className="hello"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55 }}
        >
          Hi I am
        </motion.p>

        <motion.h1
          className="introName"
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Vignesh
        </motion.h1>

        <motion.h2
          className="introTitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Website Developer
        </motion.h2>

        <motion.div
          className="introImageWrap"
          initial={{ opacity: 0, y: 60, scale: 0.88 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <img src={me1edit} alt="Vignesh" className="profileImage" />
        </motion.div>
      </div>

      <div className="sectionShell introBottom">
        <p className="introPitch">
          I am a skilled and passionate web designer with experience in creating
          visually appealing and user-friendly websites.
        </p>

        <div className="introButtons">
          <button
            type="button"
            onClick={toggleMusic}
            className={`actionBtn actionBtnSocial musicToggleBtn ${isPlaying ? "isPlaying" : ""}`}
            aria-label={isPlaying ? "Pause background music" : "Play background music"}
            title={isPlaying ? "Pause music" : "Play music"}
          >
            <span className="musicIcon" aria-hidden="true">
              <FaMusic className="musicGlyph" />
            </span>
          </button>
          <a
            href="/vignesh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="actionBtn actionBtnResume"
          >
            Resume
          </a>
          <a
            href="https://github.com/vigneshsiva11"
            target="_blank"
            rel="noopener noreferrer"
            className="actionBtn actionBtnSocial"
          >
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/vignesh-s-05ba4b301/"
            target="_blank"
            rel="noopener noreferrer"
            className="actionBtn actionBtnSocial"
          >
            LN
          </a>
        </div>
      </div>

      <div className={`audioPrompt ${showPrompt ? "isVisible" : ""}`} role="status" aria-live="polite">
        <button
          type="button"
          className="audioPromptClose"
          aria-label="Dismiss audio suggestion"
          onClick={dismissPrompt}
        >
          x
        </button>
        <div className="audioPromptIcon" aria-hidden="true">
          <FaMusic />
        </div>
        <div className="audioPromptText">
          <strong>Audio Experience</strong>
          <p>Turn on audio to enjoy the music while browsing the portfolio.</p>
        </div>
        <span className="audioPromptProgress" aria-hidden="true">
          <span className="audioPromptProgressBar" />
        </span>
      </div>
    </section>
  );
};

export default Intro;
