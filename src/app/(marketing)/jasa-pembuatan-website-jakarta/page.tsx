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

const CANONICAL_PATH = "/jasa-pembuatan-website-jakarta";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Cepat Jakarta & Indonesia",
  description:
    "Jasa pembuatan website perusahaan, landing page konversi tinggi, dan portal bisnis Jakarta & Indonesia mulai Rp1,5 juta dengan waktu muat sub-detik, fondasi SEO/GEO lengkap, dan 100% hak milik kode program.",
  keywords: [
    "jasa pembuatan website jakarta",
    "jasa buat website cepat",
    "jasa website company profile indonesia",
    "jasa website perusahaan beli putus",
    "landing page konversi tinggi",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest",
    title: "Jasa Pembuatan Website Cepat Jakarta & Indonesia | Abinest",
    description:
      "Website perusahaan & landing page modern berkecepatan tinggi, ramah SEO/GEO Google, mulai Rp1,5 juta dengan 100% hak milik kode.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const serviceData: ServiceDetailData = {
  slug: "website-jakarta",
  breadcrumbLabel: "Website Bisnis & Landing Page",
  eyebrow: "Layanan 01 · Jakarta & Seluruh Indonesia",
  title:
    "Jasa Pembuatan Website Bisnis Berkecepatan Tinggi & Ramah Pencarian Google",
  subtitle:
    "Kami membangun situs web profil perusahaan, halaman penawaran produk, hingga portal layanan profesional dengan arsitektur modern agar langsung terbuka di ponsel calon klien dan mudah naik ke peringkat teratas Google.",
  heroMetrics: [
    { value: "< 0,8 Detik", label: "Target waktu muat di jaringan seluler" },
    { value: "95–100", label: "Target skor Google PageSpeed & Core Web Vitals" },
    { value: "100%", label: "Hak milik kode & kontrol domain penuh" },
  ],
  startingPrice: "Mulai Rp1,5 juta",
  priceNote:
    "Tersedia skema Beli Putus (Rp0 biaya bulanan ke Abinest) maupun Terima Beres termasuk domain, hosting, dan pemeliharaan.",
  timeline: "Selesai dalam 7–14 hari kerja sejak materi siap",
  warranty: "Garansi teknis pascarilis + panduan kelola konten",
  waMessage:
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai Jasa Pembuatan Website Cepat untuk perusahaan/bisnis kami.",
  serviceNameForAnalytics: "Website Bisnis & Landing Page",
  secondaryCta: {
    label: "Ajukan Audit Kecepatan Web Gratis",
    href: "/audit-gratis",
  },
  previewImage: {
    src: "/images/portfolio/kinetic-fitness.webp",
    alt: "Tampilan website brand modern KINETIC Tech Gym dengan tipografi editorial tegas dan pendaftaran cepat",
    caption: "Website Brand Modern & Ringan · Struktur SEO Rapi · 100% Hak Milik Kode",
  },
  architectureHeading: "Lebih dari Sekadar Tampilan Visual",
  architectureSubheading:
    "Setiap situs web dirancang untuk menjawab tiga kebutuhan utama pemilik usaha: kredibilitas eksekutif, kecepatan buka di ponsel, dan konversi langsung ke WhatsApp.",
  modules: [
    {
      code: "01",
      title: "Desain Eksekutif & Mobile-First",
      description:
        "Antarmuka bersih yang mencerminkan reputasi perusahaan Anda di layar desktop maupun ponsel tanpa tata letak berantakan.",
      deliverables: [
        "Desain kustom sesuai identitas merek (bukan templat pasaran)",
        "Struktur copywriting persuasif & alur baca jelas",
        "Tombol aksi WhatsApp & formulir prospek terukur",
        "Halaman profil, layanan, portofolio, hingga FAQ",
      ],
    },
    {
      code: "02",
      title: "Fondasi SEO Teknis & Schema Google",
      description:
        "Dibangun menggunakan rendering statis/server modern agar mesin pencari Google langsung membaca seluruh konten Anda dengan presisi.",
      deliverables: [
        "Struktur heading & metadata per halaman otomatis",
        "JSON-LD Schema (Organization, Service, FAQ, Local SEO)",
        "Optimasi ukuran gambar & aset otomatis",
        "Integrasi Google Analytics 4 & pelacakan klik CTA",
      ],
    },
    {
      code: "03",
      title: "Keamanan & Kepemilikan Penuh",
      description:
        "Bebas dari kerentanan plugin pihak ketiga yang sering membuat situs lambat atau diretas, dengan kendali penuh di tangan Anda.",
      deliverables: [
        "SSL HTTPS aktif & header keamanan tingkat produksi",
        "Repositori kode bersih dengan kepemilikan penuh",
        "Bebas dipasang di cloud pribadi atau dikelola Abinest",
        "Pelatihan singkat pengelolaan teks & gambar untuk staf",
      ],
    },
  ],
  guarantees: [
    {
      title: "Tanpa Template Berat & Tanpa Biaya Lisensi Bulanan",
      description:
        "Berbeda dari builder konvensional yang penuh script berat, kode sumber dibangun ringkas sehingga biaya operasional tetap hemat jangka panjang.",
    },
    {
      title: "Terukur dari Sisi Kecepatan & Prospek Masuk",
      description:
        "Setiap tombol konsultasi WhatsApp dan formulir telah terhubung ke pelacakan event sehingga Anda bisa melihat performa halaman secara nyata.",
    },
    {
      title: "Siap Dikembangkan Menjadi Portal atau Sistem Internal",
      description:
        "Saat bisnis bertumbuh, website dapat langsung diperluas dengan katalog produk dinamis, kalkulator harga, atau terhubung ke ERP internal.",
    },
  ],
  idealFor: [
    "Perusahaan B2B, konsultan, kontraktor, dan manufaktur yang membutuhkan citra profesional di hadapan klien korporat.",
    "Klinik kesehatan, firma hukum, dan lembaga pendidikan yang mengutamakan pencarian Google lokal.",
    "Usaha berkembang yang website lamanya terasa lambat (>3 detik) dan sulit dihubungi lewat WhatsApp.",
    "Bisnis yang ingin berhenti membayar biaya langganan platform web bulanan.",
  ],
  faqs: [
    {
      question: "Berapa biaya pembuatan website bisnis di Abinest?",
      answer:
        "Pembuatan website bisnis modern di Abinest mulai Rp1,5 juta dengan skema Beli Putus (100% hak milik kode & domain tanpa biaya bulanan ke Abinest) atau skema Terima Beres.",
    },
    {
      question: "Berapa lama website bisnis selesai dikerjakan?",
      answer:
        "Website profil perusahaan atau landing page umumnya selesai dalam 7–14 hari kerja sejak materi siap, termasuk optimasi kecepatan dan struktur SEO Google.",
    },
  ],
  relatedLinks: [
    { label: "Daftar Harga & Skema", href: "/harga" },
    { label: "Website Bisnis Surabaya & Jatim", href: "/jasa-pembuatan-website-surabaya" },
    { label: "Biaya Website Wajar di Indonesia", href: "/wawasan/biaya-pembuatan-website-bisnis-indonesia" },
    { label: "Custom Website vs WordPress", href: "/wawasan/website-custom-vs-wordpress-untuk-bisnis" },
  ],
};

const jsonLd = buildServicePageJsonLd({
  name: "Jasa Pembuatan Website Bisnis Cepat Jakarta & Indonesia",
  breadcrumbLabel: "Website Bisnis & Landing Page",
  path: CANONICAL_PATH,
  description: serviceData.subtitle,
  startingPriceIdr: 1500000,
  areaServed: ["Jakarta", "Surabaya", "Indonesia"],
  faqs: [
    {
      question: "Berapa biaya pembuatan website bisnis di Abinest?",
      answer:
        "Pembuatan website bisnis modern di Abinest mulai Rp1,5 juta dengan skema Beli Putus (100% hak milik kode & domain tanpa biaya bulanan ke Abinest) atau skema Terima Beres.",
    },
    {
      question: "Berapa lama website bisnis selesai dikerjakan?",
      answer:
        "Website profil perusahaan atau landing page umumnya selesai dalam 7–14 hari kerja sejak materi siap, termasuk optimasi kecepatan dan struktur SEO Google.",
    },
  ],
});

export default function WebsiteJakartaPage() {
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
