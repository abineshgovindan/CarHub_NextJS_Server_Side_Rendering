/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['cdn.imagin.studio']

    },
    env: {
        BASE_URL: process.env.BASE_URL,

    }
}

module.exports = nextConfig
