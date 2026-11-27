export interface CaseSpec {
  label: string;
  value: string;
}

export interface CaseImage {
  src: string;
  alt: string;
  caption: string;
  fit?: "center" | "top";
}

export interface CaseStudyItem {
  slug: string;
  tier: "featured" | "gallery" | "archive";
  client: string;
  tagline: string;
  sector: string;
  year: string;
  liveUrl?: string;
  techStack: string[];
  images: CaseImage[];
  specs: CaseSpec[];
  problem: string;
  functionalValue: string;
  coreFunctions: string[];
  impactMetrics: { value: string; label: string }[];
  serviceHref: string;
}

export const SIGNIFICA_WORK_ITEMS: CaseStudyItem[] = [
  // =========================================================================
  // TIER 1 — 4 FEATURED SYSTEMS (Editorial 5/7 Rows)
  // =========================================================================
  {
    slug: "toko-amen-snack",
    tier: "featured",
    client: "Toko Amen Snack.",
    tagline: "Katalog live 1.446 SKU, AI Assistant & kasir terintegrasi.",
    sector: "Ritel & Oleh-Oleh · Bangka",
    year: "2026",
    liveUrl: "https://tokoamensnack.vercel.app",
    techStack: ["Next.js", "PostgreSQL", "Vercel AI SDK", "WAHA WhatsApp"],
    images: [
      {
        src: "/images/real-projects/amen-home-4x3.png",
        alt: "Tangkapan layar langsung website produksi Toko Amen Snack",
        caption: "Tampilan produksi live di tokoamensnack.vercel.app — katalog 1.446 SKU & asisten WhatsApp AI",
        fit: "top",
      },
      {
        src: "/images/real-projects/amen-catalog-4x3.png",
        alt: "Tangkapan layar halaman sorotan promo & katalog produk Toko Amen Snack",
        caption: "Halaman katalog & sorotan promo terintegrasi stok PostgreSQL dan checkout WhatsApp",
        fit: "top",
      },
    ],
    specs: [
      { label: "Database", value: "1.446 Master SKU" },
      { label: "AI & WA Bot", value: "Cek Stok & Ongkir" },
      { label: "Smart Search", value: "Sinonim Lokal Bangka" },
      { label: "Hardware", value: "Ringan di Win 7 / 4GB" },
    ],
    problem:
      "Toko oleh-oleh dengan lebih dari seribu jenis camilan kesulitan melayani pertanyaan stok, harga grosir, dan estimasi berat ongkir di WhatsApp secara manual, sementara PC kasir toko masih memakai Windows 7 RAM 4 GB.",
    functionalValue:
      "Menyatukan 1.446 master SKU PostgreSQL antara sistem kasir dan katalog web publik, ditambah asisten AI dual-engine (LLM + fallback deterministik) yang akurat menghitung total pesanan, berat kirim (kg), dan membuat tautan checkout WhatsApp otomatis.",
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
    slug: "propsmart-saas",
    tier: "featured",
    client: "PropSmart.",
    tagline: "Manajemen kos multi-unit, BI Rental Yield & estimasi harga ML.",
    sector: "PropTech SaaS & Machine Learning",
    year: "2026",
    techStack: ["Next.js 14", "FastAPI", "Supabase", "Scikit-Learn Ridge"],
    images: [
      {
        src: "/images/portfolio/propsmart-dashboard.png",
        alt: "Dashboard Eksekutif PropSmart menampilkan okupansi 93.75%, pendapatan Rp 58,4 juta, NOI, Net Rental Yield 9.45%, dan status 32 kamar",
        caption: "Executive Financial & Occupancy Dashboard — Okupansi, NOI, Net Rental Yield & grid 32 kamar real-time",
        fit: "top",
      },
      {
        src: "/images/portfolio/propsmart-ml-pricing.png",
        alt: "Mesin Estimasi Harga Sewa Machine Learning PropSmart dengan akurasi R² 0.9822 dan faktor SHAP",
        caption: "Machine Learning Price Estimation Engine (Ridge Regression R² = 0,9822) dengan penjelasan faktor SHAP",
        fit: "top",
      },
    ],
    specs: [
      { label: "Rental Yield BI", value: "Net Yield 9,45% & NOI" },
      { label: "ML Pricing", value: "Ridge Model R² 0,9822" },
      { label: "Auto-Billing", value: "Meteran kWh & WA API" },
      { label: "Multi-Tenant", value: "Supabase RLS & QRIS" },
    ],
    problem:
      "Lebih dari 80% pemilik kos dan kontrakan masih mencatat meteran listrik/air serta penagihan secara manual di buku atau Excel, sehingga 25–35% penyewa terlambat bayar dan pemilik tidak mengetahui Net Rental Yield riil maupun harga sewa pasar optimal.",
    functionalValue:
      "Platform SaaS properti sewa terpadu yang mengotomatisasi pencatatan utilitas kWh/m³ menjadi tagihan Virtual Account & QRIS via WhatsApp, menghitung Gross/Net Rental Yield secara real-time, dan memprediksi harga sewa kamar optimal menggunakan Ridge Regression beserta penjelasan faktor SHAP.",
    coreFunctions: [
      "Executive Overview Dashboard dengan grid status 32+ kamar real-time (Terisi, Kosong, Maintenance)",
      "Utility Auto-Billing Engine mencatat meteran listrik/air dan mengirim pengingat tagihan WhatsApp 1 klik",
      "BI Rental Yield Analytics: okupansi, arus kas bulanan, OPEX, Net Operating Income (NOI), & payback period",
      "ML Price Estimation Engine (scikit-learn Ridge, R² 0,9822) untuk rekomendasi harga sewa berbasis lokasi, luas & fasilitas",
    ],
    impactMetrics: [
      { value: "0,982", label: "Skor akurasi R² model Ridge ML" },
      { value: "9,45%", label: "Pelacakan Net Rental Yield riil" },
      { value: "32+", label: "Monitor status kamar per properti" },
      { value: "1 Klik", label: "Tagihan & reminder WA otomatis" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "heavytrack-wms",
    tier: "featured",
    client: "HeavyTrack WMS.",
    tagline: "Gudang spare parts alat berat offline-first (<5ms) & cetak Surat Jalan.",
    sector: "Industrial WMS · PT Mitra Abadi Nusantara",
    year: "2026",
    techStack: ["React 18", "Node.js", "SQLite WAL", "Laravel 12"],
    images: [
      {
        src: "/images/portfolio/heavytrack-dashboard.png",
        alt: "Dashboard Operasional HeavyTrack WMS PT Mitra Abadi Nusantara dengan performa lokal <5ms, Surat Jalan, dan Penerimaan Barang",
        caption: "Dashboard Operasional Offline-First (<5ms) — mutasi Surat Jalan (DO), LPB, dan pemisahan role Owner HPP vs Admin",
        fit: "top",
      },
    ],
    specs: [
      { label: "Kecepatan", value: "Query Lokal 3–7 ms" },
      { label: "Integritas Stok", value: "No Negative + Locking" },
      { label: "Dokumen Legal", value: "SJ, Faktur & Dot Matrix" },
      { label: "Konsumsi RAM", value: "~35 MB Offline LAN" },
    ],
    problem:
      "Distributor suku cadang alat berat (Komatsu, CAT, Hitachi, Fleetguard) butuh pencarian nomor part kompleks secara instan, jaminan anti stok minus di jam sibuk, serta cetak Surat Jalan rangkap dot-matrix tanpa bergantung koneksi internet stabil.",
    functionalValue:
      "Sistem WMS khusus spare parts alat berat yang berjalan 100% offline-first di jaringan Wi-Fi gudang dengan latensi query 3–7ms (~35 MB RAM), normalisasi pencarian part number lintas merek, buku mutasi append-only, dan cetak dokumen legal A4 maupun continuous form.",
    coreFunctions: [
      "Normalisasi pencarian Part Number & Cross-Reference antar merek (Komatsu, CAT, Hitachi, Parker Racor)",
      "Pessimistic locking & aturan anti stok minus dengan kartu stok (stock ledger) immutable",
      "Alur lengkap Goods Receipt (LPB) → Sales Order → Surat Jalan (DO) → Faktur & Kwitansi (A4 & Dot Matrix)",
      "Pemisahan hak akses ketat Owner (lihat HPP, piutang, void dokumen) vs Admin/Kasir gudang",
    ],
    impactMetrics: [
      { value: "<5ms", label: "Latensi query lokal SQLite WAL" },
      { value: "~35MB", label: "Konsumsi RAM mesin server lokal" },
      { value: "100%", label: "Berjalan penuh offline di LAN" },
      { value: "0", label: "Toleransi stok negatif & hard delete" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "looku-ai",
    tier: "featured",
    client: "Look.u AI.",
    tagline: "Stylist AI berbasis Hybrid RAG 594 SKU & Vision tanpa halusinasi.",
    sector: "Applied AI & Fashion Tech · PWA",
    year: "2026",
    techStack: ["Next.js", "Gemini 256-d RAG", "Vision AI", "Supabase"],
    images: [
      {
        src: "/images/real-projects/looku-home-4x3.png",
        alt: "Tangkapan layar langsung asisten styling fashion AI Look.u berbasis Hybrid RAG 594 SKU",
        caption: "Antarmuka prompt chat AI Zero-Hallucination & filter ketat Hijab, Gender, serta Budget",
        fit: "top",
      },
      {
        src: "/images/real-projects/looku-catalog-4x3.png",
        alt: "Tangkapan layar katalog produk RAG 594 SKU dari 46 brand resmi pada Look.u AI",
        caption: "Katalog produk RAG (594 SKU · 46 Brand) terindeks vektor Gemini 256-dimensi",
        fit: "top",
      },
    ],
    specs: [
      { label: "Hybrid RAG", value: "594 SKU · 46 Brand" },
      { label: "Zero Hallucination", value: "Gemini 256-d Vector" },
      { label: "Vision AI", value: "Foto Lemari & Try-On" },
      { label: "Filter Ketat", value: "Hijab · Gender · Budget" },
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

  // =========================================================================
  // TIER 2 — 6 BORDERLESS VISUAL GALLERY SYSTEMS
  // =========================================================================
  {
    slug: "lacak-korupsi",
    tier: "gallery",
    client: "Lacak Korupsi.",
    tagline: "Portal berita investigasi, peta sebaran 38 provinsi & analitik data.",
    sector: "Portal Berita & Civic Intelligence",
    year: "2026",
    techStack: ["Astro", "Next.js", "FastAPI", "Supabase PostGIS"],
    images: [
      {
        src: "/images/portfolio/lacak-korupsi-peta.png",
        alt: "Halaman Peta Sebaran Kasus Lacak Korupsi menampilkan grafik kerugian negara per provinsi dan intensitas wilayah",
        caption: "Peta Sebaran & Analitik Kerugian Negara per Provinsi berbasis PostGIS & ECharts",
        fit: "top",
      },
      {
        src: "/images/portfolio/lacak-korupsi-news.png",
        alt: "Beranda Portal Berita Lacak Korupsi dengan breaking ticker, berita investigasi utama, dan daftar kasus terbaru",
        caption: "Portal berita investigasi dengan Breaking Ticker, AI 30-Second Digest, & status proses hukum",
        fit: "top",
      },
    ],
    specs: [
      { label: "GIS Heatmap", value: "Sebaran 38 Provinsi" },
      { label: "AI Digest", value: "Ringkasan 30 Detik" },
      { label: "Case Tracker", value: "Penyidikan → Inkracht" },
      { label: "Whistleblower", value: "Pelaporan Terenkripsi" },
    ],
    problem:
      "Informasi kasus tindak pidana korupsi tersebar di berbagai media berita tanpa agregasi angka kerugian negara, sebaran wilayah geografis, maupun pelacakan perkembangan status hukum secara transparan.",
    functionalValue:
      "Portal berita sekaligus pusat intelijen data publik yang menggabungkan ringkasan artikel AI 30 detik ber-atribusi sumber resmi, visualisasi GIS kerugian negara per provinsi, klasemen kasus, serta formulir whistleblower terenkripsi.",
    coreFunctions: [
      "Peta sebaran & intensitas kerugian negara lintas provinsi berbasis PostgreSQL PostGIS & ECharts",
      "Portal berita investigasi dengan Breaking Ticker, filter sektor, dan AI 30-Second Digest netral",
      "Case Tracker 4 tahap (Penyidikan → Penuntutan → Vonis → Inkracht) dan Klasemen Kerugian Negara",
      "Formulir Whistleblower aman + arsitektur terpisah Next.js / Astro Island & FastAPI",
    ],
    impactMetrics: [
      { value: "38", label: "Pemetaan provinsi berbasis PostGIS" },
      { value: "30 dtk", label: "Format baca ringkas AI Digest" },
      { value: "4 Tahap", label: "Pelacakan status hukum transparan" },
      { value: "<1 dtk", label: "Render halaman cepat via Astro/ISR" },
    ],
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "central-scaffolding",
    tier: "gallery",
    client: "Central Scaffolding.",
    tagline: "Web B2B sewa/jual, kalkulator set SNI & Local SEO.",
    sector: "Konstruksi B2B · Jabodetabek",
    year: "2026",
    techStack: ["Astro", "React Island", "Tailwind CSS", "Local SEO"],
    images: [
      {
        src: "/images/real-projects/scaffolding-home-4x3.png",
        alt: "Tangkapan layar langsung website B2B Sewa & Jual Scaffolding Standar SNI Central Scaffolding",
        caption: "Beranda website B2B ultra-cepat berbasis Astro dengan stok 10.000+ set & Local SEO Jabodetabek",
        fit: "top",
      },
      {
        src: "/images/real-projects/scaffolding-catalog-4x3.png",
        alt: "Tangkapan layar langsung katalog produk dan aksesoris Central Scaffolding",
        caption: "Katalog teknis komponen SNI interaktif siap filter & hitung set ke WhatsApp",
        fit: "top",
      },
    ],
    specs: [
      { label: "Kalkulator", value: "Hitung Set ke WA" },
      { label: "Katalog B2B", value: "Filter Komponen SNI" },
      { label: "Local SEO", value: "Halaman Per Area" },
      { label: "Arsitektur", value: "Astro 0 KB Static" },
    ],
    problem:
      "Kontraktor di lapangan mencari vendor sewa/beli scaffolding langsung dari HP dan butuh kepastian stok fisik beserta hitungan jumlah Main Frame, Cross Brace, dan Joint Pin tanpa menunggu lama.",
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
    tier: "gallery",
    client: "YPI Al-Fuad Tangerang.",
    tagline: "Portal 5 unit pendidikan & sistem konversi PPDB.",
    sector: "Yayasan Pendidikan · Tangerang",
    year: "2026",
    techStack: ["Astro 5", "TypeScript", "Tailwind CSS", "JSON-LD SEO"],
    images: [
      {
        src: "/images/real-projects/alfuad-home-4x3.png",
        alt: "Tangkapan layar langsung portal resmi YPI Al-Fuad Poris Gaga Tangerang",
        caption: "Tampilan produksi portal resmi YPI Tahfidz Qur'an Al-Fuad untuk 5 unit pendidikan & PPDB 2026",
        fit: "top",
      },
      {
        src: "/images/real-projects/alfuad-units-4x3.png",
        alt: "Tangkapan layar daftar 5 unit pendidikan terpadu YPI Al-Fuad lengkap NPSN",
        caption: "Navigasi 5 jenjang pendidikan (RA, MI TPI, SMP-IT, SMK-IT, Pondok Pesantren) & rincian biaya",
        fit: "top",
      },
    ],
    specs: [
      { label: "5 Jenjang", value: "RA · MI · SMP · SMK · Ponpes" },
      { label: "Konversi", value: "Alur PPDB & PDF Biaya" },
      { label: "SEO Resmi", value: "Schema Sekolah & NPSN" },
      { label: "Performa", value: "Astro 5 Static Output" },
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
    slug: "crew-ai-hris",
    tier: "gallery",
    client: "CREW. AI HRIS.",
    tagline: "Dashboard HRIS, deteksi risiko resign & audit gaji ML.",
    sector: "Enterprise HRIS & ML",
    year: "2026",
    techStack: ["Next.js", "FastAPI", "Scikit-Learn", "PostgreSQL"],
    images: [
      {
        src: "/images/real-projects/crew-hris-4x3.png",
        alt: "Tangkapan layar langsung CREW AI HRIS menampilkan 142 karyawan, retensi 92.5%, dan prediksi gaji ML",
        caption: "Antarmuka CREW AI HRIS: metrik retensi, distribusi risiko keluar (Flight Risk), & prediksi gaji ideal ML",
        fit: "top",
      },
    ],
    specs: [
      { label: "Machine Learning", value: "Flight Risk Detector" },
      { label: "Kompensasi", value: "Smart Salary Predict" },
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
    tier: "gallery",
    client: "SmartPOS Aneka Rasa.",
    tagline: "Kasir barcode <45ms, struk 58mm & BI omzet Shopee.",
    sector: "Omnichannel Retail POS · Bangka",
    year: "2026",
    techStack: ["React", "Vite", "USB Barcode", "Shopee Sync"],
    images: [
      {
        src: "/images/real-projects/smartpos-home-4x3.png",
        alt: "Tangkapan layar langsung terminal kasir dark-mode SmartPOS dengan scan barcode F2 dan pembayaran QRIS/Tunai/Debit",
        caption: "Terminal kasir dark-mode SmartPOS dengan pintasan keyboard F2–F12, barcode USB HID <45ms, & struk 58mm",
        fit: "top",
      },
    ],
    specs: [
      { label: "Kasir Cepat", value: "Scan Barcode <45ms" },
      { label: "Omnichannel", value: "POS + Shopee + BI" },
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
    tier: "gallery",
    client: "ScaleBase CRM.",
    tagline: "Board Kanban pipeline B2B, tiket CS & analitik RFM.",
    sector: "B2B Sales CRM & Support",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "FastAPI", "RFM ML"],
    images: [
      {
        src: "/images/real-projects/scalebase-crm-4x3.png",
        alt: "Tangkapan layar langsung ScaleBase CRM untuk manajemen pipeline penjualan B2B dan analitik RFM",
        caption: "Antarmuka ScaleBase CRM — pipeline penjualan B2B terukur, manajemen prospek, & segmentasi RFM",
        fit: "top",
      },
    ],
    specs: [
      { label: "Pipeline", value: "Kanban Drag & Drop" },
      { label: "Retensi", value: "Segmentasi RFM ML" },
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

  // =========================================================================
  // TIER 3 — 6 ARCHIVE SYSTEMS (Minimalist Swiss Index List + Full Detail Pages)
  // =========================================================================
  {
    slug: "capstonenews-portal",
    tier: "archive",
    client: "CapstoneNews.",
    tagline: "Portal berita editorial modern dengan CMS Filament v5 & Inertia Vue 3.",
    sector: "Media & Portal Berita",
    year: "2026",
    techStack: ["Laravel 11", "Filament v5", "Inertia Vue 3", "Spatie Media"],
    images: [],
    specs: [
      { label: "CMS Redaksi", value: "Filament v5 + Spatie" },
      { label: "Frontend SPA", value: "Inertia.js + Vue 3" },
    ],
    problem:
      "Media berita digital membutuhkan alur penerbitan redaksi yang cepat (draft, review, publish), pengelolaan media gambar otomatis, pencarian artikel instan, serta pengalaman baca nyaman di mode terang maupun gelap.",
    functionalValue:
      "Portal berita full-stack berbasis Laravel 11 + Inertia Vue 3 dengan panel redaksi Filament v5, kurasi Breaking News & Trending Sidebar, sistem Bookmark & Komentar pembaca, serta SEO Head terstruktur.",
    coreFunctions: [
      "CMS redaksi Filament v5 lengkap untuk manajemen Berita, Kategori, Tag, Komentar & User Role",
      "Grid Breaking News, Trending Sidebar, pencarian real-time, serta filter kategori/tag",
      "Manajemen aset gambar teroptimasi lewat Spatie Media Library & Action/DTO arsitektur bersih",
      "Dukungan Dark/Light Mode otomatis, fitur Bookmark pembaca & statistik views artikel",
    ],
    impactMetrics: [
      { value: "SPA", label: "Navigasi baca tanpa reload via Inertia" },
      { value: "CMS v5", label: "Panel redaksi Filament lengkap" },
      { value: "SEO", label: "Meta dinamis & URL ramah mesin pencari" },
      { value: "RBAC", label: "Pemisahan peran Editor, Penulis & Pembaca" },
    ],
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "desahub-simkopdes",
    tier: "archive",
    client: "DesaHub (SIMKOPDES).",
    tagline: "Agregasi pangan koperasi desa & kontrak pre-order atomik untuk MBG.",
    sector: "Agritech B2B · Kemenkop RI",
    year: "2026",
    techStack: ["Laravel 11", "Filament 3", "Inertia Vue 3", "PostgreSQL"],
    images: [],
    specs: [
      { label: "Pre-Order", value: "Atomic lockForUpdate" },
      { label: "Traceability", value: "QR Lahan & Skor Lab" },
    ],
    problem:
      "Koperasi Unit Desa (KUD) menghadapi ketidakpastian permintaan, sementara program Makan Bergizi Gratis (MBG) memerlukan pasokan pangan terstandardisasi mutu, bebas double-booking, dan terlacak asalnya.",
    functionalValue:
      "Platform B2B yang mempertemukan Koperasi Desa dengan pembeli korporasi/MBG melalui Live Supply Capacity, Atomic Smart Pre-Order Contract siap cetak A4 resmi, serta QR Traceability asal petani & uji lab.",
    coreFunctions: [
      "Dasbor Live Supply Capacity dengan peringatan otomatis komoditas kritis (<100 kg)",
      "Reservasi kontrak stok atomik (DB::transaction + lockForUpdate) anti double-booking",
      "Cetak Lembar Kontrak Resmi A4 + integrasi konfirmasi langsung ke WhatsApp Koperasi",
      "Farmer Origin Traceability via QR Code dengan skor uji lab keamanan pangan & koordinat GPS",
    ],
    impactMetrics: [
      { value: "ACID", label: "Kunci stok kontrak anti race-condition" },
      { value: "QR", label: "Jejak digital Farm-to-Table transparan" },
      { value: "A4 Print", label: "Bukti kontrak formal siap cetak" },
      { value: "Kemenkop", label: "Karya Hackathon Nasional Koperasi RI" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "kinetic-fitness",
    tier: "archive",
    client: "KINETIC Fitness.",
    tagline: "Platform gym multi-cabang, spot picker studio & QR turnstile 15 dtk.",
    sector: "Fitness Tech & IoT",
    year: "2026",
    techStack: ["Next.js 15", "Supabase RLS", "React Native", "IoT Gate"],
    images: [
      {
        src: "/images/portfolio/kinetic-gym-home.png",
        alt: "Antarmuka KINETIC Tech Gym Platform menampilkan status 48+ cabang, QR Member Pass, dan mode gelap Obsidian",
        caption: "KINETIC Next-Gen Tech Gym — 50+ cabang nasional, Dynamic QR Pass & dual-theme Obsidian/Titanium",
        fit: "top",
      },
    ],
    specs: [
      { label: "Turnstile IoT", value: "Dynamic QR TOTP 15 dtk" },
      { label: "Booking Kelas", value: "Cinema-Style Spot Picker" },
    ],
    problem:
      "Jaringan gym multi-cabang sering mengalami antrean resepsionis, perebutan posisi matras kelas studio, serta ketiadaan visibilitas jam sepi/ramai antar cabang bagi member.",
    functionalValue:
      "Ekosistem gym full-TypeScript dengan radar GPS cabang terdekat & prediksi kepadatan per jam, pemilih posisi matras studio layaknya bioskop, hingga daemon gerbang IoT Raspberry Pi berbasis QR dinamis 15 detik.",
    coreFunctions: [
      "Cinema-Style Studio Spot Picker (Row A/B/C) + sinkronisasi 1-klik Google Calendar & file .ics",
      "Radar GPS & Predictive Crowd Forecast menampilkan tingkat kepadatan cabang secara real-time",
      "Dynamic 15-Second TOTP QR Pass terhubung ke daemon Turnstile Gate (Raspberry Pi)",
      "Dual-Theme Engine (Obsidian Dark & Titanium Lab Light) serta dukungan dwibahasa ID/EN",
    ],
    impactMetrics: [
      { value: "<192ms", label: "Kecepatan pindai gerbang QR IoT" },
      { value: "15 dtk", label: "Rotasi keamanan kode QR dinamis" },
      { value: "50+", label: "Arsitektur multi-cabang RLS Supabase" },
      { value: "Dual", label: "Tema Obsidian & Titanium + ID/EN" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "logisync-fleet",
    tier: "archive",
    client: "LogiSync (Fleet.OS).",
    tagline: "Command center logistik, pelacakan GPS real-time, WMS & PWA kurir.",
    sector: "Enterprise Logistics & Fleet",
    year: "2026",
    techStack: ["Next.js 16", "FastAPI", "Redis", "Leaflet GPS"],
    images: [],
    specs: [
      { label: "Live Telemetry", value: "WebSocket GPS + Redis" },
      { label: "Lapangan", value: "PWA Kurir + Scan Barcode" },
    ],
    problem:
      "Perusahaan ekspedisi dan distribusi kesulitan menyatukan posisi armada GPS lapangan, pemindaian inbound/outbound gudang, dan estimasi waktu tiba (ETA) dalam satu pusat kendali.",
    functionalValue:
      "Platform logistik terpadu dengan Command Center KPI & peta armada Leaflet, aliran GPS real-time via WebSocket + Redis, pemindaian paket barcode, PWA kurir bertanda tangan digital, dan prediksi risiko keterlambatan.",
    coreFunctions: [
      "Command Center dengan peta armada real-time (Leaflet) dan metrik status pengiriman",
      "Aliran telemetri GPS berkecepatan tinggi melalui FastAPI WebSocket + cache Redis",
      "Modul WMS gudang (inbound/outbound & bin lokasi) terintegrasi pemindaian barcode",
      "Aplikasi Kurir PWA dengan bukti serah terima tanda tangan digital & prediksi ETA",
    ],
    impactMetrics: [
      { value: "Live WS", label: "Streaming lokasi GPS berbasis Redis" },
      { value: "PWA", label: "Aplikasi kurir siap pasang di HP" },
      { value: "WMS+HR", label: "Gudang & KPI kurir terintegrasi" },
      { value: "Docker", label: "Orkestrasi Nginx, Celery & Postgres" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "ai-cv-screening",
    tier: "archive",
    client: "AI CV Screening.",
    tagline: "Seleksi CV massal Two-Stage Hybrid AI, Blind Screening UU PDP & n8n.",
    sector: "HR Automation & Applied AI",
    year: "2026",
    techStack: ["Python", "Gemini API", "n8n Workflow", "Streamlit"],
    images: [],
    specs: [
      { label: "Matching", value: "Embedding + LLM Reasoning" },
      { label: "Privasi", value: "Blind Screening UU PDP" },
    ],
    problem:
      "Tim rekrutmen manufaktur kewalahan menyaring ratusan CV PDF/DOCX secara manual sekaligus rentan bias subjektif maupun kebocoran data pribadi pelamar (PII).",
    functionalValue:
      "Pipeline seleksi kandidat otomatis dua tahap (Hard Filter + Gemini Embedding Similarity & Qualitative Reasoning) yang mengisolasi PII sebelum dinilai AI sesuai UU PDP No. 27/2022, terhubung ke orkestrasi n8n.",
    coreFunctions: [
      "Ekstraksi teks & tabel akurat dari CV PDF/DOCX dengan pemisahan PII (Blind Screening)",
      "Two-Stage Hybrid Matching: filter kualifikasi wajib + skor semantik & alasan kualitatif AI",
      "Audit trail peringkat kandidat terurut lengkap dengan preset kriteria jabatan",
      "Blueprint workflow n8n untuk ingestion CV otomatis dari email/Drive & notifikasi HR",
    ],
    impactMetrics: [
      { value: "2-Stage", label: "Hard Filter + Hybrid AI Scoring" },
      { value: "UU PDP", label: "Isolasi PII otomatis (Blind Screening)" },
      { value: "n8n", label: "Otomasi ingestion & notifikasi siap pakai" },
      { value: "Audit", label: "Skor & alasan objektif tiap kandidat" },
    ],
    serviceHref: "/jasa-automasi-whatsapp",
  },
  {
    slug: "siakad-sekolah",
    tier: "archive",
    client: "SIAKAD Sekolah.",
    tagline: "Sistem akademik siswa, guru, jadwal, absensi, nilai & ekspor PDF/Excel.",
    sector: "Sistem Informasi Akademik",
    year: "2026",
    techStack: ["Laravel 12", "Filament 5", "Spatie RBAC", "DomPDF"],
    images: [],
    specs: [
      { label: "Modul Inti", value: "Siswa · Guru · Absen · Nilai" },
      { label: "Laporan", value: "Ekspor Excel & Cetak PDF" },
    ],
    problem:
      "Administrasi sekolah sering tersebar di berbagai berkas Excel sehingga rekap absensi, jadwal pelajaran, dan pencetakan rapor akhir semester memakan waktu berhari-hari.",
    functionalValue:
      "Aplikasi SIAKAD terpusat berbasis Laravel 12 dan Filament v5 yang menyatukan pengelolaan Tahun Ajaran, data Siswa & Guru, Jadwal Pelajaran, Absensi harian, Nilai, serta ekspor laporan PDF/Excel instan.",
    coreFunctions: [
      "Master data Siswa, Guru, Tahun Ajaran, dan penjadwalan mata pelajaran terstruktur",
      "Input absensi harian & rekap penilaian akademik per semester secara terpusat",
      "Hak akses terpisah (Admin, Guru, Wali Kelas) berbasis Spatie Laravel Permission",
      "Cetak laporan resmi PDF (DomPDF) dan ekspor data massal ke Excel (Filament Excel)",
    ],
    impactMetrics: [
      { value: "6 Modul", label: "Akademik terintegrasi satu panel" },
      { value: "PDF/XLS", label: "Rekap nilai & absensi 1 klik" },
      { value: "RBAC", label: "Kontrol akses multi-peran sekolah" },
      { value: "Rp0", label: "Tanpa biaya langganan per siswa" },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
];

export const FEATURED_WORK_ITEMS = SIGNIFICA_WORK_ITEMS.filter(
  (item) => item.tier === "featured"
);

export const GALLERY_WORK_ITEMS = SIGNIFICA_WORK_ITEMS.filter(
  (item) => item.tier === "gallery"
);

export const ARCHIVE_WORK_ITEMS = SIGNIFICA_WORK_ITEMS.filter(
  (item) => item.tier === "archive"
);

export function getWorkItemBySlug(slug: string): CaseStudyItem | undefined {
  return SIGNIFICA_WORK_ITEMS.find((item) => item.slug === slug);
}
