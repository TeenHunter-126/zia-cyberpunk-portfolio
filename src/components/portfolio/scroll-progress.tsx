"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60] bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500"
    >
      <div className="absolute inset-0 blur-sm bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 opacity-70" />
    </motion.div>
  );
}
