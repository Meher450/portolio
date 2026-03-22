import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 -ml-48 -mt-48 rounded-full pointer-events-none z-[-1] hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(0,0,0,0) 70%)"
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
    </>
  );
}