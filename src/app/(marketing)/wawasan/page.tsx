import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import { SIGNIFICA_INSIGHTS } from "@/data/significa-insights";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_URL,
  buildBreadcrumbNode,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wawasan & Panduan Website, ERP Beli Putus dan Automasi AI",
  description:
    "Kumpulan analisis objektif dan panduan bisnis dari tim Abinest (abinest.id): hitungan biaya website & ERP 3 tahun, perbandingan custom vs WordPress, performa iklan, dan WhatsApp API resmi.",
  alternates: { canonical: "/wawasan" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}/wawasan`,
    siteName: "Abinest",
    title: "Wawasan & Panduan Bisnis Digital | Abinest",
    description:
      "Panduan transparan berbasis praktik lapangan mengenai biaya website, sistem ERP/POS/SIAKAD beli putus, dan automasi WhatsApp resmi.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbNode([
      { name: "Beranda", path: "/" },
      { name: "Wawasan", path: "/wawasan" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/wawasan#collection`,
      url: `${SITE_URL}/wawasan`,
      name: "Wawasan & Panduan Bisnis Digital Abinest",
      inLanguage: "id-ID",
      publisher: { "@id": ORGANIZATION_ID },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: SIGNIFICA_INSIGHTS.map((article, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: article.title,
          url: `${SITE_URL}/wawasan/${article.slug}`,
        })),
      },
    },
  ],
};

export default function WawasanIndexPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SignificaNavbar />

      <main className="flex-1">
        <section className="bg-[#F2F1F3] pt-[112px] sm:pt-[132px] pb-14">
          <div className="clay-container">
            <div className="max-w-3xl space-y-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                Wawasan &amp; Panduan · Abinest
              </p>
              <h1 className="text-[clamp(2rem,4vw+0.6rem,3.4rem)] font-semibold tracking-[-0.032em] leading-[1.08]">
                Catatan jujur sebelum Anda berinvestasi di website atau sistem bisnis.
              </h1>
              <p className="text-[17.5px] leading-[1.6] text-[#4B5563]">
                Hitungan biaya nyata, perbandingan arsitektur, dan praktik terbaik
                dari pengerjaan proyek klien di seluruh Indonesia.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="clay-container">
            <div className="max-w-4xl space-y-6">
            {SIGNIFICA_INSIGHTS.map((article) => (
              <Link
                key={article.slug}
                href={`/wawasan/${article.slug}`}
                className="group block rounded-[20px] border border-[#E5E7EB] bg-white hover:border-[#111111] p-6 sm:p-8 transition-colors space-y-3.5"
              >
                <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#6B7280]">
                  <time dateTime={article.publishedIso}>{article.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{article.authorName}</span>
                </div>

                <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#111111] group-hover:opacity-75 transition-opacity leading-snug">
                  {article.title}
                </h2>

                <p className="text-[15.5px] leading-[1.65] text-[#4B5563]">
                  {article.excerpt}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
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
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#111111]">
                    Baca selengkapnya
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
