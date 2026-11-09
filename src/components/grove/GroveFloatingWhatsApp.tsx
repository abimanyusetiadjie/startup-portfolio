"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, ArrowUpRight, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveFloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showStickyMobileBar, setShowStickyMobileBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollRatio = window.scrollY / scrollHeight;
        setShowStickyMobileBar(scrollRatio >= 0.35);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const quickOptions = [
    {
      title: "1. Jasa Pembuatan Website Modern (<0.8s, Next.js 15)",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai Jasa Pembuatan Website Modern berkecepatan tinggi (<0.8s) dan SEO 100/100.",
    },
    {
      title: "2. Sistem ERP Enterprise Kustom (Multi-Gudang & Finansial)",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan Sistem ERP Kustom Multi-Gudang & Inventori tanpa biaya lisensi bulanan.",
    },
    {
      title: "3. Automasi AI & Machine Learning (Document AI + WhatsApp)",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai Automasi AI (Document AI invoice OCR & WhatsApp AI Agent Meta resmi).",
    },
  ];

  const handleOpenChat = (customText?: string) => {
    const text =
      customText ||
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai kebutuhan sistem digital institusi/perusahaan kami.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  return (
    <>
      {/* Sticky Mobile CTA Bar (Appears after scrolling on Mobile) */}
      {showStickyMobileBar && (
        <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-[0_-8px_25px_rgba(15,23,42,0.08)] flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] font-bold text-[#0F172A] truncate">
              Siap Diskusi Kebutuhan Anda?
            </div>
            <div className="text-[10px] text-blue-700 font-medium truncate">
              ● Respons &lt;15 menit · Tanpa komitmen
            </div>
          </div>
          <a
            href="#kontak"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-md transition-colors"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating WhatsApp Button (Bottom Right) */}
      <div
        className={`fixed right-5 z-50 flex flex-col items-end transition-all duration-300 ${
          showStickyMobileBar ? "bottom-20 sm:bottom-6" : "bottom-6"
        }`}
      >
        {/* Quick Option Popover Card */}
        {isOpen && (
          <div className="mb-3 w-[310px] sm:w-[360px] rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 text-slate-800 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#0F172A]">
                  Konsultasi Langsung Engineer Abinest
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700"
                aria-label="Tutup jendela chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 py-3 leading-relaxed">
              Pilih topik kebutuhan Anda di bawah ini untuk langsung terhubung via WhatsApp (Respons &lt;15 menit di jam kerja):
            </p>

            <div className="space-y-2">
              {quickOptions.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOpenChat(opt.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 text-xs font-semibold text-[#0F172A] transition-all flex items-center justify-between group"
                >
                  <span>{opt.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1D4ED8] transition-colors shrink-0 ml-2" />
                </button>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Gratis diskusi &amp; tanpa komitmen</span>
              <button
                type="button"
                onClick={() => handleOpenChat()}
                className="text-[#2563EB] font-bold hover:underline"
              >
                Chat Langsung →
              </button>
            </div>
          </div>
        )}

        {/* Floating Action Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] hover:from-[#0E7166] hover:to-[#20BA5A] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105"
          aria-label="Konsultasi WhatsApp Abinest"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold hidden sm:inline">
            Chat Engineer (&lt;15m)
          </span>
        </button>
      </div>
    </>
  );
}
