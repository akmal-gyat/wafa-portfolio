"use client";

import { motion } from "framer-motion";
import { Zap, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[rgba(0,212,255,0.08)] py-12 px-4 sm:px-6">
      {/* Glow line at top */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-[#00D4FF] flex items-center justify-center">
              <Zap size={14} className="text-[#00FFFF]" />
            </div>
            <div>
              <p
                className="font-bold text-sm gradient-text"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                MUH WAFA AKMAL
              </p>
              <p
                className="text-[9px] text-[rgba(232,232,255,0.3)] tracking-widest uppercase"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                AI Enthusiast · Creative Developer
              </p>
            </div>
          </div>

          {/* Center */}
          <div className="text-center">
            <p
              className="text-[10px] text-[rgba(232,232,255,0.3)] tracking-widest"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              BUILT WITH NEXT.JS · TAILWIND · FRAMER MOTION
            </p>
            <p
              className="text-[10px] text-[rgba(232,232,255,0.2)] mt-1"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              © 2025 Muh Wafa Akmal · All Rights Reserved
            </p>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg border border-[rgba(0,212,255,0.2)] flex items-center justify-center text-[rgba(232,232,255,0.4)] hover:text-[#00FFFF] hover:border-[rgba(0,212,255,0.4)] transition-all"
            whileHover={{ y: -2 }}
            data-cursor
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 flex justify-center">
          <p
            className="text-[8px] text-[rgba(232,232,255,0.1)] tracking-[0.5em] uppercase"
            style={{ fontFamily: "Space Mono, monospace" }}
          >
            INFORMATICS ENGINEERING · UPN VETERAN YOGYAKARTA · 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
