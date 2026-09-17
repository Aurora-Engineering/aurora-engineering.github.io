import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  typescript: { tsconfigPath: "tsconfig.local.json" },
};

export default nextConfig;
