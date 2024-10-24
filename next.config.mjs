/** @type {import('next').NextConfig} */
const nextConfig = {
    bundlePagesRouterDependencies: true,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    }
};

export default nextConfig;
