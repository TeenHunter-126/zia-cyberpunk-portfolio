"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  title,
  subtitle,
  color = "cyan",
}: {
  index: string;
  title: string;
  subtitle?: string;
  color?: "cyan" | "magenta" | "purple" | "pink";
}) {
  const colorMap: Record<string, string> = {
    cyan: "neon-cyan",
    magenta: "neon-magenta",
    purple: "neon-purple",
    pink: "neon-pink",
  };

  const borderMap: Record<string, string> = {
    cyan: "border-cyan-400/40",
    magenta: "border-pink-400/40",
    purple: "border-purple-500/40",
    pink: "border-pink-400/40",
  };

  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-2"
      >
        <span
          className={`text-sm font-mono tracking-widest text-slate-500 ${colorMap[color]}`}
          style={{ fontFamily: "var(--font-share-tech)" }}
        >
          [ {index} ]
        </span>
        <div className={`h-px flex-1 bg-gradient-to-r ${borderMap[color]} to-transparent max-w-[80px]`} style={{ background: "linear-gradient(90deg, currentColor, transparent)" }} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display font-black text-2xl xs:text-3xl sm:text-4xl lg:text-5xl tracking-tight break-words ${colorMap[color]}`}
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-sm sm:text-base lg:text-lg font-light text-slate-400 max-w-2xl"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
