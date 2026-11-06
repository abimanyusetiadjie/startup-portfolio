"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveFooter() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 px-4 sm:px-8 lg:px-12 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* 1. TOP LIVE SYSTEM STATUS BAR */}
        <div className="pb-8 mb-10 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide">
              {lang === "id"
                ? "Seluruh Sistem Operasional Normal • SLA Uptime 99.98% • Monitoring 24/7"
                : "All Systems Operational • 99.98% SLA Uptime • 24/7 Monitoring"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/portal"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-teal-300 hover:text-white transition-colors border border-slate-700"
            >
              <span>{lang === "id" ? "Buka Client Portal Live" : "Access Live Client Portal"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 2. MAIN 4-COLUMN INSTITUTIONAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Column 1: Studio Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 border-2 border-teal-400 rotate-45 shrink-0"
                aria-hidden="true"
              />
              <span className="font-serif italic font-normal text-3xl text-white tracking-normal">
                abinest
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300 font-bold px-2 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/40 ml-1">
                STUDIO
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              {lang === "id"
                ? "Software house dan konsultan teknologi terpercaya. Kami melayani pembuatan website modern berkecepatan tinggi, sistem informasi akademik (SIAKAD Sekolah) & ERP anti-down, serta otomasi WhatsApp terpadu."
                : "Enterprise software house & technology consulting firm. We craft resilient high-velocity web platforms, decoupled academic & ERP systems, and integrated WhatsApp automations."}
            </p>

            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Abinest,%20saya%20ingin%20konsultasi%20pembuatan%20website/sistem"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span>WhatsApp: 0812-3456-7890 (Respon Cepat)</span>
              </a>
              <a
                href="mailto:halo@abinest.id"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-teal-300 shrink-0" />
                <span>Email: halo@abinest.id</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
                <span>Kantor Studio: Jakarta Selatan &amp; Surabaya Timur</span>
              </div>
            </div>
          </div>

          {/* Column 2: Layanan & Solusi (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-4">
              {lang === "id" ? "LAYANAN & SISTEM" : "SERVICES & SYSTEMS"}
            </span>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#systems"
                  onClick={(e) => handleSmoothScroll(e, "#systems")}
                  className="hover:text-white transition-colors block"
                >
                  Jasa Pembuatan Website (Next.js 15)
                </a>
              </li>
              <li>
                <a
                  href="#systems"
                  onClick={(e) => handleSmoothScroll(e, "#systems")}
                  className="hover:text-white transition-colors block"
                >
                  SIAKAD Sekolah &amp; Kampus Anti-Down
                </a>
              </li>
              <li>
                <a
                  href="#systems"
                  onClick={(e) => handleSmoothScroll(e, "#systems")}
                  className="hover:text-white transition-colors block"
                >
                  Mesin Cetak Rapor PDF Cloud Otomatis
                </a>
              </li>
              <li>
                <a
                  href="#systems"
                  onClick={(e) => handleSmoothScroll(e, "#systems")}
                  className="hover:text-white transition-colors block"
                >
                  Omnichannel ERP &amp; Manajemen Bisnis
                </a>
              </li>
              <li>
                <a
                  href="#systems"
                  onClick={(e) => handleSmoothScroll(e, "#systems")}
                  className="hover:text-white transition-colors block"
                >
                  Bot Otomasi WhatsApp &amp; Notifikasi SPP
                </a>
              </li>
              <li>
                <a
                  href="#engineering"
                  onClick={(e) => handleSmoothScroll(e, "#engineering")}
                  className="hover:text-white transition-colors block"
                >
                  Audit Keamanan Data PostgreSQL RLS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Standar Kualitas (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-4">
              {lang === "id" ? "JAMINAN KUALITAS" : "QUALITY STANDARDS"}
            </span>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>SLA Uptime 99.9% (Anti-Crash)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Training Guru &amp; Staf sampai Lancar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Hak Milik Kode &amp; Database</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Kecepatan Tinggi (Lighthouse 95–100)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Dukungan Tim Teknisi Responsif</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Ecosystem & Access (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-4">
              {lang === "id" ? "AKSES KLIEN" : "CLIENT ACCESS"}
            </span>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/portal"
                  className="text-teal-300 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Client Portal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/portal/invoices"
                  className="hover:text-white transition-colors block"
                >
                  Monitoring Invoice &amp; SLA
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-white transition-colors block"
                >
                  Masuk Akun Klien
                </Link>
              </li>
              <li>
                <a
                  href="#konsultasi"
                  onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                  className="text-white hover:text-teal-200 transition-colors font-bold block pt-2"
                >
                  Konsultasi Gratis →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM LEGAL & BACK TO TOP BAR */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Abinest Engineering Studio. Seluruh hak cipta dilindungi undang-undang.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-300 font-medium">Garansi Resmi 100% • Zero Vendor Lock-in</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-teal-300 hover:text-white transition-colors cursor-pointer group font-semibold"
              aria-label="Kembali ke bagian paling atas halaman"
            >
              <span>{lang === "id" ? "Kembali ke Atas" : "Back to Top"}</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
