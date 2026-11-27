"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { useModalEffects } from "@/components/grove/use-modal-effects";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

const SERVICE_OPTIONS = [
  { id: "website", label: "Website Bisnis", range: "Mulai Rp1,5 jt" },
  { id: "erp", label: "Sistem ERP & POS", range: "Mulai Rp4 jt" },
  { id: "siakad", label: "SIAKAD & Ujian CBT", range: "Mulai Rp4,5 jt" },
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
          className="fixed inset-0 z-50 bg-[#0F172A]/45 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.985 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90dvh] overflow-y-auto overscroll-contain rounded-[20px] bg-white border border-[#E2E8F0] shadow-[0_32px_72px_rgba(15,23,42,0.2)]"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 pb-5 border-b border-[#E2E8F0] flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#0D7A67]">
                  Mulai Proyek · Estimasi Transparan
                </p>
                <h2
                  id="sig-quote-modal-title"
                  className="text-[26px] sm:text-[30px] font-bold tracking-[-0.02em] leading-[1.15] text-[#0F172A] mt-1"
                >
                  Ceritakan proyek Anda.
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup formulir proyek"
                className="w-9 h-9 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0D7A67] text-[#0F172A] inline-flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2.5">
                <span className="block text-[12px] font-semibold uppercase tracking-wider text-[#64748B]">
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
                        className={`text-left px-4 py-3 rounded-[12px] border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          active
                            ? "bg-[#0D7A67]/8 text-[#0F172A] border-[#0D7A67]"
                            : "bg-white text-[#0F172A] border-[#E2E8F0] hover:border-[#0D7A67]/60"
                        }`}
                      >
                        <div>
                          <div className="text-[14.5px] font-semibold leading-tight">
                            {srv.label}
                          </div>
                          <div className="text-[12px] text-[#64748B] mt-0.5">
                            {srv.range}
                          </div>
                        </div>
                        <span
                          className={`w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0 ${
                            active
                              ? "bg-[#0D7A67] text-white"
                              : "border border-[#CBD5E1]"
                          }`}
                        >
                          {active && <Check className="w-3 h-3 stroke-[2.5]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <span className="block text-[12px] font-semibold uppercase tracking-wider text-[#64748B]">
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
                          className={`w-full text-left px-3.5 py-2.5 rounded-[10px] border text-[13.5px] font-medium transition-all cursor-pointer ${
                            active
                              ? "bg-[#0D7A67]/8 border-[#0D7A67] text-[#0F172A]"
                              : "bg-white border-[#E2E8F0] text-[#475569] hover:text-[#0F172A]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-[12px] font-semibold uppercase tracking-wider text-[#64748B]">
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
                          className={`w-full text-left px-3.5 py-2.5 rounded-[10px] border text-[13.5px] font-medium transition-all cursor-pointer ${
                            active
                              ? "bg-[#0D7A67]/8 border-[#0D7A67] text-[#0F172A]"
                              : "bg-white border-[#E2E8F0] text-[#475569] hover:text-[#0F172A]"
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
                    className="block text-[12px] font-semibold uppercase tracking-wider text-[#64748B] mb-1.5"
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
                    className="block text-[12px] font-semibold uppercase tracking-wider text-[#64748B] mb-1.5"
                  >
                    Perusahaan / Sekolah
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
                  className="block text-[12px] font-semibold uppercase tracking-wider text-[#64748B] mb-1.5"
                >
                  Ringkasan singkat kebutuhan (opsional)
                </label>
                <textarea
                  id="sig-quote-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: butuh web profil baru atau sistem stok 3 gudang tanpa iuran per staf..."
                  className="ui-input resize-none"
                />
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[13px] text-[#64748B]">
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
