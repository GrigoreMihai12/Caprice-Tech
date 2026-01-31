"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const section: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

const services = [
  {
    title: "Vopseluri",
    desc: "Comercializăm vopseluri lavabile, tencuieli decorative și materiale profesionale pentru finisaje interioare. Produsele noastre includ soluții premium Caparol, ideale pentru proiecte rezidențiale și comerciale.",
    image: "/Caparol-vopsea.jpeg",
    cta: {
      text: "Catalog Caparol",
      href: "https://www.caparolshop.ro/produse",
    },
  },
  {
    title: "Gresie, Faianță & Pardoseli",
    desc: "Tot ce ai nevoie, de la baie la living. Gresie, faianță, plăci ceramice, parchet laminat, SPC / parchet SPC și plinte, pentru amenajări interioare complete.",
    image: "/despre-noi-proiect.jpeg",
  },
  {
    title: "Instalații Termice & Electrice",
    desc: "Sisteme complete pentru încălzire și climatizare, pompe de căldură, centrale termice și aer condiționat (AC). Soluții pentru încălzire în pardoseală, calorifere, boilere, sisteme de încălzire și sisteme de climatizare.",
    image: "/instalatii-termice.jpeg",
    cta: {
      text: "Learn More",
      href: "/contact",
    },
  },
];

export default function Services() {
  return (
    <motion.section
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-7xl px-4 py-10 sm:py-12 md:py-14"
    >
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
          Categorii principale
        </h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3 md:items-stretch">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.05 * i }}
            className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-white bg-white shadow-md"
          >
            {/* Imagine deasupra */}
            <div className="relative h-64 w-full flex-shrink-0 bg-neutral-100">
              <Image
                src={s.image}
                alt={`${s.title} - Caprice Tech Râmnicu Vâlcea`}
                fill
                className="object-cover"
              />
            </div>

            {/* Box gri cu text dedesubt */}
            <div className="flex flex-1 flex-col bg-neutral-100 p-6">
              <h3 className="text-center text-lg font-bold text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-neutral-700">
                {s.desc}
              </p>
              {s.cta && (
                <Link
                  href={s.cta.href}
                  target={s.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-4 text-sm font-medium text-neutral-900 underline transition-colors hover:text-neutral-700"
                >
                  {s.cta.text}
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
