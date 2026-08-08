"use client";

import { motion } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CategorySeoProps = {
  title: string;
  paragraphs: string[];
};

export default function CategorySeo({ title, paragraphs }: CategorySeoProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      className="border-t border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
          {title}
        </h2>
        <div className="mt-4 max-w-3xl space-y-3 text-base leading-7 text-neutral-600">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
