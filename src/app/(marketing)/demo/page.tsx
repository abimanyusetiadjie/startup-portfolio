import type { Metadata } from "next";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { GroveInteractiveDemoHub } from "@/components/grove/GroveInteractiveDemoHub";
import { SignificaFooter } from "@/components/significa/SignificaFooter";

export const metadata: Metadata = {
  title: "Live Demo Interaktif ERP, SIAKAD CBT & Automasi AI WhatsApp",
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
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <SignificaNavbar />
      <main className="flex-1 pt-[76px]">
        <GroveInteractiveDemoHub />
      </main>
      <SignificaFooter />
    </div>
  );
}
