"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveAmberContactSection() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [serviceType, setServiceType] = useState("Website Modern (<0.8s, Next.js)");
  const [timeline, setTimeline] = useState("1 – 2 Bulan");
  const [whatsapp, setWhatsapp] = useState("");

  const serviceOptions = [
    "Website Modern (<0.8s, Next.js)",
    "Custom ERP & Multi-Gudang",
    "SIAKAD Sekolah Anti-Down",
    "Automasi AI/ML & Meta WA Agent",
  ];

  const timelineOptions = [
    "Secepatnya (<1 Bulan)",
    "1 – 2 Bulan",
    "Fleksibel / Perencanaan",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Tim Engineer Abinest,

Saya ingin berkonsultasi mengenai kebutuhan rekayasa sistem:
• Nama: ${name.trim() || "-"}
• Perusahaan / Institusi: ${institution.trim() || "-"}
• Pilar Layanan: ${serviceType}
• Target Waktu: ${timeline}
• Nomor WhatsApp: ${whatsapp.trim() || "-"}

Mohon informasi langkah konsultasi & jadwal diskusinya. Terima kasih.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="kontak"
      className="py-14 sm:py-20 relative overflow-hidden bg-white border-b border-slate-200/80"
    >
      {/* Soft Light Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[340px] bg-gradient-to-l from-blue-100/40 via-sky-50/30 to-transparent blur-[90px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-[500px] h-[340px] bg-gradient-to-r from-blue-100/40 via-sky-50/30 to-transparent blur-[90px] rounded-full"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols): Reassurance & Trust Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E40AF] bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
              KONSULTASI LANGSUNG DENGAN ENGINEER
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Wujudkan Sistem yang Anda Miliki Sepenuhnya
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Tidak perlu menyiapkan dokumen teknis yang rumit. Cukup sampaikan kendala atau rencana Anda, dan kami akan menyusun solusi arsitektur, estimasi biaya, serta jadwal pengerjaan yang transparan.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    100% Kepemilikan Source Code &amp; Kontrak Resmi
                  </h3>
                  <p className="text-xs text-slate-600">
                    Seluruh hak cipta kode program, database dump, dan garansi SLA 99.9% tertulis jelas di perjanjian kerja.
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
                    Didampingi Langsung oleh Senior Systems Engineer
                  </h3>
                  <p className="text-xs text-slate-600">
                    Bahasa yang mudah dipahami non-teknis, respons cepat &lt;15 menit, dan pelatihan staf sampai mahir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Enhanced Quick Scope Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="bg-[#F8FAFC] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.06)] rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-5"
            >
              <div className="pb-3 border-b border-slate-200/80">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                  Formulir Konsultasi Cepat
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Pilih kebutuhan Anda dan langsung terhubung dengan tim teknis via WhatsApp resmi.
                </p>
              </div>

              {/* Field 1: Scope Pill Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#0F172A]">
                  1. Pilih Kebutuhan Utama <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setServiceType(opt)}
                      className={`text-left text-xs font-semibold px-3 py-2.5 rounded-xl border transition-all cursor-pointer ${
                        serviceType === opt
                          ? "bg-blue-50 border-[#2563EB] text-[#1E40AF] shadow-2xs"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 2: Nama & Institusi Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-[#0F172A]"
                  >
                    2. Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Budi Santoso"
                    className="w-full rounded-xl bg-white border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 px-3.5 py-2.5 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-institution"
                    className="block text-xs font-bold text-[#0F172A]"
                  >
                    3. Perusahaan / Yayasan <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-institution"
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="PT Finansial / Yayasan"
                    className="w-full rounded-xl bg-white border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 px-3.5 py-2.5 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Field 3: Target Waktu & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0F172A]">
                    4. Target Peluncuran
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full rounded-xl bg-white border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 px-3 py-2.5 text-xs text-[#0F172A] outline-none transition-all cursor-pointer"
                  >
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-wa"
                    className="block text-xs font-bold text-[#0F172A]"
                  >
                    5. WhatsApp Aktif <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-wa"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="0812-3456-7890"
                    className="w-full rounded-xl bg-white border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 px-3.5 py-2.5 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Konsultasi ke WhatsApp Engineer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Reassuring Micro-Copy */}
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium pt-1">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Respons &lt;15 menit di jam kerja
                  </span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="hidden sm:inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                    Tanpa biaya konsultasi awal
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
