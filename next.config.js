/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flagcdn.com'],
  },
  // Add any other configurations you need
};

module.exports = nextConfig;
