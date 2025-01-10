/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/wisdomofcrowd",
  assetPrefix: "/wisdomofcrowd",
};

export default nextConfig;