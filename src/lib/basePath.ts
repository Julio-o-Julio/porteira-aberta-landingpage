// O `basePath` do next.config.mjs é aplicado automaticamente em <Image>, <Link>
// e no CSS gerado — mas NÃO em caminhos que montamos à mão (url() inline,
// fetch, <img> puro). Use `asset()` nesses casos.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
