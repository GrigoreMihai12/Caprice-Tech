"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CategoryBrand } from "@/lib/products";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CategoryBrandsProps = {
  brands: CategoryBrand[];
};

export default function CategoryBrands({ brands }: CategoryBrandsProps) {
  if (brands.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      className="mx-auto max-w-7xl px-4 pb-8 sm:pb-10"
    >
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
          Branduri cu care lucrăm
        </h2>
        <p className="mt-1.5 text-sm text-neutral-600 sm:text-base">
          Parteneri și distribuitori pentru această categorie de produse.
        </p>
        <div className="-mx-1 mt-5 overflow-x-auto pb-1">
          <ul className="flex min-w-min flex-nowrap items-center gap-3 px-1 sm:flex-wrap sm:gap-4">
            {brands.map((brand) => (
              <li
                key={brand.name}
                className="flex h-14 min-w-[108px] shrink-0 items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50 px-3"
              >
                {brand.logoSrc ? (
                  <Image
                    src={brand.logoSrc}
                    alt={brand.name}
                    width={120}
                    height={48}
                    className="h-8 w-auto object-contain opacity-80"
                  />
                ) : (
                  <span className="text-sm font-semibold text-neutral-700">
                    {brand.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
