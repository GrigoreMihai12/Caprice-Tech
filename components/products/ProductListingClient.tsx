"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { FilterDef, Product } from "@/lib/products";
import { filterAndSortProducts } from "@/lib/products";
import ProductGrid from "@/components/products/ProductGrid";

type ProductListingClientProps = {
  title: string;
  categoryTitle: string;
  categoryHref: string;
  filters: FilterDef[];
  products: Product[];
};

export default function ProductListingClient({
  title,
  categoryTitle,
  categoryHref,
  filters,
  products,
}: ProductListingClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const paramsRecord = useMemo(() => {
    const record: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      record[key] = value;
    });
    return record;
  }, [searchParams]);

  const filtered = useMemo(
    () => filterAndSortProducts(products, paramsRecord),
    [products, paramsRecord],
  );

  const sortFilter = filters.find((f) => f.key === "sort");
  const facetFilters = filters.filter((f) => f.key !== "sort");

  const activeChips = useMemo(() => {
    const chips: { key: string; value: string; label: string }[] = [];
    for (const filter of facetFilters) {
      const value = paramsRecord[filter.key];
      if (!value) continue;
      const opt = filter.options.find((o) => o.value === value);
      chips.push({
        key: filter.key,
        value,
        label: `${filter.label}: ${opt?.label ?? value}`,
      });
    }
    return chips;
  }, [facetFilters, paramsRecord]);

  const setParam = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(searchParams.toString());
      if (!value) next.delete(key);
      else next.set(key, value);
      const qs = next.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const toggleParam = useCallback(
    (key: string, value: string) => {
      const current = searchParams.get(key);
      setParam(key, current === value ? "" : value);
    },
    [searchParams, setParam],
  );

  const clearFilters = () => {
    router.push(pathname, { scroll: false });
  };

  const filterPanel = (
    <div className="space-y-0 divide-y divide-neutral-100">
      {facetFilters.map((filter) => (
        <fieldset key={filter.key} className="py-5 first:pt-0 last:pb-0">
          <legend className="text-sm font-semibold text-neutral-900">
            {filter.label}
          </legend>
          <div className="mt-3 space-y-2.5">
            {filter.options.map((opt) => {
              const checked = paramsRecord[filter.key] === opt.value;
              return (
                <label
                  key={opt.value}
                  className="flex min-h-9 cursor-pointer items-center gap-2.5 text-sm text-neutral-700"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleParam(filter.key, opt.value)}
                    className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
      {sortFilter ? (
        <fieldset className="py-5">
          <legend className="text-sm font-semibold text-neutral-900">
            {sortFilter.label}
          </legend>
          <select
            className="mt-3 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-800"
            value={paramsRecord.sort ?? "name-asc"}
            onChange={(e) => setParam("sort", e.target.value)}
          >
            {sortFilter.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </fieldset>
      ) : null}
      <div className="pt-5">
        <button
          type="button"
          onClick={clearFilters}
          className="text-sm font-medium text-neutral-600 underline underline-offset-2 hover:text-neutral-900"
        >
          Resetează filtrele
        </button>
      </div>
    </div>
  );

  const sortSelect = sortFilter ? (
    <select
      className="rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-800"
      value={paramsRecord.sort ?? "name-asc"}
      onChange={(e) => setParam("sort", e.target.value)}
      aria-label="Sortare"
    >
      {sortFilter.options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ) : null;

  return (
    <div className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-neutral-900">
            Acasă
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <Link href={categoryHref} className="transition hover:text-neutral-900">
            {categoryTitle}
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <span className="font-medium text-neutral-900">{title}</span>
        </nav>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1
              className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {title}
            </h1>
            <p className="mt-1 text-sm text-neutral-600">
              {filtered.length} {filtered.length === 1 ? "produs" : "produse"}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="md:hidden">{sortSelect}</div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex min-h-11 items-center rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 md:hidden"
            >
              Filtre
              {activeChips.length > 0 ? (
                <span className="ml-2 rounded-full bg-neutral-900 px-2 py-0.5 text-xs text-white">
                  {activeChips.length}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        {activeChips.length > 0 ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {activeChips.map((chip) => (
              <button
                key={`${chip.key}-${chip.value}`}
                type="button"
                onClick={() => setParam(chip.key, "")}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800 transition hover:border-neutral-300 hover:bg-neutral-100"
              >
                {chip.label}
                <span aria-hidden className="text-neutral-400">
                  ×
                </span>
              </button>
            ))}
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-medium text-neutral-600 underline underline-offset-2 hover:text-neutral-900"
            >
              Resetează
            </button>
          </div>
        ) : null}

        <div className="mt-8 grid gap-8 md:grid-cols-[250px_1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-24 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-neutral-900">Filtre</h2>
              <div className="mt-4">{filterPanel}</div>
            </div>
          </aside>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-start rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-12">
              <p className="text-base font-medium text-neutral-900">
                Niciun produs pentru filtrele selectate
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Încearcă să resetezi filtrele sau revino la categorie.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex min-h-11 items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  Resetează filtrele
                </button>
                <Link
                  href={categoryHref}
                  className="inline-flex min-h-11 items-center rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                >
                  Înapoi la categorie
                </Link>
              </div>
            </div>
          ) : (
            <ProductGrid products={filtered} />
          )}
        </div>

        {mobileFiltersOpen ? (
          <div className="fixed inset-0 z-[60] md:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              aria-label="Închide filtrele"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white text-neutral-900 shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <h2 className="text-lg font-semibold text-neutral-900">Filtre</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100"
                  aria-label="Închide"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-4">{filterPanel}</div>
              <div className="border-t border-neutral-200 p-4">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full rounded-lg bg-neutral-900 py-3 text-sm font-semibold text-white"
                >
                  Vezi {filtered.length} produse
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
