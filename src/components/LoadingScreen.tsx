"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 4 + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 30) setPhase(1);
    if (progress > 70) setPhase(2);
  }, [progress]);

  const clampedProgress = Math.min(progress, 100);

  return (
    <motion.div
      className="loading-screen noise"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Outer ring */}
      <div className="relative flex items-center justify-center">
        <div className="loading-ring-outer absolute" />
        <div className="loading-ring" />

        {/* Center logo */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="font-orbitron text-xs text-[#00FFFF] tracking-[0.3em]">WAK</span>
        </div>
      </div>

      {/* Name */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h1
          className="font-orbitron text-2xl font-bold gradient-text mb-1"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          MUH WAFA AKMAL
        </h1>
        <p
          className="text-[0.65rem] tracking-[0.4em] text-[#00D4FF] uppercase"
          style={{ fontFamily: "Space Mono, monospace" }}
        >
          {phase === 0 && "INITIALIZING SYSTEM..."}
          {phase === 1 && "LOADING EXPERIENCE..."}
          {phase === 2 && "ALMOST READY..."}
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="mt-8 w-64">
        <div className="flex justify-between mb-2">
          <span className="text-[#00D4FF] text-[10px]" style={{ fontFamily: "Space Mono, monospace" }}>
            BOOT_SEQ
          </span>
          <span className="text-[#00FFFF] text-[10px]" style={{ fontFamily: "Space Mono, monospace" }}>
            {Math.floor(clampedProgress)}%
          </span>
        </div>
        <div className="h-[2px] bg-[rgba(0,212,255,0.1)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00FFFF] to-[#7B2FBE] rounded-full"
            style={{ boxShadow: "0 0 8px rgba(0,255,255,0.6)" }}
            initial={{ width: "0%" }}
            animate={{ width: `${clampedProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Binary decoration */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <p className="text-[#00D4FF] text-[9px] opacity-30" style={{ fontFamily: "Space Mono, monospace" }}>
          01001101 01010111 01000001
        </p>
      </div>
    </motion.div>
  );
}
