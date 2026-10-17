import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#FCF9F4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bbb-confeitaria.vercel.app"),
  title: "bbb. | Bons Brigadeiros & Bolos — Confeitaria Artesanal em São Paulo",
  description:
    "Bolos e brigadeiros feitos à mão, para datas que ficam. Escolha na vitrine, monte sua sacola e envie o pedido pronto pelo WhatsApp. Ateliê na Vila Madalena, São Paulo.",
  keywords: [
    "bolos artesanais",
    "brigadeiros gourmet",
    "confeitaria são paulo",
    "vila madalena",
    "bolo de aniversário",
    "docinhos finos",
    "kit festa sp",
    "encomenda bolo whatsapp",
  ],
  authors: [{ name: "bbb. bons brigadeiros & bolos" }],
  creator: "bbb. Confeitaria",
  publisher: "bbb. Confeitaria",
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bbb-confeitaria.vercel.app",
    title: "bbb. | Bons Brigadeiros & Bolos",
    description:
      "Bolos e brigadeiros artesanais feitos à mão na Vila Madalena, São Paulo. Escolha na vitrine e monte seu pedido direto no WhatsApp.",
    siteName: "bbb. Bons Brigadeiros e Bolos",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "bbb. Confeitaria artesanal de bolos e brigadeiros em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bbb. | Bons Brigadeiros & Bolos",
    description:
      "Bolos e brigadeiros feitos à mão em São Paulo. Peça pela vitrine e envie pronto pelo WhatsApp.",
    images: ["/images/hero.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "bbb. bons brigadeiros & bolos",
    image: "https://bbb-confeitaria.vercel.app/images/hero.jpg",
    description:
      "Ateliê de confeitaria artesanal em São Paulo especializado em bolos e brigadeiros gourmet sob encomenda.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Harmonia, 123",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "05435-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.555,
      longitude: -46.689,
    },
    url: "https://bbb-confeitaria.vercel.app",
    telephone: "+5511900000000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Confeitaria Brasileira",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "240",
    },
  };

  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream-50 text-cocoa-900 font-sans antialiased selection:bg-terracotta-100 selection:text-cocoa-900">
        {children}
      </body>
    </html>
  );
}
