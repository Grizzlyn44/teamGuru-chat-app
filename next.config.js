/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: '/home',
      //   destination: '/Home',
      //   permanent: false,
      // },
    ]
  },
}