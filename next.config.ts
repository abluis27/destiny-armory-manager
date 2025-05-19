import { bungieBaseUrl } from "@/lib/utils";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.bungie.net"]
  }
};

export default nextConfig;
