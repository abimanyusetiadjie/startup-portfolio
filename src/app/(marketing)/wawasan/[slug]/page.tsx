import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import {
  SIGNIFICA_INSIGHTS,
  getInsightBySlug,
} from "@/data/significa-insights";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  buildArticleJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return SIGNIFICA_INSIGHTS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [...article.tags, "Abinest", "abinest.id"],
    authors: [{ name: article.authorName }],
    alternates: { canonical: `/wawasan/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "id_ID",
      url: `${SITE_URL}/wawasan/${article.slug}`,
      siteName: "Abinest",
      title: `${article.title} | Wawasan Abinest`,
      description: article.excerpt,
      publishedTime: article.publishedIso,
      modifiedTime: article.modifiedIso,
      authors: [article.authorName],
      tags: article.tags,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Wawasan Abinest`,
      description: article.excerpt,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const otherArticles = SIGNIFICA_INSIGHTS.filter((a) => a.slug !== slug);
  const jsonLd = buildArticleJsonLd(article);

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SignificaNavbar />

      <main className="flex-1 pt-[108px] sm:pt-[124px] pb-20">
        <article className="max-w-3xl mx-auto px-5 sm:px-8 space-y-10">
          <header className="space-y-5">
            <Link
              href="/wawasan"
              className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-[#6B7280] hover:text-[#111111] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span>Semua wawasan</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#6B7280]">
              <time dateTime={article.publishedIso}>{article.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readTime}</span>
              <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] text-[12px] font-medium text-[#374151]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-[30px] sm:text-[42px] font-semibold tracking-[-0.03em] leading-[1.12] text-[#111111]">
              {article.title}
            </h1>

            <p className="text-[17.5px] sm:text-[19px] leading-[1.55] text-[#4B5563]">
              {article.excerpt}
            </p>

            {/* Author Row */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-[#E5E7EB]">
              <span
                style={{ backgroundColor: article.authorTone }}
                className="w-10 h-10 rounded-full text-white text-xs font-mono font-bold inline-flex items-center justify-center shrink-0"
              >
                {article.authorInitials}
              </span>
              <div>
                <div className="text-[15px] font-semibold text-[#111111]">
                  {article.authorName}
                </div>
                <div className="text-[13px] text-[#6B7280]">
                  {article.authorRole} · Abinest
                </div>
              </div>
            </div>
          </header>

          {/* Direct Answer Block (Answer-First for Human Clarity & AI Citations) */}
          <section
            aria-label="Ringkasan jawaban langsung"
            className="rounded-[18px] bg-[#F6F7F9] border border-[#E5E7EB] p-5 sm:p-6 space-y-2"
          >
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
              Ringkasan Cepat
            </div>
            <p className="text-[15.5px] leading-[1.68] text-[#111111] font-medium">
              {article.directAnswer}
            </p>
          </section>

          {/* Article Body */}
          <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-6 sm:p-10 space-y-8">
            {article.sections.map((sec) => (
              <section key={sec.heading} className="space-y-3">
                <h2 className="text-[21px] sm:text-[24px] font-semibold tracking-[-0.02em] text-[#111111]">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-[16px] leading-[1.75] text-[#4B5563]"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {/* Key Takeaway Callout */}
            <div className="rounded-[16px] bg-[#FAF9FB] border border-[#E5E7EB] border-l-4 border-l-[#111111] p-5 space-y-1.5">
              <div className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                Inti catatan
              </div>
              <p className="text-[15.5px] font-medium text-[#111111] leading-relaxed">
                {article.takeaway}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href={article.relatedServiceHref} className="clay-pill-btn">
                <span>{article.relatedServiceLabel}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <Link href="/harga" className="clay-pill-outline">
                Lihat rincian harga
              </Link>
            </div>
          </div>

          {/* More Insights */}
          <section className="pt-4 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
              Bacaan lainnya di Wawasan Abinest
            </h2>
            <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  href={`/wawasan/${other.slug}`}
                  className="group py-4 flex items-center justify-between gap-4 hover:bg-[#F7F7F9] px-3 -mx-3 rounded-[12px] transition-colors"
                >
                  <div>
                    <div className="text-[12.5px] text-[#6B7280]">
                      {other.date} &middot; {other.readTime}
                    </div>
                    <div className="text-[16.5px] font-medium text-[#111111] mt-0.5">
                      {other.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#111111] group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>

      <SignificaFooter />
    </div>
  );
}
