/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXTAUTH_SECRET:'natcha'
  }
}

module.exports = nextConfig
