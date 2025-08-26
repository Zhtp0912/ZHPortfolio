import type { NextConfig } from "next";

const repoName = "ZHPortfolio";

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  output: "export",   
};

export default nextConfig;
