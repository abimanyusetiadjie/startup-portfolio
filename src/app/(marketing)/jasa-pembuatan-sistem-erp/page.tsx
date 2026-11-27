import type { Metadata } from "next";
import {
  GroveServiceDetailTemplate,
  type ServiceDetailData,
} from "@/components/grove/GroveServiceDetailTemplate";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

const CANONICAL_PATH = "/jasa-pembuatan-sistem-erp";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Sistem ERP, SIAKAD & Kasir POS Kustom",
  description:
    "Jasa pengembangan sistem ERP gudang, SIAKAD sekolah/kampus, dan aplikasi Kasir POS kustom di Indonesia. Sekali bayar Beli Putus dengan Rp0 biaya tambahan per pengguna selamanya.",
  keywords: [
    "jasa pembuatan sistem erp",
    "software erp custom indonesia",
    "aplikasi siakad sekolah beli putus",
    "sistem kasir pos multi cabang",
    "sistem stok multi gudang tanpa iuran user",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${APP_BASE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest Digital Systems",
    title: "Jasa Pembuatan Sistem ERP, SIAKAD & Kasir POS Kustom | Abinest",
    description:
      "Sistem operasional usaha dan institusi yang mengikuti SOP Anda sepenuhnya—tanpa biaya langganan per staf, kasir, atau siswa.",
    images: [
      {
        url: "/images/abinest-og-card.jpg",
        width: 1376,
        height: 768,
        alt: "Abinest — Sistem ERP, SIAKAD & Kasir POS Kustom",
      },
    ],
  },
};

const serviceData: ServiceDetailData = {
  slug: "sistem-erp",
  breadcrumbLabel: "Sistem ERP, SIAKAD & Kasir POS",
  eyebrow: "Layanan 02 · Aplikasi Operasional Kustom",
  title:
    "Pengembangan Sistem ERP, SIAKAD & Kasir POS Kustom Tanpa Iuran Per Pengguna",
  subtitle:
    "Hentikan ketergantungan pada file Excel yang rawan selisih dan software sewa yang membatasi jumlah staf. Kami merancang aplikasi operasional yang mengikuti SOP bisnis atau sekolah Anda secara presisi.",
  heroMetrics: [
    { value: "Rp0", label: "Biaya tambahan per staf, kasir, atau siswa" },
    { value: "100%", label: "Hak milik source code & seluruh basis data" },
    { value: "99,9%", label: "Stabilitas akses tinggi untuk operasional harian" },
  ],
  startingPrice: "Mulai Rp4 juta",
  priceNote:
    "Dapat dimulai dari modul paling mendesak terlebih dahulu dengan pembayaran bertahap 3 termin sesuai progres rilis.",
  timeline: "Rilis bertahap per modul dalam 2–8 minggu",
  warranty: "Garansi teknis 60–90 hari + pelatihan staf & panduan PDF",
  waMessage:
    "Halo Tim Abinest, saya ingin mendiskusikan pembuatan Sistem ERP / SIAKAD / Kasir POS kustom untuk operasional kami.",
  serviceNameForAnalytics: "Sistem ERP, SIAKAD & Kasir POS",
  secondaryCta: {
    label: "Uji Simulasi ERP & SIAKAD Interaktif",
    href: "/demo",
  },
  previewImage: {
    src: "/images/portfolio/toko-amen-snack.webp",
    alt: "Tampilan sistem katalog dan operasional Toko Ritel POS (SmartPOS) terintegrasi stok live Abinest",
    caption: "Toko Ritel POS (SmartPOS) · Barcode <45ms · Executive BI Owner · Sinkronisasi Stok Tanpa Biaya per Staf",
  },
  architectureHeading: "Tiga Pilar Aplikasi Operasional Terpadu",
  architectureSubheading:
    "Setiap sistem dibangun dengan pembagian hak akses berbasis peran (Role-Based Access Control), pencatatan riwayat perubahan otomatis, dan ekspor laporan siap audit.",
  modules: [
    {
      code: "01",
      title: "ERP Gudang, Pembelian & Keuangan",
      description:
        "Kendalikan pergerakan stok lintas gudang, surat jalan, faktur pembelian, hingga perhitungan margin laba secara real-time.",
      deliverables: [
        "Pantau stok masuk/keluar & mutasi antar-cabang real-time",
        "Persetujuan Purchase Order (PO) & Invoice berjenjang",
        "Laporan arus kas, piutang jatuh tempo & laba rugi",
        "Audit trail lengkap siapa mengubah data & kapan",
      ],
    },
    {
      code: "02",
      title: "Kasir POS Multi-Cabang & Klinik",
      description:
        "Transaksi kasir cepat berbasis web yang mendukung barcode scanner, cetak struk thermal, serta kontrol stok bahan otomatis.",
      deliverables: [
        "Antarmuka kasir ringan yang cepat di tablet maupun PC",
        "Mendukung shift kasir, potongan harga & multi-pembayaran",
        "Pengurangan stok otomatis per item penjualan / resep",
        "Rekap omzet harian seluruh cabang di satu dashboard",
      ],
    },
    {
      code: "03",
      title: "Portal SIAKAD Sekolah & Yayasan",
      description:
        "Satukan data siswa, absensi, ujian daring serentak, penilaian rapor otomatis, dan administrasi SPP orang tua dalam satu portal.",
      deliverables: [
        "Ujian daring (CBT) stabil untuk ratusan hingga ribuan siswa",
        "Hitung nilai & cetak ratusan rapor dalam hitungan menit",
        "Tagihan SPP otomatis & riwayat pembayaran transparan",
        "Portal terpisah untuk Admin, Guru, Siswa & Wali Murid",
      ],
    },
  ],
  guarantees: [
    {
      title: "Bebas Penambahan Pengguna Tanpa Kenaikan Biaya",
      description:
        "Tambah 50 kasir cabang baru atau 1.500 siswa ajaran baru tanpa membayar sewa lisensi per akun seperti pada software SaaS.",
    },
    {
      title: "Integritas Data Transaksional & Cadangan Otomatis",
      description:
        "Menggunakan database relasional PostgreSQL dengan validasi ketat agar saldo stok, nilai siswa, dan kas tidak pernah tumpang tindih.",
    },
    {
      title: "Rilis Bertahap Mengurangi Risiko Operasional",
      description:
        "Setiap modul diuji coba bersama staf Anda di server staging sebelum menggantikan sistem pencatatan lama.",
    },
  ],
  idealFor: [
    "Distributor, grosir, dan gudang logistik dengan banyak SKU serta beberapa lokasi penyimpanan.",
    "Jaringan ritel, kafe/F&B, dan apotek atau klinik dengan lebih dari satu cabang.",
    "Sekolah, pesantren, lembaga kursus, dan kampus yang menginginkan SIAKAD mandiri tanpa biaya per siswa.",
    "Perusahaan dengan alur kerja unik yang tidak cocok dengan software jadi di pasaran.",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: APP_BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sistem ERP, SIAKAD & Kasir POS",
          item: `${APP_BASE_URL}${CANONICAL_PATH}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: "Jasa Pembuatan Sistem ERP, SIAKAD & Kasir POS Kustom",
      provider: {
        "@type": "Organization",
        name: "Abinest Digital Systems",
        url: APP_BASE_URL,
      },
      areaServed: "Indonesia",
      url: `${APP_BASE_URL}${CANONICAL_PATH}`,
      description: serviceData.subtitle,
    },
  ],
};

export default function SistemErpPage() {
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
