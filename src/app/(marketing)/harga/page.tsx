import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_URL,
  buildBreadcrumbNode,
  buildFaqNode,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Daftar Harga Jasa Website, Sistem ERP/POS/SIAKAD & Automasi WA",
  description:
    "Transparansi biaya pembuatan website mulai Rp1,5 juta, aplikasi bisnis ERP/WMS/POS/SIAKAD mulai Rp4 juta (Rp0/user), dan automasi WhatsApp resmi mulai Rp1,5 juta di Abinest (abinest.id).",
  keywords: [
    "harga pembuatan website bisnis",
    "biaya pembuatan sistem erp custom",
    "harga aplikasi kasir pos beli putus",
    "biaya automasi whatsapp resmi meta",
    "perbandingan beli putus vs sewa saas",
  ],
  alternates: { canonical: "/harga" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}/harga`,
    siteName: "Abinest",
    title: "Daftar Harga & Skema Beli Putus Abinest (abinest.id)",
    description:
      "Rincian transparan harga website, ERP/POS/SIAKAD kustom tanpa biaya per user, serta perbandingan total biaya 3 tahun vs software sewa.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const PRICING_FAQS = [
  {
    question: "Apakah ada biaya bulanan ke Abinest setelah sistem selesai?",
    answer:
      "Pada skema Beli Putus, biaya bulanan ke Abinest adalah Rp0 selamanya dan kode sumber 100% milik Anda. Di luar itu hanya ada biaya perpanjangan domain atau server cloud sesuai pemakaian aktual atas nama Anda sendiri.",
  },
  {
    question: "Bagaimana sistem pembayarannya agar aman bagi klien?",
    answer:
      "Pembayaran dilakukan bertahap mengikuti progres nyata (DP awal, tahap uji coba staging, dan pelunasan saat siap rilis)—tidak perlu lunas di awal.",
  },
  {
    question: "Bagaimana jika bisnis belum punya tim IT internal?",
    answer:
      "Anda bisa memilih skema Terima Beres dengan biaya pemeliharaan flat per sistem (bukan per staf) sehingga monitoring server, backup rutin, dan perawatan teknis ditangani penuh oleh tim Abinest.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbNode([
      { name: "Beranda", path: "/" },
      { name: "Harga & Skema", path: "/harga" },
    ]),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/harga#webpage`,
      url: `${SITE_URL}/harga`,
      name: "Daftar Harga Jasa Website, ERP/POS/SIAKAD & Automasi WhatsApp Abinest",
      inLanguage: "id-ID",
      about: { "@id": ORGANIZATION_ID },
    },
    buildFaqNode(PRICING_FAQS, `${SITE_URL}/harga#faq`),
  ],
};

const PACKAGES = [
  {
    code: "01",
    name: "Website & Portal Bisnis",
    price: "Mulai Rp1,5 juta",
    timeline: "7–14 hari kerja",
    summary:
      "Company profile korporat, landing page kampanye iklan, katalog e-commerce, hingga portal yayasan & media.",
    features: [
      "Desain clean kustom (mobile-first, bukan template berat)",
      "Fondasi SEO Google, Schema JSON-LD & kecepatan buka tinggi",
      "Tombol konversi WhatsApp & analitik klik terukur",
      "100% hak milik kode sumber & domain atas nama Anda",
    ],
    href: "/jasa-pembuatan-website-jakarta",
    cta: "Detail Website Bisnis",
  },
  {
    code: "02",
    name: "Sistem ERP, WMS, POS & SIAKAD",
    price: "Mulai Rp4 juta",
    timeline: "2–6 minggu bertahap",
    summary:
      "Aplikasi operasional kustom yang mengikuti SOP bisnis Anda sepenuhnya tanpa biaya langganan per staf.",
    features: [
      "Rp0 biaya tambahan per staf, kasir, cabang, atau siswa",
      "Bisa mulai dari modul terpenting (stok, kasir, atau akademik)",
      "Akses multi-peran & ekspor laporan PDF/Excel otomatis",
      "100% hak milik source code & kendali penuh basis data",
    ],
    href: "/jasa-pembuatan-sistem-erp",
    cta: "Detail ERP, POS & SIAKAD",
  },
  {
    code: "03",
    name: "Automasi WhatsApp Resmi & AI",
    price: "Mulai Rp1,5 juta",
    timeline: "1–4 minggu",
    summary:
      "Asisten CS & order WhatsApp 24 jam lewat jalur resmi Meta serta pembaca foto/PDF faktur otomatis (OCR).",
    features: [
      "Menggunakan WhatsApp Business Cloud API resmi (anti-blokir)",
      "Terhubung ke data stok & harga asli (anti-halusinasi)",
      "Admin bisa ambil alih percakapan kapan saja dalam 1 klik",
      "Tanpa biaya sewa aplikasi bulanan ke Abinest",
    ],
    href: "/jasa-automasi-whatsapp",
    cta: "Detail Automasi WA & AI",
  },
];

export default function HargaPage() {
  const waHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya ingin meminta estimasi rincian biaya yang sesuai dengan kebutuhan proyek kami."
  );

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SignificaNavbar />

      <main className="flex-1">
        {/* Hero + Answer-First Summary */}
        <section className="bg-[#F2F1F3] pt-[112px] sm:pt-[132px] pb-14 sm:pb-16">
          <div className="clay-container">
            <div className="max-w-3xl space-y-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                Transparansi Biaya · Abinest
              </p>
              <h1 className="text-[clamp(2rem,4vw+0.6rem,3.5rem)] font-semibold tracking-[-0.032em] leading-[1.08] text-[#111111]">
                Harga transparan sejak awal, tanpa biaya tersembunyi.
              </h1>
              <p className="text-[17.5px] sm:text-[19px] leading-[1.6] text-[#4B5563]">
                Di <strong>Abinest (abinest.id)</strong>, biaya pembuatan website
                bisnis mulai dari <strong>Rp1,5 juta</strong>, automasi WhatsApp
                resmi mulai <strong>Rp1,5 juta</strong>, dan aplikasi operasional
                kustom (ERP, WMS, POS, SIAKAD) mulai <strong>Rp4 juta</strong>{" "}
                dengan pembayaran bertahap serta pilihan skema{" "}
                <strong>Beli Putus (Rp0/user selamanya)</strong> atau{" "}
                <strong>Terima Beres</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Core Pricing Tracks */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="clay-container space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.code}
                  className="rounded-[22px] border border-[#E5E7EB] bg-white p-7 flex flex-col justify-between gap-7"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[12px] font-mono text-[#6B7280]">
                      <span>{pkg.code}</span>
                      <span>{pkg.timeline}</span>
                    </div>
                    <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-[#111111]">
                      {pkg.name}
                    </h2>
                    <div className="text-[28px] font-semibold tracking-[-0.03em] text-[#111111]">
                      {pkg.price}
                    </div>
                    <p className="text-[14.5px] leading-[1.65] text-[#4B5563]">
                      {pkg.summary}
                    </p>
                    <ul className="space-y-2.5 pt-2 border-t border-[#F1F2F4]">
                      {pkg.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-[14px] text-[#374151] leading-snug"
                        >
                          <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={pkg.href} className="clay-pill-outline w-full">
                    <span>{pkg.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Structured HTML Comparison Table (High-Impact SEO + GEO Citation Table) */}
            <div className="space-y-5">
              <div className="max-w-2xl space-y-2">
                <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-[-0.025em]">
                  Perbandingan 3 Tahun: Beli Putus Abinest vs Sewa SaaS Per User
                </h2>
                <p className="text-[15px] text-[#4B5563]">
                  Simulasi ilustratif untuk bisnis atau institusi dengan 15
                  pengguna aktif (admin, gudang, kasir, atau guru).
                </p>
              </div>

              <div className="overflow-x-auto rounded-[18px] border border-[#E5E7EB]">
                <table className="w-full text-left border-collapse text-[14.5px]">
                  <thead className="bg-[#F6F7F9] text-[#111111]">
                    <tr className="border-b border-[#E5E7EB]">
                      <th className="py-4 px-5 font-semibold">Komponen</th>
                      <th className="py-4 px-5 font-semibold">
                        Sewa SaaS Bulanan (Per User)
                      </th>
                      <th className="py-4 px-5 font-semibold">
                        Beli Putus Abinest (Kustom)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#111111]">
                        Biaya Awal Pembuatan
                      </td>
                      <td className="py-4 px-5">
                        Rp0 – Rp2 juta (setup standar)
                      </td>
                      <td className="py-4 px-5 font-medium text-[#111111]">
                        Mulai Rp4 – 12 juta (sekali bayar, sesuai modul)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#111111]">
                        Biaya Lisensi 15 Staf / Bulan
                      </td>
                      <td className="py-4 px-5">
                        ± Rp1,5 – 2,25 juta / bulan (Rp100–150rb/staf)
                      </td>
                      <td className="py-4 px-5 font-semibold text-[#111111]">
                        Rp0 / bulan (bebas tambah staf &amp; cabang)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#111111]">
                        Estimasi Total Lisensi 36 Bulan
                      </td>
                      <td className="py-4 px-5">± Rp54 – 81 juta (sewa terus)</td>
                      <td className="py-4 px-5 font-semibold text-[#111111]">
                        Rp4 – 12 juta (+ server cloud sesuai pakai)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-medium text-[#111111]">
                        Hak Milik Kode &amp; Kustomisasi SOP
                      </td>
                      <td className="py-4 px-5">
                        Tidak dimiliki · Alur mengikuti template vendor
                      </td>
                      <td className="py-4 px-5 font-medium text-[#111111]">
                        100% Hak Milik Klien · Mengikuti SOP bisnis penuh
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/audit-gratis" className="clay-pill-btn">
                  <span>Hitung Simulasi Bisnis Anda di Kalkulator Gratis</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-pill-outline"
                >
                  Konsultasi Estimasi via WhatsApp
                </a>
              </div>
            </div>

            {/* Pricing FAQ */}
            <div className="space-y-6 pt-4">
              <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.02em]">
                Pertanyaan Umum Seputar Biaya
              </h2>
              <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
                {PRICING_FAQS.map((item) => (
                  <div key={item.question} className="py-5 space-y-2">
                    <h3 className="text-[17px] font-semibold text-[#111111]">
                      {item.question}
                    </h3>
                    <p className="text-[15px] leading-[1.68] text-[#4B5563]">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
