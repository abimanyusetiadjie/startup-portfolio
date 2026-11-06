"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, ShieldCheck, Zap, MessageSquare, ArrowUpRight } from "lucide-react";
import { submitConsultationLead, type LeadDeliveryMeta } from "@/actions/submit-lead";
import {
  BUDGET_RANGE_OPTIONS,
  type LeadFormInput,
  type ServiceInterest,
} from "@/lib/validations/lead";
import { useLanguage } from "@/context/LanguageContext";

export function GroveConsultation() {
  const { lang } = useLanguage();
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
        : lang === "id"
        ? "Konsultasi sistem rekayasa dan otomasi Abinest."
        : "Consultation regarding Abinest engineering & automation systems.",
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
        setErrorMessage(
          lang === "id"
            ? "Terjadi kendala jaringan. Silakan hubungi kami via WhatsApp langsung."
            : "Network error occurred. Please contact us directly via WhatsApp."
        );
      }
    });
  };

  return (
    <section id="konsultasi" className="bg-[#0B0F19] text-white py-14 sm:py-20 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto rounded-3xl bg-white/[0.04] border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[2px] bg-emerald-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-300 font-mono">
                {lang === "id" ? "KONSULTASI GRATIS" : "FREE CONSULTATION"}
              </span>
              <span className="w-6 h-[2px] bg-emerald-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              {lang === "id"
                ? "Ceritakan kebutuhan website atau sistem Anda."
                : "Tell us about your system or web requirements."}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 mt-3 max-w-lg mx-auto leading-relaxed font-normal">
              {lang === "id"
                ? "Konsultasi gratis tanpa komitmen. Kami akan bantu analisis kebutuhan dan mengusulkan solusi arsitektur yang paling tepat untuk institusi Anda."
                : "Zero obligation technical scoping. We will analyze your workflows and recommend the optimal decoupled software architecture."}
            </p>
          </div>

          {/* Quick WhatsApp Banner */}
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
              <span className="text-zinc-200">
                {lang === "id"
                  ? "Lebih suka diskusi langsung via WhatsApp? Respon < 15 menit."
                  : "Prefer to chat immediately on WhatsApp? Response within 15 mins."}
              </span>
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Abinest,%20saya%20ingin%20konsultasi%20pembuatan%20website/sistem"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shrink-0"
            >
              <span>Chat WA Konsultan</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Form or Success State */}
          {isSuccess ? (
            <div className="rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-white p-6 sm:p-8 text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                {lang === "id" ? "Permintaan Konsultasi Berhasil Terkirim!" : "Consultation Request Received!"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                {lang === "id"
                  ? `Tim konsultan Abinest akan menghubungi WhatsApp atau Email Anda (${deliveryMeta?.normalizedPhone || whatsappNumber}) dalam waktu 1x24 jam kerja.`
                  : "Our systems team will reach out via WhatsApp or Email within 24 business hours."}
              </p>
              {deliveryMeta && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-[11px] font-mono text-emerald-400 border border-emerald-500/30">
                  <Zap className="h-3.5 w-3.5" />
                  <span>Latency: {deliveryMeta.latencyMs}ms • Webhook Dispatched</span>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Nama Lengkap &amp; Jabatan <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="contoh: Bpk. Hendra (Kepala Yayasan / Direktur)"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/25 focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Nama Institusi / Sekolah / Perusahaan
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="contoh: Yayasan Mandiri / PT Nusantara"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/25 focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Nomor WhatsApp (Aktif) <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="081234567890"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/25 focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Email Kontak
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hendra@perusahaan.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/25 focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Layanan yang Anda Butuhkan
                </label>
                <select
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value as ServiceInterest)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#11141C] border border-white/15 text-xs sm:text-sm text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/25 focus:border-emerald-400"
                >
                  <option value="custom_siakad_erp">SIAKAD Sekolah / Yayasan Anti-Down</option>
                  <option value="whatsapp_gateway_bot">WhatsApp Notification Gateway &amp; Chatbot</option>
                  <option value="custom_web_app">Website Modern Next.js 15 (Lighthouse 95–100)</option>
                  <option value="omnichannel_erp">ERP &amp; Manajemen Stok Omnichannel</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Deskripsi Kebutuhan / Kendala yang Ingin Diselesaikan
                </label>
                <textarea
                  rows={3}
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  placeholder="Ceritakan kebutuhan Anda (misal: ingin ganti sistem sekolah lama yang sering down saat pembagian rapor, kirim tagihan SPP otomatis, dll.)"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/25 focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 px-6 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-zinc-950" />
                    <span>Sedang Mengirimkan Data...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-zinc-950" />
                    <span>Kirim Permintaan Konsultasi Gratis →</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>
                  {lang === "id"
                    ? "Privasi Anda terjaga. Kami tidak membagikan data kontak Anda ke pihak lain."
                    : "Strict NDAs & Zero third-party sharing. Your data remains 100% confidential."}
                </span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
