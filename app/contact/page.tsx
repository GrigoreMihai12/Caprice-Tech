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
    <div className="relative">
      {/* fundal colorat */}
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
            Contact
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Hai să alegem materialele potrivite pentru proiectul tău.
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
            Completează formularul sau contactează-ne direct pentru recomandări
            și oferte de materiale pentru instalații electrice și termice,
            vopsele, finisaje interioare, gresie, faianță și pardoseli.{" "}
            <span className="font-medium text-neutral-900">
              [DE COMPLETAT: promisiunea ta – stoc, branduri, livrare rapidă etc.]
            </span>
          </p>
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
            className="rounded-3xl border border-black/10 bg-white/80 p-8 backdrop-blur"
          >
            <h2 className="text-xl font-semibold text-neutral-900">
              Cerere ofertă materiale
            </h2>

            <p className="mt-2 text-sm text-neutral-700">
              [DE COMPLETAT: scurt text explicativ despre completarea formularului]
            </p>

            <form className="mt-6 space-y-4">
              <Input label="Nume complet" placeholder="[DE COMPLETAT]" />
              <Input label="Telefon" placeholder="[DE COMPLETAT]" />
              <Input label="Email" placeholder="[DE COMPLETAT]" />

              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-800">
                  Categorie produse
                </label>
                <select className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm">
                  <option>[DE COMPLETAT]</option>
                  <option>Instalații electrice</option>
                  <option>Instalații termice</option>
                  <option>Vopsele & finisaje</option>
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
                  placeholder="[DE COMPLETAT: tip lucrare, suprafață, cantități]"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-800">
                  Buget estimativ (opțional)
                </label>
                <input
                  type="text"
                  placeholder="[DE COMPLETAT]"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                />
              </div>

              <button
                type="button"
                className="mt-2 w-full rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Trimite cererea (placeholder)
              </button>

              <p className="text-xs text-neutral-500">
                [DE COMPLETAT: GDPR / timp răspuns / metodă contact]
              </p>
            </form>
          </motion.div>

          {/* INFO + POZE */}
          <motion.div
            variants={section}
            className="flex flex-col gap-4"
          >
            <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-white">
              <h3 className="text-lg font-semibold">Date de contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li>📍 [DE COMPLETAT: oraș / zonă]</li>
                <li>📞 [DE COMPLETAT: telefon]</li>
                <li>✉️ [DE COMPLETAT: email]</li>
                <li>🕒 [DE COMPLETAT: program]</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/80 backdrop-blur">
              {/* Placeholder imagine */}
              <div className="flex h-56 items-center justify-center bg-neutral-100 text-sm text-neutral-500">
                [DE COMPLETAT: imagine magazin / depozit / produse]
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-neutral-900">
                Ce poți trimite în mesaj
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li>• listă de materiale (PDF / Excel)</li>
                <li>• suprafețe sau cantități estimate</li>
                <li>• poze cu spațiul (opțional)</li>
                <li>• termen dorit</li>
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
