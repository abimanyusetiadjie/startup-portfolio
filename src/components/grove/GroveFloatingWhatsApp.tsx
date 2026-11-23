"use client";

import { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6281398589745";

export function GroveFloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNearCta, setIsNearCta] = useState(false);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll('#kontak, [data-section="kontak"], footer')
    ).filter((el): el is HTMLElement => el instanceof HTMLElement);

    if (targets.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const visibleSet = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSet.add(entry.target);
          } else {
            visibleSet.delete(entry.target);
          }
        });
        setIsNearCta(visibleSet.size > 0);
      },
      { threshold: 0.1 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const quickOptions = [
    {
      title: "Situs Web Bisnis",
      desc: "Profil perusahaan & landing page cepat",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan Situs Web Bisnis.",
    },
    {
      title: "Sistem ERP & SIAKAD",
      desc: "Kasir POS, inventori stok, & portal sekolah",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai Sistem ERP Kustom atau SIAKAD.",
    },
    {
      title: "Automasi AI & WhatsApp",
      desc: "Asisten pelanggan 24/7 & pembacaan faktur",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai Automasi AI dan WhatsApp Cloud API.",
    },
  ];

  const handleOpenChat = (customText?: string, topic?: string) => {
    trackWhatsAppClick({
      source: "floating_widget",
      label: topic ?? "direct_open",
    });
    const text =
      customText ||
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai kebutuhan sistem digital untuk perusahaan kami.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  return (
    <div
      style={{ bottom: "calc(20px + env(safe-area-inset-bottom, 0px))" }}
      className="fixed right-3.5 sm:right-6 z-40 flex flex-col items-end transition-all duration-300"
    >
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-28px)] max-w-[330px] rounded-2xl bg-white border border-[#EAEAEA] shadow-[0_16px_48px_rgba(0,0,0,0.12)] overflow-hidden text-[#0A0A0A] transition-all duration-150">
          <div className="px-4 py-3.5 border-b border-[#EAEAEA] flex items-center justify-between bg-[#FAFAFA]">
            <div>
              <h4 className="text-sm font-semibold text-[#0A0A0A]">
                Konsultasi WhatsApp
              </h4>
              <p className="text-[11.5px] text-[#666666]">
                Respons langsung dalam &lt;15 menit
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full hover:bg-neutral-200/70 text-[#666666] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup panel WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="divide-y divide-[#EAEAEA]">
            {quickOptions.map((opt) => (
              <button
                key={opt.title}
                type="button"
                onClick={() => handleOpenChat(opt.text, opt.title)}
                className="w-full text-left px-4 py-3 bg-white hover:bg-[#FAFAFA] transition-colors flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="min-w-0">
                  <div className="text-[13px] font-medium text-[#0A0A0A] truncate">
                    {opt.title}
                  </div>
                  <div className="text-[11.5px] text-[#666666] truncate">
                    {opt.desc}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 shrink-0" />
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-[#EAEAEA] bg-[#FAFAFA]">
            <button
              type="button"
              onClick={() => handleOpenChat()}
              className="w-full py-2.5 px-4 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Buka Chat WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white border border-neutral-800 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
          isNearCta && !isOpen ? "scale-75 opacity-60 translate-y-2" : ""
        }`}
        aria-label="Konsultasi WhatsApp Abinest"
      >
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366]" />
      </button>
    </div>
  );
}
