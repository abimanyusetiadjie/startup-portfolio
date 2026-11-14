import type { Metadata } from "next";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveProposalOutreachStudio } from "@/components/grove/GroveProposalOutreachStudio";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";

export const metadata: Metadata = {
  title: "Generator Proposal & RAB Resmi PDF + Kit Outreach WhatsApp | Abinest",
  description:
    "Buat dokumen Proposal dan Rincian Anggaran Biaya (RAB) resmi Abinest format A4 PDF secara instan dan gunakan template WhatsApp Outreach B2B siap kirim.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProposalGeneratorPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] print:bg-white text-[#0F172A] flex flex-col font-sans">
      <div className="print:hidden">
        <GroveNavbar />
      </div>
      <main className="flex-1">
        <GroveProposalOutreachStudio />
      </main>
      <div className="print:hidden">
        <GroveFooterSection />
      </div>
    </div>
  );
}
