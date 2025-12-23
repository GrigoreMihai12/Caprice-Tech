import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Caprice Tech",
  description: "Instalatii si amenajari interioare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-white text-neutral-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
