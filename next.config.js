/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  basePath: "/futhark-video",
  assetPrefix: "/futhark-video",
  images: {
    unoptimized: true,
    path: "/futhark-video",
  },
};

module.exports = nextConfig;
