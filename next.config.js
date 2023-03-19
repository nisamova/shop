/** @type {import('next').NextConfig} */
/**const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "",
        pathname: "/product.picture.url"
      }
    ]
  }
}
