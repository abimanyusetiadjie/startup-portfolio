"use client";

import { useId, useState } from "react";
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
      className="py-12 px-5 bg-white border-b border-[#EAEAEA]"
    >
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-1.5">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#666666] block">
            04 / PERTANYAAN UMUM (FAQ)
          </span>
          <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-tight">
            Kejelasan sebelum memulai.
          </h2>
          <p className="text-[13.5px] text-[#666666] leading-relaxed">
            Hak milik penuh kode program, skema termin bertahap, hingga garansi pendampingan staf Anda.
          </p>
        </div>

        <div className="rounded-2xl border border-[#EAEAEA] divide-y divide-[#EAEAEA] overflow-hidden bg-white">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-${item.id}`;
            const buttonId = `${panelId}-btn`;
            const numberLabel = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={isOpen ? "bg-[#FAFAFA]/70" : "bg-white"}
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
                      className={`mt-0.5 shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-mono font-medium ${
                        isOpen
                          ? "bg-[#0A0A0A] text-white"
                          : "bg-[#FAFAFA] text-[#666666] border border-[#EAEAEA]"
                      }`}
                    >
                      {numberLabel}
                    </span>
                    <div className="space-y-0.5">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#666666]">
                        {item.category}
                      </span>
                      <p className="text-[14px] font-semibold text-[#0A0A0A] leading-snug">
                        {item.question}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 mt-1 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0A0A0A]" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-4 pb-4 pl-[52px] space-y-2.5"
                >
                  <p className="text-[13px] leading-relaxed text-[#666666]">
                    {item.answer}
                  </p>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#EAEAEA] px-2.5 py-1 text-[11px] font-medium text-[#0A0A0A]">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
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
          className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAFA] hover:bg-neutral-100 text-[#0A0A0A] text-sm font-medium py-3 px-4 transition-colors cursor-pointer"
        >
          <span>Tanyakan Kebutuhan Spesifik Anda</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
