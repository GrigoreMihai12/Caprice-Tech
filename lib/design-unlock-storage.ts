const STORAGE_KEY = "caprice-design-unlocked";

export function getUnlockedCategoryIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === "string")
      : [];
  } catch {
    return [];
  }
}

export function markCategoryUnlocked(categoryId: string): void {
  const ids = getUnlockedCategoryIds();
  if (ids.includes(categoryId)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids, categoryId]));
}

export function isCategoryUnlocked(categoryId: string): boolean {
  return getUnlockedCategoryIds().includes(categoryId);
}
