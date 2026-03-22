import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top configuration
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(6, 182, 212, 0.6)" }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-cyan-600 text-white shadow-lg cursor-pointer border border-cyan-400 dark:bg-cyan-500 dark:border-cyan-400 hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-colors flex items-center justify-center pointer-events-auto"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
