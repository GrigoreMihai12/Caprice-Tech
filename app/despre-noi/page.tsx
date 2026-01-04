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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white" />

      {/* ===== Banner (mock-up landscape sub meniu) ===== */}
      <motion.section
        variants={section}
        initial="hidden"
        animate="show"
        className="relative h-[180px] overflow-hidden border-b border-black/10 md:h-[220px]"
      >
        {/* Dacă ai o poză dedicată, schimbă src în /despre-noi-banner.jpg */}
        <Image
          src="/despre-noi-proiect.jpeg"
          alt="Caprice Tech - Despre noi"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 50%" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="mx-auto flex h-full max-w-7xl items-end px-4 pb-8">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              ABOUT US
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Despre noi
            </h1>
          </div>
        </div>
      </motion.section>

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

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <WhyCard
              title="Experiență reală"
              desc="Peste 30 de ani de experiență în materiale pentru instalații, încălzire, climatizare și amenajări interioare."
            />
            <WhyCard
              title="Gama completă de produse"
              desc="Soluții complete pentru fiecare etapă a proiectului, de la instalații și climatizare la finisaje și pardoseli."
            />
            <WhyCard
              title="Consiliere profesională"
              desc="Nu vindem la întâmplare. Analizăm nevoia și recomandăm soluțiile potrivite pentru fiecare proiect."
            />
            <WhyCard
              title="Suport pentru execuție"
              desc="Acces la meseriași verificați pentru punerea corectă în operă a fiecărui proiect."
            />

            {/* Cadran special evidențiat (dreptunghiular) */}
            <SpecialCard
              title="Echipă tehnică specializată"
              desc="Echipă de 2 ingineri special pregătiți, cu atestate în domeniul instalațiilor, pentru realizarea proiectelor de instalații."
              note=""
            />
          </div>
        </motion.section>

        {/* ===== Section extra (ca în poză: încă un bloc cu imagine + text) ===== */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-neutral-500">
              MATERIALE & SOLUȚII
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
              Soluții potrivite pentru fiecare etapă a proiectului.
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-700">
              De la materiale pentru instalații electrice și termice, până la
              finisaje, gresie, faianță și pardoseli — te ajutăm să alegi corect
              și compatibil.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>• recomandări în funcție de buget și cerințe</li>
              <li>• produse verificate + compatibilitate</li>
              <li>• livrare / ridicare din depozit</li>
            </ul>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
              >
                Cere recomandare
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-neutral-100">
              <div className="relative h-[320px] md:h-[420px]">
                <Image
                  src="/despre-noi-proiect.jpeg"
                  alt="Materiale și finisaje - Caprice Tech"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 55%" }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===== CTA jos (ca în poză) ===== */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 pb-8"
        >
          <div className="rounded-3xl border border-black/10 bg-neutral-900 p-10 text-white">
            <h4 className="text-2xl font-semibold tracking-tight">
              Ești gata să începem un proiect nou?
            </h4>
            <p className="mt-2 max-w-2xl text-white/80">
              Trimite-ne lista sau câteva detalii și revenim cu recomandări și o
              ofertă adaptată.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
              >
                Contact
              </Link>
            </div>
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

function WhyCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
    >
      <div className="h-11 w-11 rounded-2xl bg-neutral-900/5" />
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
      className="rounded-3xl border border-black/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-7 text-white shadow-sm md:col-span-2 lg:col-span-3"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <p className="text-lg font-semibold">{title}</p>
          <p className="mt-2 text-sm leading-6 text-white/85">{desc}</p>
          <p className="mt-4 text-xs text-white/70">{note}</p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
          Evidențiat
        </div>
      </div>
    </motion.div>
  );
}
