"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Zap,
  Users,
  FileText,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHeroSection() {
  const { lang, t } = useLanguage();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFC] to-white pt-28 sm:pt-36 pb-16 font-sans border-b border-slate-200 overflow-hidden">
      {/* Subtle Background Blueprint Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* TOP BADGE */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold tracking-wide mb-6 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>
            {lang === "id"
              ? "JASA PEMBUATAN WEBSITE & SISTEM INFORMASI RESMI • SLA 99.9%"
              : "ENTERPRISE WEB & INSTITUTIONAL SYSTEMS STUDIO • 99.9% SLA"}
          </span>
        </div>

        {/* 2-COLUMN BRIGHT INSTITUTIONAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clear, High-Contrast Typography & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-[3.5rem] text-[#0F172A] tracking-tight leading-[1.12]">
              {lang === "id" ? (
                <>
                  Website Modern &amp; Sistem Informasi{" "}
                  <span className="text-[#0F766E] underline decoration-teal-300 decoration-wavy decoration-2">
                    Anti-Down
                  </span>{" "}
                  untuk Sekolah &amp; Bisnis Anda.
                </>
              ) : (
                <>
                  Lightning-Fast Web &amp; Decoupled Systems{" "}
                  <span className="text-[#0F766E]">Engineered to Last.</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {lang === "id"
                ? "Abinest membantu yayasan pendidikan, sekolah, dan perusahaan membangun sistem informasi akademik (SIAKAD), website modern berkecepatan tinggi, dan bot otomasi WhatsApp. Dirancang stabil saat ribuan siswa mengakses serentak, mudah digunakan oleh guru & staf, serta didampingi tim teknis berpengalaman."
                : "Abinest empowers educational foundations, schools, and growing enterprises with crash-proof academic information systems (SIAKAD), high-velocity modern websites, and WhatsApp automations with 99.9% SLA uptime."}
            </p>

            {/* Direct High-Affordance Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* WhatsApp Button (Green & Familiar for Indonesian Clients) */}
              <a
                href="https://wa.me/6281234567890?text=Halo%20Abinest,%20saya%20tertarik%20konsultasi%20pembuatan%20website/sistem"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm sm:text-base font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] group"
              >
                <MessageSquare className="h-5 w-5 text-white" />
                <span>
                  {lang === "id" ? "Konsultasi Cepat via WhatsApp" : "Chat on WhatsApp"}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* View Systems Catalog Button */}
              <a
                href="#systems"
                onClick={(e) => handleSmoothScroll(e, "#systems")}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm sm:text-base shadow-xs transition-all hover:border-[#0F766E]"
              >
                <span>{lang === "id" ? "Lihat Katalog Sistem ↓" : "View Systems Catalog ↓"}</span>
              </a>
            </div>

            {/* Reassurance Checkmarks Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>SLA Uptime 99.9%</strong> (Anti-Down saat Ujian)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>Training Lengkap</strong> Guru &amp; Staf Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>100% Hak Milik Kode</strong> &amp; Data Aman</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>Buka Seketika</strong> di Ponsel &amp; Laptop</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual System Telemetry & Trust Showcase */}
          <div className="lg:col-span-5 space-y-4">
            {/* Live System Simulation Card (Bright Porcelain & Teal) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-5 sm:p-6 space-y-4">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-[#0F766E] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                    A
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 leading-none">
                      SIAKAD &amp; ERP Live Engine
                    </span>
                    <span className="text-[10px] text-teal-700 font-semibold font-mono">
                      Yayasan Pendidikan Mandiri
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SERVER STABIL</span>
                </span>
              </div>

              {/* 3 Live Telemetry Cards */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-teal-100 text-[#0F766E] flex items-center justify-center shrink-0">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Ujian Siswa Serentak
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        1.200 Siswa Login Aktif
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    0% Crash
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <FileText className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Mesin Cetak Rapor PDF
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        520 Rapor Siswa Selesai
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    &lt; 38 Detik
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MessageSquare className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Otomasi WhatsApp SPP
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        450 Slip Tagihan Terkirim
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    &lt; 2 Detik
                  </span>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-teal-800 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-[#0F766E]" />
                  <span>Keamanan Database RLS Terisolasi</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400">Response: 14ms</span>
              </div>
            </div>

            {/* Quick Consultation Callout Box */}
            <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 flex items-center justify-between gap-3 text-xs">
              <span className="text-teal-900 font-medium leading-relaxed">
                Butuh saran untuk kebutuhan sistem sekolah atau kantor Anda?
              </span>
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="px-3.5 py-1.5 rounded-lg bg-[#0F766E] text-white font-bold hover:bg-[#115E59] transition-colors shrink-0"
              >
                Tanya Konsultan →
              </a>
            </div>
          </div>
        </div>

        {/* FACTS & SLA LEDGER STRIP (Bright, Crisp & Legible) */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              KECEPATAN WEBSITE
            </span>
            <span className="text-base sm:text-lg font-bold text-[#0F172A] mt-1 block">
              Skor 95–100 Lighthouse
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Buka cepat tanpa menunggu
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              JAMINAN SISTEM STABIL
            </span>
            <span className="text-base sm:text-lg font-bold text-[#0F766E] mt-1 block">
              SLA 99.9% Uptime
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Anti-server down saat ujian
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              OTOMASI WHATSAPP
            </span>
            <span className="text-base sm:text-lg font-bold text-[#0F172A] mt-1 block">
              Kirim Instan &lt; 2s
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Tagihan SPP &amp; pengumuman
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              LOKASI KONSULTAN
            </span>
            <span className="text-base sm:text-lg font-bold text-[#0F172A] mt-1 block">
              Jakarta &amp; Surabaya
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">
              Siap konsultasi on-site &amp; daring
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
