import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        // Enable React 19 features
        reactCompiler: false,
    },
};

export default nextConfig;
