const legacyRedirects = require("./redirects");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  // Old WordPress URLs (flowercityvirtualtours.com) -> pages on this site
  async redirects() {
    return legacyRedirects;
  },
  images: {
    domains: ["oqgpwzaxgxcvutodrowk.supabase.co"], // Add your Supabase storage bucket hostname here
  },
};

module.exports = nextConfig;
