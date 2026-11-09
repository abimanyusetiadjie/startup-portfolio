"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

export function GroveFaqAccordionSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. Berapa lama waktu pengerjaan Website Modern, Sistem ERP, atau Automasi AI/ML?",
      a: "Untuk pembuatan Website Modern Next.js (Company Profile, SaaS landing, atau e-commerce) membutuhkan waktu 2–3 minggu. Untuk pipeline Automasi AI & WhatsApp Agent Meta resmi berkisar antara 2–4 minggu. Sedangkan untuk Sistem ERP Enterprise kustom (multi-warehouse, inventory, accounting) berkisar antara 6–10 minggu dengan sprint demo setiap minggu via Portal Klien.",
    },
    {
      q: "2. Apakah source code dan database sepenuhnya menjadi milik institusi kami?",
      a: "Ya, 100% menjadi hak milik resmi institusi atau perusahaan Anda. Setelah proyek selesai, kami menyerahkan seluruh kode program (source code), struktur database, beserta dokumentasi lengkapnya. Anda bebas mengembangkan atau mengelolanya sendiri di masa depan tanpa ketergantungan pada kami (zero vendor lock-in).",
    },
    {
      q: "3. Bagaimana jaminan keandalan sistem saat lonjakan transaksi tinggi (SLA)?",
      a: "Setiap sistem kami dilengkapi jaminan tertulis SLA 99.99% Uptime. Sebelum sistem dideploy ke lingkungan produksi, tim engineer kami melakukan automated load testing puluhan ribu transaksi serentak. Jika ada kebutuhan teknis mendesak di jam operasional, tim engineer inti kami langsung merespons dalam waktu kurang dari 15 menit.",
    },
    {
      q: "4. Apakah ada biaya lisensi bulanan per-user yang wajib dibayar terus-menerus?",
      a: "Sama sekali tidak ada. Berbeda dengan software ERP impor (SaaS) yang mengenakan tagihan lisensi puluhan dolar per user setiap bulan, di Abinest Anda membayar biaya pembangunan satu kali. Perusahaan Anda bebas menambah 100 atau 10.000 karyawan tanpa biaya lisensi software tambahan selamanya.",
    },
    {
      q: "5. Apakah bisa mengajukan revisi jika di tengah jalan ada penyesuaian?",
      a: "Tentu bisa. Karena kami menerapkan sistem demo berkala setiap minggu melalui Portal Klien, Anda bisa langsung mencoba fitur yang sedang dibangun dan memberikan catatan revisi sejak dini. Semua revisi yang sesuai dengan ruang lingkup kesepakatan awal kami kerjakan tanpa biaya tambahan.",
    },
    {
      q: "6. Apakah data kami aman dan apakah data lama dari Excel bisa dipindahkan?",
      a: "Keamanan dan kerahasiaan data perusahaan Anda adalah prioritas utama kami. Untuk sistem ERP, akses dibatasi oleh Role-Based Access Control (RBAC) ketat dan enkripsi database harian. Untuk automasi AI & Machine Learning, seluruh data diisolasi dalam private environment (zero data retention) dan data bisnis Anda TIDAK PERNAH digunakan untuk melatih model AI publik.",
    },
    {
      q: "7. Staf kami bukan orang IT. Apakah ada training sampai mereka lancar mengoperasikan?",
      a: "Pasti. Kami merancang tampilan sistem agar sesederhana mungkin untuk staf non-teknis. Sebelum serah terima, kami mengadakan sesi pelatihan (training) langsung untuk staf operasional, tim finance, tim gudang, maupun admin bisnis Anda, lengkap dengan buku panduan praktis dan video rekaman tutorial berbahasa Indonesia.",
    },
    {
      q: "8. Bagaimana cara memulai dan bagaimana tahapan pembayarannya?",
      a: "Cukup klik tombol konsultasi di halaman ini atau isi formulir singkat di bawah. Kami akan menjadwalkan diskusi awal (online via Zoom/Google Meet atau tatap muka untuk area Jakarta & Surabaya) secara gratis. Pembayaran proyek dilakukan secara bertahap dan aman mengikuti progres pengerjaan (termin milestone) yang disepakati bersama.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-14 sm:py-16 relative bg-[#F8FAFC] border-b border-slate-200/80"
    >
      <div className="max-w-[860px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E40AF] bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
            PERTANYAAN YANG SERING DIAJUKAN (FAQ)
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Jawaban Jelas untuk Kepastian &amp; Ketenangan Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hal-hal penting yang paling sering ditanyakan oleh Direktur Operasional, Founder, VP Marketing, dan Pemilik Bisnis sebelum memulai proyek bersama kami.
          </p>
        </div>

        {/* 8 Accordion Rows */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 px-5 sm:px-6 ${
                  isOpen
                    ? "bg-white border-blue-300 shadow-md"
                    : "bg-white border-slate-200/90 hover:border-slate-300 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-sm sm:text-[15px] font-bold text-[#0F172A] leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#2563EB] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pr-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question Prompt */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-600 flex items-center justify-center gap-2 flex-wrap">
            <MessageCircle className="w-4 h-4 text-[#2563EB]" />
            <span>Punya pertanyaan khusus di luar daftar di atas?</span>
            <a
              href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20pembuatan%20website%2Fsistem%2Fautomasi."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:text-[#1D4ED8] font-bold underline underline-offset-4 transition-colors"
            >
              Tanyakan langsung ke tim engineer kami via WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
