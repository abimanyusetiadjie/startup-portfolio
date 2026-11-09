import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BrainCircuit, ShieldCheck, ArrowLeft } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveAmberContactSection } from "@/components/grove/GroveAmberContactSection";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "Jasa Automasi AI & WhatsApp Agent Resmi Meta Cloud API | Abinest",
  description:
    "Jasa integrasi Document AI OCR ekstraksi invoice otomatis (akurasi 99.7%) dan chatbot agen AI WhatsApp resmi Meta Cloud API untuk memangkas jam kerja manual bisnis Anda.",
  keywords: [
    "jasa automasi ai indonesia",
    "document ai invoice ocr",
    "whatsapp agent resmi meta cloud api",
    "otomasi alur kerja invoice b2b",
    "machine learning applied startup",
  ],
  alternates: {
    canonical: "/jasa-automasi-whatsapp",
  },
};

export default function JasaAutomasiAiPage() {
  const benefits = [
    "Ekstraksi data faktur PDF supplier via Document AI OCR dengan akurasi 99.7% dalam 1,2 detik tanpa salah input manual.",
    "WhatsApp AI Agent resmi Meta Cloud API dengan centang hijau resmi yang anti-blokir dan mampu melayani ribuan pesan per menit.",
    "Infrastruktur model AI privat (Zero Data Retention) memastikan seluruh data finansial dan rahasia dagang bisnis Anda tidak pernah bocor.",
    "Menghemat hingga 40 jam kerja manual tim finance dan operasional setiap bulannya secara konsisten.",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <GroveNavbar />

      <main className="flex-1">
        <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-[1060px] mx-auto px-5 sm:px-8 space-y-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#1D4ED8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Halaman Utama Abinest</span>
            </Link>

            <div className="space-y-4 max-w-3xl">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E40AF] bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
                PILAR LAYANAN 03 · APPLIED AI &amp; META CLOUD AUTOMATION
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Jasa Automasi AI &amp; WhatsApp Agent Resmi Meta Cloud API
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Pangkas kerja repetitif manual bisnis Anda dengan kecerdasan buatan terapan. Mulai dari ekstraksi ribuan invoice supplier dalam sekejap, automasi approval pembayaran, hingga asisten AI WhatsApp pelanggan resmi 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4 flex-wrap">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all"
              >
                <span>Konsultasikan Automasi AI Anda</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500 font-medium">
                Resmi Meta Cloud API · Akurasi OCR 99.7%
              </span>
            </div>
          </div>
        </section>

        <GroveAmberContactSection />
      </main>

      <GroveFooterSection />
      <GroveFloatingWhatsApp />
    </div>
  );
}
