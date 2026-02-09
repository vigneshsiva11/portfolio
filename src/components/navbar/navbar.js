import "./navbar.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { id: "intro", label: "Home" },
  { id: "skills", label: "About" },
  { id: "works", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + window.innerHeight * 0.45;
      let nextActive = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        if (section.offsetTop <= scrollMarker) {
          nextActive = item.id;
        }
      }

      setActiveId(nextActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`navItem${activeId === item.id ? " active" : ""}`}
          aria-current={activeId === item.id ? "page" : undefined}
          onClick={() => handleNavClick(item.id)}
        >
          {item.label}
        </button>
      ))}
    </motion.nav>
  );
};

export default Navbar;
