/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "votacion.tecnicarcorrientes.net"
            }
        ]
    }
}

module.exports = nextConfig
