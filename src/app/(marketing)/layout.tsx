import type { Metadata } from "next";
import type { ReactNode } from "react";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  title: {
    default: "Abinest | Studio Rekayasa Sistem Enterprise & Otomasi B2B",
    template: "%s | Abinest Engineering Studio",
  },
  description:
    "Infrastruktur perangkat lunak kelas enterprise: Website Next.js 100 Lighthouse, SIAKAD sekolah decoupled anti-down dengan paralel PDF worker, dan otomasi WhatsApp API.",
  keywords: [
    "Abinest Engineering Studio",
    "Sistem SIAKAD Sekolah Modern",
    "Parallel PDF Report Generator",
    "Otomasi Bisnis WhatsApp API",
    "Next.js Enterprise Development",
    "Omnichannel Order Stock Hub",
    "Supabase PostgreSQL RLS",
  ],
  authors: [{ name: "Abinest Engineering Studio" }],
  creator: "Abinest Engineering Studio",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: APP_BASE_URL,
    siteName: "Abinest Engineering Studio",
    title: "Infrastruktur Perangkat Lunak untuk Sistem yang Menolak Down.",
    description:
      "Arsitektur Web Next.js 100 Lighthouse, SIAKAD terpisah anti-down dengan mesin cetak ratusan PDF rapor otomatis, dan integrasi API/WhatsApp real-time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrastruktur Perangkat Lunak untuk Sistem yang Menolak Down.",
    description:
      "Spesialis Web Modern 100 Lighthouse, SIAKAD + Parallel PDF Engine, & Otomasi WhatsApp/API B2B.",
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
    <div className="min-h-screen bg-[#FFFFFF] text-[#09090B] selection:bg-[#0052FF]/15 selection:text-[#0052FF]">
      {children}
    </div>
  );
}
