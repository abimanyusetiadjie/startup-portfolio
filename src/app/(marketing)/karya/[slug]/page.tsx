import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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

  const primaryImage = project.images[0];
  const secondaryImage = project.images[1];

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
            <span>Kembali ke karya pilihan</span>
          </Link>
        </div>

        {/* Header */}
        <section className="sig-container pb-12 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-[13px] text-[#6F6F71]">
                {project.sector} · {project.year}
              </p>
              <h1 className="text-[clamp(2rem,3.4vw+1rem,3.75rem)] font-bold tracking-[-0.025em] leading-[1.08] text-[#171717]">
                {project.client}
              </h1>
              <p className="text-[19px] sm:text-[22px] leading-[1.4] text-[#6F6F71]">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
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

          {/* Quiet Typographic Tech Stack Strip */}
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-4 border-y border-[#E5E5E5] text-[13.5px]">
            <span className="text-[#6F6F71]">Teknologi</span>
            <span className="font-medium text-[#171717]">
              {project.techStack.join("  ·  ")}
            </span>
          </div>

          {/* Primary System Visual (when available) */}
          {primaryImage && (
            <div className="space-y-2.5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-[16px] overflow-hidden bg-[#EAEAE8] border border-[#E5E5E5]">
                <Image
                  src={primaryImage.src}
                  alt={primaryImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 94vw, 1344px"
                  className={`object-cover ${
                    primaryImage.fit === "top" ? "object-top" : "object-center"
                  }`}
                />
              </div>
              <p className="text-[13px] text-[#6F6F71]">
                {primaryImage.caption}
              </p>
            </div>
          )}
        </section>

        {/* Minimalist Hairline Impact Metrics Row */}
        <section className="sig-container pb-16">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {project.impactMetrics.map((m) => (
              <div
                key={m.label}
                className="border-t border-[#E5E5E5] pt-4 space-y-1"
              >
                <dd className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.025em] text-[#171717] tabular-nums">
                  {m.value}
                </dd>
                <dt className="text-[13.5px] text-[#6F6F71] leading-snug">
                  {m.label}
                </dt>
              </div>
            ))}
          </dl>
        </section>

        {/* Problem vs. Functional Value */}
        <section className="border-t border-[#E5E5E5] py-16">
          <div className="sig-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-6 space-y-3">
              <p className="font-mono text-[12px] text-[#86868B]">01</p>
              <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#171717]">
                Kendala operasional awal.
              </h2>
              <p className="text-[16px] leading-[1.65] text-[#6F6F71]">
                {project.problem}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <p className="font-mono text-[12px] text-[#86868B]">02</p>
              <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#171717]">
                Solusi yang benar-benar bekerja.
              </h2>
              <p className="text-[16px] leading-[1.65] text-[#6F6F71]">
                {project.functionalValue}
              </p>
            </div>
          </div>
        </section>

        {/* Secondary Screenshot (if available) + Core Functional Checklist */}
        <section className="border-t border-[#E5E5E5] py-16">
          <div className="sig-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {secondaryImage && (
              <div className="lg:col-span-7 space-y-2.5">
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-[#EAEAE8] border border-[#E5E5E5]">
                  <Image
                    src={secondaryImage.src}
                    alt={secondaryImage.alt}
                    fill
                    sizes="(max-width: 1024px) 94vw, 760px"
                    className={`object-cover ${
                      secondaryImage.fit === "top"
                        ? "object-top"
                        : "object-center"
                    }`}
                  />
                </div>
                <p className="text-[12.5px] text-[#6F6F71]">
                  {secondaryImage.caption}
                </p>
              </div>
            )}

            <div
              className={`${
                secondaryImage ? "lg:col-span-5" : "lg:col-span-8"
              } space-y-6`}
            >
              <div className="space-y-2">
                <p className="font-mono text-[12px] text-[#86868B]">03</p>
                <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#171717]">
                  Fitur inti dalam kode produksi.
                </h2>
              </div>

              <ul className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
                {project.coreFunctions.map((fn) => (
                  <li
                    key={fn}
                    className="py-3.5 text-[15px] text-[#171717] leading-relaxed"
                  >
                    {fn}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-6 pt-1">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sig-btn-primary"
                >
                  <span>Diskusikan proyek serupa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href={project.serviceHref}
                  className="sig-link text-[14.5px] font-medium text-[#171717]"
                >
                  Lihat layanan terkait →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="border-t border-[#E5E5E5] pt-14">
          <div className="sig-container flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-[13px] text-[#6F6F71]">Proyek berikutnya</p>
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

            <Link
              href="/demo"
              className="sig-link inline-flex items-center gap-1.5 text-[15px] font-medium text-[#171717] w-fit"
            >
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
