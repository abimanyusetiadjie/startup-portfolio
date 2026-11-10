import type { Metadata } from "next";
import { GroveApp } from "@/components/grove/GroveApp";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  title:
    "Abinest | Modern Web, Custom ERP, & AI/ML Automation Startup",
  description:
    "Startup software house & studio rekayasa teknologi: Jasa Website Modern Next.js 15 (<0.8s), Sistem ERP Kustom Multi-Gudang & Keuangan, serta Automasi AI & Machine Learning. 100% Hak Milik Source Code tanpa biaya sewa lisensi.",
  keywords: [
    "jasa pembuatan website modern",
    "sistem erp kustom indonesia",
    "automasi ai machine learning startup",
    "software house jakarta surabaya",
    "jasa custom software enterprise",
    "document ai invoice ocr",
    "whatsapp ai agent meta resmi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Abinest | Solusi Digital Presisi: Web Modern, ERP Kustom & Automasi AI/ML",
    description:
      "Teruji di 25+ Perusahaan Nasional. SLA 99.9% Uptime, Respons Engineer <15 Menit, dan 100% Kepemilikan Source Code Tanpa Biaya Lisensi Bulanan.",
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
      name: "Abinest Startup Rekayasa Teknologi",
      url: APP_BASE_URL,
      description:
        "Startup Rekayasa Teknologi spesialis Jasa Pembuatan Website Modern Next.js 15, Sistem ERP Kustom Terpadu, serta Automasi AI & Machine Learning di Indonesia.",
      areaServed: ["Jakarta", "Surabaya", "Indonesia"],
      knowsAbout: [
        "Jasa Pembuatan Website Modern Next.js",
        "Sistem ERP Kustom Multi-Gudang & Keuangan",
        "Automasi AI & Machine Learning Terapan",
        "WhatsApp AI Agent Resmi Meta Cloud API",
      ],
    },
  ],
};

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <GroveApp />
    </main>
  );
}
