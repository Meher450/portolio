import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Milestones that reflect my commitment."
    >
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {achievements.map((item, i) => (
          <motion.a
            href={item.certificateLink !== "#" ? item.certificateLink : undefined}
            target={item.certificateLink !== "#" ? "_blank" : undefined}
            rel={item.certificateLink !== "#" ? "noopener noreferrer" : undefined}
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`block p-6 rounded-xl bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/5 transition-all duration-300 text-center relative group overflow-hidden ${
              item.certificateLink && item.certificateLink !== "#" 
                ? "cursor-pointer hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20" 
                : ""
            }`}
          >
            {/* Glow effect on hover */}
            {item.certificateLink && item.certificateLink !== "#" && (
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 dark:group-hover:from-cyan-500/10 group-hover:to-purple-500/10 dark:group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
            )}

            {/* Top Right Elements (Date and External Link Icon) */}
            <div className="absolute top-4 right-4 flex items-center z-20">
              {item.date && (
                <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-cyan-50 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/20 whitespace-nowrap transition-transform duration-300 group-hover:-translate-x-6">
                  {item.date}
                </span>
              )}
              {item.certificateLink && item.certificateLink !== "#" && (
                <div className="absolute right-0 text-cyan-500 dark:text-cyan-400 transition-all duration-300 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  <FaExternalLinkAlt size={14} />
                </div>
              )}
            </div>

            <div className="w-12 h-12 rounded-full mt-2 bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-110 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-400/20 transition-all duration-300">
              <item.icon className="text-cyan-600 dark:text-cyan-400 text-xl" />
            </div>
            
            <h3 className="text-gray-900 dark:text-white font-bold mb-2 relative z-10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative z-10">
              {item.description}
            </p>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
