import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Clock, ArrowLeft, Zap } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveAmberContactSection } from "@/components/grove/GroveAmberContactSection";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "Jasa Pembuatan Website Modern Next.js 15 (<0.8s) Jakarta & Surabaya | Abinest",
  description:
    "Jasa pembuatan website modern Next.js 15 berkecepatan tinggi (<0.8s), skor Google Lighthouse 100/100, SEO organik peringkat #1, dan arsitektur headless untuk korporat, startup, dan bisnis modern. 100% hak milik source code.",
  keywords: [
    "jasa pembuatan website jakarta",
    "jasa pembuatan website surabaya",
    "jasa website next.js 15 modern",
    "jasa pembuatan website company profile",
    "headless web development indonesia",
  ],
  alternates: {
    canonical: "/jasa-pembuatan-website-jakarta",
  },
};

export default function JasaWebsitePage() {
  const benefits = [
    "Halaman terbuka kilat di bawah 0,8 detik di jaringan HP calon klien dan investor (Core Web Vitals hijau sempurna).",
    "Arsitektur Next.js 15 Server Components dengan optimasi SEO terpadu untuk mendongkrak peringkat halaman #1 Google.",
    "Desain editorial modern dengan rasio 80% visual / 20% teks yang meningkatkan lead conversion rate hingga +180%.",
    "100% kepemilikan source code dan repositori Git diserahkan penuh tanpa biaya sewa lisensi bulanan selamanya.",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <GroveNavbar />

      <main className="flex-1">
        <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-300/80">
          <div className="max-w-[1060px] mx-auto px-5 sm:px-8 space-y-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:text-[#1D4ED8] hover:border-blue-300 transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Halaman Utama Abinest</span>
            </Link>

            <div className="space-y-4 max-w-3xl">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-[#1E40AF] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                PILAR LAYANAN 01 · MODERN WEB ARCHITECTURE
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Jasa Pembuatan Website Modern Next.js 15 Berkecepatan Tinggi (&lt;0.8s)
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Kami merancang dan membangun website resmi berkinerja tinggi untuk perusahaan nasional, fintech, dan startup modern di Jakarta serta Surabaya. Menggunakan teknologi Next.js 15 App Router dan Edge CDN agar halaman instan dibuka dan konversi bisnis melesat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-300 shadow-2xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-sm transition-all"
              >
                <span>Konsultasikan Website Anda</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-600 font-semibold">
                Selesai dalam 2–3 minggu · Garansi SLA 99.99%
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
