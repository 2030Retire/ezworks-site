/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — GitHub Pages serves the `out/` directory as plain files.
  output: 'export',
  // Every route becomes a directory with index.html, so /haru/ and /haru/privacy/
  // keep their exact published URLs (the Play Store privacy URL depends on this).
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
