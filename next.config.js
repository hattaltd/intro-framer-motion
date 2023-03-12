/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains : [
      'source.unsplash.com',
      'res.cloudinary.com'
    ]
  },
}

module.exports = nextConfig
