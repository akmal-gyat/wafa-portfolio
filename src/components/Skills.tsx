"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  {
    id: "ai",
    label: "AI & ML",
    color: "#00FFFF",
    skills: [
      { name: "Python", level: 85, icon: "🐍" },
      { name: "C++", level: 65, icon: "⚡" },
      { name: "Semantic Similarity", level: 78, icon: "🧠" },
      { name: "Data Science", level: 72, icon: "📊" },
      { name: "Machine Learning", level: 76, icon: "🤖" },
    ],
  },
  {
    id: "web",
    label: "Web Dev",
    color: "#00D4FF",
    skills: [
      { name: "JavaScript", level: 82, icon: "🌐" },
      { name: "React", level: 80, icon: "⚛️" },
      { name: "Next.js", level: 75, icon: "▲" },
      { name: "Tailwind CSS", level: 88, icon: "🎨" },
      { name: "Three.js", level: 55, icon: "🌀" },
    ],
  },
  {
    id: "game",
    label: "Game Dev",
    color: "#FF6B9D",
    skills: [
      { name: "2D Game Dev", level: 70, icon: "🎮" },
      { name: "3D Game Dev", level: 55, icon: "🕹️" },
      { name: "Endless Runner", level: 75, icon: "🏃" },
      { name: "Top Down Shooter", level: 72, icon: "🎯" },
    ],
  },
  {
    id: "web3",
    label: "Web3",
    color: "#BB6EFF",
    skills: [
      { name: "Blockchain Tech", level: 65, icon: "⛓️" },
      { name: "Starknet", level: 55, icon: "🔷" },
      { name: "BNB Chain", level: 58, icon: "💛" },
      { name: "Web3 Ecosystem", level: 62, icon: "🌍" },
    ],
  },
  {
    id: "biz",
    label: "Technopreneur",
    color: "#FFD700",
    skills: [
      { name: "Startup Thinking", level: 80, icon: "🚀" },
      { name: "Project Management", level: 75, icon: "📋" },
      { name: "Business Development", level: 70, icon: "📈" },
      { name: "Public Communication", level: 78, icon: "🎤" },
      { name: "Proposal Writing", level: 74, icon: "📝" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("ai");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const active = categories.find((c) => c.id === activeTab)!;

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
            [ 03 ] — SKILLS
          </p>
          <h2
            className="section-title text-4xl sm:text-5xl gradient-text mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            TECH ARSENAL
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#00FFFF] to-transparent" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeTab === cat.id
                  ? "text-black font-bold"
                  : "border-[rgba(232,232,255,0.1)] text-[rgba(232,232,255,0.5)] hover:border-[rgba(232,232,255,0.3)]"
              }`}
              style={{
                fontFamily: "Orbitron, sans-serif",
                ...(activeTab === cat.id
                  ? {
                      background: cat.color,
                      borderColor: cat.color,
                      boxShadow: `0 0 20px ${cat.color}40`,
                    }
                  : {}),
              }}
              data-cursor
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill cards */}
        <motion.div
          key={activeTab}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {active.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="tech-card rounded-xl p-5 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span
                    className="font-semibold text-[rgba(232,232,255,0.9)] text-sm"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {skill.name}
                  </span>
                </div>
                <span
                  className="text-xs font-bold"
                  style={{
                    fontFamily: "Space Mono, monospace",
                    color: active.color,
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Bar */}
              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  style={{
                    background: `linear-gradient(90deg, ${active.color}, #7B2FBE)`,
                    boxShadow: `0 0 8px ${active.color}60`,
                  }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
