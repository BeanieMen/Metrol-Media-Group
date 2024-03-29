/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./out",
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {protocol: 'https',
      hostname: 'scalex.club'
      }
    ],
  },
};

module.exports = nextConfig;
