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

const CANONICAL_PATH = "/jasa-pembuatan-siakad-sekolah";

const SIAKAD_FAQS = [
  {
    question: "Apakah SIAKAD Abinest mengenakan biaya langganan per siswa setiap bulan?",
    answer:
      "Tidak. Skema Beli Putus Abinest mulai Rp4 juta membebaskan yayasan, sekolah, pesantren, atau kampus dari biaya iuran per siswa dan per guru selamanya—mau 200 atau 5.000 siswa, biaya lisensi ke Abinest tetap Rp0.",
  },
  {
    question: "Apakah sistem ujian CBT kuat menampung ratusan siswa ujian serentak?",
    answer:
      "Ya. Arsitektur modul ujian CBT dirancang ringan dengan penyimpanan jawaban berkala otomatis agar siswa tidak kehilangan progres meski koneksi Wi-Fi sekolah sempat terputus sesaat.",
  },
  {
    question: "Bisakah modul SPP, PPDB online, dan notifikasi WhatsApp orang tua digabungkan?",
    answer:
      "Bisa. SIAKAD dapat dikembangkan bertahap—mulai dari PPDB, absensi & nilai rapor, tagihan SPP dengan bukti bayar otomatis, hingga notifikasi kehadiran atau tagihan langsung ke WhatsApp wali murid.",
  },
];

export const metadata: Metadata = {
  title: "Jasa Pembuatan SIAKAD Sekolah, Pesantren & Ujian CBT (Beli Putus)",
  description:
    "Jasa pembuatan sistem informasi akademik (SIAKAD), PPDB online, tagihan SPP, dan ujian CBT anti-down untuk sekolah, yayasan, pesantren & kampus mulai Rp4 juta. Rp0 biaya per siswa selamanya.",
  keywords: [
    "jasa pembuatan siakad sekolah",
    "aplikasi siakad sekolah beli putus",
    "sistem informasi akademik tanpa biaya per siswa",
    "aplikasi ujian cbt sekolah anti down",
    "software manajemen yayasan pesantren",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest",
    title: "Jasa Pembuatan SIAKAD Sekolah & Ujian CBT Beli Putus | Abinest",
    description:
      "Sistem akademik lengkap: PPDB, absensi, rapor, pembayaran SPP, dan ujian CBT tanpa iuran bulanan per siswa—100% milik institusi Anda.",
    images: [
      {
        url: "/images/portfolio/ypi-al-fuad-web.webp",
        width: 1440,
        height: 1080,
        alt: "Portal Yayasan Pendidikan & PPDB Terpadu yang dibangun Abinest",
      },
      DEFAULT_OG_IMAGE,
    ],
  },
};

const serviceData: ServiceDetailData = {
  slug: "siakad-sekolah",
  breadcrumbLabel: "SIAKAD Sekolah & Ujian CBT",
  eyebrow: "Layanan Khusus · Sekolah, Yayasan, Pesantren & Kampus",
  title:
    "Jasa Pembuatan SIAKAD Sekolah, Yayasan & Ujian CBT Tanpa Biaya Per Siswa",
  subtitle:
    "Satukan PPDB online, data siswa dan guru, absensi harian, penilaian rapor, administrasi SPP, hingga ujian CBT serentak dalam satu platform milik yayasan sendiri—tanpa terbebani iuran bulanan per siswa yang menyedot dana operasional.",
  heroMetrics: [
    { value: "Rp0", label: "Biaya tambahan per siswa, santri, atau guru selamanya" },
    { value: "Multi-Unit", label: "Mendukung 1 yayasan lintas jenjang (TK–SMK/Pesantren)" },
    { value: "100%", label: "Hak milik kode sumber & data akademik institusi" },
  ],
  startingPrice: "Mulai Rp4 juta",
  priceNote:
    "Dapat dimulai dari modul prioritas (mis. PPDB + Akademik atau SPP + Rapor) dengan pembayaran bertahap dan dukungan dokumen resmi yayasan/instansi.",
  timeline: "Selesai dalam 2–6 minggu bertahap siap tahun ajaran baru",
  warranty: "Garansi teknis pascarilis + pelatihan operator & guru",
  waMessage:
    "Halo Tim Abinest, kami dari pihak sekolah/yayasan ingin berkonsultasi mengenai pembuatan SIAKAD / Portal PPDB / Ujian CBT.",
  serviceNameForAnalytics: "SIAKAD Sekolah & Ujian CBT",
  secondaryCta: {
    label: "Coba Live Demo SIAKAD & CBT",
    href: "/demo",
  },
  previewImage: {
    src: "/images/portfolio/ypi-al-fuad-web.webp",
    alt: "Portal Yayasan Pendidikan Multi-Unit & Alur PPDB Terpadu Abinest",
    caption: "Portal Multi-Jenjang Yayasan Pendidikan & Modul Akademik Terpusat — Mudah Dipakai Operator & Guru",
  },
  architectureHeading: "Satu Ekosistem Akademik yang Mengikuti Aturan Yayasan Anda",
  architectureSubheading:
    "Dirancang ramah untuk operator TU, wali kelas, bendahara, hingga orang tua agar administrasi tidak lagi menumpuk di akhir semester.",
  modules: [
    {
      code: "01",
      title: "Portal PPDB Online & Master Data Multi-Jenjang",
      description:
        "Permudah pendaftaran siswa baru sekaligus rapikan seluruh data induk siswa, rombongan belajar, guru, dan jadwal pelajaran.",
      deliverables: [
        "Formulir PPDB online, unggah berkas & pantau status seleksi",
        "Pengelolaan multi-unit dalam 1 yayasan (RA/TK, SD/MI, SMP, SMA/SMK)",
        "Pembagian kelas, jadwal mengajar & riwayat alumni terstruktur",
        "Akses peran terpisah: Yayasan, Kepala Sekolah, TU, Guru & Wali Murid",
      ],
    },
    {
      code: "02",
      title: "Absensi, Penilaian Rapor & Ujian CBT",
      description:
        "Otomatiskan rekap nilai dan pelaksanaan ujian berbasis komputer agar guru fokus pada proses belajar mengajar.",
      deliverables: [
        "Absensi harian per kelas & rekap kehadiran otomatis",
        "Input nilai formatif/sumatif & ekspor rapor rapi ke PDF/Excel",
        "Modul ujian CBT dengan bank soal, acak soal & simpan jawaban otomatis",
        "Ringkasan performa kelas dan peringatan dini kehadiran siswa",
      ],
    },
    {
      code: "03",
      title: "Administrasi SPP & Notifikasi WhatsApp Wali Murid",
      description:
        "Kurangi tunggakan dan antrean loket tata usaha dengan pencatatan tagihan yang transparan bagi bendahara dan orang tua.",
      deliverables: [
        "Tagihan SPP bulanan, uang gedung, seragam & beasiswa/potongan",
        "Kuitansi digital & laporan pemasukan harian siap cetak",
        "Pengingat tagihan SPP & info kehadiran via WhatsApp resmi",
        "Pemisahan data keuangan per unit pendidikan bagi pengurus yayasan",
      ],
    },
  ],
  guarantees: [
    {
      title: "Aman dari Kenaikan Iuran Per Siswa Setiap Tahun Ajaran",
      description:
        "Saat jumlah siswa bertumbuh dari 300 menjadi 1.500 anak, biaya lisensi sistem tetap Rp0—anggaran yayasan dapat dialokasikan untuk fasilitas pendidikan.",
    },
    {
      title: "Antarmuka Sederhana yang Nyaman bagi Guru Senior & Operator TU",
      description:
        "Setiap alur input nilai, absensi, dan cetak laporan dibuat ringkas dengan pelatihan langsung dan buku panduan berbahasa Indonesia.",
    },
    {
      title: "Siap Dokumen Formal Yayasan & Kepemilikan Data Penuh",
      description:
        "Tersedia penawaran resmi, RAB, kontrak kerja sama, invoice formal, serta cadangan data akademik yang sepenuhnya dikuasai sekolah.",
    },
  ],
  idealFor: [
    "Yayasan pendidikan Islam / swasta yang membawahi beberapa jenjang (TK, SD/MI, SMP-IT, SMA/SMK, hingga Pesantren).",
    "Sekolah yang ingin menjalankan PPDB online dan ujian CBT mandiri tanpa khawatir server tumbang saat ujian serentak.",
    "Lembaga kursus, bimbingan belajar, dan akademi pelatihan yang membutuhkan manajemen peserta & sertifikat.",
    "Institusi pendidikan yang ingin beralih dari rekap Excel manual dan software sewa berbayar per siswa.",
  ],
  faqs: SIAKAD_FAQS,
  relatedLinks: [
    { label: "Coba Live Demo SIAKAD & CBT", href: "/demo" },
    { label: "Studi Kasus YPI Al-Fuad", href: "/karya/ypi-al-fuad" },
    { label: "Studi Kasus SIAKAD Sekolah", href: "/karya/siakad-sekolah" },
    { label: "Checklist Memilih SIAKAD & CBT", href: "/wawasan/checklist-memilih-siakad-dan-cbt-sekolah-yayasan" },
  ],
};

const jsonLd = buildServicePageJsonLd({
  name: "Jasa Pembuatan SIAKAD Sekolah, Yayasan & Ujian CBT (Beli Putus)",
  breadcrumbLabel: "SIAKAD Sekolah & Ujian CBT",
  path: CANONICAL_PATH,
  description: serviceData.subtitle,
  startingPriceIdr: 4000000,
  areaServed: ["Jakarta", "Surabaya", "Indonesia"],
  faqs: SIAKAD_FAQS,
});

export default function SiakadSekolahPage() {
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
