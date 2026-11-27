export interface CaseBadge {
  eyebrow: string;
  label: string;
  iconKey: "zap" | "trending" | "globe" | "shield" | "database" | "bot";
  tileBg: string;
  tileInk: string;
}

export interface CaseStudyItem {
  slug: string;
  featured: boolean;
  client: string;
  tagline: string;
  sector: string;
  year: string;
  liveUrl?: string;
  stageBg: string;
  techStack: string[];
  images: { src: string; alt: string; caption: string }[];
  badges: CaseBadge[];
  problem: string;
  functionalValue: string;
  coreFunctions: string[];
  impactMetrics: { value: string; label: string }[];
  serviceHref: string;
}

export const SIGNIFICA_WORK_ITEMS: CaseStudyItem[] = [
  {
    slug: "toko-amen-snack",
    featured: true,
    client: "Toko Amen Snack.",
    tagline: "Katalog live 1.446 SKU, AI Assistant & kasir terintegrasi.",
    sector: "Ritel & Oleh-Oleh · Sungailiat, Bangka",
    year: "2026",
    liveUrl: "https://tokoamensnack.vercel.app",
    stageBg: "#DAD6CE",
    techStack: ["Next.js", "PostgreSQL", "Vercel AI SDK", "WAHA WhatsApp", "Tailwind CSS"],
    images: [
      {
        src: "/images/real-projects/amen-home-4x3.png",
        alt: "Tampilan asli beranda website Toko Amen Snack Sungailiat Bangka",
        caption: "Beranda & jalur belanja langsung ke Katalog, Shopee Official, dan AI WhatsApp",
      },
      {
        src: "/images/real-projects/amen-catalog-4x3.png",
        alt: "Tampilan asli halaman katalog promo dan pengiriman nasional Toko Amen Snack",
        caption: "Sorotan promo unggulan & pengiriman nasional dengan tombol perbesar & order",
      },
    ],
    badges: [
      {
        eyebrow: "DATABASE",
        label: "1.446 Master SKU",
        iconKey: "database",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "AI & WA BOT",
        label: "Cek Stok & Ongkir",
        iconKey: "bot",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "SMART SEARCH",
        label: "Sinonim Lokal Bangka",
        iconKey: "zap",
        tileBg: "#DE6D3B",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "HARDWARE",
        label: "Ringan di Win 7 / 4GB",
        iconKey: "shield",
        tileBg: "#E1251B",
        tileInk: "#FFFFFF",
      },
    ],
    problem:
      "Toko oleh-oleh dengan lebih dari seribu jenis camilan kesulitan melayani pertanyaan stok, harga grosir, dan estimasi berat ongkir di WhatsApp secara manual, sementara PC kasir toko masih memakai spesifikasi Windows 7 RAM 4 GB.",
    functionalValue:
      "Menyatukan 1.446 master SKU PostgreSQL antara sistem kasir dan katalog web publik, ditambah asisten AI dual-engine (LLM + fallback deterministik) yang tetap akurat menghitung total pesanan, berat kirim (kg), dan membuat tautan checkout WhatsApp otomatis.",
    coreFunctions: [
      "Sinkronisasi real-time 1.060 produk aktif (1.446 master SKU) dengan harga eceran & grosir",
      "Dual-Engine AI + Deterministic Store Assistant dengan memori percakapan multi-turn",
      "Smart Search paham ejaan lokal ('getas', 'ams', '250 gr', 'bal') dengan paginasi 24 item/hal",
      "Integrasi WhatsApp Gateway WAHA ringan (RAM ~180 MB) + Smart Human-Takeover admin",
    ],
    impactMetrics: [
      { value: "1.446", label: "Master SKU tersinkron PostgreSQL" },
      { value: "24/7", label: "Asisten stok & hitung ongkir otomatis" },
      { value: "4 GB", label: "Tetap ringan di PC kasir Windows 7" },
      { value: "Live", label: "Tayang produksi di Vercel" },
    ],
    serviceHref: "/jasa-automasi-whatsapp",
  },
  {
    slug: "central-scaffolding",
    featured: true,
    client: "Central Scaffolding.",
    tagline: "Web B2B sewa/jual, kalkulator set & Local SEO.",
    sector: "Konstruksi & Material B2B · Jabodetabek",
    year: "2026",
    stageBg: "#DE6D3B",
    techStack: ["Astro", "React Island", "Tailwind CSS", "Programmatic SEO"],
    images: [
      {
        src: "/images/real-projects/scaffolding-home-4x3.png",
        alt: "Tampilan asli beranda website Central Scaffolding Indonesia",
        caption: "Hero konversi cepat dengan bukti stok 10.000+ set & area layanan Jabodetabek",
      },
      {
        src: "/images/real-projects/scaffolding-catalog-4x3.png",
        alt: "Tampilan asli katalog komponen dan aksesoris Central Scaffolding",
        caption: "Katalog teknis komponen SNI (Main Frame 1,90 / 1,70, Cross Brace, Pipa Galvanis)",
      },
    ],
    badges: [
      {
        eyebrow: "KALKULATOR",
        label: "Hitung Set & Kirim WA",
        iconKey: "zap",
        tileBg: "#DE6D3B",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "KATALOG B2B",
        label: "Filter Komponen SNI",
        iconKey: "database",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "LOCAL SEO",
        label: "Halaman Per Area",
        iconKey: "globe",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "ARSITEKTUR",
        label: "Astro 0 KB Static",
        iconKey: "trending",
        tileBg: "#E1251B",
        tileInk: "#FFFFFF",
      },
    ],
    problem:
      "Kontraktor di lapangan mencari vendor sewa/beli scaffolding langsung dari HP dan butuh kepastian stok fisik (anti-makelar) beserta hitungan jumlah Main Frame, Cross Brace, dan Joint Pin tanpa menunggu lama.",
    functionalValue:
      "Website ultra-ringan berbasis Astro dengan kalkulator kebutuhan material interaktif yang otomatis menghitung rincian batang rangka dan mengirim draf order rapi ke WhatsApp, didukung halaman Local SEO otomatis per kecamatan.",
    coreFunctions: [
      "Kalkulator interaktif Sewa / Beli Baru / Rekondisi (1–200+ set) + add-on Catwalk & Roda",
      "Katalog filter komponen teknis SNI dengan tombol 'Tanya Stok Item Ini' otomatis ke WA",
      "Programmatic Local SEO (/area/[slug]) membidik pencarian kontraktor Tangerang, BSD & Jakarta",
      "Arsitektur Astro Islands (0 KB JS untuk konten statis) agar instan dibuka di lokasi proyek",
    ],
    impactMetrics: [
      { value: "10.000+", label: "Kapasitas set ditampilkan jelas" },
      { value: "0 KB", label: "JS berlebih pada konten statis" },
      { value: "1 Klik", label: "Kalkulator set langsung ke draf WA" },
      { value: "SNI", label: "Spec-sheet komponen terstruktur" },
    ],
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "ypi-al-fuad",
    featured: true,
    client: "YPI Al-Fuad Tangerang.",
    tagline: "Portal 5 unit pendidikan & sistem konversi PPDB.",
    sector: "Yayasan Pendidikan · Poris Gaga, Tangerang",
    year: "2026",
    stageBg: "#3C846E",
    techStack: ["Astro 5", "TypeScript Strict", "Tailwind CSS", "JSON-LD Schema"],
    images: [
      {
        src: "/images/real-projects/alfuad-home-4x3.png",
        alt: "Tampilan asli portal resmi MI TPI dan YPI Al-Fuad Poris Gaga Tangerang",
        caption: "Beranda resmi YPI Al-Fuad sejak 1990 dengan akses langsung Daftar PPDB & rincian biaya",
      },
      {
        src: "/images/real-projects/alfuad-units-4x3.png",
        alt: "Tampilan asli tab lima unit pendidikan terpadu RA MI SMP-IT SMK-IT Pesantren",
        caption: "Navigasi interaktif 5 unit pendidikan terpadu dalam satu kawasan",
      },
    ],
    badges: [
      {
        eyebrow: "5 JENJANG",
        label: "RA · MI · SMP · SMK · Ponpes",
        iconKey: "globe",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "KONVERSI",
        label: "Alur PPDB & PDF Biaya",
        iconKey: "trending",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "SEO RESMI",
        label: "Schema Sekolah & NPSN",
        iconKey: "shield",
        tileBg: "#DE6D3B",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "PERFORMA",
        label: "Astro 5 Static Output",
        iconKey: "zap",
        tileBg: "#E1251B",
        tileInk: "#FFFFFF",
      },
    ],
    problem:
      "Orang tua calon siswa kesulitan membedakan 5 jenjang pendidikan dalam satu yayasan (RA, MI TPI, SMP-IT, SMK-IT, dan Pondok Pesantren) serta harus bolak-balik menanyakan brosur dan rincian biaya PPDB.",
    functionalValue:
      "Portal resmi terpadu tanpa beban database eksternal yang menyatukan informasi NPSN 5 unit pendidikan, unduhan PDF brosur & biaya resmi, serta tombol konversi langsung ke panitia PPDB WhatsApp.",
    coreFunctions: [
      "Tab interaktif 5 unit terpadu lengkap dengan NPSN resmi (RA, MI TPI, SMP-IT, SMK-IT, Ponpes)",
      "Unduhan langsung dokumen PDF brosur PPDB 2026 & rincian biaya transparan",
      "Metadata SEO EducationalOrganization, LocalBusiness & FAQPage JSON-LD terverifikasi",
      "Security headers Cloudflare Pages + TypeScript strict tanpa biaya maintenance database",
    ],
    impactMetrics: [
      { value: "5 Unit", label: "Jenjang terintegrasi satu portal" },
      { value: "35+ Th", label: "Reputasi yayasan tersaji rapi" },
      { value: "PDF", label: "Unduh brosur & biaya 1 klik" },
      { value: "Rp0", label: "Biaya langganan server database" },
    ],
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "looku-ai",
    featured: true,
    client: "Look.u AI.",
    tagline: "Stylist AI berbasis Hybrid RAG 594 SKU & Vision.",
    sector: "Applied AI & Fashion Tech · PWA",
    year: "2026",
    stageBg: "#E2B2A2",
    techStack: ["Next.js", "Gemini 256-d Vector RAG", "Vision AI", "MediaPipe", "Supabase"],
    images: [
      {
        src: "/images/real-projects/looku-home-4x3.png",
        alt: "Tampilan asli antarmuka asisten styling fashion AI Look.u berbasis Hybrid RAG",
        caption: "Asisten AI Zero-Hallucination dengan filter gender, hijab, budget & Vision Mix & Match",
      },
      {
        src: "/images/real-projects/looku-catalog-4x3.png",
        alt: "Tampilan asli katalog produk RAG 594 SKU dari 46 brand pada Look.u AI",
        caption: "Katalog 594 SKU terindeks vektor 256-d siap klik Mix & Match di AI",
      },
    ],
    badges: [
      {
        eyebrow: "HYBRID RAG",
        label: "594 SKU · 46 Brand",
        iconKey: "database",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "ZERO HALLUCINATION",
        label: "Gemini 256-d Vector",
        iconKey: "bot",
        tileBg: "#DE6D3B",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "VISION AI",
        label: "Foto Lemari & Try-On",
        iconKey: "zap",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "FILTER KETAT",
        label: "Hijab · Gender · Budget",
        iconKey: "shield",
        tileBg: "#E1251B",
        tileInk: "#FFFFFF",
      },
    ],
    problem:
      "Chatbot AI generik sering berhalusinasi merekomendasikan produk fiktif atau tidak sesuai iklim tropis, warna kulit Nusantara, aturan hijab, maupun batas anggaran pengguna.",
    functionalValue:
      "Mesin Hybrid RAG (vektor 256-dimensi + filter terstruktur) yang mengunci setiap rekomendasi ke 594 SKU produk nyata dari 46 brand resmi, lengkap dengan Vision AI untuk mix & match foto baju sendiri.",
    coreFunctions: [
      "Retrieval Hybrid RAG terhadap 594 SKU nyata (46 brand lokal & resmi) tanpa halusinasi",
      "Vision Mix & Match: unggah foto baju di lemari atau selfie untuk pencocokan instan",
      "Filter deterministik Gender, Hijab, Rona Kulit Nusantara, dan batas budget ketat",
      "Modul Virtual Try-On Studio, kuis tes warna kulit, serta Admin CMS import/export CSV",
    ],
    impactMetrics: [
      { value: "594", label: "SKU nyata terindeks vektor 256-d" },
      { value: "46", label: "Brand lokal & official store" },
      { value: "0%", label: "Produk fiktif (Zero-Hallucination)" },
      { value: "Vision", label: "Mix & Match dari foto langsung" },
    ],
    serviceHref: "/jasa-automasi-whatsapp",
  },
  {
    slug: "crew-ai-hris",
    featured: false,
    client: "CREW. AI HRIS.",
    tagline: "HRIS + prediksi risiko resign & gaji berbasis ML.",
    sector: "Enterprise HRIS & Machine Learning",
    year: "2026",
    stageBg: "#3C846E",
    techStack: ["Next.js", "FastAPI", "Python Scikit-Learn", "PostgreSQL", "Docker"],
    images: [
      {
        src: "/images/real-projects/crew-hris-4x3.png",
        alt: "Tampilan asli platform AI-Powered HRIS CREW dengan analitik retensi dan prediksi gaji",
        caption: "Platform HRIS dengan detektor risiko resign (Flight Risk) & prediksi kompensasi",
      },
    ],
    badges: [
      {
        eyebrow: "MACHINE LEARNING",
        label: "Flight Risk Detector",
        iconKey: "bot",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
      {
        eyebrow: "KOMPENSASI",
        label: "Smart Salary Predict",
        iconKey: "trending",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
    ],
    problem:
      "Tim HR umumnya baru menyadari risiko resign karyawan kunci setelah surat pengunduran diri masuk, tanpa data objektif mengenai kesenjangan kompensasi atau biaya kehilangan talenta.",
    functionalValue:
      "Menggabungkan manajemen karyawan & KPI dengan model Machine Learning Scikit-Learn lewat FastAPI (<200ms) untuk memetakan risiko resign, estimasi kerugian attrition, serta audit gaji ideal.",
    coreFunctions: [
      "Retention AI (Scikit-Learn) menghitung probabilitas Flight Risk & anggaran retensi ideal",
      "Smart Salary Prediction membandingkan gaji saat ini vs prediksi ideal berbasis pengalaman & KPI",
      "CRUD karyawan, evaluasi KPI, payroll, dan daftar risiko prioritas dalam 1 dashboard",
      "Arsitektur Full-Stack Next.js + FastAPI + PostgreSQL siap jalan via Docker Compose",
    ],
    impactMetrics: [
      { value: "<200ms", label: "Waktu inferensi model ML FastAPI" },
      { value: ">80%", label: "Target akurasi ROC-AUC retensi" },
      { value: "Docker", label: "Setup penuh dalam 1 perintah" },
      { value: "Full-Stack", label: "Next.js + Python + PostgreSQL" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "smartpos-aneka-rasa",
    featured: false,
    client: "SmartPOS Aneka Rasa.",
    tagline: "Kasir barcode <45ms, struk 58mm & sinkron Shopee.",
    sector: "Omnichannel Retail POS & BI · Pangkalpinang",
    year: "2026",
    stageBg: "#171717",
    techStack: ["React", "Vite", "USB HID Barcode", "ApexCharts BI", "Shopee Sync"],
    images: [
      {
        src: "/images/real-projects/smartpos-home-4x3.png",
        alt: "Tampilan asli terminal kasir dark-mode SmartPOS Toko Aneka Rasa 99",
        caption: "Terminal kasir dark-mode dengan shortcut keyboard F2/F8/F9/F10/F12 & scan barcode cepat",
      },
    ],
    badges: [
      {
        eyebrow: "KASIR CEPAT",
        label: "Scan Barcode <45ms",
        iconKey: "zap",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "OMNICHANNEL",
        label: "POS + Shopee + BI",
        iconKey: "database",
        tileBg: "#3C846E",
        tileInk: "#FFFFFF",
      },
    ],
    problem:
      "Toko ritel dan oleh-oleh yang berjualan offline sekaligus di Shopee kerap mengalami selisih stok, antrean kasir lambat, serta kesulitan menghitung laba bersih riil (HPP vs omzet).",
    functionalValue:
      "Terminal kasir POS dark-mode berkecepatan tinggi dengan pintasan keyboard penuh (F2–F12), dukungan scanner laser & kamera HP, cetak struk termal 58mm, hingga pemisahan hak akses Owner BI vs Kasir.",
    coreFunctions: [
      "Scanner barcode USB HID (<45ms) + kamera HP, pintasan keyboard F2/F8/F9/F10/F12",
      "Pembayaran Tunai, Debit, QRIS + cetak struk termal 58mm siap pakai",
      "Executive BI Dashboard (khusus Owner): Omzet, HPP, Laba Kotor, Pareto 80/20 & ekspor PDF/Excel",
      "Sinkronisasi stok otomatis dengan pesanan marketplace Shopee + RBAC ketat Owner/Kasir",
    ],
    impactMetrics: [
      { value: "<45ms", label: "Deteksi pemindai barcode USB HID" },
      { value: "58mm", label: "Cetak struk termal siap kasir" },
      { value: "2 Role", label: "RBAC terpisah Owner BI vs Kasir" },
      { value: "Shopee", label: "Potong stok omnichannel otomatis" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "scalebase-crm",
    featured: false,
    client: "ScaleBase CRM.",
    tagline: "Pipeline Kanban B2B, tiket CS & analitik RFM.",
    sector: "B2B Sales CRM & Customer Support",
    year: "2026",
    stageBg: "#DAD6CE",
    techStack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "RFM ML"],
    images: [
      {
        src: "/images/real-projects/scalebase-crm-4x3.png",
        alt: "Tampilan asli platform workspace CRM ScaleBase untuk tim sales dan agensi B2B",
        caption: "Workspace kendali prospek, analitik funnel penjualan, dan tiket komplain pelanggan",
      },
    ],
    badges: [
      {
        eyebrow: "PIPELINE",
        label: "Kanban Drag & Drop",
        iconKey: "trending",
        tileBg: "#171717",
        tileInk: "#FFD124",
      },
      {
        eyebrow: "RETENSI",
        label: "Segmentasi RFM ML",
        iconKey: "bot",
        tileBg: "#DE6D3B",
        tileInk: "#FFFFFF",
      },
    ],
    problem:
      "Prospek B2B sering tercecer di spreadsheet terpisah antara tim sales, CS, dan marketing sehingga follow-up terlambat dan pelanggan berisiko churn tidak terdeteksi.",
    functionalValue:
      "Menyatukan manajemen pipeline penjualan Kanban, tiket komplain omnichannel, pengingat lead idle >3 hari, dan segmentasi pelanggan RFM dalam satu workspace terpadu.",
    coreFunctions: [
      "Pipeline Kanban (New → Contacted → Proposal → Negotiation → Won/Lost) + hitung Win Rate",
      "Otomasi pengingat Sales Rep apabila prospek terbengkalai di status New >3 hari",
      "Customer 360 & manajemen tiket CS dengan pelacakan SLA penyelesaian komplain",
      "Segmentasi klaster RFM (Recency, Frequency, Monetary) & RBAC 5 peran tim",
    ],
    impactMetrics: [
      { value: "5 Role", label: "RBAC Sales, Manager, CS, Mkt, Admin" },
      { value: "Kanban", label: "Pelacakan funnel & nilai deal" },
      { value: "RFM ML", label: "Deteksi pelanggan At-Risk churn" },
      { value: "3 Hari", label: "Otomasi pengingat prospek idle" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
];

export const FEATURED_WORK_ITEMS = SIGNIFICA_WORK_ITEMS.filter(
  (item) => item.featured
);

export const SECONDARY_WORK_ITEMS = SIGNIFICA_WORK_ITEMS.filter(
  (item) => !item.featured
);

export function getWorkItemBySlug(slug: string): CaseStudyItem | undefined {
  return SIGNIFICA_WORK_ITEMS.find((item) => item.slug === slug);
}
