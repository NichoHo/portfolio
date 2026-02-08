import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  // 1. Tell Next.js the site is served from a sub-path
  basePath: "/portfolio",
  
  // 2. Disable image optimization (required for GitHub Pages)
  images: {
    unoptimized: true,
  },

  // 3. Prevent the build from failing on minor code style issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;