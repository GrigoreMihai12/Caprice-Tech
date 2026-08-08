export type FilterOption = {
  value: string;
  label: string;
};

export type FilterDef = {
  key: string;
  label: string;
  options: FilterOption[];
};

export type ProductAttrs = Record<string, string>;

export type Product = {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  brand: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  attrs: ProductAttrs;
};

export type Subcategory = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** Query applied when opening listing from hub card */
  defaultQuery?: Record<string, string>;
  section?: "thermal" | "electrical";
};

export type CategoryBrand = {
  name: string;
  logoSrc?: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  megaImageSrc: string;
  megaImageAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  seoTitle: string;
  seoParagraphs: string[];
  brands: CategoryBrand[];
  subcategories: Subcategory[];
  /** Optional second section heading (e.g. Instalații electrice) */
  secondarySectionTitle?: string;
};
