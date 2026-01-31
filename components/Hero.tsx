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

export default function Hero() {
  return (
    <motion.section
      variants={section}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      <div className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="relative h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px]">
          <Image
            src="/hero.jpeg"
            alt="Caprice Tech - Materiale pentru instalații electrice și termice, vopsele, gresie, faianță și pardoseli în Râmnicu Vâlcea"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
          />

          {/* Overlay-uri pentru vizibilitate mai bună */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 [box-shadow:inset_0_0_150px_rgba(0,0,0,0.4)]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full px-6 py-7 md:px-12 md:py-16">
              <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                  className="inline-flex items-center rounded-full border border-white/40 bg-white/25 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md shadow-lg sm:px-4 sm:py-2 sm:text-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]"
                >
                  <span className="text-center">
                    Instalații electrice & termice | Finisaje interioare | Vopsele & Soluții decorative
                  </span>
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.05 }}
                  className="mt-4 text-2xl font-bold tracking-tight text-white sm:mt-6 sm:text-3xl md:text-5xl lg:text-6xl [text-shadow:0_2px_8px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.3)]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Materiale pentru instalații și amenajări interioare.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.1 }}
                  className="mt-6 max-w-2xl text-base leading-7 text-white md:text-lg [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
                >
                  De peste 30 de ani oferim soluții complete pentru fiecare etapă a proiectului.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.15 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-50 hover:shadow-xl"
                  >
                    Cere o recomandare
                  </Link>
                  <Link
                    href="/despre-noi"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-white/50 bg-white/20 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md shadow-lg transition hover:bg-white/30 hover:border-white/70 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]"
                  >
                    Despre noi
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

