"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3 border-b border-[rgba(0,212,255,0.1)]"
          : "py-5 bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-2 group"
          data-cursor
        >
          <div className="w-8 h-8 rounded border border-[#00D4FF] flex items-center justify-center relative overflow-hidden group-hover:border-[#00FFFF] transition-colors">
            <Zap size={14} className="text-[#00FFFF]" />
            <div className="absolute inset-0 bg-[#00D4FF] opacity-0 group-hover:opacity-10 transition-opacity" />
          </div>
          <span
            className="font-orbitron font-bold text-sm tracking-widest gradient-text hidden sm:block"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            WAK
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="relative px-3 py-2 text-xs tracking-widest uppercase transition-all duration-300 group"
                style={{ fontFamily: "Orbitron, sans-serif" }}
                data-cursor
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-[#00FFFF]" : "text-[rgba(232,232,255,0.5)] group-hover:text-[#E8E8FF]"
                  }`}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-[rgba(0,212,255,0.06)] rounded"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00FFFF] rounded-full shadow-[0_0_6px_#00FFFF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="/cv.pdf"
          download
          className="hidden lg:block btn-neon text-xs rounded"
          data-cursor
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#00FFFF] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-cursor
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden glass-strong border-t border-[rgba(0,212,255,0.1)] px-4 py-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`text-left px-4 py-3 rounded text-sm tracking-widest uppercase border transition-all ${
                      isActive
                        ? "border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] text-[#00FFFF]"
                        : "border-transparent text-[rgba(232,232,255,0.6)]"
                    }`}
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
