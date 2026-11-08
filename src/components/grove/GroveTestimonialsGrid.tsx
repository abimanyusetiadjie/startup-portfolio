"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveTestimonialsGrid() {
  const { lang } = useLanguage();

  const reviews = [
    {
      name: "Drs. H. Ahmad Fauzi, M.Pd.",
      role: lang === "id" ? "Ketua Yayasan Pendidikan Bina Insan" : "Chairman, Bina Insan Foundation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote:
        lang === "id"
          ? "Sebelumnya setiap musim ujian semester, tim IT kami selalu was-was karena server lama sering macet. Sejak beralih ke SIAKAD Abinest, 1.200 lebih siswa ujian serentak berjalan sangat mulus dan orang tua menerima tagihan SPP tepat waktu."
          : "Previously, exam weeks were filled with anxiety due to server crashes. Since switching to Abinest SIAKAD, over 1,200 students take concurrent exams without a single hiccup.",
      institution: "Yayasan Bina Insan (SMA & SMP)",
    },
    {
      name: "Hendra Wijaya, S.T.",
      role: lang === "id" ? "Direktur Operasional Mitra Retail" : "Operations Director, Mitra Retail",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote:
        lang === "id"
          ? "Yang paling membuat kami percaya pada Abinest adalah transparansi pengerjaan di Client Portal dan serah terima 100% source code. Kami memiliki aset sistem sendiri tanpa tercekik biaya langganan bulanan per-kasir."
          : "What won our trust is the weekly transparency in their Client Portal and 100% source code handover. We own our entire ERP infrastructure with zero recurring SaaS fees.",
      institution: "PT Mitra Retail Nusantara",
    },
    {
      name: "dr. Anita Rahmawati, M.Kes.",
      role: lang === "id" ? "Direktur Pengelola Institusi" : "Managing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote:
        lang === "id"
          ? "Kecepatan website Next.js 15 yang mereka bangun sangat mengagumkan (Lighthouse 100). Calon pendaftar baru naik signifikan karena halaman profil lembaga kami sangat responsif di ponsel."
          : "The Next.js 15 web speed they delivered is extraordinary (Lighthouse 100). New online registrations grew significantly because of the instant mobile experience.",
      institution: "Institusi Pelayanan Terpadu",
    },
  ];

  return (
    <section className="bg-[#07090E] text-white py-16 sm:py-24 font-sans border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase">
            {lang === "id" ? "TESTIMONI & REPUTASI KLIEN" : "CLIENT REPUTATION"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2">
            Why Modern Innovators Choose Us.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            {lang === "id"
              ? "Ulasan langsung dari para pemimpin institusi dan direktur bisnis yang mengandalkan infrastruktur digital Abinest."
              : "Direct feedback from institutional leaders and operations directors powered by Abinest software."}
          </p>
        </div>

        {/* 3 Review Cards Grid (Matches Reference Row Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0D111A] border border-white/10 flex flex-col justify-between shadow-xl hover:border-amber-400/40 transition-all duration-300"
            >
              <div>
                {/* 5 Amber Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic mb-6">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              {/* Author Info with Portrait */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover border border-amber-400/40 shrink-0"
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    {r.name}
                  </h3>
                  <p className="text-[11px] text-amber-400 font-mono">
                    {r.role}
                  </p>
                  <p className="text-[10px] text-zinc-400 font-mono">
                    {r.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
