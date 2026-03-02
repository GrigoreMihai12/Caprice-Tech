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
            Contact & Consultanță
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
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
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
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white">
                {/* Document with lines - main icon */}
                <svg
                  className="absolute h-5 w-5 text-neutral-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  {/* Document outline with rounded corners */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                  {/* Three horizontal lines of varying lengths */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9h8M6 12h5M6 15h7"
                  />
                </svg>
                {/* Pencil overlapping diagonally from top-right to bottom-left */}
                <svg
                  className="absolute -bottom-1 -right-1 h-4 w-4 rotate-[-20deg] text-neutral-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-neutral-900">
                Cerere ofertă materiale
              </h2>
            </div>

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
                <select className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900">
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
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900"
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
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">
                    Localitate (opțional)
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900"
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
                  📍 Strada Râureni nr. 56–60, Râmnicu Vâlcea 245900
                </li>
                <li>🕒 L–V 8:00–17:00, S–D închis</li>
              </ul>

              <a
                href="tel:+40744509028"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Sună acum
              </a>
            </div>

            {/* Harta Google Maps - coordonate locație */}
            <div className="rounded-3xl border border-black/10 overflow-hidden">
              <iframe
                title="Locație Caprice Tech pe Google Maps"
                src="https://www.google.com/maps?q=45.06541315925154,24.3390311243179&z=16&output=embed"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
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
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900"
      />
    </div>
  );
}
