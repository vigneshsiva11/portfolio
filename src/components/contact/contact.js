import React from "react";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <div className="sectionShell contactShell">
        <motion.div
          className="contactLeft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contactPageTitle">Contact Me!</h2>
          <p className="constDesc">
            Please fill out the form below to discuss any work opportunities.
          </p>
          <a
            className="emailCta"
            href="mailto:vigneshsiva11@gmail.com?subject=Lets%20work%20together!&body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
            target="_blank"
            rel="noopener noreferrer"
          >
            Send me an email
          </a>
        </motion.div>

        <motion.div
          className="contactRight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="contactSocials">
            <a
              href="https://github.com/vigneshsiva11"
              target="_blank"
              rel="noopener noreferrer"
              className="contactSocialCode"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-s-05ba4b301/"
              target="_blank"
              rel="noopener noreferrer"
              className="contactSocialCode"
            >
              LN
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
