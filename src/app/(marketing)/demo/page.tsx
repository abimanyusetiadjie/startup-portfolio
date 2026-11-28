import type { Metadata } from "next";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { GroveInteractiveDemoHub } from "@/components/grove/GroveInteractiveDemoHub";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_URL,
  buildBreadcrumbNode,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Live Demo Interaktif ERP, SIAKAD CBT & Automasi AI WhatsApp",
  description:
    "Coba langsung simulasi interaktif Sistem ERP Multi-Gudang, SIAKAD & Ujian CBT Anti-Down, serta Bot WhatsApp AI Resmi & Scan Faktur OCR milik Abinest tanpa perlu login.",
  keywords: [
    "demo sistem erp gudang",
    "demo aplikasi sekolah siakad cbt",
    "demo chatbot whatsapp ai",
    "simulasi software stok barang",
    "abinest live demo",
  ],
  alternates: {
    canonical: "/demo",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}/demo`,
    siteName: "Abinest",
    title: "Live Demo Interaktif ERP, SIAKAD & WhatsApp AI | Abinest",
    description:
      "Simulasi interaktif langsung di browser untuk sistem ERP gudang, SIAKAD/CBT, dan asisten WhatsApp AI + OCR faktur.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbNode([
      { name: "Beranda", path: "/" },
      { name: "Demo Interaktif", path: "/demo" },
    ]),
    {
      "@type": "WebApplication",
      name: "Abinest Live Interactive System Demo",
      url: `${SITE_URL}/demo`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
      provider: { "@id": ORGANIZATION_ID },
    },
  ],
};

export default function InteractiveDemoPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SignificaNavbar />
      <main className="flex-1 pt-[76px]">
        <GroveInteractiveDemoHub />
      </main>
      <SignificaFooter />
    </div>
  );
}
