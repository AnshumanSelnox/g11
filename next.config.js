/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    experimental: {
      largePageDataBytes: 800 * 1000,
    },
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
