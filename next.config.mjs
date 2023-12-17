/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   output: "export",
//   webpack: (config, { webpack, isServer, nextRuntime }) => {
//     // Workaround for the following issue:
//     // https://github.com/aws-amplify/amplify-js/issues/11030#issuecomment-1598207365

//     // Avoid AWS SDK Node.js require issue
//     if (isServer && nextRuntime === "nodejs")
//       config.plugins.push(
//         new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ }),
//         new webpack.IgnorePlugin({
//           resourceRegExp: /^@aws-sdk\/signature-v4-crt$/,
//         })
//       );
//     return config;
//   },
// };

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;