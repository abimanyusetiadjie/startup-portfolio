"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_ITEMS } from "@/components/grove/faq-data";

export function SignificaAboutAndFaq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section id="faq" className="scroll-mt-8 bg-white">
      <div className="ed-container">
        <div className="border-t border-[#E6E6E6] py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-[15px] font-semibold text-[#111111]">
              Pertanyaan
            </h2>
            <p className="font-serif text-[15px] leading-relaxed text-[#737373] max-w-[220px]">
              Hal mendasar seputar hak milik kode, biaya, dan garansi.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#E6E6E6] border-t border-b border-[#E6E6E6]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-${item.id}`;
              const btnId = `${panelId}-btn`;

              return (
                <div key={item.id}>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full py-5 flex items-baseline justify-between gap-6 text-left cursor-pointer focus:outline-none group"
                  >
                    <span className="text-[16.5px] sm:text-[17.5px] font-medium leading-[1.4] text-[#111111] group-hover:text-[#D13424] transition-colors">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-[16px] text-[#737373] group-hover:text-[#111111] shrink-0 select-none"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-6 font-serif text-[16px] leading-[1.65] text-[#4A4A4A]">
                          {item.answer}
                        </p>
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
