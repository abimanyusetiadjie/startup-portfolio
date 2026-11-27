"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useModalEffects } from "@/components/grove/use-modal-effects";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

const SERVICE_OPTIONS = [
  { id: "website", label: "Website & Portal Bisnis", range: "Mulai Rp1,5 jt" },
  { id: "erp", label: "Sistem ERP, WMS & POS", range: "Mulai Rp4 jt" },
  { id: "siakad", label: "SIAKAD & Portal Sekolah", range: "Mulai Rp4,5 jt" },
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
    "Website & Portal Bisnis",
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
          transition={{ duration: 0.16 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#111111]/45 flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90dvh] overflow-y-auto overscroll-contain rounded-[14px] bg-white border border-[#E5E7EB] shadow-[0_32px_80px_rgba(17,19,24,0.22)]"
          >
            <div className="p-6 sm:p-8 pb-5 border-b border-[#EBECEF] flex items-start justify-between gap-4">
              <div>
                <h2
                  id="sig-quote-modal-title"
                  className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] leading-[1.15] text-[#111111]"
                >
                  Ceritakan proyek Anda
                </h2>
                <p className="text-[14.5px] text-[#6B7280] mt-1">
                  Draf ringkas langsung tersusun untuk diskusi WhatsApp bersama
                  engineer.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup formulir proyek"
                className="w-9 h-9 text-[#595959] hover:text-[#111111] inline-flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2.5">
                <span className="block text-[12.5px] font-medium text-[#595959]">
                  1. Fokus sistem yang ingin dibangun
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICE_OPTIONS.map((srv) => {
                    const active = selectedServices.includes(srv.label);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.label)}
                        className={`text-left px-4 py-3 rounded-[2px] border transition-colors cursor-pointer ${
                          active
                            ? "bg-[#111111] text-white border-[#111111]"
                            : "bg-white text-[#111111] border-[#D4D4D4] hover:border-[#111111]"
                        }`}
                      >
                        <div className="text-[14px] font-medium leading-tight">
                          {srv.label}
                        </div>
                        <div
                          className={`font-serif text-[13px] mt-0.5 ${
                            active ? "text-white/75" : "text-[#737373]"
                          }`}
                        >
                          {srv.range}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <span className="block text-[12.5px] font-medium text-[#595959]">
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
                          className={`w-full text-left px-3.5 py-2.5 rounded-[2px] border text-[13.5px] font-medium transition-colors cursor-pointer ${
                            active
                              ? "border-[#111111] bg-[#F7F7F5] text-[#111111]"
                              : "border-[#D4D4D4] bg-white text-[#595959] hover:border-[#111111]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-[12.5px] font-medium text-[#595959]">
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
                          className={`w-full text-left px-3.5 py-2.5 rounded-[2px] border text-[13.5px] font-medium transition-colors cursor-pointer ${
                            active
                              ? "border-[#111111] bg-[#F7F7F5] text-[#111111]"
                              : "border-[#D4D4D4] bg-white text-[#595959] hover:border-[#111111]"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="sig-quote-name"
                    className="block text-[12.5px] font-medium text-[#595959] mb-1.5"
                  >
                    Nama Anda (opsional)
                  </label>
                  <input
                    id="sig-quote-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="ui-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sig-quote-company"
                    className="block text-[12.5px] font-medium text-[#595959] mb-1.5"
                  >
                    Perusahaan / Instansi
                  </label>
                  <input
                    id="sig-quote-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Contoh: PT Maju Bersama"
                    className="ui-input"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="sig-quote-notes"
                  className="block text-[12.5px] font-medium text-[#595959] mb-1.5"
                >
                  Ringkasan singkat kebutuhan (opsional)
                </label>
                <textarea
                  id="sig-quote-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: butuh sistem stok 3 gudang tanpa iuran per staf..."
                  className="ui-input resize-none"
                />
              </div>

              <div className="pt-4 border-t border-[#E6E6E6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-serif text-[14px] text-[#737373]">
                  Langsung terhubung ke WhatsApp resmi Abinest.
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick({
                      source: "editorial_quote_modal",
                      service: selectedServices.join(","),
                    });
                    onClose();
                  }}
                  className="sig-btn-primary shrink-0"
                >
                  Kirim via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
