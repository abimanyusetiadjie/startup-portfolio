export interface InsightArticle {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  authorInitials: string;
  authorTone: string;
  tags: string[];
  excerpt: string;
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
    title: "Beli putus vs sewa SaaS ERP: Hitungan nyata biaya 3 tahun untuk bisnis berkembang.",
    date: "18 Nov 2026",
    readTime: "4 mnt baca",
    authorName: "Abimanyu Setiadjie",
    authorRole: "Principal Systems Architect",
    authorInitials: "AS",
    authorTone: "#171717",
    tags: ["ERP", "Strategi", "Biaya"],
    excerpt:
      "Mengapa banyak distributor dan sekolah beralih dari langganan per pengguna ke sistem kustom hak milik penuh setelah melewati 10 staf aktif.",
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
          "Perusahaan cukup membayar biaya server cloud sesuai pemakaian nyata (umumnya jauh lebih murah daripada langganan per kursi) sekaligus memegang 100% kendali atas basis data PostgreSQL milik sendiri.",
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
    slug: "mengapa-website-lambat-buang-biaya-iklan",
    title: "Mengapa website yang muat >4 detik membuang hingga 60% anggaran iklan Meta & Google Anda.",
    date: "11 Nov 2026",
    readTime: "3 mnt baca",
    authorName: "Tim Frontend Abinest",
    authorRole: "Web Performance Engineering",
    authorInitials: "FE",
    authorTone: "#3C846E",
    tags: ["Website", "Performa", "SEO"],
    excerpt:
      "Klik iklan yang mahal percuma jika calon pelanggan di ponsel 4G harus menunggu layar putih berputar selama 5 detik sebelum tombol WhatsApp muncul.",
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
          "Dengan membekukan halaman pemasaran menjadi aset statis teroptimasi (Next.js Edge), kompresi gambar modern WebP, dan penghapusan skrip pihak ketiga yang tidak relevan, waktu buka halaman turun di bawah 0,8 detik.",
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
    title: "Arsitektur WhatsApp AI resmi Meta Cloud API: Balas cepat <1 detik tanpa risiko nomor diblokir.",
    date: "04 Nov 2026",
    readTime: "5 mnt baca",
    authorName: "Tim AI & Automasi",
    authorRole: "Applied AI & Integrations",
    authorInitials: "AI",
    authorTone: "#DE6D3B",
    tags: ["AI", "WhatsApp", "Panduan"],
    excerpt:
      "Perbedaan krusial antara bot tidak resmi yang rawan pemblokiran nomor utama bisnis dengan integrasi Meta Cloud API yang terhubung langsung ke stok ERP.",
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
          "Untuk bagian administrasi, jalur yang sama bisa dipasangkan dengan pipeline Document AI OCR agar foto faktur supplier langsung terbaca menjadi baris angka siap masuk ke pembukuan dengan tingkat ketelitian hingga 99,7%.",
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
