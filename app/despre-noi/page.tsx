"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* easing corect tipizat */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* animație secțiuni */
const section: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export default function DespreNoiPage() {
  return (
    <div className="relative">
      {/* fundal colorat (ca Blog/Contact) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -top-32 right-[-120px] h-[460px] w-[460px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-[10%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* HERO */}
        <motion.section
          variants={section}
          initial="hidden"
          animate="show"
          className="rounded-3xl border border-black/10 bg-white/70 p-8 backdrop-blur md:p-12"
        >
          <p className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
            Despre noi
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Caprice Tech — materiale pentru instalații și finisaje, într-un singur
            loc.
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
            [DE COMPLETAT: 3–6 rânduri despre firmă: ce vindeți, cui vă adresați,
            zona deservită și ce vă diferențiază (stoc, prețuri, consultanță).]
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <InfoCard title="Gama de produse">
              [DE COMPLETAT: categorii, branduri, disponibilitate pe stoc]
            </InfoCard>
            <InfoCard title="Consultanță">
              [DE COMPLETAT: recomandări corecte, compatibilitate produse, soluții
              complete]
            </InfoCard>
            <InfoCard title="Livrare / Ridicare">
              [DE COMPLETAT: livrare locală/națională, ridicare din depozit,
              termene]
            </InfoCard>
          </div>
        </motion.section>

        {/* CATEGORII */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Ce comercializăm
          </h2>
          <p className="mt-2 max-w-3xl text-neutral-700">
            Materiale selectate pentru proiecte rezidențiale și comerciale — de la
            instalații electrice și termice, până la finisaje și pardoseli.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <CategoryCard
              title="Instalații electrice"
              items={[
                "cabluri, conductori, tuburi",
                "prize, întrerupătoare, aparataj",
                "tablouri, siguranțe, protecții",
                "[DE COMPLETAT: alte produse electrice]",
              ]}
            />
            <CategoryCard
              title="Instalații termice"
              items={[
                "țevi și fitinguri",
                "radiatoare și accesorii",
                "izolații și elemente de montaj",
                "[DE COMPLETAT: alte produse termice]",
              ]}
            />
            <CategoryCard
              title="Finisaje interioare"
              items={[
                "vopsele lavabile, amorse, glet",
                "tencuieli decorative și sisteme de finisaj",
                "accesorii (role, pensule, benzi)",
                "[DE COMPLETAT: alte finisaje]",
              ]}
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <CategoryCard
              title="Gresie & faianță"
              items={[
                "plăci ceramice pentru baie și bucătărie",
                "adezivi, chituri, profile",
                "[DE COMPLETAT: branduri / colecții]",
              ]}
            />
            <CategoryCard
              title="Pardoseli"
              items={[
                "parchet / pardoseală (după caz)",
                "strat suport, plintă, accesorii",
                "[DE COMPLETAT: tipuri pardoseli]",
              ]}
            />
          </div>
        </motion.section>

        {/* DE CE NOI */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            De ce Caprice Tech
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ValueCard
              title="Soluții complete"
              desc="[DE COMPLETAT: pachete complete de materiale pentru fiecare categorie]"
            />
            <ValueCard
              title="Recomandări corecte"
              desc="[DE COMPLETAT: consultanță tehnică și alternative corecte]"
            />
            <ValueCard
              title="Disponibilitate"
              desc="[DE COMPLETAT: stoc, comenzi speciale, termene rapide]"
            />
          </div>
        </motion.section>

        {/* BRANDURI */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 rounded-3xl border border-black/10 bg-white/70 p-8 backdrop-blur md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Branduri și parteneri
              </h2>
              <p className="mt-2 text-neutral-700">
                Distribuitor și partener pentru vopsele și sisteme de finisaj,
                inclusiv Caparol.
              </p>

              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Caparol — vopsele și sisteme de finisaj</li>
                <li>• [DE COMPLETAT: brand 2]</li>
                <li>• [DE COMPLETAT: brand 3]</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-neutral-900">
                Detalii magazin / livrare
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                [DE COMPLETAT: oraș, program, livrare, comandă]
              </p>

              <div className="mt-6 border-t border-black/10 pt-6">
                <p className="text-sm font-semibold text-neutral-900">
                  Clienți deserviți
                </p>
                <p className="mt-2 text-sm text-neutral-700">
                  [DE COMPLETAT: persoane fizice, firme, dezvoltatori]
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14"
        >
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-neutral-900 p-10 text-white">
            {/* glow ca la Blog/Contact */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 right-[-140px] h-[360px] w-[360px] rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -bottom-24 left-[-140px] h-[360px] w-[360px] rounded-full bg-sky-500/20 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight">
                Ai nevoie de recomandări pentru materiale?
              </h2>
              <p className="mt-2 max-w-2xl text-white/80">
                Trimite-ne detaliile proiectului, iar noi te ajutăm cu produsele
                potrivite.
              </p>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* ================= COMPONENTE ================= */

function InfoCard({ title, children }: { title: string; children: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur"
    >
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-700">{children}</p>
    </motion.div>
  );
}

function CategoryCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur"
    >
      <p className="text-base font-semibold text-neutral-900">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {items.map((x, idx) => (
          <li key={idx}>• {x}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur"
    >
      <p className="text-base font-semibold text-neutral-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-700">{desc}</p>
    </motion.div>
  );
}
