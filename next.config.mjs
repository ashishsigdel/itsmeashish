/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "storage.googleapis.com",
      "img.buymeacoffee.com",
      "ashishsigdel.com.np",
    ],
  },
};

export default nextConfig;
