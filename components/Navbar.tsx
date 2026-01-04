"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { label: "Acasa", href: "/" },
  { label: "Despre noi", href: "/despre-noi" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
        {/* Logo wide (ca text) */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg" // schimba in /logo.png daca ai PNG
              alt="Caprice Tech"
              width={220} // ajustezi dupa cum arata
              height={32}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Impinge meniul la dreapta */}
        <div className="flex-1" />

        {/* Meniu (cu mici animatii) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 * idx }}
            >
              <Link
                href={item.href}
                className="group relative text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
              >
                {/* Text hover lift */}
                <motion.span
                  className="inline-block"
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {item.label}
                </motion.span>

                {/* Underline animat */}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-neutral-900 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}
