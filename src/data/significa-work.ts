export interface CaseBadge {
  eyebrow: string;
  label: string;
  iconKey: "zap" | "trending" | "globe" | "shield" | "database";
  tileBg: string;
  tileInk: string;
}

export interface CaseStudyItem {
  slug: string;
  client: string;
  tagline: string;
  sector: string;
  year: string;
  duration: string;
  deliverables: string[];
  images: { src: string; alt: string }[];
  badges: CaseBadge[];
  challenge: string;
  solution: string;
  architecture: string[];
  impactMetrics: { value: string; label: string }[];
  quote: string;
  author: string;
  serviceHref: string;
}

export const SIGNIFICA_WORK_ITEMS: CaseStudyItem[] = [
  {
    slug: "nusantara-capital",
    client: "Nusantara Capital.",
    tagline: "Web korporat super cepat, prospek naik +180%.",
    sector: "Finansial & Investasi · Jakarta",
    year: "2026",
    duration: "11 Hari Kerja",
    deliverables: [
      "Arsitektur Web Next.js Statis",
      "Desain Antarmuka Swiss Editorial",
      "SEO Teknis & Schema JSON-LD",
      "Alur Konversi WhatsApp Terukur",
    ],
    images: [
      {
        src: "/images/significa/work-nusantara-editorial.jpg",
        alt: "Presentasi editorial website korporat Nusantara Capital pada layar desktop dan seluler",
      },
      {
        src: "/images/hero-slide-web.webp",
        alt: "Tangkapan antarmuka responsif desktop dan seluler Nusantara Capital",
      },
    ],
    badges: [
      {
        eyebrow: "KECEPATAN",
        label: "0,48 dtk Muat HP",
        iconKey: "zap",
        tileBg: "#E1251B",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "KONVERSI",
        label: "+180% Prospek WA",
        iconKey: "trending",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "SEO GOOGLE",
        label: "Skor 100 / 100",
        iconKey: "globe",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "KEPEMILIKAN",
        label: "100% Hak Milik",
        iconKey: "shield",
        tileBg: "#DE6D3B",
        tileInk: "#FFFFFF",
      },
    ],
    challenge:
      "Situs web korporat sebelumnya dibangun menggunakan template CMS berat yang membutuhkan 6,8 detik untuk terbuka di jaringan 4G seluler. Mayoritas calon investor dan klien institusi langsung menutup halaman sebelum informasi layanan tampil.",
    solution:
      "Abinest merancang ulang seluruh arsitektur informasi dengan pendekatan editorial minimalis dan membangunkannya di atas Next.js prarender statis, optimasi gambar WebP adaptif, serta skema data terstruktur JSON-LD untuk pencarian Google Indonesia.",
    architecture: [
      "Prarender statis penuh (Edge CDN) dengan waktu muat di bawah 0,5 detik",
      "Hirarki tipografi bersih dan kontras tinggi untuk keterbacaan eksekutif di HP",
      "Pelacakan klik konsultasi WhatsApp otomatis per bagian halaman",
      "Serah terima repositori kode penuh 100% tanpa ikatan biaya bulanan",
    ],
    impactMetrics: [
      { value: "0,48 dtk", label: "Waktu muat halaman di seluler" },
      { value: "+180%", label: "Peningkatan permintaan konsultasi" },
      { value: "-65%", label: "Penurunan rasio keluar pengunjung" },
      { value: "100/100", label: "Skor Google PageSpeed & SEO" },
    ],
    quote:
      "Situs kami kini langsung terbuka seketika di ponsel calon investor, dan permintaan konsultasi masuk jauh lebih konsisten setiap pekan.",
    author: "Hendra Kusuma, Sektor Finansial · Jakarta",
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "sinar-distribusi",
    client: "Sinar Distribusi.",
    tagline: "ERP 4 gudang & POS, hemat 40 jam/minggu.",
    sector: "Distribusi & Grosir · 4 Gudang",
    year: "2026",
    duration: "3 Minggu Kerja",
    deliverables: [
      "Sistem ERP Multi-Gudang Real-Time",
      "Aplikasi Kasir POS & Cetak Faktur PDF",
      "Integrasi Pemindai Barcode 2D",
      "Notifikasi Stok Menipis via WhatsApp",
    ],
    images: [
      {
        src: "/images/significa/work-sinar-erp-editorial.jpg",
        alt: "Presentasi editorial dasbor ERP Multi-Gudang dan POS Sinar Distribusi",
      },
      {
        src: "/images/hero-slide-erp.webp",
        alt: "Tangkapan dasbor inventori multi-gudang dan kasir POS Abinest",
      },
    ],
    badges: [
      {
        eyebrow: "INVENTORI",
        label: "18.420 SKU Sinkron",
        iconKey: "database",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "AKURASI",
        label: "0% Selisih 4 Gudang",
        iconKey: "shield",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "EFISIENSI",
        label: "Hemat 40 Jam / Mgg",
        iconKey: "trending",
        tileBg: "#DE6D3B",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "LISENSI",
        label: "Rp0 Biaya per Staf",
        iconKey: "zap",
        tileBg: "#E1251B",
        tileInk: "#FFFFFF",
      },
    ],
    challenge:
      "Perusahaan mengelola 18.420 jenis barang di 4 gudang berbeda menggunakan kombinasi aplikasi sewa bulanan per pengguna dan rekap Excel manual. Setiap kali menambah staf admin atau kasir cabang, biaya langganan membengkak dan selisih stok kerap terjadi.",
    solution:
      "Kami membangun sistem ERP & kasir kustom berbasis PostgreSQL dengan sinkronisasi mutasi instan antar gudang, cetak faktur PDF satu klik, serta skema Beli Putus yang membebaskan perusahaan dari iuran lisensi per staf selamanya.",
    architecture: [
      "Basis data relasional PostgreSQL dengan pencatatan kartu stok tak terbantahkan",
      "Pembagian peran ketat: Pemilik, Manajer Gudang, Admin Faktur, dan Kasir",
      "Sinkronisasi stok <0,2 detik antar gudang Tangerang, Bekasi, dan toko ritel",
      "Peringatan stok kritis otomatis terkirim ke WhatsApp manajer operasional",
    ],
    impactMetrics: [
      { value: "18.420", label: "SKU aktif tersinkron real-time" },
      { value: "40 jam", label: "Waktu rekap yang dihemat tiap minggu" },
      { value: "0%", label: "Selisih catatan antar 4 gudang" },
      { value: "Rp0", label: "Biaya langganan tambahan per staf" },
    ],
    quote:
      "Kami bebas menambah puluhan staf gudang dan cabang baru tanpa memikirkan pembengkakan biaya lisensi bulanan per karyawan.",
    author: "Ir. Bambang Sutrisno, Direktur Operasional",
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "siakad-ujian-cbt",
    client: "SIAKAD & Ujian CBT.",
    tagline: "1.240 siswa ujian serentak, 0% tumbang.",
    sector: "Yayasan Pendidikan · Portal Akademik",
    year: "2026",
    duration: "3 Minggu Kerja",
    deliverables: [
      "Portal PPDB Daring & Verifikasi Berkas",
      "Mesin Ujian CBT Anti-Tumbang",
      "Generator E-Rapor PDF Massal",
      "Notifikasi Tagihan SPP ke Wali Murid",
    ],
    images: [
      {
        src: "/images/significa/work-siakad-cbt-editorial.jpg",
        alt: "Presentasi editorial aplikasi portal akademik SIAKAD dan ujian CBT",
      },
      {
        src: "/images/case-studies/siakad-education-portal.jpg",
        alt: "Pelaksanaan ujian CBT sekolah berjalan stabil tanpa gangguan",
      },
    ],
    badges: [
      {
        eyebrow: "KAPASITAS",
        label: "1.240 Siswa Serentak",
        iconKey: "trending",
        tileBg: "#DE6D3B",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "STABILITAS",
        label: "0% Gangguan Ujian",
        iconKey: "shield",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "RAPOR DIGITAL",
        label: "600 Rapor / 4 Menit",
        iconKey: "zap",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "BIAYA SISWA",
        label: "Rp0 per Siswa",
        iconKey: "database",
        tileBg: "#E1251B",
        tileInk: "#FFFFFF",
      },
    ],
    challenge:
      "Setiap musim ujian akhir dan penerimaan siswa baru (PPDB), server sekolah selalu mengalami galat 502 akibat lonjakan login ratusan siswa secara bersamaan, sementara guru membutuhkan waktu berhari-hari menyusun rapor PDF manual.",
    solution:
      "Abinest memisahkan antrean layanan ujian daring (CBT) dari mesin pembuatan rapor dan portal SPP, sehingga lonjakan trafik serentak tertangani mulus di bawah 0,35 detik sekaligus memangkas waktu cetak rapor ratusan siswa menjadi hitungan menit.",
    architecture: [
      "Isolasi layanan ujian CBT dengan penyimpanan jawaban lokal berkala (anti-hilang)",
      "Mesin antrean pencetakan 600+ E-Rapor PDF otomatis tanpa membebani server utama",
      "Integrasi status pembayaran SPP & laporan kehadiran langsung ke WhatsApp orang tua",
      "Kepemilikan penuh oleh yayasan dengan Rp0 biaya per siswa per bulan",
    ],
    impactMetrics: [
      { value: "1.240", label: "Siswa login & ujian bersamaan" },
      { value: "99,98%", label: "Uptime sepanjang pekan ujian" },
      { value: "4 menit", label: "Penerbitan 600 E-Rapor PDF" },
      { value: "Rp0", label: "Iuran bulanan per siswa" },
    ],
    quote:
      "Tidak ada lagi kendala aplikasi melambat saat ujian berlangsung. Rekap rapor ratusan siswa kini selesai dalam hitungan menit.",
    author: "Drs. H. Mulyadi, Pembina Yayasan Pendidikan",
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
];

export function getWorkItemBySlug(slug: string): CaseStudyItem | undefined {
  return SIGNIFICA_WORK_ITEMS.find((item) => item.slug === slug);
}
