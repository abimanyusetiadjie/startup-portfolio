import type { Metadata } from "next";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveAuditCalculator } from "@/components/grove/GroveAuditCalculator";
import { GroveAmberContactSection } from "@/components/grove/GroveAmberContactSection";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title: "Audit Kebutuhan Sistem & Kalkulator Penghematan ERP/Web Gratis | Abinest",
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
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <GroveNavbar />
      <main className="flex-1">
        <GroveAuditCalculator />
        <GroveAmberContactSection />
      </main>
      <GroveFooterSection />
      <GroveFloatingWhatsApp />
    </div>
  );
}
