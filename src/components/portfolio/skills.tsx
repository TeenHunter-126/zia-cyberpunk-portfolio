"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Bot,
  Boxes,
  Brain,
  Factory,
  CircuitBoard,
  Terminal,
  Wrench,
  Cog,
} from "lucide-react";
import SectionHeading from "./section-heading";

type Skill = {
  name: string;
  level: number; // 0-100
};

type SkillGroup = {
  icon: typeof Code2;
  title: string;
  color: string;
  accent: string;
  skills: Skill[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Code2,
    title: "PROGRAMMING",
    color: "neon-cyan",
    accent: "#00f0ff",
    skills: [
      { name: "C / C++", level: 88 },
      { name: "Python", level: 85 },
      { name: "PLC Ladder Logic", level: 90 },
    ],
  },
  {
    icon: Bot,
    title: "ROBOTICS",
    color: "neon-magenta",
    accent: "#ff00aa",
    skills: [
      { name: "HRI Systems", level: 82 },
      { name: "Sociable Robots", level: 80 },
      { name: "ASL Recognition", level: 78 },
    ],
  },
  {
    icon: Cpu,
    title: "EMBEDDED SYSTEMS",
    color: "neon-purple",
    accent: "#b537f2",
    skills: [
      { name: "TIVA Microcontroller", level: 85 },
      { name: "Sensor Integration", level: 88 },
      { name: "Embedded C++", level: 86 },
    ],
  },
  {
    icon: Brain,
    title: "MACHINE LEARNING",
    color: "neon-pink",
    accent: "#ff2a6d",
    skills: [
      { name: "Computer Vision", level: 82 },
      { name: "OpenCV / MediaPipe", level: 85 },
      { name: "Emotion Recognition", level: 75 },
    ],
  },
  {
    icon: Factory,
    title: "INDUSTRIAL AUTOMATION",
    color: "neon-yellow",
    accent: "#fff200",
    skills: [
      { name: "Siemens TIA Portal", level: 88 },
      { name: "Mitsubishi GX Developer", level: 80 },
      { name: "ATS / HMI Design", level: 84 },
    ],
  },
  {
    icon: Boxes,
    title: "MODELING & SIMULATION",
    color: "neon-cyan",
    accent: "#00f0ff",
    skills: [
      { name: "SolidWorks", level: 85 },
      { name: "MATLAB / Simulink", level: 82 },
      { name: "ANSYS", level: 75 },
    ],
  },
];

const SOFTWARE = [
  "MATLAB",
  "ANSYS",
  "Simulink",
  "SolidWorks",
  "EasyEDA",
  "MS Visual Studio",
  "MS Office",
  "Open PLC Editor",
  "AutoCAD",
  "Micro Vision Keil",
  "Energia IDE",
  "Proteus",
  "TIA Portal",
  "Canva",
  "Tkinter",
  "OpenCV",
  "MediaPipe",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          index="02"
          title="SKILLS_MATRIX"
          subtitle="Technical capabilities across programming, robotics, embedded systems, machine learning, and industrial automation."
          color="magenta"
        />

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative gradient-border p-4 sm:p-6 clip-corner bg-[#0a0612]/70 hover:bg-[#0a0612]/90 transition-colors"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${group.accent} 50%)`,
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                }}
              />

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="relative p-2 border clip-corner-sm"
                  style={{ borderColor: `${group.accent}40` }}
                >
                  <group.icon className={`w-5 h-5 ${group.color}`} />
                  <div
                    className="absolute inset-0 blur-sm opacity-30"
                    style={{ backgroundColor: group.accent }}
                  />
                </div>
                <h3
                  className={`text-sm font-mono tracking-widest ${group.color}`}
                  style={{ fontFamily: "var(--font-share-tech)" }}
                >
                  {group.title}
                </h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-sm text-slate-300"
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-xs font-mono text-slate-500"
                        style={{ fontFamily: "var(--font-share-tech)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="relative h-1.5 bg-slate-800/80 overflow-hidden clip-corner-sm"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: gi * 0.1 + si * 0.15, ease: "easeOut" }}
                        className="h-full relative"
                        style={{
                          background: `linear-gradient(90deg, ${group.accent}, ${group.accent}80)`,
                          boxShadow: `0 0 8px ${group.accent}`,
                        }}
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/80" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom decorative line */}
              <div
                className="mt-5 pt-4 border-t flex items-center justify-between text-[10px] font-mono text-slate-500"
                style={{ fontFamily: "var(--font-share-tech)", borderColor: `${group.accent}20` }}
              >
                <span>MODULE.LOADED</span>
                <span className="flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: group.accent }}
                  />
                  ACTIVE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software toolkit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 sm:mt-10 p-4 sm:p-6 lg:p-8 border border-cyan-400/20 bg-[#0a0612]/60 clip-corner"
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <h3
              className="text-xs sm:text-sm font-mono tracking-widest neon-cyan"
              style={{ fontFamily: "var(--font-share-tech)" }}
            >
              SOFTWARE_TOOLKIT
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {SOFTWARE.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 text-xs font-mono tracking-wide text-slate-300 border border-slate-700 bg-slate-900/50 clip-corner-sm hover:border-cyan-400/60 hover:text-cyan-300 transition-colors cursor-default"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
