/** @type {import('next').NextConfig} */
const path = require('path');
const envPath = path.join("../.env");
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production';

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
  // experimental: {
  //   esmExternals: "loose", // <-- add this
  //   serverComponentsExternalPackages: ["mongoose"] // <-- and this
  // },
  webpack: (config) => {
    console.log({ isProduction });
    if (!isProduction) {
      const { parsed: myEnv } = require('dotenv').config({
        path: envPath,
      });
      config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    }
    return config;
  },
};

module.exports = nextConfig;
