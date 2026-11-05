"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Loader2, MessageSquare, Send, ShieldCheck, Zap } from "lucide-react";
import { submitConsultationLead, type LeadDeliveryMeta } from "@/actions/submit-lead";
import {
  BUDGET_RANGE_OPTIONS,
  SERVICE_INTEREST_LABELS,
  type LeadFormInput,
  type ServiceInterest,
} from "@/lib/validations/lead";

export function GroveConsultation() {
  const [isPending, startTransition] = useTransition();

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [serviceInterest, setServiceInterest] = useState<ServiceInterest>("custom_siakad_erp");
  const [projectSummary, setProjectSummary] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [deliveryMeta, setDeliveryMeta] = useState<LeadDeliveryMeta | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const payload: LeadFormInput = {
      full_name: fullName,
      company_name: companyName,
      whatsapp_number: whatsappNumber,
      email: email.trim() ? email : undefined,
      service_interest: serviceInterest,
      budget_range: BUDGET_RANGE_OPTIONS[2],
      project_summary: projectSummary.trim()
        ? projectSummary
        : "Konsultasi sistem rekayasa perangkat lunak Abinest.",
    };

    startTransition(async () => {
      try {
        const res = await submitConsultationLead(payload);
        if (res.success) {
          setIsSuccess(true);
          setDeliveryMeta(res.deliveryMeta ?? null);
        } else {
          setErrorMessage(res.message);
        }
      } catch {
        setErrorMessage("Terjadi kendala jaringan. Silakan hubungi kami via WhatsApp langsung.");
      }
    });
  };

  return (
    <section id="konsultasi" className="bg-[#F4F1EA] py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-[#DDD7C9] p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#D15B3A] mb-2">
              KONSULTASI TEKNIS &amp; DEMO LIVE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A201C] tracking-tight">
              Mulai Transformasi Sistem Bersama Abinest
            </h2>
            <p className="text-xs sm:text-sm text-[#6B736C] mt-2 max-w-lg mx-auto leading-relaxed">
              Diskusikan arsitektur sistem institusi Anda. Masukkan nomor WhatsApp untuk langsung menguji kecepatan pengiriman notifikasi otomatis kami dalam hitungan detik.
            </p>
          </div>

          {/* Form or Success State */}
          {isSuccess ? (
            <div className="rounded-2xl bg-[#18362B] text-white p-6 sm:p-8 text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                Permintaan Konsultasi Diterima!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-md mx-auto">
                Terima kasih, <strong>{fullName}</strong>. Sistem otomasi WhatsApp Abinest telah mengirimkan pesan konfirmasi ke nomor Anda ({deliveryMeta?.normalizedPhone || whatsappNumber}).
              </p>
              {deliveryMeta && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-[11px] font-mono text-emerald-300 border border-emerald-400/30">
                  <Zap className="h-3.5 w-3.5" />
                  <span>Latensi Eksekusi: {deliveryMeta.latencyMs}ms • Status HTTP 200 OK</span>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Nama Lengkap <span className="text-[#D15B3A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Ahmad Fauzi"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#DDD7C9] text-xs sm:text-sm text-[#1A201C] focus:outline-none focus:border-[#18362B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Institusi / Yayasan / Perusahaan <span className="text-[#D15B3A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Contoh: Yayasan Pendidikan Al-Azhar"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#DDD7C9] text-xs sm:text-sm text-[#1A201C] focus:outline-none focus:border-[#18362B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Nomor WhatsApp (Aktif) <span className="text-[#D15B3A]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#DDD7C9] text-xs sm:text-sm text-[#1A201C] focus:outline-none focus:border-[#18362B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Minat Solusi Utama
                  </label>
                  <select
                    value={serviceInterest}
                    onChange={(e) => setServiceInterest(e.target.value as ServiceInterest)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#DDD7C9] text-xs sm:text-sm text-[#1A201C] focus:outline-none focus:border-[#18362B]"
                  >
                    {Object.entries(SERVICE_INTEREST_LABELS).map(([val, label]) => (
                      <option key={val} value={val}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Kebutuhan atau Tantangan Sistem Anda (Opsional)
                </label>
                <textarea
                  rows={3}
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  placeholder="Ceritakan rencana sistem Anda (misal: ingin cetak rapor 1.000 siswa tanpa server down, atau sinkronisasi stok e-commerce)..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#DDD7C9] text-xs sm:text-sm text-[#1A201C] focus:outline-none focus:border-[#18362B]"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3.5 px-6 rounded-full bg-[#18362B] text-white font-bold text-xs sm:text-sm hover:bg-[#122A21] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Memproses &amp; Menembakkan Pesan WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Kirim &amp; Uji Coba WhatsApp Gateway Sekarang →</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#717872] pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#18362B]" />
                <span>Privasi terjamin. Data dilindungi PostgreSQL Row Level Security (RLS).</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
