/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    minimumCacheTTL: 31536000,
    formats: ["image/avif", "image/webp"],
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

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // 환경변수 ANALYZE가 true일 때 실행
  openAnalyzer: false, // 브라우저에 자동으로 분석결과를 새 탭으로 Open하는 것을 방지
})

module.exports = withBundleAnalyzer(nextConfig)


/*module.exports = nextConfig*/