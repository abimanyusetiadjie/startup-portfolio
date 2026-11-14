"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    timeline: "Hari 1–2",
    title: "Konsultasi & Rincian Biaya",
    desc: "Pemetaan alur bisnis dan penguncian anggaran tetap sebelum pengerjaan dimulai.",
    imageSrc: "/images/steps/step-01-blueprint.jpg",
  },
  {
    step: "02",
    timeline: "Hari 3–4",
    title: "Desain Antarmuka & Kontrak",
    desc: "Persetujuan desain tampilan interaktif serta penandatanganan perjanjian SLA tertulis.",
    imageSrc: "/images/steps/step-02-contract.jpg",
  },
  {
    step: "03",
    timeline: "Hari 5–9",
    title: "Pengembangan & Uji Coba",
    desc: "Pembangunan sistem cepat dengan server uji coba langsung yang dapat diakses setiap hari.",
    imageSrc: "/images/steps/step-03-staging.jpg",
  },
  {
    step: "04",
    timeline: "Hari 10–11",
    title: "Uji Beban & Pelatihan",
    desc: "Simulasi lonjakan pengguna dan pelatihan operasional hingga staf siap mandiri.",
    imageSrc: "/images/steps/step-04-testing.jpg",
  },
  {
    step: "05",
    timeline: "Hari 12–14",
    title: "Serah Terima & Peluncuran",
    desc: "Penyerahan seluruh kode program, basis data asli, dan aktivasi resmi sistem.",
    imageSrc: "/images/steps/step-05-handover.jpg",
  },
];

export function GroveCoreShieldSection() {
  return (
    <section
      id="cara-kerja"
      data-section="cara-kerja"
      className="py-20 bg-[#F8FAFC] border-b border-slate-200/70"
    >
      <div className="max-w-[1200px] mx-auto px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-xl space-y-2.5"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Alur Kerja 14 Hari
          </h2>
          <p className="text-[15.5px] text-slate-600 leading-relaxed">
            Tahapan terukur dari perencanaan kebutuhan hingga sistem resmi beroperasi. Arahkan kursor untuk melihat dokumentasi tiap tahap.
          </p>
        </motion.div>

        <div className="grid grid-cols-5 gap-5 relative">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.32, delay: idx * 0.05 }}
              className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 p-5 flex flex-col justify-between gap-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-lg transition-all cursor-default"
            >
              {/* Subtle Clean Photo Preview Popover on Hover */}
              <div className="hidden lg:block absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[260px] pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-40">
                <div className="rounded-xl bg-white border border-slate-200 shadow-xl p-2">
                  <div className="relative w-full h-[145px] rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={s.imageSrc}
                      alt={s.title}
                      fill
                      sizes="260px"
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="text-[11px] font-medium text-slate-600 px-1 pt-2 pb-0.5">
                    Dokumentasi Tahap {s.step} · {s.timeline}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-blue-600">{s.step}</span>
                  <span className="font-medium text-slate-400">{s.timeline}</span>
                </div>
                <h3 className="text-[15.5px] font-bold text-slate-900 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
