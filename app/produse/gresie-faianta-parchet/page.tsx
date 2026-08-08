import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHubPage from "@/components/products/CategoryHubPage";
import { getCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Gresie, Faianță & Parchet",
  description:
    "Soluții complete pentru băi, bucătării și spații rezidențiale sau comerciale: gresie, faianță, parchet SPC, laminat și accesorii.",
  alternates: { canonical: "/produse/gresie-faianta-parchet" },
};

export default function GresieFaiantaParchetPage() {
  const category = getCategory("gresie-faianta-parchet");
  if (!category) notFound();
  return <CategoryHubPage category={category} />;
}
