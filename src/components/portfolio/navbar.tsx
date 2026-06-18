"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // active section detection
      const sections = NAV_ITEMS.map((i) => i.href.slice(1));
      const offsets = sections
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return { id, top: Infinity };
          return { id, top: Math.abs(el.getBoundingClientRect().top - 120) };
        })
        .sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(`#${offsets[0].id}`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#050208]/80 border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8">
            <img
              src="/logo.svg"
              alt="Zia logo"
              className="w-8 h-8 object-contain group-hover:brightness-110 transition filter drop-shadow-[0_6px_18px_rgba(0,240,255,0.15)]"
            />
            <div className="absolute inset-0 blur-md bg-cyan-400/30 group-hover:bg-pink-400/30 transition-colors duration-300 -z-10" />
          </div>
          <span
            className="font-display font-bold text-lg tracking-widest neon-cyan group-hover:neon-magenta transition-all"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            ZIA<span className="text-pink-400">{"//"}</span>HASSAN
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-3 py-2 text-xs font-mono tracking-widest transition-all duration-300 hover:text-cyan-300 ${
                  active === item.href ? "text-cyan-300" : "text-slate-300"
                }`}
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                <span className="relative z-10">{item.label}</span>
                {active === item.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 border border-cyan-400/40 bg-cyan-400/5 -z-0"
                    style={{ clipPath: "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))" }}
                  />
                )}
                {/* underline */}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-px bg-cyan-400 group-hover:w-3/4 transition-all" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cyan-400 p-2 hover:text-pink-400 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#050208]/95 backdrop-blur-md border-b border-cyan-500/20"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item, idx) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block py-3 px-4 text-sm font-mono tracking-widest border border-transparent hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all ${
                      active === item.href ? "text-cyan-300 border-cyan-400/40 bg-cyan-400/5" : "text-slate-300"
                    }`}
                    style={{ fontFamily: "var(--font-share-tech)" }}
                  >
                    <span className="text-pink-400 mr-2">0{idx + 1}.</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
