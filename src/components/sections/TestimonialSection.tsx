"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";

interface ClientTestimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  institution: string;
  industryTag: string;
  verifiedSystem: string;
  impactMetricValue: string;
  impactMetricLabel: string;
  initials: string;
}

const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: "testi-siakad",
    quote:
      "Sebelumnya setiap musim ujian akhir dan cetak rapor serentak, server SIAKAD kami selalu lumpuh akibat beban pembuatan PDF. Sejak bermigrasi ke arsitektur terpisah dan Parallel PDF Worker di Supabase + QStash, lebih dari 650 rapor semester selesai ter-render di bawah 45 detik tanpa satu pun gangguan pada sistem ujian.",
    authorName: "Dr. H. Ahmad Fauzi, M.Pd.",
    authorRole: "Direktur Akademik & Transformasi Digital",
    institution: "Yayasan Pendidikan Terpadu Nusantara",
    industryTag: "Institusi Pendidikan Multi-Kampus",
    verifiedSystem: "SIAKAD Core + Parallel PDF Engine",
    impactMetricValue: "500+ PDF / <45 dtk",
    impactMetricLabel: "0% Server Crash Saat Ujian Serentak",
    initials: "AF",
  },
  {
    id: "testi-omnichannel",
    quote:
      "Sinkronisasi stok lintas 4 marketplace dan gudang pusat kami kini berjalan di bawah 150ms. Algoritma Exponential Backoff pada webhook pembayaran dan notifikasi WhatsApp otomatis benar-benar mengeliminasi insiden overselling saat puncak kampanye flash sale bulanan kami.",
    authorName: "hendra Wijaya, S.T., MBA",
    authorRole: "VP of Operations & Supply Chain",
    institution: "PT Mitra Distribusi Niaga Nasional",
    industryTag: "Retail Distribusi & E-Commerce B2B",
    verifiedSystem: "Omnichannel Order & Stock Hub",
    impactMetricValue: "0% Overselling",
    impactMetricLabel: "99.98% Webhook Delivery Reliability",
    initials: "HW",
  },
  {
    id: "testi-portal",
    quote:
      "Keunggulan terbesar studio ini bukan hanya kode yang rapi dan skor Lighthouse 99, tetapi transparansi penuh melalui Client Portal berbasis Shopify Polaris. Tim eksekutif kami dapat memantau progres milestone secara real-time dan mengunduh dokumen tagihan tanpa friksi komunikasi.",
    authorName: "Clarissa Prameswari",
    authorRole: "Chief Technology Officer",
    institution: "Garda Medika Korporat",
    industryTag: "Layanan Kesehatan & Enterprise B2B",
    verifiedSystem: "High-Performance Web & Polaris Portal",
    impactMetricValue: "99 / 100 Lighthouse",
    impactMetricLabel: "<50ms Realtime Milestone Sync",
    initials: "CP",
  },
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = CLIENT_TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CLIENT_TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === CLIENT_TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="testimoni"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split 12-Column Layout (Triloe 06 Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* KOLOM KIRI (lg:col-span-5): Eyebrow, Headline Tegas, & Kartu Ringkasan Dampak (#0F172A) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
              <Award className="h-3.5 w-3.5 text-[#2563EB]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#09090B]">
                TRUSTED CLIENT FEEDBACK
              </span>
            </div>

            {/* Headline Tegas */}
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#09090B]">
              Dipercaya oleh{" "}
              <span className="text-[#2563EB]">Institusi Pendidikan</span> &amp;
              Pemimpin Operasional Bisnis
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              Setiap arsitektur yang kami bangun diukur berdasarkan dampak
              operasional nyata: stabilitas saat trafik puncak, kecepatan
              eksekusi antrean, dan kepastian SLA.
            </p>

            {/* Kartu Ringkasan Dampak Terukur (#0F172A Teks Putih) */}
            <div className="rounded-3xl bg-[#0F172A] text-white p-6 sm:p-7 border border-slate-800 shadow-soft-lg space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    RINGKASAN DAMPAK TERUKUR
                  </span>
                  <p className="font-heading text-base font-bold text-white mt-0.5">
                    Audit Kepuasan &amp; Reliabilitas Produksi
                  </p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] font-mono text-xs font-semibold">
                  <Star className="h-3.5 w-3.5 fill-[#10B981]" />
                  <span>5.0 / 5.0</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4">
                  <p className="font-mono text-2xl font-semibold text-[#10B981]">
                    99.9%
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Rata-rata Uptime SLA Sistem Klien
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4">
                  <p className="font-mono text-2xl font-semibold text-white">
                    100%
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Retensi Kontrak Pemeliharaan B2B
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>
                  Garansi penuh kesesuaian arsitektur &amp; keamanan RLS
                  PostgreSQL
                </span>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN (lg:col-span-7): Kartu Testimoni Berbingkai Melengkung (rounded-3xl) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white p-8 md:p-10 border border-[#E2E8F0] shadow-soft-lg relative flex flex-col justify-between min-h-[420px]">
              {/* Top Row: Quote Icon & System Verification Badge (#10B981) */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                  <Quote className="h-6 w-6" />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-semibold">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>Verified System: {current.verifiedSystem}</span>
                </div>
              </div>

              {/* Animated Testimonial Body */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <blockquote className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[#09090B] leading-relaxed tracking-tight">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Highlighted Impact Metric Pill inside Testimonial Card */}
                  <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2.5">
                    <span className="font-mono text-sm font-semibold text-[#2563EB]">
                      {current.impactMetricValue}
                    </span>
                    <span className="h-3.5 w-[1px] bg-[#E2E8F0]" />
                    <span className="text-xs font-medium text-[#64748B]">
                      {current.impactMetricLabel}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Footer: Author Profile & Smooth Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-white font-heading font-bold text-sm border-2 border-[#2563EB]">
                    {current.initials}
                  </div>
                  <div>
                    <p className="font-heading text-base font-bold text-[#09090B]">
                      {current.authorName}
                    </p>
                    <p className="text-xs sm:text-sm text-[#64748B]">
                      {current.authorRole}
                    </p>
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] mt-0.5">
                      <Building2 className="h-3.5 w-3.5" />
                      <span>
                        {current.institution} ({current.industryTag})
                      </span>
                    </p>
                  </div>
                </div>

                {/* Navigation Buttons & Indicator Dots */}
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <div className="flex items-center gap-1.5 mr-2">
                    {CLIENT_TESTIMONIALS.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Pilih testimoni ${idx + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          idx === activeIndex
                            ? "w-6 bg-[#2563EB]"
                            : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Testimoni sebelumnya"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#09090B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Testimoni selanjutnya"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A] text-white hover:bg-[#2563EB] transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
