/** @type {import('next').NextConfig} */
const nextConfig = {
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self' https: http: data: blob: 'unsafe-inline' 'unsafe-eval'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: blob:",
              "style-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: blob:",
              "img-src 'self' data: https: http: blob:",
              "media-src 'self' data: https: http: blob:",
              "font-src 'self' data: https: http: blob:",
              "connect-src 'self' data: https: http: blob:",
              "frame-src 'self' data: https: http: blob:",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
