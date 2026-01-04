"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const section: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

export default function ContactPage() {
  return (
    <div className="relative bg-white">
      {/* fundal alb pentru toate paginile */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white" />

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* HERO */}
        <motion.section
          variants={section}
          initial="hidden"
          animate="show"
          className="rounded-3xl border border-black/10 bg-white p-8 md:p-12"
        >
          <p className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
            Contact
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Hai să alegem materialele potrivite pentru proiectul tău.
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
            Completează formularul sau contactează-ne direct pentru recomandări
            și oferte de materiale, adaptate proiectului tău. Te ajutăm cu
            soluții pentru instalații electrice și termice, încălzire și
            climatizare, finisaje interioare, gresie, faianță și pardoseli.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-800">
            Recomandări corecte <span className="text-neutral-400">·</span>{" "}
            Produse verificate <span className="text-neutral-400">·</span>{" "}
            Livrare rapidă
          </div>
        </motion.section>

        {/* CONȚINUT */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {/* FORMULAR */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="rounded-3xl border border-black/10 bg-white p-8"
          >
            <h2 className="text-xl font-semibold text-neutral-900">
              Cerere ofertă materiale
            </h2>

            <p className="mt-2 text-sm text-neutral-700">
              Spune-ne câteva detalii despre proiectul tău, iar noi revenim cu
              recomandări și o ofertă adaptată nevoilor tale.
            </p>

            <form className="mt-6 space-y-4">
              <Input label="Nume complet" placeholder="" />
              <Input label="Telefon" placeholder="" />
              <Input label="Email" placeholder="" />

              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-800">
                  Categorie produse
                </label>
                <select className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm">
                  <option>Instalații electrice</option>
                  <option>Instalații termice</option>
                  <option>Încălzire & climatizare</option>
                  <option>Finisaje interioare</option>
                  <option>Gresie & faianță</option>
                  <option>Pardoseli</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-800">
                  Detalii proiect / listă materiale
                </label>
                <textarea
                  rows={4}
                  placeholder=" tip proiect, suprafață, cantități, preferințe brand"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">
                    Buget estimativ (opțional)
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">
                    Localitate (opțional)
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-2 w-full rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Trimite cererea
              </button>
            </form>
          </motion.div>

          {/* INFO + POZĂ */}
          <motion.div variants={section} className="flex flex-col gap-4">
            <div className="rounded-3xl border border-black/10 bg-neutral-900 p-8 text-white">
              <h3 className="text-lg font-semibold">Date de contact</h3>

              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li>📞 0744 509 028</li>
                <li>✉️ office@caprice-tech.ro</li>
                <li>
                  📍 Strada Râureni nr. 56–60, Râmnicu Vâlcea 240475
                </li>
                <li>🕒 L–V 8:00–17:00, S–D închis</li>
              </ul>

            </div>     
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

/* ================= COMPONENTE ================= */

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-neutral-800">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
      />
    </div>
  );
}
