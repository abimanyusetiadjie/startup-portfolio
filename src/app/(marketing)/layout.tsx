import type { Metadata } from "next";
import type { ReactNode } from "react";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  title: {
    default: "Abinest | Jasa Website Cepat, Sistem ERP/SIAKAD/POS & Automasi AI/ML",
    template: "%s | Abinest",
  },
  description:
    "Software house Indonesia: jasa pembuatan website cepat (<0,8 detik), sistem ERP, SIAKAD sekolah, kasir POS kustom, serta automasi AI/ML & WhatsApp resmi. 100% hak milik kode program tanpa biaya lisensi per pengguna.",
  keywords: [
    "Abinest Digital Systems",
    "Software House Indonesia",
    "Jasa Pembuatan Website Cepat Next.js",
    "Sistem ERP SIAKAD POS Kustom Indonesia",
    "Automasi AI Machine Learning",
    "Document AI Invoice OCR",
    "WhatsApp AI Agent Meta Cloud API",
  ],
  authors: [{ name: "Abinest Digital Systems" }],
  creator: "Abinest Digital Systems",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: APP_BASE_URL,
    siteName: "Abinest Digital Systems",
    title: "Abinest | Jasa Website Cepat, Sistem ERP/SIAKAD/POS & Automasi AI/ML",
    description:
      "Kami membangun sistem yang bekerja untuk Anda: Website, ERP, SIAKAD, POS, hingga Automasi AI/ML. Dibangun cepat, aman, dengan hak milik kode 100%.",
    images: [
      {
        url: "/images/abinest-og-card.jpg",
        width: 1376,
        height: 768,
        alt: "Abinest Digital Systems — Software House Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abinest | Jasa Website Cepat, Sistem ERP/SIAKAD/POS & Automasi AI/ML",
    description:
      "Website cepat <0,8 detik, sistem ERP/SIAKAD/POS bebas biaya lisensi per pengguna, dan Automasi AI/ML WhatsApp resmi Meta.",
    images: ["/images/abinest-og-card.jpg"],
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
