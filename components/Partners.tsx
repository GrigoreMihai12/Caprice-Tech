"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const section: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

const partners = [
  { name: "Bosh", src: "/Bosh.jpeg" },
  { name: "Buderus", src: "/Buderus.jpeg" },
  { name: "Caparol", src: "/Caparol.jpeg" },
  { name: "KronoTex", src: "/KronoTex.jpeg" },
  { name: "Panasonic", src: "/Panasonic.jpeg" },
];

export default function Partners() {
  return (
    <motion.section
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-7xl px-4 pb-14"
    >
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Branduri și parteneri
          </h2>
          <p className="mt-2 text-neutral-700">
            Lucrăm cu branduri și distribuitori recunoscuți pentru rezultate
            durabile și compatibilitate bună între produse.
          </p>
        </div>

        {/* Carousel modern cu auto-scroll infinit */}
        <div className="mt-8 overflow-hidden">
          <div className="relative">
            {/* Gradient overlay pentru fade effect */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24" />

            {/* Container pentru carousel */}
            <div className="flex overflow-hidden">
              <div
                className="flex gap-4 sm:gap-6 md:gap-8"
                style={{
                  animation: "scroll 30s linear infinite",
                }}
              >
                {/* Duplicăm brandurile de 3 ori pentru scroll infinit seamless */}
                {[...partners, ...partners, ...partners].map((partner, i) => (
                  <div
                    key={`${partner.name}-${i}`}
                    className="flex h-24 w-32 flex-shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition-all hover:scale-105 hover:shadow-md sm:h-28 sm:w-40 sm:p-4 md:h-36 md:w-48 md:p-6"
                  >
                    <Image
                      src={partner.src}
                      alt={`${partner.name} - Partener Caprice Tech`}
                      width={180}
                      height={120}
                      className="h-auto w-full object-contain opacity-75 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
