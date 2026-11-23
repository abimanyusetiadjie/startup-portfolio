"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MinusCircle, ShieldCheck } from "lucide-react";

const abinestPoints = [
  "Rp0 biaya lisensi bulanan per staf, kasir, atau siswa selamanya",
  "100% repositori kode & basis data asli menjadi aset perusahaan Anda",
  "Server uji coba live (staging) dapat dipantau sejak minggu pertama",
  "Dilengkapi RAB terkunci, NDA tertulis, kontrak SLA & dokumen BAST",
  "Akses langsung ke tim engineer inti dengan respons <15 menit",
];

const saasPoints = [
  "Biaya langganan terus membengkak setiap kali staf atau cabang bertambah",
  "Alur kerja & laporan kaku, sulit disesuaikan dengan SOP internal usaha",
  "Data transaksi strategis terkunci di server milik vendor pihak ketiga",
  "Begitu berhenti berlangganan, seluruh akses sistem langsung terhenti",
];

const freelancerPoints = [
  "Umumnya tanpa kontrak SLA, NDA tertulis, maupun dokumentasi kode rapi",
  "Sering memakai template berat (>4 detik di HP) yang lemah di SEO Google",
  "Risiko sulit dihubungi ketika terjadi kendala teknis setelah peluncuran",
  "Sulit dikembangkan ke integrasi ERP, Kasir POS, atau WhatsApp Cloud resmi",
];

export function GroveWhyAbinestSection() {
  return (
    <section
      id="keunggulan"
      data-section="keunggulan"
      className="scroll-mt-20 py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-10 lg:space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl space-y-3"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F8FAFC] text-[#0F172A] font-semibold text-xs tracking-wide ring-1 ring-slate-200">
            Standar Studio Abinest
          </span>
          <h2 className="text-[26px] sm:text-3xl lg:text-[38px] font-bold tracking-[-0.035em] text-[#0F172A] leading-[1.12]">
            Mengapa pemilik bisnis memilih{" "}
            <span className="text-[#475569] font-normal">
              aset milik sendiri?
            </span>
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed">
            Perbandingan jujur antara membangun aset digital bersama Abinest dibanding menyewa software SaaS bulanan atau menggunakan jasa template biasa.
          </p>
        </motion.div>

        {/* 3 Fluid Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Featured Abinest Column */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="rounded-[28px] bg-[#0F172A] text-white p-6 sm:p-7 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.28)] ring-1 ring-white/10 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold ring-1 ring-white/15">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Abinest Software Studio</span>
                </span>
                <span className="font-mono text-[11px] text-slate-300 font-semibold">
                  Beli Putus 100%
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Aset Jangka Panjang Milik Usaha Anda
                </h3>
                <p className="text-[13.5px] text-slate-300 leading-relaxed">
                  Bayar sekali sesuai ruang lingkup yang disepakati, lalu miliki kendali penuh atas sistem dan data Anda.
                </p>
              </div>

              <ul className="space-y-3 pt-2 border-t border-white/10">
                {abinestPoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-[13.5px] text-slate-100 leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/audit-gratis"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] font-bold text-xs sm:text-[13.5px] py-3 px-5 shadow-sm transition-all"
            >
              <span>Hitung Penghematan di Kalkulator Biaya</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.article>

          {/* SaaS Subscription Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-[28px] bg-[#F8FAFC] p-6 sm:p-7 ring-1 ring-slate-200/80 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#475569] text-[11px] font-mono font-semibold ring-1 ring-slate-200/80">
                Aplikasi SaaS Bulanan
              </span>
              <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                Murah di Awal, Membengkak Tiap Tahun
              </h3>
              <ul className="space-y-3 pt-2 border-t border-slate-200/70">
                {saasPoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-[13px] text-[#475569] leading-snug"
                  >
                    <MinusCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-200/70 text-[12px] font-medium text-slate-500">
              Estimasi 3 tahun (25 staf):{" "}
              <span className="font-mono font-bold text-[#0F172A]">Rp36–90 juta+</span>
            </div>
          </motion.article>

          {/* Freelancer / Generic Template Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="rounded-[28px] bg-[#F8FAFC] p-6 sm:p-7 ring-1 ring-slate-200/80 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#475569] text-[11px] font-mono font-semibold ring-1 ring-slate-200/80">
                Freelancer / Template Umum
              </span>
              <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                Risiko Tinggi Saat Usaha Mulai Tumbuh
              </h3>
              <ul className="space-y-3 pt-2 border-t border-slate-200/70">
                {freelancerPoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-[13px] text-[#475569] leading-snug"
                  >
                    <MinusCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-200/70 text-[12px] font-medium text-slate-500">
              Risiko utama:{" "}
              <span className="font-semibold text-[#0F172A]">Harus bangun ulang dari nol</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
