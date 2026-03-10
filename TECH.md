# Documentație tehnică – Caprice Tech

Documentul descrie stack-ul și arhitectura tehnică a site-ului [caprice-tech.ro](https://caprice-tech.ro).

---

## 1. Prezentare generală

Site de prezentare pentru **Caprice Tech** (materiale instalații electrice/termice, vopsele, gresie, faianță, Râmnicu Vâlcea). Este o aplicație **Next.js** cu **App Router**, **React 19**, **TypeScript** și **Tailwind CSS**, gândită pentru performanță, SEO și deploy pe **Vercel**.

---

## 2. Tehnologii utilizate

| Categorie      | Tehnologie        | Versiune   | Rol |
|----------------|-------------------|------------|-----|
| Framework      | **Next.js**       | 16.1.1     | SSR, routing, build, optimizări |
| UI             | **React**         | 19.2.3     | Interfață utilizator |
| Limbaj         | **TypeScript**    | ^5         | Tipizare statică |
| Styling        | **Tailwind CSS**  | ^4.1.18    | CSS utility-first, design system |
| Animații       | **Framer Motion** | ^12.23.26  | Animații la scroll/hover |
| Fonturi        | **next/font**     | (Google)   | Playfair Display – încărcare optimizată |
| Linting        | **ESLint**        | ^9         | Reguli de cod (eslint-config-next 16) |
| PostCSS        | **@tailwindcss/postcss** | ^4  | Procesare CSS (Tailwind) |

### Detalii tehnice

- **Next.js 16** – App Router, Server Components by default, Metadata API, sitemap/robots, headere de securitate.
- **React 19** – Versiune curentă, cu suport pentru Server/Client Components.
- **Tailwind v4** – Configurare prin `@import "tailwindcss"` și `@theme` în `app/globals.css`; PostCSS pentru build.
- **Framer Motion** – Folosit în Navbar, Hero, Services, pagini (Despre noi, Contact etc.) pentru animații la viewport și hover.
- **TypeScript** – `strict: true`, path alias `@/*` către rădăcina proiectului.

---

## 3. Structura proiectului

```
├── app/                    # App Router (Next.js)
│   ├── layout.tsx          # Layout global, metadata, font, Navbar/Footer
│   ├── page.tsx            # Pagina principală (Acasă)
│   ├── globals.css         # Stiluri globale, variabile, Tailwind
│   ├── despre-noi/         # Pagina „Despre noi”
│   │   ├── page.tsx
│   │   └── metadata.ts     # Metadata specifică paginii
│   ├── contact/            # Pagina Contact (formular, date, hartă)
│   │   ├── page.tsx
│   │   └── metadata.ts
│   ├── blog/               # Pagina Blog (structură pregătită)
│   │   └── page.tsx
│   ├── sitemap.ts          # Sitemap XML generat dinamic
│   └── metadata.ts         # Metadata la nivel de app (dacă există)
├── components/             # Componente reutilizabile
│   ├── Navbar.tsx          # Header, meniu, link-uri social (FB, Instagram)
│   ├── Footer.tsx          # Subsol, copyright
│   ├── Hero.tsx            # Secțiune hero pe homepage
│   ├── Services.tsx        # Lista de servicii
│   ├── Partners.tsx        # Parteneri / logo-uri
│   ├── CTA.tsx             # Call-to-action
│   └── StructuredData.tsx  # Schema.org (LocalBusiness, Organization) – JSON-LD
├── public/                 # Assets statice (imagine logo, robots.txt etc.)
├── next.config.ts          # Config Next (headere securitate)
├── tsconfig.json           # Config TypeScript, path @/*
├── postcss.config.mjs      # PostCSS (Tailwind)
├── package.json
└── TECH.md                 # Acest document
```

---

## 4. SEO și metadata

- **Metadata centralizată** în `app/layout.tsx`: title, description, keywords, Open Graph, `metadataBase`, canonical.
- **Metadata per pagină** în `app/*/metadata.ts` unde e cazul (Despre noi, Contact).
- **Sitemap dinamic** în `app/sitemap.ts`: URL-uri pentru `/`, `/despre-noi`, `/contact`; domeniu `https://caprice-tech.ro`.
- **robots.txt** în `public/robots.txt` – referință la sitemap.
- **Structured Data (JSON-LD)** în `components/StructuredData.tsx`: tipuri `LocalBusiness` și `Organization` (adresă, geo, program, telefon, sameAs pentru rețele sociale). Inclus în layout pentru toate paginile.

---

## 5. Securitate (headere HTTP)

În `next.config.ts` sunt setate headere de securitate pentru toate rutele (`/:path*`):

- **Strict-Transport-Security** (HSTS) – max-age 2 ani, includeSubDomains, preload  
- **X-Frame-Options** – SAMEORIGIN  
- **X-Content-Type-Options** – nosniff  
- **X-XSS-Protection** – 1; mode=block  
- **Referrer-Policy** – origin-when-cross-origin  
- **Permissions-Policy** – restricții pentru camera, microfon, geolocație  
- **X-DNS-Prefetch-Control** – on  

---

## 6. Stilizare și fonturi

- **Tailwind CSS v4** – clase utility în componente; tema definită în `globals.css` cu `@theme inline` (culori background/foreground, font-sans, font-mono).
- **Variabile CSS** – `:root` pentru `--background` și `--foreground`; suport preferință `prefers-color-scheme: dark` (opțional).
- **Font principal** – **Playfair Display** (Google Fonts) încărcat prin `next/font` în `layout.tsx`, aplicat via variabilă `--font-playfair`; body folosește fallback Arial/sans-serif unde nu e suprascris.
- **Animații** – keyframe `scroll` în CSS pentru carusel (ex. parteneri); restul animațiilor prin Framer Motion.

---

## 7. Conținut dinamic și date firme

- **Date de contact / firmă** – hardcodate în: `StructuredData.tsx` (schema), `Navbar.tsx` (link-uri social), `app/contact/page.tsx` (adresă, telefon, email, embed Google Maps).
- **Coordonate Google Maps** – folosite în StructuredData (`geo`) și în iframe pe pagina Contact.
- **Cod poștal** – 245900 (adresă + schema).
- **Facebook / Instagram** – URL-uri în Navbar și în `sameAs` din StructuredData.

Pentru o variantă viitoare „fără cod”, aceste valori pot fi mutate într-un fișier de config (ex. `lib/site.ts` sau CMS).

---

## 8. Build și deploy

- **Comenzi:**
  - `npm run dev` – server de dezvoltare (Next.js, cu Turbopack în dev).
  - `npm run build` – build de producție.
  - `npm run start` – rulare build local.
  - `npm run lint` – ESLint.

- **Deploy** – proiectul este gata pentru **Vercel**: conectare la Git (ex. GitHub), build automat la push; domeniu custom `caprice-tech.ro` configurat prin DNS (A + CNAME) conform documentației Vercel.

---

## 9. Cerințe de sistem

- **Node.js** – versiune compatibilă cu Next.js 16 (recomandat LTS, ex. 18.x sau 20.x).
- **npm** (sau yarn/pnpm/bun) – pentru instalare dependențe și rulare scripturi.

---

## 10. Referințe

- [Next.js 16 – Documentație](https://nextjs.org/docs)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Vercel – Deploy Next.js](https://vercel.com/docs/frameworks/nextjs)
