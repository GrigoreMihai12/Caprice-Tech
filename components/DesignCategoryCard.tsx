"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { DesignCategory } from "@/lib/design-categories";
import {
  isCategoryUnlocked,
  markCategoryUnlocked,
} from "@/lib/design-unlock-storage";

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

type DesignCategoryCardProps = {
  category: DesignCategory;
};

export default function DesignCategoryCard({
  category,
}: DesignCategoryCardProps) {
  const dialogTitleId = useId();
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLocked, setIsLocked] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLocked(!isCategoryUnlocked(category.id));
    setHydrated(true);
  }, [category.id]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setPassword("");
    setError(null);
    setIsSubmitting(false);
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

  const openModal = useCallback(() => {
    setModalOpen(true);
    setPassword("");
    setError(null);
  }, []);

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

      markCategoryUnlocked(category.id);
      setIsLocked(false);
      closeModal();
    } catch {
      setError("Nu s-a putut verifica parola. Încercați din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showLockOverlay = hydrated && isLocked;

  return (
    <>
      <article className="relative flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md">
        <div
          className={`flex flex-1 flex-col transition-[filter] duration-300 ${
            showLockOverlay ? "pointer-events-none select-none blur-md" : ""
          }`}
          aria-hidden={showLockOverlay ? true : undefined}
        >
          <div className="relative aspect-[16/11] w-full bg-neutral-100">
            <Image
              src={category.imageSrc}
              alt={category.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-1 flex-col p-6 md:p-7">
            <h3 className="text-lg font-semibold text-neutral-900">
              {category.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {category.description}
            </p>
            <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-neutral-200 pt-5">
              {category.links.map((item) => (
                <li key={`${category.id}-${item.brand}`}>
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-xl px-1 py-1 transition-colors hover:bg-neutral-50"
                      tabIndex={showLockOverlay ? -1 : undefined}
                    >
                      <span className="block text-sm font-semibold text-neutral-900 group-hover:underline group-hover:underline-offset-2">
                        {item.brand}
                      </span>
                      <span className="mt-0.5 block text-xs font-medium text-neutral-500">
                        Vezi colecțiile
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="group block rounded-xl px-1 py-1 transition-colors hover:bg-neutral-50"
                      tabIndex={showLockOverlay ? -1 : undefined}
                    >
                      <span className="block text-sm font-semibold text-neutral-900 group-hover:underline group-hover:underline-offset-2">
                        {item.brand}
                      </span>
                      <span className="mt-0.5 block text-xs font-medium text-neutral-500">
                        Vezi colecțiile
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {showLockOverlay && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 backdrop-blur-[2px]"
            aria-label={`${category.title} — conținut protejat`}
          >
            <button
              type="button"
              onClick={openModal}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-800 shadow-lg transition hover:scale-105 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              aria-label={`Deblochează resursele pentru ${category.title}`}
            >
              <LockIcon className="h-7 w-7" />
            </button>
          </div>
        )}
      </article>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
            className="relative w-full max-w-sm rounded-2xl border border-black/10 bg-white p-6 shadow-xl"
          >
            <h3
              id={dialogTitleId}
              className="text-lg font-semibold text-neutral-900"
            >
              Acces resurse
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Introduceți parola pentru a debloca{" "}
              <span className="font-medium text-neutral-800">
                {category.title}
              </span>
              .
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 disabled:opacity-60"
                  placeholder="Introduceți parola"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="flex-1 rounded-xl border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 disabled:opacity-60"
                >
                  Anulează
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !password.trim()}
                  className="flex-1 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Se verifică…" : "Deblochează"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
