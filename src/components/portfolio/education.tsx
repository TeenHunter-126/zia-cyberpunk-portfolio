"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, MapPin } from "lucide-react";
import SectionHeading from "./section-heading";

const COURSES = [
  "Robotics",
  "Embedded Systems",
  "Machine Learning",
  "Control Systems",
  "Computer Programming",
  "Industrial Automation",
  "Signals and Systems",
  "Discrete Control Systems",
];

const HOBBIES = [
  { label: "READING", desc: "Lifelong learner across engineering and literature." },
  { label: "WRITING / POETRY", desc: "Expressing creativity through verse and prose." },
  { label: "GARDENING", desc: "Finding solace and joy in nurturing plants." },
  { label: "TRAVELING / PHOTOGRAPHY", desc: "Enthusiastic explorer and visual storyteller." },
  { label: "CRITICAL THINKING", desc: "Analytically evaluating information for informed decisions." },
];

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          index="05"
          title="EDUCATION_DATA"
          subtitle="Academic foundation, coursework, and personal pursuits that shape how I think and build."
          color="pink"
        />

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative gradient-border p-5 sm:p-6 lg:p-8 clip-corner bg-[#0a0612]/80"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 border border-cyan-400/40 bg-cyan-400/5 clip-corner-sm">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 neon-cyan" />
              </div>
              <div className="min-w-0 flex-1">
                <div
                  className="text-[10px] font-mono tracking-widest text-cyan-300"
                  style={{ fontFamily: "var(--font-share-tech)" }}
                >
                  DEGREE
                </div>
                <div
                  className="text-sm sm:text-lg font-bold neon-cyan leading-tight"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  B.Sc. MECHATRONICS &amp; CONTROL ENGINEERING
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 text-slate-300 mb-2" style={{ fontFamily: "var(--font-rajdhani)" }}>
              <MapPin className="w-4 h-4 mt-1 text-pink-400 shrink-0" />
              <div>
                <div className="text-base font-semibold">University of Engineering &amp; Technology (UET), Lahore</div>
                <div className="text-sm text-slate-400">Pakistan</div>
              </div>
            </div>

            <div
              className="mt-2 inline-block px-3 py-1 text-xs font-mono tracking-widest text-pink-300 border border-pink-400/40 bg-pink-400/5 clip-corner-sm"
              style={{ fontFamily: "var(--font-share-tech)" }}
            >
              OCT 2020 // AUG 2024
            </div>

            {/* Major courses */}
            <div className="mt-5 sm:mt-7 pt-4 sm:pt-6 border-t border-cyan-400/20">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4
                  className="text-[10px] sm:text-xs font-mono tracking-widest neon-cyan"
                  style={{ fontFamily: "var(--font-share-tech)" }}
                >
                  MAJOR_COURSES
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {COURSES.map((c, i) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    <span className="text-cyan-400">▸</span>
                    {c}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Roshan Kal Academy award */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative gradient-border p-5 sm:p-6 lg:p-8 clip-corner bg-[#0a0612]/80 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 sm:p-3 border border-pink-400/40 bg-pink-400/5 clip-corner-sm">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 neon-pink" />
              </div>
              <div>
                <div
                  className="text-[10px] font-mono tracking-widest text-pink-300"
                  style={{ fontFamily: "var(--font-share-tech)" }}
                >
                  CERTIFICATION
                </div>
                <div
                  className="text-sm sm:text-base font-bold neon-pink leading-tight"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  ROSHAN KAL ACADEMY
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed flex-1" style={{ fontFamily: "var(--font-rajdhani)" }}>
              Awarded for successful completion of 10 intensive modules,
              demonstrating a strong commitment to growth and continuous learning.
              This achievement provides a solid foundation in skills and knowledge
              for future pursuits.
            </p>

            <div
              className="mt-4 inline-block px-3 py-1 text-xs font-mono tracking-widest text-cyan-300 border border-cyan-400/40 bg-cyan-400/5 clip-corner-sm self-start"
              style={{ fontFamily: "var(--font-share-tech)" }}
            >
              AUG 2024 // SEP 2024
            </div>
          </motion.div>
        </div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 sm:mt-10 p-4 sm:p-6 lg:p-8 border border-purple-500/20 bg-[#0a0612]/60 clip-corner"
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2 h-2 bg-purple-400 rounded-full pulse-glow" />
            <h3
              className="text-[10px] sm:text-xs font-mono tracking-widest neon-purple"
              style={{ fontFamily: "var(--font-share-tech)" }}
            >
              BEYOND_THE_CODE {" // "} HOBBIES_AND_INTERESTS
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {HOBBIES.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-3 sm:p-4 border border-purple-500/20 bg-purple-500/5 clip-corner-sm hover:border-purple-500/50 transition-colors"
              >
                <div
                  className="text-[10px] sm:text-xs font-mono tracking-widest neon-purple mb-1.5"
                  style={{ fontFamily: "var(--font-share-tech)" }}
                >
                  {h.label}
                </div>
                <div
                  className="text-xs sm:text-sm text-slate-400"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {h.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
