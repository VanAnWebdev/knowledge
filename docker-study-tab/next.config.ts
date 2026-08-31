import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/knowledge",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
