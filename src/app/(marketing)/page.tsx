import type { Metadata } from "next";
import { SignificaApp } from "@/components/significa/SignificaApp";
import { FAQ_ITEMS } from "@/components/grove/faq-data";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  title: {
    absolute: "Abinest | Jasa Website Cepat, Sistem ERP/SIAKAD/POS & Automasi AI/ML",
  },
  description:
    "Software house Indonesia: pembuatan website cepat (<0,8 detik), sistem ERP, SIAKAD sekolah, kasir POS kustom, dan automasi AI/ML WhatsApp resmi. 100% hak milik kode program tanpa biaya lisensi per pengguna.",
  keywords: [
    "jasa pembuatan website cepat",
    "sistem erp siakad pos indonesia",
    "automasi ai machine learning",
    "software house jakarta surabaya",
    "jasa custom software perusahaan",
    "document ai invoice ocr",
    "whatsapp ai agent meta resmi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: APP_BASE_URL,
    siteName: "Abinest Digital Systems",
    title: "Abinest | Jasa Website Cepat, Sistem ERP/SIAKAD/POS & Automasi AI/ML",
    description:
      "Website, ERP, SIAKAD, POS, hingga Automasi AI/ML. Dibangun cepat, aman, dan siap bertumbuh bersama bisnis Anda.",
    images: [
      {
        url: "/images/abinest-og-card.jpg",
        width: 1376,
        height: 768,
        alt: "Abinest Digital Systems — Software House Indonesia",
      },
    ],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${APP_BASE_URL}/#organization`,
      name: "Abinest Digital Systems",
      url: APP_BASE_URL,
      logo: `${APP_BASE_URL}/icon-512.png`,
      description:
        "Software house Indonesia spesialis pembuatan website cepat Next.js, sistem ERP, SIAKAD & kasir POS kustom, serta automasi AI/ML dan WhatsApp resmi Meta.",
      areaServed: ["Jakarta", "Surabaya", "Indonesia"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+62-813-9858-9745",
        availableLanguage: ["Indonesian", "English"],
      },
      knowsAbout: [
        "Jasa Pembuatan Website Cepat Next.js",
        "Sistem ERP, SIAKAD & Kasir POS Kustom",
        "Automasi AI & Machine Learning Terapan",
        "WhatsApp AI Agent Resmi Meta Cloud API",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${APP_BASE_URL}/#website`,
      url: APP_BASE_URL,
      name: "Abinest Digital Systems",
      inLanguage: "id-ID",
      publisher: { "@id": `${APP_BASE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${APP_BASE_URL}/#service`,
      name: "Abinest Digital Systems — Jasa Website, ERP & Automasi AI",
      url: APP_BASE_URL,
      image: `${APP_BASE_URL}/images/abinest-og-card.jpg`,
      priceRange: "Rp1.500.000 - Rp12.000.000+",
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      provider: { "@id": `${APP_BASE_URL}/#organization` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Pengembangan Sistem Digital Abinest",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pembuatan Website Berkecepatan Tinggi & Ramah SEO",
              url: `${APP_BASE_URL}/jasa-pembuatan-website-jakarta`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pengembangan Sistem ERP, SIAKAD & Kasir POS Kustom",
              url: `${APP_BASE_URL}/jasa-pembuatan-sistem-erp`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automasi WhatsApp Resmi Meta & Asisten AI/ML",
              url: `${APP_BASE_URL}/jasa-automasi-whatsapp`,
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${APP_BASE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] selection:bg-[#FFD124] selection:text-[#171717]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <SignificaApp />
    </div>
  );
}
