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
    title: `${article.title} — Wawasan Abinest`,
    description: article.excerpt,
    alternates: { canonical: `/wawasan/${article.slug}` },
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

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <SignificaNavbar />

      <main className="flex-1 pt-[112px] pb-20">
        <article className="max-w-3xl mx-auto px-5 sm:px-8 space-y-10">
          <div className="space-y-5">
            <Link
              href="/#wawasan"
              className="sig-link inline-flex items-center gap-1.5 text-[14px] font-medium text-[#6F6F71] hover:text-[#171717]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke wawasan</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-[13px] font-mono text-[#6F6F71]">
              <span>{article.date}</span>
              <span>&middot;</span>
              <span>{article.readTime}</span>
              <span className="hidden sm:inline">&middot;</span>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-white border border-[#E8E8E8] text-[12px] font-sans text-[#171717]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.025em] leading-[1.1] text-[#171717]">
              {article.title}
            </h1>

            <p className="text-[18px] leading-[1.55] text-[#6F6F71]">
              {article.excerpt}
            </p>

            {/* Author Row */}
            <div className="flex items-center gap-3.5 pt-3 border-t border-[#E8E8E8]">
              <span
                style={{ backgroundColor: article.authorTone }}
                className="w-10 h-10 rounded-full text-white text-xs font-mono font-bold inline-flex items-center justify-center shrink-0"
              >
                {article.authorInitials}
              </span>
              <div>
                <div className="text-[15px] font-medium text-[#171717]">
                  {article.authorName}
                </div>
                <div className="text-[13px] text-[#6F6F71]">
                  {article.authorRole}
                </div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="rounded-[20px] bg-white border border-[#E8E8E8] p-6 sm:p-10 space-y-8">
            {article.sections.map((sec) => (
              <section key={sec.heading} className="space-y-3">
                <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#171717]">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-[16px] leading-[1.7] text-[#6F6F71]"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {/* Key Takeaway Callout */}
            <div className="rounded-[16px] bg-[#F7F7F7] border border-[#E8E8E8] border-l-4 border-l-[#FFD124] p-5 space-y-1.5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                Inti catatan
              </div>
              <p className="text-[15.5px] font-medium text-[#171717] leading-relaxed">
                {article.takeaway}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={article.relatedServiceHref}
                className="sig-btn-primary"
              >
                <span>{article.relatedServiceLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* More Insights */}
          <div className="pt-4 space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
              Bacaan lainnya
            </p>
            <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  href={`/wawasan/${other.slug}`}
                  className="group py-4 flex items-center justify-between gap-4 hover:bg-[#EDEDED]/60 px-2 -mx-2 rounded-[12px] transition-colors"
                >
                  <div>
                    <div className="text-[12px] font-mono text-[#6F6F71]">
                      {other.date} &middot; {other.readTime}
                    </div>
                    <div className="text-[17px] font-medium text-[#171717] mt-0.5">
                      {other.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6F6F71] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      <SignificaFooter />
    </div>
  );
}
