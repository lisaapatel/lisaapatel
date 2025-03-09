/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true,
  },
  basePath: '',  // Remove this if running locally
  assetPrefix: '', // Remove this if running locally
  transpilePackages: ['next-themes'],
  reactStrictMode: false // Try disabling strict mode temporarily
}

module.exports = nextConfig 