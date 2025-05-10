/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/projeto_studio',
  assetPrefix: '/projeto_studio/',
}

module.exports = nextConfig 