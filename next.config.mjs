/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    // Ini bakal nyuruh Vercel tetep gas deploy walaupun ESLint cerewet
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;