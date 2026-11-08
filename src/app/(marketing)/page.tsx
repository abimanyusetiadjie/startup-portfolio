import type { Metadata } from "next";
import { GroveApp } from "@/components/grove/GroveApp";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  title:
    "Abinest | Jasa Pembuatan Website, Sistem SIAKAD/ERP & Automasi WhatsApp (Jakarta & Surabaya)",
  description:
    "Software House & Konsultan IT untuk Sekolah, Yayasan, dan Bisnis. Website loading <0.8 detik, sistem SIAKAD/ERP anti-down (SLA 99.9%), & automasi WhatsApp resmi. 100% source code milik Anda tanpa biaya bulanan.",
  keywords: [
    "jasa pembuatan website sekolah jakarta",
    "jasa pembuatan sistem siakad anti down",
    "software house jakarta surabaya",
    "jasa pembuatan sistem informasi sekolah",
    "jasa automasi whatsapp bisnis",
    "jasa pembuatan website yayasan",
    "konsultan it sekolah dan umkm",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Abinest | Website Cepat, Sistem SIAKAD Anti-Down & Automasi Kerja yang Pasti Beres",
    description:
      "Dipercaya 20+ Sekolah, Yayasan, dan UMKM di Jakarta & Surabaya. SLA 99.9% Uptime, Respons Engineer <15 Menit, dan 100% Kepemilikan Source Code.",
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
      name: "Abinest Software House & Konsultan Teknologi",
      url: APP_BASE_URL,
      description:
        "Software House & Konsultan Teknologi spesialis Jasa Pembuatan Website, Sistem Informasi Sekolah (SIAKAD) & ERP Anti-Down, serta Automasi WhatsApp Resmi di Jakarta dan Surabaya.",
      areaServed: ["Jakarta", "Surabaya", "Indonesia"],
      knowsAbout: [
        "Jasa Pembuatan Website Sekolah dan Perusahaan",
        "Sistem Informasi Akademik (SIAKAD) Anti-Down",
        "Sistem ERP Ringan dan Dashboard Internal",
        "Automasi WhatsApp Resmi Meta Cloud API",
      ],
    },
  ],
};

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#0F172A] selection:bg-[#D97736] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <GroveApp />
    </main>
  );
}
