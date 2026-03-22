import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 text-center mt-20 relative overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-gray-500 text-sm flex items-center justify-center gap-1.5"
      >
        Built with <FaHeart className="text-cyan-400 text-xs animate-pulse" /> by Meher Raju
      </motion.p>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 text-xs mt-2"
      >
        &copy; {new Date().getFullYear()} All rights reserved.
      </motion.p>
    </footer>
  );
}
