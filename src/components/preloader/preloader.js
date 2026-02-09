import "./preloader.css";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="preloader"
      aria-hidden="true"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="preloaderText"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>Code.</span>
        <span>Build.</span>
        <span>Create...</span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
