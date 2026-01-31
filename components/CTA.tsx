"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const section: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

export default function CTA() {
  return (
    <motion.section
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-7xl px-4 pb-16"
    >
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 shadow-lg sm:p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-[-140px] h-[360px] w-[360px] rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute -bottom-24 left-[-140px] h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
            Ai nevoie de recomandări pentru lista ta de materiale?
          </h2>
          <p className="mt-2 text-sm text-neutral-700 sm:text-base sm:max-w-2xl">
            Trimite-ne detaliile proiectului și îți recomandăm produse
            compatibile.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
