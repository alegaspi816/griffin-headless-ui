import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'griffinheadlesscms.kinsta.cloud',
      },
    ],
  },
};

export default nextConfig;
