"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getListingPath, type Subcategory } from "@/lib/products";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CategorySubgridProps = {
  categorySlug: string;
  subcategories: Subcategory[];
  title?: string;
  sectionId?: string;
};

export default function CategorySubgrid({
  categorySlug,
  subcategories,
  title,
  sectionId,
}: CategorySubgridProps) {
  if (subcategories.length === 0) return null;

  return (
    <section
      id={sectionId}
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:py-10 md:py-12"
    >
      {title ? (
        <h2 className="mb-6 text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
          {title}
        </h2>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {subcategories.map((sub, i) => (
          <motion.div
            key={sub.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.04 * i }}
          >
            <Link
              href={getListingPath(categorySlug, sub.slug, sub.defaultQuery)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={sub.imageSrc}
                  alt={sub.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 items-center justify-center bg-neutral-100 px-4 py-3.5">
                <h3 className="text-center text-sm font-bold text-neutral-900 sm:text-base">
                  {sub.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
