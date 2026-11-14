import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveAmberContactSection } from "@/components/grove/GroveAmberContactSection";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title: "Jasa Automasi AI & WhatsApp Cloud API Resmi Meta | Abinest",
  description:
    "Integrasi pembacaan faktur otomatis melalui Document AI OCR (akurasi 99,7%) dan asisten pelanggan WhatsApp resmi Meta Cloud API 24 jam.",
  keywords: [
    "jasa automasi ai indonesia",
    "pembacaan faktur ocr otomatis",
    "whatsapp cloud api resmi meta",
    "asisten ai whatsapp bisnis",
  ],
  alternates: {
    canonical: "/jasa-automasi-whatsapp",
  },
};

export default function JasaAutomasiAiPage() {
  const benefits = [
    "Ekstraksi data faktur pemasok melalui teknologi OCR dengan akurasi 99,7% dalam hitungan detik.",
    "Integrasi WhatsApp Cloud API resmi dari Meta untuk melayani pertanyaan pelanggan 24 jam.",
    "Pengamanan privasi data dengan arsitektur terisolasi agar rahasia dagang perusahaan tetap terjaga.",
    "Menghemat hingga 40 jam kerja manual tim administrasi dan keuangan setiap minggu.",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <GroveNavbar />

      <main className="flex-1">
        <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>

            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Layanan 03 · Automasi AI &amp; WhatsApp Resmi Meta
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Automasi Pekerjaan Repetitif dan Asisten WhatsApp AI
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Kurangi kesalahan input manual dengan pembacaan faktur PDF otomatis serta layanan pelanggan WhatsApp yang merespons dalam hitungan detik sepanjang hari.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200/80"
                >
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <p className="text-sm text-slate-700 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <span>Konsultasikan Automasi AI Anda</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-sm text-slate-500">
                Meta Cloud API Resmi · Akurasi OCR 99,7%
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
