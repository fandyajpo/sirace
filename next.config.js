/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },

  images: {
    domains: ["cdn.discordapp.com", "media.giphy.com", "cdn.shopify.com"],
  },
});
