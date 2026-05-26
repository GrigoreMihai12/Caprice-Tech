const STORAGE_KEY = "caprice-design-unlocked";

export const DESIGN_RESOURCES_UNLOCKED_EVENT = "design-resources-unlocked";

function readStoredValue(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
}

/** Compatibil cu versiunea veche (listă de id-uri per categorie). */
function wasLegacyUnlocked(raw: string): boolean {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) && parsed.length > 0;
  } catch {
    return false;
  }
}

export function areDesignResourcesUnlocked(): boolean {
  const raw = readStoredValue();
  if (!raw) return false;
  if (raw === "true") return true;
  return wasLegacyUnlocked(raw);
}

export function markAllDesignResourcesUnlocked(): void {
  localStorage.setItem(STORAGE_KEY, "true");
  window.dispatchEvent(new CustomEvent(DESIGN_RESOURCES_UNLOCKED_EVENT));
}
