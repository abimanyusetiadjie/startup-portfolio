import type { Metadata } from "next";
import {
  GroveServiceDetailTemplate,
  type ServiceDetailData,
} from "@/components/grove/GroveServiceDetailTemplate";

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

const CANONICAL_PATH = "/jasa-pembuatan-website-jakarta";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Cepat Jakarta & Indonesia",
  description:
    "Jasa pembuatan website perusahaan, landing page konversi tinggi, dan portal bisnis Jakarta dengan waktu muat di bawah 0,8 detik, skor Google PageSpeed tinggi, dan 100% hak milik kode program.",
  keywords: [
    "jasa pembuatan website jakarta",
    "jasa buat website cepat",
    "website company profile nextjs",
    "jasa website perusahaan beli putus",
    "landing page konversi tinggi",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${APP_BASE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest Digital Systems",
    title: "Jasa Pembuatan Website Cepat Jakarta & Indonesia | Abinest",
    description:
      "Website perusahaan & landing page Next.js berkecepatan tinggi (<0,8 detik), ramah SEO Google, dan 100% hak milik kode sumber.",
    images: [
      {
        url: "/images/abinest-og-card.jpg",
        width: 1376,
        height: 768,
        alt: "Abinest — Jasa Pembuatan Website Cepat Jakarta & Indonesia",
      },
    ],
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
  startingPrice: "Rp1,5–3,5 juta",
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
    src: "/images/hero-web.webp",
    alt: "Pratinjau Website Korporat Berkecepatan Tinggi dan Skor Google PageSpeed 100/100",
    caption: "Arsitektur Next.js (<0,8 detik) · Schema JSON-LD Google · 100% Hak Milik Kode",
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
        "Repositori kode bersih (Next.js / TypeScript)",
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
          name: "Website Bisnis & Landing Page",
          item: `${APP_BASE_URL}${CANONICAL_PATH}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: "Jasa Pembuatan Website Bisnis Cepat Jakarta & Indonesia",
      provider: {
        "@type": "Organization",
        name: "Abinest Digital Systems",
        url: APP_BASE_URL,
      },
      areaServed: ["Jakarta", "Indonesia"],
      url: `${APP_BASE_URL}${CANONICAL_PATH}`,
      description: serviceData.subtitle,
    },
  ],
};

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
