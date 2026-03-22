import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaCode, FaLightbulb } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  {
    icon: FaBrain,
    title: "Analytical Thinking",
    text: "Skilled at breaking complex problems into data-driven solutions.",
  },
  {
    icon: FaChartLine,
    title: "Data-Driven Approach",
    text: "Every decision backed by thorough analysis and meaningful metrics.",
  },
  {
    icon: FaCode,
    title: "Clean Engineering",
    text: "Writing modular, maintainable code with production-ready standards.",
  },
  {
    icon: FaLightbulb,
    title: "Continuous Learner",
    text: "Always exploring new technologies and sharpening existing skills.",
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A brief look at who I am and what drives me."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> Sala Meher Raju</span>,
            a pre-final year B.Tech student with a deep passion for{" "}
            <span className="text-gray-900 dark:text-white font-medium">Data Science</span>,{" "}
            <span className="text-gray-900 dark:text-white font-medium">Data Analytics</span>,
            and{" "}
            <span className="text-gray-900 dark:text-white font-medium">
              Machine Learning
            </span>
            .
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I enjoy working with data to solve real world problems by combining analytical thinking with practical implementation. From building predictive models and analyzing large datasets to creating interactive dashboards and deploying ML applications, I focus on turning data into meaningful insights and solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            My experience includes working as a Data Analyst intern and developing projects across healthcare analytics, business intelligence, and AI driven applications. I have worked with tools like Python, SQL, Power BI, and modern ML frameworks to build end to end solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I aim to approach problems with clarity, build scalable solutions, and use data to drive decisions that create real impact.
          </p>
        </motion.div>

        {/* Highlight badges */}
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-xl bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/5 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-colors shadow-sm"
            >
              <item.icon className="text-cyan-600 dark:text-cyan-400 text-xl mb-3" />
              <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
