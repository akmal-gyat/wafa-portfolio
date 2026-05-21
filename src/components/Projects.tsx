"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Cpu, Globe, Gamepad2, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Plagiarism Detector",
    subtitle: "Semantic Similarity Engine",
    desc: "Sistem deteksi plagiarisme berbasis AI menggunakan teknik Semantic Similarity dan Natural Language Processing untuk analisis teks mendalam.",
    tags: ["Python", "NLP", "Semantic Similarity", "Machine Learning"],
    icon: Cpu,
    color: "#00FFFF",
    gradient: "from-[#00FFFF20] to-[#00D4FF05]",
    demo: "#",
    github: "#",
    status: "COMPLETED",
  },
  {
    id: 2,
    title: "Vehicle Reminder Service",
    subtitle: "Smart Notification App",
    desc: "Aplikasi pengingat servis kendaraan cerdas dengan notifikasi otomatis berdasarkan kilometer dan jadwal servis berkala.",
    tags: ["JavaScript", "React", "Node.js", "Firebase"],
    icon: Globe,
    color: "#00D4FF",
    gradient: "from-[#00D4FF20] to-[#7B2FBE05]",
    demo: "#",
    github: "#",
    status: "COMPLETED",
  },
  {
    id: 3,
    title: "Endless Runner Game",
    subtitle: "2D Arcade Experience",
    desc: "Game endless runner 2D dengan mekanisme obstacle generation dinamis, scoring system, dan power-up yang adiktif.",
    tags: ["Game Dev", "2D", "JavaScript", "Canvas API"],
    icon: Gamepad2,
    color: "#FF6B9D",
    gradient: "from-[#FF6B9D20] to-[#FF6B9D05]",
    demo: "#",
    github: "#",
    status: "COMPLETED",
  },
  {
    id: 4,
    title: "Top Down Shooter",
    subtitle: "Action Game Project",
    desc: "Game top-down shooter dengan AI musuh adaptif, multiple weapon system, dan level generation procedural.",
    tags: ["Game Dev", "3D", "Unity", "C#"],
    icon: Gamepad2,
    color: "#BB6EFF",
    gradient: "from-[#BB6EFF20] to-[#7B2FBE05]",
    demo: "#",
    github: "#",
    status: "IN DEVELOPMENT",
  },
  {
    id: 5,
    title: "Futuristic Web Portfolio",
    subtitle: "This Very Website",
    desc: "Portfolio web futuristik dengan Three.js, Framer Motion, glassmorphism UI, dan efek visual cyberpunk premium.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
    icon: Code2,
    color: "#39FF14",
    gradient: "from-[#39FF1420] to-[#00FFFF05]",
    demo: "#",
    github: "https://github.com/muhwafaakmal",
    status: "LIVE",
  },
  {
    id: 6,
    title: "Web3 Community Explorer",
    subtitle: "Blockchain Ecosystem",
    desc: "Eksplorasi ekosistem Web3 pada Starknet dan BNB Chain, mengikuti program komunitas blockchain Indonesia.",
    tags: ["Starknet", "BNB Chain", "Web3", "Blockchain"],
    icon: Globe,
    color: "#FFD700",
    gradient: "from-[#FFD70020] to-[#FF990005]",
    demo: "#",
    github: "#",
    status: "EXPLORING",
  },
];

const statusColors: Record<string, string> = {
  COMPLETED: "#39FF14",
  "IN DEVELOPMENT": "#FFD700",
  LIVE: "#00FFFF",
  EXPLORING: "#BB6EFF",
};

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div className="py-32 px-4 sm:px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
            [ 04 ] — PROJECTS
          </p>
          <h2
            className="section-title text-4xl sm:text-5xl gradient-text mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            BUILT BY ME
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#00FFFF] to-transparent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={`project-card rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} group`}
              style={{ border: `1px solid ${p.color}15` }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, borderColor: `${p.color}40` }}
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                {/* Status + icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${p.color}15`,
                      border: `1px solid ${p.color}25`,
                    }}
                  >
                    <p.icon size={22} style={{ color: p.color }} />
                  </div>
                  <span
                    className="text-[9px] px-2 py-1 rounded-full font-medium"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      color: statusColors[p.status] || "#00FFFF",
                      background: `${statusColors[p.status] || "#00FFFF"}15`,
                      border: `1px solid ${statusColors[p.status] || "#00FFFF"}25`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-white text-base mb-1 group-hover:transition-colors"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: "0.95rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "Space Mono, monospace",
                    color: p.color,
                    opacity: 0.7,
                  }}
                >
                  {p.subtitle}
                </p>
                <p
                  className="text-[rgba(232,232,255,0.6)] text-sm leading-relaxed"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-2 py-1 rounded tracking-wider"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      color: "rgba(232,232,255,0.5)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div
                className="px-6 py-4 border-t flex gap-3"
                style={{ borderColor: `${p.color}12` }}
              >
                <a
                  href={p.demo}
                  className="flex items-center gap-2 text-xs transition-colors hover:opacity-80"
                  style={{ color: p.color, fontFamily: "Space Mono, monospace" }}
                  data-cursor
                >
                  <ExternalLink size={12} />
                  DEMO
                </a>
                <a
                  href={p.github}
                  className="flex items-center gap-2 text-xs text-[rgba(232,232,255,0.5)] hover:text-white transition-colors"
                  style={{ fontFamily: "Space Mono, monospace" }}
                  data-cursor
                >
                  <Github size={12} />
                  SOURCE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
