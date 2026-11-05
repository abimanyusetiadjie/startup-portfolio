"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Loader2, Send, ShieldCheck, Zap } from "lucide-react";
import { submitConsultationLead, type LeadDeliveryMeta } from "@/actions/submit-lead";
import {
  BUDGET_RANGE_OPTIONS,
  type LeadFormInput,
  type ServiceInterest,
} from "@/lib/validations/lead";
import { useLanguage } from "@/context/LanguageContext";

export function GroveConsultation() {
  const { t, lang } = useLanguage();
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
    <section id="konsultasi" className="bg-[#F8FAFC] py-16 sm:py-24 font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#0F766E] font-mono mb-2">
              {t.consultation.eyebrow}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              {t.consultation.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-lg mx-auto leading-relaxed">
              {t.consultation.subtitle}
            </p>
          </div>

          {/* Form or Success State */}
          {isSuccess ? (
            <div className="rounded-2xl bg-[#0F766E] text-white p-6 sm:p-8 text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6 text-[#5EEAD4]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                {t.consultation.form.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-teal-100/90 max-w-md mx-auto">
                {t.consultation.form.successDesc} ({deliveryMeta?.normalizedPhone || whatsappNumber}).
              </p>
              {deliveryMeta && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 text-[11px] font-mono text-[#5EEAD4] border border-[#5EEAD4]/30">
                  <Zap className="h-3.5 w-3.5" />
                  <span>
                    Latency: {deliveryMeta.latencyMs}ms • HTTP 200 OK
                  </span>
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
                  <label className="block text-xs font-semibold text-[#134E4A] mb-1">
                    {t.consultation.form.nameLabel} <span className="text-[#0F766E]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.consultation.form.namePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#134E4A] focus:outline-none focus:border-[#0F766E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#134E4A] mb-1">
                    {t.consultation.form.emailLabel} <span className="text-[#0F766E]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.consultation.form.emailPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#134E4A] focus:outline-none focus:border-[#0F766E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#134E4A] mb-1">
                    {t.consultation.form.phoneLabel} <span className="text-[#0F766E]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder={t.consultation.form.phonePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#134E4A] focus:outline-none focus:border-[#0F766E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#134E4A] mb-1">
                    {t.consultation.form.systemLabel}
                  </label>
                  <select
                    value={serviceInterest}
                    onChange={(e) => setServiceInterest(e.target.value as ServiceInterest)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#134E4A] focus:outline-none focus:border-[#0F766E]"
                  >
                    {t.consultation.form.options.map((opt) => (
                      <option key={opt.val} value={opt.val}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#134E4A] mb-1">
                  {t.consultation.form.noteLabel}
                </label>
                <textarea
                  rows={3}
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  placeholder={t.consultation.form.notePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#134E4A] focus:outline-none focus:border-[#0F766E]"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3.5 px-6 rounded-full bg-[#0F766E] text-white font-bold text-xs sm:text-sm hover:bg-[#0D9488] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{t.consultation.form.submittingBtn}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{t.consultation.form.submitBtn}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                <span>
                  {lang === "id"
                    ? "Privasi Anda terjaga. Kami tidak membagikan data kontak Anda ke pihak lain."
                    : "Your privacy is protected. We never share your contact details."}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
