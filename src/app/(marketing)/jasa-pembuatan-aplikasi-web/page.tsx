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

const CANONICAL_PATH = "/jasa-pembuatan-aplikasi-web";

const WEBAPP_FAQS = [
  {
    question: "Aplikasi web custom apa saja yang bisa dibangun oleh Abinest?",
    answer:
      "Kami membangun berbagai aplikasi bisnis berbasis web (SaaS maupun internal): dashboard manajemen properti/kos, CRM pipeline penjualan, HRIS karyawan, sistem monitoring armada/logistik, portal pelanggan, sistem booking, hingga aplikasi AI khusus sesuai alur kerja usaha Anda.",
  },
  {
    question: "Apakah aplikasi web custom bisa diakses lewat HP sekaligus komputer kantor?",
    answer:
      "Ya. Setiap aplikasi dirancang responsif dan dapat dipasangkan sebagai Progressive Web App (PWA) sehingga tim lapangan maupun pimpinan bisa langsung memantau laporan, memindai barcode, atau menyetujui transaksi dari ponsel tanpa instalasi rumit di App Store/Play Store.",
  },
  {
    question: "Bagaimana hak cipta source code jika kami membangun produk SaaS atau aplikasi internal?",
    answer:
      "Pada skema Beli Putus, 100% hak milik kode sumber, desain antarmuka, dan database diserahkan penuh ke perusahaan Anda—bebas dikembangkan tim internal di masa depan tanpa ketergantungan vendor (zero vendor lock-in).",
  },
];

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Web Custom, Dashboard Bisnis & SaaS Indonesia",
  description:
    "Jasa pembuatan aplikasi web custom (Custom Web App), dashboard operasional, CRM, HRIS, portal klien, dan produk SaaS di Indonesia mulai Rp4 juta. 100% hak milik source code tanpa biaya per user.",
  keywords: [
    "jasa pembuatan aplikasi web custom",
    "jasa pembuatan aplikasi bisnis indonesia",
    "software house custom web application",
    "jasa pembuatan dashboard admin dan crm",
    "jasa pembuatan aplikasi saas indonesia",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest",
    title: "Jasa Pembuatan Aplikasi Web Custom, Dashboard & SaaS | Abinest",
    description:
      "Software house spesialis aplikasi web custom: CRM, HRIS, manajemen properti, logistik, portal pelanggan, dan produk SaaS dengan 100% hak milik source code.",
    images: [
      {
        url: "/images/portfolio/propsmart-dashboard.webp",
        width: 1440,
        height: 1080,
        alt: "Dashboard aplikasi web custom PropSmart dengan peta unit, tagihan otomatis, dan analisis arus kas",
      },
      DEFAULT_OG_IMAGE,
    ],
  },
};

const serviceData: ServiceDetailData = {
  slug: "aplikasi-web-custom",
  breadcrumbLabel: "Aplikasi Web Custom & SaaS",
  eyebrow: "Layanan Nasional · Custom Web App, Dashboard, CRM, HRIS & SaaS",
  title:
    "Jasa Pembuatan Aplikasi Web Custom yang Mengikuti Alur Kerja Bisnis Anda 100%",
  subtitle:
    "Saat software jadi di pasaran terlalu kaku dan spreadsheet mulai kewalahan menampung transaksi tim, aplikasi web custom memberi Anda kendali penuh. Mulai dari dashboard operasional, CRM, HRIS, manajemen properti, hingga produk SaaS siap jual—dibangun rapi dengan hak milik kode penuh.",
  heroMetrics: [
    { value: "Mulai Rp4 jt", label: "Pengembangan bertahap mulai dari modul inti" },
    { value: "Zero Lock-In", label: "100% hak milik source code & basis data" },
    { value: "Web & HP", label: "Nyaman diakses dari komputer kantor maupun ponsel" },
  ],
  startingPrice: "Mulai Rp4 juta",
  priceNote:
    "Nilai investasi menyesuaikan jumlah modul dan kompleksitas alur; pembayaran bertahap 3 termin mengikuti hasil uji coba nyata di server staging.",
  timeline: "MVP / modul inti siap dalam 2–6 minggu bertahap",
  warranty: "Garansi bug-fix pascarilis + dokumentasi serah terima kode",
  waMessage:
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai Jasa Pembuatan Aplikasi Web Custom / Dashboard / SaaS untuk kebutuhan bisnis kami.",
  serviceNameForAnalytics: "Aplikasi Web Custom & SaaS",
  secondaryCta: {
    label: "Lihat 17 Studi Kasus Nyata",
    href: "/karya",
  },
  previewImage: {
    src: "/images/portfolio/propsmart-dashboard.webp",
    alt: "Antarmuka aplikasi web custom PropSmart yang menampilkan peta status 32 kamar, arus kas, simulasi harga, dan pengingat tagihan",
    caption: "Contoh Aplikasi Web Custom Abinest (PropSmart) — Dashboard Real-Time, Tagihan Otomatis & Analitik Keuangan",
  },
  architectureHeading: "Dari Ide atau SOP Rumit Menjadi Aplikasi Web Siap Pakai",
  architectureSubheading:
    "Anda tidak perlu paham istilah teknis pemrograman. Cukup jelaskan alur kerja tim Anda hari ini—kami terjemahkan menjadi rancangan antarmuka, hak akses peran, dan aplikasi siap produksi.",
  modules: [
    {
      code: "01",
      title: "Pemetaan Alur Kerja & Desain Antarmuka Jernih",
      description:
        "Sebelum satu baris kode ditulis, seluruh alur persetujuan, laporan, dan tampilan layar disepakati bersama agar tidak ada fitur mubazir.",
      deliverables: [
        "Sesi pemetaan masalah, peran pengguna & daftar modul prioritas",
        "Desain antarmuka bersih yang mudah dioperasikan staf non-IT",
        "Pratinjau interaktif di server uji coba sebelum serah terima final",
        "Skema rilis bertahap (MVP dulu, lalu tambah fitur saat bisnis tumbuh)",
      ],
    },
    {
      code: "02",
      title: "Dashboard Operasional, Hak Akses & Integrasi API",
      description:
        "Bangun pusat kendali data yang menyatukan pencatatan tim lapangan, persetujuan manajer, pembayaran, hingga notifikasi otomatis.",
      deliverables: [
        "Manajemen peran pengguna (Pemilik, Manajer, Admin, Staf Lapangan)",
        "Integrasi pembayaran (QRIS/VA), WhatsApp resmi, peta GPS, atau QR code",
        "Ekspor laporan instan ke PDF (faktur/kontrak A4) maupun Excel",
        "Pencatatan riwayat aktivitas (audit log) untuk menjaga akurasi data",
      ],
    },
    {
      code: "03",
      title: "Skalabilitas Produk SaaS & Serah Terima Bersih",
      description:
        "Cocok baik untuk aplikasi internal perusahaan maupun founder startup yang ingin meluncurkan produk SaaS berlangganan sendiri.",
      deliverables: [
        "Arsitektur multi-cabang atau multi-tenant yang terisolasi aman",
        "Struktur kode bersih & terdokumentasi agar mudah dilanjutkan tim Anda",
        "Bebas dipasang di cloud pribadi, VPS perusahaan, atau dikelola Abinest",
        "Pelatihan pemakaian staf & garansi perbaikan teknis pascarilis",
      ],
    },
  ],
  guarantees: [
    {
      title: "Terbukti Lewat 17 Proyek Lintas Industri Nyata",
      description:
        "Mulai dari manajemen properti (PropSmart), logistik armada (LogiSync), HRIS (CREW), CRM penjualan (ScaleBase), hingga otomasi AI (Look.u & BlindATS).",
    },
    {
      title: "Komunikasi Terbuka dengan Progres Mingguan yang Bisa Diklik",
      description:
        "Setiap minggu Anda menerima tautan uji coba langsung untuk memeriksa progres nyata—bukan sekadar laporan teks hingga tenggat waktu tiba.",
    },
    {
      title: "Perlindungan Kerahasiaan Bisnis (NDA) & Kepemilikan Penuh",
      description:
        "Seluruh ide produk, data operasional, dan kode sumber terlindungi perjanjian kerahasiaan serta 100% diserahkan kepada perusahaan Anda.",
    },
  ],
  idealFor: [
    "Perusahaan yang proses kerjanya unik sehingga software jadi di pasaran tidak bisa mengakomodasi SOP internal mereka.",
    "Founder startup atau pebisnis yang ingin membangun MVP produk SaaS dengan cepat, rapi, dan siap dikembangkan investor.",
    "Bisnis properti/kos, ekspedisi logistik, HRD, dan tim sales B2B yang membutuhkan dashboard pemantauan terpusat.",
    "Organisasi yang ingin menggabungkan portal pelanggan, transaksi internal, dan notifikasi WhatsApp dalam satu sistem terpadu.",
  ],
  faqs: WEBAPP_FAQS,
  relatedLinks: [
    { label: "Daftar Harga & Skema", href: "/harga" },
    { label: "Lihat 17 Studi Kasus", href: "/karya" },
    { label: "Sistem ERP & Gudang WMS", href: "/jasa-pembuatan-sistem-erp" },
    { label: "Software House vs Freelancer", href: "/wawasan/software-house-vs-freelancer-untuk-proyek-bisnis" },
  ],
};

const jsonLd = buildServicePageJsonLd({
  name: "Jasa Pembuatan Aplikasi Web Custom, Dashboard Bisnis & SaaS Indonesia",
  breadcrumbLabel: "Aplikasi Web Custom & SaaS",
  path: CANONICAL_PATH,
  description: serviceData.subtitle,
  startingPriceIdr: 4000000,
  areaServed: ["Jakarta", "Surabaya", "Bandung", "Indonesia"],
  faqs: WEBAPP_FAQS,
});

export default function AplikasiWebCustomPage() {
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
