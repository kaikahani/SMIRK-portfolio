/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    // Prefer CJS entry points so webpack 4 doesn’t grab ESM
    // (webpack 4 default is ['browser','module','main'])
    config.resolve.mainFields = ['browser', 'main', 'module'];

    // Force framer-motion to CJS bundle
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'framer-motion': require.resolve(
        'framer-motion/dist/framer-motion.cjs.js',
      ),
    };

    return config;
  },
};

module.exports = nextConfig;
