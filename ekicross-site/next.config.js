/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ekicross-x3-firmware',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
