import type { Metadata } from "next";
import { ModernNavbar } from "@/components/modern/ModernNavbar";
import { ModernHeroSection } from "@/components/modern/ModernHeroSection";
import { ModernSystemsSection } from "@/components/modern/ModernSystemsSection";
import { ModernCaseStudySection } from "@/components/modern/ModernCaseStudySection";
import { ModernStandardsSection } from "@/components/modern/ModernStandardsSection";
import { ModernConsultationSection } from "@/components/modern/ModernConsultationSection";
import { ModernFooter } from "@/components/modern/ModernFooter";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  title: "Abinest | Studio Rekayasa Sistem Enterprise & Otomasi B2B",
  description:
    "Infrastruktur perangkat lunak kelas enterprise: Website Next.js 100 Lighthouse, SIAKAD sekolah decoupled anti-down dengan paralel PDF worker, dan otomasi WhatsApp API.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abinest | Studio Rekayasa Sistem Enterprise & Otomasi B2B",
    description:
      "Infrastruktur perangkat lunak untuk sistem yang menolak down. Arsitektur terpisah, SLA 99.98%, dan pemrosesan data paralel berkecepatan tinggi.",
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
      name: "Abinest Engineering Studio",
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
      name: "SIAKAD Decoupled Core & Parallel PDF Report Engine",
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
    <main className="min-h-screen bg-[#FFFFFF] text-[#09090B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <ModernNavbar />
      <ModernHeroSection />
      <ModernSystemsSection />
      <ModernCaseStudySection />
      <ModernStandardsSection />
      <ModernConsultationSection />
      <ModernFooter />
    </main>
  );
}
