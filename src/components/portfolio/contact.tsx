"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, Download } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct a mailto link with the form data
    const subject = encodeURIComponent(`[PORTFOLIO] Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:mzia9612@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          index="06"
          title="INITIATE_CONTACT"
          subtitle="Open to opportunities in robotics, automation, embedded systems, and AI engineering. Let's build something that matters."
          color="cyan"
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="gradient-border p-6 sm:p-8 clip-corner bg-[#0a0612]/80">
              <div
                className="text-xs font-mono tracking-widest text-cyan-300 mb-4"
                style={{ fontFamily: "var(--font-share-tech)" }}
              >
                {"// DIRECT CHANNELS"}
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:mzia9612@gmail.com"
                  className="group flex items-center gap-4 p-3 border border-cyan-400/20 hover:border-cyan-400/60 bg-cyan-400/5 clip-corner-sm transition-colors"
                >
                  <div className="p-2 border border-cyan-400/40 group-hover:border-cyan-400 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-mono tracking-widest text-slate-500"
                      style={{ fontFamily: "var(--font-share-tech)" }}
                    >
                      EMAIL
                    </div>
                    <div
                      className="text-sm text-slate-200 group-hover:text-cyan-300 transition-colors"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      mzia9612@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+923174694078"
                  className="group flex items-center gap-4 p-3 border border-pink-400/20 hover:border-pink-400/60 bg-pink-400/5 clip-corner-sm transition-colors"
                >
                  <div className="p-2 border border-pink-400/40 group-hover:border-pink-400 transition-colors">
                    <Phone className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-mono tracking-widest text-slate-500"
                      style={{ fontFamily: "var(--font-share-tech)" }}
                    >
                      PHONE
                    </div>
                    <div
                      className="text-sm text-slate-200 group-hover:text-pink-300 transition-colors"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      +92-317-4694078
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/m-zia-ul-hassan-8076a7206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 border border-purple-500/20 hover:border-purple-500/60 bg-purple-500/5 clip-corner-sm transition-colors"
                >
                  <div className="p-2 border border-purple-500/40 group-hover:border-purple-500 transition-colors">
                    <Linkedin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-mono tracking-widest text-slate-500"
                      style={{ fontFamily: "var(--font-share-tech)" }}
                    >
                      LINKEDIN
                    </div>
                    <div
                      className="text-sm text-slate-200 group-hover:text-purple-300 transition-colors"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      m-zia-ul-hassan
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 border border-slate-700/50 bg-slate-900/30 clip-corner-sm">
                  <div className="p-2 border border-slate-600">
                    <MapPin className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-mono tracking-widest text-slate-500"
                      style={{ fontFamily: "var(--font-share-tech)" }}
                    >
                      LOCATION
                    </div>
                    <div
                      className="text-sm text-slate-300"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      Lahore, Pakistan
                    </div>
                  </div>
                </div>
              </div>

              {/* Download CV */}
              <a
                href="/EngrZiaCvup.pdf"
                download
                className="mt-5 group flex items-center justify-center gap-2 w-full px-4 py-3 border border-cyan-400/60 text-cyan-300 font-bold tracking-widest text-sm clip-corner-sm hover:bg-cyan-400/10 transition-colors"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <Download className="w-4 h-4" />
                DOWNLOAD_CV.PDF
              </a>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="gradient-border p-6 sm:p-8 clip-corner bg-[#0a0612]/80"
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-400/20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <span
                  className="ml-2 text-xs font-mono text-slate-400 tracking-widest"
                  style={{ fontFamily: "var(--font-share-tech)" }}
                >
                  ~/zia/send_message.sh
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="text-[10px] font-mono tracking-widest text-cyan-300 mb-1.5 block"
                    style={{ fontFamily: "var(--font-share-tech)" }}
                  >
                    YOUR_NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="> enter name"
                    className="w-full px-3 py-2.5 bg-slate-900/60 border border-cyan-400/20 text-slate-200 text-sm font-mono focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 clip-corner-sm transition-colors"
                    style={{ fontFamily: "var(--font-share-tech)" }}
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] font-mono tracking-widest text-cyan-300 mb-1.5 block"
                    style={{ fontFamily: "var(--font-share-tech)" }}
                  >
                    YOUR_EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="> enter email"
                    className="w-full px-3 py-2.5 bg-slate-900/60 border border-cyan-400/20 text-slate-200 text-sm font-mono focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 clip-corner-sm transition-colors"
                    style={{ fontFamily: "var(--font-share-tech)" }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="text-[10px] font-mono tracking-widest text-cyan-300 mb-1.5 block"
                  style={{ fontFamily: "var(--font-share-tech)" }}
                >
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="> type your message here..."
                  className="w-full px-3 py-2.5 bg-slate-900/60 border border-cyan-400/20 text-slate-200 text-sm font-mono focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 clip-corner-sm transition-colors resize-none"
                  style={{ fontFamily: "var(--font-share-tech)" }}
                />
              </div>

              <button
                type="submit"
                className="group relative w-full sm:w-auto px-8 py-3 bg-cyan-400 text-[#050208] font-bold tracking-widest text-sm clip-corner-sm hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  {sent ? "TRANSMITTED ✓" : "TRANSMIT_MESSAGE"}
                </span>
                <div className="absolute inset-0 blur-md bg-cyan-400/50 group-hover:bg-cyan-300/50 -z-10" />
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 border border-green-400/40 bg-green-400/5 text-green-300 text-xs font-mono clip-corner-sm"
                  style={{ fontFamily: "var(--font-share-tech)" }}
                >
                  ✓ MAILTO_LINK_GENERATED — your email client should open shortly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
