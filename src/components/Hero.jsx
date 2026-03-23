import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const titles = [
  "Data Analyst",
  "Machine Learning Engineer",
  "Data Scientist",
];

function useTypingAnimation(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}


export default function Hero() {
  const typedText = useTypingAnimation(titles);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob pointer-events-none"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", type: "spring", bounce: 0.4 }}
          className="relative z-20"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">Hi, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Sala Meher Raju
          </h1>
          <div className="h-8 mb-6">
            <span className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              {typedText}
            </span>
            <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8 leading-relaxed">
            Passionate about transforming raw data into actionable insights and
            building intelligent, user-centric applications. I bridge the gap
            between data science and software engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <FaEnvelope size={16} />
              Contact Me
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1gR_8qHA2L193pDXH9rdWqsd0p3t00l5i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              <FaDownload size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right side - animated profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          {/* Outer glow rings */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 lg:w-96 lg:h-96"
          >
            {/* Inner dynamic ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 border-dashed animate-spin-slow"></div>
            
            {/* The profile circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-100 to-blue-50 dark:from-dark-800 dark:to-dark-900 border border-gray-200 dark:border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.3)] flex items-center justify-center overflow-hidden z-10 group">
              <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors duration-500 z-10 pointer-events-none"></div>
              <img src="/assets/images/my_image.png" alt="Meher Raju" className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-full shadow-xl z-20 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">Open to Collaborate</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 -left-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-full shadow-xl z-20 flex items-center gap-2"
            >
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400">7+ Projects</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
