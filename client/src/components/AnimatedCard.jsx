import { motion } from "framer-motion";
import { scaleIn } from "../lib/motion.js";

export default function AnimatedCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={scaleIn}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
}
