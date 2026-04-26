/**
 * Link către Revista Mariei (PDF în public, Issuu, etc.).
 * Opțional: setează NEXT_PUBLIC_REVISTA_MARIEI_URL în .env.local.
 * Implicit: /Revista-Mariei.pdf — adaugă fișierul în folderul public.
 */
export const REVISTA_MARIEI_URL =
  process.env.NEXT_PUBLIC_REVISTA_MARIEI_URL ?? "/Revista-Mariei.pdf";
