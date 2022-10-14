/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  exports: {
    trailingSlash: true,
  },
};

module.exports = nextConfig;
