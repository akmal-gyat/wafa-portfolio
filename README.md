# 🚀 Muh Wafa Akmal — Futuristic Portfolio

> Ultra-modern, futuristic AI engineer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

![Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Preview](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)
![Preview](https://img.shields.io/badge/Framer-Motion-pink?style=for-the-badge)
![Preview](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)

---

## ✨ Features

- 🎬 **Cinematic Loading Screen** — animated boot sequence
- 🖱️ **Custom Cursor** — glowing dot + smooth ring follower
- ⚡ **Scroll Progress Bar** — neon gradient indicator
- 🌊 **Particle Background** — animated canvas particles
- 🔭 **Glassmorphism UI** — frosted glass cards throughout
- 🌀 **Framer Motion** — smooth scroll-triggered animations
- 💫 **Animated Navbar** — with active section detection
- 📱 **Fully Responsive** — mobile, tablet, desktop, ultrawide
- 🎨 **Cyberpunk Aesthetic** — neon cyan, electric purple, dark base

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (section assembly)
│   └── globals.css         # Global styles + CSS variables
└── components/
    ├── LoadingScreen.tsx   # Cinematic loading animation
    ├── CustomCursor.tsx    # Custom cursor with glow
    ├── ScrollProgress.tsx  # Top scroll indicator
    ├── ScanLine.tsx        # CRT scan line effect
    ├── ParticleBackground.tsx  # Canvas particle system
    ├── Navbar.tsx          # Animated nav with active indicator
    ├── Hero.tsx            # Landing hero section
    ├── About.tsx           # About me + timeline
    ├── Achievements.tsx    # Bento grid achievements
    ├── Skills.tsx          # Tabbed skill showcase
    ├── Projects.tsx        # Project cards
    ├── Experience.tsx      # Timeline experience
    ├── TechStack.tsx       # Infinite marquee tech logos
    ├── Contact.tsx         # Contact form + social links
    └── Footer.tsx          # Footer
```

---

## 🛠 Installation

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/wafa-portfolio.git
cd wafa-portfolio

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Build for Production

```bash
npm run build
npm run start
```

---

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Click **Deploy** — Vercel auto-detects Next.js ✅

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/wafa-portfolio)

---

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --neon-cyan: #00FFFF;
  --neon-blue: #00D4FF;
  --electric-purple: #7B2FBE;
  --dark-base: #030308;
}
```

### Personal Info
- **Hero**: `src/components/Hero.tsx` — name, typing text, stats
- **About**: `src/components/About.tsx` — bio, traits, timeline
- **Achievements**: `src/components/Achievements.tsx` — achievement list
- **Skills**: `src/components/Skills.tsx` — skill categories
- **Projects**: `src/components/Projects.tsx` — project cards
- **Experience**: `src/components/Experience.tsx` — work history
- **Contact**: `src/components/Contact.tsx` — social links + email

### Adding Your Photo
In `src/components/Hero.tsx`, replace the placeholder div with:

```tsx
import Image from "next/image";

// Replace the gradient div with:
<Image
  src="/avatar.jpg"
  alt="Muh Wafa Akmal"
  fill
  className="object-cover"
/>
```

Then add your photo as `public/avatar.jpg`.

### CV / Resume
Place your CV as `public/cv.pdf` — the Download CV button will automatically link to it.

---

## 📦 Tech Stack

| Tech | Use |
|------|-----|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| React Type Animation | Typing effect |
| React Intersection Observer | Scroll triggers |
| React CountUp | Animated counters |

---

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|-----------|
| Mobile | < 640px |
| Tablet | 640px — 1024px |
| Desktop | 1024px — 1280px |
| Ultrawide | > 1280px |

---

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

## 📄 License

MIT License — feel free to use and modify.

---

Made with ❤️ by **Muh Wafa Akmal**  
*Informatics Engineering Student · UPN "Veteran" Yogyakarta*
