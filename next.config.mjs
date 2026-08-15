// No GitHub Pages o site é servido em /<nome-do-repo>/, então o workflow
// injeta NEXT_PUBLIC_BASE_PATH. Em dev e em hosts com domínio próprio,
// continua na raiz ('').
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pages serve arquivos estáticos: sem servidor Next, sem otimização de imagem.
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
