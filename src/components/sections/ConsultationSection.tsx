"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Clock,
  Database,
  Loader2,
  MessageSquare,
  Phone,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
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

const SERVICE_PILL_SHORT_LABELS: Record<ServiceInterest, string> = {
  web_development: "Web Modern (95–100)",
  custom_siakad_erp: "SIAKAD & PDF Engine",
  business_automation: "WA & API Automation",
  full_ecosystem: "Full Enterprise Suite",
};

const AUTOMATION_WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Next.js Server Action & Zod Validation",
    detail:
      "Input divalidasi secara ketat di server dan nomor telepon otomatis dinormalisasi ke format internasional 628...",
    latency: "~8ms",
  },
  {
    step: "02",
    title: "Supabase PostgreSQL Insert & Audit Trail",
    detail:
      "Data prospek disimpan ke tabel public.leads dengan proteksi Row Level Security (RLS) dan pencatatan ke public.webhook_logs.",
    latency: "~35ms",
  },
  {
    step: "03",
    title: "Instant WhatsApp Gateway & QStash Dispatch",
    detail:
      "Worker menembakkan pesan WhatsApp interaktif yang dipersonalisasi ke nomor Anda beserta mekanisme exponential backoff retry.",
    latency: "~140ms",
  },
] as const;

export function ConsultationSection() {
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
    <section
      id="konsultasi"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* KOLOM KIRI (lg:col-span-5): Penjelasan Cara Kerja "Live Automation Demo" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#09090B]">
                LIVE WHATSAPP AUTOMATION DEMO
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#09090B]">
              Uji Kecepatan{" "}
              <span className="text-[#2563EB]">Mesin Otomasi Kami</span> Secara
              Langsung
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              Formulir ini bukan sekadar kotak pesan statis. Begitu Anda menekan
              tombol kirim, arsitektur{" "}
              <strong className="text-[#09090B]">
                Next.js Server Action + Supabase + WhatsApp Gateway
              </strong>{" "}
              langsung bekerja dalam hitungan milidetik dan menampilkan bukti
              telemetri eksekusi di layar Anda.
            </p>

            {/* 3-Step Pipeline Architecture Explanation */}
            <div className="space-y-3.5 pt-2">
              {AUTOMATION_WORKFLOW_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB] font-mono text-xs font-semibold">
                        {item.step}
                      </span>
                      <h3 className="font-heading text-sm font-bold text-[#09090B]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full">
                      {item.latency}
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Security & Privacy Note */}
            <div className="rounded-2xl bg-[#0F172A] text-white p-5 border border-slate-800 flex items-start gap-3.5">
              <ShieldCheck className="h-5 w-5 text-[#10B981] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <p className="font-semibold text-white">
                  Zero-Spam &amp; Strict RLS Guarantee
                </p>
                <p className="mt-1">
                  Data Anda dienkripsi dan dilindungi oleh kebijakan PostgreSQL
                  Row Level Security (`public.leads`). Nomor telepon otomatis
                  dinormalisasi ke standar{" "}
                  <code className="font-mono text-[#10B981]">
                    {normalizedPreview}
                  </code>
                  .
                </p>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN (lg:col-span-7): Formulir Interaktif & Kartu Bukti Telemetri Live */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white p-8 border border-[#E2E8F0] shadow-soft-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-[#E2E8F0]">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#09090B]">
                    Jadwalkan Bedah Arsitektur &amp; Demo
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                    Isi spesifikasi singkat Anda untuk memicu pengiriman
                    WhatsApp otomatis.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] font-mono text-xs font-semibold">
                  <Zap className="h-3.5 w-3.5" />
                  SLA &lt; 2 Detik
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                {/* Pilihan Pill Kategori Layanan */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#09090B] mb-2.5">
                    Pilih Pilar Layanan Utama *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_INTEREST_VALUES.map((interest) => {
                      const isSelected = serviceInterest === interest;
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => setServiceInterest(interest)}
                          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                            isSelected
                              ? "bg-[#2563EB] text-white border-[#2563EB] shadow-sm"
                              : "bg-[#F8FAFC] text-[#09090B] border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB]"
                          }`}
                        >
                          {SERVICE_PILL_SHORT_LABELS[interest]}
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-1.5 text-xs text-[#64748B]">
                    Aktif:{" "}
                    <strong className="text-[#09090B]">
                      {SERVICE_INTEREST_LABELS[serviceInterest]}
                    </strong>
                  </p>
                  {fieldErrors.service_interest && (
                    <p className="mt-1 text-xs font-medium text-rose-600">
                      {fieldErrors.service_interest[0]}
                    </p>
                  )}
                </div>

                {/* Baris 1: Nama Lengkap & Nama Instansi/Perusahaan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="lead-full-name"
                      className="block text-xs font-semibold text-[#09090B] mb-1.5"
                    >
                      Nama Lengkap Anda *
                    </label>
                    <input
                      id="lead-full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-3 text-sm text-[#09090B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
                    />
                    {fieldErrors.full_name && (
                      <p className="mt-1 text-xs font-medium text-rose-600">
                        {fieldErrors.full_name[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lead-company-name"
                      className="block text-xs font-semibold text-[#09090B] mb-1.5"
                    >
                      Institusi / Perusahaan *
                    </label>
                    <input
                      id="lead-company-name"
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Contoh: Yayasan Bina Bangsa / PT Nusantara"
                      className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-3 text-sm text-[#09090B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
                    />
                    {fieldErrors.company_name && (
                      <p className="mt-1 text-xs font-medium text-rose-600">
                        {fieldErrors.company_name[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Baris 2: Nomor WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="lead-whatsapp"
                        className="block text-xs font-semibold text-[#09090B]"
                      >
                        Nomor WhatsApp Aktif *
                      </label>
                      <span className="font-mono text-[11px] text-[#2563EB]">
                        Target: {normalizedPreview}
                      </span>
                    </div>
                    <div className="relative">
                      <Phone className="h-4 w-4 text-[#64748B] absolute left-3.5 top-3.5" />
                      <input
                        id="lead-whatsapp"
                        type="tel"
                        required
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="081234567890 atau +62812..."
                        className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] pl-10 pr-4 py-3 text-sm font-mono text-[#09090B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
                      />
                    </div>
                    {fieldErrors.whatsapp_number && (
                      <p className="mt-1 text-xs font-medium text-rose-600">
                        {fieldErrors.whatsapp_number[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lead-email"
                      className="block text-xs font-semibold text-[#09090B] mb-1.5"
                    >
                      Email Korporat / Institusi (Opsional)
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="budi@institusi.ac.id"
                      className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-3 text-sm text-[#09090B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-xs font-medium text-rose-600">
                        {fieldErrors.email[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Baris 3: Estimasi Rentang Anggaran */}
                <div>
                  <label
                    htmlFor="lead-budget"
                    className="block text-xs font-semibold text-[#09090B] mb-1.5"
                  >
                    Estimasi Rentang Investasi *
                  </label>
                  <select
                    id="lead-budget"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-3 text-sm text-[#09090B] focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
                  >
                    {BUDGET_RANGE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.budget_range && (
                    <p className="mt-1 text-xs font-medium text-rose-600">
                      {fieldErrors.budget_range[0]}
                    </p>
                  )}
                </div>

                {/* Baris 4: Ringkasan Proyek */}
                <div>
                  <label
                    htmlFor="lead-summary"
                    className="block text-xs font-semibold text-[#09090B] mb-1.5"
                  >
                    Ringkasan Kebutuhan Sistem / Bottleneck Saat Ini *
                  </label>
                  <textarea
                    id="lead-summary"
                    rows={3}
                    required
                    value={projectSummary}
                    onChange={(e) => setProjectSummary(e.target.value)}
                    placeholder="Jelaskan secara singkat sistem yang ingin dibangun (contoh: SIAKAD untuk 1.500 siswa dengan cetak rapor PDF otomatis, atau sinkronisasi stok 3 marketplace)..."
                    className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 text-sm text-[#09090B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
                  />
                  {fieldErrors.project_summary && (
                    <p className="mt-1 text-xs font-medium text-rose-600">
                      {fieldErrors.project_summary[0]}
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <div className="rounded-2xl bg-rose-500/10 border border-rose-500/20 px-4 py-3 text-xs font-medium text-rose-600">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Pill Button (#2563EB) */}
                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#2563EB] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#2563EB]/25 hover:bg-[#1D4ED8] disabled:opacity-60 transition-colors"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>
                        Memproses Server Action &amp; Mengirim WhatsApp...
                      </span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>
                        Kirim &amp; Picu Demo WhatsApp Instan Sekarang
                      </span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* KARTU BUKTI TELEMETRI LIVE (#0F172A dengan Font JetBrains Mono) */}
              {deliveryResult && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-8 rounded-3xl bg-[#0F172A] text-white p-6 sm:p-7 border border-slate-800 shadow-2xl space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2.5">
                      <Terminal className="h-5 w-5 text-[#10B981]" />
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
                          LIVE DISPATCH TELEMETRY RECEIPT
                        </span>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Lead ID:{" "}
                          <span className="font-mono text-white">
                            {deliveryResult.leadId}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 font-mono text-xs font-semibold text-[#10B981]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {deliveryResult.statusCode} OK
                      </span>
                      <button
                        type="button"
                        onClick={handleResetDemo}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
                      >
                        <RotateCcw className="h-3 w-3" />
                        Uji Ulang
                      </button>
                    </div>
                  </div>

                  {/* 3 Telemetry Stat Boxes (JetBrains Mono) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5">
                      <span className="text-[11px] uppercase text-slate-400 block">
                        Normalized Target
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white mt-1 block">
                        {deliveryResult.normalizedPhone}
                      </span>
                    </div>

                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5">
                      <span className="text-[11px] uppercase text-slate-400 block">
                        Execution Latency
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-[#10B981] mt-1 block">
                        {deliveryResult.latencyMs} ms
                      </span>
                    </div>

                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5">
                      <span className="text-[11px] uppercase text-slate-400 block">
                        Webhook Status
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-blue-400 mt-1 block">
                        200 OK ({deliveryResult.mode})
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Message Preview */}
                  <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1.5 text-[#10B981]">
                        <MessageSquare className="h-3.5 w-3.5" />
                        Pratinjau Payload Pesan WhatsApp Terkirim
                      </span>
                      <span>
                        {new Date(deliveryResult.timestamp).toLocaleTimeString(
                          "id-ID"
                        )}
                      </span>
                    </div>
                    <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed pt-1">
                      {deliveryResult.previewText}
                    </pre>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationSection;
