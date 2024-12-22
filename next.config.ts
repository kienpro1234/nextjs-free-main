import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photo2.tinhte.vn",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
