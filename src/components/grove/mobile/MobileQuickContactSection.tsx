"use client";

import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

const WHATSAPP_NUMBER = "6281398589745";

function normalizeWaPhone(raw: string): string {
  const cleaned = raw.trim();
  if (!cleaned) return "-";
  if (cleaned.startsWith("+62") || cleaned.startsWith("62") || cleaned.startsWith("0")) {
    return cleaned;
  }
  return `0${cleaned}`;
}

export function MobileQuickContactSection() {
  const [serviceType, setServiceType] = useState("Situs Web Bisnis");
  const [nameAndCompany, setNameAndCompany] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [showExtras, setShowExtras] = useState(false);
  const [budget, setBudget] = useState("Fleksibel / Diskusi Terlebih Dahulu");
  const [notes, setNotes] = useState("");

  const serviceChips = [
    "Situs Web Bisnis",
    "Sistem ERP / Toko",
    "SIAKAD Sekolah",
    "Automasi AI & WhatsApp",
  ];

  const budgetChoices = [
    "Fleksibel / Diskusi Terlebih Dahulu",
    "< Rp5 juta (Situs Web / Landing Page)",
    "Rp5 juta – Rp15 juta (Sistem Awal)",
    "Rp15 juta – Rp45 juta (ERP / SIAKAD)",
    "> Rp45 juta (Sistem Skala Perusahaan)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPhone = normalizeWaPhone(whatsapp);
    const extraParts = [
      showExtras ? `• Perkiraan Anggaran: ${budget}` : "",
      showExtras && notes.trim() ? `• Catatan: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const message = `Halo Tim Abinest,

Saya ingin berkonsultasi mengenai kebutuhan sistem:
• Kebutuhan: ${serviceType}
• Nama & Perusahaan/Instansi: ${nameAndCompany.trim() || "-"}
• Nomor WhatsApp: ${formattedPhone}
${extraParts ? `${extraParts}\n` : ""}
Mohon arahan dan estimasi pengerjaannya. Terima kasih.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="m-kontak"
      data-section="kontak"
      className="bg-white py-10 px-5"
    >
      <div className="max-w-md mx-auto space-y-5">
        <div className="space-y-1">
          <h2 className="text-[22px] font-extrabold tracking-tight text-slate-900">
            Mulai Konsultasi
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Respons langsung oleh engineer kami dalam &lt;15 menit.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-5 space-y-4"
        >
          <div className="space-y-2">
            <span className="text-[12.5px] font-semibold text-slate-700 block">
              Kebutuhan Utama
            </span>
            <div className="flex flex-wrap gap-2">
              {serviceChips.map((chip) => {
                const active = serviceType === chip;
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setServiceType(chip)}
                    className={`px-3.5 py-2 rounded-xl text-[12.5px] font-semibold transition-all cursor-pointer ${
                      active
                        ? "bg-slate-900 text-white shadow-2xs"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="m-contact-name"
              className="text-[12.5px] font-semibold text-slate-700 block"
            >
              Nama &amp; Usaha / Instansi
            </label>
            <input
              id="m-contact-name"
              type="text"
              required
              value={nameAndCompany}
              onChange={(e) => setNameAndCompany(e.target.value)}
              placeholder="Contoh: Budi — Toko Makmur"
              className="w-full h-11 px-3.5 rounded-xl bg-white border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-500/15"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="m-contact-wa"
              className="text-[12.5px] font-semibold text-slate-700 block"
            >
              Nomor WhatsApp Aktif
            </label>
            <div className="flex h-11 rounded-xl bg-white border border-slate-200 focus-within:border-blue-600 focus-within:ring-3 focus-within:ring-blue-500/15 overflow-hidden">
              <span className="inline-flex items-center px-3 bg-slate-100 border-r border-slate-200 text-[13px] font-semibold text-slate-600 select-none">
                +62
              </span>
              <input
                id="m-contact-wa"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="812-3456-7890"
                className="w-full px-3 text-[14px] text-slate-900 placeholder:text-slate-400 bg-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setShowExtras((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue-600 cursor-pointer py-1"
            >
              {showExtras ? (
                <>
                  <Minus className="w-3.5 h-3.5" />
                  <span>Sembunyikan anggaran &amp; catatan</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambah perkiraan anggaran &amp; catatan (opsional)</span>
                </>
              )}
            </button>

            {showExtras && (
              <div className="mt-3 space-y-3 pt-3 border-t border-slate-200/80 animate-in fade-in duration-150">
                <div className="space-y-1">
                  <label
                    htmlFor="m-contact-budget"
                    className="text-[12px] font-semibold text-slate-600 block"
                  >
                    Perkiraan Anggaran
                  </label>
                  <select
                    id="m-contact-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-white border border-slate-200 text-[13.5px] text-slate-900 outline-none focus:border-blue-600"
                  >
                    {budgetChoices.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="m-contact-notes"
                    className="text-[12px] font-semibold text-slate-600 block"
                  >
                    Catatan Singkat
                  </label>
                  <textarea
                    id="m-contact-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Sistem stok 3 gudang & kasir..."
                    className="w-full p-3 rounded-xl bg-white border border-slate-200 text-[13.5px] text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white text-[14px] font-semibold flex items-center justify-center gap-2 shadow-sm shadow-blue-600/20 transition-all cursor-pointer"
          >
            <span>Kirim via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
