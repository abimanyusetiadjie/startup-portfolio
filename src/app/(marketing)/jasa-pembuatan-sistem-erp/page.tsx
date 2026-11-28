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

const CANONICAL_PATH = "/jasa-pembuatan-sistem-erp";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Sistem ERP, WMS, SIAKAD & Kasir POS Kustom",
  description:
    "Jasa pengembangan sistem ERP gudang (WMS), SIAKAD sekolah/kampus, dan aplikasi Kasir POS kustom di Indonesia mulai Rp4 juta. Skema Beli Putus dengan Rp0 biaya tambahan per pengguna selamanya.",
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
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest",
    title: "Jasa Pembuatan Sistem ERP, WMS, SIAKAD & Kasir POS Kustom | Abinest",
    description:
      "Sistem operasional usaha dan institusi yang mengikuti SOP Anda sepenuhnya—mulai Rp4 juta tanpa biaya langganan per staf, kasir, atau siswa.",
    images: [DEFAULT_OG_IMAGE],
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
    src: "/images/portfolio/smartpos-kasir.webp",
    alt: "Antarmuka kasir SmartPOS menampilkan pindai barcode F2, shortcut keyboard F1–F12, Cash, Kartu EDC, QRIS, dan cetak struk",
    caption: "Toko Ritel POS (SmartPOS) · Pindai Barcode, Shortcut F1–F12 & Split Pay · Tanpa Biaya per Staf",
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
        "Menggunakan database relasional dengan validasi ketat agar saldo stok, nilai siswa, dan kas tidak pernah tumpang tindih.",
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

const jsonLd = buildServicePageJsonLd({
  name: "Jasa Pembuatan Sistem ERP, WMS, SIAKAD & Kasir POS Kustom",
  breadcrumbLabel: "Sistem ERP, SIAKAD & Kasir POS",
  path: CANONICAL_PATH,
  description: serviceData.subtitle,
  startingPriceIdr: 4000000,
  areaServed: ["Jakarta", "Surabaya", "Indonesia"],
  faqs: [
    {
      question: "Apakah sistem ERP, POS, atau SIAKAD Abinest dikenakan biaya per user?",
      answer:
        "Tidak. Dengan skema Beli Putus mulai Rp4 juta, biaya lisensi per staf, kasir, cabang, atau siswa adalah Rp0 selamanya dan 100% kode sumber menjadi hak milik bisnis Anda.",
    },
    {
      question: "Apakah bisa mulai dari modul stok atau kasir dulu?",
      answer:
        "Ya. Pengembangan dilakukan bertahap sesuai modul paling mendesak dengan pembayaran 3 termin mengikuti progres nyata, dan bisa diperluas kapan saja.",
    },
  ],
});

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
