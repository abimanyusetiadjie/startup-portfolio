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
  if (!project) return { title: "Studi Kasus Tidak Ditemukan" };

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
    `Halo Tim Abinest, saya baru membaca studi kasus ${project.client} dan tertarik membangun sistem serupa untuk usaha kami.`
  );

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <SignificaNavbar />

      <main className="flex-1 pt-[112px] pb-20">
        {/* Top Breadcrumb */}
        <div className="sig-container pb-8">
          <Link
            href="/#karya"
            className="sig-link inline-flex items-center gap-1.5 text-[14px] font-medium text-[#6F6F71] hover:text-[#171717]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke karya terpilih</span>
          </Link>
        </div>

        {/* Editorial Case Study Header */}
        <section className="sig-container pb-12 space-y-8">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
              Studi kasus · {project.sector}
            </p>
            <h1 className="text-[clamp(2.2rem,3.6vw+1rem,4rem)] font-bold tracking-[-0.025em] leading-[1.08]">
              <span className="text-[#6F6F71] block">{project.client}</span>
              <span className="text-[#171717] block mt-1">
                {project.tagline}
              </span>
            </h1>
          </div>

          {/* Significa-Style Metadata Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[#E8E8E8] py-6 gap-6">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                Sektor
              </div>
              <div className="text-[15px] font-medium text-[#171717] mt-1">
                {project.sector}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                Tahun Rilis
              </div>
              <div className="text-[15px] font-medium text-[#171717] mt-1">
                {project.year}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                Durasi Pengerjaan
              </div>
              <div className="text-[15px] font-medium text-[#171717] mt-1">
                {project.duration}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                Cakupan Utama
              </div>
              <div className="text-[15px] font-medium text-[#171717] mt-1">
                {project.deliverables[0]}
              </div>
            </div>
          </div>

          {/* Primary 4:3 / 16:10 Hero Showcase Image */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8]">
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              fill
              priority
              sizes="(max-width: 1200px) 95vw, 1344px"
              className="object-cover object-center"
            />
          </div>
        </section>

        {/* Impact Metrics Row */}
        <section className="sig-container pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.impactMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-[16px] bg-white border border-[#E8E8E8] p-5 sm:p-6"
              >
                <div className="text-[28px] sm:text-[34px] font-bold tracking-[-0.025em] text-[#171717]">
                  {m.value}
                </div>
                <div className="text-[13.5px] text-[#6F6F71] mt-1 leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge & Solution 2-Col Editorial Narrative */}
        <section className="border-t border-[#E8E8E8] py-16">
          <div className="sig-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-6 space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                01 · Tantangan awal
              </p>
              <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.02em] text-[#171717]">
                Kendala sebelum modernisasi.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6F6F71]">
                {project.challenge}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                02 · Pendekatan &amp; solusi
              </p>
              <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.02em] text-[#171717]">
                Arsitektur yang kami bangun.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6F6F71]">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Secondary Product View + Engineering Deliverables */}
        <section className="border-t border-[#E8E8E8] py-16">
          <div className="sig-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 relative aspect-[4/3] rounded-[20px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8]">
              <Image
                src={project.images[1]?.src ?? project.images[0].src}
                alt={project.images[1]?.alt ?? project.images[0].alt}
                fill
                sizes="(max-width: 1024px) 92vw, 760px"
                className="object-cover object-top"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                  03 · Sorotan teknis
                </p>
                <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-[#171717]">
                  Hasil serah terima produksi.
                </h2>
              </div>

              <ul className="space-y-3 border-y border-[#E8E8E8] py-5">
                {project.architecture.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[15px] text-[#171717] leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-[#171717] shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="rounded-[16px] bg-white border border-[#E8E8E8] p-5 space-y-2">
                <p className="text-[15px] text-[#171717] italic leading-relaxed">
                  &ldquo;{project.quote}&rdquo;
                </p>
                <footer className="text-xs font-medium text-[#6F6F71]">
                  — {project.author}
                </footer>
              </blockquote>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sig-btn-primary"
                >
                  <span>Bangun proyek serupa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href={project.serviceHref} className="sig-btn-outline">
                  <span>Detail paket layanan</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Navigation Strip */}
        <section className="border-t border-[#E8E8E8] pt-14">
          <div className="sig-container flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                Studi kasus berikutnya
              </p>
              <Link
                href={`/karya/${nextProject.slug}`}
                className="group inline-flex items-baseline gap-3 mt-1"
              >
                <span className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.02em] text-[#171717] group-hover:text-[#6F6F71] transition-colors">
                  {nextProject.client}
                </span>
                <ArrowRight className="w-6 h-6 text-[#171717] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <Link href="/demo" className="sig-btn-outline w-fit">
              <span>Coba demo interaktif</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
