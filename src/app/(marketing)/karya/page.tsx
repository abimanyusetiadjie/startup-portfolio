import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import { SIGNIFICA_WORK_ITEMS } from "@/data/significa-work";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_URL,
  buildBreadcrumbNode,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portofolio & 17 Studi Kasus Website, ERP, POS, SIAKAD & AI",
  description:
    "Jelajahi 17 studi kasus nyata Abinest (abinest.id): website brand & korporat, e-commerce, sistem gudang WMS, kasir POS, properti, SIAKAD sekolah, CRM, hingga automasi WhatsApp AI.",
  alternates: { canonical: "/karya" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}/karya`,
    siteName: "Abinest",
    title: "Portofolio & 17 Studi Kasus Nyata | Abinest",
    description:
      "Katalog lengkap 17 proyek website modern, sistem operasional kustom, dan automasi AI yang dirancang oleh Abinest.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbNode([
      { name: "Beranda", path: "/" },
      { name: "Karya & Studi Kasus", path: "/karya" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/karya#collection`,
      url: `${SITE_URL}/karya`,
      name: "Portofolio & 17 Studi Kasus Abinest",
      inLanguage: "id-ID",
      publisher: { "@id": ORGANIZATION_ID },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: SIGNIFICA_WORK_ITEMS.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: item.client.replace(/\.$/, ""),
          url: `${SITE_URL}/karya/${item.slug}`,
        })),
      },
    },
  ],
};

export default function KaryaIndexPage() {
  const visualWorks = SIGNIFICA_WORK_ITEMS.filter((w) => w.images.length > 0);
  const archiveWorks = SIGNIFICA_WORK_ITEMS.filter((w) => w.images.length === 0);

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
                Portofolio &amp; Studi Kasus · {SIGNIFICA_WORK_ITEMS.length} Sistem Terbangun
              </p>
              <h1 className="text-[clamp(2rem,4vw+0.6rem,3.4rem)] font-semibold tracking-[-0.032em] leading-[1.08]">
                Karya nyata lintas website bisnis, aplikasi operasional, dan automasi AI.
              </h1>
              <p className="text-[17.5px] leading-[1.6] text-[#4B5563]">
                Setiap studi kasus merangkum tantangan lapangan, solusi fungsional,
                serta hasil konkret yang kami bangun bersama mitra di Indonesia.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="clay-container space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {visualWorks.map((item) => {
                const img = item.images[0];
                const title = item.client.replace(/\.$/, "");
                return (
                  <Link
                    key={item.slug}
                    href={`/karya/${item.slug}`}
                    className="group block space-y-4"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#F2F1F3] border border-[#E5E7EB]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-1.5 px-0.5">
                      <div className="text-[12.5px] font-medium text-[#6B7280]">
                        {item.sector} · {item.year}
                      </div>
                      <h2 className="text-[21px] font-semibold tracking-[-0.02em] text-[#111111] group-hover:opacity-70 transition-opacity">
                        {title}
                      </h2>
                      <p className="text-[15px] leading-[1.55] text-[#4B5563]">
                        {item.tagline}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {archiveWorks.length > 0 && (
              <div className="space-y-4 pt-4">
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                  Sistem Operasional &amp; Arsip Studi Kasus Lainnya
                </h2>
                <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
                  {archiveWorks.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/karya/${item.slug}`}
                      className="group py-5 flex items-center justify-between gap-4 hover:bg-[#F7F7F9] px-3 -mx-3 rounded-[12px] transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="text-[12.5px] text-[#6B7280]">
                          {item.sector} · {item.scope}
                        </div>
                        <div className="text-[18px] font-semibold text-[#111111]">
                          {item.client.replace(/\.$/, "")}
                        </div>
                        <p className="text-[14.5px] text-[#4B5563]">
                          {item.tagline}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#111111] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
