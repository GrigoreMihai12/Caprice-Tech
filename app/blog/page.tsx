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

const posts = [
  {
    slug: "cum-alegi-vopseaua-pentru-interior",
    title: "Cum alegi vopseaua pentru interior: lavabilă, amorsă, consum",
    excerpt:
      "[DE COMPLETAT: 1–2 propoziții scurte despre articol. Exemplu: Ce tipuri de vopsea există și cum alegi corect în funcție de cameră.]",
    category: "Finisaje",
    date: "2025-01-01",
    readTime: "5 min",
    image: "/blog/post-1.jpg", // pune poza aici
  },
  {
    slug: "gresie-si-faianta-ce-trebuie-sa-stii",
    title: "Gresie și faianță: ce trebuie să știi înainte să cumperi",
    excerpt:
      "[DE COMPLETAT: un rezumat. Exemplu: Diferențe de clasă, finisaj, dimensiuni și ce accesorii sunt necesare.]",
    category: "Gresie & faianță",
    date: "2025-01-01",
    readTime: "6 min",
    image: "/blog/post-2.jpg",
  },
  {
    slug: "instalatii-electrice-ghid-rapid",
    title: "Instalații electrice: ghid rapid pentru materiale esențiale",
    excerpt:
      "[DE COMPLETAT: un rezumat. Exemplu: Cabluri, tuburi, aparataj, protecții și cum alegi o soluție sigură.]",
    category: "Electric",
    date: "2025-01-01",
    readTime: "7 min",
    image: "/blog/post-3.jpg",
  },
  {
    slug: "instalatii-termice-materiale",
    title: "Instalații termice: materiale și compatibilități de bază",
    excerpt:
      "[DE COMPLETAT: un rezumat. Exemplu: Țevi, fitinguri, izolări și ce întrebări să pui înainte de achiziție.]",
    category: "Termic",
    date: "2025-01-01",
    readTime: "6 min",
    image: "/blog/post-4.jpg",
  },
];

const categories = [
  { label: "Toate", count: posts.length },
  { label: "Finisaje", count: posts.filter((p) => p.category === "Finisaje").length },
  { label: "Gresie & faianță", count: posts.filter((p) => p.category === "Gresie & faianță").length },
  { label: "Electric", count: posts.filter((p) => p.category === "Electric").length },
  { label: "Termic", count: posts.filter((p) => p.category === "Termic").length },
];

export default function BlogPage() {
  return (
    <div className="relative">
      {/* fundal colorat subtil */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -top-32 right-[-120px] h-[460px] w-[460px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-28 left-[15%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* HERO */}
        <motion.section
          variants={section}
          initial="hidden"
          animate="show"
          className="rounded-3xl border border-black/10 bg-white/70 p-8 backdrop-blur md:p-12"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
            Blog
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            Ghiduri & recomandări
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Idei, sfaturi și ghiduri pentru alegerea materialelor potrivite.
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
            Aici găsești articole despre instalații electrice și termice, vopsele
            și finisaje interioare, gresie, faianță și pardoseli.{" "}
            <span className="font-medium text-neutral-900">
              [DE COMPLETAT: 1–2 propoziții despre ce publici și cât de des.]
            </span>
          </p>

          {/* Bara de categorii (vizuală; dacă vrei filtrare reală, o facem după) */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c, idx) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE_OUT, delay: 0.05 * idx }}
              >
                <button
                  type="button"
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
                  // momentan nu filtrează; e placeholder UI
                >
                  {c.label} <span className="text-neutral-500">({c.count})</span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Featured card (primul articol) */}
          <motion.div
            variants={section}
            initial="hidden"
            animate="show"
            className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-white to-neutral-50"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[220px]">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                  <span className="rounded-full bg-fuchsia-500/10 px-2 py-1 font-medium text-fuchsia-700">
                    Featured
                  </span>
                  <span className="rounded-full bg-neutral-900/5 px-2 py-1 font-medium">
                    {posts[0].category}
                  </span>
                  <span>•</span>
                  <span>{formatDate(posts[0].date)}</span>
                  <span>•</span>
                  <span>{posts[0].readTime}</span>
                </div>

                <h2 className="mt-3 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                  {posts[0].title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  {posts[0].excerpt}
                </p>

                <div className="mt-6">
                  {/* Placeholder: momentan trimite la /blog (nu avem pagini de articol încă) */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Cere recomandare materiale
                  </Link>
                  <p className="mt-2 text-xs text-neutral-500">
                    [DE COMPLETAT: CTA scurt — ex: „Trimite lista ta și îți recomandăm produsele potrivite.”]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* GRID POSTURI */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Articole recente
              </h2>
              <p className="mt-2 text-neutral-700">
                [DE COMPLETAT: o propoziție – „Recomandări practice și comparații de produse.”]
              </p>
            </div>

            <div className="hidden md:block">
              <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-neutral-700 backdrop-blur">
                <span className="font-medium text-neutral-900">{posts.length}</span>{" "}
                articole (placeholder)
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, idx) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.04 * idx }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-sm backdrop-blur"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">
                    {p.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <span>{formatDate(p.date)}</span>
                    <span>•</span>
                    <span>{p.readTime}</span>
                  </div>

                  <h3 className="mt-2 line-clamp-2 text-base font-semibold text-neutral-900">
                    {p.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-neutral-700">
                    {p.excerpt}
                  </p>

                  {/* Placeholder link */}
                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition group-hover:text-fuchsia-700"
                    >
                      Citește ghidul
                      <span className="inline-block transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                    <p className="mt-1 text-xs text-neutral-500">
                      [DE COMPLETAT: când vei avea pagini de articol, link-ul va merge către /blog/{p.slug}]
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* CTA FINAL */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 pb-6"
        >
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-neutral-900 p-10 text-white">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 right-[-140px] h-[360px] w-[360px] rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -bottom-24 left-[-140px] h-[360px] w-[360px] rounded-full bg-sky-500/20 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight">
                Vrei o recomandare rapidă pentru lista ta de materiale?
              </h2>
              <p className="mt-2 max-w-2xl text-white/80">
                Trimite-ne detalii despre proiect și îți recomandăm produse
                compatibile.{" "}
                <span className="font-medium">
                  [DE COMPLETAT: promisiunea ta — stoc/branduri/livrare.]
                </span>
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
                >
                  Contact
                </Link>
                <Link
                  href="/despre-noi"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Despre Caprice Tech
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  // simplu + sigur, fără biblioteci
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("ro-RO", { year: "numeric", month: "short", day: "2-digit" });
}
