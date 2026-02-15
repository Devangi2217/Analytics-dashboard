/** @type {import('next').NextConfig} */
const defaultBasePath = "/Analytics-dashboard";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.NODE_ENV === "production" ? defaultBasePath : "");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
