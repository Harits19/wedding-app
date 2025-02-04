/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_APP_GITHUB_PAGE_BASE_PATH;
const nextConfig = {
  output: basePath ? "export" : undefined,
  basePath,
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
