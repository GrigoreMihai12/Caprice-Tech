import Image from "next/image";
import Link from "next/link";
import type { DesignCategory } from "@/lib/design-categories";

type DesignCategoryCardProps = {
  category: DesignCategory;
};

export default function DesignCategoryCard({ category }: DesignCategoryCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/11] w-full bg-neutral-100">
        <Image
          src={category.imageSrc}
          alt={category.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-lg font-semibold text-neutral-900">{category.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {category.description}
        </p>
        <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-neutral-200 pt-5">
          {category.links.map((item) => (
            <li key={`${category.id}-${item.brand}`}>
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
  );
}
