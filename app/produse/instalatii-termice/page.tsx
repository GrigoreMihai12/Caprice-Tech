import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHubPage from "@/components/products/CategoryHubPage";
import { getCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Instalații termice",
  description:
    "Pompe de căldură, aer condiționat, centrale termice, calorifere decorative și materiale pentru instalații electrice.",
  alternates: { canonical: "/produse/instalatii-termice" },
};

export default function InstalatiiTermicePage() {
  const category = getCategory("instalatii-termice");
  if (!category) notFound();
  return <CategoryHubPage category={category} />;
}
