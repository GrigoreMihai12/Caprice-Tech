import type { Metadata } from "next";
import DesignCategoryGrid from "@/components/DesignCategoryGrid";
import DesignHeroSection from "@/components/DesignHeroSection";
import DesignIntroBlock from "@/components/DesignIntroBlock";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Servicii și resurse de design interior: parchet, gresie și faianță, decorațiuni, lumini, baie și tehnici decorative. Descoperă proiecte și colecții de brand.",
  alternates: {
    canonical: "/design",
  },
  openGraph: {
    title: "Design | Caprice Tech",
    description:
      "Resurse pentru designeri și arhitecți: colecții de parchet, gresie și faianță, decorațiuni, lumini, baie și tehnici decorative.",
    url: "https://caprice-tech.ro/design",
    siteName: "Caprice Tech",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/design-projects/design-portfolio-01.jpeg",
        width: 1200,
        height: 630,
        alt: "Pagina Design - Caprice Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design | Caprice Tech",
    description:
      "Resurse pentru designeri și arhitecți: colecții, branduri și proiecte reale.",
    images: ["/design-projects/design-portfolio-01.jpeg"],
  },
};

export default function DesignPage() {
  return (
    <div className="bg-white">
      <h1 className="sr-only">
        Design interior - resurse și colecții pentru proiecte reale
      </h1>
      <DesignHeroSection />
      <DesignIntroBlock />
      <DesignCategoryGrid />
    </div>
  );
}
