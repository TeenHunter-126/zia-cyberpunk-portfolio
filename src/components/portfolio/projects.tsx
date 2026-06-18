"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Hand,
  Wind,
  Cog,
  Home,
  Trophy,
  ChevronDown,
} from "lucide-react";
import SectionHeading from "./section-heading";

type Project = {
  title: string;
  category: string;
  period: string;
  icon: typeof Bot;
  color: string;
  accent: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "MEET & GREET II",
    category: "FINAL YEAR PROJECT",
    period: "AUG 2023 // MAY 2024",
    icon: Bot,
    color: "neon-cyan",
    accent: "#00f0ff",
    featured: true,
    description:
      "A multifunctional sociable robot designed from the ground up for Human-Robot Interaction (HRI). The robot understands voice commands, recognizes human emotions in real time, and comprehends American Sign Language (ASL) gestures — enabling empathetic and inclusive social engagement with humans.",
    shortDescription:
      "A sociable FYP robot with voice activation, emotion recognition, and ASL comprehension for inclusive HRI.",
    highlights: [
      "3D CAD-modeled chassis with integrated sensor array",
      "Real-time emotion recognition via computer vision",
      "Voice-activated dialogue and ASL interpretation",
      "Designed for accessibility and companionship applications",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "3D CAD", "Embedded C++", "HRI"],
  },
  {
    title: "HAND SIGNS DETECTOR",
    category: "COMPUTER VISION",
    period: "APR 2022 // MAY 2022",
    icon: Hand,
    color: "neon-magenta",
    accent: "#ff00aa",
    description:
      "A real-time hand signs detector built in Python using Tkinter, OpenCV, and MediaPipe. The system accurately identifies and interprets various hand gestures, enabling intuitive human-computer interaction for accessibility and control applications.",
    shortDescription:
      "Real-time gesture recognition in Python with OpenCV + MediaPipe + Tkinter GUI.",
    highlights: [
      "Real-time gesture recognition pipeline",
      "Tkinter-based GUI for live visualization",
      "MediaPipe hand landmark tracking",
      "Foundation for the FYP's ASL module",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "Tkinter"],
  },
  {
    title: "AIR FLOW BALL BALANCING",
    category: "CONTROL SYSTEMS",
    period: "DEC 2021 // JAN 2022",
    icon: Wind,
    color: "neon-purple",
    accent: "#b537f2",
    description:
      "An advanced control system that maintains a ball's position in mid-air by dynamically adjusting airflow. The setup demonstrates core principles of feedback control, stability, and real-time system response — the same foundations used in industrial process control.",
    shortDescription:
      "Closed-loop airflow control system that balances a ball in mid-air — demonstrating feedback control theory.",
    highlights: [
      "Closed-loop feedback control architecture",
      "Real-time airflow modulation",
      "Demonstrates PID-style stabilization",
      "Educational platform for control theory",
    ],
    stack: ["Control Systems", "MATLAB", "Simulink", "Sensors"],
  },
  {
    title: "PNEUMATIC PICK & DROP (PLC)",
    category: "INDUSTRIAL AUTOMATION",
    period: "NOV 2022 // JAN 2023",
    icon: Cog,
    color: "neon-yellow",
    accent: "#fff200",
    description:
      "A pneumatic pick-and-drop system built with PLC technology and relay logic. The system efficiently automates the process of picking up and placing objects, enhancing productivity and precision for industrial handling tasks.",
    shortDescription:
      "PLC-driven pneumatic pick-and-drop system with relay logic for industrial handling precision.",
    highlights: [
      "PLC ladder logic implementation",
      "Pneumatic actuator sequencing",
      "Relay-based safety interlocks",
      "Industrial handling precision",
    ],
    stack: ["PLC", "TIA Portal", "Pneumatics", "Relay Logic"],
  },
  {
    title: "HOME AUTOMATION",
    category: "IoT / EMBEDDED",
    period: "JAN 2021 // MAY 2021",
    icon: Home,
    color: "neon-cyan",
    accent: "#00f0ff",
    description:
      "An IoT-enabled home automation system featuring an automated door lock, fan controls, and lighting systems. Built using the TIVA microcontroller, respective sensors, and a custom algorithm developed in C++ — enhancing home safety, comfort, and energy efficiency.",
    shortDescription:
      "IoT home automation: door lock, fans, and lighting via TIVA MCU + C++ algorithm.",
    highlights: [
      "TIVA microcontroller firmware in C++",
      "IoT-connected door lock, fans, and lighting",
      "Custom sensing algorithm",
      "Energy efficiency optimization",
    ],
    stack: ["C++", "TIVA MCU", "IoT", "Sensors"],
  },
  {
    title: "ROSHAN KAL ACADEMY",
    category: "CERTIFICATION",
    period: "AUG 2024 // SEP 2024",
    icon: Trophy,
    color: "neon-pink",
    accent: "#ff2a6d",
    description:
      "Awarded for successful completion of 10 intensive modules, demonstrating a strong commitment to growth and continuous learning. This achievement provides a solid foundation in skills and knowledge for future pursuits.",
    shortDescription:
      "10-module professional development program completed with distinction.",
    highlights: [
      "10 intensive modules completed",
      "Commitment to continuous learning",
      "Cross-disciplinary skill foundation",
    ],
    stack: ["Professional Development"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          index="04"
          title="PROJECT_ARCHIVE"
          subtitle="Engineering projects spanning robotics, automation, control systems, and computer vision."
          color="cyan"
        />

        {/* Featured project */}
        {PROJECTS.filter((p) => p.featured).map((p) => (
          <FeaturedProject key={p.title} p={p} />
        ))}

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROJECTS.filter((p) => !p.featured).map((p, i) => (
            <ProjectCard key={p.title} p={p} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mb-8 sm:mb-10 relative overflow-hidden gradient-border p-5 sm:p-6 lg:p-10 clip-corner bg-[#0a0612]/80"
    >
      {/* Decorative big icon */}
      <div className="absolute -top-8 -right-8 opacity-10 pointer-events-none">
        <p.icon className="w-48 h-48 sm:w-64 sm:h-64" style={{ color: p.accent }} />
      </div>

      <div className="relative grid lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span
              className="px-2 py-0.5 text-[10px] font-mono tracking-widest text-[#050208] clip-corner-sm"
              style={{ backgroundColor: p.accent, fontFamily: "var(--font-share-tech)" }}
            >
              ★ FEATURED
            </span>
            <span
              className="text-[10px] font-mono tracking-widest text-slate-500"
              style={{ fontFamily: "var(--font-share-tech)" }}
            >
              {p.category} {" // "} {p.period}
            </span>
          </div>

          <h3
            className={`text-2xl sm:text-3xl lg:text-5xl font-black ${p.color} mb-3 leading-none`}
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {p.title}
          </h3>

          {/* Mobile: short description always, full description collapsible */}
          <p
            className="text-sm sm:hidden text-slate-300 leading-relaxed mb-3"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {p.shortDescription}
          </p>

          <p
            className="hidden sm:block text-base lg:text-lg text-slate-300 leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {p.description}
          </p>

          {/* Mobile: collapsible highlights + stack */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="sm:hidden overflow-hidden"
              >
                <p className="text-sm text-slate-300 leading-relaxed mb-3" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  {p.description}
                </p>
                <div className="space-y-2 mb-4">
                  {p.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-3 text-xs text-slate-300"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      <span style={{ color: p.accent }} className="mt-0.5">▸</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-[10px] font-mono text-slate-400 border clip-corner-sm"
                      style={{ fontFamily: "var(--font-share-tech)", borderColor: `${p.accent}40` }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden flex items-center gap-1 text-[10px] font-mono tracking-widest mb-4"
            style={{ fontFamily: "var(--font-share-tech)", color: p.accent }}
          >
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-3 h-3" />
            </motion.span>
            {open ? "TAP_TO_COLLAPSE" : "VIEW_DETAILS"}
          </button>

          {/* Desktop: highlights + stack always visible */}
          <div className="hidden sm:block">
            <div className="space-y-2 mb-6">
              {p.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 text-sm text-slate-300"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  <span style={{ color: p.accent }} className="mt-0.5">▸</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 text-[11px] font-mono text-slate-400 border clip-corner-sm"
                  style={{ fontFamily: "var(--font-share-tech)", borderColor: `${p.accent}40` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center">
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center border clip-corner"
              style={{
                borderColor: `${p.accent}60`,
                boxShadow: `0 0 30px ${p.accent}40, inset 0 0 30px ${p.accent}10`,
                background: `linear-gradient(135deg, ${p.accent}10, transparent)`,
              }}
            >
              <p.icon
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
                style={{ color: p.accent, filter: `drop-shadow(0 0 12px ${p.accent})` }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ p, defaultOpen }: { p: Project; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="group relative gradient-border clip-corner bg-[#0a0612]/70 hover:bg-[#0a0612]/90 transition-colors overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${p.accent}20, transparent 70%)`,
        }}
      />

      <div className="relative">
        {/* Header — clickable on mobile, hoverable on desktop */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full text-left p-4 sm:p-6"
        >
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div
              className="p-2 sm:p-2.5 border clip-corner-sm"
              style={{ borderColor: `${p.accent}40` }}
            >
              <p.icon className={`w-5 h-5 ${p.color}`} />
            </div>
            <div className="sm:hidden">
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-4 h-4" style={{ color: p.accent }} />
              </motion.span>
            </div>
          </div>

          <div
            className="text-[10px] font-mono tracking-widest text-slate-500 mb-1"
            style={{ fontFamily: "var(--font-share-tech)" }}
          >
            {p.category}
          </div>
          <div
            className="text-[10px] font-mono tracking-widest text-slate-600 mb-2"
            style={{ fontFamily: "var(--font-share-tech)" }}
          >
            {p.period}
          </div>

          <h3
            className={`text-base sm:text-lg font-bold ${p.color} leading-tight mb-2`}
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {p.title}
          </h3>

          {/* Mobile: short desc always, full collapsible */}
          <p
            className="text-xs sm:hidden text-slate-400 leading-relaxed"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {p.shortDescription}
          </p>
          <p
            className="hidden sm:block text-sm text-slate-400 leading-relaxed"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {p.description}
          </p>
        </button>

        {/* Mobile: collapsible details */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden overflow-hidden"
            >
              <div className="px-4 pb-4">
                <p className="text-xs text-slate-300 leading-relaxed mb-3" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  {p.description}
                </p>
                <div className="space-y-1.5 mb-3">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-slate-300" style={{ fontFamily: "var(--font-rajdhani)" }}>
                      <span style={{ color: p.accent }}>▸</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-900/40 clip-corner-sm"
                      style={{ fontFamily: "var(--font-share-tech)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop: stack always visible */}
        <div className="hidden sm:block px-6 pb-6">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-900/40 clip-corner-sm"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
      />
    </motion.div>
  );
}
