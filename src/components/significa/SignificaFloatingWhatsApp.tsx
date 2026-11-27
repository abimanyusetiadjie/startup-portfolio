"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { WhatsAppIcon } from "@/components/grove/WhatsAppIcon";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

const QUICK_TOPICS = [
  {
    label: "Website & Portal Bisnis",
    meta: "Mulai Rp1,5 jt · 7–14 hari",
    message:
      "Halo Tim Abinest, saya ingin diskusi pembuatan Website Bisnis cepat (<0,8 detik).",
  },
  {
    label: "ERP, WMS, POS & SIAKAD",
    meta: "Mulai Rp4 jt · Rp0/staf",
    message:
      "Halo Tim Abinest, saya ingin diskusi pembuatan sistem kustom ERP / WMS / POS / SIAKAD.",
  },
  {
    label: "Automasi AI & WhatsApp",
    meta: "Mulai Rp5 jt · Meta API",
    message:
      "Halo Tim Abinest, saya ingin diskusi penerapan Automasi AI WhatsApp resmi & OCR faktur.",
  },
];

export function SignificaFloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const directWaHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai kebutuhan proyek digital kami."
  );

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Pintasan chat WhatsApp Abinest"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="w-[296px] sm:w-[316px] rounded-[12px] bg-white border border-[#E5E7EB] shadow-[0_24px_60px_rgba(17,19,24,0.16)] overflow-hidden"
          >
            <div className="px-5 py-4 bg-[#141519] text-white flex items-center justify-between gap-3">
              <div>
                <div className="text-[14px] font-semibold leading-tight">
                  Abinest Engineer
                </div>
                <div className="text-[12px] text-white/65 mt-0.5">
                  Respon &lt; 15 menit · Langsung ke tim inti
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup pintasan WhatsApp"
                className="w-7 h-7 text-white/70 hover:text-white inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="divide-y divide-[#EBECEF]">
              {QUICK_TOPICS.map((topic) => (
                <a
                  key={topic.label}
                  href={buildConsultationWaUrl(topic.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick({
                      source: "floating_wa_topic",
                      service: topic.label,
                    });
                    setOpen(false);
                  }}
                  className="group block px-5 py-3.5 hover:bg-[#F3F3F3] transition-colors"
                >
                  <div className="text-[14px] font-medium text-[#111111]">
                    {topic.label}
                  </div>
                  <div className="text-[12.5px] text-[#6B7280] mt-0.5">
                    {topic.meta}
                  </div>
                </a>
              ))}
            </div>

            <div className="p-4 border-t border-[#EBECEF] bg-[#F3F3F3]">
              <a
                href={directWaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick({
                    source: "floating_wa_direct",
                    label: "chat_langsung",
                  });
                  setOpen(false);
                }}
                className="clay-pill-btn w-full !h-[40px] !text-[13.5px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat langsung via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discreet Clay Matte Charcoal Circular WhatsApp Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Tutup menu WhatsApp" : "Buka chat WhatsApp Abinest"}
        className="group inline-flex items-center h-[48px] rounded-full bg-[#141519] hover:bg-[#2A2C34] text-white shadow-[0_12px_28px_rgba(20,21,25,0.22)] transition-all duration-200 cursor-pointer"
      >
        {!open && (
          <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap text-[13.5px] font-medium text-white opacity-0 group-hover:max-w-[130px] group-hover:pl-4 group-hover:pr-1 group-hover:opacity-100 transition-all duration-200">
            WhatsApp
          </span>
        )}
        <span className="w-[48px] h-[48px] rounded-full inline-flex items-center justify-center shrink-0">
          {open ? (
            <X className="w-4 h-4 text-white" />
          ) : (
            <WhatsAppIcon className="w-5 h-5 text-white" />
          )}
        </span>
      </button>
    </div>
  );
}
