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
      className="py-14 px-5 bg-[#F4F8FB]"
    >
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] font-semibold text-[11px] tracking-wide">
            Pertanyaan Umum (FAQ)
          </span>
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#081629] leading-tight">
            Kejelasan{" "}
            <span className="bg-gradient-to-r from-[#0284C7] to-[#00C9A7] bg-clip-text text-transparent">
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
                    ? "bg-white shadow-[0_14px_32px_rgba(2,132,199,0.1)] ring-1 ring-sky-500/25"
                    : "bg-white/95 shadow-[0_6px_18px_rgba(8,22,41,0.04)] ring-1 ring-slate-900/[0.04]"
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
                          ? "bg-gradient-to-br from-[#0284C7] to-[#00C9A7] text-white"
                          : "bg-sky-50 text-[#0284C7]"
                      }`}
                    >
                      {numberLabel}
                    </span>
                    <div className="space-y-0.5">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#0284C7] font-semibold">
                        {item.category}
                      </span>
                      <p className="text-[14px] font-bold text-[#081629] leading-snug">
                        {item.question}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0284C7]" : "text-slate-400"
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
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 text-teal-800 px-3 py-1 text-[11px] font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-[#0D9488] shrink-0" />
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
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white shadow-sm ring-1 ring-slate-900/[0.06] hover:bg-sky-50 text-[#0284C7] text-sm font-semibold py-3 px-4 transition-colors cursor-pointer"
        >
          <span>Tanyakan Kebutuhan Spesifik Anda</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
