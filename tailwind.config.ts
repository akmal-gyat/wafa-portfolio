import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neon-cyan": "#00FFFF",
        "neon-blue": "#00D4FF",
        "electric-purple": "#7B2FBE",
        "deep-purple": "#4A0E8F",
        "neon-green": "#39FF14",
        "hot-pink": "#FF0090",
        "dark-base": "#030308",
        "dark-card": "#0A0A1A",
        "dark-border": "#1A1A3E",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        body: ["var(--font-rajdhani)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "spin-slow": "spin 20s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "marquee-left": "marqueeLeft 25s linear infinite",
        "marquee-right": "marqueeRight 25s linear infinite",
        "scan-line": "scanLine 4s linear infinite",
        glitch: "glitch 0.3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        borderGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF",
          },
          "50%": {
            boxShadow:
              "0 0 10px #7B2FBE, 0 0 20px #7B2FBE, 0 0 40px #7B2FBE",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-2px)" },
          "20%": { transform: "translateX(2px)" },
          "30%": { transform: "translateX(-1px)" },
          "40%": { transform: "translateX(1px)" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0, 255, 255, 0.5)",
        "neon-purple": "0 0 20px rgba(123, 47, 190, 0.5)",
        "neon-blue": "0 0 20px rgba(0, 212, 255, 0.5)",
        "card-glow": "0 0 40px rgba(0, 212, 255, 0.1)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
