import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import {
  BRAND_INFO,
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_URL,
  buildBreadcrumbNode,
  buildOrganizationNode,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tentang Abinest — Studio Website, Aplikasi Bisnis & Automasi Indonesia",
  description:
    "Kenali Abinest Digital Systems (abinest.id): studio produk digital & software house Indonesia yang merancang website modern, ERP/POS/SIAKAD kustom, dan automasi WhatsApp resmi dengan 100% hak milik kode.",
  alternates: { canonical: "/tentang" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}/tentang`,
    siteName: "Abinest",
    title: "Tentang Abinest Digital Systems (abinest.id)",
    description:
      "Profil resmi Abinest Digital Systems Indonesia: pendiri, standar pengerjaan transparan, 100% hak milik kode, serta area layanan Jakarta, Surabaya & seluruh Indonesia.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbNode([
      { name: "Beranda", path: "/" },
      { name: "Tentang Abinest", path: "/tentang" },
    ]),
    buildOrganizationNode(),
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/tentang#about`,
      url: `${SITE_URL}/tentang`,
      name: "Tentang Abinest Digital Systems",
      description: BRAND_INFO.description,
      inLanguage: "id-ID",
      mainEntity: { "@id": ORGANIZATION_ID },
    },
  ],
};

const PRINCIPLES = [
  {
    code: "01",
    title: "100% Hak Milik Kode & Kendali Domain",
    detail:
      "Pada skema Beli Putus, seluruh kode sumber, database, dan kepemilikan domain diserahkan utuh ke tangan Anda tanpa mengunci klien pada iuran lisensi per staf.",
  },
  {
    code: "02",
    title: "Desain Clean yang Nyaman Dipakai Tim Non-IT",
    detail:
      "Setiap website dan aplikasi dirancang bersih, cepat dibuka di ponsel 4G, dan mudah dipahami staf gudang, kasir, maupun admin sekolah tanpa pelatihan rumit.",
  },
  {
    code: "03",
    title: "Biaya Transparan & Pembayaran Bertahap",
    detail:
      "Ruang lingkup, jadwal rilis, dan rincian biaya disepakati terbuka di depan. Pembayaran mengikuti progres nyata—bukan lunas di muka—disertai garansi teknis pascarilis.",
  },
  {
    code: "04",
    title: "Terbuka untuk Pribadi, UMKM hingga Perusahaan",
    detail:
      "Kami melayani proyek pribadi, UMKM berkembang, yayasan pendidikan, hingga korporasi di seluruh Indonesia, lengkap dengan penawaran resmi, kontrak, invoice formal, dan NDA.",
  },
];

export default function TentangPage() {
  const waHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya ingin mengenal lebih lanjut dan berdiskusi mengenai proyek digital kami."
  );

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SignificaNavbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#F2F1F3] pt-[112px] sm:pt-[132px] pb-14 sm:pb-20">
          <div className="clay-container">
            <div className="max-w-3xl space-y-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                Tentang Kami · Abinest Digital Systems (abinest.id)
              </p>
              <h1 className="text-[clamp(2rem,4vw+0.6rem,3.6rem)] font-semibold tracking-[-0.032em] leading-[1.08] text-[#111111]">
                Studio produk digital Indonesia untuk website modern, aplikasi bisnis, dan automasi kerja.
              </h1>
              <p className="text-[17.5px] sm:text-[19.5px] leading-[1.6] text-[#4B5563]">
                <strong>Abinest</strong> (secara resmi beroperasi di{" "}
                <span className="font-semibold text-[#111111]">abinest.id</span>)
                adalah studio rekayasa perangkat lunak independen yang didirikan
                oleh <strong>Abimanyu Setiadjie</strong>. Kami membantu perusahaan,
                UMKM, yayasan, dan pemilik proyek pribadi di Jakarta, Surabaya,
                serta seluruh Indonesia membangun sistem digital yang cepat,
                andal, dan 100% menjadi milik sendiri.
              </p>
            </div>
          </div>
        </section>

        {/* Entity Summary Fact Box (GEO Clarity) */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="clay-container space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.025em] leading-[1.15]">
                  Identitas Resmi &amp; Cakupan Layanan
                </h2>
                <p className="text-[15.5px] leading-[1.65] text-[#4B5563]">
                  Ringkasan fakta resmi mengenai studio Abinest Indonesia agar
                  calon mitra mudah memverifikasi layanan, wilayah kerja, dan
                  kanal komunikasi resmi kami.
                </p>
              </div>

              <div className="lg:col-span-7 rounded-[20px] border border-[#E5E7EB] bg-[#FAF9FB] p-6 sm:p-8">
                <dl className="divide-y divide-[#E5E7EB] text-[15px]">
                  {[
                    ["Nama Resmi", "Abinest Digital Systems (Abinest)"],
                    ["Website Resmi Tunggal", "https://abinest.id"],
                    ["Pendiri & Arsitek Utama", "Abimanyu Setiadjie"],
                    [
                      "Fokus Utama",
                      "Website Bisnis Cepat, Sistem ERP/WMS/POS/SIAKAD Kustom, Automasi WhatsApp Resmi Meta & OCR Faktur",
                    ],
                    [
                      "Skema Kepemilikan",
                      "Beli Putus (100% hak milik kode, Rp0/user) atau Terima Beres",
                    ],
                    [
                      "Area Layanan",
                      "Jakarta, Surabaya, dan seluruh Indonesia (Online & Pertemuan Terjadwal)",
                    ],
                    ["Kontak Resmi", "+62 813-9858-9745 · abinest.id@gmail.com"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4"
                    >
                      <dt className="sm:col-span-4 font-medium text-[#6B7280]">
                        {k}
                      </dt>
                      <dd className="sm:col-span-8 font-medium text-[#111111]">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* 4 Principles */}
            <div className="space-y-8">
              <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.025em]">
                Cara Kami Bekerja
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRINCIPLES.map((item) => (
                  <div
                    key={item.code}
                    className="rounded-[20px] border border-[#E5E7EB] bg-white p-6 sm:p-7 space-y-3"
                  >
                    <span className="text-[12px] font-mono font-semibold text-[#6B7280]">
                      {item.code}
                    </span>
                    <h3 className="text-[19px] font-semibold tracking-[-0.015em] text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[1.68] text-[#4B5563]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Guarantees & Internal Navigation */}
            <div className="rounded-[24px] bg-[#111318] text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.025em] leading-tight">
                  Ingin melihat langsung hasil kerja dan simulasi biaya kami?
                </h2>
                <ul className="space-y-2 pt-1 text-[14.5px] text-[#D1D5DB]">
                  {[
                    "Konsultasi awal gratis tanpa kewajiban order",
                    "Bisa mencoba demo live ERP, SIAKAD, dan WhatsApp AI langsung tanpa login",
                    "Estimasi biaya & timeline transparan sebelum mulai",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 rounded-full bg-white text-[#111111] text-[14.5px] font-semibold hover:bg-[#F3F4F6] transition-colors"
                >
                  Konsultasi via WhatsApp
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
                <Link
                  href="/karya"
                  className="inline-flex items-center justify-center h-[46px] px-6 rounded-full border border-white/25 text-white text-[14.5px] font-medium hover:bg-white/10 transition-colors"
                >
                  Lihat 17 Studi Kasus
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SignificaFooter />
    </div>
  );
}
