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

export default function DespreNoiPage() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* ===== Section: Image + Card (ca în poză) ===== */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 lg:grid-cols-12"
        >
          {/* imagine */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-neutral-100">
              <div className="relative h-[340px] md:h-[420px]">
                <Image
                  src="/despre-noi-proiect.jpeg"
                  alt="Proiect - Caprice Tech"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 45%" }}
                />
              </div>
            </div>
          </div>

          {/* card info */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-medium text-neutral-500">
                CAPRICE TECH
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
                Experiență care susține proiecte reale.
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-700">
                De peste 30 de ani lucrăm cu materiale pentru instalații,
                încălzire, climatizare și amenajări interioare. Experiența
                acumulată în timp ne permite să înțelegem nevoile reale ale
                fiecărui proiect și să recomandăm soluții care funcționează pe
                termen lung.
              </p>

              {/* mini-stats (2 chenare) */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <MiniStat value="30+" label="ani de experiență" />
                <MiniStat value="1000+" label="proiecte de succes" />
              </div>


            </motion.div>
          </div>
        </motion.section>

        {/* ===== Why Choose Us ===== */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-neutral-500">WHY CHOOSE US</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
              De ce Caprice-tech?
            </h2>
          </div>

          {/* Cadran special evidențiat SUS */}
          <div className="mt-8">
            <SpecialCard
              title="Echipă tehnică specializată"
              desc="Echipă de 2 ingineri special pregătiți, cu atestate în domeniul instalațiilor, pentru realizarea proiectelor de instalații."
              note=""
            />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <WhyCard
              icon="briefcase"
              title="Experiență reală"
              desc="Peste 30 de ani de experiență în materiale pentru instalații, încălzire, climatizare și amenajări interioare."
            />
            <WhyCard
              icon="products"
              title="Gamă completă de produse"
              desc="Soluții complete pentru fiecare etapă a proiectului, de la instalații și climatizare la finisaje și pardoseli."
            />
            <WhyCard
              icon="consulting"
              title="Consiliere profesională"
              desc="Nu vindem la întâmplare. Analizăm nevoia și recomandăm soluțiile potrivite pentru fiecare proiect."
            />
            <WhyCard
              icon="support"
              title="Suport pentru execuție"
              desc="Acces la meseriași verificați pentru punerea corectă în operă a fiecărui proiect."
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* ================== COMPONENTE ================== */

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-neutral-50 px-4 py-3">
      <p className="text-xl font-semibold text-neutral-900">{value}</p>
      <p className="mt-1 text-xs font-medium text-neutral-600">{label}</p>
    </div>
  );
}

function WhyCard({
  icon,
  title,
  desc,
}: {
  icon: "briefcase" | "products" | "consulting" | "support";
  title: string;
  desc: string;
}) {
  const icons = {
    briefcase: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 10h2m4 0h2m-6 4h.01M12 14h.01M16 10a2 2 0 100-4 2 2 0 000 4z"
        />
      </svg>
    ),
    products: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
        />
      </svg>
    ),
    consulting: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    support: (
      <svg
        className="h-6 w-6"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white">
        {icons[icon]}
      </div>
      <p className="mt-4 text-base font-semibold text-neutral-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-700">{desc}</p>
    </motion.div>
  );
}

function SpecialCard({
  title,
  desc,
  note,
}: {
  title: string;
  desc: string;
  note: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="rounded-3xl border border-black/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-7 text-white shadow-sm"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-lg font-semibold">{title}</p>
            <p className="mt-2 text-sm leading-6 text-white/85">{desc}</p>
            {note && <p className="mt-4 text-xs text-white/70">{note}</p>}
          </div>
        </div>

        <div className="rounded-xl border border-white/20 bg-white/15 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur">
          Evidențiat
        </div>
      </div>
    </motion.div>
  );
}
