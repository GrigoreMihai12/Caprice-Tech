"use client";

import { useSyncExternalStore } from "react";
import {
  areDesignResourcesUnlocked,
  DESIGN_RESOURCES_UNLOCKED_EVENT,
} from "@/lib/design-unlock-storage";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(DESIGN_RESOURCES_UNLOCKED_EVENT, onStoreChange);
  return () =>
    window.removeEventListener(DESIGN_RESOURCES_UNLOCKED_EVENT, onStoreChange);
}

/** Pe server și la primul paint: blocat. Pe client citește localStorage sincron, fără useEffect. */
export function useDesignResourcesUnlocked(): boolean {
  return useSyncExternalStore(
    subscribe,
    areDesignResourcesUnlocked,
    () => false,
  );
}
