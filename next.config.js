/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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