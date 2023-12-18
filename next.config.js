/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/futhark-video",
  assetPrefix: "/futhark-video",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
