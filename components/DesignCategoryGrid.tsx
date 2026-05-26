"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  designCategories,
  DESIGN_RESOURCES_SUBTITLE,
  DESIGN_RESOURCES_TITLE,
} from "@/lib/design-categories";
import DesignCategoryCard from "@/components/DesignCategoryCard";
import { markAllDesignResourcesUnlocked } from "@/lib/design-unlock-storage";
import { useDesignResourcesUnlocked } from "@/lib/use-design-resources-unlocked";

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function DesignCategoryGrid() {
  const dialogTitleId = useId();
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const isUnlocked = useDesignResourcesUnlocked();
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setPassword("");
    setError(null);
    setIsSubmitting(false);
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
    setPassword("");
    setError(null);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const timer = window.setTimeout(() => passwordInputRef.current?.focus(), 0);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalOpen, closeModal]);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/design-unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(data.error ?? "Parolă incorectă.");
        return;
      }

      markAllDesignResourcesUnlocked();
      closeModal();
    } catch {
      setError("Nu s-a putut verifica parola. Încercați din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLocked = !isUnlocked;

  return (
    <section className="border-t border-neutral-200 bg-neutral-50/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Categorii
          </p>
          <h2
            className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {DESIGN_RESOURCES_TITLE}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
            {DESIGN_RESOURCES_SUBTITLE}
          </p>
        </div>

        <div className="relative mt-12 min-h-[280px] sm:min-h-[320px]">
          <div
            className={`grid gap-6 sm:grid-cols-2 lg:gap-8 ${
              isLocked ? "pointer-events-none select-none blur-md" : ""
            }`}
            aria-hidden={isLocked ? true : undefined}
          >
            {designCategories.map((cat) => (
              <DesignCategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          {isLocked && (
            <button
              type="button"
              onClick={openModal}
              className="absolute inset-0 z-10 flex cursor-pointer touch-manipulation items-center justify-center rounded-3xl bg-white/45 backdrop-blur-[2px] transition hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 active:bg-white/60"
              aria-label="Apăsați pentru a debloca resursele pentru designeri"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-800 shadow-lg sm:h-16 sm:w-16"
                aria-hidden
              >
                <LockIcon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
            </button>
          )}
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="relative w-full max-w-sm rounded-2xl border border-black/10 bg-white p-5 shadow-xl sm:p-6"
            style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
          >
            <h3
              id={dialogTitleId}
              className="text-lg font-semibold text-neutral-900"
            >
              Acces resurse
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Introduceți parola pentru a debloca{" "}
              <span className="font-medium text-neutral-800">
                toate categoriile
              </span>{" "}
              din această secțiune.
            </p>

            <form onSubmit={handleUnlock} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor={`${dialogTitleId}-password`}
                  className="mb-1 block text-sm font-medium text-neutral-800"
                >
                  Parolă
                </label>
                <input
                  ref={passwordInputRef}
                  id={`${dialogTitleId}-password`}
                  type="password"
                  autoComplete="current-password"
                  enterKeyHint="done"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-3 text-base text-neutral-900 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 disabled:opacity-60 sm:py-2.5 sm:text-sm"
                  placeholder="Introduceți parola"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="min-h-11 flex-1 rounded-xl border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 disabled:opacity-60"
                >
                  Anulează
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !password.trim()}
                  className="min-h-11 flex-1 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Se verifică…" : "Deblochează"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
