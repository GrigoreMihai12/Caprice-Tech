import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Caprice Tech | Materiale pentru instalații și amenajări interioare",
    template: "%s | Caprice Tech",
  },
  description:
    "De peste 30 de ani oferim soluții complete pentru instalații electrice și termice, încălzire, climatizare și amenajări interioare. Vopsele, gresie, faianță, pardoseli și consultanță profesională.",
  keywords: [
    "materiale instalații",
    "instalații electrice",
    "instalații termice",
    "vopsele",
    "gresie",
    "faianță",
    "pardoseli",
    "amenajări interioare",
    "finisaje interioare",
    "Râmnicu Vâlcea",
    "Caprice Tech",
    "pompe de căldură",
    "aer condiționat",
    "parchet",
  ],
  authors: [{ name: "Caprice Tech" }],
  creator: "Caprice Tech",
  publisher: "Caprice Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://caprice-tech.ro"), // Înlocuiește cu domeniul tău real
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://caprice-tech.ro", // Înlocuiește cu domeniul tău real
    siteName: "Caprice Tech",
    title: "Caprice Tech | Materiale pentru instalații și amenajări interioare",
    description:
      "De peste 30 de ani oferim soluții complete pentru instalații electrice și termice, încălzire, climatizare și amenajări interioare.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Caprice Tech - Materiale pentru instalații și amenajări interioare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caprice Tech | Materiale pentru instalații și amenajări interioare",
    description:
      "De peste 30 de ani oferim soluții complete pentru instalații electrice și termice, încălzire, climatizare și amenajări interioare.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={playfairDisplay.variable}>
      <body className="min-h-screen bg-white text-neutral-900">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
