"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Bot, Cog, Brain, Wrench, Heart, ChevronDown } from "lucide-react";
import SectionHeading from "./section-heading";

const BIO = [
  "I am Muhammad Zia Ul Hassan — a Mechatronics & Control Engineering graduate from UET Lahore, currently serving as the Head of Robotics & AI at Punjab Group of Colleges, Lahore. My career lives at the intersection of mechanical systems, electronics, and intelligent software, where I build machines that sense, decide, and act in the physical world.",
  "From PLC-driven industrial automation at Next Cola and Basfa Textile, to designing a sociable FYP robot capable of voice activation, emotion recognition, and American Sign Language comprehension, my work spans the full stack of robotics — from relay logic to deep learning. I have hands-on experience with Siemens TIA Portal, Mitsubishi GX Developer, embedded C++ on TIVA microcontrollers, and Python pipelines for computer vision using OpenCV and MediaPipe.",
  "Beyond the lab, I lead with purpose. As Director of Finance at Dast e Khair Foundation and a long-time volunteer with Click and Help and the Blood Donor Society Sillanwali, I channel engineering discipline into community impact. I believe robotics is not just about replacing humans — it is about amplifying our capacity to care, create, and connect.",
];

const FOCUS = [
  { icon: Bot, label: "Robotics", color: "neon-cyan" },
  { icon: Cog, label: "Industrial Automation", color: "neon-magenta" },
  { icon: Brain, label: "Machine Learning", color: "neon-purple" },
  { icon: Cpu, label: "Embedded Systems", color: "neon-pink" },
];

export default function About() {
  const [bioOpen, setBioOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [eduOpen, setEduOpen] = useState(false);
  const [valuesOpen, setValuesOpen] = useState(false);

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Section background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          index="01"
          title="ABOUT_ME"
          subtitle="A quick brief on who I am, what I build, and why it matters."
          color="cyan"
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Bio panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 relative gradient-border p-5 sm:p-6 lg:p-8 clip-corner"
          >
            <div className="flex items-center gap-2 mb-5 pb-3 sm:pb-4 border-b border-cyan-400/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-pink-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <span
                className="ml-2 text-[10px] sm:text-xs font-mono text-slate-400 tracking-widest"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                ~/zia/about.md
              </span>
            </div>

            <div className="space-y-4 sm:space-y-5 text-slate-300 leading-relaxed" style={{ fontFamily: "var(--font-rajdhani)" }}>
              {/* Mobile: first paragraph always visible, rest collapsible */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm sm:text-[15px] lg:text-[17px] leading-6 sm:leading-7"
              >
                <span className="text-cyan-400 mr-1">&gt;</span>
                {BIO[0]}
              </motion.p>

              {/* Remaining paragraphs - always visible on sm+, collapsible on mobile */}
              <div className="hidden sm:block space-y-4 sm:space-y-5">
                {BIO.slice(1).map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i + 1) * 0.15 }}
                    className="text-[15px] lg:text-[17px] leading-7"
                  >
                    <span className="text-cyan-400 mr-1">&gt;</span>
                    {para}
                  </motion.p>
                ))}
              </div>

              <AnimatePresence initial={false}>
                {bioOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="sm:hidden overflow-hidden space-y-4"
                  >
                    {BIO.slice(1).map((para, i) => (
                      <p
                        key={i}
                        className="text-sm leading-6"
                      >
                        <span className="text-cyan-400 mr-1">&gt;</span>
                        {para}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile expand button */}
              <button
                onClick={() => setBioOpen(!bioOpen)}
                className="sm:hidden flex items-center gap-1 text-[10px] font-mono tracking-widest text-cyan-300 mt-1"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                <motion.span animate={{ rotate: bioOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-3 h-3" />
                </motion.span>
                {bioOpen ? "TAP_TO_COLLAPSE" : "READ_MORE"}
              </button>
            </div>

            {/* Focus tags */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-cyan-400/20">
              <div
                className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-500 mb-3"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                {"// CORE FOCUS DOMAINS"}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {FOCUS.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 border border-cyan-400/20 bg-cyan-400/5 clip-corner-sm hover:border-cyan-400/60 transition-colors"
                  >
                    <f.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${f.color}`} />
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono tracking-widest text-center ${f.color}`}
                      style={{ fontFamily: "var(--font-share-tech)" }}
                    >
                      {f.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side panel: signature stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-3 sm:gap-4"
          >
            {/* Status card - collapsible on mobile */}
            <div className="relative border border-pink-400/30 bg-[#0a0612]/80 clip-corner box-glow-magenta">
              {/* Mobile header - clickable */}
              <button
                onClick={() => setRoleOpen(!roleOpen)}
                className="sm:hidden w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-pink-400" />
                  <span className="text-[10px] font-mono tracking-widest text-pink-300" style={{ fontFamily: "var(--font-share-tech)" }}>
                    CURRENT_ROLE ▸ HEAD OF ROBOTICS & AI
                  </span>
                </div>
                <motion.span animate={{ rotate: roleOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4 text-pink-400" />
                </motion.span>
              </button>
              {/* Mobile body */}
              <AnimatePresence initial={false}>
                {roleOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="sm:hidden overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <div className="text-sm text-slate-400 mt-1" style={{ fontFamily: "var(--font-rajdhani)" }}>
                        Punjab Group of Colleges — City Campus, Lahore
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-slate-500" style={{ fontFamily: "var(--font-share-tech)" }}>
                        SINCE: SEP 2024 // PRESENT
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Desktop - always visible */}
              <div className="hidden sm:block p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-pink-400" />
                  <span className="text-xs font-mono tracking-widest text-pink-300" style={{ fontFamily: "var(--font-share-tech)" }}>
                    CURRENT_ROLE
                  </span>
                </div>
                <div className="text-xl font-bold neon-magenta" style={{ fontFamily: "var(--font-orbitron)" }}>
                  HEAD OF ROBOTICS &amp; AI
                </div>
                <div className="text-sm text-slate-400 mt-1" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  Punjab Group of Colleges — City Campus, Lahore
                </div>
                <div className="mt-3 text-xs font-mono text-slate-500" style={{ fontFamily: "var(--font-share-tech)" }}>
                  SINCE: SEP 2024 // PRESENT
                </div>
              </div>
            </div>

            {/* Education card - collapsible on mobile */}
            <div className="relative border border-cyan-400/30 bg-[#0a0612]/80 clip-corner box-glow-cyan">
              <button
                onClick={() => setEduOpen(!eduOpen)}
                className="sm:hidden w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-[10px] font-mono tracking-widest text-cyan-300" style={{ fontFamily: "var(--font-share-tech)" }}>
                    EDUCATION ▸ UET LAHORE
                  </span>
                </div>
                <motion.span animate={{ rotate: eduOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4 text-cyan-400" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {eduOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="sm:hidden overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <div className="text-sm text-cyan-300 font-bold leading-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
                        B.Sc. MECHATRONICS &amp; CONTROL
                      </div>
                      <div className="text-xs text-slate-400 mt-1" style={{ fontFamily: "var(--font-rajdhani)" }}>
                        UET Lahore
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-slate-500" style={{ fontFamily: "var(--font-share-tech)" }}>
                        OCT 2020 // AUG 2024
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden sm:block p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono tracking-widest text-cyan-300" style={{ fontFamily: "var(--font-share-tech)" }}>
                    EDUCATION
                  </span>
                </div>
                <div className="text-lg font-bold neon-cyan leading-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
                  B.Sc. MECHATRONICS &amp; CONTROL ENGINEERING
                </div>
                <div className="text-sm text-slate-400 mt-1" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  University of Engineering &amp; Technology (UET), Lahore
                </div>
                <div className="mt-2 text-xs font-mono text-slate-500" style={{ fontFamily: "var(--font-share-tech)" }}>
                  OCT 2020 // AUG 2024
                </div>
              </div>
            </div>

            {/* Values card - collapsible on mobile */}
            <div className="relative border border-purple-500/30 bg-[#0a0612]/80 clip-corner">
              <button
                onClick={() => setValuesOpen(!valuesOpen)}
                className="sm:hidden w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-mono tracking-widest neon-purple" style={{ fontFamily: "var(--font-share-tech)" }}>
                    BEYOND_ENGINEERING
                  </span>
                </div>
                <motion.span animate={{ rotate: valuesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4 text-purple-400" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {valuesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="sm:hidden overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed" style={{ fontFamily: "var(--font-rajdhani)" }}>
                      Poetry, gardening, and traveling — exploring the world and the written word with the same curiosity I bring to machines.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden sm:block p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono tracking-widest neon-purple" style={{ fontFamily: "var(--font-share-tech)" }}>
                    BEYOND_ENGINEERING
                  </span>
                </div>
                <div className="text-sm text-slate-300 leading-relaxed" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  Poetry, gardening, and traveling — exploring the world and the written word with the same curiosity I bring to machines.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
