"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ScanLine from "@/components/ScanLine";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <ScanLine />
        <CustomCursor />
        <ScrollProgress />
        <ParticleBackground />

        {/* Ambient background glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#7B2FBE] opacity-[0.04] blur-[120px]" />
          <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] rounded-full bg-[#00D4FF] opacity-[0.04] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#00FFFF] opacity-[0.03] blur-[100px]" />
        </div>

        {/* Cyber grid overlay */}
        <div className="fixed inset-0 cyber-grid-bg pointer-events-none z-0 opacity-100" />

        <Navbar />

        <main className="relative z-10">
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="achievements"><Achievements /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="tech"><TechStack /></section>
          <section id="contact"><Contact /></section>
        </main>

        <Footer />
      </div>
    </>
  );
}
