const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/chinesenamegenerate.com',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig) 