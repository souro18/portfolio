/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
      },
    ],
  },}

module.exports = nextConfig
