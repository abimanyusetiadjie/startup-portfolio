import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import { ClayReveal } from "@/components/significa/ClayReveal";
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
  const nextImage = nextProject.images[0];
  const cleanTitle = project.client.replace(/\.$/, "");
  const nextTitle = nextProject.client.replace(/\.$/, "");

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <SignificaNavbar />

      <main className="flex-1 bg-white">
        {/* 1. Clean Editorial Hero Header (Instant LCP, zero delay) */}
        <section className="bg-[#F2F1F3] pt-[100px] sm:pt-[118px] lg:pt-[136px] pb-10 sm:pb-14 lg:pb-16">
          <div className="clay-container space-y-6 sm:space-y-8">
            <Link
              href="/#karya"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#6B7280] hover:text-[#111111] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Semua karya</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-7">
              <div className="max-w-2xl space-y-3.5">
                <p className="text-[13.5px] font-medium text-[#6B7280]">
                  {project.sector} · {project.year}
                </p>
                <h1 className="text-[clamp(2rem,4vw+0.6rem,3.75rem)] font-semibold tracking-[-0.03em] leading-[1.08] text-[#111111]">
                  {cleanTitle}
                </h1>
                <p className="text-[17.5px] sm:text-[20px] leading-[1.48] text-[#4B5563]">
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
          </div>
        </section>

        {/* 2. Uncropped Full-Width Primary HD Visual */}
        {primaryImage && (
          <section
            style={{
              background:
                "linear-gradient(180deg, #F2F1F3 0%, #F2F1F3 44%, #FFFFFF 44%, #FFFFFF 100%)",
            }}
          >
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-[clamp(1.5rem,5vw,4.75rem)] space-y-3">
              <div className="relative w-full overflow-hidden bg-[#EAEAEF] ring-1 ring-inset ring-black/[0.06] shadow-[0_24px_60px_-34px_rgba(17,19,24,0.16)]">
                <Image
                  src={primaryImage.src}
                  alt={primaryImage.alt}
                  width={primaryImage.width ?? 1440}
                  height={primaryImage.height ?? 1080}
                  priority
                  quality={85}
                  sizes="(max-width: 1200px) 94vw, 1300px"
                  className="block w-full h-auto"
                />
              </div>
              <p className="text-[13.5px] text-[#6B7280]">
                {primaryImage.caption}
              </p>
            </div>
          </section>
        )}

        {/* 3. Calm 2-Column Metadata Strip + Concise Story (No wall of text, no tech-stack clutter) */}
        <section className="clay-container py-14 sm:py-16 lg:py-24 space-y-14 lg:space-y-16">
          <ClayReveal>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 pb-10 sm:pb-12 border-b border-[#E5E7EB]">
              <div className="space-y-1">
                <dt className="text-[12.5px] uppercase tracking-[0.06em] text-[#8C8E94]">
                  Fokus Sistem
                </dt>
                <dd className="text-[16px] font-medium text-[#111111]">
                  {project.scope}
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-[12.5px] uppercase tracking-[0.06em] text-[#8C8E94]">
                  Kepemilikan
                </dt>
                <dd className="text-[16px] font-medium text-[#111111]">
                  Hak milik kode penuh · Tanpa sewa per staf
                </dd>
              </div>
            </dl>
          </ClayReveal>

          {/* Editorial Pull-Quote + Short Two-Part Context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <ClayReveal className="lg:col-span-5 space-y-2.5">
              <p className="text-[12.5px] uppercase tracking-[0.06em] text-[#8C8E94]">
                Latar Belakang
              </p>
              <p className="text-[18px] sm:text-[20px] leading-[1.58] text-[#111111] font-normal">
                {project.problem}
              </p>
            </ClayReveal>

            <ClayReveal delay={0.06} className="lg:col-span-6 lg:col-start-7 space-y-2.5">
              <p className="text-[12.5px] uppercase tracking-[0.06em] text-[#8C8E94]">
                Solusi yang Dibangun
              </p>
              <p className="text-[17px] sm:text-[18.5px] leading-[1.65] text-[#4B5563]">
                {project.functionalValue}
              </p>
            </ClayReveal>
          </div>
        </section>

        {/* 4. Scannable Numbered Highlights (01–04) + Optional Secondary Visual */}
        <section className="bg-[#F3F3F3] py-14 sm:py-18 lg:py-24">
          <div className="clay-container space-y-12 lg:space-y-16">
            <ClayReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-[12.5px] uppercase tracking-[0.06em] text-[#8C8E94]">
                  Ringkasan Kemampuan
                </p>
                <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-[-0.025em] text-[#111111]">
                  Yang langsung bekerja untuk tim Anda
                </h2>
              </div>

              <Link href={project.serviceHref} className="clay-arrow-link w-fit !text-[15px]">
                <span>Lihat layanan terkait</span>
                <ArrowRight className="w-4 h-4 text-[#6B7280]" />
              </Link>
            </ClayReveal>

            <div
              className={
                secondaryImage
                  ? "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
                  : ""
              }
            >
              {secondaryImage && (
                <ClayReveal className="lg:col-span-7 space-y-3">
                  <div className="relative w-full overflow-hidden bg-[#E5E7EB] ring-1 ring-inset ring-black/[0.06]">
                    <Image
                      src={secondaryImage.src}
                      alt={secondaryImage.alt}
                      width={secondaryImage.width ?? 1440}
                      height={secondaryImage.height ?? 1080}
                      quality={85}
                      sizes="(max-width: 1024px) 94vw, 760px"
                      className="block w-full h-auto"
                    />
                  </div>
                  <p className="text-[13.5px] text-[#6B7280]">
                    {secondaryImage.caption}
                  </p>
                </ClayReveal>
              )}

              <div
                className={
                  secondaryImage
                    ? "lg:col-span-5 space-y-4"
                    : "grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
                }
              >
                {project.highlights.map((item, idx) => (
                  <ClayReveal
                    key={item.title}
                    delay={idx * 0.05}
                    y={12}
                    className="bg-white p-5 sm:p-6 border border-[#E5E7EB]/90 transition-shadow duration-300 hover:shadow-[0_14px_32px_-20px_rgba(17,19,24,0.16)]"
                  >
                    <div className="flex items-baseline gap-3.5">
                      <span className="text-[12.5px] font-mono text-[#9CA3AF] shrink-0">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-[#111111]">
                          {item.title}
                        </h3>
                        <p className="text-[14.5px] leading-[1.6] text-[#4B5563]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </ClayReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Interactive Next Project Editorial Preview */}
        <section className="bg-white py-14 sm:py-18 lg:py-22 border-t border-[#EFEFF2]">
          <ClayReveal className="clay-container">
            <Link
              href={`/karya/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8 bg-[#FAFAFB] hover:bg-[#F3F4F6] border border-[#EBECEF] transition-colors duration-300"
            >
              <div className="flex items-center gap-5 min-w-0">
                {nextImage && (
                  <div className="hidden sm:block relative w-28 shrink-0 overflow-hidden bg-[#EAEAEF] ring-1 ring-inset ring-black/[0.06]">
                    <Image
                      src={nextImage.src}
                      alt={nextImage.alt}
                      width={nextImage.width ?? 1440}
                      height={nextImage.height ?? 1080}
                      quality={80}
                      sizes="112px"
                      className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                )}

                <div className="space-y-1 min-w-0">
                  <p className="text-[12.5px] uppercase tracking-[0.06em] text-[#8C8E94]">
                    Proyek Berikutnya
                  </p>
                  <div className="text-[24px] sm:text-[30px] font-semibold tracking-[-0.025em] text-[#111111] truncate">
                    {nextTitle}
                  </div>
                  <p className="text-[14.5px] text-[#4B5563] line-clamp-1">
                    {nextProject.tagline}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 text-[15px] font-medium text-[#111111] shrink-0">
                <span>Buka studi kasus</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </ClayReveal>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
