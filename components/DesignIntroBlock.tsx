import Image from "next/image";
import Link from "next/link";

/**
 * Blocul din PDF imediat după hero („poza de referință + text din poză”).
 * Textul poate fi înlocuit 1:1 când ai varianta finală din layout.
 */
export default function DesignIntroBlock() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Design &amp; execuție
          </p>
          <h2
            className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            De la moodboard la materiale comandabile.
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-700 md:text-base md:leading-8">
            Lucrăm cu arhitecți, designeri și beneficiari care au nevoie de
            consistență între randare, mostre și livrare. Proiectele Mariei din
            slideshow-ul de mai sus sunt punctul de plecare pentru inspirație;
            în showroom traducem aceeași linie în produse concrete, cu
            specificații clare pentru șantier.
          </p>
          <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
            Ai nevoie de mostre, fișe tehnice sau recomandări pe zonă?{" "}
            <Link
              href="/contact"
              className="font-medium text-neutral-900 underline underline-offset-2 hover:no-underline"
            >
              Scrie-ne
            </Link>{" "}
            și spune-ne proiectul.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 shadow-sm md:rounded-3xl">
            <div className="relative aspect-[4/3] w-full md:aspect-[5/4]">
              <Image
                src="/design-projects2/design-executie.jpeg"
                alt="Design și execuție — referință proiect"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
