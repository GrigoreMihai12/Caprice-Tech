import CategoryHero from "@/components/products/CategoryHero";
import CategorySubgrid from "@/components/products/CategorySubgrid";
import CategoryBrands from "@/components/products/CategoryBrands";
import CategorySeo from "@/components/products/CategorySeo";
import type { ProductCategory } from "@/lib/products";

type CategoryHubPageProps = {
  category: ProductCategory;
};

export default function CategoryHubPage({ category }: CategoryHubPageProps) {
  const thermal = category.subcategories.filter(
    (s) => !s.section || s.section === "thermal",
  );
  const electrical = category.subcategories.filter(
    (s) => s.section === "electrical",
  );
  const hasElectrical = electrical.length > 0;

  return (
    <div className="bg-white text-neutral-900">
      <CategoryHero
        category={category}
        showElectricalAnchor={hasElectrical}
      />
      <CategorySubgrid
        categorySlug={category.slug}
        subcategories={thermal}
        title={hasElectrical ? "Instalații termice" : undefined}
      />
      {hasElectrical && category.secondarySectionTitle ? (
        <CategorySubgrid
          categorySlug={category.slug}
          subcategories={electrical}
          title={category.secondarySectionTitle}
          sectionId="instalatii-electrice"
        />
      ) : null}
      <CategoryBrands brands={category.brands} />
      <CategorySeo title={category.seoTitle} paragraphs={category.seoParagraphs} />
    </div>
  );
}
