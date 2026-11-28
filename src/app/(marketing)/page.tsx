import type { Metadata } from "next";
import { SignificaApp } from "@/components/significa/SignificaApp";
import { FAQ_ITEMS } from "@/components/grove/faq-data";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  buildHomeJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Abinest | Jasa Website Modern, Aplikasi Bisnis ERP/POS/SIAKAD & Automasi WhatsApp",
  },
  description:
    "Studio produk digital & software house Indonesia (abinest.id): jasa pembuatan website bisnis cepat mulai Rp1,5 juta, sistem ERP/WMS/POS/SIAKAD kustom tanpa biaya per user, dan automasi WhatsApp resmi Meta dengan 100% hak milik kode.",
  keywords: [
    "abinest",
    "abinest.id",
    "jasa pembuatan website bisnis",
    "software house indonesia",
    "jasa pembuatan sistem erp custom",
    "aplikasi kasir pos beli putus",
    "aplikasi siakad sekolah indonesia",
    "jasa automasi whatsapp resmi meta",
    "jasa ocr faktur otomatis",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Abinest",
    title:
      "Abinest | Jasa Website Modern, Aplikasi Bisnis ERP/POS/SIAKAD & Automasi WhatsApp",
    description:
      "Website modern, aplikasi bisnis ERP/POS/SIAKAD kustom tanpa iuran per staf, dan automasi WhatsApp resmi — 100% hak milik kode di abinest.id.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abinest | Jasa Website Modern, Aplikasi Bisnis & Automasi WhatsApp",
    description:
      "Desain clean, sistem reliable, dan 100% hak milik kode tanpa sewa per user — abinest.id.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const jsonLdSchema = buildHomeJsonLd(FAQ_ITEMS);

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <SignificaApp />
    </div>
  );
}
