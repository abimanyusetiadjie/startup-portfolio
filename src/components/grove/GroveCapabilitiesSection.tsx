"use client";

import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveCapabilitiesSection() {
  const { lang } = useLanguage();

  const capabilities = [
    {
      title: lang === "id" ? "SIAKAD & Server CBT Anti-Down" : "High-Concurrency School SIAKAD",
      category: lang === "id" ? "INFRASTRUKTUR PENDIDIKAN" : "EDUCATION INFRASTRUCTURE",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      desc:
        lang === "id"
          ? "Dirancang khusus menangani ribuan siswa login ujian serentak tanpa server down, lengkap dengan generator rapor PDF cloud instan."
          : "Engineered to handle 1,000+ simultaneous student exams with zero 502 Bad Gateway crashes and bulk PDF report generation.",
      metric: lang === "id" ? "0% Server Crash Saat Ujian" : "0% Server Lag During Peak Exams",
    },
    {
      title: lang === "id" ? "Website Institusi Next.js 15" : "High-Speed Institutional Web",
      category: lang === "id" ? "WEB ARSITEKTUR" : "WEB ARCHITECTURE",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      desc:
        lang === "id"
          ? "Website sekolah, yayasan, dan korporat dengan kecepatan muat instan (< 1 detik), skor Google Lighthouse 100, dan SEO lokal prima."
          : "Bespoke corporate websites featuring sub-second LCP loading times, 100/100 Lighthouse scores, and robust technical SEO.",
      metric: lang === "id" ? "Skor Lighthouse 100 • 0.6s LCP" : "100/100 Lighthouse • 0.6s LCP",
    },
    {
      title: lang === "id" ? "ERP Stok & Kasir Multi-Cabang" : "Omnichannel ERP & Multi-Store POS",
      category: lang === "id" ? "OPERASIONAL RITEL" : "ENTERPRISE OPERATIONS",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      desc:
        lang === "id"
          ? "Sinkronisasi persediaan 5 gudang cabang secara real-time. Menghapus selisih stok dan menghemat biaya sewa bulanan software per-user."
          : "Centralized real-time inventory ledger syncing multi-branch retail stores and warehouses with zero stock drift.",
      metric: lang === "id" ? "0% Selisih Stok Antar Cabang" : "Zero Stock Drift Across Stores",
    },
    {
      title: lang === "id" ? "Bot WhatsApp Resmi Meta Cloud" : "Official Meta WhatsApp Billing Bot",
      category: lang === "id" ? "OTOMASI RESMI" : "OFFICIAL AUTOMATION",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      desc:
        lang === "id"
          ? "Pengiriman tagihan SPP otomatis, kuitansi bayar, dan pengumuman instan dengan jalur resmi Meta Cloud API tanpa risiko blokir."
          : "Dispatch automated tuition invoices, payment receipts, and emergency broadcasts via official Meta Cloud API with 0% ban risk.",
      metric: lang === "id" ? "Kirim Pesan < 1.8 Detik" : "< 1.8s Message Dispatch",
    },
  ];

  return (
    <section className="bg-[#07090F] text-white py-16 sm:py-24 font-sans border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase">
            {lang === "id" ? "KAPABILITAS & LINGKUP SISTEM" : "CORE CAPABILITIES"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2">
            {lang === "id"
              ? "Apa yang kami bangun dan bagaimana kami membantu Anda."
              : "What we do and how we can help you."}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed font-normal">
            {lang === "id"
              ? "Dari arsitektur server berbeban tinggi hingga antarmuka pengguna yang anggun, kami membangun sistem yang dirancang untuk beroperasi tanpa henti."
              : "From high-concurrency cloud clusters to elegant user interfaces, we deliver software engineered to operate flawlessly under peak pressure."}
          </p>
        </div>

        {/* 4 Photographic Environment Cards (Matches Reference Row Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#0D111A] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-mono text-amber-400 font-semibold uppercase tracking-wider">
                    {cap.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Outcome Pill */}
              <div className="p-5 pt-0">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-medium truncate">{cap.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Value Props Underneath */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-300">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">100% Full IP &amp; Code Ownership</span>
              <span className="text-zinc-400">Seluruh repositori Git &amp; lisensi menjadi milik Anda selamanya.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">99.98% Uptime SLA Guarantee</span>
              <span className="text-zinc-400">Garansi pemeliharaan dan telemetri server proaktif tanpa jeda.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">Live Client Portal Visibility</span>
              <span className="text-zinc-400">Pantau progres sprint mingguan secara transparan di portal privat.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
