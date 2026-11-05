"use client";

import { useState, useTransition } from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Lock,
  MessageSquare,
  Phone,
  RotateCcw,
  Send,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  submitConsultationLead,
  type LeadDeliveryMeta,
} from "@/actions/submit-lead";
import {
  BUDGET_RANGE_OPTIONS,
  normalizeIndonesianWhatsApp,
  SERVICE_INTEREST_LABELS,
  SERVICE_INTEREST_VALUES,
  type LeadFormInput,
  type ServiceInterest,
} from "@/lib/validations/lead";

const SERVICE_PILLS: Record<ServiceInterest, string> = {
  web_development: "Web Modern 100",
  custom_siakad_erp: "SIAKAD & PDF Engine",
  business_automation: "WA & API Gateway",
  full_ecosystem: "Full Enterprise Suite",
};

export function ModernConsultationSection() {
  const [isPending, startTransition] = useTransition();

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [serviceInterest, setServiceInterest] =
    useState<ServiceInterest>("custom_siakad_erp");
  const [budgetRange, setBudgetRange] = useState<string>(
    BUDGET_RANGE_OPTIONS[2]
  );
  const [projectSummary, setProjectSummary] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof LeadFormInput, string[]>>
  >({});
  const [deliveryResult, setDeliveryResult] =
    useState<LeadDeliveryMeta | null>(null);

  const normalizedPreview = whatsappNumber.trim()
    ? normalizeIndonesianWhatsApp(whatsappNumber)
    : "62812xxxxxxx";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    startTransition(async () => {
      const response = await submitConsultationLead({
        full_name: fullName,
        company_name: companyName,
        whatsapp_number: whatsappNumber,
        email,
        service_interest: serviceInterest,
        budget_range: budgetRange,
        project_summary: projectSummary,
      });

      if (!response.success && response.fieldErrors) {
        setFieldErrors(response.fieldErrors);
        setErrorMessage(response.message);
        return;
      }

      if (response.deliveryMeta) {
        setDeliveryResult(response.deliveryMeta);
      } else {
        setErrorMessage(response.message);
      }
    });
  };

  const handleResetDemo = () => {
    setDeliveryResult(null);
    setErrorMessage(null);
    setFieldErrors({});
  };

  return (
    <section id="konsultasi" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 Cols): Value Proposition & Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#0052FF]">
              <Zap className="h-3.5 w-3.5" />
              <span className="uppercase tracking-wider">LIVE WHATSAPP AUTOMATION DEMO</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09090B]">
              Uji Coba Mesin Otomasi Kami{" "}
              <span className="text-[#0052FF]">Secara Langsung.</span>
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              Formulir ini bukan kotak pesan email statis. Begitu tombol ditekan, arsitektur <strong className="text-[#09090B]">Next.js Server Action + Supabase + WhatsApp Gateway</strong> langsung mengirimkan pesan sapaan resmi dalam hitungan detik.
            </p>

            {/* 3 Step Verification Timeline */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs font-bold text-[#0052FF] block mb-1">
                    01 • Zod Validation &amp; Normalisasi
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Nomor Anda otomatis diubah ke standar internasional (628...).
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded">
                  ~8ms
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs font-bold text-[#0052FF] block mb-1">
                    02 • PostgreSQL RLS Security Guard
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Data disimpan secara terisolasi tanpa risiko bocor ke tenant lain.
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded">
                  ~35ms
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs font-bold text-[#0052FF] block mb-1">
                    03 • Instant WhatsApp Notification
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Pesan dikirimkan ke ponsel Anda dengan mekanisme auto-retry 5x.
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded">
                  ~140ms
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-[#64748B]">
              <ShieldCheck className="h-5 w-5 text-[#10B981] shrink-0" />
              <span>Privasi data institusi Anda 100% terlindungi oleh Row Level Security (RLS).</span>
            </div>
          </div>

          {/* Right Column (7 Cols): The Form & Live Telemetry Receipt */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-slate-900/5">
              <div className="pb-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#09090B]">
                    Konsultasi &amp; Pemicu Demo
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                    Isi detail untuk langsung menguji pengiriman WhatsApp otomatis.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-[#059669] font-semibold">
                  SLA &lt; 2s
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                {/* Service Pills Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#09090B] uppercase tracking-wider mb-2">
                    Pilih Solusi Utama *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_INTEREST_VALUES.map((interest) => {
                      const isSelected = serviceInterest === interest;
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => setServiceInterest(interest)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                            isSelected
                              ? "bg-[#0052FF] text-white border-[#0052FF] shadow-xs"
                              : "bg-slate-50 text-[#475569] border-slate-200 hover:border-[#0052FF] hover:text-[#0052FF]"
                          }`}
                        >
                          {SERVICE_PILLS[interest]}
                        </button>
                      );
                    })}
                  </div>
                  {fieldErrors.service_interest && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">
                      {fieldErrors.service_interest[0]}
                    </p>
                  )}
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#09090B] mb-1.5">
                      Nama Lengkap Anda *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#09090B] focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                    />
                    {fieldErrors.full_name && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">
                        {fieldErrors.full_name[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#09090B] mb-1.5">
                      Institusi / Perusahaan *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Contoh: Yayasan Al-Azhar"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#09090B] focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                    />
                    {fieldErrors.company_name && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">
                        {fieldErrors.company_name[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-[#09090B]">
                        Nomor WhatsApp Aktif *
                      </label>
                      <span className="font-mono text-[10px] text-[#0052FF]">
                        Target: {normalizedPreview}
                      </span>
                    </div>
                    <div className="relative">
                      <Phone className="h-4 w-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="081234567890"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-sm text-[#09090B] focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                      />
                    </div>
                    {fieldErrors.whatsapp_number && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">
                        {fieldErrors.whatsapp_number[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#09090B] mb-1.5">
                      Email Korporat (Opsional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="budi@institusi.ac.id"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#09090B] focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-semibold text-[#09090B] mb-1.5">
                    Estimasi Rentang Investasi *
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#09090B] focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                  >
                    {BUDGET_RANGE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Summary */}
                <div>
                  <label className="block text-xs font-semibold text-[#09090B] mb-1.5">
                    Ringkasan Kebutuhan / Bottleneck Sistem *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={projectSummary}
                    onChange={(e) => setProjectSummary(e.target.value)}
                    placeholder="Contoh: Kami membutuhkan SIAKAD untuk 2.500 siswa dengan mesin rapor paralel tanpa server down saat ujian serentak..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#09090B] focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                  />
                  {fieldErrors.project_summary && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">
                      {fieldErrors.project_summary[0]}
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-full py-3.5 px-6 rounded-full bg-[#0052FF] text-white font-bold text-sm hover:bg-[#1D4ED8] transition-all shadow-md shadow-[#0052FF]/20 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Memproses Server Action &amp; Mengirim WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Kirim &amp; Uji Coba Demo WhatsApp Instan →</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* LIVE TELEMETRY RECEIPT CARD (#0A0D14) */}
              <AnimatePresence>
                {deliveryResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 rounded-2xl bg-[#0A0D14] text-white p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-[#10B981]" />
                        <span className="font-mono text-xs font-semibold text-[#10B981]">
                          LIVE TELEMETRY RECEIPT • 200 OK
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleResetDemo}
                        className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white"
                      >
                        <RotateCcw className="h-3 w-3" />
                        <span>Reset Demo</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">TARGET NOMOR</span>
                        <span className="text-white font-bold">{deliveryResult.normalizedPhone}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">LATENSI EKSEKUSI</span>
                        <span className="text-[#10B981] font-bold">{deliveryResult.latencyMs} ms</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">STATUS GATEWAY</span>
                        <span className="text-[#0052FF] font-bold">SENT_TO_WHATSAPP</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[11px] font-mono text-slate-400 block mb-1">
                        Pratinjau Pesan Terkirim:
                      </span>
                      <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
                        {deliveryResult.previewText}
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
