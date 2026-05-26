import { createHash } from "node:crypto";
import type { NextConfig } from "next";

const designPassword = process.env.DESIGN_RESOURCES_PASSWORD ?? "";
const designPasswordHash = designPassword
  ? createHash("sha256").update(designPassword, "utf8").digest("hex")
  : "";

const nextConfig: NextConfig = {
  output: "export", // necesar pentru deploy pe cPanel (site static)
  images: { unoptimized: true }, // necesar pentru export static (fără Image Optimization API)
  env: {
    // Hash la build din DESIGN_RESOURCES_PASSWORD — parola nu apare în clar în JS
    NEXT_PUBLIC_DESIGN_RESOURCES_PASSWORD_HASH: designPasswordHash,
  },
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
