import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath if you're deploying to a custom domain
  basePath: '',
};

export default nextConfig;
