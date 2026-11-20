"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCode2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { GroveNavbar } from "./GroveNavbar";
import { GroveFooterSection } from "./GroveFooterSection";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";
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
}

export function GroveServiceDetailTemplate({
  data,
}: {
  data: ServiceDetailData;
}) {
  const waHref = buildConsultationWaUrl(data.waMessage);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <GroveNavbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Executive Breadcrumb & Back link */}
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-slate-500"
          >
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/#layanan-utama"
                  className="hover:text-blue-600 transition-colors"
                >
                  Layanan Utama
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#0F172A] font-semibold">
                {data.breadcrumbLabel}
              </li>
            </ol>

            <Link
              href="/#layanan-utama"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>
          </nav>
        </div>

        {/* Executive Hero Card */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-3xl bg-white border border-slate-200/80 shadow-sm p-7 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{data.eyebrow}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#0F172A] leading-[1.12]">
                  {data.title}
                </h1>

                <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-2xl">
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
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-sm font-medium px-6 py-3 shadow-sm transition-colors"
                  >
                    <span>Konsultasi Layanan via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href={data.secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-[#0F172A] text-sm font-semibold px-6 py-3 transition-colors"
                  >
                    {data.secondaryCta.label}
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  {data.heroMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl bg-[#f8fafc] border border-slate-200/70 px-4 py-3.5"
                    >
                      <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Investment & Governance Summary Box */}
              <aside className="lg:col-span-4 rounded-2xl bg-[#0F172A] text-white p-6 sm:p-7 space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                    Estimasi Investasi
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {data.startingPrice}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {data.priceNote}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">
                        Waktu Rilis
                      </div>
                      <div className="text-xs text-slate-300">
                        {data.timeline}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">
                        Garansi & Pendampingan
                      </div>
                      <div className="text-xs text-slate-300">
                        {data.warranty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <FileCode2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">
                        Hak Milik 100%
                      </div>
                      <div className="text-xs text-slate-300">
                        Kode sumber & database penuh milik Anda tanpa iuran per staf.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/#harga"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 px-4 transition-colors"
                  >
                    <span>Bandingkan Skema Beli Putus vs Terima Beres</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </aside>
            </div>

            {/* Product UI Showcase Preview */}
            <div className="mt-10 pt-8 border-t border-slate-100 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-wider text-blue-600">
                  Pratinjau Antarmuka &amp; Arsitektur Sistem
                </span>
                <span>{data.previewImage.caption}</span>
              </div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm">
                <Image
                  src={data.previewImage.src}
                  alt={data.previewImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 95vw, 1100px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3-Column Architecture & Module Breakdown */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Ruang Lingkup & Arsitektur Sistem
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
              {data.architectureHeading}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {data.architectureSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.modules.map((mod) => (
              <article
                key={mod.code}
                className="rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-sm"
              >
                <div className="space-y-3">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-semibold">
                    MODUL {mod.code}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0F172A] leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {mod.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] text-slate-700 leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Guarantees & Ideal Fit */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Standar Kualitas Abinest
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
                  Komitmen Teknis & Keamanan Serah Terima
                </h2>
              </div>
              <div className="space-y-4">
                {data.guarantees.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-[#f8fafc] border border-slate-200/70 p-4 space-y-1"
                  >
                    <h3 className="text-sm font-semibold text-[#0F172A]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Kesesuaian Organisasi
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
                  Paling Tepat Digunakan Oleh
                </h2>
                <ul className="space-y-3">
                  {data.idealFor.map((segment) => (
                    <li
                      key={segment}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{segment}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-blue-50/70 border border-blue-100 p-4 space-y-3">
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
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
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold py-2.5 px-5 transition-colors"
                >
                  <span>Minta Proposal & Estimasi</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GroveFooterSection />
      <GroveFloatingWhatsApp />
    </div>
  );
}
