"use client";

import { useId, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../faq-data";
import { findVisibleSection } from "../contact-utils";

export function MobileFaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);
  const baseId = useId();

  return (
    <section
      id="m-faq"
      data-section="faq"
      className="py-12 px-5 bg-white border-t border-slate-100"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan Umum (FAQ)</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#0F172A] leading-tight">
            Kejelasan Sebelum Memulai
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Hak milik penuh kode program, skema termin bertahap, hingga garansi pendampingan staf Anda.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-${item.id}`;
            const buttonId = `${panelId}-btn`;
            const numberLabel = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-blue-200 bg-[#f8fafc]"
                    : "border-slate-200/80 bg-[#f8fafc]"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full text-left px-4 py-4 flex items-start justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 rounded-2xl"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-mono font-semibold ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-white text-slate-500 border border-slate-200"
                      }`}
                    >
                      {numberLabel}
                    </span>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                        {item.category}
                      </span>
                      <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                        {item.question}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 mt-1 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-4 pb-4 space-y-2.5"
                >
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
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
          className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-[#f8fafc] hover:bg-slate-100 text-[#0F172A] text-sm font-semibold py-3 px-4 transition-colors"
        >
          <span>Tanyakan Kebutuhan Spesifik Anda</span>
          <ArrowRight className="w-4 h-4 text-blue-600" />
        </button>
      </div>
    </section>
  );
}
