"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { useModalEffects } from "@/components/grove/use-modal-effects";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

const SERVICE_OPTIONS = [
  { id: "website", label: "Website Bisnis", range: "Mulai Rp1,5–3,5 jt" },
  { id: "erp", label: "Sistem ERP & POS", range: "Mulai Rp4–12 jt" },
  { id: "siakad", label: "SIAKAD & Ujian CBT", range: "Mulai Rp4,5–9,5 jt" },
  { id: "ai-wa", label: "Automasi AI & WhatsApp", range: "Mulai Rp5 jt" },
] as const;

const SCHEME_OPTIONS = [
  { id: "beli-putus", label: "Beli Putus (100% Hak Milik)" },
  { id: "terima-beres", label: "Terima Beres (Bulanan)" },
] as const;

const TIMELINE_OPTIONS = [
  "Secepatnya (7–14 hari)",
  "1 – 2 Bulan",
  "Masih eksplorasi",
] as const;

export function SignificaQuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Website Bisnis",
  ]);
  const [scheme, setScheme] = useState<string>("Beli Putus (100% Hak Milik)");
  const [timeline, setTimeline] = useState<string>("Secepatnya (7–14 hari)");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  useModalEffects(open, onClose);

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.length > 1
          ? prev.filter((item) => item !== label)
          : prev
        : [...prev, label]
    );
  };

  const waHref = useMemo(() => {
    const lines = [
      "Halo Tim Abinest, saya ingin memulai proyek baru dengan ringkasan berikut:",
      "",
      `• Layanan: ${selectedServices.join(", ")}`,
      `• Skema: ${scheme}`,
      `• Target waktu: ${timeline}`,
    ];
    if (name.trim()) lines.push(`• Nama: ${name.trim()}`);
    if (company.trim()) lines.push(`• Usaha/Instansi: ${company.trim()}`);
    if (notes.trim()) lines.push(`• Catatan: ${notes.trim()}`);
    lines.push("", "Mohon estimasi biaya & jadwal diskusi singkatnya.");
    return buildConsultationWaUrl(lines.join("\n"));
  }, [selectedServices, scheme, timeline, name, company, notes]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sig-quote-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#171717]/45 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90dvh] overflow-y-auto overscroll-contain rounded-[24px] bg-[#F7F7F7] border border-[#E8E8E8] shadow-[0_32px_72px_rgba(23,23,23,0.22)]"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 pb-5 border-b border-[#E8E8E8] flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                  Mulai proyek · Estimasi transparan &lt; 15 menit
                </p>
                <h2
                  id="sig-quote-modal-title"
                  className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.02em] leading-[1.12] text-[#171717] mt-1"
                >
                  Ceritakan proyek Anda.
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup formulir proyek"
                className="w-10 h-10 rounded-[14px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] hover:ring-4 hover:ring-[#FFD124]/25 text-[#171717] inline-flex items-center justify-center shrink-0 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* 1. Service Chips */}
              <div className="space-y-2.5">
                <span className="block text-[12px] font-mono uppercase tracking-wider text-[#6F6F71]">
                  1. Apa yang ingin dibangun?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICE_OPTIONS.map((srv) => {
                    const active = selectedServices.includes(srv.label);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.label)}
                        className={`text-left px-4 py-3 rounded-[16px] border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          active
                            ? "bg-[#171717] text-[#F7F7F7] border-[#171717]"
                            : "bg-white text-[#171717] border-[#E8E8E8] hover:border-[#FFD124]"
                        }`}
                      >
                        <div>
                          <div className="text-[14.5px] font-medium leading-tight">
                            {srv.label}
                          </div>
                          <div
                            className={`text-[12px] font-mono mt-0.5 ${
                              active ? "text-[#F7F7F7]/70" : "text-[#6F6F71]"
                            }`}
                          >
                            {srv.range}
                          </div>
                        </div>
                        <span
                          className={`w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0 ${
                            active
                              ? "bg-[#FFD124] text-[#171717]"
                              : "border border-[#E8E8E8]"
                          }`}
                        >
                          {active && <Check className="w-3 h-3 stroke-[2.5]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Scheme & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <span className="block text-[12px] font-mono uppercase tracking-wider text-[#6F6F71]">
                    2. Skema kerja sama
                  </span>
                  <div className="space-y-2">
                    {SCHEME_OPTIONS.map((opt) => {
                      const active = scheme === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setScheme(opt.label)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-[12px] border text-[13.5px] font-medium transition-all cursor-pointer ${
                            active
                              ? "bg-white border-[#171717] text-[#171717] ring-2 ring-[#FFD124]/60"
                              : "bg-white border-[#E8E8E8] text-[#6F6F71] hover:text-[#171717]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-[12px] font-mono uppercase tracking-wider text-[#6F6F71]">
                    3. Target jadwal rilis
                  </span>
                  <div className="space-y-2">
                    {TIMELINE_OPTIONS.map((t) => {
                      const active = timeline === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeline(t)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-[12px] border text-[13.5px] font-medium transition-all cursor-pointer ${
                            active
                              ? "bg-white border-[#171717] text-[#171717] ring-2 ring-[#FFD124]/60"
                              : "bg-white border-[#E8E8E8] text-[#6F6F71] hover:text-[#171717]"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 3. Optional Contact Context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="sig-quote-name"
                    className="block text-[12px] font-mono uppercase tracking-wider text-[#6F6F71] mb-1.5"
                  >
                    Nama Anda (opsional)
                  </label>
                  <input
                    id="sig-quote-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="ui-input bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sig-quote-company"
                    className="block text-[12px] font-mono uppercase tracking-wider text-[#6F6F71] mb-1.5"
                  >
                    Perusahaan / Sekolah
                  </label>
                  <input
                    id="sig-quote-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Contoh: PT Maju Bersama"
                    className="ui-input bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="sig-quote-notes"
                  className="block text-[12px] font-mono uppercase tracking-wider text-[#6F6F71] mb-1.5"
                >
                  Ringkasan singkat kebutuhan (opsional)
                </label>
                <textarea
                  id="sig-quote-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: butuh web profil baru atau sistem stok 3 gudang tanpa iuran per staf..."
                  className="ui-input bg-white resize-none"
                />
              </div>

              {/* Submit Footer */}
              <div className="pt-2 border-t border-[#E8E8E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[13px] text-[#6F6F71]">
                  Draf terstruktur langsung terbuka di WhatsApp resmi Abinest.
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick({
                      source: "significa_quote_modal",
                      service: selectedServices.join(","),
                    });
                    onClose();
                  }}
                  className="sig-btn-primary shrink-0"
                >
                  <span>Kirim ringkasan via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
