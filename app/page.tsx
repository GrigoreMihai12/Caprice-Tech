"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const section: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

const services = [
  {
    title: "Vopsele & Finisaje decorative",
    desc: "Comercializăm vopsele lavabile, amorse, gleturi, tencuieli decorative și lacuri, alături de accesorii pentru finisaje interioare. Oferim materiale profesionale pentru proiecte rezidențiale sau comerciale.",
  },
  {
    title: "Gresie, faianță & pardoseli",
    desc: "Tot ce ai nevoie, de la baie la living. Gresie, faianță, plăci ceramice, parchet laminat, SPC / parchet SPC și plinte, pentru amenajări interioare complete.",
  },
  {
    title: "Instalații termice & electrice",
    desc: "Sisteme complete pentru încălzire și climatizare, pompe de căldură, centrale termice și aer condiționat (AC). Soluții pentru încălzire în pardoseală, calorifere, boilere, sisteme de încălzire și sisteme de climatizare",
  },
];

const partners = [
  { name: "Caparol", src: "/brands/caparol.png" },
  // { name: "Brand 2", src: "/brands/brand2.png" },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* fundal colorat (același vibe ca Blog/Contact) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      </div>

      {/* HERO cu poză */}
      <motion.section
        variants={section}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 pt-10"
      >
        <div className="relative overflow-hidden rounded-3xl border border-black/10">
          {/* Imagine hero: fill + object-cover */}
          <div className="relative h-[520px] md:h-[560px]">
            <Image
              src="/hero.jpeg"
              alt="Caprice Tech - materiale pentru instalații și finisaje"
              fill
              priority
              className="object-cover"
              // Ajustează focal point-ul (dacă în poză subiectul e sus/jos)
              style={{ objectPosition: "center 35%" }}
            />

            {/* Overlay-uri pentru “look fain” + text lizibil */}
            <div className="absolute inset-0 bg-black/45" />
            {/* gradient de jos pentru contrast */}
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/70 to-transparent" />
            {/* vignette subtil */}
            <div className="absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.35)]" />

            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-7 md:p-12">
                <div className="max-w-3xl">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur"
                  >
                   Instalații electrice & termice | Finisaje interioare | Vopsele & Solutii decorative 
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.05 }}
                    className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl"
                  >
                    Materiale pentru instalații și amenajări interioare.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.1 }}
                    className="mt-4 max-w-2xl text-base leading-7 text-white/85 md:text-lg"
                  >
                    De peste 30 de ani oferim soluții complete, pentru fiecare etapă a proiectului.{" "}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.15 }}
                    className="mt-7 flex flex-col gap-3 sm:flex-row"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
                    >
                      Cere o recomandare
                    </Link>
                    <Link
                      href="/despre-noi"
                      className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                    >
                      Despre noi
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.2 }}
                    className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
                  >
                    <MiniStat title="Recomandări corecte" />
                    <MiniStat title="Soluții complete" />
                    <MiniStat title="Livrare / ridicare" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICII */}
      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 py-14"
      >
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Categorii principale
          </h2>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.05 * i }}
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              {/* icon blob colorat subtil */}
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-fuchsia-500/15 to-sky-500/15" />
              <h3 className="mt-4 text-base font-semibold text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PARTENERI */}
      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 pb-14"
      >
        <div className="rounded-3xl border border-black/10 bg-white/70 p-8 backdrop-blur md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Branduri și parteneri
            </h2>
            <p className="mt-2 text-neutral-700">
              Lucrăm cu branduri și distribuitori recunoscuți pentru rezultate
              durabile și compatibilitate bună între produse.{" "}

            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, ease: EASE_OUT, delay: 0.05 * i }}
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-black/10 bg-white/80 px-6 py-4 shadow-sm backdrop-blur"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={160}
                  height={56}
                  className="h-10 w-auto object-contain opacity-90 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 pb-16"
      >
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-neutral-900 p-10 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 right-[-140px] h-[360px] w-[360px] rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute -bottom-24 left-[-140px] h-[360px] w-[360px] rounded-full bg-sky-500/20 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ai nevoie de recomandări pentru lista ta de materiale?
            </h2>
            <p className="mt-2 max-w-2xl text-white/80">
              Trimite-ne detaliile proiectului și îți recomandăm produse
              compatibile.{" "}

            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
              >
                Contact
              </Link>

            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function MiniStat({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur">
      {title}
    </div>
  );
}
