"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

export function GroveFaqAccordionSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly do you respond to critical system issues?",
      a: "Kami menjamin waktu respons di bawah 15 menit untuk tiket kategori P1/Kritis melalui direct channel engineer 24/7/365. Masalah operasional langsung ditangani oleh tim senior tanpa birokrasi perantara.",
    },
    {
      q: "Can you integrate with our existing internal engineering team?",
      a: "Tentu. Kami dapat bertindak sebagai tim infrastruktur & DevOps pelengkap bagi engineer Anda (co-managed model) ataupun mengelola seluruh lifecycle arsitektur dan pemeliharaan secara mandiri (fully-managed).",
    },
    {
      q: "What does your onboarding and migration process look like?",
      a: "Kami memulai dengan audit arsitektur menyeluruh selama 3 hari, menyusun dokumen mitigasi risiko, melakukan simulasi migrasi staging tanpa downtime, lalu beralih ke produksi dengan pemantauan intensif.",
    },
    {
      q: "Do you offer custom SLA packages for growing startups?",
      a: "Ya. Setiap institusi dan startup memiliki kebutuhan beban serta siklus kritis yang berbeda (seperti masa ujian atau kampanye penjualan). Paket SLA kami fleksibel dengan jaminan uptime 99.9% hingga 99.99%.",
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-[760px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            GOT QUESTIONS?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Ask Less. Know More.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Transparansi penuh mengenai model kerja, kecepatan respons, dan jaminan SLA kami.
          </p>
        </div>

        {/* 4 Accordion Rows with Bottom Border & Plus/Minus Toggle */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-sm sm:text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-orange-500/40 shrink-0 transition-colors">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-orange-400" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <p className="pt-3 pr-8 text-xs sm:text-sm text-zinc-400 leading-relaxed animate-fadeIn">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer FAQ: Text below */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 text-center">
          <MessageCircle className="w-4 h-4 text-orange-400" />
          <span>Still have questions?</span>
          <a
            href="#contact"
            className="text-white hover:text-orange-400 font-medium underline underline-offset-4 transition-colors"
          >
            Contact our technical team directly.
          </a>
        </div>
      </div>
    </section>
  );
}
