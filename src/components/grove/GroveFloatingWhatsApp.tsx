"use client";

import { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
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

  const handleOpenChat = (customText?: string) => {
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
      style={{ bottom: "calc(24px + env(safe-area-inset-bottom, 0px))" }}
      className="fixed right-4 sm:right-6 z-40 flex flex-col items-end transition-all duration-300"
    >
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-32px)] max-w-[330px] rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-slate-800 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="px-4 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Konsultasi WhatsApp
              </h4>
              <p className="text-[11.5px] text-slate-500">
                Respons langsung dalam &lt;15 menit
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full hover:bg-slate-200/70 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup panel WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {quickOptions.map((opt) => (
              <button
                key={opt.title}
                type="button"
                onClick={() => handleOpenChat(opt.text)}
                className="w-full text-left px-4 py-3 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-slate-900 truncate">
                    {opt.title}
                  </div>
                  <div className="text-[11.5px] text-slate-500 truncate">
                    {opt.desc}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-slate-100 bg-slate-50/50">
            <button
              type="button"
              onClick={() => handleOpenChat()}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Buka Chat WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
          isNearCta && !isOpen ? "scale-75 opacity-65 translate-y-2" : ""
        }`}
        aria-label="Konsultasi WhatsApp Abinest"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
