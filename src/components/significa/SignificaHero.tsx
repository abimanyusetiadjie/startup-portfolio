"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignificaShowreelModal } from "./SignificaShowreelModal";
import { SignificaQuoteModal } from "./SignificaQuoteModal";

const FEATURED_SHOWCASE = [
  {
    id: "propsmart",
    label: "PropSmart SaaS",
    title: "PropSmart — Manajemen Kos Multi-Unit, Rental Yield & ML Pricing",
    summary:
      "Mengubah pencatatan meteran listrik dan penagihan manual menjadi dashboard okupansi real-time, analitik Net Rental Yield 9,45%, serta rekomendasi harga sewa berbasis Ridge Regression (R² 0,9822).",
    image: "/images/portfolio/propsmart-dashboard.png",
    alt: "Dashboard Eksekutif PropSmart menampilkan okupansi 93.75%, pendapatan bulanan, NOI, Net Rental Yield 9.45%, dan status 32 kamar",
    href: "/karya/propsmart-saas",
    fit: "top" as const,
  },
  {
    id: "amen",
    label: "Toko Amen Snack",
    title: "Toko Amen Snack — Katalog Live 1.446 SKU & Asisten WhatsApp AI",
    summary:
      "Menyatukan 1.446 master SKU PostgreSQL antara kasir toko dan web publik, dilengkapi asisten AI yang menghitung total belanja dan berat ongkir otomatis langsung ke WhatsApp.",
    image: "/images/portfolio/amen-system.jpg",
    alt: "Sistem katalog live 1.446 SKU dan asisten WhatsApp AI Toko Amen Snack",
    href: "/karya/toko-amen-snack",
    fit: "center" as const,
  },
  {
    id: "heavytrack",
    label: "HeavyTrack WMS",
    title: "HeavyTrack WMS — Gudang Spare Parts Alat Berat Offline (<5ms)",
    summary:
      "Sistem manajemen gudang offline-first untuk PT Mitra Abadi Nusantara dengan pencarian lintas part number, kunci stok anti-minus, dan cetak Surat Jalan serta Faktur dot-matrix.",
    image: "/images/portfolio/heavytrack-dashboard.png",
    alt: "Dashboard Operasional HeavyTrack WMS PT Mitra Abadi Nusantara dengan performa lokal <5ms",
    href: "/karya/heavytrack-wms",
    fit: "top" as const,
  },
];

export function SignificaHero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const current = FEATURED_SHOWCASE[activeIdx] ?? FEATURED_SHOWCASE[0];

  return (
    <>
      <section id="beranda" className="bg-white">
        {/* 1. Pure Editorial Statement — Strictly Aligned to Sacred 4+8 Grid */}
        <div className="ed-container pt-4 sm:pt-10 pb-14 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-x-10 items-start">
          <div className="lg:col-span-4 lg:pt-2 text-[13.5px] leading-[1.6] text-[#737373]">
            <p className="font-medium text-[#111111]">
              Digital Product &amp; Engineering
            </p>
            <p>Jakarta &amp; Surabaya</p>
          </div>

          <div className="lg:col-span-8">
            <h1 className="font-sans font-semibold text-[#111111] tracking-[-0.03em] leading-[1.09] text-[clamp(2rem,3.4vw+0.75rem,3.35rem)]">
              We design and engineer software for real operations.
            </h1>

            <p className="font-serif text-[19px] sm:text-[21px] leading-[1.58] text-[#4A4A4A] mt-6 max-w-[630px]">
              Websites under 0.8s, custom ERP, WMS &amp; POS, and applied AI —
              built directly by engineers with 100% code ownership and zero
              per-user fees.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2.5 font-serif text-[17.5px]">
              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="ed-link cursor-pointer"
              >
                Mulai diskusi proyek
              </button>
              <button
                type="button"
                onClick={() => setShowreelOpen(true)}
                className="ed-link-ink cursor-pointer"
              >
                Coba demo interaktif
              </button>
            </div>
          </div>
        </div>

        {/* 2. Featured Flagship Band ("Terbaru") — Exact Work & Co Left-Rail / Right-Track Discipline */}
        <div className="ed-container">
          <div className="border-t border-[#E6E6E6] py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-10 items-start">
            {/* Left Rail: Label + Minimalist Text Switcher */}
            <div className="lg:col-span-4 space-y-5">
              <h2 className="text-[15px] font-semibold text-[#111111]">
                Terbaru
              </h2>

              <div className="flex flex-wrap lg:flex-col gap-x-5 gap-y-2 text-[14px]">
                {FEATURED_SHOWCASE.map((item, idx) => {
                  const active = idx === activeIdx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`text-left transition-colors cursor-pointer ${
                        active
                          ? "font-medium text-[#111111] underline decoration-[#D13424] decoration-1 underline-offset-4"
                          : "text-[#737373] hover:text-[#111111]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Track: Crisp Sharp-Edged Visual + Editorial Caption */}
            <div className="lg:col-span-8">
              <Link
                href={current.href}
                aria-label={`Lihat studi kasus ${current.label}`}
                className="block group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F7F5] border border-[#EAEAEA]">
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 760px"
                    className={`object-cover ${
                      current.fit === "top" ? "object-top" : "object-center"
                    } transition-transform duration-500 group-hover:scale-[1.01]`}
                  />
                </div>
              </Link>

              <div className="mt-5 max-w-[650px]">
                <h3 className="text-[19px] sm:text-[21px] font-semibold tracking-[-0.02em] leading-[1.25] text-[#111111]">
                  <Link
                    href={current.href}
                    className="hover:text-[#D13424] transition-colors"
                  >
                    {current.title}
                  </Link>
                </h3>
                <p className="font-serif text-[16.5px] sm:text-[17.5px] leading-[1.58] text-[#4A4A4A] mt-2">
                  {current.summary}{" "}
                  <Link href={current.href} className="ed-link whitespace-nowrap">
                    Lihat studi kasus
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SignificaShowreelModal
        open={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
      <SignificaQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
