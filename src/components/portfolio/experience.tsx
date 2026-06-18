"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Factory, GraduationCap, Heart, Cog, ChevronDown } from "lucide-react";
import SectionHeading from "./section-heading";

type Exp = {
  role: string;
  org: string;
  period: string;
  type: "work" | "intern" | "volunteer";
  description: string;
  tags: string[];
};

const EXPERIENCES: Exp[] = [
  {
    role: "Head of Robotics & AI",
    org: "Punjab Group of Colleges — City Campus, Lahore",
    period: "SEP 2024 // PRESENT",
    type: "work",
    description:
      "Directing robotics and automation programs across the campus. I design hands-on curricula, optimize lab operations, and lead cross-departmental projects that elevate student skills in control systems and practical automation. My focus is on building an environment where innovation thrives — equipping students with both the foundational theory and the technical fluency needed for advanced engineering roles.",
    tags: ["Curriculum Design", "Lab Management", "Mentoring", "Robotics"],
  },
  {
    role: "Automation Intern",
    org: "Basfa Textile",
    period: "JUN 2024 // AUG 2024",
    type: "intern",
    description:
      "Worked with Mitsubishi FX Series and Siemens S7-1200 PLCs on real production lines. Gained hands-on experience in ladder logic development, sensor and actuator integration, HMI support, I/O testing, and basic panel wiring using GX Developer and TIA Portal. Learned how industrial automation actually breathes on a factory floor — not just in simulation.",
    tags: ["Mitsubishi FX", "Siemens S7-1200", "GX Developer", "HMI", "Panel Wiring"],
  },
  {
    role: "Trainee Sales & Application Engineer (Overseas)",
    org: "International Enterprise",
    period: "JUN 2023 // AUG 2023",
    type: "work",
    description:
      "Gained invaluable international experience developing technical sales skills and understanding customer needs in a global business environment. Collaborated with diverse cross-functional teams to support product applications — sharpening both my problem-solving and my ability to communicate complex engineering concepts across language and cultural boundaries.",
    tags: ["Technical Sales", "Cross-cultural", "Applications Engineering"],
  },
  {
    role: "PLC Automation Engineer (Project)",
    org: "Next Cola Pvt. Ltd. — Bottle Filling System",
    period: "JUN 2022 // AUG 2022",
    type: "work",
    description:
      "Engineered an automated bottle filling system at Next Cola Pvt. Ltd. using Siemens TIA Portal for PLC programming. Integrated sensors and actuators, implemented control logic, and supported HMI setup and on-floor troubleshooting to push system reliability higher. Saw firsthand how a single line of ladder logic can move thousands of bottles per hour.",
    tags: ["Siemens TIA Portal", "PLC", "HMI", "Sensors", "Actuators"],
  },
  {
    role: "Diesel Generator ATS Panel Simulation",
    org: "PLC-Controlled Project",
    period: "FEB 2024 // MAY 2024",
    type: "work",
    description:
      "Designed and simulated a PLC-based Automatic Transfer Switch (ATS) system using Siemens TIA Portal to automate load transfer between utility and diesel generator. Developed ladder logic with interlocks, timers, and fault handling for safe switching and auto-retransfer on mains recovery — a project that taught me how critical safety interlocks are in power-critical infrastructure.",
    tags: ["ATS", "TIA Portal", "Ladder Logic", "Interlocks", "Fault Handling"],
  },
];

const VOLUNTEER = [
  {
    role: "Director of Finance",
    org: "Dast e Khair Foundation",
    period: "DEC 2024 // APR 2025",
    description:
      "Leading finance for initiatives supporting orphans, widows, and underprivileged individuals. Contributed to providing essential resources and implementing programs focused on improving quality of life.",
  },
  {
    role: "Volunteer",
    org: "Blood Donor Society Sillanwali",
    period: "JAN 2020 // PRESENT",
    description:
      "Connecting donors with those in need and ensuring timely blood donations. Contributing to community health initiatives that save lives.",
  },
  {
    role: "Volunteer",
    org: "Click and Help",
    period: "JAN 2021 // PRESENT",
    description:
      "Supporting initiatives assisting orphans, widows, and those in need. Working to improve their quality of life and provide essential resources.",
  },
];

const typeMeta = {
  work: { color: "neon-cyan", accent: "#00f0ff", icon: Briefcase, label: "PROFESSIONAL" },
  intern: { color: "neon-purple", accent: "#b537f2", icon: Factory, label: "INTERNSHIP" },
  volunteer: { color: "neon-pink", accent: "#ff2a6d", icon: Heart, label: "VOLUNTEER" },
};

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first one open by default on mobile

  return (
    <section id="experience" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          index="03"
          title="EXPERIENCE_LOG"
          subtitle="Professional roles, internships, and engineering projects across industry and academia."
          color="purple"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line - left on mobile, center on desktop */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-pink-400/40 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {EXPERIENCES.map((exp, i) => {
              const meta = typeMeta[exp.type];
              const Icon = meta.icon;
              const isLeft = i % 2 === 0;
              const isOpen = openIdx === i;

              return (
                <motion.div
                  key={`${exp.role}-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Node dot */}
                  <div className="absolute left-4 sm:left-1/2 top-5 sm:top-6 sm:-translate-x-1/2 z-10">
                    <div
                      className="relative w-4 h-4 rounded-full pulse-glow"
                      style={{ backgroundColor: meta.accent, boxShadow: `0 0 12px ${meta.accent}` }}
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-white/50" />
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden sm:block sm:flex-1" />

                  {/* Card */}
                  <div className="sm:flex-1 pl-12 sm:pl-0 w-full sm:w-auto">
                    <div
                      className={`group relative gradient-border clip-corner bg-[#0a0612]/80 hover:bg-[#0a0612]/95 transition-colors overflow-hidden ${
                        isLeft ? "sm:mr-8" : "sm:ml-8"
                      }`}
                    >
                      {/* Header — always visible */}
                      <button
                        type="button"
                        onClick={() => setOpenIdx(isOpen ? null : i)}
                        className="w-full text-left p-4 sm:p-5 lg:p-6"
                      >
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${meta.color}`} />
                            <span
                              className={`text-[10px] font-mono tracking-widest ${meta.color}`}
                              style={{ fontFamily: "var(--font-share-tech)" }}
                            >
                              {meta.label}
                            </span>
                          </div>
                          <span
                            className="text-[10px] font-mono tracking-widest text-slate-500"
                            style={{ fontFamily: "var(--font-share-tech)" }}
                          >
                            {exp.period}
                          </span>
                        </div>

                        <h3
                          className={`text-base sm:text-lg font-bold ${meta.color} leading-tight pr-6 sm:pr-0`}
                          style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-xs sm:text-sm text-slate-400 mt-1"
                          style={{ fontFamily: "var(--font-rajdhani)" }}
                        >
                          {exp.org}
                        </p>

                        {/* Mobile expand chevron */}
                        <div className="sm:hidden absolute right-3 top-4">
                          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown className="w-4 h-4" style={{ color: meta.accent }} />
                          </motion.span>
                        </div>
                      </button>

                      {/* Body — desktop always visible, mobile collapsible */}
                      <div className="hidden sm:block px-5 lg:px-6 pb-5 lg:pb-6">
                        <p
                          className="text-sm text-slate-300 leading-relaxed mb-4"
                          style={{ fontFamily: "var(--font-rajdhani)" }}
                        >
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-900/40 clip-corner-sm"
                              style={{ fontFamily: "var(--font-share-tech)" }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="sm:hidden overflow-hidden"
                          >
                            <div className="px-4 pb-4">
                              <p
                                className="text-sm text-slate-300 leading-relaxed mb-3"
                                style={{ fontFamily: "var(--font-rajdhani)" }}
                              >
                                {exp.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-0.5 text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-900/40 clip-corner-sm"
                                    style={{ fontFamily: "var(--font-share-tech)" }}
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Volunteer experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-24"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Heart className="w-5 h-5 neon-pink" />
            <h3
              className="text-base sm:text-lg lg:text-xl font-display font-bold tracking-widest neon-pink"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              VOLUNTEER {" // "} COMMUNITY
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {VOLUNTEER.map((v, i) => (
              <VolunteerCard key={v.org} v={v} defaultOpen={i === 0} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VolunteerCard({
  v,
  defaultOpen,
}: {
  v: { role: string; org: string; period: string; description: string };
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="relative border border-pink-400/30 bg-[#0a0612]/70 clip-corner hover:border-pink-400/60 transition-colors"
    >
      {/* Mobile header - clickable */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden w-full p-4 text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-[10px] font-mono tracking-widest text-pink-300 mb-1" style={{ fontFamily: "var(--font-share-tech)" }}>
              {v.period}
            </div>
            <h4 className="text-sm font-bold neon-pink leading-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
              {v.role}
            </h4>
            <div className="text-xs text-slate-400 mt-0.5" style={{ fontFamily: "var(--font-rajdhani)" }}>
              {v.org}
            </div>
          </div>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-2">
            <ChevronDown className="w-4 h-4 text-pink-400" />
          </motion.span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed" style={{ fontFamily: "var(--font-rajdhani)" }}>
              {v.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop - always visible */}
      <div className="hidden sm:block p-5">
        <div className="text-[10px] font-mono tracking-widest text-pink-300 mb-2" style={{ fontFamily: "var(--font-share-tech)" }}>
          {v.period}
        </div>
        <h4 className="text-base font-bold neon-pink leading-tight mb-1" style={{ fontFamily: "var(--font-orbitron)" }}>
          {v.role}
        </h4>
        <div className="text-xs text-slate-400 mb-3" style={{ fontFamily: "var(--font-rajdhani)" }}>
          {v.org}
        </div>
        <p className="text-sm text-slate-300 leading-relaxed" style={{ fontFamily: "var(--font-rajdhani)" }}>
          {v.description}
        </p>
      </div>
    </motion.div>
  );
}
