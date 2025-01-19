const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.chinesenamegenerate.com',
          },
        ],
        destination: 'https://chinesenamegenerate.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig) 