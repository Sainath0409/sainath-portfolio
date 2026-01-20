/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Ensure we are using App Router and not looking for pages
    distDir: '.next',
};

export default nextConfig;
