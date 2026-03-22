import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic background."
    >
      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-2 md:left-4 top-1.5 w-5 h-5 rounded-full bg-white dark:bg-dark-900 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center">
                <FaGraduationCap className="text-cyan-600 dark:text-cyan-400 text-[8px]" />
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/5 hover:border-cyan-500/20 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
                  <h3 className="text-gray-900 dark:text-white font-bold text-sm">{edu.degree}</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/20 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.institution}</p>
                <p className="text-cyan-600 dark:text-cyan-400/70 text-xs font-mono mt-1">
                  {edu.score}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
