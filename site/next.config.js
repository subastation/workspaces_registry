/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'FreeFlow Registry',
    description: 'Custom FreeFlow registry',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/subastation/workspaces_registry/',
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
