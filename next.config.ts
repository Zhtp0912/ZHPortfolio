import type { NextConfig } from "next";

// Replace with your actual GitHub repository name
const repoName = "ZHPortfolio";

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true, // Optional, helps to avoid 404s in GitHub Pages for paths like `/about/`
  output: "export",   // Set the output to export for static generation
};

export default nextConfig;
