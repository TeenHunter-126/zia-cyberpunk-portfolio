"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  header: ReactNode;
  children: ReactNode;
  /** Always-expanded on desktop (>= sm). Default true. */
  expandOnDesktop?: boolean;
  /** Default open state on mobile. Default false. */
  defaultOpen?: boolean;
  /** Accent color for the chevron. */
  accentColor?: string;
  className?: string;
};

export default function CollapsibleCard({
  header,
  children,
  expandOnDesktop = true,
  defaultOpen = false,
  accentColor = "#00f0ff",
  className = "",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      {/* Header — clickable on mobile, static on desktop */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full text-left ${expandOnDesktop ? "sm:cursor-default" : ""}`}
        aria-expanded={open}
      >
        {header}
      </button>

      {/* Body — on desktop always visible, on mobile animated */}
      {expandOnDesktop ? (
        <>
          {/* Desktop: always visible */}
          <div className="hidden sm:block">{children}</div>
          {/* Mobile: animated */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="mobile-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="sm:hidden overflow-hidden"
              >
                <div className="pt-3">{children}</div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Mobile expand/collapse affordance */}
          <div className="sm:hidden flex items-center justify-center mt-2">
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-slate-400"
              style={{ fontFamily: "var(--font-share-tech)", color: accentColor }}
            >
              <ChevronDown className="w-3 h-3" style={{ color: accentColor }} />
              {open ? "TAP_TO_COLLAPSE" : "TAP_TO_EXPAND"}
            </motion.span>
          </div>
        </>
      ) : (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
