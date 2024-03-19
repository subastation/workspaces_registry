/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'FreeFlow Registry',
    description: 'Custom FreeFlow registry',
    icon: 'https://xflowx.com/images/hero.jpg',
    listUrl: 'https://subastation.github.io/workspaces_registry/',
    contactUrl: 'https://github.com/subastation/workspaces_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
