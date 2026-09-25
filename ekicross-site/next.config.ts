import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const isCloudflarePages = process.env.CLOUDFLARE_PAGES === 'true';
const isStaticExport = isGitHubPages || isCloudflarePages;

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : undefined,
  basePath: isGitHubPages ? '/ekicross' : undefined,
  assetPrefix: isGitHubPages ? '/ekicross/' : undefined,
  trailingSlash: isStaticExport,
  images: { unoptimized: true },
};

export default nextConfig;
