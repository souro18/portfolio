/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
      },
    ],
  },}

module.exports = nextConfig
