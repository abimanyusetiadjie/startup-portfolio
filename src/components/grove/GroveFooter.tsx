"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  MessageSquare,
  Mail,
  MapPin,
  Lock,
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
    <footer id="tentang" className="bg-[#080B11] text-white pt-16 pb-12 px-4 sm:px-8 lg:px-12 font-sans border-t border-dashed border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* 1. TOP LIVE SYSTEM STATUS BAR */}
        <div className="pb-10 mb-12 border-b border-dashed border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-semibold">
              {lang === "id"
                ? "SELURUH SISTEM OPERASIONAL • SLA UPTIME 99.98% • CLOUD MONITORING AKTIF"
                : "ALL SYSTEMS OPERATIONAL • 99.98% UPTIME SLA • 24/7 MONITORING"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link
              href="/portal"
              className="inline-flex items-center gap-1.5 text-teal-300 hover:text-teal-200 transition-colors"
            >
              <span>{lang === "id" ? "Buka Client Portal Live" : "Access Live Client Portal"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 2. MAIN 4-COLUMN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Column 1: Studio Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 border border-white rotate-45 shrink-0"
                aria-hidden="true"
              />
              <span className="font-heading font-bold text-3xl text-white tracking-tight">
                Abinest<span className="text-emerald-400">.</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-teal-300 font-semibold px-2 py-0.5 rounded-full bg-teal-950/70 border border-teal-500/30 ml-1">
                STUDIO
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-sm font-normal">
              {lang === "id"
                ? "Studio rekayasa perangkat lunak enterprise dan konsultan teknologi. Kami merekayasa infrastruktur web modern berkecepatan tinggi, sistem akademik (SIAKAD) & ERP decoupled anti-down, serta otomasi pesan WhatsApp terintegrasi."
                : "Enterprise software engineering studio & IT consulting firm. We engineer high-velocity web platforms, decoupled academic (SIAKAD) & ERP systems with zero downtime, and mission-critical WhatsApp automations."}
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-slate-300">
              <a
                href="mailto:halo@abinest.id"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-teal-300" />
                <span>halo@abinest.id</span>
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>WhatsApp: +62 812-3456-7890</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                <span>Jakarta Selatan · Surabaya Timur (ID)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Layanan & Solusi (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300 font-semibold block mb-4">
              {lang === "id" ? "LAYANAN & SISTEM" : "SERVICES & SYSTEMS"}
            </span>
            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
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
                  Omnichannel ERP &amp; Inventory Hub
                </a>
              </li>
              <li>
                <a
                  href="#systems"
                  onClick={(e) => handleSmoothScroll(e, "#systems")}
                  className="hover:text-white transition-colors block"
                >
                  WhatsApp Notification Gateway &amp; Bot
                </a>
              </li>
              <li>
                <a
                  href="#engineering"
                  onClick={(e) => handleSmoothScroll(e, "#engineering")}
                  className="hover:text-white transition-colors block"
                >
                  Audit Database PostgreSQL RLS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Standar Infrastruktur (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300 font-semibold block mb-4">
              {lang === "id" ? "STANDAR TEKNOLOGI" : "TECHNOLOGY STACK"}
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-400" />
                <span>Next.js 15 App Router &amp; Edge</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-400" />
                <span>Supabase PostgreSQL RLS Isolation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-400" />
                <span>QStash Distributed Queue Workers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-400" />
                <span>Meta WhatsApp Cloud API Official</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-400" />
                <span>Lighthouse 95–100 &amp; Sub-second LCP</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-400" />
                <span>Zero Vendor Lock-in (Full IP Handover)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Ecosystem & Access (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300 font-semibold block mb-4">
              {lang === "id" ? "AKSES KLIEN" : "CLIENT ACCESS"}
            </span>
            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
              <li>
                <Link
                  href="/portal"
                  className="text-teal-300 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Client Portal</span>
                  <ArrowUpRight className="h-3 w-3" />
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
                  href="/portal/automation"
                  className="hover:text-white transition-colors block"
                >
                  Worker Antrean Webhook
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-white transition-colors block"
                >
                  Masuk Portal Klien
                </Link>
              </li>
              <li>
                <a
                  href="#konsultasi"
                  onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                  className="text-white hover:text-teal-200 transition-colors font-semibold block"
                >
                  Konsultasi Gratis →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. GIANT ARCHITECTURAL MONOLITH WORDMARK */}
        <div
          className="overflow-hidden text-center select-none py-6 sm:py-8 my-4 border-y border-dashed border-white/10"
          aria-hidden="true"
        >
          <span className="font-heading font-black text-[14vw] uppercase leading-none tracking-tighter text-white/[0.05] inline-block">
            Abinest
          </span>
        </div>

        {/* 4. BOTTOM LEGAL & BACK TO TOP BAR */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/50 font-mono">
          <div>
            © {new Date().getFullYear()} Abinest Engineering Studio. {t.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <span>SLA 99.9% Anti-Down Guarantee</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-teal-300 hover:text-white transition-colors cursor-pointer group"
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
