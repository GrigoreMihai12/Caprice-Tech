/**
 * Link către Revista Mariei (PDF în public, Issuu, etc.).
 * Opțional: setează NEXT_PUBLIC_REVISTA_MARIEI_URL în .env.local.
 * Implicit: PDF în public/design-projects2/Revista.pdf
 */
export const REVISTA_MARIEI_URL =
  process.env.NEXT_PUBLIC_REVISTA_MARIEI_URL ?? "/design-projects2/Revista.pdf";
