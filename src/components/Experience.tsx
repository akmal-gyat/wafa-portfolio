"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Star, ShoppingBag, Car, Code2, TrendingUp } from "lucide-react";

const experiences = [
  {
    icon: Star,
    role: "Google Student Ambassador",
    org: "Google",
    period: "2026 — Present",
    type: "AMBASSADOR",
    color: "#FFD700",
    desc: "Mewakili ekosistem Google di kampus UPN Veteran Yogyakarta. Menyelenggarakan event, workshop, dan menghubungkan mahasiswa dengan program Google.",
    highlights: ["Campus Events", "Google Workspace", "Community Building"],
  },
  {
    icon: Code2,
    role: "AI/ML Intern",
    org: "PT VINIX 7",
    period: "2025",
    type: "INTERNSHIP",
    color: "#00FFFF",
    desc: "Bekerja pada proyek AI dan Machine Learning nyata. Mengimplementasikan model NLP untuk analisis teks dan sistem rekomendasi.",
    highlights: ["Machine Learning", "NLP", "Python", "Data Pipeline"],
  },
  {
    icon: Star,
    role: "AWS AI Academy",
    org: "Amazon Web Services",
    period: "2026",
    type: "CERTIFICATION",
    color: "#FF9900",
    desc: "Program intensif AWS fokus pada AI, Cloud Computing, dan Machine Learning. Memperdalam pemahaman tentang infrastruktur cloud dan AI services.",
    highlights: ["Cloud AI", "AWS Services", "Machine Learning", "Cloud Infra"],
  },
  {
    icon: Car,
    role: "ShopeeFood Driver",
    org: "ShopeeFood · Bali",
    period: "2024",
    type: "EXPERIENCE",
    color: "#FF6B9D",
    desc: "Pengalaman unik sebagai driver ShopeeFood di Bali. Membangun mental resilience, manajemen waktu, dan pemahaman tentang gig economy.",
    highlights: ["Work Ethic", "Time Management", "Customer Service"],
  },
  {
    icon: ShoppingBag,
    role: "TikTok Shop Seller",
    org: "TikTok Commerce",
    period: "2023 — 2024",
    type: "ENTREPRENEUR",
    color: "#BB6EFF",
    desc: "Menjalankan bisnis digital di TikTok Shop. Belajar tentang digital marketing, content creation, supply chain, dan customer acquisition.",
    highlights: ["Digital Marketing", "Content Creation", "E-Commerce", "Business"],
  },
  {
    icon: TrendingUp,
    role: "Banana Chips Business",
    org: "Self-Founded",
    period: "2023",
    type: "ENTREPRENEUR",
    color: "#FFD700",
    desc: "Mendirikan usaha keripik pisang, pengalaman pertama dalam membangun bisnis dari nol — produksi, packaging, pemasaran, hingga distribusi.",
    highlights: ["Product Development", "Marketing", "Operations", "Entrepreneurship"],
  },
];

const typeColors: Record<string, string> = {
  AMBASSADOR: "#FFD700",
  INTERNSHIP: "#00FFFF",
  CERTIFICATION: "#FF9900",
  EXPERIENCE: "#FF6B9D",
  ENTREPRENEUR: "#BB6EFF",
};

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div className="py-32 px-4 sm:px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
            [ 05 ] — EXPERIENCE
          </p>
          <h2
            className="section-title text-4xl sm:text-5xl gradient-text mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            JOURNEY LOG
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#00FFFF] to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00FFFF] via-[#7B2FBE] to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-16 sm:pl-20"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3 sm:left-5 top-6 w-5 h-5 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: `${exp.color}20`,
                    border: `2px solid ${exp.color}`,
                    boxShadow: `0 0 12px ${exp.color}50`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: exp.color }}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass rounded-2xl p-6 group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:translate-x-1"
                  style={{ border: `1px solid ${exp.color}15` }}
                >
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <exp.icon size={14} style={{ color: exp.color }} />
                        <span
                          className="text-[9px] px-2 py-0.5 rounded-full"
                          style={{
                            fontFamily: "Space Mono, monospace",
                            color: typeColors[exp.type] || exp.color,
                            background: `${typeColors[exp.type] || exp.color}15`,
                            border: `1px solid ${typeColors[exp.type] || exp.color}25`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3
                        className="font-bold text-white text-base"
                        style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.9rem" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-xs mt-0.5"
                        style={{ fontFamily: "Space Mono, monospace", color: exp.color }}
                      >
                        {exp.org}
                      </p>
                    </div>
                    <span
                      className="text-[10px] text-[rgba(232,232,255,0.4)] whitespace-nowrap"
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-[rgba(232,232,255,0.6)] text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {exp.desc}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[9px] px-2 py-1 rounded tracking-wider"
                        style={{
                          fontFamily: "Space Mono, monospace",
                          color: "rgba(232,232,255,0.45)",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
