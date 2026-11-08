"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

export function GroveFaqAccordionSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. Berapa lama waktu pengerjaan website, sistem SIAKAD/ERP, atau automasi?",
      a: "Untuk pembuatan Website Sekolah, Yayasan, atau Company Profile membutuhkan waktu 2–3 minggu. Untuk Jasa Automasi WhatsApp & Laporan membutuhkan waktu 2–4 minggu. Sedangkan untuk Sistem Informasi Akademik (SIAKAD) atau ERP kustom berkisar antara 6–10 minggu dengan demo hasil pengerjaan setiap minggu yang dapat Anda pantau langsung lewat Portal Klien.",
    },
    {
      q: "2. Apakah source code dan database sepenuhnya menjadi milik institusi kami?",
      a: "Ya, 100% menjadi hak milik resmi institusi atau perusahaan Anda. Setelah proyek selesai, kami menyerahkan seluruh kode program (source code), struktur database, beserta dokumentasi lengkapnya. Anda bebas mengembangkan atau mengelolanya sendiri di masa depan tanpa ketergantungan pada kami (zero vendor lock-in).",
    },
    {
      q: "3. Bagaimana jaminan jika sistem down saat momen penting seperti ujian atau PPDB?",
      a: "Setiap sistem yang kami bangun dilengkapi jaminan tertulis SLA 99.9% Uptime. Sebelum sistem dipakai ujian serentak atau PPDB, kami melakukan simulasi beban ribuan pengguna sekaligus. Jika terjadi kendala teknis di jam kerja, tim engineer inti kami langsung menangani dalam waktu kurang dari 15 menit.",
    },
    {
      q: "4. Apakah ada biaya lisensi bulanan atau biaya per siswa yang wajib dibayar terus?",
      a: "Tidak ada. Berbeda dengan sistem sewa (SaaS) yang menagih biaya per siswa setiap bulan, di Abinest Anda cukup membayar biaya pembangunan sistem satu kali sesuai kesepakatan. Anda hanya perlu menyiapkan biaya server/domain tahunan standar (atau menggunakan server milik institusi Anda sendiri).",
    },
    {
      q: "5. Apakah bisa mengajukan revisi jika di tengah jalan ada penyesuaian?",
      a: "Tentu bisa. Karena kami menerapkan sistem demo berkala setiap minggu melalui Portal Klien, Anda bisa langsung mencoba fitur yang sedang dibangun dan memberikan catatan revisi sejak dini. Semua revisi yang sesuai dengan ruang lingkup kesepakatan awal kami kerjakan tanpa biaya tambahan.",
    },
    {
      q: "6. Apakah data kami aman dan apakah data lama dari Excel bisa dipindahkan?",
      a: "Sangat aman. Database dilengkapi pengamanan berlapis di mana setiap jabatan (Kepala Sekolah, Guru, Admin Keuangan, Siswa) hanya bisa melihat data sesuai wewenangnya, ditambah backup otomatis setiap hari. Tim kami juga membantu memindahkan data lama Anda dari file Excel atau sistem terdahulu sampai rapi dan siap pakai.",
    },
    {
      q: "7. Staf kami bukan orang IT. Apakah ada training sampai mereka lancar mengoperasikan?",
      a: "Pasti. Kami merancang tampilan sistem agar sesederhana mungkin untuk staf non-teknis. Sebelum serah terima, kami mengadakan sesi pelatihan (training) langsung untuk staf TU, guru, maupun admin Anda, lengkap dengan buku panduan praktis dan video rekaman tutorial berbahasa Indonesia.",
    },
    {
      q: "8. Bagaimana cara memulai dan bagaimana tahapan pembayarannya?",
      a: "Cukup klik tombol konsultasi di halaman ini atau isi formulir singkat di bawah. Kami akan menjadwalkan diskusi awal (online via Zoom/Google Meet atau tatap muka untuk area Jakarta & Surabaya) secara gratis. Pembayaran proyek dilakukan secara bertahap dan aman mengikuti progres pengerjaan (termin milestone) yang disepakati bersama.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 relative bg-[#FAF9F6] border-b border-slate-200/80"
    >
      <div className="max-w-[860px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2672B] bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            PERTANYAAN YANG SERING DIAJUKAN (FAQ)
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Jawaban Jelas untuk Kepastian &amp; Ketenangan Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hal-hal penting yang paling sering ditanyakan oleh Kepala Sekolah, Ketua Yayasan, dan Pemilik Bisnis sebelum memulai proyek bersama kami.
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
                    ? "bg-white border-orange-300 shadow-md"
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
                        ? "bg-[#D97736] text-white"
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
            <MessageCircle className="w-4 h-4 text-[#C2672B]" />
            <span>Punya pertanyaan khusus di luar daftar di atas?</span>
            <a
              href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20pembuatan%20website%2Fsistem%2Fautomasi."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C2672B] hover:text-[#0F172A] font-bold underline underline-offset-4 transition-colors"
            >
              Tanyakan langsung ke tim engineer kami via WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
