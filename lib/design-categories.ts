/** Conținut pagina Design — aliniat la brieful PDF. Linkurile brand pot fi înlocuite cu URL-uri reale. */

export type DesignBrandLink = {
  brand: string;
  /** Înlocuiește cu URL catalog; implicit contact cu context. */
  href: string;
};

export type DesignCategory = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  links: DesignBrandLink[];
};

export const DESIGN_RESOURCES_TITLE = "Resurse pentru designeri și arhitecți";

export const DESIGN_RESOURCES_SUBTITLE =
  "Acces rapid la materiale și furnizori pentru proiecte reale.";

export const designCategories: DesignCategory[] = [
  {
    id: "parchet",
    title: "Parchet",
    imageSrc: "/design-projects2/WhatsApp Image 2026-04-12 at 21.04.25.jpeg",
    imageAlt: "Parchet și pardoseli — proiect",
    description:
      "Texturi, finisaje și colecții pentru randări și execuție.",
    links: [
      { brand: "Kahrs", href: "https://www.kahrs.com/en/" },
      { brand: "MyFloor", href: "https://www.myfloor.ro/" },
      { brand: "Swiss Krono", href: "https://www.swisskrono.com/de-en/" },
      { brand: "Sichenia", href: "https://www.sichenia.it/" },
    ],
  },
  {
    id: "gresie-faianta",
    title: "Gresie & faianță",
    imageSrc: "/design-projects2/WhatsApp Image 2026-04-12 at 21.04.25 (1).jpeg",
    imageAlt: "Gresie și faianță în proiect",
    description:
      "Colecții pentru baie, bucătărie și spații comerciale.",
    links: [
      { brand: "Sichenia", href: "https://www.sichenia.it/" },
      { brand: "Artistica Tre", href: "https://www.artisticatre.com/en/" },
      {
        brand: "Impronta (Italgraniti)",
        href: "https://www.italgranitigroup.com/en/impronta",
      },
    ],
  },
  {
    id: "decoratiuni",
    title: "Decorațiuni",
    imageSrc: "/design-projects2/WhatsApp Image 2026-04-12 at 21.04.25 (2).jpeg",
    imageAlt: "Decorațiuni și accente în spațiu",
    description: "Accente care definesc spațiul.",
    links: [
      { brand: "Orac Decor", href: "https://www.oracdecor.com/" },
      { brand: "NMC România", href: "https://www.nmcromania.ro" },
    ],
  },
  {
    id: "lumini",
    title: "Lumini",
    imageSrc: "/design-projects2/WhatsApp Image 2026-04-12 at 21.04.26.jpeg",
    imageAlt: "Soluții de iluminat și climatizare",
    description: "Iluminat funcțional și ambiental.",
    links: [
      { brand: "Novaluce", href: "https://novaluce.com" },
      { brand: "Redo Group", href: "https://redogroup.com" },
      { brand: "Nowodvorski", href: "https://www.nowodvorski.com/en" },
      { brand: "Arelux", href: "https://www.arelux.ro" },
      { brand: "Maytoni", href: "https://maytoni.de" },
    ],
  },
  {
    id: "baie",
    title: "Baie",
    imageSrc: "/design-projects2/WhatsApp Image 2026-04-12 at 21.04.26 (1).jpeg",
    imageAlt: "Amenajare baie și spații sanitare",
    description: "Soluții complete pentru spații sanitare.",
    links: [
      { brand: "Ideal Standard", href: "https://www.ideal-standard.ro" },
      { brand: "Ravak", href: "https://www.ravak.com" },
      { brand: "RAK Ceramics", href: "https://www.rakceramics.com/europe/en/" },
    ],
  },
  {
    id: "tehnici-decorative",
    title: "Tehnici decorative",
    imageSrc: "/design-projects2/WhatsApp Image 2026-04-12 at 21.04.26 (3).jpeg",
    imageAlt: "Tehnici decorative și vopsele",
    description:
      "Texturi și efecte decorative pentru randări și execuții.",
    links: [
      { brand: "Caparol Creative", href: "/contact?interes=tehnici-decorative" },
      { brand: "Efecte speciale", href: "/contact?interes=tehnici-decorative" },
    ],
  },
];
