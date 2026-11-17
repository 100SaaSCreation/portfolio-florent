import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // App Router + Tailwind (~10 KiB) : inline le CSS pour casser la chaîne critique HTML→CSS (LCP).
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
