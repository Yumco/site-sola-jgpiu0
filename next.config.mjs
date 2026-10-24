/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath: process.env.SITE_BASE_PATH || '',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};
