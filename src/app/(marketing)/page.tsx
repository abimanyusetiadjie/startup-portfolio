import type { Metadata } from "next";
import { GroveApp } from "@/components/grove/GroveApp";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://studio-rekayasa.triloe.id";

export const metadata: Metadata = {
  title:
    "Rekayasa Sistem Skala Enterprise & Otomasi Bisnis Berkecepatan Tinggi",
  description:
    "Solusi rekayasa perangkat lunak B2B: Website Next.js 95–100 Lighthouse, SIAKAD Sekolah Modern + Parallel PDF Engine, Omnichannel Hub, dan Otomasi WhatsApp Real-Time.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Rekayasa Sistem Skala Enterprise & Otomasi Bisnis Berkecepatan Tinggi",
    description:
      "Arsitektur Web Next.js 95–100 Lighthouse, SIAKAD terpisah anti-down dengan mesin cetak ratusan PDF rapor otomatis, dan integrasi API/WhatsApp real-time.",
    url: APP_BASE_URL,
    type: "website",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${APP_BASE_URL}/#organization`,
      name: "Software Engineering & Automation Studio",
      url: APP_BASE_URL,
      description:
        "Studio rekayasa perangkat lunak B2B spesialis arsitektur web performa tinggi, sistem SIAKAD/ERP terpisah, dan otomasi bisnis WhatsApp/API.",
      knowsAbout: [
        "Next.js App Router",
        "Supabase PostgreSQL Row Level Security",
        "Academic Information System (SIAKAD)",
        "Asynchronous PDF Report Generation",
        "WhatsApp Business API Automation",
        "Shopify Polaris Client Portal",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${APP_BASE_URL}/#software`,
      name: "SIAKAD Core + Parallel PDF Report Engine & Enterprise Client Portal",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Cloud (Next.js Edge & Supabase)",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "15000000",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "24",
      },
      provider: {
        "@id": `${APP_BASE_URL}/#organization`,
      },
    },
  ],
};

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#1A201C]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <GroveApp />
    </main>
  );
}
