"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  ABINEST_WHATSAPP_NUMBER,
  buildConsultationWaUrl,
  normalizeIndonesianPhoneForWa,
} from "./contact-utils";

export function GroveAmberContactSection() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [serviceType, setServiceType] = useState("Situs Web Bisnis");
  const [budgetRange, setBudgetRange] = useState("Fleksibel / Diskusi Terlebih Dahulu");
  const [whatsapp, setWhatsapp] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [fallbackWaUrl, setFallbackWaUrl] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  const serviceOptions = [
    "Situs Web Bisnis",
    "Sistem ERP / Toko",
    "Portal SIAKAD Sekolah",
    "Automasi AI & WhatsApp",
  ];

  const budgetOptions = [
    "Fleksibel / Diskusi Terlebih Dahulu",
    "< Rp5 juta (Situs Web / Landing Page)",
    "Rp5 juta – Rp15 juta (Sistem Awal)",
    "Rp15 juta – Rp45 juta (ERP / SIAKAD)",
    "> Rp45 juta (Sistem Skala Perusahaan)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { formatted, isValid } = normalizeIndonesianPhoneForWa(whatsapp);
    if (!isValid) {
      setPhoneError("Masukkan nomor WhatsApp aktif minimal 9 digit (contoh: 81234567890).");
      return;
    }

    setPhoneError(null);
    const noteLine = notes.trim() ? `\n• Catatan Singkat: ${notes.trim()}` : "";

    const text = `Halo Tim Abinest,

Saya ingin berkonsultasi mengenai kebutuhan sistem berikut:
• Kebutuhan Utama: ${serviceType}
• Nama Lengkap: ${name.trim() || "-"}
• Perusahaan / Instansi: ${institution.trim() || "-"}
• Nomor WhatsApp: ${formatted}
• Perkiraan Anggaran: ${budgetRange}${noteLine}

Mohon informasi tahapan konsultasi dan estimasi biayanya. Terima kasih.`;

    const waUrl = buildConsultationWaUrl(text);
    setFallbackWaUrl(waUrl);
    trackWhatsAppClick({
      source: "contact_form_desktop",
      service: serviceType,
      label: budgetRange,
    });
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="kontak"
      data-section="kontak"
      className="scroll-mt-20 py-24 bg-white relative overflow-hidden"
    >
      {/* Ambient Stripe Chromatic Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[8%] w-[520px] h-[360px] rounded-full bg-gradient-to-tr from-[#635BFF]/15 via-[#00D4FF]/15 to-emerald-400/15 blur-[95px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -left-16 w-[360px] h-[300px] rounded-full bg-indigo-100/60 blur-[90px]"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Kolom Kiri: Pesan Ringkas & Kontak Langsung */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-[#635BFF] font-semibold text-xs tracking-wide">
                Diskusi Arsitektur
              </span>
              <h2 className="text-3xl sm:text-[38px] font-bold tracking-[-0.035em] text-[#0A2540] leading-[1.12]">
                Siap bangun sistem{" "}
                <span className="bg-gradient-to-r from-[#635BFF] via-[#0EA5E9] to-[#10B981] bg-clip-text text-transparent">
                  tanpa ribet?
                </span>
              </h2>
              <p className="text-[15px] text-[#425466] leading-relaxed">
                Ceritakan kebutuhan sistem atau kendala operasional di usaha Anda. Tim rekayasa kami siap menanggapi dalam 15 menit pada jam kerja.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F6F9FC] p-5 ring-1 ring-slate-900/[0.05] space-y-3 text-sm text-[#425466]">
              <div>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${ABINEST_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "contact_sidebar_number",
                      label: "direct_wa_link",
                    })
                  }
                  className="font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors"
                >
                  +62 813-9858-9745
                </a>
              </div>
              <div>
                Surel Resmi:{" "}
                <a
                  href="mailto:halo@abinest.id"
                  className="font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors"
                >
                  halo@abinest.id
                </a>
              </div>
              <div className="inline-flex items-center gap-2 font-mono text-[11.5px] whitespace-nowrap text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Sen–Sab, 08.00–17.00 WIB · Jakarta &amp; Surabaya</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Floating Frosted Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] bg-white shadow-[0_24px_64px_rgba(10,37,64,0.09)] ring-1 ring-slate-900/[0.06] p-6 sm:p-8 space-y-5"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#0A2540] block">
                  Kebutuhan Sistem
                </span>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = serviceType === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setServiceType(opt)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-gradient-to-r from-[#635BFF] to-[#4F46E5] text-white shadow-md shadow-indigo-500/25"
                            : "bg-[#F6F9FC] text-[#425466] hover:bg-indigo-50 hover:text-[#635BFF]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-[#0A2540] block">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Andi Pratama"
                    className="ui-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-institution" className="text-xs font-semibold text-[#0A2540] block">
                    Perusahaan / Instansi
                  </label>
                  <input
                    id="contact-institution"
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Contoh: Toko Makmur / SMA 1"
                    className="ui-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-wa" className="text-xs font-semibold text-[#0A2540] block">
                    Nomor WhatsApp Aktif
                  </label>
                  <div
                    className={`flex rounded-xl border overflow-hidden bg-white transition-all ${
                      phoneError
                        ? "border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20"
                        : "border-slate-200 focus-within:border-[#635BFF] focus-within:ring-2 focus-within:ring-[#635BFF]/20"
                    }`}
                  >
                    <span className="inline-flex items-center px-3 bg-[#F6F9FC] border-r border-slate-200 text-xs font-semibold text-[#425466] select-none">
                      +62
                    </span>
                    <input
                      id="contact-wa"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => {
                        setWhatsapp(e.target.value);
                        if (phoneError) setPhoneError(null);
                      }}
                      placeholder="812-3456-7890"
                      className="w-full px-3 py-2.5 text-sm text-[#0A2540] placeholder:text-slate-400 outline-none bg-transparent"
                    />
                  </div>
                  {phoneError && (
                    <p className="text-[11.5px] font-medium text-rose-600">
                      {phoneError}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-budget" className="text-xs font-semibold text-[#0A2540] block">
                    Perkiraan Anggaran (Opsional)
                  </label>
                  <select
                    id="contact-budget"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="ui-input cursor-pointer"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-notes" className="text-xs font-semibold text-[#0A2540] block">
                  Catatan Singkat (Opsional)
                </label>
                <textarea
                  id="contact-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Membutuhkan situs web profil perusahaan atau sistem stok multi-gudang..."
                  className="ui-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#635BFF] via-[#4F46E5] to-[#0EA5E9] shadow-[0_12px_30px_rgba(99,91,255,0.28)] hover:shadow-[0_16px_38px_rgba(99,91,255,0.38)] hover:-translate-y-0.5 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Kirim via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {fallbackWaUrl && (
                <p className="text-center text-xs text-[#425466]">
                  Jendela WhatsApp tidak terbuka otomatis?{" "}
                  <a
                    href={fallbackWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#635BFF] hover:underline"
                  >
                    Buka chat WhatsApp di sini →
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
