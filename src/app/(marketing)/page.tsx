import type { Metadata } from "next";
import { GroveApp } from "@/components/grove/GroveApp";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  title: "Abinest | Software House & Konsultan Teknologi: Website, Sistem & Otomasi",
  description:
    "Abinest melayani jasa pembuatan website modern berkecepatan tinggi, sistem informasi kustom (SIAKAD Sekolah anti-down & ERP), serta otomasi WhatsApp resmi Meta.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abinest | Solusi IT Andal untuk UMKM & Institusi Anda",
    description:
      "Kami bantu bisnis & institusi tumbuh aman dan modern: SIAKAD anti-down, website Next.js 15 skor 95–100, dan otomasi WhatsApp terpercaya.",
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
      name: "Abinest Software House & Konsultan Teknologi",
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
    <main className="min-h-screen bg-[#FAF9F6] text-[#0F172A] selection:bg-[#D97736] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <GroveApp />
    </main>
  );
}
