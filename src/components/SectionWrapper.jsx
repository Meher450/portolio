import { motion } from "framer-motion";

export default function SectionWrapper({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mb-3 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] dark:drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500"
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
