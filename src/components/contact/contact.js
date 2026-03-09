import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured yet.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey }
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setStatus({
        type: "success",
        message: "Email sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send email. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

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
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              className="contactInput"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="contactInput"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="contactTextarea"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
            <button className="emailCta" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send email"}
            </button>
            {status.message && (
              <p className={`contactStatus ${status.type}`}>{status.message}</p>
            )}
          </form>
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
