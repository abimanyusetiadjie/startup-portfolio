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
      className="scroll-mt-16 bg-[#FAFAFA] border-b border-[#EAEAEA]"
    >
      <div className="max-w-[1200px] mx-auto border-x border-[#EAEAEA] bg-white">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="px-8 py-14 border-b border-[#EAEAEA] relative"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-3 left-3 font-mono text-xs text-neutral-300"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-3 right-3 font-mono text-xs text-neutral-300"
          >
            +
          </span>
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#666666] block">
              03 / PROTOKOL EKSEKUSI
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.035em] leading-[1.18]">
              <span className="text-[#0A0A0A]">Alur kerja 14 hari.</span>{" "}
              <span className="text-[#666666] font-normal">
                Tahapan terstruktur untuk situs web dan sistem awal. Arahkan kursor untuk melihat dokumentasi tiap tahap.
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-5 divide-x divide-[#EAEAEA] relative">
          {steps.map((s, idx) => {
            const popoverAlignClass =
              idx === 0
                ? "left-4"
                : idx === steps.length - 1
                  ? "right-4"
                  : "left-1/2 -translate-x-1/2";

            return (
              <motion.div
                key={s.step}
                tabIndex={0}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.32, delay: idx * 0.05 }}
                className="group relative bg-white hover:bg-[#FAFAFA] focus:outline-none focus-visible:bg-[#FAFAFA] p-6 flex flex-col justify-between gap-6 transition-colors cursor-default"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-[#0A0A0A] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
                />

                {/* Clean Photo Preview Popover on Hover or Keyboard Focus */}
                <div
                  className={`hidden lg:block absolute bottom-[calc(100%+12px)] ${popoverAlignClass} w-[260px] pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200 z-40`}
                >
                  <div className="rounded-xl bg-white border border-[#EAEAEA] shadow-xl p-2">
                    <div className="relative w-full h-[145px] rounded-lg overflow-hidden bg-neutral-100">
                      <Image
                        src={s.imageSrc}
                        alt={s.title}
                        fill
                        sizes="260px"
                        className="object-cover object-center"
                      />
                    </div>
                    <p className="text-[11px] font-medium text-[#666666] px-1 pt-2 pb-0.5">
                      Dokumentasi Tahap {s.step} · {s.timeline}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] font-mono text-[11px] font-semibold text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors">
                      {s.step}
                    </span>
                    <span className="font-mono text-[11px] text-[#666666]">
                      {s.timeline}
                    </span>
                  </div>
                  <h3 className="text-[15.5px] font-semibold tracking-[-0.02em] text-[#0A0A0A] leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAEAEA]/80 flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-[#0A0A0A] group-focus-within:text-[#0A0A0A] transition-colors">
                  <span>Dokumentasi</span>
                  <span>Lihat ↗</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
