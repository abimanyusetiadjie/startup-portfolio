import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, ShieldCheck, ArrowLeft } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveAmberContactSection } from "@/components/grove/GroveAmberContactSection";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "Jasa Pembuatan Sistem ERP Enterprise & Multi-Warehouse Kustom | Abinest",
  description:
    "Jasa pembuatan Sistem ERP Kustom terpadu: Multi-Gudang, Manajemen Inventori, Rekonsiliasi Finansial, dan Supply Chain dengan SLA 99.99% Uptime. 100% Hak Milik Source Code tanpa biaya sewa lisensi per user selamanya.",
  keywords: [
    "jasa pembuatan sistem erp indonesia",
    "custom erp enterprise software",
    "sistem multi gudang inventori",
    "jasa custom software supply chain",
    "erp bebas biaya lisensi user",
  ],
  alternates: {
    canonical: "/jasa-pembuatan-sistem-erp",
  },
};

export default function JasaSistemErpPage() {
  const benefits = [
    "Jaminan SLA 99.99% Uptime: Sistem tetap kokoh stabil saat ribuan staf gudang, kasir POS, dan tim finance bertransaksi serentak.",
    "Sinkronisasi multi-gudang dan cabang secara real-time dengan latensi <35ms berbasis arsitektur PostgreSQL pooling.",
    "Hak akses ketat berbasis peran (Role-Based Access Control) untuk Direksi, Kepala Gudang, Staf Finance, dan Audit.",
    "100% kepemilikan source code diserahkan penuh ke perusahaan Anda tanpa biaya sewa lisensi bulanan per user selamanya.",
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
                PILAR LAYANAN 02 · ENTERPRISE ERP &amp; SUPPLY CHAIN
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Jasa Pembuatan Sistem ERP Kustom &amp; Operasional Multi-Gudang Anti-Down
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Kendalikan seluruh rantai pasok bisnis Anda dari satu dashboard terpadu. Kami membangun sistem ERP kustom yang disesuaikan 100% dengan alur kerja riil perusahaan Anda tanpa biaya sewa software impor yang mahal.
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
                <span>Konsultasikan Sistem ERP Anda</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500 font-medium">
                100% Hak Milik Source Code · SLA 99.99% Uptime
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
