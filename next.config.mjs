/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
    experimental: {
        outputFileTracingIncludes: {
            "/api/certificates": ["./fonts/**"]
        }
    }
};

export default nextConfig;
