import {
  designCategories,
  DESIGN_RESOURCES_SUBTITLE,
  DESIGN_RESOURCES_TITLE,
} from "@/lib/design-categories";
import DesignCategoryCard from "@/components/DesignCategoryCard";

export default function DesignCategoryGrid() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Categorii
          </p>
          <h2
            className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {DESIGN_RESOURCES_TITLE}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
            {DESIGN_RESOURCES_SUBTITLE}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {designCategories.map((cat) => (
            <DesignCategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
