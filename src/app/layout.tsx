import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muh Wafa Akmal | AI Enthusiast & Creative Developer",
  description:
    "Portfolio of Muh Wafa Akmal — Informatics Engineering Student, AI Enthusiast, Web3 Explorer, and Technopreneur from UPN Veteran Yogyakarta.",
  keywords: [
    "Muh Wafa Akmal",
    "AI Engineer",
    "Web Developer",
    "Web3",
    "Machine Learning",
    "Portfolio",
    "UPN Veteran Yogyakarta",
  ],
  authors: [{ name: "Muh Wafa Akmal" }],
  openGraph: {
    title: "Muh Wafa Akmal | AI Enthusiast & Creative Developer",
    description: "Futuristic portfolio showcasing AI, Web3, and creative technology projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030308] text-[#E8E8FF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
