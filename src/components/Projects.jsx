import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Data Science", "Data Analytics", "Machine Learning"];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Real-world applications I've designed and built."
    >
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full overflow-hidden ${
              filter === cat
                ? "text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-dark-800"
            }`}
          >
            {filter === cat && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-cyan-500 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              key={project.title}
              className="h-full"
            >
              <ProjectCard project={project} index={i} containerAnimated />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
