/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/projeto_studio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/projeto_studio/' : '',
}

module.exports = nextConfig 