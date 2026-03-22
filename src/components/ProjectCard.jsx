import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

export default function ProjectCard({ project, index, containerAnimated }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(project.image) && project.image.length > 1) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % project.image.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [project.image]);

  const CardWrapper = containerAnimated ? "div" : motion.div;
  const animationProps = containerAnimated
    ? {}
    : {
        initial: { opacity: 0, y: 60, scale: 0.95 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 },
      };

  return (
    <CardWrapper
      {...animationProps}
      className={`flex flex-col h-full relative p-6 rounded-2xl border transition-all duration-300 group overflow-hidden ${
        project.featured
          ? "bg-gradient-to-br from-cyan-50 dark:from-dark-800/80 to-blue-50 dark:to-cyan-900/10 border-cyan-400/40 dark:border-cyan-500/20 hover:border-cyan-500 dark:hover:border-cyan-400/40"
          : "bg-white dark:bg-dark-800/60 border-gray-200 dark:border-white/5 hover:border-cyan-400/50 dark:hover:border-cyan-500/20"
      }`}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 dark:group-hover:from-cyan-500/10 group-hover:to-purple-500/5 dark:group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none z-0" />

      {/* Image Preview */}
      {project.image && (
        <div className="relative w-full aspect-video mb-5 overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 z-10 flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={Array.isArray(project.image) ? currentImgIndex : "single"}
              src={Array.isArray(project.image) ? project.image[currentImgIndex] : project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          {Array.isArray(project.image) && project.image.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {project.image.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentImgIndex ? "bg-cyan-400 w-3" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
          {project.featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1 text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500 text-white shadow-lg pointer-events-none">
              <FaStar size={10} className="animate-pulse" />
              Featured
            </div>
          )}
        </div>
      )}

      {/* Header section with Title and Date */}
      <div className="flex justify-between items-start gap-4 mb-3 z-10 relative">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        {project.date && (
          <span className="text-xs font-mono px-2 py-1 flex-shrink-0 rounded-full bg-cyan-50 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/20 whitespace-nowrap">
            {project.date}
          </span>
        )}
      </div>

      {/* Single combined description */}
      <div className="mb-5 z-10 relative flex-grow">
        <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5 relative z-10 flex-shrink-0">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 relative z-10 flex-shrink-0 mt-auto">
        {project.live && project.live !== "#" && project.live.trim() !== "" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 hover:bg-cyan-200 dark:hover:bg-cyan-500/20 transition-colors"
          >
            <FaExternalLinkAlt size={12} />
            Live
          </a>
        )}
        {project.github && project.github !== "#" && project.github.trim() !== "" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-800 text-white border border-gray-700 dark:border-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors transform hover:scale-105 shadow-md"
          >
            <FaGithub size={14} />
            GitHub
          </a>
        )}
      </div>
    </CardWrapper>
  );
}
