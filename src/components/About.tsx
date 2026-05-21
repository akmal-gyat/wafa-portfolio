"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Rocket, Users, Code2, TrendingUp, Lightbulb } from "lucide-react";

const traits = [
  { icon: Brain, label: "AI Enthusiast", desc: "Passionate tentang Artificial Intelligence dan Machine Learning sebagai teknologi masa depan.", color: "#00FFFF" },
  { icon: Rocket, label: "Technopreneur", desc: "Menggabungkan teknologi dengan bisnis untuk menciptakan solusi inovatif yang berdampak nyata.", color: "#BB6EFF" },
  { icon: Code2, label: "Creative Dev", desc: "Membangun project nyata mulai dari AI, Web Development, Game Dev, hingga Web3.", color: "#00D4FF" },
  { icon: Users, label: "Community Builder", desc: "Aktif berkontribusi di komunitas teknologi dan program pengembangan diri.", color: "#FF6B9D" },
  { icon: TrendingUp, label: "Hustler", desc: "Memiliki track record bisnis digital dari TikTok Shop hingga produk kuliner.", color: "#FFD700" },
  { icon: Lightbulb, label: "Visioner", desc: "Selalu satu langkah lebih maju, memandang teknologi sebagai jembatan menuju masa depan.", color: "#39FF14" },
];

const timeline = [
  { year: "2023", event: "Memulai perjalanan di UPN Veteran Yogyakarta" },
  { year: "2024", event: "Aktif di bisnis digital & komunitas teknologi" },
  { year: "2025", event: "Internship AI/ML di PT VINIX 7 & Google Ambassador" },
  { year: "2026", event: "AWS AI Academy, Find IT Hackathon & Web3 Exploration" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="py-32 px-4 sm:px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
            [ 01 ] — ABOUT ME
          </p>
          <h2
            className="section-title text-4xl sm:text-5xl gradient-text mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            WHO AM I?
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#00FFFF] to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 mb-8 neon-border hologram">
              <p
                className="text-[rgba(232,232,255,0.75)] leading-relaxed text-lg mb-4"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Saya adalah{" "}
                <span className="text-[#00FFFF] font-semibold">Muh Wafa Akmal</span>
                , mahasiswa Teknik Informatika{" "}
                <span className="text-[#BB6EFF] font-semibold">
                  UPN "Veteran" Yogyakarta
                </span>{" "}
                dengan karakter hustler, ambisius, dan sangat adaptif terhadap
                perkembangan teknologi modern.
              </p>
              <p
                className="text-[rgba(232,232,255,0.65)] leading-relaxed"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Bukan sekadar mahasiswa biasa — saya aktif membangun pengalaman
                nyata melalui bisnis digital, komunitas teknologi, dan project
                inovatif. Dengan passion besar di{" "}
                <span className="text-[#00D4FF]">AI/ML</span>,{" "}
                <span className="text-[#00FFFF]">Web Development</span>,{" "}
                <span className="text-[#BB6EFF]">Web3</span>, dan{" "}
                <span className="text-[#FF6B9D]">Game Development</span>, saya
                selalu mendorong diri untuk terus berkembang dan berinovasi.
              </p>
            </div>

            {/* Mini Timeline */}
            <div>
              <p
                className="text-xs tracking-widest text-[rgba(232,232,255,0.4)] uppercase mb-4"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                JOURNEY TIMELINE
              </p>
              <div className="relative pl-6">
                <div className="timeline-line absolute left-0 top-0 bottom-0" />
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative mb-6 last:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="timeline-dot absolute -left-[22px] top-1" />
                    <span
                      className="text-[#00D4FF] text-xs block mb-1"
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      {item.year}
                    </span>
                    <p className="text-[rgba(232,232,255,0.65)] text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      {item.event}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                className="glass rounded-xl p-5 neon-border group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:translate-y-[-4px] cursor-default"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300"
                  style={{
                    background: `${trait.color}15`,
                    border: `1px solid ${trait.color}30`,
                  }}
                >
                  <trait.icon size={18} style={{ color: trait.color }} />
                </div>
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ fontFamily: "Orbitron, sans-serif", color: trait.color }}
                >
                  {trait.label}
                </h3>
                <p
                  className="text-[rgba(232,232,255,0.55)] text-xs leading-relaxed"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
