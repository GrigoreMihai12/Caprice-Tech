import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductListingClient from "@/components/products/ProductListingClient";
import {
  getAllProductRoutes,
  getFiltersFor,
  getProductsFor,
  getSubcategory,
} from "@/lib/products";

type PageProps = {
  params: Promise<{ category: string; subcategory: string }>;
};

export function generateStaticParams() {
  return getAllProductRoutes().map(({ category, subcategory }) => ({
    category,
    subcategory,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const result = getSubcategory(categorySlug, subcategorySlug);
  if (!result) return { title: "Produse" };
  return {
    title: `${result.subcategory.title} | ${result.category.title}`,
    description: `${result.subcategory.title} — ${result.category.heroSubtitle}`,
    alternates: {
      canonical: `/produse/${categorySlug}/${subcategorySlug}`,
    },
  };
}

export default async function ProductListingPage({ params }: PageProps) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const result = getSubcategory(categorySlug, subcategorySlug);
  if (!result) notFound();

  // accesoriile sunt pe listing-ul parchet
  if (subcategorySlug === "accesorii-parchet") notFound();

  const { category, subcategory } = result;
  const products = getProductsFor(categorySlug, subcategorySlug);
  const filters = getFiltersFor(categorySlug, subcategorySlug);

  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-16 text-neutral-600">
          Se încarcă produsele…
        </div>
      }
    >
      <ProductListingClient
        title={subcategory.title}
        categoryTitle={category.title}
        categoryHref={`/produse/${category.slug}`}
        filters={filters}
        products={products}
      />
    </Suspense>
  );
}
