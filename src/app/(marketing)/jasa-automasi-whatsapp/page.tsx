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

const CANONICAL_PATH = "/jasa-automasi-whatsapp";

export const metadata: Metadata = {
  title: "Jasa Automasi WhatsApp AI Resmi Meta & OCR Faktur Bisnis",
  description:
    "Implementasi asisten CS & order WhatsApp AI 24 jam berbasis Meta Cloud API resmi mulai Rp1,5 juta serta OCR pembaca foto/PDF faktur otomatis terhubung ke stok dan ERP usaha Anda.",
  keywords: [
    "jasa automasi whatsapp resmi meta",
    "whatsapp ai agent bisnis indonesia",
    "ocr pembaca nota faktur otomatis",
    "chatbot cs 24 jam terhubung stok",
    "automasi dokumen ai indonesia",
  ],
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Abinest",
    title: "Jasa Automasi WhatsApp AI Resmi Meta & OCR Faktur Bisnis | Abinest",
    description:
      "Balas chat WhatsApp 24 jam lewat jalur resmi Meta Cloud API dan ubah foto/PDF faktur supplier menjadi entri pembukuan otomatis mulai Rp1,5 juta.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const serviceData: ServiceDetailData = {
  slug: "automasi-whatsapp",
  breadcrumbLabel: "Automasi WhatsApp & AI/ML",
  eyebrow: "Layanan 03 · Kecerdasan Buatan Terapan",
  title:
    "Automasi WhatsApp Resmi Meta & Pembaca Dokumen Faktur Otomatis (AI/ML)",
  subtitle:
    "Bebaskan tim admin dari pekerjaan mengetik ulang faktur dan membalas pertanyaan berulang. Sistem kami beroperasi 24 jam lewat API resmi Meta dengan integrasi langsung ke stok, harga, dan catatan transaksi Anda.",
  heroMetrics: [
    { value: "< 1 Detik", label: "Kecepatan respons awal chat pelanggan 24 jam" },
    { value: "99,7%", label: "Akurasi pembacaan angka & item pada faktur/nota" },
    { value: "100%", label: "Menggunakan Meta Cloud API resmi (anti-blokir)" },
  ],
  startingPrice: "Mulai Rp1,5 juta",
  priceNote:
    "Tidak ada biaya sewa aplikasi bulanan ke Abinest; Anda hanya membayar pemakaian kuota API Meta / model AI sesuai volume aktual.",
  timeline: "Implementasi & uji coba langsung dalam 1–4 minggu",
  warranty: "Pemantauan kestabilan alur kerja + penyetelan gaya bahasa AI",
  waMessage:
    "Halo Tim Abinest, saya tertarik mengimplementasikan Automasi WhatsApp AI Resmi Meta dan/atau Pembaca Faktur OCR untuk bisnis kami.",
  serviceNameForAnalytics: "Automasi WhatsApp & AI/ML",
  secondaryCta: {
    label: "Coba Simulasi Bot & OCR di Browser",
    href: "/demo",
  },
  previewImage: {
    src: "/images/portfolio/wa-automation-workflow.webp",
    alt: "Kanvas alur otomasi FlowNest menghubungkan WhatsApp Cloud API, AI cek stok, dan sinkronisasi invoice ERP",
    caption: "Alur Otomasi WhatsApp Resmi · Cek Stok & Ongkir Otomatis · Sinkronisasi Invoice ERP",
  },
  architectureHeading: "Solusi AI Praktis untuk Efisiensi Nyata",
  architectureSubheading:
    "Bukan sekadar chatbot kaku berbasis kata kunci. Sistem membaca maksud kalimat pelanggan, mengecek data operasional secara langsung, dan memindahkan kendali ke staf bila diperlukan.",
  modules: [
    {
      code: "01",
      title: "WhatsApp CS & Sales Agent 24 Jam",
      description:
        "Menjawab pertanyaan harga, ketersediaan stok, jadwal layanan, hingga meneruskan pesanan ke tim sales secara natural.",
      deliverables: [
        "Terhubung resmi via WhatsApp Business Platform (Meta Cloud API)",
        "Jawaban mengambil data asli dari katalog & stok perusahaan",
        "Handover mulus ke admin manusia saat kasus butuh negosiasi",
        "Pengaturan gaya bahasa resmi, ramah, maupun ringkas",
      ],
    },
    {
      code: "02",
      title: "Document AI / OCR Nota & Faktur",
      description:
        "Kirim foto struk, surat jalan, atau PDF invoice supplier ke sistem atau grup WhatsApp—data otomatis terekam rapi ke database.",
      deliverables: [
        "Ekstraksi nomor faktur, tanggal, nama vendor, item & PPN",
        "Validasi silang otomatis total tagihan vs rincian baris",
        "Langsung ekspor ke Excel, Google Sheets, atau ERP internal",
        "Pangkas waktu input administrasi hingga puluhan jam per minggu",
      ],
    },
    {
      code: "03",
      title: "Alur Kerja & Notifikasi Otomatis",
      description:
        "Hubungkan WhatsApp dengan kejadian penting di operasional bisnis agar pemilik usaha selalu mendapat kabar tepat waktu.",
      deliverables: [
        "Pengingat tagihan jatuh tempo otomatis ke klien/wali murid",
        "Notifikasi peringatan stok menipis ke kepala gudang",
        "Ringkasan omzet harian otomatis dikirim setiap malam",
        "Guardrail ketat agar AI tidak mengarang angka atau janji harga",
      ],
    },
  ],
  guarantees: [
    {
      title: "Jalur Resmi Meta Cloud API — Aman untuk Nomor Utama Perusahaan",
      description:
        "Kami tidak menggunakan bot emulator tidak resmi yang berisiko memblokir nomor bisnis Anda. Seluruh koneksi mengikuti standar resmi Meta.",
    },
    {
      title: "Anti-Halusinasi untuk Angka, Harga & Stok",
      description:
        "Setiap jawaban faktual terkait harga dan stok dikunci hanya mengambil referensi dari database terverifikasi Anda (RAG & tool validation).",
    },
    {
      title: "Kontrol Penuh atas Aturan Bisnis & Alih Tugas ke Staf",
      description:
        "Staf Anda dapat mengambil alih percakapan kapan saja dalam satu klik apabila pelanggan meminta diskusi khusus atau negosiasi korporat.",
    },
  ],
  idealFor: [
    "Tim sales & layanan pelanggan yang menerima puluhan hingga ribuan chat WhatsApp setiap hari.",
    "Bagian keuangan/admin gudang yang masih menginput ratusan nota pembelian atau surat jalan secara manual.",
    "Klinik, properti, otomotif, dan penyedia jasa yang membutuhkan konfirmasi jadwal serta follow-up otomatis.",
    "Perusahaan yang ingin menghubungkan WhatsApp langsung dengan ERP atau database stok existing.",
  ],
  faqs: [
    {
      question: "Apakah automasi WhatsApp Abinest aman dari pemblokiran nomor?",
      answer:
        "Ya. Seluruh integrasi menggunakan WhatsApp Business Cloud API resmi dari Meta—bukan bot scan QR tidak resmi—sehingga nomor bisnis tetap aman dan stabil.",
    },
    {
      question: "Apakah bot AI bisa mengambil data stok dan harga asli?",
      answer:
        "Bisa. Asisten AI dikunci untuk membaca katalog, harga, dan stok langsung dari database bisnis Anda sehingga tidak mengarang angka, serta admin bisa mengambil alih chat kapan saja.",
    },
  ],
  relatedLinks: [
    { label: "Daftar Harga & Skema", href: "/harga" },
    { label: "Coba Live Demo Bot WA & OCR", href: "/demo" },
    { label: "Studi Kasus FlowNest WA & ERP", href: "/karya/wa-automation-workflow" },
    { label: "Panduan WA Resmi Meta Anti-Blokir", href: "/wawasan/arsitektur-whatsapp-ai-resmi-meta-anti-blokir" },
  ],
};

const jsonLd = buildServicePageJsonLd({
  name: "Jasa Automasi WhatsApp Resmi Meta & Pembaca Faktur AI",
  breadcrumbLabel: "Automasi WhatsApp & AI",
  path: CANONICAL_PATH,
  description: serviceData.subtitle,
  startingPriceIdr: 1500000,
  areaServed: ["Jakarta", "Surabaya", "Indonesia"],
  faqs: [
    {
      question: "Apakah automasi WhatsApp Abinest aman dari pemblokiran nomor?",
      answer:
        "Ya. Seluruh integrasi menggunakan WhatsApp Business Cloud API resmi dari Meta—bukan bot scan QR tidak resmi—sehingga nomor bisnis tetap aman dan stabil.",
    },
    {
      question: "Apakah bot AI bisa mengambil data stok dan harga asli?",
      answer:
        "Bisa. Asisten AI dikunci untuk membaca katalog, harga, dan stok langsung dari database bisnis Anda sehingga tidak mengarang angka, serta admin bisa mengambil alih chat kapan saja.",
    },
  ],
});

export default function AutomasiWhatsappPage() {
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
