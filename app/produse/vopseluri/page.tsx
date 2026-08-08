import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHubPage from "@/components/products/CategoryHubPage";
import { getCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Vopseluri",
  description:
    "Vopsele lavabile, tehnici decorative și tencuieli profesionale Caparol pentru proiecte rezidențiale și comerciale.",
  alternates: { canonical: "/produse/vopseluri" },
};

export default function VopseluriPage() {
  const category = getCategory("vopseluri");
  if (!category) notFound();
  return <CategoryHubPage category={category} />;
}
