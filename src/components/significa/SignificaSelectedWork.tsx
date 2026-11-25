"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  ShieldCheck,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useModalEffects } from "@/components/grove/use-modal-effects";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

interface ProjectBadge {
  eyebrow: string;
  label: string;
  icon: typeof Zap;
}

interface WorkItem {
  id: string;
  client: string;
  tagline: string;
  sector: string;
  images: { src: string; alt: string }[];
  badges: ProjectBadge[];
  summary: string;
  quote: string;
  author: string;
  detailHref: string;
}

const PROJECTS: WorkItem[] = [
  {
    id: "nusantara-capital",
    client: "Nusantara Capital.",
    tagline: "Website korporat yang meningkatkan prospek masuk +180%.",
    sector: "Finansial & Investasi · Jakarta",
    images: [
      {
        src: "/images/case-studies/modern-web-finance.jpg",
        alt: "Eksekutif mengakses website Nusantara Capital di kantor Jakarta",
      },
      {
        src: "/images/hero-slide-web.webp",
        alt: "Pratinjau antarmuka desktop dan mobile Nusantara Capital",
      },
    ],
    badges: [
      { eyebrow: "KECEPATAN", label: "0,48 dtk Muat HP", icon: Zap },
      { eyebrow: "KONVERSI", label: "+180% Prospek WA", icon: TrendingUp },
      { eyebrow: "SEO GOOGLE", label: "Skor 100 / 100", icon: Globe },
      { eyebrow: "KEPEMILIKAN", label: "100% Hak Milik", icon: ShieldCheck },
    ],
    summary:
      "Kami memindahkan situs web lama yang lambat (6,8 detik di jaringan seluler) ke arsitektur Next.js super cepat dengan struktur SEO Schema JSON-LD. Rasio pengunjung keluar langsung turun 65% dalam 60 hari pertama.",
    quote:
      "Situs kami kini langsung terbuka di ponsel calon investor, dan permintaan konsultasi masuk jauh lebih konsisten setiap hari.",
    author: "Hendra Kusuma, Sektor Finansial",
    detailHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    id: "sinar-distribusi",
    client: "Sinar Distribusi.",
    tagline: "ERP multi-gudang & kasir POS yang menghemat 40 jam kerja/minggu.",
    sector: "Distribusi & Grosir · 4 Gudang",
    images: [
      {
        src: "/images/case-studies/erp-multi-warehouse.jpg",
        alt: "Supervisor gudang memantau stok real-time dengan tablet",
      },
      {
        src: "/images/hero-slide-erp.webp",
        alt: "Dasbor ERP Multi-Gudang dan Kasir POS Abinest",
      },
    ],
    badges: [
      { eyebrow: "INVENTORI", label: "18.420 SKU Sinkron", icon: Database },
      { eyebrow: "AKURASI", label: "0% Selisih 4 Gudang", icon: ShieldCheck },
      { eyebrow: "EFISIENSI", label: "Hemat 40 Jam / Mgg", icon: TrendingUp },
      { eyebrow: "LISENSI", label: "Rp0 Biaya per Staf", icon: Zap },
    ],
    summary:
      "Menggantikan aplikasi berlangganan yang membengkak tiap tambah karyawan dengan sistem stok & kasir kustom yang terhubung ke pemindai barcode serta pengingat otomatis ke WhatsApp manajer gudang.",
    quote:
      "Kami bebas menambah puluhan staf gudang dan cabang baru tanpa memikirkan pembengkakan biaya lisensi bulanan per karyawan.",
    author: "Ir. Bambang Sutrisno, Direktur Operasional",
    detailHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    id: "yayasan-pendidikan",
    client: "SIAKAD & Ujian CBT.",
    tagline: "1.240 siswa ujian serentak 0% tumbang, 600 rapor selesai 4 menit.",
    sector: "Yayasan Pendidikan · Portal Akademik",
    images: [
      {
        src: "/images/case-studies/siakad-education-portal.jpg",
        alt: "Siswa mengerjakan ujian daring CBT dengan stabil di laboratorium komputer",
      },
      {
        src: "/images/hero-slide-ai.webp",
        alt: "Integrasi notifikasi WhatsApp otomatis dan dokumen digital",
      },
    ],
    badges: [
      { eyebrow: "KAPASITAS", label: "1.240 Siswa Serentak", icon: TrendingUp },
      { eyebrow: "STABILITAS", label: "0% Gangguan Ujian", icon: ShieldCheck },
      { eyebrow: "RAPOR DIGITAL", label: "600 Rapor / 4 Menit", icon: Zap },
      { eyebrow: "BIAYA SISWA", label: "Rp0 per Siswa", icon: Database },
    ],
    summary:
      "Memisahkan jalur akses ujian daring (CBT) dari proses pencetakan rapor digital dan portal SPP agar ribuan siswa tetap lancar ujian serentak sekaligus mengirim laporan otomatis ke wali murid.",
    quote:
      "Tidak ada lagi kendala aplikasi melambat saat ujian berlangsung. Rekap rapor ratusan siswa kini selesai dalam hitungan menit.",
    author: "Drs. H. Mulyadi, Pembina Yayasan Pendidikan",
    detailHref: "/jasa-pembuatan-sistem-erp",
  },
];

function ProjectRow({
  item,
  onOpenDetail,
}: {
  item: WorkItem;
  onOpenDetail: (item: WorkItem) => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const currentImg = item.images[imgIdx] ?? item.images[0];

  const prev = () =>
    setImgIdx((i) => (i === 0 ? item.images.length - 1 : i - 1));
  const next = () =>
    setImgIdx((i) => (i === item.images.length - 1 ? 0 : i + 1));

  return (
    <article className="border-t border-[#E8E8E8] last:border-b hover:bg-[#C6C6C8]/[0.12] transition-colors duration-200">
      <div className="sig-container py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {/* Left Column: Significa Signature Muted Client + Dark Tagline + Badges + Outlined CTA */}
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <h3 className="text-[clamp(1.85rem,2.1vw+1.15rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
              <span className="text-[#6F6F71] block">{item.client}</span>
              <span className="text-[#171717] block mt-1">{item.tagline}</span>
            </h3>

            {/* 2-Column Achievement Badges (Significa Style) */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-md pt-2">
              {item.badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-[12px] bg-white border border-[#E8E8E8] text-[#171717] inline-flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-[#6F6F71]">
                        {b.eyebrow}
                      </div>
                      <div className="text-[13.5px] font-medium text-[#171717] leading-snug truncate">
                        {b.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenDetail(item)}
              className="sig-btn-outline"
            >
              <span>Lihat ringkasan proyek</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Significa 4:3 Rounded Media Carousel */}
        <div className="relative group">
          <div className="relative aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8]">
            <Image
              src={currentImg.src}
              alt={currentImg.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover object-center transition-all duration-300"
            />
          </div>

          {/* Clean Prev / Next Carousel Buttons */}
          {item.images.length > 1 && (
            <div className="mt-3 flex items-center justify-between gap-2 text-xs text-[#6F6F71]">
              <span className="font-mono">
                {item.sector} · 0{imgIdx + 1} / 0{item.images.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prev}
                  aria-label={`Gambar sebelumnya untuk ${item.client}`}
                  className="w-9 h-9 rounded-[12px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] hover:ring-4 hover:ring-[#FFD124]/25 text-[#171717] inline-flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={`Gambar berikutnya untuk ${item.client}`}
                  className="w-9 h-9 rounded-[12px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] hover:ring-4 hover:ring-[#FFD124]/25 text-[#171717] inline-flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function SignificaSelectedWork() {
  const [selected, setSelected] = useState<WorkItem | null>(null);
  useModalEffects(Boolean(selected), () => setSelected(null));

  return (
    <section id="karya" className="scroll-mt-20 pt-10 sm:pt-14 bg-[#F7F7F7]">
      <div className="sig-container pb-8 sm:pb-10">
        <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#171717]">
          Karya terpilih.
        </h2>
      </div>

      <div>
        {PROJECTS.map((item) => (
          <ProjectRow
            key={item.id}
            item={item}
            onOpenDetail={setSelected}
          />
        ))}
      </div>

      {/* Clean Significa Light Modal for Project Case Summary */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sig-project-modal-title"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-[#171717]/45 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[88dvh] overflow-y-auto overscroll-contain rounded-[20px] bg-[#F7F7F7] border border-[#E8E8E8] shadow-2xl p-6 sm:p-8 space-y-6"
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8E8E8]">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
                  {selected.sector}
                </div>
                <h3
                  id="sig-project-modal-title"
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] mt-1"
                >
                  {selected.client}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Tutup ringkasan proyek"
                className="w-10 h-10 rounded-[12px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center shrink-0 cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8]">
              <Image
                src={selected.images[0].src}
                alt={selected.images[0].alt}
                fill
                sizes="(max-width: 768px) 92vw, 640px"
                className="object-cover object-center"
              />
            </div>

            <p className="text-[15.5px] text-[#171717] leading-relaxed">
              {selected.summary}
            </p>

            <blockquote className="rounded-[16px] bg-white border border-[#E8E8E8] p-5 space-y-2">
              <p className="text-[14.5px] text-[#171717] italic leading-relaxed">
                &ldquo;{selected.quote}&rdquo;
              </p>
              <footer className="text-xs font-semibold text-[#6F6F71]">
                — {selected.author}
              </footer>
            </blockquote>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={buildConsultationWaUrl(
                  `Halo Tim Abinest, saya tertarik membangun sistem serupa proyek ${selected.client}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "significa_work_modal",
                    service: selected.client,
                  })
                }
                className="sig-btn-primary"
              >
                <span>Diskusikan proyek serupa</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href={selected.detailHref}
                onClick={() => setSelected(null)}
                className="sig-btn-outline"
              >
                <span>Lihat detail layanan</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
