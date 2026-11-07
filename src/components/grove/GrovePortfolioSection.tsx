"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectItem {
  id: string;
  image: string;
  category: string;
  year: string;
  title: string;
  client: string;
  desc: string;
  impactMetrics: string[];
  techTags: string[];
  startingPrice: string;
  priceNote: string;
  ctaText: string;
  ctaHref: string;
  isRoute?: boolean;
}

export function GrovePortfolioSection() {
  const { lang } = useLanguage();

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

  const projects: ProjectItem[] = [
    {
      id: "siakad",
      image: "/images/projects/siakad-dashboard.svg",
      category: lang === "id" ? "Sistem Pendidikan" : "Education Software",
      year: "2025–2026",
      client: "SMA Unggulan Al-Hikmah & Yayasan Bina Insan",
      title:
        lang === "id"
          ? "SIAKAD & Ujian CBT Serentak 1.200 Siswa"
          : "Concurrent CBT Exam & School SIS Engine",
      desc:
        lang === "id"
          ? "Dirancang untuk mengatasi kendala server down saat ujian akhir semester. Menangani 1.240 siswa aktif serentak dengan waktu respon 42ms dan cetak 500+ rapor PDF cloud selesai dalam 38 detik."
          : "Engineered to eliminate 502 server crashes during peak semester exams. Handles 1,240 concurrent exam sessions with 42ms response latency and bulk cloud PDF report generation in 38s.",
      impactMetrics: [
        lang === "id" ? "0% Server Down saat Ujian Serentak" : "0% Downtime during concurrent exams",
        lang === "id" ? "540 Rapor PDF Selesai dalam 38 Detik" : "540 PDF Report Cards in 38s",
      ],
      techTags: ["Next.js 15", "PostgreSQL RLS", "Cloud Workers"],
      startingPrice: lang === "id" ? "Mulai Rp 15 Juta" : "From $950",
      priceNote: lang === "id" ? "Beli Putus • 100% Source Code" : "One-Time • 100% IP",
      ctaText: lang === "id" ? "Konsultasi Sistem SIAKAD" : "Consult SIAKAD",
      ctaHref: "#kontak",
    },
    {
      id: "website",
      image: "/images/projects/corporate-web.svg",
      category: lang === "id" ? "Web Arsitektur" : "Corporate Web",
      year: "2025",
      client: "Yayasan Pendidikan Bina Insan",
      title:
        lang === "id"
          ? "Website Institusi & Profil Yayasan Berkecepatan Tinggi"
          : "Ultra-Fast Institutional & Foundation Web",
      desc:
        lang === "id"
          ? "Desain tipografi editorial modern dengan kecepatan muat instan (0.6 detik). Dilengkapi formulir PPDB online terenkripsi, pembayaran digital, dan skor Google Lighthouse 100/100."
          : "Editorial corporate website with instant 0.6s LCP loading speed, encrypted online admission forms, digital payment flows, and perfect 100/100 Google Lighthouse scores.",
      impactMetrics: [
        lang === "id" ? "Skor Performa Google Lighthouse 100" : "100/100 Google Lighthouse Score",
        lang === "id" ? "Waktu Muat Halaman 0.6 Detik (LCP)" : "0.6s Largest Contentful Paint",
      ],
      techTags: ["Next.js 15 Edge", "SEO Schema Ready", "WebP/AVIF"],
      startingPrice: lang === "id" ? "Mulai Rp 4,5 Juta" : "From $300",
      priceNote: lang === "id" ? "Termasuk Domain & Setup Cloud" : "Includes Domain & Cloud",
      ctaText: lang === "id" ? "Konsultasi Website" : "Consult Website",
      ctaHref: "#kontak",
    },
    {
      id: "erp",
      image: "/images/projects/omnichannel-hub.svg",
      category: lang === "id" ? "Operasional B2B" : "Enterprise Operations",
      year: "2024–2025",
      client: "Mitra Retail Nusantara & Global Logistics",
      title:
        lang === "id"
          ? "ERP Inventori Multi-Gudang & Kasir POS Cabang"
          : "Multi-Store Omnichannel Inventory & POS ERP",
      desc:
        lang === "id"
          ? "Pusat database tunggal untuk sinkronisasi inventori 5 gudang cabang secara real-time. Menghapus 100% selisih stok fisik dan menghemat biaya langganan bulanan software per-user."
          : "Centralized real-time inventory ledger syncing 5 branch retail stores and main warehouses. Eliminates stock drift and saves recurring SaaS per-seat costs.",
      impactMetrics: [
        lang === "id" ? "0% Selisih Stok Antar 5 Cabang" : "Zero inventory drift across branches",
        lang === "id" ? "Hemat Rp 36 Jt/Tahun Biaya Sewa SaaS" : "Saved $2,400/yr in recurring SaaS fees",
      ],
      techTags: ["PostgreSQL RLS", "Multi-Store POS", "Automated Ledger"],
      startingPrice: lang === "id" ? "Mulai Rp 12 Juta" : "From $800",
      priceNote: lang === "id" ? "Beli Putus • Tanpa Biaya Per-User" : "Full Ownership • Zero SaaS Rent",
      ctaText: lang === "id" ? "Konsultasi Sistem ERP" : "Consult ERP",
      ctaHref: "#kontak",
    },
    {
      id: "whatsapp",
      image: "/images/projects/whatsapp-gateway.svg",
      category: lang === "id" ? "Otomasi & Integrasi" : "Automation API",
      year: "2025",
      client: "Sekolah & Enterprise Partners",
      title:
        lang === "id"
          ? "Otomasi Tagihan & Notifikasi WhatsApp Meta Resmi"
          : "Official Meta Cloud WhatsApp Billing Engine",
      desc:
        lang === "id"
          ? "Jalur broadcast resmi Meta Cloud API untuk pengiriman tagihan SPP, kuitansi PDF, dan pengumuman instan. Resiko pemblokiran 0% karena terhubung langsung ke server resmi WhatsApp."
          : "Official Meta Cloud API gateway dispatching automated tuition payment reminders, PDF receipts, and emergency broadcasts with 0% risk of account suspension.",
      impactMetrics: [
        lang === "id" ? "Pengiriman Pesan < 1.8 Detik" : "< 1.8s Message Dispatch Latency",
        lang === "id" ? "Tunggakan SPP Terpangkas 42%" : "42% Reduction in Payment Delinquency",
      ],
      techTags: ["Meta Cloud API", "QStash Queue", "Anti-Banned"],
      startingPrice: lang === "id" ? "Mulai Rp 3,5 Juta" : "From $250",
      priceNote: lang === "id" ? "Jalur Resmi Meta Cloud API" : "Official Meta Cloud Pipeline",
      ctaText: lang === "id" ? "Konsultasi Otomasi WA" : "Consult WhatsApp",
      ctaHref: "#kontak",
    },
  ];

  return (
    <section
      id="portofolio"
      className="bg-[#FFFFFF] text-slate-900 py-16 sm:py-24 font-sans border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header (Human-Crafted, No AI Slop) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#0F766E] uppercase">
            {lang === "id" ? "KARYA PILIHAN & PORTOFOLIO" : "SELECTED WORKS & PORTFOLIO"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] mt-2">
            {lang === "id"
              ? "Sistem nyata yang telah beroperasi di lapangan."
              : "Production software operating at scale."}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            {lang === "id"
              ? "Kami tidak menjual template siap pakai. Seluruh proyek di bawah ini dibangun khusus sesuai alur operasional klien, diserahkan 100% kepemilikan kode sumbernya, dan dilindungi garansi SLA Uptime 99.9%."
              : "We build bespoke production systems tailored to each client's unique workflows, delivered with full source code ownership and SLA performance warranties."}
          </p>
        </div>

        {/* 2-Column Large Visual Portfolio Grid (70% Visual, 30% Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:border-slate-300 transition-all duration-300"
            >
              <div>
                {/* LARGE VISUAL IMAGE VIEWPORT (Crisp, High-Detail UI) */}
                <div className="relative aspect-[16/10] w-full bg-[#0B0F19] overflow-hidden border-b border-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0F172A]/90 text-white text-[11px] font-mono font-medium backdrop-blur-md border border-white/10">
                      {project.category} • {project.year}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  <div className="text-xs font-mono text-slate-500 mb-1.5">
                    {project.client}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug group-hover:text-[#0F766E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Measurable Results */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    {project.impactMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech tags + Transparent Starting Price + CTA */}
              <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 mt-4">
                <div>
                  <span className="block text-sm font-bold text-[#0F172A] font-mono">
                    {project.startingPrice}
                  </span>
                  <span className="block text-[11px] font-mono text-slate-500">
                    {project.priceNote}
                  </span>
                </div>

                <a
                  href={project.ctaHref}
                  onClick={(e) => handleSmoothScroll(e, project.ctaHref)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-[#0F766E] text-xs font-semibold transition-colors"
                >
                  <span>{project.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* FEATURED WIDE PROJECT: ABINEST ENTERPRISE CLIENT PORTAL */}
        <div className="mt-10 sm:mt-12 rounded-2xl sm:rounded-3xl border border-slate-200 bg-[#0F172A] text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 p-6 sm:p-10">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
              {lang === "id" ? "STANDAR TRANSPARANSI KAMI" : "OUR TRANSPARENCY STANDARD"}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2 leading-snug">
              {lang === "id"
                ? "Pantau live pengerjaan proyek Anda melalui Client Portal."
                : "Inspect weekly sprint velocity live on our Client Portal."}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed">
              {lang === "id"
                ? "Klien kami tidak pernah dibiarkan menebak status pengerjaan. Melalui portal resmi berkeamanan tinggi, Anda dapat melihat milestone mingguan, status server 99.98%, dan faktur resmi kapan saja."
                : "Every client partner receives private credentials to inspect sprint milestone velocity, live server telemetry health, and official invoices 24/7."}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/portal"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-100 transition-all"
              >
                <span>{lang === "id" ? "Buka Client Portal" : "Access Client Portal"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs font-mono text-zinc-400">
                {lang === "id" ? "Gratis untuk Seluruh Klien" : "Included for All Partners"}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0B0F19] p-2 sm:p-4 border-t lg:border-t-0 lg:border-l border-white/10">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/projects/client-portal.svg"
                alt="Abinest Client Portal Interface"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
