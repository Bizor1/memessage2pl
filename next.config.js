/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN:
      process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_API_CLIENT_ID:
      process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_API_CLIENT_ID,
    NEXT_PUBLIC_SHOPIFY_AUTH_AUTHORIZE_URL:
      process.env.NEXT_PUBLIC_SHOPIFY_AUTH_AUTHORIZE_URL,
    NEXT_PUBLIC_SHOPIFY_AUTH_TOKEN_URL:
      process.env.NEXT_PUBLIC_SHOPIFY_AUTH_TOKEN_URL,
    NEXT_PUBLIC_SHOPIFY_AUTH_LOGOUT_URL:
      process.env.NEXT_PUBLIC_SHOPIFY_AUTH_LOGOUT_URL,
    NEXT_PUBLIC_SHOPIFY_AUTH_REDIRECT_URI:
      process.env.NEXT_PUBLIC_SHOPIFY_AUTH_REDIRECT_URI,
    NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_API_URL:
      process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_API_URL,
  },
  images: {
    domains: ["worldelegantkp.com", "cdn.shopify.com", "res.cloudinary.com"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "worldelegantkp.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Ensure static assets are copied to the output directory
  assetPrefix: process.env.NODE_ENV === "production" ? "/_next" : "",
  // Configure static file serving
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion"],
  },
};

module.exports = nextConfig;
