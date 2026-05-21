"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail, ChevronDown, Cpu, Globe, Zap } from "lucide-react";

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative corner brackets */}
      <div className="absolute top-24 left-6 w-12 h-12 border-t-2 border-l-2 border-[rgba(0,212,255,0.3)]" />
      <div className="absolute top-24 right-6 w-12 h-12 border-t-2 border-r-2 border-[rgba(0,212,255,0.3)]" />
      <div className="absolute bottom-16 left-6 w-12 h-12 border-b-2 border-l-2 border-[rgba(0,212,255,0.3)]" />
      <div className="absolute bottom-16 right-6 w-12 h-12 border-b-2 border-r-2 border-[rgba(0,212,255,0.3)]" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[20vw] font-black opacity-[0.015] text-white"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          WAK
        </span>
      </div>

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text */}
        <div className="order-2 lg:order-1">
          {/* System tag */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-[#00FF9D] rounded-full shadow-[0_0_8px_#00FF9D] animate-pulse" />
            <span
              className="section-tag"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              SYSTEM ONLINE · PORTFOLIO v2.0
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="font-orbitron font-black leading-[1.1] mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="text-5xl sm:text-6xl lg:text-7xl block text-white">
              MUH WAFA
            </span>
            <span className="text-5xl sm:text-6xl lg:text-7xl block gradient-text mt-1">
              AKMAL
            </span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            className="mb-6 h-8 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span
              className="text-[#00D4FF] text-lg font-medium"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              {"// "}
            </span>
            <TypeAnimation
              sequence={[
                "AI Enthusiast", 2000,
                "Web3 Explorer", 2000,
                "Creative Technologist", 2000,
                "Future Startup Founder", 2000,
                "Machine Learning Developer", 2000,
                "Game Developer", 2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-[#E8E8FF] text-lg font-medium ml-2"
              style={{ fontFamily: "Space Mono, monospace" }}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-[rgba(232,232,255,0.65)] text-base leading-relaxed mb-8 max-w-lg"
            style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "1.05rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Mahasiswa Teknik Informatika UPN "Veteran" Yogyakarta. Hustler,
            ambisius, dan visioner. Membangun inovasi nyata di persimpangan{" "}
            <span className="text-[#00FFFF]">AI</span>,{" "}
            <span className="text-[#BB6EFF]">Web3</span>, dan{" "}
            <span className="text-[#00D4FF]">creative technology</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <button
              onClick={() => handleScroll("projects")}
              className="btn-primary rounded flex items-center gap-2"
              data-cursor
            >
              Explore Portfolio
              <ArrowRight size={14} />
            </button>
            <a
              href="/cv.pdf"
              download
              className="btn-neon rounded flex items-center gap-2"
              data-cursor
            >
              <Download size={14} />
              Download CV
            </a>
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-2 px-6 py-3 rounded border border-[rgba(232,232,255,0.1)] text-[rgba(232,232,255,0.6)] hover:text-white hover:border-[rgba(232,232,255,0.3)] transition-all text-xs tracking-widest uppercase"
              style={{ fontFamily: "Orbitron, sans-serif" }}
              data-cursor
            >
              <Mail size={14} />
              Contact
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {[
              { label: "Projects", value: "10+" },
              { label: "Achievements", value: "08" },
              { label: "Technologies", value: "20+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold gradient-text"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[10px] tracking-widest text-[rgba(232,232,255,0.4)] uppercase"
                  style={{ fontFamily: "Space Mono, monospace" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Avatar / Hologram card */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-[-20px] rounded-full border border-[rgba(0,212,255,0.15)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00FFFF] rounded-full shadow-[0_0_10px_#00FFFF]" />
            </motion.div>

            {/* Second rotating ring */}
            <motion.div
              className="absolute inset-[-40px] rounded-full border border-[rgba(123,47,190,0.1)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-8 right-0 w-2 h-2 bg-[#7B2FBE] rounded-full shadow-[0_0_8px_#7B2FBE]" />
            </motion.div>

            {/* Avatar container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden neon-border-animated hologram">
              {/* Gradient placeholder (replace with <Image> when you have a photo) */}
              <div className="w-full h-full bg-gradient-to-br from-[#0A0A2E] via-[#1a0a3e] to-[#0A0A1A] flex items-center justify-center">
                <span
                  className="text-8xl font-black gradient-text select-none"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  WA
                </span>
              </div>

              {/* Scan line overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,212,255,0.03)] to-transparent animate-scan-line pointer-events-none" />
            </div>

            {/* Floating badge cards */}
            <motion.div
              className="absolute -bottom-4 -left-8 glass rounded-lg px-3 py-2 border border-[rgba(0,255,255,0.2)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <Cpu size={12} className="text-[#00FFFF]" />
                <span className="text-[10px] text-[#00FFFF]" style={{ fontFamily: "Space Mono, monospace" }}>
                  AI / ML
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-8 glass rounded-lg px-3 py-2 border border-[rgba(123,47,190,0.3)]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Globe size={12} className="text-[#BB6EFF]" />
                <span className="text-[10px] text-[#BB6EFF]" style={{ fontFamily: "Space Mono, monospace" }}>
                  WEB3
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-14 glass rounded-lg px-3 py-2 border border-[rgba(0,212,255,0.2)]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            >
              <div className="flex items-center gap-2">
                <Zap size={12} className="text-[#00D4FF]" />
                <span className="text-[10px] text-[#00D4FF]" style={{ fontFamily: "Space Mono, monospace" }}>
                  DEV
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[rgba(232,232,255,0.4)] hover:text-[#00FFFF] transition-colors"
        onClick={() => handleScroll("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        data-cursor
      >
        <span className="text-[9px] tracking-[0.3em] uppercase" style={{ fontFamily: "Space Mono, monospace" }}>
          SCROLL
        </span>
        <ChevronDown size={16} />
      </motion.button>
    </div>
  );
}
