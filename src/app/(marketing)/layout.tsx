import type { Metadata } from "next";
import type { ReactNode } from "react";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  title: {
    default: "Abinest | Modern Web, Custom ERP, & AI/ML Automation Startup",
    template: "%s | Abinest Startup Rekayasa Teknologi",
  },
  description:
    "Startup software house & studio rekayasa teknologi: Jasa Website Modern Next.js 15 (<0.8s), Sistem ERP Kustom Multi-Gudang & Finansial, serta Automasi AI & Machine Learning. 100% Hak Milik Source Code tanpa biaya sewa lisensi.",
  keywords: [
    "Abinest Software House",
    "Jasa Pembuatan Website Modern Next.js",
    "Sistem ERP Kustom Enterprise Indonesia",
    "Automasi AI Machine Learning",
    "Document AI Invoice OCR",
    "WhatsApp AI Agent Meta Cloud API",
    "Next.js 15 Enterprise Architecture",
    "PostgreSQL Multi-Warehouse ERP",
  ],
  authors: [{ name: "Abinest Startup Rekayasa Teknologi" }],
  creator: "Abinest Startup Rekayasa Teknologi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: APP_BASE_URL,
    siteName: "Abinest Startup Rekayasa Teknologi",
    title: "Abinest | Modern Web, Custom ERP, & AI/ML Automation Startup",
    description:
      "Teruji di 25+ Perusahaan Nasional. SLA 99.99% Uptime, Respons Engineer <15 Menit, dan 100% Kepemilikan Source Code Tanpa Biaya Lisensi Bulanan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abinest | Modern Web, Custom ERP, & AI/ML Automation Startup",
    description:
      "Website Berkecepatan Tinggi <0.8s, Sistem ERP Multi-Gudang Bebas Biaya Lisensi, dan Automasi AI WhatsApp Meta Cloud API.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
      {children}
    </div>
  );
}
