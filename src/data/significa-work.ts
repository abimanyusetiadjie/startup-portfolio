export interface CaseHighlight {
  title: string;
  detail: string;
}

export interface CaseImage {
  src: string;
  alt: string;
  caption: string;
  fit?: "center" | "top";
  width?: number;
  height?: number;
}

export interface CaseStudyItem {
  slug: string;
  tier: "featured" | "gallery" | "archive";
  client: string;
  tagline: string;
  sector: string;
  scope: string;
  year: string;
  liveUrl?: string;
  images: CaseImage[];
  problem: string;
  functionalValue: string;
  highlights: CaseHighlight[];
  serviceHref: string;
}

export const SIGNIFICA_WORK_ITEMS: CaseStudyItem[] = [
  // =========================================================================
  // FEATURED & PRIMARY SHOWCASE SYSTEMS
  // =========================================================================
  {
    slug: "wa-automation-workflow",
    tier: "featured",
    client: "FlowNest — Automasi WA & ERP.",
    tagline: "Alur otomasi pesanan WhatsApp resmi, cek stok otomatis & sinkronisasi invoice ERP.",
    sector: "Automation Workflow & AI",
    scope: "Alur Otomasi WhatsApp & Integrasi ERP",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/wa-automation-workflow.webp",
        alt: "Kanvas alur otomasi FlowNest menghubungkan WhatsApp resmi, AI Parser & Cek Stok, balasan QRIS, dan pencatatan invoice ERP",
        caption: "Orkestrasi alur kerja otomatis dari pesan WhatsApp masuk hingga pencatatan invoice dan notifikasi tim gudang",
        fit: "center",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Admin penjualan sering kewalahan membalas chat pesanan, mengecek ketersediaan stok gudang, dan menyalin ulang data order ke sistem invoice secara manual.",
    functionalValue:
      "Orkestrasi workflow mandiri yang menangkap pesan WhatsApp resmi, mengecek stok langsung ke database, membalas rincian plus tautan QRIS, sekaligus mencatat faktur ke ERP.",
    highlights: [
      {
        title: "Jalur Resmi WhatsApp",
        detail: "Menangkap pesanan dan bukti transfer secara aman tanpa risiko blokir akun.",
      },
      {
        title: "Cek Stok & Ongkir Otomatis",
        detail: "AI membaca maksud pesanan lalu mencocokkan SKU langsung ke database stok.",
      },
      {
        title: "Sinkronisasi Invoice & Gudang",
        detail: "Membuat draf faktur, memotong stok, dan mengirim notifikasi ke tim packing.",
      },
      {
        title: "Ambil Alih Admin Instan",
        detail: "Bot otomatis jeda saat pelanggan membutuhkan penanganan langsung dari staf.",
      },
    ],
    serviceHref: "/jasa-automasi-whatsapp",
  },
  {
    slug: "toko-amen-snack",
    tier: "gallery",
    client: "Toko Amen Snack.",
    tagline: "Website e-commerce oleh-oleh Bangka, katalog stok live & asisten WA AI.",
    sector: "Website E-Commerce & F&B · Bangka",
    scope: "Storefront E-Commerce & Asisten WA AI",
    year: "2026",
    liveUrl: "https://tokoamensnack.vercel.app",
    images: [
      {
        src: "/images/portfolio/toko-amen-snack-web.webp",
        alt: "Antarmuka website e-commerce artisan Toko Amen Snack dengan kurasi produk khas Bangka dan tombol Asisten WA AI",
        caption: "Storefront editorial Toko Amen Snack yang menyatukan katalog stok langsung dan alur order WhatsApp",
        fit: "center",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Menjawab pertanyaan stok, harga grosir, dan estimasi ongkir ratusan jenis camilan secara manual di WhatsApp menyita waktu admin toko.",
    functionalValue:
      "Menyatukan katalog produk publik dengan database stok toko, dilengkapi asisten AI yang membantu cek harga, berat kirim, hingga tautan checkout WhatsApp.",
    highlights: [
      {
        title: "Stok Tersinkron",
        detail: "Katalog web selalu mengikuti ketersediaan stok dan harga grosir terbaru.",
      },
      {
        title: "Pencarian Pintar",
        detail: "Memahami istilah camilan lokal agar pelanggan cepat menemukan produk.",
      },
      {
        title: "Asisten Order WA",
        detail: "Hitung total belanja dan estimasi berat kirim otomatis sebelum checkout.",
      },
      {
        title: "Ringan di PC Lama",
        detail: "Dirancang hemat sumber daya agar tetap lancar di komputer kasir toko.",
      },
    ],
    serviceHref: "/jasa-automasi-whatsapp",
  },
  {
    slug: "propsmart-saas",
    tier: "featured",
    client: "PropSmart.",
    tagline: "Manajemen kos multi-unit, penagihan otomatis & estimasi harga sewa.",
    sector: "PropTech SaaS",
    scope: "Dashboard Properti & Auto-Billing",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/propsmart-saas.webp",
        alt: "Dashboard Eksekutif PropSmart menampilkan okupansi kamar, arus kas, dan estimasi harga sewa",
        caption: "Dashboard ringkas okupansi kamar, laporan arus kas, dan rekomendasi harga sewa",
        fit: "center",
        width: 1440,
        height: 1080,
      },
      {
        src: "/images/portfolio/propsmart-ml-pricing.webp",
        alt: "Modul estimasi harga sewa berbasis data lokasi dan fasilitas PropSmart",
        caption: "Simulasi estimasi harga sewa kamar berdasarkan lokasi, luas, dan fasilitas",
        fit: "top",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Pencatatan meteran listrik, status kamar, dan penagihan sewa di buku atau Excel kerap memicu keterlambatan tagihan serta laporan keuangan yang tercecer.",
    functionalValue:
      "Satu dashboard properti untuk memantau status kamar, mencatat utilitas, mengirim pengingat tagihan WhatsApp, dan melihat ringkasan arus kas secara jelas.",
    highlights: [
      {
        title: "Pantau Status Kamar",
        detail: "Peta visual kamar terisi, kosong, dan perawatan dalam satu tampilan.",
      },
      {
        title: "Tagihan & Pengingat WA",
        detail: "Catat meteran listrik/air lalu kirim tagihan QRIS ke penyewa sekali klik.",
      },
      {
        title: "Ringkasan Arus Kas",
        detail: "Pantau pemasukan, biaya operasional, dan imbal hasil properti tiap bulan.",
      },
      {
        title: "Simulasi Harga Sewa",
        detail: "Bantu pemilik menentukan tarif sewa kompetitif sesuai fasilitas kamar.",
      },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "heavytrack-wms",
    tier: "featured",
    client: "HeavyTrack WMS.",
    tagline: "Sistem gudang suku cadang alat berat offline-first & cetak Surat Jalan.",
    sector: "Industrial WMS",
    scope: "Warehouse System & Dokumen Legal",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/heavytrack-wms.webp",
        alt: "Dashboard HeavyTrack WMS Mitra Abadi Nusantara menampilkan tren keluar masuk barang, stok per kategori, Surat Jalan, dan Penerimaan Barang",
        caption: "Dashboard gudang modern Mitra Abadi Nusantara — tren mutasi stok, Surat Jalan, dan penerimaan barang",
        fit: "top",
        width: 1440,
        height: 786,
      },
    ],
    problem:
      "Gudang suku cadang alat berat membutuhkan pencarian nomor part lintas merek yang cepat serta cetak Surat Jalan tanpa terganggu koneksi internet.",
    functionalValue:
      "Sistem gudang offline-first yang berjalan langsung di jaringan lokal, menjaga akurasi kartu stok agar tidak minus, dan siap mencetak dokumen pengiriman.",
    highlights: [
      {
        title: "Pencarian Part Number",
        detail: "Pencocokan nomor suku cadang lintas merek secara cepat dan konsisten.",
      },
      {
        title: "Anti Stok Minus",
        detail: "Penguncian transaksi otomatis dengan kartu mutasi stok yang tercatat rapi.",
      },
      {
        title: "Cetak Dokumen Lengkap",
        detail: "Alur LPB, Surat Jalan, hingga Faktur siap cetak A4 maupun dot-matrix.",
      },
      {
        title: "Hak Akses Terpisah",
        detail: "Memisahkan tampilan HPP & piutang khusus pemilik dari admin gudang.",
      },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "looku-ai",
    tier: "featured",
    client: "Look.u AI.",
    tagline: "Stylist AI berbasis katalog produk nyata & pencocokan foto lemari.",
    sector: "Fashion Tech & Applied AI",
    scope: "Web App AI & Kurasi Katalog",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/looku-ai.webp",
        alt: "Antarmuka editorial fashion Look.u AI menampilkan kurasi busana adaptif iklim tropis",
        caption: "Kurasi busana modern yang menyesuaikan iklim tropis, gaya modest, dan preferensi pengguna",
        fit: "center",
        width: 1440,
        height: 810,
      },
      {
        src: "/images/portfolio/looku-ai-catalog.webp",
        alt: "Halaman katalog produk nyata terkurasi pada Look.u AI",
        caption: "Katalog produk brand resmi sebagai sumber rekomendasi AI tanpa item fiktif",
        fit: "top",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Chatbot AI umum kerap menyarankan pakaian fiktif yang tidak sesuai gaya berhijab, iklim tropis, maupun batas anggaran pembeli.",
    functionalValue:
      "Asisten styling berbasis pencarian katalog nyata yang mengunci setiap rekomendasi pada produk resmi, dilengkapi pencocokan langsung dari foto baju sendiri.",
    highlights: [
      {
        title: "Rekomendasi Produk Nyata",
        detail: "Setiap saran setelan merujuk langsung ke item katalog brand yang tersedia.",
      },
      {
        title: "Mix & Match Foto",
        detail: "Unggah foto pakaian dari lemari untuk mencari padanan warna dan gaya.",
      },
      {
        title: "Filter Preferensi Ketat",
        detail: "Mendukung filter hijab, gender, rona kulit, dan rentang anggaran.",
      },
      {
        title: "Panel Kelola Katalog",
        detail: "Admin mudah memperbarui daftar produk dan kategori melalui impor CSV.",
      },
    ],
    serviceHref: "/jasa-automasi-whatsapp",
  },
  {
    slug: "lacak-korupsi",
    tier: "gallery",
    client: "Lacak Korupsi.",
    tagline: "Portal berita investigasi, peta sebaran wilayah & ringkasan kasus.",
    sector: "Media & Civic Data",
    scope: "Portal Berita & Visualisasi Peta",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/lacak-korupsi.webp",
        alt: "Halaman Peta Sebaran Kasus Lacak Korupsi menampilkan grafik sebaran wilayah",
        caption: "Visualisasi sebaran kasus per provinsi dengan antarmuka baca gelap yang jernih",
        fit: "top",
        width: 1440,
        height: 810,
      },
      {
        src: "/images/portfolio/lacak-korupsi-news.webp",
        alt: "Beranda Portal Berita Lacak Korupsi dengan berita investigasi dan daftar kasus terbaru",
        caption: "Beranda portal berita investigasi dengan ringkasan baca cepat dan alur proses hukum",
        fit: "top",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Informasi perkara tindak pidana korupsi tersebar di berbagai kanal tanpa peta sebaran maupun pelacakan tahap hukum yang mudah diikuti publik.",
    functionalValue:
      "Portal berita sekaligus pusat data publik yang menyatukan ringkasan berita netral, pemetaan wilayah interaktif, dan pelacakan tahapan perkara.",
    highlights: [
      {
        title: "Peta Sebaran Wilayah",
        detail: "Visualisasi data perkara lintas provinsi berbasis basis data spasial.",
      },
      {
        title: "Ringkasan Baca Cepat",
        detail: "Ikhtisar berita singkat dengan atribusi sumber resmi yang jelas.",
      },
      {
        title: "Pelacak Tahap Hukum",
        detail: "Menampilkan progres perkara dari penyidikan hingga putusan berkekuatan tetap.",
      },
      {
        title: "Kanal Laporan Aman",
        detail: "Formulir pelaporan publik yang terstruktur dan menjaga kerahasiaan.",
      },
    ],
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "central-scaffolding",
    tier: "gallery",
    client: "Central Scaffolding.",
    tagline: "Web B2B sewa & jual scaffolding, kalkulator kebutuhan set & Local SEO.",
    sector: "Konstruksi B2B · Jabodetabek",
    scope: "Website B2B & Kalkulator Material",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/central-scaffolding-web.webp",
        alt: "Website B2B Central Scaffolding menampilkan kalkulator kebutuhan set SNI interaktif dan spesifikasi komponen proyek",
        caption: "Website B2B bergaya arsitektural dengan kalkulator kebutuhan set yang langsung menyusun draf WhatsApp",
        fit: "center",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Kontraktor di lapangan mencari vendor scaffolding lewat ponsel dan perlu kepastian rincian komponen set tanpa menunggu respons lama.",
    functionalValue:
      "Website B2B ringan dengan kalkulator kebutuhan set interaktif yang menyusun draf pesanan rapi ke WhatsApp serta halaman jangkauan per area.",
    highlights: [
      {
        title: "Kalkulator Kebutuhan Set",
        detail: "Otomatis merinci Main Frame, Cross Brace, dan Joint Pin untuk sewa atau beli.",
      },
      {
        title: "Katalog Spesifikasi SNI",
        detail: "Filter komponen teknis dengan tombol cek ketersediaan langsung ke WhatsApp.",
      },
      {
        title: "Halaman Local SEO",
        detail: "Struktur halaman terarah untuk pencarian proyek di Jabodetabek.",
      },
      {
        title: "Akses Ringan di Lapangan",
        detail: "Arsitektur statis modern agar halaman tetap cepat di jaringan seluler.",
      },
    ],
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "ypi-al-fuad",
    tier: "gallery",
    client: "YPI Al-Fuad Tangerang.",
    tagline: "Portal terpadu multi-unit pendidikan & alur pendaftaran PPDB.",
    sector: "Yayasan Pendidikan · Tangerang",
    scope: "Portal Yayasan & Informasi PPDB",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/ypi-al-fuad-web.webp",
        alt: "Portal resmi Yayasan Pendidikan Islam Al-Fuad Tangerang menampilkan navigasi lima jenjang pendidikan dan alur PPDB",
        caption: "Portal yayasan pendidikan modern dengan pemilih lima jenjang terpadu dan akses brosur biaya PPDB",
        fit: "center",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Orang tua calon siswa sering bingung membedakan informasi antar jenjang dalam satu yayasan dan harus berulang kali meminta brosur biaya.",
    functionalValue:
      "Portal resmi yang menyatukan seluruh unit pendidikan (RA hingga SMK & Pesantren), brosur biaya siap unduh, dan akses langsung ke panitia PPDB.",
    highlights: [
      {
        title: "Navigasi Multi-Jenjang",
        detail: "Tab terstruktur untuk RA, MI, SMP-IT, SMK-IT, dan Pondok Pesantren.",
      },
      {
        title: "Unduh Brosur & Biaya",
        detail: "Dokumen resmi PPDB dan rincian biaya tersedia langsung dalam satu klik.",
      },
      {
        title: "Konversi ke Panitia WA",
        detail: "Tombol konsultasi terarah agar calon wali murid langsung terhubung.",
      },
      {
        title: "Tanpa Beban Maintenance",
        detail: "Berjalan sebagai situs statis aman tanpa biaya langganan database bulanan.",
      },
    ],
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "crew-ai-hris",
    tier: "archive",
    client: "CREW. AI HRIS.",
    tagline: "Dashboard HRIS, pemetaan risiko resign & evaluasi struktur gaji.",
    sector: "Enterprise HRIS",
    scope: "HR Management & People Analytics",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/crew-ai-hris.webp",
        alt: "Antarmuka CREW AI HRIS menampilkan ringkasan karyawan, retensi, dan evaluasi kompensasi",
        caption: "Dashboard terpusat untuk manajemen tim, evaluasi kinerja, dan analitik retensi",
        fit: "top",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Tim HR kerap kesulitan memantau risiko pengunduran diri talenta kunci dan kesenjangan kompensasi secara objektif dari spreadsheet terpisah.",
    functionalValue:
      "Menggabungkan data karyawan, penilaian kinerja, dan model analitik untuk membantu tim HR membaca risiko retensi serta merapikan struktur gaji.",
    highlights: [
      {
        title: "Database & KPI Tim",
        detail: "Kelola profil karyawan, riwayat evaluasi, dan penggajian dalam satu tempat.",
      },
      {
        title: "Pemetaan Risiko Resign",
        detail: "Indikator prioritas dini untuk membantu tim HR menyusun langkah retensi.",
      },
      {
        title: "Audit Struktur Gaji",
        detail: "Bandingkan kompensasi berjalan dengan acuan pengalaman dan kinerja.",
      },
      {
        title: "Siap Deploy Mandiri",
        detail: "Struktur instalasi rapi agar mudah dipasang langsung di server internal perusahaan.",
      },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "smartpos-aneka-rasa",
    tier: "featured",
    client: "Toko Ritel POS (SmartPOS).",
    tagline: "Kasir toko ritel barcode cepat, katalog stok live & laporan omzet.",
    sector: "Omnichannel Retail POS",
    scope: "Sistem Kasir POS & Katalog Ritel",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/smartpos-kasir.webp",
        alt: "Antarmuka kasir SmartPOS menampilkan pindai barcode F2, shortcut keyboard F1–F12, cek harga, Split Pay, Cash, Kartu EDC, QRIS, dan cetak struk",
        caption: "Antarmuka kasir SmartPOS — pindai barcode instan, shortcut F1–F12, Split Pay, Cash/EDC/QRIS, dan cetak struk",
        fit: "center",
        width: 1440,
        height: 810,
      },
    ],
    problem:
      "Toko ritel yang berjualan di gerai sekaligus online sering mengalami selisih stok, antrean kasir lambat, dan kesulitan menghitung laba bersih harian.",
    functionalValue:
      "Sistem kasir ritel cepat dengan pemindai barcode, cetak struk termal, sinkronisasi stok marketplace, serta laporan omzet khusus pemilik toko.",
    highlights: [
      {
        title: "Kasir Barcode & Shortcut",
        detail: "Mendukung pemindai barcode USB/kamera dan pintasan keyboard agar antrean lancar.",
      },
      {
        title: "Pembayaran & Struk Termal",
        detail: "Mencatat transaksi tunai, debit, maupun QRIS lengkap cetak struk kasir.",
      },
      {
        title: "Laporan Laba Pemilik",
        detail: "Ringkasan omzet, HPP, dan produk terlaris siap unduh ke PDF atau Excel.",
      },
      {
        title: "Pemisahan Akses Peran",
        detail: "Hak akses kasir dibatasi hanya pada transaksi tanpa membuka laporan margin.",
      },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "scalebase-crm",
    tier: "archive",
    client: "ScaleBase CRM.",
    tagline: "Board Kanban pipeline B2B, manajemen tiket CS & segmentasi pelanggan.",
    sector: "B2B Sales CRM",
    scope: "Sales Pipeline & Customer Workspace",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/scalebase-crm.webp",
        alt: "Antarmuka ScaleBase CRM untuk manajemen pipeline penjualan B2B",
        caption: "Workspace CRM B2B bersih untuk melacak prospek dan kepuasan pelanggan",
        fit: "top",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Data prospek dan keluhan pelanggan B2B sering tercecer di banyak file sehingga tindak lanjut tim sales terlambat dan peluang terlewat.",
    functionalValue:
      "Workspace terpadu yang menyatukan papan Kanban penjualan, pengingat tindak lanjut prospek, tiket layanan pelanggan, dan pengelompokan klien.",
    highlights: [
      {
        title: "Papan Kanban Pipeline",
        detail: "Pantau perpindahan prospek dari kontak awal hingga closing secara visual.",
      },
      {
        title: "Pengingat Follow-Up",
        detail: "Notifikasi otomatis saat prospek belum ditindaklanjuti sesuai jadwal.",
      },
      {
        title: "Tiket Layanan Pelanggan",
        detail: "Riwayat interaksi dan penanganan keluhan tercatat rapi per akun klien.",
      },
      {
        title: "Segmentasi Pelanggan",
        detail: "Kelompokkan klien aktif dan berisiko churn untuk prioritas tim sales.",
      },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "capstonenews-portal",
    tier: "gallery",
    client: "CapstoneNews.",
    tagline: "Portal berita editorial modern dengan CMS redaksi & mode baca nyaman.",
    sector: "Website Media & Portal Berita",
    scope: "News Portal & Editorial CMS",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/capstonenews-portal.webp",
        alt: "Portal berita editorial CapstoneNews menampilkan laporan utama, daftar trending pilihan editor, dan ringkasan pagi",
        caption: "Portal berita digital bergaya editorial dengan tata letak bersih, navigasi kategori cepat, dan ringkasan harian",
        fit: "center",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Tim redaksi membutuhkan alur publikasi artikel yang rapi dari draf hingga tayang, disertai tampilan baca yang ringan di perangkat seluler.",
    functionalValue:
      "Portal berita full-stack dengan panel redaksi terstruktur, pengelolaan media otomatis, pencarian cepat, serta pilihan tema terang dan gelap.",
    highlights: [
      {
        title: "Panel Redaksi Terstruktur",
        detail: "Kelola artikel, kategori, tag, komentar, dan peran penulis dari satu panel.",
      },
      {
        title: "Navigasi Baca Instan",
        detail: "Perpindahan antar berita mulus dan cepat tanpa muat ulang halaman penuh.",
      },
      {
        title: "Kurasi & Bookmark",
        detail: "Sorotan berita utama, daftar populer, dan simpan artikel bagi pembaca.",
      },
      {
        title: "Struktur Ramah SEO",
        detail: "URL bersih dan metadata artikel dinamis agar mudah terindeks mesin pencari.",
      },
    ],
    serviceHref: "/jasa-pembuatan-website-jakarta",
  },
  {
    slug: "desahub-simkopdes",
    tier: "archive",
    client: "DesaHub (SIMKOPDES).",
    tagline: "Platform agregasi pangan koperasi desa, kontrak pre-order & pelacakan QR.",
    sector: "Agritech B2B",
    scope: "Supply Chain & QR Traceability",
    year: "2026",
    images: [],
    problem:
      "Koperasi desa dan pembeli korporasi membutuhkan kepastian kapasitas pasokan pangan, kontrak bebas bentrok stok, dan jejak asal komoditas.",
    functionalValue:
      "Sistem penghubung koperasi desa dan pembeli B2B dengan pemantauan stok panen, penguncian kontrak pre-order, serta jejak asal lahan lewat QR.",
    highlights: [
      {
        title: "Pantau Kapasitas Pasokan",
        detail: "Dasbor ketersediaan komoditas koperasi lengkap peringatan stok menipis.",
      },
      {
        title: "Kontrak Anti Double-Book",
        detail: "Penguncian reservasi stok berbasis transaksi agar alokasi tetap akurat.",
      },
      {
        title: "Dokumen Kontrak Siap Cetak",
        detail: "Lembar kontrak formal format A4 terhubung ke konfirmasi WhatsApp koperasi.",
      },
      {
        title: "Pelacakan Asal QR",
        detail: "Kode QR memuat informasi asal petani, kualitas panen, dan lokasi lahan.",
      },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "kinetic-fitness",
    tier: "featured",
    client: "KINETIC Fitness.",
    tagline: "Website brand gym modern multi-cabang, booking kelas & akses QR dinamis.",
    sector: "Website Brand & Fitness Tech",
    scope: "Modern Brand Web & IoT Gate",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/kinetic-fitness.webp",
        alt: "Website brand modern KINETIC Tech Gym dengan tipografi tegas, foto studio, dan akses QR member pass",
        caption: "Website brand modern KINETIC Tech Gym — pendaftaran cepat, pilih cabang, dan akses gerbang QR",
        fit: "top",
        width: 1440,
        height: 1074,
      },
    ],
    problem:
      "Pengelola gym multi-cabang sering menghadapi antrean resepsionis, perebutan posisi matras kelas, dan kurangnya info kepadatan cabang.",
    functionalValue:
      "Platform terpadu untuk memesan posisi kelas studio, melihat perkiraan kepadatan cabang, dan masuk gerbang latihan menggunakan kode QR dinamis.",
    highlights: [
      {
        title: "Pilih Posisi Studio",
        detail: "Denah booking kelas bergaya bioskop lengkap sinkronisasi jadwal kalender.",
      },
      {
        title: "Info Kepadatan Cabang",
        detail: "Membantu member memilih cabang terdekat dan waktu latihan paling nyaman.",
      },
      {
        title: "Gerbang Akses QR Dinamis",
        detail: "Kode QR berubah berkala untuk mencegah berbagi akun dan mempercepat check-in.",
      },
      {
        title: "Arsitektur Multi-Cabang",
        detail: "Isolasi data antar cabang rapi dengan dukungan dwibahasa dan tema ganda.",
      },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "logisync-fleet",
    tier: "featured",
    client: "LogiSync (Fleet.OS).",
    tagline: "Pusat kendali logistik, pelacakan armada GPS, gudang WMS & aplikasi kurir.",
    sector: "Logistics & Fleet",
    scope: "Command Center, WMS & PWA Kurir",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/logisync-fleet.webp",
        alt: "Pusat Kendali LogiSync menampilkan peta armada langsung, status pengiriman, dan tren kapasitas gudang",
        caption: "Pusat kendali terpadu untuk memantau armada GPS, pengiriman harian, dan peringatan gudang",
        fit: "top",
        width: 1440,
        height: 810,
      },
    ],
    problem:
      "Perusahaan logistik kesulitan menyatukan pemantauan posisi armada di jalan, pergerakan barang di gudang, dan status serah terima paket kurir.",
    functionalValue:
      "Pusat kendali operasional yang memadukan peta pelacakan armada langsung, manajemen kapasitas gudang, dan aplikasi PWA bagi kurir lapangan.",
    highlights: [
      {
        title: "Peta Armada Langsung",
        detail: "Pantau rute dan status armada aktif secara real-time dari satu layar.",
      },
      {
        title: "Kapasitas & Peringatan Gudang",
        detail: "Monitor pergerakan inbound/outbound serta notifikasi kondisi gudang.",
      },
      {
        title: "Aplikasi Kurir PWA",
        detail: "Pindai barcode paket dan rekam tanda tangan digital penerima lewat HP.",
      },
      {
        title: "Laporan Siap Ekspor",
        detail: "Ringkasan kinerja kurir dan pengiriman harian siap unduh ke CSV atau PDF.",
      },
    ],
    serviceHref: "/jasa-pembuatan-sistem-erp",
  },
  {
    slug: "ai-cv-screening",
    tier: "gallery",
    client: "AI CV Screening.",
    tagline: "Seleksi CV otomatis dengan sensor identitas pelamar & alur kerja terpadu.",
    sector: "HR Automation & Applied AI",
    scope: "Blind ATS & Workflow Otomasi",
    year: "2026",
    images: [
      {
        src: "/images/portfolio/ai-cv-screening.webp",
        alt: "Antarmuka BlindATS AI CV Screening dengan mode sensor identitas pelamar",
        caption: "Seleksi kandidat terstruktur dengan pemisahan data pribadi pelamar agar objektif",
        fit: "top",
        width: 1440,
        height: 1080,
      },
    ],
    problem:
      "Menyaring banyak berkas CV PDF/DOCX secara manual memakan waktu lama sekaligus rentan bias penilaian maupun kebocoran data pribadi pelamar.",
    functionalValue:
      "Alur penyaringan kandidat otomatis yang menyamarkan identitas pribadi sebelum evaluasi AI, menghasilkan urutan kandidat beserta alasan penilaiannya.",
    highlights: [
      {
        title: "Mode Blind Screening",
        detail: "Menyamarkan data pribadi pelamar sebelum dinilai agar selaras prinsip UU PDP.",
      },
      {
        title: "Evaluasi Dua Tahap",
        detail: "Memadukan syarat wajib posisi dengan analisis kecocokan pengalaman kerja.",
      },
      {
        title: "Alasan Penilaian Jelas",
        detail: "Setiap peringkat disertai ringkasan pertimbangan yang mudah diaudit tim HR.",
      },
      {
        title: "Alur Otomatisasi Terjadwal",
        detail: "Otomatis menarik berkas lamaran masuk dan mengirim ringkasan ke tim rekrutmen.",
      },
    ],
    serviceHref: "/jasa-automasi-whatsapp",
  },
  {
    slug: "siakad-sekolah",
    tier: "archive",
    client: "SIAKAD Sekolah.",
    tagline: "Sistem akademik siswa, guru, jadwal, absensi, nilai & cetak laporan.",
    sector: "Sistem Informasi Akademik",
    scope: "Panel Akademik & Ekspor Rapor",
    year: "2026",
    images: [],
    problem:
      "Data siswa, jadwal pelajaran, absensi harian, dan nilai akhir sering tersebar di berkas terpisah sehingga rekap akhir semester memakan banyak waktu.",
    functionalValue:
      "Aplikasi akademik terpusat untuk mengelola data siswa, guru, absensi, dan penilaian semester dengan cetak laporan PDF maupun Excel sekali klik.",
    highlights: [
      {
        title: "Master Data Terpusat",
        detail: "Pengelolaan tahun ajaran, kelas, siswa, guru, dan jadwal dalam satu panel.",
      },
      {
        title: "Absensi & Input Nilai",
        detail: "Pencatatan kehadiran harian serta rekap nilai semester secara langsung.",
      },
      {
        title: "Akses Multi-Peran",
        detail: "Pemisahan wewenang jelas antara Admin sekolah, Guru, dan Wali Kelas.",
      },
      {
        title: "Cetak PDF & Excel",
        detail: "Ekspor laporan akademik dan dokumen rapor tanpa olah data ulang manual.",
      },
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
