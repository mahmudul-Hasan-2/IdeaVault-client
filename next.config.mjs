/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...(new URL("https://images.unsplash.com").hostname
        ? [{ protocol: "https", hostname: "images.unsplash.com" }]
        : []),
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
