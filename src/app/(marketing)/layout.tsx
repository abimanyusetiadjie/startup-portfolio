import type { Metadata } from "next";
import type { ReactNode } from "react";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://studio-rekayasa.triloe.id";

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  title: {
    default:
      "Software Engineering & Automation Studio | Sistem SIAKAD, ERP & Otomasi B2B",
    template: "%s | Software Engineering & Automation Studio",
  },
  description:
    "Studio rekayasa perangkat lunak B2B kelas enterprise. Spesialis Website Next.js 95–100 Lighthouse, Sistem SIAKAD Sekolah Modern dengan Parallel PDF Report Engine, dan Otomasi WhatsApp/API Real-Time.",
  keywords: [
    "Software Engineering Studio Indonesia",
    "Sistem SIAKAD Sekolah Modern",
    "Parallel PDF Report Generator",
    "Otomasi Bisnis WhatsApp API",
    "Next.js Enterprise Development",
    "Omnichannel Order Stock Hub",
    "Supabase PostgreSQL RLS",
  ],
  authors: [{ name: "Software Engineering & Automation Studio" }],
  creator: "Software Engineering & Automation Studio",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: APP_BASE_URL,
    siteName: "Software Engineering & Automation Studio",
    title:
      "Rekayasa Sistem Skala Enterprise & Otomasi Bisnis Berkecepatan Tinggi",
    description:
      "Arsitektur Web Next.js 95–100 Lighthouse, SIAKAD terpisah anti-down dengan mesin cetak ratusan PDF rapor paralel otomatis, dan integrasi API/WhatsApp real-time.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rekayasa Sistem Skala Enterprise & Otomasi Bisnis Berkecepatan Tinggi",
    description:
      "Spesialis Web Modern 95–100 Lighthouse, SIAKAD + Parallel PDF Engine, & Otomasi WhatsApp/API B2B.",
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
    <div className="min-h-screen bg-[#F8FAFC] text-[#09090B] selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
      {children}
    </div>
  );
}
