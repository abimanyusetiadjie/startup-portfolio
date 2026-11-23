"use client";

import { useId, useState } from "react";
import Link from "next/link";
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
      className="bg-[#FAFAFA] border-b border-[#EAEAEA] relative z-10"
    >
      <div className="max-w-[1200px] mx-auto border-x border-[#EAEAEA] bg-white px-8 py-20 relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left sticky column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#666666]">
                05 / KEJELASAN KERJA SAMA
              </div>
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.035em] text-[#0A0A0A] leading-[1.15]">
                Pertanyaan yang sering ditanyakan.
              </h2>
              <p className="text-[14.5px] text-[#666666] leading-relaxed">
                Kejelasan penuh mengenai hak milik kode sumber, skema pembayaran bertahap,
                garansi pascarilis, hingga kesiapan dokumen legal perusahaan Anda.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] p-6 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-[15px] font-semibold text-[#0A0A0A]">
                  Masih Ada Pertanyaan Teknis?
                </h3>
                <p className="text-[13.5px] text-[#666666] leading-relaxed">
                  Diskusikan alur kerja, kebutuhan integrasi, atau penyusunan NDA langsung bersama tim engineering kami.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs font-medium px-5 py-2.5 transition-colors cursor-pointer"
                >
                  <span>Konsultasi Langsung</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/audit-gratis"
                  className="inline-flex items-center justify-center rounded-full border border-[#EAEAEA] hover:bg-neutral-100/70 bg-white text-[#0A0A0A] text-xs font-medium px-5 py-2.5 transition-colors"
                >
                  Ajukan Audit Sistem Gratis
                </Link>
              </div>
            </div>
          </div>

          {/* Right accordion list */}
          <div className="lg:col-span-8 divide-y divide-[#EAEAEA] border border-[#EAEAEA] rounded-2xl overflow-hidden bg-white">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-${item.id}`;
              const buttonId = `${panelId}-btn`;
              const numberLabel = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={item.id}
                  className={`transition-colors ${
                    isOpen ? "bg-[#FAFAFA]/60" : "bg-white hover:bg-[#FAFAFA]/40"
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
                        className={`mt-0.5 shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-mono font-medium ${
                          isOpen
                            ? "bg-[#0A0A0A] text-white"
                            : "bg-[#FAFAFA] border border-[#EAEAEA] text-[#666666]"
                        }`}
                      >
                        {numberLabel}
                      </span>
                      <div className="space-y-1">
                        <span className="inline-block font-mono text-[10.5px] uppercase tracking-wider text-[#666666]">
                          {item.category}
                        </span>
                        <p className="text-[15.5px] font-semibold tracking-[-0.015em] text-[#0A0A0A] leading-snug">
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
                    className="px-6 pb-6 pl-16 space-y-3"
                  >
                    <p className="text-[14px] leading-relaxed text-[#666666]">
                      {item.answer}
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#EAEAEA] px-3 py-1 text-xs font-medium text-[#0A0A0A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
