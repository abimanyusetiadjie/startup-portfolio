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

const CANONICAL_PATH = "/jasa-pembuatan-website-surabaya";

const SURABAYA_FAQS = [
  {
    question: "Apakah Abinest melayani pertemuan langsung atau survei kebutuhan untuk klien di Surabaya & Jawa Timur?",
    answer:
      "Ya. Tim Abinest melayani konsultasi online cepat maupun pertemuan terjadwal untuk perusahaan, pabrik, distributor, klinik, dan UMKM di Surabaya, Sidoarjo, Gresik, hingga Malang dan seluruh Jawa Timur.",
  },
  {
    question: "Berapa kisaran biaya pembuatan website perusahaan di Surabaya lewat Abinest?",
    answer:
      "Pembuatan website bisnis modern mulai Rp1,5 juta untuk landing page atau profil UMKM, hingga Rp4–12 juta untuk website korporat B2B multi-halaman, katalog produk, atau portal dengan kalkulator estimasi—100% hak milik kode dan domain.",
  },
  {
    question: "Apakah website yang dibuat sudah dioptimalkan untuk pencarian lokal Google Surabaya & Jawa Timur?",
    answer:
      "Ya. Setiap situs dibangun dengan struktur SEO lokal, Schema JSON-LD, kecepatan muat sub-detik di jaringan seluler 4G, serta tombol konsultasi WhatsApp terukur agar mudah menangkap calon pembeli dari pencarian Google wilayah Jawa Timur.",
  },
];

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Surabaya & Jawa Timur Cepat (Beli Putus)",
  description:
    "Jasa pembuatan website perusahaan, katalog B2B industri, toko online, dan portal bisnis di Surabaya, Sidoarjo, Gresik & Jawa Timur mulai Rp1,5 juta. Cepat dibuka, ramah SEO lokal, 100% hak milik kode.",
  keywords: [
    "jasa pembuatan website surabaya",
    "software house surabaya",
    "jasa website perusahaan surabaya jawa timur",
    "jasa buat website cepat sidoarjo gresik",
    "jasa website katalog industri surabaya",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest",
    title: "Jasa Pembuatan Website Surabaya & Jawa Timur | Abinest",
    description:
      "Studio website & software bisnis untuk perusahaan, distributor, dan UMKM Surabaya–Sidoarjo–Gresik mulai Rp1,5 juta dengan 100% hak milik kode.",
    images: [
      {
        url: "/images/portfolio/central-scaffolding-web.webp",
        width: 1440,
        height: 1080,
        alt: "Website B2B industri cepat dengan kalkulator estimasi kebutuhan proyek oleh Abinest",
      },
      DEFAULT_OG_IMAGE,
    ],
  },
};

const serviceData: ServiceDetailData = {
  slug: "website-surabaya",
  breadcrumbLabel: "Website Bisnis Surabaya & Jatim",
  eyebrow: "Layanan Regional · Surabaya, Sidoarjo, Gresik & Jawa Timur",
  title:
    "Jasa Pembuatan Website Bisnis & Katalog B2B Surabaya Berkecepatan Tinggi",
  subtitle:
    "Dirancang khusus untuk kebutuhan perusahaan manufaktur, distributor logistik, kontraktor, klinik, hingga brand ritel di Surabaya dan Jawa Timur yang ingin tampil kredibel di Google, cepat dibuka di ponsel pembeli, dan langsung menghasilkan permintaan penawaran lewat WhatsApp.",
  heroMetrics: [
    { value: "Mulai Rp1,5 jt", label: "Transparan di depan · Skema Beli Putus" },
    { value: "7–14 Hari", label: "Estimasi pengerjaan siap rilis produksi" },
    { value: "100%", label: "Hak milik kode sumber & domain penuh" },
  ],
  startingPrice: "Mulai Rp1,5 juta",
  priceNote:
    "Tersedia skema Beli Putus (tanpa biaya bulanan ke Abinest) maupun Terima Beres, lengkap dengan penawaran resmi, invoice formal, dan opsi NDA bagi PT/CV.",
  timeline: "Selesai dalam 7–14 hari kerja sejak materi siap",
  warranty: "Garansi teknis pascarilis + dukungan operasional Jawa Timur",
  waMessage:
    "Halo Tim Abinest, saya dari area Surabaya/Jawa Timur dan ingin berkonsultasi mengenai Jasa Pembuatan Website untuk bisnis kami.",
  serviceNameForAnalytics: "Website Bisnis Surabaya & Jawa Timur",
  secondaryCta: {
    label: "Lihat Rincian Harga & Paket",
    href: "/harga",
  },
  previewImage: {
    src: "/images/portfolio/central-scaffolding-web.webp",
    alt: "Website B2B industri dengan kalkulator estimasi komponen dan konversi WhatsApp cepat",
    caption: "Standar Website B2B Abinest — Tampilan Arsitektural Bersih, Kalkulator Estimasi & Local SEO",
  },
  architectureHeading: "Website B2B & Komersial yang Disesuaikan dengan Karakter Pasar Jawa Timur",
  architectureSubheading:
    "Pembeli korporat dan distributor di Surabaya, Sidoarjo, hingga Gresik menilai kredibilitas vendor dari seberapa rapi katalog spesifikasi, seberapa cepat situs terbuka di lapangan, dan seberapa mudah menghubungi tim sales.",
  modules: [
    {
      code: "01",
      title: "Profil Korporat, Katalog Produk & Kalkulator Estimasi",
      description:
        "Sajikan profil pabrik, gudang, layanan konstruksi, maupun katalog produk secara terstruktur agar tim pengadaan cepat mengambil keputusan.",
      deliverables: [
        "Desain kustom bersih selaras karakter industri Anda",
        "Katalog produk/spesifikasi dengan filter & unduh brosur PDF",
        "Opsional kalkulator estimasi kebutuhan yang langsung kirim draf ke WA",
        "Tampilan tajam dan mudah dibaca di ponsel staf lapangan",
      ],
    },
    {
      code: "02",
      title: "Optimasi Local SEO Surabaya, Sidoarjo, Gresik & Nasional",
      description:
        "Fondasi pencarian terstruktur agar bisnis Anda mudah ditemukan saat calon mitra mengetik kata kunci layanan di wilayah Jawa Timur.",
      deliverables: [
        "Struktur judul, metadata & Schema JSON-LD lokal yang rapi",
        "Kecepatan buka halaman sub-detik untuk skor Core Web Vitals hijau",
        "Integrasi Google Search Console, Google Business Profile & GA4",
        "Struktur konten siap dikutip mesin pencari maupun AI modern",
      ],
    },
    {
      code: "03",
      title: "Siap Terhubung ke Sistem Gudang, Kasir atau WhatsApp Otomatis",
      description:
        "Berbeda dari situs template statis buntu, website Anda dibangun dengan fondasi bersih yang siap dihubungkan ke operasional internal kapan pun dibutuhkan.",
      deliverables: [
        "Pelacakan klik tombol WhatsApp & formulir permintaan penawaran",
        "Kepemilikan penuh domain atas nama perusahaan Anda sendiri",
        "Siap diintegrasikan ke ERP/WMS, POS, atau asisten WhatsApp resmi",
        "Bebas risiko celah keamanan plugin pihak ketiga",
      ],
    },
  ],
  guarantees: [
    {
      title: "Komunikasi Langsung dengan Tim Engineer, Bukan Calo",
      description:
        "Diskusi kebutuhan, revisi desain, hingga serah terima dilakukan langsung bersama tim yang mengerjakan proyek Anda sehingga hasilnya tepat sasaran.",
    },
    {
      title: "Pembayaran Bertahap Aman & Transparan",
      description:
        "Pembayaran dibagi mengikuti progres nyata (DP awal, uji coba pratinjau live, dan pelunasan saat siap rilis) tanpa biaya tersembunyi.",
    },
    {
      title: "Dukungan Dokumen Resmi untuk Perusahaan & Instansi",
      description:
        "Siap menerbitkan surat penawaran, rincian pekerjaan, kontrak, invoice formal, hingga perjanjian kerahasiaan (NDA) sesuai prosedur pengadaan PT/CV.",
    },
  ],
  idealFor: [
    "Perusahaan manufaktur, distributor, ekspedisi logistik, dan vendor proyek di kawasan industri Surabaya, Rungkut, Sidoarjo, dan Gresik.",
    "Klinik kesehatan, properti, firma hukum, konsultan, dan lembaga pendidikan di Jawa Timur yang ingin mendominasi pencarian Google lokal.",
    "Pemilik brand kuliner, fesyen, dan UMKM berkembang yang membutuhkan website katalog cepat dengan alur order WhatsApp praktis.",
    "Bisnis yang website lamanya terasa lambat, usang, atau terus dibebani biaya perpanjangan agensi yang tinggi.",
  ],
  faqs: SURABAYA_FAQS,
  relatedLinks: [
    { label: "Daftar Harga Transparan", href: "/harga" },
    { label: "Website Bisnis Jakarta & Nasional", href: "/jasa-pembuatan-website-jakarta" },
    { label: "Aplikasi Kasir POS Beli Putus", href: "/jasa-pembuatan-aplikasi-kasir-pos" },
    { label: "Custom Website vs WordPress", href: "/wawasan/website-custom-vs-wordpress-untuk-bisnis" },
  ],
};

const jsonLd = buildServicePageJsonLd({
  name: "Jasa Pembuatan Website Bisnis Surabaya & Jawa Timur",
  breadcrumbLabel: "Website Bisnis Surabaya & Jatim",
  path: CANONICAL_PATH,
  description: serviceData.subtitle,
  startingPriceIdr: 1500000,
  areaServed: ["Surabaya", "Sidoarjo", "Gresik", "Jawa Timur", "Indonesia"],
  faqs: SURABAYA_FAQS,
});

export default function WebsiteSurabayaPage() {
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
