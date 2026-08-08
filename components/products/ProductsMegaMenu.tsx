"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getListingPath, getMegaMenuGroups } from "@/lib/products";

type ProductsMegaMenuProps = {
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export default function ProductsMegaMenu({
  onNavigate,
  variant = "desktop",
}: ProductsMegaMenuProps) {
  const groups = getMegaMenuGroups();
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);

  const active = groups.find((g) => g.id === activeId) ?? groups[0];

  if (variant === "mobile") {
    return (
      <div className="px-2 pb-2">
        {groups.map((group) => {
          const open = mobileOpenId === group.id;
          return (
            <div key={group.id} className="border-b border-neutral-100 last:border-0">
              <button
                type="button"
                className="flex min-h-11 w-full items-center justify-between px-2 py-3 text-left text-sm font-semibold text-neutral-800"
                aria-expanded={open}
                onClick={() => setMobileOpenId(open ? null : group.id)}
              >
                {group.label}
                <svg
                  className={`h-4 w-4 text-neutral-500 transition ${open ? "rotate-90" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {open ? (
                <ul className="space-y-1 pb-3 pl-2">
                  <li>
                    <Link
                      href={group.hubHref}
                      onClick={onNavigate}
                      className="block rounded-md px-2 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    >
                      Vezi categoria
                    </Link>
                  </li>
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={getListingPath(
                          group.categorySlug,
                          item.slug,
                          item.defaultQuery,
                        )}
                        onClick={onNavigate}
                        className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-neutral-50"
                      >
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-neutral-100">
                          <Image
                            src={item.imageSrc}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </span>
                        <span className="text-sm text-neutral-800">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex max-h-[min(70vh,520px)] w-full overflow-hidden">
      <nav
        className="w-[200px] shrink-0 overflow-y-auto border-r border-neutral-200 bg-neutral-50 py-2 sm:w-[220px]"
        aria-label="Categorii produse"
      >
        <ul>
          {groups.map((group) => {
            const isActive = group.id === active?.id;
            return (
              <li key={group.id}>
                <div
                  className={`flex items-stretch border-l-2 ${
                    isActive
                      ? "border-neutral-900 bg-white"
                      : "border-transparent hover:bg-white/70"
                  }`}
                  onMouseEnter={() => setActiveId(group.id)}
                >
                  <Link
                    href={group.hubHref}
                    onClick={onNavigate}
                    className={`flex flex-1 items-center justify-between gap-2 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide sm:text-sm ${
                      isActive ? "text-neutral-900" : "text-neutral-600"
                    }`}
                  >
                    <span>{group.label}</span>
                    <svg
                      className={`h-3.5 w-3.5 shrink-0 ${
                        isActive ? "text-neutral-900" : "text-neutral-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="min-w-0 flex-1 overflow-y-auto bg-white p-3 sm:p-5">
        {active ? (
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
            {active.items.map((item) => (
              <Link
                key={item.slug}
                href={getListingPath(
                  active.categorySlug,
                  item.slug,
                  item.defaultQuery,
                )}
                onClick={onNavigate}
                className="group relative block aspect-square overflow-hidden rounded-md bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 40vw, 180px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 px-2 py-2.5 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-white sm:text-xs">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
