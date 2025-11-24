import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = "VPeraOfficial";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
