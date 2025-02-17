import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [`avatars.githubusercontent.com`],
    remotePatterns: [
        {
            hostname: '*.googleusercontent.com'
        }
    ]
  }
};

export default nextConfig;
