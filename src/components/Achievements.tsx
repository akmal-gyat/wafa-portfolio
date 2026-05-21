"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award, Cloud, Cpu, Code2, Zap, Users, BookOpen, Star,
} from "lucide-react";
import CountUp from "react-countup";

const achievements = [
  {
    id: 1,
    icon: Star,
    title: "Google Student Ambassador",
    year: "2026",
    desc: "Terpilih sebagai Google Student Ambassador, mewakili ekosistem Google di kampus.",
    color: "#FFD700",
    tag: "AMBASSADOR",
    size: "large",
  },
  {
    id: 2,
    icon: Cloud,
    title: "AWS AI Academy",
    year: "2026",
    desc: "Program intensif AI & Cloud Computing dari Amazon Web Services.",
    color: "#FF9900",
    tag: "CLOUD",
    size: "normal",
  },
  {
    id: 3,
    icon: Cpu,
    title: "AI/ML Internship",
    year: "2025",
    desc: "Internship di PT VINIX 7 mengerjakan proyek AI dan Machine Learning nyata.",
    color: "#00FFFF",
    tag: "INTERNSHIP",
    size: "normal",
  },
  {
    id: 4,
    icon: Code2,
    title: "Find IT 2026 Hackathon",
    year: "2026",
    desc: "Berpartisipasi dalam Find IT Hackathon, kompetisi teknologi bergengsi nasional.",
    color: "#BB6EFF",
    tag: "HACKATHON",
    size: "large",
  },
  {
    id: 5,
    icon: Zap,
    title: "Pertamuda Workshop",
    year: "2025",
    desc: "Seri workshop inovasi energi dan technopreneurship dari Pertamina Muda.",
    color: "#00FF9D",
    tag: "WORKSHOP",
    size: "normal",
  },
  {
    id: 6,
    icon: Users,
    title: "HQ Indonesia Co-Learning",
    year: "2025",
    desc: "Bergabung dalam HQ Indonesia Co Learning Camp Batch 6, kolaborasi antar developer.",
    color: "#FF6B9D",
    tag: "COMMUNITY",
    size: "normal",
  },
  {
    id: 7,
    icon: BookOpen,
    title: "Career Insight UGM",
    year: "2025",
    desc: "Bootcamp pengembangan karir di Universitas Gadjah Mada.",
    color: "#00D4FF",
    tag: "BOOTCAMP",
    size: "normal",
  },
  {
    id: 8,
    icon: Award,
    title: "Novo Club",
    year: "2025",
    desc: "Member aktif Novo Club, komunitas inovator muda Indonesia.",
    color: "#7B2FBE",
    tag: "CLUB",
    size: "normal",
  },
];

const stats = [
  { label: "Achievements", value: 8, suffix: "+" },
  { label: "Communities", value: 5, suffix: "+" },
  { label: "Workshops", value: 10, suffix: "+" },
];

export default function Achievements() {
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
            [ 02 ] — ACHIEVEMENTS
          </p>
          <h2
            className="section-title text-4xl sm:text-5xl gradient-text mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            UNLOCKED MILESTONES
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#00FFFF] to-transparent" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-5 text-center neon-border">
              <div
                className="text-3xl font-black gradient-text mb-1"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {inView ? (
                  <CountUp end={s.value} duration={2} suffix={s.suffix} />
                ) : "0"}
              </div>
              <div
                className="text-[10px] tracking-widest text-[rgba(232,232,255,0.4)] uppercase"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              className={`achievement-card rounded-2xl p-6 relative overflow-hidden group ${
                a.size === "large"
                  ? "sm:col-span-2"
                  : ""
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              data-cursor
            >
              {/* Background accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 20% 50%, ${a.color}08 0%, transparent 60%)`,
                }}
              />

              {/* Tag */}
              <div
                className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] tracking-widest mb-4"
                style={{
                  fontFamily: "Space Mono, monospace",
                  background: `${a.color}15`,
                  color: a.color,
                  border: `1px solid ${a.color}25`,
                }}
              >
                {a.tag}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${a.color}12`,
                  border: `1px solid ${a.color}25`,
                  boxShadow: `0 0 20px ${a.color}10`,
                }}
              >
                <a.icon size={22} style={{ color: a.color }} />
              </div>

              <h3
                className="font-bold text-sm text-white mb-2 group-hover:text-[#00FFFF] transition-colors"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {a.title}
              </h3>

              <p
                className="text-[rgba(232,232,255,0.55)] text-xs leading-relaxed mb-3"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {a.desc}
              </p>

              <span
                className="text-[10px]"
                style={{ fontFamily: "Space Mono, monospace", color: a.color }}
              >
                {a.year}
              </span>

              {/* Corner glow */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-20"
                style={{ background: `radial-gradient(circle, ${a.color} 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
