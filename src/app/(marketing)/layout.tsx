import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abinest | Jasa Website Modern, Aplikasi Bisnis ERP/POS/SIAKAD & Automasi WA",
    template: "%s | Abinest",
  },
  description:
    "Studio produk digital & software house Indonesia (abinest.id): jasa pembuatan website bisnis cepat, aplikasi ERP, WMS gudang, SIAKAD, kasir POS kustom, dan automasi WhatsApp resmi. 100% hak milik kode tanpa iuran per user.",
  keywords: [
    "Abinest",
    "Abinest Digital Systems",
    "abinest.id",
    "Software House Indonesia",
    "Jasa Pembuatan Website Bisnis Cepat",
    "Jasa Pembuatan Sistem ERP Custom Indonesia",
    "Aplikasi Kasir POS & SIAKAD Beli Putus",
    "Jasa Automasi WhatsApp Resmi Meta",
    "OCR Pembaca Faktur Otomatis",
  ],
  authors: [{ name: "Abimanyu Setiadjie", url: `${SITE_URL}/tentang` }],
  creator: "Abinest Digital Systems",
  publisher: "Abinest Digital Systems",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Abinest",
    title: "Abinest | Jasa Website Modern, Aplikasi Bisnis ERP/POS/SIAKAD & Automasi WA",
    description:
      "Desain yang clean, sistem yang reliable, dan workflow yang otomatis—website bisnis, ERP/POS/SIAKAD kustom, hingga automasi WhatsApp resmi dengan 100% hak milik kode.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abinest | Jasa Website Modern, Aplikasi Bisnis & Automasi WhatsApp",
    description:
      "Website bisnis cepat, ERP/WMS/POS/SIAKAD kustom tanpa biaya per user, dan automasi WhatsApp resmi Meta — abinest.id.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
      {children}
    </div>
  );
}
