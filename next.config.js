/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["CDN 주소"],
    minimumCacheTTL: 31536000,
    formats: ["image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://localhost:3000/api/:path*`,
      },
    ]
  },

  async redirects() {
    return [
      {
        source: "/auth",
        missing: [{ type: "query", key: "type" }],
        destination: "/auth?type=login",
        permanent: false,
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
}

module.exports = nextConfig
