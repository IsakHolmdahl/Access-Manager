import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WEB_COMPUTE platform supports API routes natively
  // No output: 'export' needed - standard Next.js output works
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
