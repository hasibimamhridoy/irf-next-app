import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Enable type checking during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Enable linting during build
    ignoreDuringBuilds: true,
  },

  images: {
    domains: [
      "irf-cms.muhammadyeasin.com", // Microlink Image Preview
      "images.unsplash.com", // Microlink Image Preview
      "lottie.host", // Microlink Image Preview
    ],
  },
};

export default nextConfig;
