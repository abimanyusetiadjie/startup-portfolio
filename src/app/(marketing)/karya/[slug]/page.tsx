import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import {
  SIGNIFICA_WORK_ITEMS,
  getWorkItemBySlug,
} from "@/data/significa-work";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";

export function generateStaticParams() {
  return SIGNIFICA_WORK_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkItemBySlug(slug);
  if (!project) return { title: "Proyek Tidak Ditemukan" };

  return {
    title: `${project.client.replace(/\.$/, "")} — Portofolio Nyata Abinest`,
    description: project.tagline,
    alternates: { canonical: `/karya/${project.slug}` },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getWorkItemBySlug(slug);
  if (!project) notFound();

  const currentIdx = SIGNIFICA_WORK_ITEMS.findIndex((p) => p.slug === slug);
  const nextProject =
    SIGNIFICA_WORK_ITEMS[(currentIdx + 1) % SIGNIFICA_WORK_ITEMS.length];

  const waHref = buildConsultationWaUrl(
    `Halo Tim Abinest, saya melihat portofolio nyata ${project.client} dan tertarik membangun sistem dengan fungsi serupa.`
  );

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <SignificaNavbar />

      <main className="flex-1 pt-[112px] pb-20">
        {/* Top Breadcrumb */}
        <div className="sig-container pb-7">
          <Link
            href="/#karya"
            className="sig-link inline-flex items-center gap-1.5 text-[14px] font-medium text-[#6F6F71] hover:text-[#171717]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke karya nyata</span>
          </Link>
        </div>

        {/* Header */}
        <section className="sig-container pb-10 space-y-7">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                Proyek nyata · {project.sector} · {project.year}
              </p>
              <h1 className="text-[clamp(2rem,3.4vw+1rem,3.75rem)] font-bold tracking-[-0.025em] leading-[1.08]">
                <span className="text-[#6F6F71] block">{project.client}</span>
                <span className="text-[#171717] block mt-1">
                  {project.tagline}
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sig-btn-outline bg-white"
                >
                  <span>Kunjungi live</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="sig-btn-primary"
              >
                <span>Bangun sistem serupa</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tech Stack Strip */}
          <div className="flex flex-wrap items-center gap-2 py-4 border-y border-[#E8E8E8]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6F6F71] mr-2">
              Stack:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white border border-[#E8E8E8] text-[12.5px] font-mono text-[#171717]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Real App Primary Screenshot in Editorial Stage */}
          <div
            style={{ backgroundColor: project.stageBg }}
            className="rounded-[20px] p-4 sm:p-8 border border-[#E8E8E8]"
          >
            <div className="relative aspect-[4/3] w-full rounded-[14px] overflow-hidden bg-white shadow-[0_24px_60px_rgba(23,23,23,0.2)] ring-1 ring-black/10">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                priority
                sizes="(max-width: 1200px) 92vw, 1280px"
                className="object-cover object-top"
              />
            </div>
            <p className="mt-3 text-center text-[13px] font-medium text-[#171717]/80">
              {project.images[0].caption}
            </p>
          </div>
        </section>

        {/* Impact / Technical Specs Row */}
        <section className="sig-container pb-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.impactMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-[16px] bg-white border border-[#E8E8E8] p-5"
              >
                <div className="text-[26px] sm:text-[32px] font-bold tracking-[-0.025em] text-[#171717]">
                  {m.value}
                </div>
                <div className="text-[13px] text-[#6F6F71] mt-1 leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem vs. Functional Value */}
        <section className="border-t border-[#E8E8E8] py-14">
          <div className="sig-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-6 space-y-2.5">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                01 · Masalah nyata
              </p>
              <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.02em] text-[#171717]">
                Kendala operasional awal.
              </h2>
              <p className="text-[16px] leading-[1.6] text-[#6F6F71]">
                {project.problem}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-2.5">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                02 · Nilai fungsi utama
              </p>
              <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.02em] text-[#171717]">
                Solusi yang benar-benar bekerja.
              </h2>
              <p className="text-[16px] leading-[1.6] text-[#6F6F71]">
                {project.functionalValue}
              </p>
            </div>
          </div>
        </section>

        {/* Secondary Real Screenshot (if available) + Core Functional Checklist */}
        <section className="border-t border-[#E8E8E8] py-14">
          <div className="sig-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {project.images[1] && (
              <div className="lg:col-span-7 space-y-2.5">
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-white border border-[#E8E8E8] shadow-sm">
                  <Image
                    src={project.images[1].src}
                    alt={project.images[1].alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 760px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-[12.5px] text-[#6F6F71]">
                  {project.images[1].caption}
                </p>
              </div>
            )}

            <div
              className={`${
                project.images[1] ? "lg:col-span-5" : "lg:col-span-8"
              } space-y-5`}
            >
              <div className="space-y-1.5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                  03 · Fungsi terimplementasi
                </p>
                <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-[#171717]">
                  Fitur inti dalam kode produksi.
                </h2>
              </div>

              <ul className="space-y-3 border-y border-[#E8E8E8] py-5">
                {project.coreFunctions.map((fn) => (
                  <li
                    key={fn}
                    className="flex items-start gap-2.5 text-[14.5px] text-[#171717] leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-[#3C846E] shrink-0 mt-1" />
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sig-btn-primary"
                >
                  <span>Diskusikan proyek serupa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href={project.serviceHref} className="sig-btn-outline">
                  <span>Lihat layanan terkait</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="border-t border-[#E8E8E8] pt-12">
          <div className="sig-container flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                Proyek nyata berikutnya
              </p>
              <Link
                href={`/karya/${nextProject.slug}`}
                className="group inline-flex items-baseline gap-3 mt-1"
              >
                <span className="text-[26px] sm:text-[34px] font-semibold tracking-[-0.02em] text-[#171717] group-hover:text-[#6F6F71] transition-colors">
                  {nextProject.client}
                </span>
                <ArrowRight className="w-5 h-5 text-[#171717] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <Link href="/demo" className="sig-btn-outline w-fit">
              <span>Coba sandbox interaktif</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
