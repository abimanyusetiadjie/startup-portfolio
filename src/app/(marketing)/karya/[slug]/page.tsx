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
    title: `${project.client.replace(/\.$/, "")} — Studi Kasus Abinest`,
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
    `Halo Tim Abinest, saya melihat studi kasus ${project.client} dan tertarik membangun sistem dengan fungsi serupa.`
  );

  const primaryImage = project.images[0];
  const secondaryImage = project.images[1];
  const cleanTitle = project.client.replace(/\.$/, "");

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <SignificaNavbar />

      <main className="flex-1 bg-white">
        {/* Clay Light Header Band */}
        <section className="bg-[#F2F1F3] pt-[112px] lg:pt-[148px] pb-14 lg:pb-20">
          <div className="clay-container space-y-8">
            <Link
              href="/#karya"
              className="inline-flex items-center gap-2 text-[14.5px] font-medium text-[#6B7280] hover:text-[#111111] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Semua karya</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-[14px] text-[#6B7280]">
                  {project.sector} · {project.year}
                </p>
                <h1 className="text-[clamp(2.25rem,4vw+0.8rem,4rem)] font-semibold tracking-[-0.03em] leading-[1.08] text-[#111111]">
                  {cleanTitle}
                </h1>
                <p className="text-[18.5px] sm:text-[21px] leading-[1.48] text-[#4B5563]">
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-pill-outline bg-white"
                  >
                    <span>Kunjungi live</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-pill-btn"
                >
                  <span>Bangun sistem serupa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E0E0E2] flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
              <span className="text-[#8C8E94]">Teknologi</span>
              <span className="font-medium text-[#111111]">
                {project.techStack.join("  ·  ")}
              </span>
            </div>
          </div>
        </section>

        {/* Full-Width Sharp-Edged Primary Visual */}
        {primaryImage && (
          <section
            style={{
              background:
                "linear-gradient(180deg, #F2F1F3 0%, #F2F1F3 42%, #FFFFFF 42%, #FFFFFF 100%)",
            }}
          >
            <div className="clay-container space-y-3">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden bg-[#EAEAEF]">
                <Image
                  src={primaryImage.src}
                  alt={primaryImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 94vw, 1300px"
                  className={`object-cover ${
                    primaryImage.fit === "top" ? "object-top" : "object-center"
                  }`}
                />
              </div>
              <p className="text-[13.5px] text-[#6B7280]">
                {primaryImage.caption}
              </p>
            </div>
          </section>
        )}

        {/* Metrics + Narrative */}
        <section className="clay-container py-16 lg:py-24 space-y-16 lg:space-y-20">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-14 border-b border-[#E5E7EB]">
            {project.impactMetrics.map((m) => (
              <div key={m.label} className="space-y-1.5">
                <dd className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] text-[#111111] tabular-nums leading-none">
                  {m.value}
                </dd>
                <dt className="text-[14px] text-[#6B7280] leading-snug">
                  {m.label}
                </dt>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-6 space-y-3">
              <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#111111]">
                Kendala operasional awal
              </h2>
              <p className="text-[16.5px] leading-[1.68] text-[#4B5563]">
                {project.problem}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#111111]">
                Solusi yang terimplementasi
              </h2>
              <p className="text-[16.5px] leading-[1.68] text-[#4B5563]">
                {project.functionalValue}
              </p>
            </div>
          </div>
        </section>

        {/* Secondary Visual + Core Functions */}
        <section className="bg-[#F3F3F3] py-16 lg:py-24">
          <div className="clay-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {secondaryImage && (
              <div className="lg:col-span-7 space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E5E7EB]">
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
                <p className="text-[13.5px] text-[#6B7280]">
                  {secondaryImage.caption}
                </p>
              </div>
            )}

            <div
              className={`${
                secondaryImage ? "lg:col-span-5" : "lg:col-span-8"
              } space-y-6`}
            >
              <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.02em] text-[#111111]">
                Fitur inti dalam kode produksi
              </h2>

              <ul className="divide-y divide-[#E0E0E2] border-t border-b border-[#E0E0E2]">
                {project.coreFunctions.map((fn) => (
                  <li
                    key={fn}
                    className="py-4 text-[15.5px] leading-[1.6] text-[#374151]"
                  >
                    {fn}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-pill-btn"
                >
                  <span>Diskusikan sistem serupa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href={project.serviceHref} className="clay-arrow-link">
                  <span>Lihat layanan terkait</span>
                  <ArrowRight className="w-4 h-4 text-[#6B7280]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="bg-white py-16 lg:py-20">
          <div className="clay-container flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-[13.5px] text-[#8C8E94]">Proyek berikutnya</p>
              <Link
                href={`/karya/${nextProject.slug}`}
                className="group inline-flex items-baseline gap-3 mt-1"
              >
                <span className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.025em] text-[#111111] group-hover:opacity-65 transition-opacity">
                  {nextProject.client.replace(/\.$/, "")}
                </span>
                <ArrowRight className="w-5 h-5 text-[#111111] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <Link href="/demo" className="clay-arrow-link w-fit">
              <span>Coba sandbox interaktif</span>
              <ArrowRight className="w-4 h-4 text-[#6B7280]" />
            </Link>
          </div>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
