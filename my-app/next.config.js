/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  i18n: {
    locales: ["zh-CN"],
    defaultLocale: "zh-CN",
  },
  swcMinify: true,

  exportPathMap:{
    dir:'../docs',
    outDir:'../docs',
    distDir:"./docs"
  }
}

module.exports = nextConfig
