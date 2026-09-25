const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const isCloudflarePages = process.env.CLOUDFLARE_PAGES === 'true';
const isStaticExport = isGitHubPages || isCloudflarePages;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStaticExport ? 'export' : undefined,
  basePath: isGitHubPages ? '/ekicross' : undefined,
  assetPrefix: isGitHubPages ? '/ekicross/' : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: isStaticExport,
};

export default nextConfig;
