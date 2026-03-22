import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { experience } from "../data/portfolioData";
import { ScrollStack, ScrollStackItem } from "./ScrollStack";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Professional experience and contributions."
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />

        <ScrollStack itemDistance={100}>
          {experience.map((exp, i) => (
            <ScrollStackItem
              key={i}
              index={i}
              total={experience.length}
              itemScale={0.03}
              itemStackDistance={30}
              stackPosition="20%"
              scaleEndPosition="10%"
              baseScale={0.9}
              rotationAmount={0}
              blurAmount={1}
              useWindowScroll={true}
            >
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2, type: "spring", bounce: 0.4 }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 top-1 w-6 h-6 rounded-full bg-white dark:bg-dark-900 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300">
                <FaBriefcase className="text-cyan-500 dark:text-cyan-400 group-hover:text-white dark:group-hover:text-white text-[10px] transition-colors duration-300" />
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/5 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:-translate-y-1 shadow-sm group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400/80 font-medium text-sm mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/20 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.contributions.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                    >
                      <span className="text-cyan-500 dark:text-cyan-400 mt-1.5 text-[6px]">&#9679;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {exp.certificateLink && (
                  <div className="mt-5 relative z-10">
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105"
                    >
                      View Certificate
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </SectionWrapper>
  );
}
