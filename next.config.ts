import type { NextConfig } from "next";
import path from "node:path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  compress: true,
  // Pin the project root: a stray package-lock.json in the home folder made Next pick the wrong root
  // (Tailwind could not be resolved with `npm run dev`).
  turbopack: { root: path.resolve(__dirname) },
  outputFileTracingRoot: path.resolve(__dirname),
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" }
    ],
    formats: ['image/webp', 'image/avif'],
    // Optimized images are cached for 30 days instead of being re-generated every minute.
    minimumCacheTTL: 2592000,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default withNextIntl(nextConfig);
