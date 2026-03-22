import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollStack = ({ children }) => {
  return (
    <div className="relative w-full flex flex-col gap-10 lg:gap-24 mb-20 lg:mb-40">
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          index,
          total: React.Children.count(children),
        });
      })}
    </div>
  );
};

export const ScrollStackItem = ({
  children,
  index = 0,
  itemScale = 0.04,
  stackPosition = 15
}) => {
  const trackerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackerRef,
    offset: [`start ${stackPosition}vh`, `start -100vh`],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - itemScale]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(1.5px)"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.4]);
  const topOffset = `calc(${stackPosition}vh + ${index * 25}px)`;

  return (
    <div className="relative w-full h-auto z-0" style={{ zIndex: index }}>
      <div ref={trackerRef} className="absolute inset-x-0 top-0 h-[100vh] pointer-events-none invisible" />
      <motion.div
        style={{
          position: "sticky",
          top: topOffset,
          scale,
          filter,
          transformOrigin: "top center",
        }}
        className="w-full relative will-change-transform"
      >
        <motion.div 
          className="absolute inset-0 bg-black/5 dark:bg-black/50 rounded-xl pointer-events-none z-50 transition-opacity duration-300"
          style={{ opacity }}
        />
        {children}
      </motion.div>
    </div>
  );
};
