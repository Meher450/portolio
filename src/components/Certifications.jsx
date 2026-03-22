import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "../data/portfolioData";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and completed coursework."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="flex flex-col h-full p-5 rounded-xl bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/5 hover:border-cyan-500/20 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <FaCertificate className="text-cyan-600 dark:text-cyan-400 text-lg flex-shrink-0 mr-2" />
              {cert.date && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/20 whitespace-nowrap mt-1">
                  {cert.date}
                </span>
              )}
            </div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-1 pr-2">
              {cert.title}
            </h3>
            <p className="text-gray-500 text-xs mb-4">{cert.issuer}</p>
            {cert.certificateLink && (
              <div className="mt-auto pt-3 border-t border-gray-100 dark:border-white/5 w-full flex items-end">
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  View Certificate
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
