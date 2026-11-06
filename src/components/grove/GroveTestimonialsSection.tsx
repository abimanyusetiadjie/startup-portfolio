"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star, Quote, Building2, GraduationCap, CheckCircle2 } from "lucide-react";

export function GroveTestimonialsSection() {
  const { lang } = useLanguage();

  const testimonials = [
    {
      name: "Drs. H. Mulyadi, M.Pd",
      title: "Ketua Yayasan Pendidikan Mandiri",
      institution: "Mengelola 3 Sekolah & 1.200 Siswa",
      quote:
        "Sebelumnya setiap pembagian rapor semester, server sekolah kami selalu down dan ratusan wali murid komplain di grup WA. Bersama Abinest, 1.200 siswa dan orang tua mengakses rapor serentak dengan 0% server down. Sistemnya sangat stabil dan guru-guru kami mudah menggunakannya.",
      highlight: "0% Server Crash saat Pembagian Rapor",
      stars: 5,
    },
    {
      name: "Bambang Wicaksono",
      title: "Direktur Operasional",
      institution: "Mitra Retail Nusantara",
      quote:
        "Integrasi WhatsApp API dan omnichannel ERP dari Abinest menghemat waktu tim admin kami hingga puluhan jam setiap bulan. Tagihan invoice otomatis terkirim dalam waktu kurang dari 2 detik dan stok antar toko fisik dengan marketplace selalu sinkron tanpa pernah selisih.",
      highlight: "Hemat 24 Jam Kerja Staf per Bulan",
      stars: 5,
    },
    {
      name: "Rian Kusuma, S.Kom",
      title: "Kepala Divisi IT & Sistem Informasi",
      institution: "Institusi Pendidikan Tinggi & Akademi",
      quote:
        "Yang paling kami hargai dari Abinest adalah profesionalisme dan transparansi. Seluruh kode sumber diserahkan penuh tanpa keterikatan vendor licik. Arsitektur Next.js 15 dan PostgreSQL RLS yang mereka bangun sangat cepat, aman, dan mudah diaudit tim internal kami.",
      highlight: "100% Hak Milik Kode & Zero Lock-in",
      stars: 5,
    },
  ];

  return (
    <section className="bg-[#0F1219] text-white py-16 sm:py-24 font-sans border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-emerald-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-300 font-mono">
              {lang === "id" ? "TESTIMONI KLIEN & KEPALA YAYASAN" : "CLIENT TESTIMONIALS"}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            {lang === "id"
              ? "Kepercayaan yang dibuktikan dengan hasil."
              : "Trust validated by measurable results."}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {lang === "id"
              ? "Pengalaman langsung para pengambil keputusan yayasan dan direktur bisnis yang bermitra dengan Abinest."
              : "Direct feedback from institutional decision-makers who rely on Abinest systems for their day-to-day operations."}
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span>{t.highlight}</span>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {t.name}
                  </h4>
                  <span className="text-xs text-emerald-400 block font-medium">
                    {t.title}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 block mt-0.5">
                    {t.institution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
