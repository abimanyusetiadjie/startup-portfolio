"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

export function GroveFaqAccordionSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama estimasi waktu pengerjaan SIAKAD atau sistem kustom?",
      a: "Untuk Website Institusi Next.js 15 membutuhkan waktu 2–3 minggu. Untuk SIAKAD Sekolah atau ERP kustom berkisar antara 6–10 minggu dengan rilis modul bertahap setiap minggunya yang dapat Anda pantau langsung melalui Portal Klien.",
    },
    {
      q: "Apakah data dari sistem lama atau file Excel bisa dimigrasikan secara utuh?",
      a: "Tentu. Tim engineer kami menyediakan skrip sanitasi dan pemindahan data otomatis dari Excel, CSV, maupun database SQL lama. Kami menjamin tidak ada data siswa, guru, nilai, atau tagihan yang hilang atau tercecer.",
    },
    {
      q: "Bagaimana skema garansi, pemeliharaan, dan SLA setelah sistem Go-Live?",
      a: "Setiap proyek dilengkapi garansi pemeliharaan pasca go-live, pemantauan server 24/7 dengan SLA 99.9%, serta direct channel ke engineer senior dengan waktu respons di bawah 15 menit untuk penanganan kendala kritis.",
    },
    {
      q: "Apakah source code dan database sepenuhnya menjadi hak milik institusi kami?",
      a: "Ya, 100% hak cipta dan kepemilikan menjadi milik institusi Anda. Kami menyerahkan seluruh repositori Git, skema database PostgreSQL, dan dokumentasi arsitektur tanpa biaya lisensi bulanan tersembunyi.",
    },
    {
      q: "Bagaimana kisaran investasi untuk memulai proyek bersama Abinest?",
      a: "Website institusi performa tinggi mulai dari Rp 8,5 Juta, Otomasi WhatsApp Cloud API mulai dari Rp 12 Juta, dan SIAKAD Sekolah lengkap mulai dari Rp 25 Juta dengan sistem pembayaran bertahap berbasis milestone yang transparan.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-[760px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            TANYA JAWAB TEKNIS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Tanya Lebih Sedikit.
            <br />
            Tahu Lebih Banyak.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Transparansi penuh mengenai kepemilikan kode, proses pengerjaan, dan jaminan SLA kami.
          </p>
        </div>

        {/* Accordion Rows in Clean White Cards */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-orange-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-orange-600" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <p className="pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-3 animate-fadeIn">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer FAQ */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 text-center">
          <MessageCircle className="w-4 h-4 text-orange-500" />
          <span>Masih memiliki pertanyaan spesifik seputar sistem Anda?</span>
          <a
            href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20memiliki%20pertanyaan%20spesifik%20mengenai%20sistem."
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-bold hover:underline"
          >
            Hubungi tim teknis kami langsung
          </a>
        </div>
      </div>
    </section>
  );
}
