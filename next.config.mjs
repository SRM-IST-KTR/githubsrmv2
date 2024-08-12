/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'raw.githubusercontent.com', 'www.example.com', 'portfolio-71t.pages.dev', 'portfoliodata.djdiptayan.in'],
  },
};

export default nextConfig;
