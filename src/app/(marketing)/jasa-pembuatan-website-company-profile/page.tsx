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

const CANONICAL_PATH = "/jasa-pembuatan-website-company-profile";

const COMPANY_PROFILE_FAQS = [
  {
    question: "Berapa biaya jasa pembuatan website company profile di Abinest?",
    answer:
      "Pembuatan website company profile modern di Abinest mulai Rp1,5 juta untuk skala UMKM/profesional, hingga Rp4–12 juta untuk website korporat multi-halaman, katalog produk, atau toko online custom—seluruhnya 100% hak milik kode dan domain atas nama perusahaan Anda.",
  },
  {
    question: "Mengapa website custom Abinest lebih aman dari malware atau sisipan link spam?",
    answer:
      "Banyak website perusahaan berbasis template CMS pasaran disusupi malware atau link spam karena celah plugin yang lupa diperbarui. Website Abinest ditulis bersih tanpa puluhan plugin rentan dan dilengkapi header keamanan produksi (HTTPS + HSTS) sehingga jauh lebih aman untuk reputasi perusahaan.",
  },
  {
    question: "Apakah perusahaan luar Jakarta & Surabaya tetap bisa memesan?",
    answer:
      "Ya. Kami melayani perusahaan, PT/CV, klinik, yayasan, dan brand dari seluruh Indonesia (Bandung, Semarang, Yogyakarta, Bali, Medan, Makassar, Balikpapan, dll.) dengan alur diskusi online terstruktur, penawaran resmi, invoice formal, dan opsi NDA.",
  },
];

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Company Profile & Toko Online Custom Indonesia",
  description:
    "Jasa pembuatan website company profile perusahaan, katalog produk B2B, dan toko online custom seluruh Indonesia mulai Rp1,5 juta. Aman bebas celah plugin, cepat dibuka <1 detik, ramah SEO/GEO Google, 100% hak milik kode.",
  keywords: [
    "jasa pembuatan website company profile",
    "jasa pembuatan website perusahaan indonesia",
    "jasa website company profile cepat dan aman",
    "jasa pembuatan toko online custom",
    "website perusahaan beli putus 100 hak milik",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest",
    title: "Jasa Pembuatan Website Company Profile & Toko Online Custom | Abinest",
    description:
      "Website perusahaan & katalog bisnis berdesain editorial modern, aman tanpa celah plugin rentan, dan siap naik peringkat Google di seluruh Indonesia.",
    images: [
      {
        url: "/images/portfolio/toko-amen-snack-web.webp",
        width: 1440,
        height: 1080,
        alt: "Antarmuka website bisnis dan toko online modern yang dibangun Abinest",
      },
      DEFAULT_OG_IMAGE,
    ],
  },
};

const serviceData: ServiceDetailData = {
  slug: "website-company-profile",
  breadcrumbLabel: "Website Company Profile & Katalog",
  eyebrow: "Layanan Nasional · Perusahaan, Brand & UMKM Seluruh Indonesia",
  title:
    "Jasa Pembuatan Website Company Profile & Katalog Bisnis yang Cepat, Aman, dan Kredibel",
  subtitle:
    "Bangun kepercayaan calon mitra korporat maupun pembeli sejak detik pertama mereka membuka tautan Anda. Abinest merancang website perusahaan dan toko online custom yang ringan di ponsel 4G, bebas celah malware plugin pasaran, dan 100% menjadi aset milik perusahaan Anda.",
  heroMetrics: [
    { value: "Mulai Rp1,5 jt", label: "Transparan di awal · Skema Beli Putus" },
    { value: "Anti-Plugin", label: "Arsitektur bersih minim celah malware & spam" },
    { value: "100%", label: "Hak milik penuh kode sumber & nama domain" },
  ],
  startingPrice: "Mulai Rp1,5 juta",
  priceNote:
    "Tersedia skema Beli Putus (Rp0 biaya langganan bulanan ke Abinest) maupun Terima Beres, dengan pembayaran bertahap dan dukungan dokumen formal PT/CV.",
  timeline: "Selesai dalam 7–14 hari kerja sejak materi siap",
  warranty: "Garansi teknis pascarilis + panduan pembaruan konten",
  waMessage:
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai Jasa Pembuatan Website Company Profile / Katalog Bisnis untuk perusahaan kami.",
  serviceNameForAnalytics: "Website Company Profile & Katalog Nasional",
  secondaryCta: {
    label: "Lihat Daftar Harga & Skema",
    href: "/harga",
  },
  previewImage: {
    src: "/images/portfolio/toko-amen-snack-web.webp",
    alt: "Tampilan website bisnis dan toko online katalog modern Toko Amen Snack yang dibangun oleh Abinest",
    caption: "Standar Website Bisnis Abinest — Tampilan Editorial Bersih, Katalog Terstruktur & Alur Order WhatsApp",
  },
  architectureHeading: "Dirancang untuk Menang di Mata Klien Sekaligus Mesin Pencari",
  architectureSubheading:
    "Website company profile bukan sekadar brosur online. Setiap halaman kami susun untuk mempercepat proses verifikasi kredibilitas oleh tim pengadaan, investor, dan calon pembeli.",
  modules: [
    {
      code: "01",
      title: "Desain Editorial Eksklusif Sesuai Identitas Merek",
      description:
        "Tanpa memakai template pasaran yang sama dengan kompetitor. Tata letak dan tipografi disusun khusus mencerminkan level profesionalisme perusahaan Anda.",
      deliverables: [
        "Halaman Beranda, Tentang Perusahaan, Layanan, Portofolio & Kontak",
        "Katalog produk/jasa rapi lengkap tombol konsultasi WhatsApp terarah",
        "Unduh company profile PDF, sertifikasi, atau brosur layanan 1 klik",
        "Tampilan responsif presisi di layar ponsel, tablet, hingga monitor lebar",
      ],
    },
    {
      code: "02",
      title: "Fondasi SEO Google & GEO (Siap Dikutip AI)",
      description:
        "Bukan hanya cantik dilihat manusia, struktur kode kami dibangun agar Google dan mesin pencari AI modern memahami layanan serta keunggulan bisnis Anda secara akurat.",
      deliverables: [
        "Struktur heading, metadata, OpenGraph & canonical rapi di setiap rute",
        "Schema JSON-LD lengkap (Organization, Service, FAQPage, Breadcrumb)",
        "Optimasi aset gambar modern untuk skor Core Web Vitals hijau",
        "Sitemap XML & panduan pendaftaran Google Search Console serta GA4",
      ],
    },
    {
      code: "03",
      title: "Keamanan Tingkat Produksi & Kendali Aset Penuh",
      description:
        "Lindungi nama baik perusahaan dari risiko website diretas atau disisipi tautan spam yang kerap menimpa situs berbasis plugin tidak terawat.",
      deliverables: [
        "Kode bersih tanpa ketergantungan puluhan plugin pihak ketiga",
        "SSL HTTPS aktif + header keamanan HSTS & proteksi anti-clickjacking",
        "Kepemilikan penuh akun domain dan kode sumber di tangan perusahaan",
        "Siap dikembangkan menjadi portal klien, e-commerce, atau terhubung ke ERP",
      ],
    },
  ],
  guarantees: [
    {
      title: "Bebas Risiko Deface & Celah Keamanan Template Pasaran",
      description:
        "Situs dibangun ringkas tanpa panel plugin terbuka yang sering menjadi sasaran bot peretas, menjaga kredibilitas perusahaan tetap bersih di hasil pencarian Google.",
    },
    {
      title: "Biaya Transparan Tanpa Jebakan Perpanjangan Agensi yang Mahal",
      description:
        "Anda tahu persis rincian biaya pembuatan dan biaya tahunan domain/hosting terpisah sejak hari pertama—bebas dikelola sendiri atau didampingi tim kami.",
    },
    {
      title: "Melayani Seluruh Indonesia dengan Dokumen Pengadaan Lengkap",
      description:
        "Siap menerbitkan surat penawaran resmi, ruang lingkup kerja, kontrak, invoice formal, dan NDA bagi perusahaan swasta, BUMN, klinik, maupun yayasan.",
    },
  ],
  idealFor: [
    "Perusahaan PT/CV, kontraktor, manufaktur, logistik, dan vendor B2B yang sering mengikuti tender atau pitching ke klien korporat.",
    "Klinik kesehatan, firma hukum, konsultan, arsitek, dan kantor jasa profesional yang ingin tampil berwibawa di halaman pertama Google.",
    "Pemilik brand ritel, kuliner, dan toko online yang ingin memiliki katalog web sendiri tanpa potongan komisi marketplace.",
    "Perusahaan yang website WordPress lamanya sering lambat, error saat update plugin, atau rawan disusupi link spam.",
  ],
  faqs: COMPANY_PROFILE_FAQS,
  relatedLinks: [
    { label: "Daftar Harga & Skema", href: "/harga" },
    { label: "Website Bisnis Jakarta", href: "/jasa-pembuatan-website-jakarta" },
    { label: "Website Bisnis Surabaya", href: "/jasa-pembuatan-website-surabaya" },
    { label: "Custom Website vs WordPress", href: "/wawasan/website-custom-vs-wordpress-untuk-bisnis" },
  ],
};

const jsonLd = buildServicePageJsonLd({
  name: "Jasa Pembuatan Website Company Profile & Toko Online Custom Indonesia",
  breadcrumbLabel: "Website Company Profile & Katalog",
  path: CANONICAL_PATH,
  description: serviceData.subtitle,
  startingPriceIdr: 1500000,
  areaServed: ["Jakarta", "Surabaya", "Bandung", "Semarang", "Medan", "Indonesia"],
  faqs: COMPANY_PROFILE_FAQS,
});

export default function WebsiteCompanyProfilePage() {
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
