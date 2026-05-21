"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const row1 = [
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#FFFFFF" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "Three.js", icon: "🌀", color: "#000000" },
  { name: "Git", icon: "🌿", color: "#F05032" },
  { name: "C++", icon: "⚡", color: "#00599C" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#FFFFFF" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "Three.js", icon: "🌀", color: "#000000" },
  { name: "Git", icon: "🌿", color: "#F05032" },
  { name: "C++", icon: "⚡", color: "#00599C" },
];

const row2 = [
  { name: "AI Tools", icon: "🤖", color: "#00FFFF" },
  { name: "Starknet", icon: "🔷", color: "#00C4FF" },
  { name: "BNB Chain", icon: "💛", color: "#F3BA2F" },
  { name: "Blockchain", icon: "⛓️", color: "#BB6EFF" },
  { name: "Machine Learning", icon: "🧠", color: "#FF6B9D" },
  { name: "Data Science", icon: "📊", color: "#39FF14" },
  { name: "Unity", icon: "🎮", color: "#FFFFFF" },
  { name: "Figma", icon: "🎨", color: "#F24E1E" },
  { name: "AI Tools", icon: "🤖", color: "#00FFFF" },
  { name: "Starknet", icon: "🔷", color: "#00C4FF" },
  { name: "BNB Chain", icon: "💛", color: "#F3BA2F" },
  { name: "Blockchain", icon: "⛓️", color: "#BB6EFF" },
  { name: "Machine Learning", icon: "🧠", color: "#FF6B9D" },
  { name: "Data Science", icon: "📊", color: "#39FF14" },
  { name: "Unity", icon: "🎮", color: "#FFFFFF" },
  { name: "Figma", icon: "🎨", color: "#F24E1E" },
];

function TechBadge({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-full mx-2 border transition-all hover:scale-105"
      style={{
        background: `${color}08`,
        borderColor: `${color}20`,
        color: color,
      }}
    >
      <span className="text-lg">{icon}</span>
      <span
        className="text-xs font-medium tracking-wider whitespace-nowrap"
        style={{ fontFamily: "Space Mono, monospace", color: "rgba(232,232,255,0.7)" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
            [ 06 ] — TECH STACK
          </p>
          <h2
            className="section-title text-4xl sm:text-5xl gradient-text mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            TOOLS & TECH
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#00FFFF] to-transparent" />
        </motion.div>
      </div>

      {/* Marquee row 1 — left */}
      <div className="marquee-container mb-4">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {row1.map((t, i) => (
            <TechBadge key={`r1-${i}`} {...t} />
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 — right */}
      <div className="marquee-container">
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {row2.map((t, i) => (
            <TechBadge key={`r2-${i}`} {...t} />
          ))}
        </motion.div>
      </div>

      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[400px] h-[100px] bg-[radial-gradient(ellipse,rgba(0,212,255,0.04)_0%,transparent_70%)]" />
      </div>
    </div>
  );
}
