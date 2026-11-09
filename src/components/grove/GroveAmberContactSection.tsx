"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveAmberContactSection() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [serviceType, setServiceType] = useState("Website Modern (Next.js / Headless / Company Profile)");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Tim Abinest,\n\nSaya ingin berkonsultasi mengenai kebutuhan sistem digital kami:\n• Nama: ${name.trim() || "-"}\n• Institusi / Perusahaan: ${institution.trim() || "-"}\n• Layanan yang Dibutuhkan: ${serviceType}\n• Nomor WhatsApp: ${whatsapp.trim() || "-"}\n\nMohon informasi langkah diskusi selanjutnya. Terima kasih.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="kontak"
      className="py-14 sm:py-16 relative overflow-hidden bg-white border-b border-slate-200/80"
    >
      {/* Soft Warm Light Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[340px] bg-gradient-to-l from-blue-100/40 via-sky-50/30 to-transparent blur-[90px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-[500px] h-[340px] bg-gradient-to-r from-blue-100/40 via-sky-50/30 to-transparent blur-[90px] rounded-full"
      />

      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (6 cols): Reassurance & Trust Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E40AF] bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
              MULAI DISKUSI TANPA RISIKO
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
              Wujudkan Website, Sistem ERP, &amp; Automasi AI Anda Bersama Tim yang Tepat
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Anda tidak perlu menyiapkan dokumen teknis yang rumit. Cukup sampaikan kendala atau rencana Anda, dan kami akan menyiapkan saran solusi beserta estimasi biaya serta jadwal yang transparan.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    100% Kepemilikan Source Code &amp; Kontrak Resmi
                  </h3>
                  <p className="text-xs text-slate-600">
                    Seluruh hak milik kode program dan jaminan SLA 99.9% tertulis jelas di dalam perjanjian kerja.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Bebas Biaya Lisensi Bulanan yang Mengikat
                  </h3>
                  <p className="text-xs text-slate-600">
                    Sekali bangun untuk dipakai jangka panjang tanpa pungutan biaya lisensi per karyawan atau per user.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Didampingi Langsung oleh Engineer Pembuat Sistem
                  </h3>
                  <p className="text-xs text-slate-600">
                    Komunikasi cepat, bahasa yang mudah dipahami non-teknis, dan termasuk pelatihan staf sampai mahir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Ultra-Simple 4-Field Mobile-Friendly Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="bg-[#F8FAFC] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.06)] rounded-3xl p-6 sm:p-9 space-y-5"
            >
              <div className="pb-3 border-b border-slate-200/80">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                  Formulir Konsultasi Cepat
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Isi 4 data singkat di bawah ini untuk langsung terhubung dengan tim kami.
                </p>
              </div>

              {/* Field 1: Nama */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold text-[#0F172A]"
                >
                  1. Nama Lengkap Anda <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso / Hendra Kusuma"
                  className="w-full rounded-xl bg-white border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 px-4 py-3.5 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all"
                />
              </div>

              {/* Field 2: Institusi / Perusahaan */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-institution"
                  className="block text-xs font-bold text-[#0F172A]"
                >
                  2. Nama Perusahaan / Bisnis <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-institution"
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="Contoh: PT Finansial Prima Mandiri / CV Sentosa Retail"
                  className="w-full rounded-xl bg-white border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 px-4 py-3.5 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all"
                />
              </div>

              {/* Field 3: Layanan yang Dibutuhkan (Dropdown) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-service"
                  className="block text-xs font-bold text-[#0F172A]"
                >
                  3. Layanan yang Dibutuhkan <span className="text-rose-500">*</span>
                </label>
                <select
                  id="contact-service"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full rounded-xl bg-white border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 px-4 py-3.5 text-xs sm:text-sm text-[#0F172A] outline-none transition-all"
                >
                  <option value="Website Modern (Next.js / Headless / Company Profile)">
                    Website Modern (Next.js / Headless / Company Profile)
                  </option>
                  <option value="Sistem ERP Kustom (Supply Chain / Inventory / Multi-Warehouse)">
                    Sistem ERP Kustom (Supply Chain / Inventory / Multi-Warehouse)
                  </option>
                  <option value="Automasi AI & ML (Document AI / WhatsApp Agent Meta)">
                    Automasi AI &amp; ML (Document AI / WhatsApp Agent Meta)
                  </option>
                  <option value="Solusi Terpadu (Website + ERP + Automasi AI)">
                    Solusi Terpadu (Website + ERP + Automasi AI)
                  </option>
                </select>
              </div>

              {/* Field 4: Nomor WhatsApp */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-wa"
                  className="block text-xs font-bold text-[#0F172A]"
                >
                  4. Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-wa"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Contoh: 0812-3456-7890"
                  className="w-full rounded-xl bg-white border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 px-4 py-3.5 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all"
                >
                  <span>Konsultasikan Kebutuhan Sistem Anda</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Reassuring Micro-Copy */}
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-600 font-medium pt-1">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Respons &lt;15 menit di jam kerja, tanpa komitmen
                  </span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="hidden sm:inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                    Privasi data 100% terjaga
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
