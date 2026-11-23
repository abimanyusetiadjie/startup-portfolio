"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "./faq-data";
import { findVisibleSection } from "./contact-utils";

export function GroveFaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);
  const baseId = useId();

  const handleScrollToContact = () => {
    findVisibleSection("kontak")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="faq"
      data-section="faq"
      className="scroll-mt-20 py-24 bg-[#F8FAFC] relative z-10 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left sticky column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white ring-1 ring-slate-200 text-[#0F172A] font-semibold text-xs tracking-wide">
                Kejelasan Kerja Sama
              </span>
              <h2 className="text-3xl md:text-[36px] font-bold tracking-[-0.035em] text-[#0F172A] leading-[1.12]">
                Pertanyaan yang{" "}
                <span className="text-[#475569] font-normal">
                  sering ditanyakan.
                </span>
              </h2>
              <p className="text-[14.5px] text-[#475569] leading-relaxed">
                Kejelasan penuh mengenai hak milik kode sumber, skema pembayaran bertahap,
                garansi pascarilis, hingga kesiapan dokumen legal perusahaan Anda.
              </p>
            </div>

            <div className="rounded-[24px] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80 p-6 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-[15.5px] font-bold text-[#0F172A]">
                  Masih Ada Pertanyaan Teknis?
                </h3>
                <p className="text-[13.5px] text-[#475569] leading-relaxed">
                  Diskusikan alur kerja, kebutuhan integrasi, atau penyusunan NDA langsung bersama tim engineering kami.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 transition-all cursor-pointer"
                >
                  <span>Konsultasi Langsung</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/audit-gratis"
                  className="inline-flex items-center justify-center rounded-full bg-[#F8FAFC] hover:bg-slate-100 ring-1 ring-slate-200 text-[#0F172A] text-xs font-semibold px-5 py-2.5 transition-colors"
                >
                  Ajukan Audit Sistem Gratis
                </Link>
              </div>
            </div>
          </div>

          {/* Right floating animated accordion list */}
          <div className="lg:col-span-8 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-${item.id}`;
              const buttonId = `${panelId}-btn`;
              const numberLabel = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-200 ${
                    isOpen
                      ? "bg-white shadow-[0_16px_38px_rgba(15,23,42,0.08)] ring-1 ring-slate-300"
                      : "bg-white/95 shadow-sm ring-1 ring-slate-200/70 hover:bg-white"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-mono font-bold transition-colors ${
                          isOpen
                            ? "bg-[#0F172A] text-white"
                            : "bg-slate-100 text-[#475569]"
                        }`}
                      >
                        {numberLabel}
                      </span>
                      <div className="space-y-1">
                        <span className="inline-block font-mono text-[10.5px] uppercase tracking-wider text-[#475569] font-semibold">
                          {item.category}
                        </span>
                        <p className="text-[15.5px] font-bold tracking-[-0.015em] text-[#0F172A] leading-snug">
                          {item.question}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 mt-1.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#0F172A]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[68px] space-y-3">
                          <p className="text-[14px] leading-relaxed text-[#475569]">
                            {item.answer}
                          </p>
                          <div className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200 text-[#0F172A] px-3.5 py-1.5 text-xs font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item.highlight}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
