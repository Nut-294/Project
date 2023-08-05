/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    },
    env:{
        NEXTAUTH_SECRET:"natcha"
    }
}

module.exports = nextConfig
