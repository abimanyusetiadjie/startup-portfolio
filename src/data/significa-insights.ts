export interface InsightArticle {
  slug: string;
  title: string;
  date: string;
  publishedIso: string;
  modifiedIso: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  authorInitials: string;
  authorTone: string;
  tags: string[];
  excerpt: string;
  directAnswer: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  takeaway: string;
  relatedServiceHref: string;
  relatedServiceLabel: string;
}

export const SIGNIFICA_INSIGHTS: InsightArticle[] = [
  {
    slug: "beli-putus-vs-sewa-saas-erp",
    title: "Beli putus vs sewa SaaS ERP: Hitungan biaya 3 tahun.",
    date: "18 Nov 2026",
    publishedIso: "2026-11-18",
    modifiedIso: "2026-11-28",
    readTime: "4 mnt baca",
    authorName: "Abimanyu Setiadjie",
    authorRole: "Founder & Principal Systems Architect",
    authorInitials: "AS",
    authorTone: "#111318",
    tags: ["ERP", "Strategi", "Biaya"],
    excerpt:
      "Mengapa banyak distributor dan sekolah beralih dari langganan per pengguna ke sistem kustom hak milik penuh setelah melewati 10 staf aktif.",
    directAnswer:
      "Untuk bisnis dengan lebih dari 10 pengguna aktif, sewa SaaS bertarif Rp100.000–Rp150.000 per staf per bulan menelan Rp54–81 juta dalam 3 tahun tanpa hak milik sistem. Sistem ERP atau kasir POS kustom skema Beli Putus mulai Rp4–12 juta dengan Rp0 biaya per staf umumnya balik modal dalam 4–7 bulan.",
    sections: [
      {
        heading: "Perangkap biaya tersembunyi di balik tarif 'per pengguna'",
        paragraphs: [
          "Aplikasi sewa (SaaS) terasa sangat ringan saat usaha baru memiliki 2 atau 3 admin. Masalah baru muncul di tahun kedua ketika cabang bertambah, staf gudang meningkat menjadi 15–30 orang, dan setiap peran baru dikenai tarif Rp100.000–Rp150.000 per bulan.",
          "Dalam 36 bulan, perusahaan dengan 15 pengguna aktif rata-rata mengeluarkan Rp67 juta hingga Rp81 juta hanya untuk menyewa akses—tanpa pernah memiliki kode program atau kebebasan mengubah alur kerja sesuai aturan internal perusahaan.",
        ],
      },
      {
        heading: "Kapan skema Beli Putus jauh lebih masuk akal",
        paragraphs: [
          "Dengan sistem kustom Beli Putus, investasi dilakukan sekali di awal (mulai Rp4–12 juta tergantung jumlah modul), lalu bisnis bebas menambah ratusan staf, kasir, atau siswa baru dengan biaya lisensi Rp0 selamanya.",
          "Perusahaan cukup membayar biaya server cloud sesuai pemakaian nyata (umumnya jauh lebih murah daripada langganan per kursi) sekaligus memegang 100% kendali atas seluruh basis data milik sendiri.",
        ],
      },
      {
        heading: "Bagaimana jika ingin mulai ringan tanpa tim IT internal?",
        paragraphs: [
          "Di Abinest, kami menyediakan dua pintu yang transparan: Beli Putus untuk kepemilikan aset penuh, atau Terima Beres bulanan tetap (flat per sistem, bukan per kepala) agar pemilik usaha cukup fokus menjual sementara pemantauan server dan backup kami tangani penuh.",
        ],
      },
    ],
    takeaway:
      "Jika tim operasional Anda sudah lebih dari 8 pengguna aktif atau punya alur stok/faktur khusus, sistem kustom Beli Putus umumnya balik modal dalam 4–7 bulan pertama.",
    relatedServiceHref: "/audit-gratis",
    relatedServiceLabel: "Hitung penghematan 3 tahun usaha Anda",
  },
  {
    slug: "biaya-pembuatan-website-bisnis-indonesia",
    title: "Berapa biaya pembuatan website bisnis yang wajar di Indonesia?",
    date: "26 Nov 2026",
    publishedIso: "2026-11-26",
    modifiedIso: "2026-11-28",
    readTime: "5 mnt baca",
    authorName: "Abimanyu Setiadjie",
    authorRole: "Founder & Principal Systems Architect",
    authorInitials: "AS",
    authorTone: "#111318",
    tags: ["Website", "Harga", "Panduan"],
    excerpt:
      "Rincian jujur rentang harga website profil usaha, e-commerce, hingga portal korporat di Indonesia agar tidak terjebak biaya tambahan tersembunyi.",
    directAnswer:
      "Biaya pembuatan website bisnis profesional di Indonesia umumnya berada di rentang Rp1,5–4 juta untuk landing page atau profil UMKM modern, Rp4–12 juta untuk website korporat multi-halaman atau e-commerce katalog, dan di atas Rp12 juta untuk portal dengan integrasi sistem internal atau pembayaran otomatis.",
    sections: [
      {
        heading: "Tiga komponen yang menentukan mahal-murahnya sebuah website",
        paragraphs: [
          "Perbedaan harga antar studio bukan sekadar soal jumlah halaman, melainkan tiga hal: apakah desain dibuat khusus sesuai identitas merek atau memakai template pasaran, seberapa cepat halaman terbuka di ponsel 4G calon klien, serta apakah kode sumber diserahkan penuh 100% atau dikunci dengan iuran tahunan tinggi.",
          "Website murah yang dibangun dari template penuh plugin berat sering kali terlihat sama dengan ratusan situs lain, lambat dibuka saat diklik dari iklan, dan memaksa Anda membayar biaya perbaikan berulang di kemudian hari.",
        ],
      },
      {
        heading: "Patokan rentang anggaran realistis per skala kebutuhan",
        paragraphs: [
          "Untuk UMKM, personal brand, atau landing page kampanye iklan, kisaran Rp1,5 juta hingga Rp3,5 juta sudah ideal mendapatkan tampilan modern, mobile-first, fondasi SEO rapi, dan tombol konversi WhatsApp terukur.",
          "Untuk perusahaan B2B, yayasan multi-unit, atau toko online dengan katalog stok dan kalkulator estimasi, rentang Rp4 juta hingga Rp12 juta memberi ruang untuk desain editorial eksklusif, halaman SEO per layanan/kota, serta integrasi operasional.",
        ],
      },
      {
        heading: "Checklist wajib sebelum membayar DP ke penyedia jasa website",
        paragraphs: [
          "Pastikan empat hal tertulis jelas sejak awal: rincian ruang lingkup halaman dan revisi, status kepemilikan domain atas nama Anda sendiri, biaya tahunan perpanjangan domain/server yang terpisah dan transparan, serta garansi teknis pascarilis.",
        ],
      },
    ],
    takeaway:
      "Pilih penyedia yang transparan soal rincian biaya, memberi kepemilikan penuh atas domain & kode sumber, dan membuka skema pembayaran bertahap mengikuti progres nyata.",
    relatedServiceHref: "/harga",
    relatedServiceLabel: "Lihat rincian transparan paket & estimasi Abinest",
  },
  {
    slug: "website-custom-vs-wordpress-untuk-bisnis",
    title: "Website custom vs WordPress: mana yang lebih aman & hemat 3 tahun?",
    date: "22 Nov 2026",
    publishedIso: "2026-11-22",
    modifiedIso: "2026-11-28",
    readTime: "4 mnt baca",
    authorName: "Tim Frontend Abinest",
    authorRole: "Web Performance Engineering",
    authorInitials: "FE",
    authorTone: "#334155",
    tags: ["Website", "Keamanan", "Performa"],
    excerpt:
      "Perbandingan objektif kapan WordPress masih cukup untuk blog cepat, dan kapan website custom modern jauh lebih unggul untuk konversi serta keamanan bisnis.",
    directAnswer:
      "WordPress cocok bila bisnis hanya butuh blog editorial sederhana yang sering dikelola mandiri dengan banyak plugin siap pakai. Namun untuk company profile korporat, landing page iklan, dan portal bisnis yang mengutamakan kecepatan buka sub-detik, keamanan tanpa celah plugin, serta skor SEO maksimal, website custom modern lebih hemat perawatan dan lebih tinggi konversinya dalam jangka 3 tahun.",
    sections: [
      {
        heading: "Biaya tak terlihat dari plugin dan pemeliharaan berkala",
        paragraphs: [
          "WordPress pada dasarnya gratis, tetapi agar fungsional untuk bisnis biasanya membutuhkan tambahan page builder berbayar, plugin cache, plugin keamanan, dan hosting berkapasitas besar agar tidak melambat. Begitu satu plugin lupa diperbarui, celah keamanan dan konflik tampilan kerap muncul.",
          "Sebaliknya, website custom modern yang dibangun ringkas tidak membawa puluhan skrip bawaan yang tidak dipakai. Permukaan serangannya sangat kecil dan hampir bebas biaya pemeliharaan plugin tahunan.",
        ],
      },
      {
        heading: "Dampak kecepatan muat terhadap peringkat Google dan hasil iklan",
        paragraphs: [
          "Pengunjung dari Google maupun iklan Instagram/Meta cenderung menutup halaman jika layar belum tampil penuh dalam 3 detik. Website custom berbasis halaman statis teroptimasi dapat dibuka di bawah 1 detik pada ponsel 4G sekaligus mendapatkan sinyal Core Web Vitals hijau di Google Search.",
        ],
      },
      {
        heading: "Kapan sebaiknya memilih custom sejak hari pertama",
        paragraphs: [
          "Jika website menjadi wajah utama kredibilitas perusahaan B2B, menampung kalkulator/alur order khusus, atau ke depan akan terhubung ke sistem stok, ERP, maupun WhatsApp otomatis, membangun di atas arsitektur custom sejak awal menghemat biaya bongkar-ulang di tahun kedua.",
        ],
      },
    ],
    takeaway:
      "Untuk website bisnis yang menargetkan klien serius dan peringkat Google jangka panjang, arsitektur custom modern memberi kecepatan, keamanan, dan total biaya 3 tahun yang jauh lebih sehat.",
    relatedServiceHref: "/jasa-pembuatan-website-jakarta",
    relatedServiceLabel: "Pelajari standar Website Bisnis Abinest",
  },
  {
    slug: "mengapa-website-lambat-buang-biaya-iklan",
    title: "Mengapa website >4 detik membuang 60% biaya iklan.",
    date: "11 Nov 2026",
    publishedIso: "2026-11-11",
    modifiedIso: "2026-11-28",
    readTime: "3 mnt baca",
    authorName: "Tim Frontend Abinest",
    authorRole: "Web Performance Engineering",
    authorInitials: "FE",
    authorTone: "#334155",
    tags: ["Website", "Performa", "SEO"],
    excerpt:
      "Klik iklan yang mahal percuma jika calon pelanggan di ponsel 4G harus menunggu layar putih berputar selama 5 detik sebelum tombol WhatsApp muncul.",
    directAnswer:
      "Mayoritas calon klien di Indonesia membuka tautan website dari ponsel 4G. Website yang butuh lebih dari 4 detik untuk tampil kehilangan sebagian besar pengunjung sebelum tombol WhatsApp sempat terlihat—membuat biaya iklan terpotong tanpa menghasilkan percakapan sales.",
    sections: [
      {
        heading: "Realitas jaringan seluler pelanggan B2B Indonesia",
        paragraphs: [
          "Lebih dari 78% calon klien membuka tautan profil perusahaan pertama kali lewat ponsel di jaringan seluler, bukan di laptop kantor berkecepatan serat optik. Website berbasis tema builder berat dengan puluhan plugin sering kali memakan 4–8 detik hanya untuk menampilkan judul utama.",
          "Akibatnya, rasio pentalan (bounce rate) melonjak drastis: klik iklan tetap tercatat dan memotong saldo Anda, tetapi calon klien pergi sebelum sempat membaca penawaran Anda.",
        ],
      },
      {
        heading: "Standar rekayasa sub-detik (<0,8 detik)",
        paragraphs: [
          "Dengan membekukan halaman pemasaran menjadi aset statis teroptimasi lewat jaringan Edge CDN, kompresi gambar modern WebP/AVIF, dan penghapusan skrip pihak ketiga yang tidak relevan, waktu buka halaman turun di bawah 0,8 detik.",
          "Google juga memberi peringkat organik lebih kuat kepada halaman dengan skor Core Web Vitals hijau serta metadata Schema JSON-LD yang rapi.",
        ],
      },
    ],
    takeaway:
      "Mempercepat waktu buka website dari 5 detik ke <0,8 detik sering kali melipatgandakan jumlah chat WhatsApp masuk tanpa menaikkan anggaran iklan sepeser pun.",
    relatedServiceHref: "/jasa-pembuatan-website-jakarta",
    relatedServiceLabel: "Lihat standar pembuatan Website Abinest",
  },
  {
    slug: "arsitektur-whatsapp-ai-resmi-meta-anti-blokir",
    title: "WhatsApp AI resmi Meta Cloud API tanpa risiko blokir.",
    date: "04 Nov 2026",
    publishedIso: "2026-11-04",
    modifiedIso: "2026-11-28",
    readTime: "5 mnt baca",
    authorName: "Tim AI & Automasi",
    authorRole: "Applied AI & Integrations",
    authorInitials: "AI",
    authorTone: "#374151",
    tags: ["AI", "WhatsApp", "Panduan"],
    excerpt:
      "Perbedaan krusial antara bot tidak resmi yang rawan pemblokiran nomor utama bisnis dengan integrasi Meta Cloud API yang terhubung langsung ke stok ERP.",
    directAnswer:
      "Bot WhatsApp berbasis scan QR tidak resmi berisiko tinggi membuat nomor bisnis diblokir permanen oleh Meta. Integrasi WhatsApp Business Cloud API resmi memungkinkan balasan AI 24 jam yang aman, terhubung langsung ke data stok dan harga asli tanpa mengarang, serta bisa diambil alih admin manusia kapan saja.",
    sections: [
      {
        heading: "Risiko fatal memakai perangkat lunak bot WA tidak resmi",
        paragraphs: [
          "Banyak usaha tergiur memasang bot otomatis berbasis pemindaian QR (unofficial web wrapper) pada nomor WhatsApp utama kantor. Begitu volume balasan meningkat atau ada pembaruan keamanan Meta, nomor bisnis bertahun-tahun bisa diblokir permanen dalam hitungan jam.",
        ],
      },
      {
        heading: "Menghubungkan Meta Cloud API dengan data stok & OCR faktur",
        paragraphs: [
          "Melalui WhatsApp Business Cloud API resmi, setiap pesan pelanggan diterima via webhook aman, dijawab oleh asisten AI yang membaca katalog serta stok gudang real-time (bukan jawaban mengarang), dan langsung meneruskan kasus kompleks ke admin manusia.",
          "Untuk bagian administrasi, jalur yang sama bisa dipasangkan dengan pipeline pembaca dokumen otomatis (OCR) agar foto faktur supplier langsung terbaca menjadi baris angka siap masuk ke pembukuan dengan akurasi tinggi.",
        ],
      },
    ],
    takeaway:
      "Otomasi WhatsApp yang profesional wajib berjalan di atas API resmi Meta dan membaca data stok asli agar jawaban cepat, akurat, serta aman bagi nomor bisnis Anda.",
    relatedServiceHref: "/jasa-automasi-whatsapp",
    relatedServiceLabel: "Pelajari layanan Automasi AI & WhatsApp",
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return SIGNIFICA_INSIGHTS.find((item) => item.slug === slug);
}
