import Image from "next/image";
import Link from "next/link";
import {
  designCategories,
  DESIGN_RESOURCES_SUBTITLE,
  DESIGN_RESOURCES_TITLE,
} from "@/lib/design-categories";

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
            <article
              key={cat.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/11] w-full bg-neutral-100">
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {cat.description}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-neutral-200 pt-5">
                  {cat.links.map((item) => (
                    <li key={`${cat.id}-${item.brand}`}>
                      {item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded-xl px-1 py-1 transition-colors hover:bg-neutral-50"
                        >
                          <span className="block text-sm font-semibold text-neutral-900 group-hover:underline group-hover:underline-offset-2">
                            {item.brand}
                          </span>
                          <span className="mt-0.5 block text-xs font-medium text-neutral-500">
                            Vezi colecțiile
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="group block rounded-xl px-1 py-1 transition-colors hover:bg-neutral-50"
                        >
                          <span className="block text-sm font-semibold text-neutral-900 group-hover:underline group-hover:underline-offset-2">
                            {item.brand}
                          </span>
                          <span className="mt-0.5 block text-xs font-medium text-neutral-500">
                            Vezi colecțiile
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
