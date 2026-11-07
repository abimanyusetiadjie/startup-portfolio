"use client";

import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceSpec {
  name: string;
  badge: string;
  timeline: string;
  startingPrice: string;
  priceDetail: string;
  deliverables: string[];
  waMessage: string;
}

export function GroveServicesTableSection() {
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

  const getWaLink = (message: string) => {
    return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  };

  const services: ServiceSpec[] = [
    {
      name:
        lang === "id"
          ? "SIAKAD Sekolah & Ujian CBT Anti-Down"
          : "School SIAKAD & High-Concurrency CBT",
      badge: lang === "id" ? "SISTEM PENDIDIKAN" : "EDUCATION PLATFORM",
      timeline: lang === "id" ? "4 – 6 Minggu" : "4 – 6 Weeks",
      startingPrice: lang === "id" ? "Rp 15.000.000" : "$950",
      priceDetail: lang === "id" ? "Beli Putus • 100% Hak Milik Kode" : "One-Time • Full IP Ownership",
      deliverables: [
        lang === "id" ? "Portal Ujian CBT 1.000+ Siswa Anti-Crash" : "1,000+ Student CBT Exam Cluster",
        lang === "id" ? "Generator Rapor PDF Cloud < 45 Detik" : "Cloud PDF Report Card Engine",
        lang === "id" ? "Broadcast Tagihan SPP Otomatis via WA" : "Automated WA Tuition Invoicing",
        lang === "id" ? "Pelatihan Guru & Staf Tata Usaha" : "Complete Staff Training Included",
      ],
      waMessage:
        "Halo Abinest Studio, saya ingin konsultasi mengenai paket sistem SIAKAD Sekolah & Ujian CBT.",
    },
    {
      name:
        lang === "id"
          ? "Website Institusi & Korporat Performa Tinggi"
          : "High-Performance Institutional & Corporate Web",
      badge: lang === "id" ? "WEB ARSITEKTUR" : "WEB ARCHITECTURE",
      timeline: lang === "id" ? "2 – 3 Minggu" : "2 – 3 Weeks",
      startingPrice: lang === "id" ? "Rp 4.500.000" : "$300",
      priceDetail: lang === "id" ? "Termasuk Setup Domain & Hosting Cloud" : "Includes Domain & Cloud Setup",
      deliverables: [
        lang === "id" ? "Skor Google Lighthouse 95–100 (Muat < 1 Detik)" : "95-100 Google Lighthouse Speed",
        lang === "id" ? "Formulir Pendaftaran PPDB / Kontak Enkripsi" : "Secure Online Admission Form",
        lang === "id" ? "Struktur SEO Lokal & Optimasi Aset Gambar" : "Technical Local SEO & WebP Assets",
        lang === "id" ? "Desain Eksklusif Sesuai Branding Lembaga" : "Bespoke Institutional Brand Design",
      ],
      waMessage:
        "Halo Abinest Studio, saya ingin konsultasi mengenai pembuatan Website Institusi / Korporat performa tinggi.",
    },
    {
      name:
        lang === "id"
          ? "Custom ERP & Manajemen Stok Multi-Cabang"
          : "Custom Omnichannel ERP & Multi-Store Inventory",
      badge: lang === "id" ? "OPERASIONAL B2B" : "ENTERPRISE OPERATIONS",
      timeline: lang === "id" ? "5 – 8 Minggu" : "5 – 8 Weeks",
      startingPrice: lang === "id" ? "Rp 12.000.000" : "$800",
      priceDetail: lang === "id" ? "Beli Putus • Tanpa Biaya Sewa Per-User" : "Full Ownership • Zero SaaS Rent",
      deliverables: [
        lang === "id" ? "Sinkronisasi Stok Real-Time Antar Cabang" : "Real-Time Branch Stock Sync",
        lang === "id" ? "Sistem Kasir POS Multi-Store Cepat" : "Fast Multi-Store Retail POS",
        lang === "id" ? "Laporan Laba-Rugi & Arus Kas Otomatis" : "Automated Financial & P&L Ledger",
        lang === "id" ? "Database Terisolasi PostgreSQL RLS" : "PostgreSQL RLS Direct Security",
      ],
      waMessage:
        "Halo Abinest Studio, saya ingin konsultasi mengenai paket Custom ERP & Stok Multi-Cabang.",
    },
    {
      name:
        lang === "id"
          ? "Otomasi WhatsApp Resmi Meta Cloud API"
          : "Official Meta Cloud WhatsApp Gateway",
      badge: lang === "id" ? "INTEGRASI OTOMASI" : "AUTOMATION API",
      timeline: lang === "id" ? "1 – 2 Minggu" : "1 – 2 Weeks",
      startingPrice: lang === "id" ? "Rp 3.500.000" : "$250",
      priceDetail: lang === "id" ? "Resmi Anti-Banned Nomor WhatsApp" : "Official Meta Anti-Ban API",
      deliverables: [
        lang === "id" ? "Setup Nomor Resmi Meta Business WhatsApp" : "Official Meta Business Number Setup",
        lang === "id" ? "Pengiriman Invoice & Notifikasi < 1.8 Detik" : "< 1.8s Message Dispatch Latency",
        lang === "id" ? "Antrean QStash Cloud Anti-Macet" : "QStash Background Queue Engine",
        lang === "id" ? "Integrasi ke Database Aplikasi Anda" : "Direct Webhook & Database Connector",
      ],
      waMessage:
        "Halo Abinest Studio, saya ingin konsultasi mengenai integrasi Bot WhatsApp resmi Meta Cloud API.",
    },
  ];

  return (
    <section
      id="layanan"
      className="bg-[#F8FAFC] text-slate-900 py-16 sm:py-24 font-sans border-b border-slate-200"
    >
      <div id="harga" className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#0F766E] uppercase">
            {lang === "id" ? "LAYANAN & SPESIFIKASI BIAYA" : "SERVICES & TRANSPARENT PRICING"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] mt-2">
            {lang === "id"
              ? "Estimasi investasi jelas. Tanpa biaya tersembunyi."
              : "Clear deliverables with predictable investments."}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            {lang === "id"
              ? "Kami memegang teguh transparansi harga sejak awal. Seluruh sistem adalah hak milik penuh Anda tanpa kewajiban biaya langganan bulanan per-pengguna."
              : "We believe in upfront pricing transparency. All systems become your institution's permanent intellectual property with zero monthly SaaS rent."}
          </p>
        </div>

        {/* Minimalist Editorial Service Rows (Mature Studio Table Style) */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start group"
            >
              {/* Left Column: Service Name & Metadata */}
              <div className="lg:col-span-5">
                <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-[#0F766E] bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                  {service.badge}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A] mt-2.5 leading-snug">
                  {service.name}
                </h3>
                <div className="mt-3 text-xs font-mono text-slate-500">
                  <span>{lang === "id" ? "Estimasi Pengerjaan:" : "Timeline:"} </span>
                  <strong className="text-slate-800">{service.timeline}</strong>
                </div>
              </div>

              {/* Middle Column: Key Deliverables List */}
              <div className="lg:col-span-4 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block mb-2">
                  {lang === "id" ? "DELIVERABLE INKLUSIF:" : "INCLUDED DELIVERABLES:"}
                </span>
                {service.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Right Column: Price & Direct WhatsApp Action */}
              <div className="lg:col-span-3 flex flex-col lg:items-end justify-between self-stretch gap-4">
                <div className="lg:text-right">
                  <span className="text-[11px] font-mono text-slate-500 block">
                    {lang === "id" ? "Investasi Mulai Dari:" : "Starting Investment:"}
                  </span>
                  <span className="font-heading text-2xl font-bold text-[#0F172A] font-mono">
                    {service.startingPrice}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                    {service.priceDetail}
                  </span>
                </div>

                <a
                  href={getWaLink(service.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-[#0F766E] text-xs font-bold transition-all shadow-sm group-hover:shadow"
                >
                  <span>{lang === "id" ? "Konsultasi Paket Ini" : "Discuss Package"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Payment Protection Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg font-bold text-[#0F172A]">
                {lang === "id"
                  ? "Skema Pembayaran Berbasis Milestone (3 Termin Aman)"
                  : "Safe 3-Stage Milestone Payment Scheme"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {lang === "id"
                  ? "Termin 1 (30% Kickoff & Blueprint Arsitektur) → Termin 2 (40% Demo Live di Client Portal) → Termin 3 (30% Serah Terima 100% Source Code & Pelatihan)."
                  : "30% Kickoff & Blueprint → 40% Live Demo Verification on Client Portal → 30% 100% Source Code Handover & Staff Training."}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Abinest%20Studio,%20saya%20ingin%20meminta%20rincian%20RAB%20dan%20proposal%20resmi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-[#0F766E] text-xs font-semibold transition-colors shrink-0 whitespace-nowrap"
          >
            <span>{lang === "id" ? "Minta Rincian Proposal / RAB →" : "Request Official Quote →"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
