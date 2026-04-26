"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { REVISTA_MARIEI_URL } from "@/lib/revista-mariei";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SLIDES: { src: string; alt: string; objectPosition?: string }[] = [
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.06.jpeg",
    alt: "Proiect Maria 1",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.06 (1).jpeg",
    alt: "Proiect Maria 2",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.06 (2).jpeg",
    alt: "Proiect Maria 3",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.07.jpeg",
    alt: "Proiect Maria 4",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.07 (1).jpeg",
    alt: "Proiect Maria 5",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.07 (2).jpeg",
    alt: "Proiect Maria 6",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.07 (3).jpeg",
    alt: "Proiect Maria 7",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.07 (4).jpeg",
    alt: "Proiect Maria 8",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.07 (5).jpeg",
    alt: "Proiect Maria 9",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.07 (6).jpeg",
    alt: "Proiect Maria 10",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.07 (7).jpeg",
    alt: "Proiect Maria 11",
  },
  {
    src: "/design-projects/WhatsApp Image 2026-04-25 at 00.25.08.jpeg",
    alt: "Proiect Maria 12",
  },
];

const INTERVAL_MS = 5000;

export default function DesignHeroSection() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full border-b border-neutral-200 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-8 md:pt-12" />

      <div className="mx-auto w-full max-w-2xl px-4 md:px-0">
        <div className="relative aspect-[4/5] w-full max-h-[720px] min-h-[360px] overflow-hidden rounded-2xl bg-neutral-900 shadow-xl sm:aspect-[3/4] sm:min-h-[520px] md:rounded-3xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: EASE_OUT }}
              className="absolute inset-0"
            >
              <Image
                src={SLIDES[index].src}
                alt={SLIDES[index].alt}
                fill
                className="object-cover"
                style={{
                  objectPosition: SLIDES[index].objectPosition ?? "center center",
                }}
                sizes="(max-width: 768px) calc(100vw - 2rem), 42rem"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 px-4">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:pb-16 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_OUT, delay: 0.25 }}
            className="text-sm leading-relaxed text-neutral-600 md:text-base"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Fiecare proiect este gândit în detaliu, de la concept la execuție.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.35 }}
            className="mt-8"
          >
            <a
              href={REVISTA_MARIEI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-none border border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-neutral-800 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Descoperă mai mult
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
