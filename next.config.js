/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    swcMinify: true,
    images: {
        domains: ['cgkxhxukpzqmcrufjolx.supabase.co'],
    },
};

module.exports = nextConfig;
