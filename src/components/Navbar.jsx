import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { navLinks } from "../data/portfolioData";
import useScrollSpy from "../hooks/useScrollSpy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    // Initial theme check
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  const handleClick = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Meher Raju
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-white/5 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      activeSection === link.id
                        ? "text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
