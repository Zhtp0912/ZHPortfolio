import type { NextConfig } from "next";

const repoName = "ZHPortfolio";

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  output: "export",
  //Test
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
