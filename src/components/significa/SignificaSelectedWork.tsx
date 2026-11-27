"use client";

import Image from "next/image";
import Link from "next/link";
import { SIGNIFICA_WORK_ITEMS } from "@/data/significa-work";

// 6 sharp-framed visual projects for the crisp 2x3 editorial grid (Work & Co Updates discipline)
const GRID_SLUGS = [
  "toko-amen-snack",
  "heavytrack-wms",
  "lacak-korupsi",
  "looku-ai",
  "central-scaffolding",
  "ypi-al-fuad",
];

// Remaining 10 real projects presented in a timeless Work & Co Index list (all 16 real projects accessible)
const INDEX_SLUGS = [
  "propsmart-saas",
  "crew-ai-hris",
  "smartpos-aneka-rasa",
  "scalebase-crm",
  "capstonenews-portal",
  "desahub-simkopdes",
  "kinetic-fitness",
  "logisync-fleet",
  "ai-cv-screening",
  "siakad-sekolah",
];

export function SignificaSelectedWork() {
  const gridItems = GRID_SLUGS.map((slug) =>
    SIGNIFICA_WORK_ITEMS.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  const indexItems = INDEX_SLUGS.map((slug) =>
    SIGNIFICA_WORK_ITEMS.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="karya" className="scroll-mt-8 bg-white">
      {/* 1. Karya Pilihan — Strict 2-Column Editorial Grid on the Sacred Right Track */}
      <div className="ed-container">
        <div className="border-t border-[#E6E6E6] py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-[15px] font-semibold text-[#111111]">
              Karya Pilihan
            </h2>
            <p className="font-serif text-[15px] leading-relaxed text-[#737373] max-w-[220px]">
              Sistem operasional, portal, dan produk AI yang telah dibangun.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-12">
            {gridItems.map((item) => {
              const img = item.images[0];
              return (
                <article key={item.slug} className="group">
                  <Link
                    href={`/karya/${item.slug}`}
                    aria-label={`Lihat sistem ${item.client}`}
                    className="block"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F7F5] border border-[#EAEAEA]">
                      {img && (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 370px"
                          className={`object-cover ${
                            img.fit === "top" ? "object-top" : "object-center"
                          } transition-transform duration-500 group-hover:scale-[1.015]`}
                        />
                      )}
                    </div>
                  </Link>

                  <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.015em] text-[#111111]">
                    <Link
                      href={`/karya/${item.slug}`}
                      className="hover:text-[#D13424] transition-colors"
                    >
                      {item.client.replace(/\.$/, "")}
                    </Link>
                  </h3>

                  <p className="mt-1.5 font-serif text-[15.5px] leading-[1.52] text-[#4A4A4A]">
                    {item.tagline}{" "}
                    <Link
                      href={`/karya/${item.slug}`}
                      className="ed-link whitespace-nowrap"
                    >
                      Lihat sistem
                    </Link>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Indeks Proyek — Timeless Hairline Directory of All Additional Real Systems */}
      <div className="ed-container">
        <div className="border-t border-[#E6E6E6] py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-[15px] font-semibold text-[#111111]">
              Indeks Proyek
            </h2>
            <p className="font-serif text-[15px] leading-relaxed text-[#737373] max-w-[220px]">
              Arsip sistem ERP, HRIS, POS, portal berita, dan AI lainnya.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#E6E6E6] border-t border-b border-[#E6E6E6]">
            {indexItems.map((item) => (
              <Link
                key={item.slug}
                href={`/karya/${item.slug}`}
                className="group py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-6"
              >
                <span className="text-[17px] font-medium tracking-[-0.01em] text-[#111111] group-hover:text-[#D13424] transition-colors shrink-0">
                  {item.client.replace(/\.$/, "")}
                </span>
                <span className="font-serif text-[15px] text-[#595959] sm:text-right leading-snug">
                  {item.tagline}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
