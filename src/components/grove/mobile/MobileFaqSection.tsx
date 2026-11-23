"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../faq-data";
import { findVisibleSection } from "../contact-utils";

export function MobileFaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);
  const baseId = useId();

  return (
    <section
      id="m-faq"
      data-section="faq"
      className="py-14 px-5 bg-[#F8FAFC]"
    >
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white ring-1 ring-slate-200 text-[#0F172A] font-semibold text-[11px] tracking-wide">
            Pertanyaan Umum (FAQ)
          </span>
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#0F172A] leading-tight">
            Kejelasan{" "}
            <span className="text-[#475569] font-normal">
              sebelum memulai.
            </span>
          </h2>
          <p className="text-[13.5px] text-[#475569] leading-relaxed">
            Hak milik penuh kode program, skema termin bertahap, hingga garansi pendampingan staf Anda.
          </p>
        </div>

        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-${item.id}`;
            const buttonId = `${panelId}-btn`;
            const numberLabel = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all ${
                  isOpen
                    ? "bg-white shadow-[0_14px_32px_rgba(15,23,42,0.08)] ring-1 ring-slate-300"
                    : "bg-white/95 shadow-sm ring-1 ring-slate-200/70"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full text-left px-4 py-4 flex items-start justify-between gap-3 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-mono font-bold transition-colors ${
                        isOpen
                          ? "bg-[#0F172A] text-white"
                          : "bg-slate-100 text-[#475569]"
                      }`}
                    >
                      {numberLabel}
                    </span>
                    <div className="space-y-0.5">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#475569] font-semibold">
                        {item.category}
                      </span>
                      <p className="text-[14px] font-bold text-[#0F172A] leading-snug">
                        {item.question}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-200 ${
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
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pl-[52px] space-y-2.5">
                        <p className="text-[13px] leading-relaxed text-[#475569]">
                          {item.answer}
                        </p>
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200 text-[#0F172A] px-3 py-1 text-[11px] font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
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

        <button
          type="button"
          onClick={() => {
            findVisibleSection("kontak")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 text-[#0F172A] text-sm font-semibold py-3 px-4 transition-colors cursor-pointer"
        >
          <span>Tanyakan Kebutuhan Spesifik Anda</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
