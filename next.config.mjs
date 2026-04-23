/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces ./out with plain HTML/CSS/JS, deployable anywhere.
  output: 'export',

  // Required for static export since Next's image optimizer needs a server.
  images: {
    unoptimized: true,
  },

  // Ensures links to /about produce /about/index.html (nicer for static hosts).
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
