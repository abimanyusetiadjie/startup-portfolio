import type { Metadata } from "next";
import { GroveApp } from "@/components/grove/GroveApp";

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
      logo: `${APP_BASE_URL}/icon.svg`,
      description:
        "Software house Indonesia spesialis pembuatan website cepat Next.js, sistem ERP, SIAKAD & kasir POS kustom, serta automasi AI/ML dan WhatsApp resmi Meta.",
      areaServed: ["Jakarta", "Surabaya", "Indonesia"],
      knowsAbout: [
        "Jasa Pembuatan Website Cepat Next.js",
        "Sistem ERP, SIAKAD & Kasir POS Kustom",
        "Automasi AI & Machine Learning Terapan",
        "WhatsApp AI Agent Resmi Meta Cloud API",
      ],
    },
  ],
};

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <GroveApp />
    </div>
  );
}
