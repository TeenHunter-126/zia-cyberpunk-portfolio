"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Cpu, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-cyan-400/20 bg-[#050208]/90">
      {/* Top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span
                className="font-display font-bold tracking-widest neon-cyan"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                ZIA<span className="text-pink-400">{"//"}</span>HASSAN
              </span>
            </div>
            <p
              className="text-xs text-slate-400 max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Mechatronics &amp; Control Engineer building machines that sense,
              decide, and act. Currently Head of Robotics &amp; AI at Punjab
              Group of Colleges, Lahore.
            </p>
          </motion.div>

          {/* Quick nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="text-[10px] font-mono tracking-widest text-pink-300 mb-3"
              style={{ fontFamily: "var(--font-share-tech)" }}
            >
              {"// QUICK_ACCESS"}
            </div>
            <ul className="grid grid-cols-2 gap-1.5 text-sm">
              {["HOME", "ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "CONTACT"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-slate-400 hover:text-cyan-300 transition-colors font-mono tracking-wide"
                      style={{ fontFamily: "var(--font-share-tech)" }}
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="text-[10px] font-mono tracking-widest text-pink-300 mb-3"
              style={{ fontFamily: "var(--font-share-tech)" }}
            >
              {"// CONNECT"}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:mzia9612@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                <Mail className="w-3.5 h-3.5" /> mzia9612@gmail.com
              </a>
              <a
                href="tel:+923174694078"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                <Phone className="w-3.5 h-3.5" /> +92-317-4694078
              </a>
              <a
                href="https://www.linkedin.com/in/m-zia-ul-hassan-8076a7206/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500" style={{ fontFamily: "var(--font-share-tech)" }}>
          <div>
            © {new Date().getFullYear()} M. ZIA UL HASSAN // ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-2">
            <span>BUILT WITH</span>
            <Heart className="w-3 h-3 text-pink-400" />
            <span>AND A LOT OF CAFFEINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
