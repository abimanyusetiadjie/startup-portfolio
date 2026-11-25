import type { Metadata } from "next";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { GroveProposalOutreachStudio } from "@/components/grove/GroveProposalOutreachStudio";
import { SignificaFooter } from "@/components/significa/SignificaFooter";

export const metadata: Metadata = {
  title: "Generator Proposal & RAB Resmi PDF + Kit Outreach WhatsApp",
  description:
    "Buat dokumen Proposal dan Rincian Anggaran Biaya (RAB) resmi Abinest format A4 PDF secara instan dan gunakan template WhatsApp Outreach B2B siap kirim.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProposalGeneratorPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] print:bg-white text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <div className="print:hidden">
        <SignificaNavbar />
      </div>
      <main className="flex-1 pt-[76px] print:pt-0">
        <GroveProposalOutreachStudio />
      </main>
      <div className="print:hidden">
        <SignificaFooter />
      </div>
    </div>
  );
}
