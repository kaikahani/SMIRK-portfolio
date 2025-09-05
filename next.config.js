/** @type {import('next').NextConfig} */
const nextConfig = {
  // DO NOT force webpack5 here; staying on webpack4 keeps everything identical
  webpack: (config) => {
    // Prefer CJS entry points so webpack 4 doesn’t grab ESM
    // (webpack 4 default is ['browser','module','main'])
    config.resolve.mainFields = ['browser', 'main', 'module'];

    // No framer-motion CJS alias; using only top-level imports for portability

    return config;
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
