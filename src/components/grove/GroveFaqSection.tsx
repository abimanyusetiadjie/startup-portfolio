"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, HelpCircle } from "lucide-react";
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
      className="py-24 bg-[#f8fafc] border-t border-slate-200/60 relative z-10"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left sticky column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                <HelpCircle className="w-4 h-4" />
                <span>Transparansi & Kesiapan Kerja Sama</span>
              </div>
              <h2 className="text-3xl md:text-[38px] font-semibold tracking-tight text-[#0F172A] leading-[1.12]">
                Pertanyaan yang Sering Ditanyakan
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Kejelasan penuh mengenai hak milik kode sumber, skema pembayaran bertahap,
                garansi pascarilis, hingga kesiapan dokumen legal perusahaan dan yayasan Anda.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-[#0F172A]">
                  Masih Ada Pertanyaan Teknis?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Diskusikan alur kerja, kebutuhan integrasi, atau penyusunan NDA langsung bersama tim engineering kami.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
                >
                  <span>Konsultasi Langsung</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/audit-gratis"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-medium px-5 py-2.5 transition-colors"
                >
                  Ajukan Audit Sistem Gratis
                </Link>
              </div>
            </div>
          </div>

          {/* Right accordion list */}
          <div className="lg:col-span-8 space-y-3.5">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-${item.id}`;
              const buttonId = `${panelId}-btn`;
              const numberLabel = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-blue-200 bg-white shadow-sm ring-1 ring-blue-100/80"
                      : "border-slate-200/80 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 rounded-2xl"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-mono font-semibold ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {numberLabel}
                      </span>
                      <div className="space-y-1">
                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                          {item.category}
                        </span>
                        <p className="text-[16px] font-semibold text-[#0F172A] leading-snug">
                          {item.question}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 mt-1 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-6 pb-6 pl-[68px] space-y-3"
                  >
                    <p className="text-[14.5px] leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
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
