/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC minification to prevent WebAssembly memory errors
  swcMinify: false,
  // Use webpack's built-in minification instead of SWC
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization.minimize = true;
    }
    // Reduce memory usage by limiting parallel processing
    config.parallelism = 1;
    return config;
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
