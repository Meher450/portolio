import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "../data/portfolioData";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, type: "spring" } },
};

const levelToNumber = {
  Expert: 100,
  Advanced: 80,
  Intermediate: 60,
  Familiar: 40,
  Beginner: 20,
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills Profile"
      subtitle="Visualizing my technical proficiency across different domains."
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => {
          const chartData = items.map((skill) => ({
            subject: skill.name,
            levelScore: levelToNumber[skill.level] || 50,
            fullMark: 100,
            levelName: skill.level || "Intermediate",
          }));

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#151a23] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                {category}
              </h3>

              <div className="h-64 w-full mb-6 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                    <PolarGrid stroke="#6b7280" strokeOpacity={0.2} />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 500 }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name={category}
                      dataKey="levelScore"
                      stroke="#06b6d4"
                      strokeWidth={2}
                      fill="#06b6d4"
                      fillOpacity={0.4}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white dark:bg-[#1f2937] border border-gray-100 dark:border-white/10 rounded-lg p-3 shadow-xl">
                              <p className="font-semibold text-gray-900 dark:text-white text-sm">
                                {data.subject}
                              </p>
                              <p className="text-cyan-600 dark:text-cyan-400 text-xs font-medium mt-1">
                                {data.levelName}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col gap-1 px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1a202c] border border-gray-200 dark:border-white/5 items-center justify-center flex-grow min-w-[30%] sm:min-w-[20%] group transition-colors hover:border-cyan-400/50"
                  >
                    <div className="flex items-center gap-2">
                      {skill.icon ? (
                        <skill.icon className="text-cyan-600 dark:text-cyan-400 text-lg group-hover:text-cyan-500 transition-colors" />
                      ) : (
                        <span className="w-3 h-3 rounded-full bg-cyan-400/30" />
                      )}
                      <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold select-none group-hover:text-cyan-500 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}