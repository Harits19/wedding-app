/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
