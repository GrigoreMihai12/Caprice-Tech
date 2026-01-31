import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Materiale pentru instalații și amenajări interioare",
  description:
    "De peste 30 de ani oferim soluții complete pentru instalații electrice și termice, încălzire, climatizare și amenajări interioare. Vopsele Caparol, gresie, faianță, pardoseli și consultanță profesională în Râmnicu Vâlcea.",
  keywords: [
    "materiale instalații Râmnicu Vâlcea",
    "instalații electrice",
    "instalații termice",
    "vopsele Caparol",
    "gresie faianță",
    "pardoseli",
    "amenajări interioare",
    "finisaje interioare",
    "pompe de căldură",
    "aer condiționat",
    "parchet laminat",
    "Caprice Tech",
  ],
  openGraph: {
    title: "Caprice Tech | Materiale pentru instalații și amenajări interioare",
    description:
      "De peste 30 de ani oferim soluții complete pentru instalații electrice și termice, încălzire, climatizare și amenajări interioare.",
    images: ["/hero.jpeg"],
  },
};

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Partners />
      <CTA />
    </div>
  );
}
