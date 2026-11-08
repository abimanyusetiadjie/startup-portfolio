"use client";

import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";

export function GroveCaseStudyTabsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      label: "Website Modern Next.js 15",
      title: "Website Korporat & Landing Page Konversi Tinggi Skor 95–100",
      desc: "Kami merancang website profesional untuk perusahaan, institusi, dan UMKM menggunakan Next.js 15 App Router yang memuat dalam sekejap dan mendominasi peringkat mesin pencari.",
      bullets: [
        "Skor Google Core Web Vitals & PageSpeed terverifikasi 95–100.",
        "Desain visual eksklusif kelas dunia yang meningkatkan kredibilitas brand.",
        "Panel CMS intuitif yang mudah diperbarui oleh staf non-teknis kapan saja.",
        "Optimasi SEO teknis & Schema JSON-LD lengkap untuk visibilitas pencarian Google.",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      badge: "Next.js 15 Edge Performance",
    },
    {
      label: "Sistem Informasi & ERP Kustom",
      title: "Aplikasi Web & Sistem Manajemen Sesuai Alur Kerja Unik Anda",
      desc: "Bangun sistem digital yang mengikuti proses bisnis Anda, bukan sebaliknya. Mulai dari ERP manajemen stok, CRM, dashboard operasional, hingga SIAKAD sekolah yang teruji anti-down.",
      bullets: [
        "0% server crash saat lonjakan transaksi massal atau ribuan user serentak.",
        "Hak akses multi-peran granular dengan isolasi PostgreSQL Row-Level Security.",
        "Dashboard analitik real-time untuk pengambilan keputusan pimpinan yang akurat.",
        "Pemrosesan dokumen & PDF otomatis di latar belakang tanpa membuat web lag.",
      ],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80",
      badge: "Enterprise Custom Architecture",
    },
    {
      label: "Otomasi WhatsApp & Webhook",
      title: "Integrasi Resmi Meta Cloud API & Pengiriman < 2 Detik",
      desc: "Tinggalkan broadcast tidak resmi yang rawan pemblokiran nomor. Kami hubungkan sistem Anda langsung ke infrastruktur resmi Meta Cloud API untuk pengiriman invoice, reminder, dan bot cerdas.",
      bullets: [
        "Notifikasi tagihan SPP, faktur invoice, dan OTP terkirim di bawah 2 detik.",
        "Pencegahan pesan ganda otomatis dengan kunci idempotensi kriptografis.",
        "Dasbor analitik read-receipt dan pemantauan delivery rate real-time.",
        "Integrasi webhook ke Google Sheets, Midtrans/Xendit, dan CRM bisnis Anda.",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      badge: "Official Meta Cloud API Pipeline",
    },
    {
      label: "Infrastruktur & Hak Milik 100%",
      title: "Infrastruktur Cloud Andal & Hak Cipta Kode Sumber Penuh",
      desc: "Semua sistem diserahterimakan dengan kepemilikan kode sumber penuh tanpa biaya langganan software per-user yang membebani kas perusahaan setiap bulan.",
      bullets: [
        "Kebijakan Row-Level Security (RLS) ketat di setiap tabel database.",
        "Enkripsi penuh TLS 1.3 saat transit dan enkripsi AES-256 saat tersimpan.",
        "Serah terima repositori Git penuh dan skema arsitektur tanpa biaya lisensi.",
        "Pencadangan data otomatis harian dan skema Disaster Recovery instan.",
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      badge: "PostgreSQL Zero-Trust Layer",
    },
  ];

  const current = tabs[activeTab];

  return (
    <section id="solusi" className="py-24 relative bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            SOLUSI SPESIALIS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Layanan IT yang
            <br />
            Benar-Benar Memberi Hasil
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Dukungan teknis responsif yang langsung ditangani oleh tim engineer inti tanpa perantara.
          </p>
        </div>

        {/* Horizontal Tab Navigation in Clean Light Container */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 border-b border-slate-200 pb-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-3 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "text-orange-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-[1px] h-[2.5px] bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_2px_8px_rgba(249,115,22,0.6)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200 text-[10px] font-mono uppercase tracking-wider font-semibold">
                {current.badge}
              </span>
              <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-[#0F172A] leading-snug">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* 4 Bullet points */}
            <ul className="space-y-3 pt-2">
              {current.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                >
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 border border-orange-200">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20layanan%20ini."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_4px_14px_rgba(249,115,22,0.35)] transition-all"
              >
                <span>Konsultasikan Kebutuhan Ini</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-white bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <span className="font-mono text-orange-400 font-semibold">99.9% Uptime SLA Verified</span>
                <span>Abinest Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
