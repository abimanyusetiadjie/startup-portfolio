"use client";

import { useState, useEffect } from "react";
import { X, ArrowUpRight, CheckCheck, Clock } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6281398589745";

export function GroveFloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNearCta, setIsNearCta] = useState(false);

  useEffect(() => {
    const targets = [
      document.getElementById("kontak"),
      document.querySelector("footer"),
    ].filter((el): el is HTMLElement => el !== null);

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
      title: "1. Website Modern",
      desc: "Company profile, landing page dan portofolio bisnis",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan Website Modern untuk kebutuhan usaha/bisnis kami.",
    },
    {
      title: "2. Custom ERP & Kasir POS",
      desc: "Sistem stok barang, kasir toko dan laporan keuangan",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai Sistem ERP Kustom / Kasir POS untuk operasional bisnis kami.",
    },
    {
      title: "3. Automasi AI & WhatsApp",
      desc: "Asisten CS cerdas 24 jam nonstop dan baca dokumen",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai WhatsApp AI Agent resmi Meta dan automasi sistem.",
    },
  ];

  const handleOpenChat = (customText?: string) => {
    const text =
      customText ||
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai kebutuhan sistem digital dan teknologi untuk bisnis kami.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Action Button (Pojok Kanan Bawah dengan Safe-Area & Auto-Shrink di Area CTA) */}
      <div
        style={{ bottom: "calc(24px + env(safe-area-inset-bottom, 0px))" }}
        className="fixed right-4 sm:right-6 z-40 flex flex-col items-end transition-all duration-300"
      >
        {/* Quick Option Popover Card */}
        {isOpen && (
          <div className="mb-3 w-[calc(100vw-32px)] max-w-[320px] sm:max-w-none sm:w-[380px] rounded-2xl bg-white border border-slate-300 shadow-2xl overflow-hidden text-slate-800 animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* WhatsApp Styled Brand Header */}
            <div className="bg-[#075E54] border-b border-emerald-950/30 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-inner">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-[#075E54]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Tim Engineer Abinest
                  </h4>
                  <p className="text-[11px] text-emerald-200/90 font-medium flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online · Respons &lt;15 Menit</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-emerald-200/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Tutup jendela chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Dialog Body */}
            <div className="p-4 bg-[#F8FAFC] space-y-3">
              {/* WhatsApp Message Bubble Simulation */}
              <div className="bg-white rounded-xl rounded-tl-sm p-3.5 shadow-xs border border-slate-300/80 space-y-1.5">
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  Halo! 👋 Terima kasih telah mengunjungi Abinest.
                  <br />
                  Ada kebutuhan sistem atau website yang bisa kami bantu? Silakan pilih topik di bawah ini:
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-0.5">
                  <Clock className="w-3 h-3 text-slate-300" />
                  <span>Sekarang</span>
                  <CheckCheck className="w-3.5 h-3.5 text-sky-500 inline" />
                </div>
              </div>

              {/* 3 Quick Option Buttons in Divided List Group */}
              <div className="ui-list-group border-slate-300">
                {quickOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleOpenChat(opt.text)}
                    className="w-full text-left p-3 bg-white hover:bg-emerald-50/70 text-xs transition-all duration-150 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="font-bold text-[#0F172A] group-hover:text-[#065F46] transition-colors truncate">
                        {opt.title}
                      </div>
                      <div className="text-[10.5px] text-slate-500 truncate mt-0.5">
                        {opt.desc}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleOpenChat()}
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Mulai Chat di WhatsApp Langsung</span>
              </button>
            </div>
          </div>
        )}

        {/* The Official Floating Action Button (FAB) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative flex items-center justify-center sm:gap-3 w-12 h-12 sm:w-auto sm:h-14 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer outline-none ${
            isNearCta && !isOpen
              ? "scale-75 opacity-70 translate-y-2 sm:scale-100 sm:opacity-100 sm:translate-y-0"
              : ""
          }`}
          aria-label="Konsultasi WhatsApp Abinest"
        >
          {/* Online Radar Pulse Indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
          </span>

          {/* Authentic WhatsApp Vector Icon */}
          <WhatsAppIcon className="w-7 h-7 sm:w-6 sm:h-6 text-white shrink-0 group-hover:scale-110 transition-transform" />

          {/* Desktop Text Label */}
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[13px] font-bold text-white leading-tight">
              Chat WhatsApp
            </span>
            <span className="text-[10px] text-emerald-100 font-medium leading-none">
              Online • Respons &lt;15m
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
