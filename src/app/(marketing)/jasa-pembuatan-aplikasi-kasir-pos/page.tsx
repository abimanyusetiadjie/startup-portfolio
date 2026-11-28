import type { Metadata } from "next";
import {
  GroveServiceDetailTemplate,
  type ServiceDetailData,
} from "@/components/grove/GroveServiceDetailTemplate";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  buildServicePageJsonLd,
} from "@/lib/seo";

const CANONICAL_PATH = "/jasa-pembuatan-aplikasi-kasir-pos";

const POS_FAQS = [
  {
    question: "Apakah aplikasi kasir POS Abinest ada biaya bulanan per outlet atau per kasir?",
    answer:
      "Tidak. Dengan skema Beli Putus mulai Rp4 juta, biaya lisensi per kasir dan per cabang adalah Rp0 selamanya. Anda bebas menambah kasir dan gerai baru tanpa terpotong iuran langganan aplikasi.",
  },
  {
    question: "Apakah mendukung barcode scanner, printer struk termal, dan pembayaran QRIS?",
    answer:
      "Ya. Sistem mendukung pindai barcode USB maupun kamera, shortcut keyboard cepat untuk antrean padat, cetak struk termal 58mm/80mm, Split Pay, Tunai, Kartu EDC, hingga pembayaran QRIS.",
  },
  {
    question: "Apakah laporan margin dan laba bersih bisa disembunyikan dari kasir?",
    answer:
      "Bisa. Sistem memakai pemisahan hak akses peran (RBAC) ketat sehingga staf kasir hanya melihat layar transaksi, sementara laporan omzet, HPP, stok kritis, dan laba bersih hanya bisa dibuka pemilik.",
  },
];

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Kasir POS Tanpa Biaya Bulanan (Beli Putus)",
  description:
    "Jasa pembuatan aplikasi kasir POS kustom untuk toko ritel, minimarket, kafe, apotek, dan jaringan multi-cabang mulai Rp4 juta. Barcode cepat, cetak struk termal, QRIS, Rp0 biaya per outlet selamanya.",
  keywords: [
    "jasa pembuatan aplikasi kasir pos",
    "aplikasi kasir pos tanpa biaya bulanan",
    "software kasir beli putus indonesia",
    "sistem pos multi cabang barcode qris",
    "pembuatan aplikasi kasir custom",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest",
    title: "Jasa Pembuatan Aplikasi Kasir POS Beli Putus | Abinest",
    description:
      "Sistem kasir barcode cepat, cetak struk termal, stok multi-cabang, dan laporan laba pemilik—mulai Rp4 juta tanpa iuran bulanan per outlet.",
    images: [
      {
        url: "/images/portfolio/smartpos-kasir.webp",
        width: 1440,
        height: 810,
        alt: "Antarmuka Kasir SmartPOS Abinest dengan pindai barcode dan pembayaran QRIS",
      },
      DEFAULT_OG_IMAGE,
    ],
  },
};

const serviceData: ServiceDetailData = {
  slug: "aplikasi-kasir-pos",
  breadcrumbLabel: "Aplikasi Kasir POS Kustom",
  eyebrow: "Layanan Khusus · Ritel, F&B, Apotek & Multi-Cabang",
  title:
    "Jasa Pembuatan Aplikasi Kasir POS Kustom Tanpa Biaya Bulanan Per Outlet",
  subtitle:
    "Berhenti membayar iuran bulanan aplikasi kasir yang terus membengkak tiap kali Anda membuka cabang baru. Abinest membangun sistem kasir barcode cepat, cetak struk termal, sinkron stok gudang, dan laporan laba pemilik—100% milik bisnis Anda.",
  heroMetrics: [
    { value: "Rp0", label: "Biaya langganan per outlet, mesin kasir, atau staf" },
    { value: "F1–F12", label: "Pintasan keyboard & barcode cepat bebas antre" },
    { value: "100%", label: "Hak milik kode sumber & data transaksi toko" },
  ],
  startingPrice: "Mulai Rp4 juta",
  priceNote:
    "Sekali bayar skema Beli Putus (Rp0 biaya per outlet/kasir) atau pilihan Terima Beres jika ingin pemantauan server ditangani penuh tim Abinest.",
  timeline: "Selesai dalam 2–4 minggu bertahap siap operasional",
  warranty: "Garansi teknis pascarilis + pelatihan kasir & pemilik",
  waMessage:
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan Aplikasi Kasir POS Beli Putus untuk toko/cabang kami.",
  serviceNameForAnalytics: "Aplikasi Kasir POS Kustom",
  secondaryCta: {
    label: "Lihat Studi Kasus SmartPOS",
    href: "/karya/smartpos-aneka-rasa",
  },
  previewImage: {
    src: "/images/portfolio/smartpos-kasir.webp",
    alt: "Antarmuka kasir SmartPOS Abinest menampilkan pindai barcode F2, shortcut F1-F12, Split Pay, Cash, Kartu EDC, QRIS, dan cetak struk",
    caption: "SmartPOS — Pindai Barcode Cepat, Shortcut F1–F12, Split Pay, QRIS & Cetak Struk Termal",
  },
  architectureHeading: "Dirancang untuk Kecepatan Meja Kasir Nyata",
  architectureSubheading:
    "Bukan sekadar mencatat angka, setiap layar kasir dirancang ergonomis agar kasir baru bisa lancar dalam 15 menit dan pemilik mendapat laporan laba bersih secara instan.",
  modules: [
    {
      code: "01",
      title: "Layar Kasir Cepat & Multi-Pembayaran",
      description:
        "Antarmuka transaksi ringan yang tetap lancar dipakai di komputer kasir lama maupun tablet saat jam sibuk.",
      deliverables: [
        "Pindai barcode USB/kamera & pencarian SKU instan",
        "Pintasan keyboard F1–F12 tanpa perlu bolak-balik mouse",
        "Dukungan Tunai, Kartu EDC, QRIS, hingga Split Pay",
        "Cetak struk termal 58mm/80mm & tutup shift kasir otomatis",
      ],
    },
    {
      code: "02",
      title: "Kontrol Stok Multi-Cabang & Harga Bertingkat",
      description:
        "Setiap barang terjual langsung memotong stok di cabang terkait sehingga selisih opname dapat ditekan drastis.",
      deliverables: [
        "Harga eceran, grosir, diskon promo, dan paket bundling",
        "Transfer stok antar cabang & peringatan stok minimum",
        "Pencatatan pembelian supplier & retur barang",
        "Riwayat mutasi keluar-masuk barang per produk",
      ],
    },
    {
      code: "03",
      title: "Dashboard Laba & Keamanan Akses Pemilik",
      description:
        "Pantau omzet harian dari ponsel di mana saja tanpa membuka rahasia HPP dan margin kepada staf kasir.",
      deliverables: [
        "Pemisahan hak akses ketat: Pemilik, Kepala Toko, dan Kasir",
        "Laporan omzet harian, produk terlaris, HPP & laba bersih",
        "Log aktivitas pembatalan transaksi (void) anti-kecurangan",
        "Ekspor laporan keuangan rapi ke Excel dan PDF sekali klik",
      ],
    },
  ],
  guarantees: [
    {
      title: "Hemat Puluhan Juta dalam 3 Tahun untuk Bisnis Multi-Cabang",
      description:
        "Aplikasi kasir sewa umumnya menarik biaya Rp200–500 ribu per outlet per bulan. Dengan Beli Putus, Anda bebas ekspansi cabang tanpa lonjakan biaya lisensi.",
    },
    {
      title: "Bisa Disesuaikan dengan Aturan Unik Bisnis Anda",
      description:
        "Mulai dari sistem timbangan, resep bahan baku kafe, komisi pegawai, poin member, hingga integrasi toko online dan WhatsApp—semua bisa dibangun sesuai SOP nyata.",
    },
    {
      title: "Ringan di Perangkat Kasir yang Sudah Ada",
      description:
        "Tidak memaksa Anda membeli paket hardware kasir khusus yang mahal; sistem berjalan mulus di PC Windows, laptop, maupun tablet yang sudah Anda miliki.",
    },
  ],
  idealFor: [
    "Toko ritel, minimarket, toko bahan bangunan, dan toko grosir dengan ratusan hingga ribuan SKU.",
    "Kafe, restoran, bakery, dan usaha F&B yang ingin menambah cabang tanpa biaya langganan per outlet.",
    "Apotek, toko kosmetik, pet shop, dan toko elektronik yang membutuhkan kontrol stok serta serial/kedaluwarsa.",
    "Pemilik usaha yang ingin menghentikan kebocoran kasir dan memantau laporan laba harian secara real-time.",
  ],
  faqs: POS_FAQS,
  relatedLinks: [
    { label: "Daftar Harga & Simulasi 3 Tahun", href: "/harga" },
    { label: "Studi Kasus SmartPOS", href: "/karya/smartpos-aneka-rasa" },
    { label: "Sistem ERP & Gudang WMS", href: "/jasa-pembuatan-sistem-erp" },
    { label: "Panduan POS Tanpa Biaya Bulanan", href: "/wawasan/cara-memilih-aplikasi-kasir-pos-tanpa-biaya-bulanan" },
  ],
};

const jsonLd = buildServicePageJsonLd({
  name: "Jasa Pembuatan Aplikasi Kasir POS Tanpa Biaya Bulanan (Beli Putus)",
  breadcrumbLabel: "Aplikasi Kasir POS Kustom",
  path: CANONICAL_PATH,
  description: serviceData.subtitle,
  startingPriceIdr: 4000000,
  areaServed: ["Jakarta", "Surabaya", "Indonesia"],
  faqs: POS_FAQS,
});

export default function AplikasiKasirPosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GroveServiceDetailTemplate data={serviceData} />
    </>
  );
}
