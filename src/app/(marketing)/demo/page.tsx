import type { Metadata } from "next";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveInteractiveDemoHub } from "@/components/grove/GroveInteractiveDemoHub";
import { GroveAmberContactSection } from "@/components/grove/GroveAmberContactSection";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title: "Live Demo Interaktif ERP, SIAKAD CBT & Automasi AI WhatsApp | Abinest",
  description:
    "Coba langsung simulasi interaktif Sistem ERP Multi-Gudang, SIAKAD & Ujian CBT Anti-Down, serta Bot WhatsApp AI Resmi & Scan Faktur OCR milik Abinest.",
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
};

export default function InteractiveDemoPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <GroveNavbar />
      <main className="flex-1">
        <GroveInteractiveDemoHub />
        <GroveAmberContactSection />
      </main>
      <GroveFooterSection />
      <GroveFloatingWhatsApp />
    </div>
  );
}
