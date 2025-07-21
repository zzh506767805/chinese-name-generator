const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 ads.txt 重定向，让 Google 能够直接访问
  // async redirects() {
  //   return [
  //     {
  //       source: '/ads.txt',
  //       destination: 'https://srv.adstxtmanager.com/19390/chinesenamegenerate.com',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = withNextIntl(nextConfig)
