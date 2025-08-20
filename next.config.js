/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable experimental features that might cause memory issues
  experimental: {
    forceSwcTransforms: false,
  },
  // Disable SWC completely
  swcMinify: false,
  // Reduce memory usage
  webpack: (config, { dev, isServer }) => {
    // Disable SWC loader
    config.module.rules.forEach((rule) => {
      if (rule.use && rule.use.loader === 'next-swc-loader') {
        rule.use.loader = 'babel-loader';
      }
    });
    
    // Reduce memory usage
    config.optimization = {
      ...config.optimization,
      minimize: false, // Disable minification entirely for now
    };
    
    // Limit parallel processing
    config.parallelism = 1;
    
    return config;
  },
  // Static export settings
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  // Disable TypeScript checking during build to save memory
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;