/**
 * Link către Revista Mariei (PDF în public, Issuu, etc.).
 * Opțional: setează NEXT_PUBLIC_REVISTA_MARIEI_URL în .env.local.
 * Implicit: /Catalog.pdf (fișier în rădăcina folderului public).
 */
export const REVISTA_MARIEI_URL =
  process.env.NEXT_PUBLIC_REVISTA_MARIEI_URL ?? "/Catalog.pdf";
