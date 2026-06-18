"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ChevronDown, Mail, Phone, Linkedin, Download } from "lucide-react";

const CyberScene = dynamic(() => import("./cyber-scene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* 3D scene */}
      <CyberScene />

      {/* Perspective grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 cyber-grid-perspective pointer-events-none"
        style={{
          transform: "perspective(400px) rotateX(60deg)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050208]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-400/40 bg-cyan-400/5 clip-corner-sm mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full pulse-glow" />
              <span
                className="text-xs font-mono tracking-widest text-cyan-300"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                SYSTEM ONLINE // AVAILABLE FOR WORK
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base font-mono tracking-[0.3em] text-pink-400 mb-3"
              style={{ fontFamily: "var(--font-share-tech)" }}
            >
              &lt;MECHATRONICS_ENGINEER/&gt;
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-black leading-none mb-2"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <span
                className="block text-5xl sm:text-7xl lg:text-8xl glitch neon-cyan"
                data-text="ZIA UL"
              >
                ZIA UL
              </span>
              <span
                className="block text-5xl sm:text-7xl lg:text-8xl glitch neon-magenta -mt-2"
                data-text="HASSAN"
              >
                HASSAN
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 mb-6"
            >
              <p
                className="text-lg sm:text-xl font-light text-slate-300 max-w-xl mx-auto lg:mx-0"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                Head of Robotics &amp; AI @ Punjab Group of Colleges. Engineer of
                <span className="neon-cyan"> machines that think</span>,
                <span className="neon-magenta"> systems that move</span>, and
                <span className="neon-purple"> code that learns</span>.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
            >
              {[
                { label: "YEARS_EXP", value: "4+" },
                { label: "PROJECTS", value: "10+" },
                { label: "DOMAIN", value: "ROBOTICS" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-left border-l-2 border-cyan-400/40 pl-3"
                >
                  <div
                    className="text-2xl font-bold neon-cyan"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] font-mono tracking-widest text-slate-400"
                    style={{ fontFamily: "var(--font-share-tech)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-6 py-3 bg-cyan-400 text-[#050208] font-bold tracking-widest text-sm clip-corner-sm hover:bg-cyan-300 transition-colors duration-300"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <span className="relative z-10">VIEW PROJECTS</span>
                <div className="absolute inset-0 blur-md bg-cyan-400/50 group-hover:bg-cyan-300/50 -z-10" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-6 py-3 border border-pink-400/60 text-pink-300 font-bold tracking-widest text-sm clip-corner-sm hover:bg-pink-400/10 transition-colors duration-300"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <span className="relative z-10">INITIATE_CONTACT</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Profile image with cyberpunk frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Decorative brackets */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-pink-400" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-pink-400" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-400" />

              {/* Rotating ring */}
              <div className="absolute -inset-4 border border-cyan-400/30 rounded-full animate-spin-slow pointer-events-none" style={{ animation: "spin 20s linear infinite" }} />

              {/* Image frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden clip-corner border border-cyan-400/40 box-glow-cyan">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 z-10 pointer-events-none" />
                {/* Scan line */}
                <div className="absolute inset-0 z-20 pointer-events-none scan-line" />
                <img
                  src="/profile.png"
                  alt="Muhammad Zia Ul Hassan"
                  className="w-full h-full object-cover"
                />
                {/* HUD overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#050208] via-[#050208]/80 to-transparent z-30">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest" style={{ fontFamily: "var(--font-share-tech)" }}>
                    <span className="text-cyan-400">ID: MZH-2024</span>
                    <span className="text-pink-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full pulse-glow" />
                      ACTIVE
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1" style={{ fontFamily: "var(--font-share-tech)" }}>
                    STATUS: ENGINEERING THE FUTURE
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 px-3 py-1 bg-[#0a0612] border border-pink-400/60 text-pink-300 text-[10px] font-mono tracking-widest clip-corner-sm box-glow-magenta"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                ROBOTICS
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 px-3 py-1 bg-[#0a0612] border border-cyan-400/60 text-cyan-300 text-[10px] font-mono tracking-widest clip-corner-sm box-glow-cyan"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                AI // ML
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Quick contact bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-mono"
          style={{ fontFamily: "var(--font-share-tech)" }}
        >
          <a href="mailto:mzia9612@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors">
            <Mail className="w-3.5 h-3.5" /> mzia9612@gmail.com
          </a>
          <span className="text-slate-600">|</span>
          <a href="tel:+923174694078" className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors">
            <Phone className="w-3.5 h-3.5" /> +92-317-4694078
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://www.linkedin.com/in/m-zia-ul-hassan-8076a7206/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          className="text-[10px] font-mono tracking-widest text-slate-400"
          style={{ fontFamily: "var(--font-share-tech)" }}
        >
          SCROLL_TO_EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
