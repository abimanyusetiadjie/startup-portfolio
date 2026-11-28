import type { Metadata } from "next";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { GroveAuditCalculator } from "@/components/grove/GroveAuditCalculator";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_URL,
  buildBreadcrumbNode,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kalkulator Biaya Website & Penghematan ERP Beli Putus Gratis",
  description:
    "Hitung estimasi penghematan biaya lisensi software 3 tahun Anda dan dapatkan rekomendasi arsitektur Website, Custom ERP, SIAKAD, atau Automasi AI WhatsApp secara gratis di abinest.id.",
  keywords: [
    "kalkulator biaya pembuatan sistem erp",
    "audit website bisnis gratis",
    "perbandingan beli putus vs sewa software",
    "estimasi biaya buat website bisnis",
  ],
  alternates: {
    canonical: "/audit-gratis",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}/audit-gratis`,
    siteName: "Abinest",
    title: "Kalkulator Biaya Website & Penghematan ERP 3 Tahun | Abinest",
    description:
      "Simulasi transparan perbandingan biaya sewa SaaS bulanan vs sistem kustom Beli Putus 100% hak milik kode.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbNode([
      { name: "Beranda", path: "/" },
      { name: "Kalkulator Biaya & Audit Gratis", path: "/audit-gratis" },
    ]),
    {
      "@type": "WebApplication",
      name: "Kalkulator Estimasi Biaya & Penghematan 3 Tahun Abinest",
      url: `${SITE_URL}/audit-gratis`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
      provider: { "@id": ORGANIZATION_ID },
    },
  ],
};

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SignificaNavbar />
      <main className="flex-1 pt-[76px]">
        <GroveAuditCalculator />
      </main>
      <SignificaFooter />
    </div>
  );
}
