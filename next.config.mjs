/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — GitHub Pages serves the `out/` directory as plain files.
  output: 'export',
  // Every route becomes a directory with index.html, so /haru/ and /haru/privacy/
  // keep their exact published URLs (the Play Store privacy URL depends on this).
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // Page generation runs in a single worker. Parallel workers each grab their
  // own V8 heap, which OOMs the build on a memory-constrained machine. This
  // site is 22 pages, so the serial cost is a couple of seconds.
  experimental: { cpus: 1, workerThreads: false },
};

export default nextConfig;
