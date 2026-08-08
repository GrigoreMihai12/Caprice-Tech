"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ProductCategory } from "@/lib/products";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CategoryHeroProps = {
  category: ProductCategory;
  showElectricalAnchor?: boolean;
};

export default function CategoryHero({
  category,
  showElectricalAnchor = false,
}: CategoryHeroProps) {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 md:py-14">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="text-sm text-neutral-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-neutral-900">
            Acasă
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <span className="font-medium text-neutral-800">{category.title}</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.05 }}
          className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {category.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.1 }}
          className="mt-3 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg"
        >
          {category.heroSubtitle}
        </motion.p>

        {showElectricalAnchor ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.15 }}
            className="mt-5"
          >
            <a
              href="#instalatii-electrice"
              className="inline-flex text-sm font-medium text-neutral-800 underline underline-offset-4 transition hover:text-neutral-600"
            >
              Vezi și Instalații electrice
            </a>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
