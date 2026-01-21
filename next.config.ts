/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    config.watchOptions = {
      ignored: ["**/node_modules", "C:/Users/**"],
    };
    return config;
  },
};

module.exports = nextConfig;
