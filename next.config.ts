import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== Enables Static Exports
  images: {
    unoptimized: true, // <=== Required for Next.js Image to work on GitHub Pages
  },
};

export default nextConfig;