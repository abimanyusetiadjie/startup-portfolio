"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  FileCode2,
  ShieldCheck,
} from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import { buildConsultationWaUrl } from "./contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

export interface ServiceModuleItem {
  code: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceDetailData {
  slug: string;
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroMetrics: { value: string; label: string }[];
  startingPrice: string;
  priceNote: string;
  timeline: string;
  warranty: string;
  waMessage: string;
  serviceNameForAnalytics: string;
  secondaryCta: {
    label: string;
    href: string;
  };
  previewImage: {
    src: string;
    alt: string;
    caption: string;
  };
  architectureHeading: string;
  architectureSubheading: string;
  modules: ServiceModuleItem[];
  idealFor: string[];
  guarantees: {
    title: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedLinks?: {
    label: string;
    href: string;
  }[];
}

export function GroveServiceDetailTemplate({
  data,
}: {
  data: ServiceDetailData;
}) {
  const waHref = buildConsultationWaUrl(data.waMessage);

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <SignificaNavbar />

      <main className="flex-1 pt-[112px] pb-20">
        {/* Swiss Breadcrumb */}
        <div className="sig-container pb-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center justify-between gap-3 text-[13.5px] font-medium text-[#6F6F71]"
          >
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#171717] transition-colors">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/#layanan"
                  className="hover:text-[#171717] transition-colors"
                >
                  Layanan
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#171717]">{data.breadcrumbLabel}</li>
            </ol>

            <Link
              href="/#layanan"
              className="sig-link inline-flex items-center gap-1.5 text-[#6F6F71] hover:text-[#171717]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke beranda</span>
            </Link>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="sig-container pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                {data.eyebrow}
              </p>

              <h1 className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium tracking-[-0.03em] text-[#171717] leading-[1.06]">
                {data.title}
              </h1>

              <p className="text-[16.5px] sm:text-[18px] text-[#6F6F71] leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: `service_page_hero_${data.slug}`,
                      service: data.serviceNameForAnalytics,
                    })
                  }
                  className="sig-btn-primary"
                >
                  <span>Konsultasi via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href={data.secondaryCta.href}
                  className="sig-btn-outline"
                >
                  {data.secondaryCta.label}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8E8E8]">
                {data.heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[16px] bg-white border border-[#E8E8E8] px-4 py-4"
                  >
                    <div className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em] text-[#171717]">
                      {metric.value}
                    </div>
                    <div className="text-[13px] text-[#6F6F71] mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Investment Summary Box */}
            <aside className="lg:col-span-4 rounded-[20px] bg-[#171717] text-white p-7 space-y-6">
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                  Estimasi investasi
                </span>
                <div className="text-[28px] sm:text-[32px] font-medium tracking-[-0.025em]">
                  {data.startingPrice}
                </div>
                <p className="text-[13.5px] text-white/70 leading-relaxed">
                  {data.priceNote}
                </p>
              </div>

              <div className="space-y-4 pt-5 border-t border-white/15 text-[14px]">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#FFD124] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Waktu rilis</div>
                    <div className="text-[13px] text-white/70">
                      {data.timeline}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#FFD124] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">
                      Garansi &amp; pendampingan
                    </div>
                    <div className="text-[13px] text-white/70">
                      {data.warranty}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileCode2 className="w-4 h-4 text-[#FFD124] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Hak milik 100%</div>
                    <div className="text-[13px] text-white/70">
                      Kode sumber &amp; database penuh milik Anda tanpa iuran per staf.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="/audit-gratis"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-[14px] bg-white text-[#171717] hover:bg-[#FFD124] text-[13.5px] font-medium py-3 px-4 transition-colors"
                >
                  <span>Hitung estimasi penghematan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>

          {/* Product UI Showcase Preview */}
          <div className="mt-12 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-[#6F6F71]">
              <span className="font-mono uppercase tracking-wider text-[#171717]">
                Pratinjau antarmuka &amp; arsitektur
              </span>
              <span>{data.previewImage.caption}</span>
            </div>
            <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8]">
              <Image
                src={data.previewImage.src}
                alt={data.previewImage.alt}
                fill
                priority
                sizes="(max-width: 1200px) 95vw, 1344px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* 3-Column Architecture & Module Breakdown (Significa Hairline Strip) */}
        <section className="border-t border-[#E8E8E8] py-16 lg:py-20">
          <div className="sig-container space-y-12">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                Ruang lingkup &amp; arsitektur sistem
              </p>
              <h2 className="text-[28px] sm:text-[36px] font-medium tracking-[-0.025em] text-[#171717] leading-[1.15]">
                {data.architectureHeading}
              </h2>
              <p className="text-[15.5px] text-[#6F6F71] leading-relaxed">
                {data.architectureSubheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#E8E8E8] md:divide-x divide-y md:divide-y-0 divide-[#E8E8E8]">
              {data.modules.map((mod) => (
                <article
                  key={mod.code}
                  className="py-8 md:px-7 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-6"
                >
                  <div className="space-y-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-[8px] bg-white border border-[#E8E8E8] text-[#171717] text-[11px] font-mono">
                      MODUL {mod.code}
                    </span>
                    <h3 className="text-[20px] font-medium tracking-[-0.015em] text-[#171717] leading-snug">
                      {mod.title}
                    </h3>
                    <p className="text-[14.5px] text-[#6F6F71] leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-5 border-t border-[#E8E8E8]">
                    {mod.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13.5px] text-[#171717] leading-snug"
                      >
                        <Check className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees & Ideal Fit */}
        <section className="border-t border-[#E8E8E8] pt-16 lg:pt-20">
          <div className="sig-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1.5">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                    Standar kualitas Abinest
                  </p>
                  <h2 className="text-[26px] sm:text-[32px] font-medium tracking-[-0.02em] text-[#171717]">
                    Komitmen teknis &amp; serah terima.
                  </h2>
                </div>
                <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
                  {data.guarantees.map((item) => (
                    <div key={item.title} className="py-5 space-y-1.5">
                      <h3 className="text-[16px] font-medium text-[#171717]">
                        {item.title}
                      </h3>
                      <p className="text-[14.5px] text-[#6F6F71] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 rounded-[20px] bg-white border border-[#E8E8E8] p-7 sm:p-8 flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                    Kesesuaian organisasi
                  </p>
                  <h2 className="text-[24px] font-medium tracking-[-0.02em] text-[#171717]">
                    Paling tepat digunakan oleh.
                  </h2>
                  <ul className="space-y-3 pt-1">
                    {data.idealFor.map((segment) => (
                      <li
                        key={segment}
                        className="flex items-start gap-2.5 text-[14.5px] text-[#171717]"
                      >
                        <Check className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                        <span>{segment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[16px] bg-[#F7F7F7] border border-[#E8E8E8] p-5 space-y-4">
                  <p className="text-[14px] text-[#6F6F71] leading-relaxed">
                    Ingin mendapatkan rincian estimasi biaya, alur modul, dan jadwal rilis untuk tim Anda dalam 15 menit?
                  </p>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackWhatsAppClick({
                        source: `service_page_bottom_${data.slug}`,
                        service: data.serviceNameForAnalytics,
                      })
                    }
                    className="sig-btn-primary w-full"
                  >
                    <span>Minta proposal &amp; estimasi</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visible Service FAQ (Matches FAQPage JSON-LD for Google Rich Results & GEO) */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="border-t border-[#E8E8E8] pt-16 mt-16">
            <div className="sig-container max-w-4xl space-y-6">
              <div className="space-y-1.5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                  Pertanyaan umum layanan ini
                </p>
                <h2 className="text-[24px] sm:text-[30px] font-medium tracking-[-0.02em] text-[#171717]">
                  Jawaban singkat sebelum memulai.
                </h2>
              </div>
              <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
                {data.faqs.map((item) => (
                  <div key={item.question} className="py-5 space-y-2">
                    <h3 className="text-[16.5px] font-semibold text-[#171717]">
                      {item.question}
                    </h3>
                    <p className="text-[15px] text-[#6F6F71] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contextual Topic Cluster Cross-Links */}
        {data.relatedLinks && data.relatedLinks.length > 0 && (
          <section className="pt-12">
            <div className="sig-container">
              <div className="rounded-[18px] bg-white border border-[#E8E8E8] p-6 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[13px] font-mono uppercase tracking-wider text-[#6F6F71]">
                  Pelajari juga
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {data.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#F7F7F7] hover:bg-[#171717] hover:text-white border border-[#E8E8E8] text-[13.5px] font-medium text-[#171717] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <SignificaFooter />
    </div>
  );
}
