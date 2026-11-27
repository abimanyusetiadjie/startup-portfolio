import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#D13424]/15 selection:text-[#111111]">
      <SignificaNavbar />

      <main className="flex-1 bg-white">
        {/* Header — Sacred 4+8 Editorial Rail */}
        <section className="ed-container pt-4 sm:pt-8 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-10 items-start">
          <div className="lg:col-span-4 space-y-2 lg:pt-2">
            <Link
              href="/#karya"
              className="font-serif text-[15px] ed-link-ink inline-block"
            >
              ← Kembali ke karya
            </Link>
            <div className="pt-3 text-[13.5px] text-[#737373] space-y-0.5">
              <p>{project.sector}</p>
              <p>{project.year}</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <h1 className="text-[clamp(2rem,3.2vw+0.75rem,3.25rem)] font-semibold tracking-[-0.03em] leading-[1.08] text-[#111111]">
              {project.client.replace(/\.$/, "")}
            </h1>
            <p className="font-serif text-[19px] sm:text-[21px] leading-[1.55] text-[#4A4A4A] max-w-[620px]">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-serif text-[17px] pt-1">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-link"
              >
                Diskusikan sistem serupa
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link-ink"
                >
                  Kunjungi website live
                </a>
              )}
            </div>

            <div className="pt-5 border-t border-[#E6E6E6] text-[13.5px] text-[#595959]">
              <span className="text-[#8C8C8C] mr-3">Teknologi</span>
              <span className="font-medium text-[#111111]">
                {project.techStack.join(" · ")}
              </span>
            </div>
          </div>
        </section>

        {/* Primary Visual + Metrics */}
        {primaryImage && (
          <section className="ed-container pb-14 sm:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-10">
              <div className="lg:col-span-4 text-[13.5px] text-[#737373] lg:pt-1">
                Tampilan sistem
              </div>
              <div className="lg:col-span-8 space-y-3">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F7F5] border border-[#EAEAEA]">
                  <Image
                    src={primaryImage.src}
                    alt={primaryImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 760px"
                    className={`object-cover ${
                      primaryImage.fit === "top"
                        ? "object-top"
                        : "object-center"
                    }`}
                  />
                </div>
                <p className="font-serif text-[14.5px] text-[#737373]">
                  {primaryImage.caption}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Metrics & Context */}
        <section className="ed-container">
          <div className="border-t border-[#E6E6E6] py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10">
            <div className="lg:col-span-4 text-[15px] font-semibold text-[#111111]">
              Ringkasan &amp; Dampak
            </div>
            <div className="lg:col-span-8 space-y-10">
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {project.impactMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="border-t border-[#E6E6E6] pt-3.5 space-y-1"
                  >
                    <dd className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] text-[#111111] tabular-nums">
                      {m.value}
                    </dd>
                    <dt className="font-serif text-[14px] text-[#595959] leading-snug">
                      {m.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                <div className="space-y-2">
                  <h2 className="text-[16px] font-semibold text-[#111111]">
                    Kendala awal
                  </h2>
                  <p className="font-serif text-[16px] leading-[1.65] text-[#4A4A4A]">
                    {project.problem}
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-[16px] font-semibold text-[#111111]">
                    Solusi terimplementasi
                  </h2>
                  <p className="font-serif text-[16px] leading-[1.65] text-[#4A4A4A]">
                    {project.functionalValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Functions + Secondary Image */}
        <section className="ed-container">
          <div className="border-t border-[#E6E6E6] py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10">
            <div className="lg:col-span-4 text-[15px] font-semibold text-[#111111]">
              Fungsi Inti
            </div>
            <div className="lg:col-span-8 space-y-10">
              <ul className="divide-y divide-[#E6E6E6] border-t border-b border-[#E6E6E6]">
                {project.coreFunctions.map((fn) => (
                  <li
                    key={fn}
                    className="py-4 font-serif text-[16.5px] leading-[1.6] text-[#111111]"
                  >
                    {fn}
                  </li>
                ))}
              </ul>

              {secondaryImage && (
                <div className="space-y-2.5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F7F5] border border-[#EAEAEA]">
                    <Image
                      src={secondaryImage.src}
                      alt={secondaryImage.alt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 760px"
                      className={`object-cover ${
                        secondaryImage.fit === "top"
                          ? "object-top"
                          : "object-center"
                      }`}
                    />
                  </div>
                  <p className="font-serif text-[14px] text-[#737373]">
                    {secondaryImage.caption}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-serif text-[17px]">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link"
                >
                  Bangun sistem serupa via WhatsApp
                </a>
                <Link href={project.serviceHref} className="ed-link-ink">
                  Lihat layanan terkait
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="ed-container">
          <div className="border-t border-[#E6E6E6] py-12 grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-10 items-baseline">
            <div className="lg:col-span-4 text-[13.5px] text-[#737373]">
              Proyek berikutnya
            </div>
            <div className="lg:col-span-8">
              <Link
                href={`/karya/${nextProject.slug}`}
                className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] text-[#111111] hover:text-[#D13424] transition-colors"
              >
                {nextProject.client.replace(/\.$/, "")} →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
