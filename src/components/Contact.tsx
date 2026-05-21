"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Instagram, Linkedin, Github, MessageCircle, Send, CheckCircle } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "muhwafaakmal@email.com",
    href: "mailto:muhwafaakmal@email.com",
    color: "#00FFFF",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@muhwafaakmal",
    href: "https://github.com/muhwafaakmal",
    color: "#E8E8FF",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muh Wafa Akmal",
    href: "https://linkedin.com/in/muhwafaakmal",
    color: "#0A66C2",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@muhwafaakmal",
    href: "https://instagram.com/muhwafaakmal",
    color: "#E1306C",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 xxx-xxxx-xxxx",
    href: "https://wa.me/62xxxxxxxxxx",
    color: "#25D366",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

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
            [ 07 ] — CONTACT
          </p>
          <h2
            className="section-title text-4xl sm:text-5xl gradient-text mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            LET'S CONNECT
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#00FFFF] to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {sent ? (
              <div className="glass rounded-2xl p-10 neon-border flex flex-col items-center justify-center text-center h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle size={48} className="text-[#39FF14] mx-auto mb-4" />
                </motion.div>
                <h3
                  className="text-xl font-bold gradient-text mb-2"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  MESSAGE SENT!
                </h3>
                <p
                  className="text-[rgba(232,232,255,0.6)]"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  I'll get back to you as soon as possible. Thanks for reaching out!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 neon-border space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-[10px] tracking-widest text-[rgba(232,232,255,0.4)] mb-2 uppercase"
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[10px] tracking-widest text-[rgba(232,232,255,0.4)] mb-2 uppercase"
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[10px] tracking-widest text-[rgba(232,232,255,0.4)] mb-2 uppercase"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label
                    className="block text-[10px] tracking-widest text-[rgba(232,232,255,0.4)] mb-2 uppercase"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="neon-input w-full px-4 py-3 rounded-lg text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full rounded-lg flex items-center justify-center gap-3 disabled:opacity-50"
                  data-cursor
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </span>
                  ) : (
                    <>
                      <Send size={14} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Socials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8 neon-border mb-6">
              <h3
                className="font-bold text-sm text-[#00FFFF] mb-2"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                OPEN TO OPPORTUNITIES
              </h3>
              <p
                className="text-[rgba(232,232,255,0.6)] text-sm leading-relaxed"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Saya terbuka untuk collaborasi project, internship, freelance,
                atau sekedar diskusi tentang AI, Web3, dan inovasi teknologi.
                Let's build something amazing together! 🚀
              </p>
            </div>

            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-4 group border border-[rgba(0,212,255,0.08)] hover:border-[rgba(0,212,255,0.25)] transition-all duration-300 hover:translate-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  data-cursor
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}25`,
                    }}
                  >
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-widest text-[rgba(232,232,255,0.4)] uppercase"
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="text-sm text-[rgba(232,232,255,0.8)] group-hover:text-white transition-colors"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      {s.value}
                    </div>
                  </div>
                  <div
                    className="ml-auto text-[rgba(232,232,255,0.2)] group-hover:text-[#00FFFF] transition-colors text-xs"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
