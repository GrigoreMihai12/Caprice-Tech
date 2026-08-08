"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

type ProductGridProps = {
  products: Product[];
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-2 p-3.5 sm:p-4">
              <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                {product.brand}
              </p>
              <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-neutral-900">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-neutral-900">
                {formatPrice(product.price)}
              </p>
              <Link
                href={`/contact?produs=${encodeURIComponent(product.name)}`}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-neutral-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Cere ofertă
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
