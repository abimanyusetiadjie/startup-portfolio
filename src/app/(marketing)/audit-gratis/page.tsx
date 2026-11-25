import type { Metadata } from "next";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { GroveAuditCalculator } from "@/components/grove/GroveAuditCalculator";
import { SignificaFooter } from "@/components/significa/SignificaFooter";

export const metadata: Metadata = {
  title: "Audit Kebutuhan Sistem & Kalkulator Penghematan ERP/Web Gratis",
  description:
    "Hitung estimasi penghematan biaya lisensi software 3 tahun Anda dan dapatkan rekomendasi arsitektur Website, Custom ERP, SIAKAD, atau Automasi AI WhatsApp secara gratis.",
  keywords: [
    "kalkulator biaya pembuatan sistem erp",
    "audit website bisnis gratis",
    "perbandingan beli putus vs sewa software",
    "konsultasi sistem gudang dan sekolah",
  ],
  alternates: {
    canonical: "/audit-gratis",
  },
};

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <SignificaNavbar />
      <main className="flex-1 pt-[76px]">
        <GroveAuditCalculator />
      </main>
      <SignificaFooter />
    </div>
  );
}
