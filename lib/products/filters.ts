import type { FilterDef, Product } from "./types";

const SORT_OPTIONS: FilterDef = {
  key: "sort",
  label: "Sortare",
  options: [
    { value: "name-asc", label: "Nume A–Z" },
    { value: "name-desc", label: "Nume Z–A" },
    { value: "price-asc", label: "Preț crescător" },
    { value: "price-desc", label: "Preț descrescător" },
  ],
};

/** Filter definitions keyed by `${categorySlug}/${subcategorySlug}` */
export const filterSchemas: Record<string, FilterDef[]> = {
  "instalatii-termice/pompe-de-caldura": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "panasonic", label: "Panasonic" },
        { value: "toshiba", label: "Toshiba" },
        { value: "mitsubishi-electric", label: "Mitsubishi Electric" },
      ],
    },
    {
      key: "putere",
      label: "Putere",
      options: [
        { value: "7-9", label: "7–9 kW" },
        { value: "9-12", label: "9–12 kW" },
        { value: "14-16", label: "14–16 kW" },
      ],
    },
    {
      key: "tip",
      label: "Tip",
      options: [
        { value: "mono-bloc", label: "Mono-bloc" },
        { value: "bi-bloc", label: "Bi-bloc" },
      ],
    },
    SORT_OPTIONS,
  ],
  "instalatii-termice/centrale-termice": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "buderus", label: "Buderus" },
        { value: "bosch", label: "Bosch" },
        { value: "saunier-duval", label: "Saunier Duval" },
      ],
    },
    {
      key: "putere",
      label: "Putere",
      options: [
        { value: "24-28", label: "24–28 kW" },
        { value: "30-35", label: "30–35 kW" },
        { value: "35-plus", label: "35+ kW" },
      ],
    },
    {
      key: "tip-boiler",
      label: "Tip boiler",
      options: [
        { value: "cu-boiler", label: "Cu boiler" },
        { value: "fara-boiler", label: "Fără boiler" },
      ],
    },
    SORT_OPTIONS,
  ],
  "instalatii-termice/aer-conditionat": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "panasonic", label: "Panasonic" },
        { value: "toshiba", label: "Toshiba" },
        { value: "mitsubishi-electric", label: "Mitsubishi Electric" },
        { value: "bosch", label: "Bosch" },
        { value: "buderus", label: "Buderus" },
      ],
    },
    {
      key: "putere",
      label: "Putere",
      options: [
        { value: "9000", label: "9000 Btu" },
        { value: "12000", label: "12000 Btu" },
        { value: "18000", label: "18000 Btu" },
        { value: "24000", label: "24000 Btu" },
      ],
    },
    {
      key: "culoare",
      label: "Culoare",
      options: [
        { value: "alb", label: "Alb" },
        { value: "negru", label: "Negru" },
        { value: "gri", label: "Gri" },
        { value: "rosu", label: "Roșu" },
      ],
    },
    SORT_OPTIONS,
  ],
  "instalatii-termice/calorifere-decorative": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "radox", label: "Radox" },
        { value: "irsap", label: "Irsap" },
      ],
    },
    {
      key: "culoare",
      label: "Culoare",
      options: [
        { value: "alb", label: "Alb" },
        { value: "negru", label: "Negru" },
        { value: "multicolor", label: "Multicolor" },
      ],
    },
    {
      key: "orientare",
      label: "Orientare",
      options: [
        { value: "orizontal", label: "Orizontal" },
        { value: "vertical", label: "Vertical" },
      ],
    },
    SORT_OPTIONS,
  ],
  "instalatii-termice/iluminat-interior": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "redo", label: "Redo" },
        { value: "arelux", label: "Arelux" },
      ],
    },
    SORT_OPTIONS,
  ],
  "instalatii-termice/iluminat-exterior": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "redo", label: "Redo" },
        { value: "arelux", label: "Arelux" },
      ],
    },
    SORT_OPTIONS,
  ],
  "instalatii-termice/prize-intrerupatoare": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "vimar", label: "Vimar" },
        { value: "ave", label: "Ave" },
      ],
    },
    {
      key: "culoare",
      label: "Culoare",
      options: [
        { value: "alb", label: "Alb" },
        { value: "negru", label: "Negru" },
        { value: "multicolor", label: "Multicolor" },
      ],
    },
    SORT_OPTIONS,
  ],
  "gresie-faianta-parchet/parchet": [
    {
      key: "tip",
      label: "Tip",
      options: [
        { value: "spc", label: "Parchet SPC" },
        { value: "laminat", label: "Parchet Laminat" },
        { value: "masiv-triplustratificat", label: "Parchet Masiv & Triplustratificat" },
        { value: "accesorii", label: "Accesorii parchet (Plinte)" },
      ],
    },
    {
      key: "grosime",
      label: "Grosime",
      options: [
        { value: "4-7", label: "4–7 mm" },
        { value: "8-14", label: "8–14 mm" },
      ],
    },
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "kronotex", label: "Kronotex" },
        { value: "falquon", label: "Falquon" },
        { value: "kahrs", label: "Kährs" },
      ],
    },
    SORT_OPTIONS,
  ],
  "gresie-faianta-parchet/gresie-faianta": [
    {
      key: "tip",
      label: "Tip",
      options: [
        { value: "gresie", label: "Gresie" },
        { value: "faianta", label: "Faianță" },
      ],
    },
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "alaplana", label: "Alaplana" },
        { value: "tau-ceramica", label: "Tau Ceramica" },
      ],
    },
    {
      key: "textura",
      label: "Textură",
      options: [
        { value: "lucioasa", label: "Lucioasă" },
        { value: "mata", label: "Mată" },
      ],
    },
    SORT_OPTIONS,
  ],
  "vopseluri/vopsele-interior": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "caparol", label: "Caparol" },
        { value: "alpina", label: "Alpina" },
      ],
    },
    SORT_OPTIONS,
  ],
  "vopseluri/tehnici-decorative": [
    {
      key: "brand",
      label: "Brand",
      options: [{ value: "caparol", label: "Caparol" }],
    },
    SORT_OPTIONS,
  ],
  "vopseluri/tencuieli-finisaje": [
    {
      key: "brand",
      label: "Brand",
      options: [
        { value: "caparol", label: "Caparol" },
        { value: "alpina", label: "Alpina" },
      ],
    },
    SORT_OPTIONS,
  ],
};

export function getFiltersFor(
  categorySlug: string,
  subcategorySlug: string,
): FilterDef[] {
  return filterSchemas[`${categorySlug}/${subcategorySlug}`] ?? [SORT_OPTIONS];
}

export function filterAndSortProducts(
  products: Product[],
  searchParams: Record<string, string | string[] | undefined>,
): Product[] {
  const get = (key: string) => {
    const v = searchParams[key];
    if (Array.isArray(v)) return v[0];
    return v;
  };

  let result = products.filter((p) => {
    for (const [key, raw] of Object.entries(searchParams)) {
      if (key === "sort" || raw == null || raw === "") continue;
      const value = Array.isArray(raw) ? raw[0] : raw;
      if (!value) continue;
      const attr = p.attrs[key] ?? (key === "brand" ? slugifyBrand(p.brand) : undefined);
      if (attr !== value) return false;
    }
    return true;
  });

  const sort = get("sort") ?? "name-asc";
  result = [...result].sort((a, b) => {
    switch (sort) {
      case "name-desc":
        return b.name.localeCompare(a.name, "ro");
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
      default:
        return a.name.localeCompare(b.name, "ro");
    }
  });

  return result;
}

function slugifyBrand(brand: string): string {
  return brand
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/ä/g, "a");
}
