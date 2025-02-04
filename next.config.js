/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_APP_BASE_PATH,
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
