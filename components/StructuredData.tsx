export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://caprice-tech.ro/#organization", // Înlocuiește cu domeniul real
    name: "Caprice Tech",
    description:
      "Furnizor de materiale pentru instalații electrice și termice, vopsele, finisaje interioare, gresie, faianță și pardoseli în Râmnicu Vâlcea. Peste 30 de ani de experiență.",
    url: "https://caprice-tech.ro", // Înlocuiește cu domeniul real
    telephone: "+40744509028",
    email: "office@caprice-tech.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Râureni nr. 56–60",
      addressLocality: "Râmnicu Vâlcea",
      postalCode: "245900",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.06541315925154",
      longitude: "24.3390311243179",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Râmnicu Vâlcea",
    },
    sameAs: [
      "https://www.facebook.com/share/16pB6Ua599/?mibextid=wwXIfr",
      "https://www.instagram.com/capricetech.ro?igsh=MXR4Ymp4aWRrYnEwYg%3D%3D&utm_source=qr",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Caprice Tech",
    url: "https://caprice-tech.ro", // Înlocuiește cu domeniul real
    logo: "https://caprice-tech.ro/logo.jpeg", // Înlocuiește cu domeniul real
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40744509028",
      contactType: "customer service",
      areaServed: "RO",
      availableLanguage: "Romanian",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
