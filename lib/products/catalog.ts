import type { ProductCategory, Subcategory } from "./types";

export const productCategories: ProductCategory[] = [
  {
    slug: "vopseluri",
    title: "Vopseluri",
    shortTitle: "Vopseluri",
    megaImageSrc: "/photo-product/Caparol-Vopsea2.jpeg",
    megaImageAlt: "Vopseluri Caparol",
    heroTitle: "Vopseluri și soluții decorative",
    heroSubtitle:
      "Vopsele lavabile, tehnici decorative și tencuieli profesionale Caparol pentru proiecte rezidențiale și comerciale.",
    seoTitle: "Vopseluri și finisaje decorative",
    seoParagraphs: [
      "În categoria Vopseluri găsești vopsele lavabile pentru interior, sisteme decorative Caparol și tencuieli pentru finisaje de calitate. Produsele sunt potrivite atât pentru locuințe, cât și pentru spații comerciale, oferind acoperire durabilă și aspect profesional.",
      "Pe lângă vopselele principale, punem la dispoziție grunduri, materiale pentru pregătirea suprafețelor și soluții pentru tehnici decorative, esențiale pentru un finisaj corect și rezistent în timp.",
      "Indiferent dacă renovezi o cameră sau finalizezi un proiect nou, îți oferim materiale pentru vopsitorie și finisaje decorative potrivite pentru proiecte rezidențiale sau comerciale.",
    ],
    brands: [
      { name: "Caparol", logoSrc: "/Caparol.jpeg" },
      { name: "Alpina" },
    ],
    subcategories: [
      {
        slug: "vopsele-interior",
        title: "Vopsele de interior",
        imageSrc: "/photo-product/Caparol-Vopsea2.jpeg",
        imageAlt: "Vopsele de interior",
      },
      {
        slug: "tehnici-decorative",
        title: "Tehnici decorative",
        imageSrc: "/photo-product/Caparol-Camera.jpeg",
        imageAlt: "Tehnici decorative",
      },
      {
        slug: "tencuieli-finisaje",
        title: "Tencuieli & finisaje",
        imageSrc: "/photo-product/Caparol-noptiera.jpeg",
        imageAlt: "Tencuieli și finisaje",
      },
    ],
  },
  {
    slug: "instalatii-termice",
    title: "Instalații termice",
    shortTitle: "Instalații Termice",
    megaImageSrc: "/photo-product/Caparol-Centrala.jpeg",
    megaImageAlt: "Instalații termice",
    heroTitle: "Instalații termice și echipamente pentru încălzire",
    heroSubtitle:
      "Descoperă echipamente moderne pentru instalații termice și climatizare: pompe de căldură, aer condiționat, centrale termice pentru locuințe și spații comerciale.",
    seoTitle: "Materiale și echipamente pentru instalații termice",
    seoParagraphs: [
      "În categoria Instalații termice găsești echipamente și materiale necesare pentru realizarea sistemelor moderne de încălzire și climatizare. Oferim pompe de căldură, aparate de aer condiționat, centrale termice și calorifere decorative, soluții eficiente pentru locuințe și spații comerciale.",
      "Pe lângă echipamentele principale, punem la dispoziție și materiale pentru instalații, precum țevi pentru instalații, fitinguri, robineți, racorduri și accesorii pentru montaj, esențiale pentru realizarea corectă a sistemelor de încălzire.",
      "Indiferent dacă ai nevoie de o pompă de căldură, o centrală termică sau materiale pentru instalația termică, îți oferim produse fiabile și eficiente pentru proiecte rezidențiale sau comerciale.",
    ],
    brands: [
      { name: "Panasonic", logoSrc: "/Panasonic.jpeg" },
      { name: "Bosch", logoSrc: "/Bosh.jpeg" },
      { name: "Buderus", logoSrc: "/Buderus.jpeg" },
      { name: "Toshiba" },
      { name: "Mitsubishi Electric" },
      { name: "Saunier Duval" },
      { name: "Radox" },
      { name: "Irsap" },
      { name: "Redo" },
      { name: "Arelux" },
      { name: "Vimar" },
      { name: "Ave" },
    ],
    secondarySectionTitle: "Instalații electrice",
    subcategories: [
      {
        slug: "pompe-de-caldura",
        title: "Pompă de căldură",
        imageSrc: "/photo-product/Caparol-AerConditionat.jpeg",
        imageAlt: "Pompă de căldură",
        section: "thermal",
      },
      {
        slug: "aer-conditionat",
        title: "Aparate de aer condiționat",
        imageSrc: "/photo-product/Caparol-AerConditionatInterior.jpeg",
        imageAlt: "Aparate de aer condiționat",
        section: "thermal",
      },
      {
        slug: "centrale-termice",
        title: "Centrală termică",
        imageSrc: "/photo-product/Caparol-Centrala.jpeg",
        imageAlt: "Centrală termică",
        section: "thermal",
      },
      {
        slug: "calorifere-decorative",
        title: "Calorifere decorative",
        imageSrc: "/instalatii-termice.jpeg",
        imageAlt: "Calorifere decorative",
        section: "thermal",
      },
      {
        slug: "iluminat-interior",
        title: "Corpuri de iluminat interior",
        imageSrc: "/photo-product/Caparol-Becuri.jpeg",
        imageAlt: "Corpuri de iluminat interior",
        section: "electrical",
      },
      {
        slug: "iluminat-exterior",
        title: "Corpuri de iluminat exterior",
        imageSrc: "/photo-product/Caparol-Bec.jpeg",
        imageAlt: "Corpuri de iluminat exterior",
        section: "electrical",
      },
      {
        slug: "prize-intrerupatoare",
        title: "Prize și întrerupătoare",
        imageSrc: "/photo-product/Caparol-Priza.jpeg",
        imageAlt: "Prize și întrerupătoare",
        section: "electrical",
      },
    ],
  },
  {
    slug: "gresie-faianta-parchet",
    title: "Gresie, Faianță & Parchet",
    shortTitle: "Gresie Faianță & Parchet",
    megaImageSrc: "/photo-product/Caparol-Baie.jpeg",
    megaImageAlt: "Gresie, faianță și parchet",
    heroTitle: "Gresie, Faianță & Parchet",
    heroSubtitle:
      "Soluții complete pentru băi, bucătării și spații rezidențiale sau comerciale",
    seoTitle: "Gresie, Faianță și Parchet",
    seoParagraphs: [
      "În categoria Gresie, Faianță și Parchet găsești o gamă variată de gresie pentru interior și exterior, faianță pentru baie și bucătărie, parchet laminat, parchet SPC și parchet masiv sau triplustratificat. Produsele sunt potrivite atât pentru locuințe, cât și pentru spații comerciale, oferind soluții durabile și ușor de întreținut.",
      "Pe lângă materialele principale, punem la dispoziție și accesorii pentru montaj, precum adezivi pentru gresie și faianță, chituri de rosturi, plinte și alte elemente necesare pentru finisaje de calitate.",
      "Indiferent dacă amenajezi o locuință nouă sau renovezi un spațiu existent, îți oferim materiale pentru pardoseli și placări ceramice potrivite pentru proiecte rezidențiale sau comerciale.",
    ],
    brands: [
      { name: "Kronotex", logoSrc: "/KronoTex.jpeg" },
      { name: "Falquon" },
      { name: "Kährs" },
      { name: "Alaplana" },
      { name: "Tau Ceramica" },
    ],
    subcategories: [
      {
        slug: "gresie-faianta",
        title: "Gresie & Faianță",
        imageSrc: "/photo-product/Caparol-Baie.jpeg",
        imageAlt: "Gresie și faianță",
      },
      {
        slug: "parchet",
        title: "Parchet SPC Triplustratificat Laminat",
        imageSrc: "/photo-product/Caparol-Parchet.jpeg",
        imageAlt: "Parchet SPC, laminat și triplustratificat",
        defaultQuery: { tip: "spc" },
      },
      {
        slug: "accesorii-parchet",
        title: "Accesorii parchet (plinte)",
        imageSrc: "/photo-product/Caparol-Parchet2.jpeg",
        imageAlt: "Accesorii parchet și plinte",
        // Accesorii live under the parchet listing with tip filter
        defaultQuery: { tip: "accesorii" },
      },
    ],
  },
];

export function getCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subcategorySlug: string) {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const subcategory = category.subcategories.find((s) => s.slug === subcategorySlug);
  if (!subcategory) return undefined;
  return { category, subcategory };
}

/** Listing route for a subcategory card (accesorii-parchet → parchet listing). */
export function getListingPath(
  categorySlug: string,
  subcategorySlug: string,
  defaultQuery?: Record<string, string>,
): string {
  const listingSlug =
    subcategorySlug === "accesorii-parchet" ? "parchet" : subcategorySlug;
  const base = `/produse/${categorySlug}/${listingSlug}`;
  if (!defaultQuery || Object.keys(defaultQuery).length === 0) return base;
  const params = new URLSearchParams(defaultQuery);
  return `${base}?${params.toString()}`;
}

export function getAllProductRoutes(): { category: string; subcategory: string }[] {
  return productCategories.flatMap((c) =>
    c.subcategories
      .filter((s) => s.slug !== "accesorii-parchet")
      .map((s) => ({ category: c.slug, subcategory: s.slug })),
  );
}

export type MegaMenuGroup = {
  id: string;
  label: string;
  hubHref: string;
  categorySlug: string;
  items: Subcategory[];
};

/** Sidebar groups for Caparol-style mega-menu (electrice split from termice). */
export function getMegaMenuGroups(): MegaMenuGroup[] {
  const vopseluri = getCategory("vopseluri")!;
  const termice = getCategory("instalatii-termice")!;
  const gresie = getCategory("gresie-faianta-parchet")!;

  return [
    {
      id: "vopseluri",
      label: "Vopseluri",
      hubHref: "/produse/vopseluri",
      categorySlug: "vopseluri",
      items: vopseluri.subcategories,
    },
    {
      id: "instalatii-termice",
      label: "Instalații termice",
      hubHref: "/produse/instalatii-termice",
      categorySlug: "instalatii-termice",
      items: termice.subcategories.filter((s) => s.section !== "electrical"),
    },
    {
      id: "instalatii-electrice",
      label: "Instalații electrice",
      hubHref: "/produse/instalatii-termice",
      categorySlug: "instalatii-termice",
      items: termice.subcategories.filter((s) => s.section === "electrical"),
    },
    {
      id: "gresie-faianta-parchet",
      label: "Gresie Faianță & Parchet",
      hubHref: "/produse/gresie-faianta-parchet",
      categorySlug: "gresie-faianta-parchet",
      items: gresie.subcategories,
    },
  ];
}
