/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//             "images.pexels.com",
//             "res.cloudinary.com",
//             "static.vecteezy.com",
//             "img.freepik.com",
//         ],
//     },
//     webpack: (config) => {
//         config.resolve.alias.canvas = false;
//         return config;
//     },
// };

// module.exports = nextConfig;
