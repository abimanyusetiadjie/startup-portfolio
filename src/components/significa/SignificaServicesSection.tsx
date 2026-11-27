"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CORE_SERVICES = [
  {
    index: "01",
    title: "Website bisnis cepat.",
    price: "Mulai Rp1,5 juta",
    meta: "7–14 hari kerja",
    desc: "Situs perusahaan, katalog produk, dan landing page berkecepatan tinggi yang siap peringkat Google.",
    points: [
      "Waktu muat <0,8 detik di jaringan 4G seluler",
      "Struktur Local SEO & Schema JSON-LD terverifikasi",
      "100% hak milik kode sumber & kontrol domain",
    ],
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    index: "02",
    title: "ERP, WMS, POS & SIAKAD.",
    price: "Mulai Rp4 juta",
    meta: "Rp0 biaya per staf",
    desc: "Sistem operasional kustom untuk gudang, kasir toko, properti kos, HRIS, hingga administrasi sekolah.",
    points: [
      "Tanpa biaya sewa bulanan per pengguna atau cabang",
      "Hak akses peran ketat (Owner BI vs Admin/Kasir)",
      "Dapat berjalan cloud maupun offline-first di LAN",
    ],
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    index: "03",
    title: "Automasi AI & WhatsApp.",
    price: "Mulai Rp5 juta",
    meta: "API resmi Meta",
    desc: "Asisten AI katalog 24/7, prediksi harga berbasis Machine Learning, hingga ekstraksi dokumen otomatis.",
    points: [
      "Asisten WhatsApp cek stok & hitung ongkir otomatis",
      "Hybrid RAG & ML terkunci pada data bisnis asli",
      "Alur aman sesuai standar privasi & human-takeover",
    ],
    href: "/jasa-automasi-whatsapp",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Diskusi & Scope",
    desc: "Bedah alur operasional bisnis dan sepakati rincian fitur beserta estimasi biaya tertulis.",
  },
  {
    step: "02",
    title: "Prototipe 7–14 Hari",
    desc: "Anda langsung menguji tampilan dan alur kerja inti lebih awal sebelum pengembangan penuh.",
  },
  {
    step: "03",
    title: "Uji Operasional",
    desc: "Migrasi data awal, pelatihan singkat tim, dan pengujian di perangkat kerja nyata.",
  },
  {
    step: "04",
    title: "Serah Terima 100%",
    desc: "Kode sumber, akses server, dokumentasi, dan garansi bug-fix 90 hari penuh milik Anda.",
  },
];

export function SignificaServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-20">
      {/* 1. 3-Column Clean B2B Service Cards on Soft Slate */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="sig-container py-16 lg:py-24 space-y-12">
          <div className="max-w-2xl space-y-2.5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#0D7A67]">
              Layanan Kami
            </p>
            <h2 className="text-[clamp(1.75rem,2vw+1rem,2.65rem)] font-bold tracking-[-0.025em] leading-[1.12] text-[#0F172A]">
              Tiga fokus sistem untuk mempercepat operasional.
            </h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Dikerjakan langsung oleh tim engineer — tersedia skema Beli Putus
              maupun Terima Beres.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((srv) => (
              <div
                key={srv.title}
                className="rounded-[18px] bg-white border border-[#E2E8F0] hover:border-[#0D7A67]/45 p-7 sm:p-8 flex flex-col justify-between gap-7 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[12px] font-semibold text-[#0D7A67]">
                      {srv.index}
                    </span>
                    <span className="text-[12.5px] font-medium text-[#64748B]">
                      {srv.meta}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-[21px] font-bold tracking-[-0.015em] text-[#0F172A]">
                      {srv.title}
                    </h3>
                    <div className="text-[15px] font-semibold text-[#0D7A67]">
                      {srv.price}
                    </div>
                  </div>

                  <p className="text-[14.5px] leading-[1.6] text-[#475569]">
                    {srv.desc}
                  </p>

                  <ul className="space-y-2.5 pt-3 border-t border-[#F1F5F9]">
                    {srv.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-[13.5px] text-[#334155] leading-snug"
                      >
                        <span className="text-[#0D7A67] select-none shrink-0">
                          —
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={srv.href}
                  className="sig-link inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#0D7A67] w-fit"
                >
                  <span>Pelajari detail layanan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Clean 4-Step Transparent Workflow Strip on Pure White */}
      <div id="alur-kerja" className="scroll-mt-20 bg-white border-b border-[#E2E8F0]">
        <div className="sig-container py-16 lg:py-20 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#0D7A67]">
                Alur Kerja
              </p>
              <h2 className="text-[clamp(1.6rem,1.8vw+0.9rem,2.25rem)] font-bold tracking-[-0.02em] leading-[1.15] text-[#0F172A]">
                Transparan dari hari pertama hingga serah terima.
              </h2>
            </div>
            <p className="text-[14.5px] text-[#64748B] max-w-sm">
              Tanpa biaya tersembunyi dan tanpa ketergantungan vendor jangka panjang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((item) => (
              <div
                key={item.step}
                className="border-t-2 border-[#E2E8F0] hover:border-[#0D7A67] pt-5 space-y-2 transition-colors"
              >
                <span className="font-mono text-[12px] font-semibold text-[#0D7A67]">
                  {item.step}
                </span>
                <h3 className="text-[17px] font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#475569]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
