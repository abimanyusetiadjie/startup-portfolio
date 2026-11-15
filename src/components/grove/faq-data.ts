export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlight: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "ownership",
    category: "Kepemilikan & Lisensi",
    question:
      "Apakah sistem dan kode program benar-benar 100% menjadi hak milik kami (Beli Putus) tanpa biaya bulanan ke Abinest?",
    answer:
      "Ya, seluruh sistem yang kami bangun menggunakan skema Beli Putus. Setelah serah terima, repositori kode sumber (source code), skema database, dan kredensial server sepenuhnya berada di bawah kendali perusahaan atau institusi Anda. Tidak ada biaya langganan per pengguna (per-seat fee) maupun biaya sewa bulanan ke Abinest—Anda cukup menanggung biaya perpanjangan domain dan server cloud standar langsung ke penyedia atau melalui layanan pemeliharaan opsional kami.",
    highlight: "100% Hak Milik Kode & Database",
  },
  {
    id: "payment",
    category: "Skema Pembayaran",
    question:
      "Bagaimana tahapan pembayaran proyek? Apakah harus dibayar lunas di awal?",
    answer:
      "Tidak. Kami menerapkan skema pembayaran bertahap berbasis progres (milestone) agar investasi Anda aman dan terukur: Termin 1 (DP 40%) dibayarkan setelah ruang lingkup fitur dan desain disepakati; Termin 2 (40%) setelah sistem selesai dibangun dan siap Anda uji coba (UAT) di server staging; serta Termin 3 (Pelunasan 20%) saat sistem dirilis ke server produksi beserta serah terima kode penuh.",
    highlight: "Pembayaran Bertahap 3 Termin Sesuai Progres",
  },
  {
    id: "usability",
    category: "Kemudahan & Pelatihan",
    question:
      "Tim operasional kami bukan orang IT. Apakah sistemnya mudah digunakan dan ada pelatihannya?",
    answer:
      "Kami merancang antarmuka mengikuti alur kerja harian yang sudah familier bagi admin, kasir, guru, maupun manajer operasional—sehingga staf tidak perlu latar belakang teknis untuk mengoperasikannya. Setiap perilisan sudah mencakup sesi pelatihan interaktif (daring atau tatap muka area Jabodetabek) dan dokumentasi panduan penggunaan dalam format PDF maupun video singkat.",
    highlight: "Termasuk Sesi Pelatihan Staf & Panduan Lengkap",
  },
  {
    id: "warranty",
    category: "Garansi Pascarilis",
    question:
      "Bagaimana jika ditemukan kendala teknis atau bug setelah sistem diluncurkan?",
    answer:
      "Setiap proyek dilindungi garansi teknis pascarilis gratis selama 30 hingga 90 hari (sesuai paket layanan) yang mencakup perbaikan bug, pemantauan stabilitas server, serta pendampingan tim Anda saat masa transisi operasional. Setelah masa garansi berakhir, Anda bebas mengelola sistem secara mandiri atau mengambil paket pemeliharaan berkala dan pengembangan fitur lanjutan sesuai kebutuhan bisnis.",
    highlight: "Garansi Teknis & Pendampingan Pascarilis",
  },
  {
    id: "legal",
    category: "Keamanan & Legalitas",
    question:
      "Apakah Abinest bisa menandatangani NDA dan menerbitkan dokumen penawaran/invoice resmi untuk perusahaan atau yayasan?",
    answer:
      "Tentu. Sebelum membedah alur bisnis internal atau data sensitif perusahaan/institusi Anda, kami siap menandatangani perjanjian kerahasiaan (NDA). Kami juga menyediakan dokumen penawaran resmi (quotation), rincian ruang lingkup kerja (SOW), invoice formal, hingga Berita Acara Serah Terima (BAST) yang memenuhi kebutuhan administrasi pengadaan PT, CV, koperasi, maupun yayasan pendidikan.",
    highlight: "Siap NDA, Proposal Resmi & Dokumen BAST",
  },
  {
    id: "timeline",
    category: "Estimasi & Kustomisasi",
    question:
      "Berapa lama waktu pengerjaan rata-rata, dan apakah fitur sistem bisa ditambah lagi di masa depan?",
    answer:
      "Untuk Website Profil Perusahaan atau Landing Page berkecepatan tinggi, estimasi rilis adalah 7–14 hari kerja sejak materi siap. Untuk sistem kustom seperti ERP, SIAKAD, Kasir POS, atau Automasi WhatsApp AI, durasi pengerjaan umumnya 3–6 minggu bergantung pada kompleksitas modul. Seluruh sistem dibangun dengan arsitektur modular dan API terstruktur sehingga fitur baru dapat ditambahkan kapan saja tanpa membongkar sistem dari awal.",
    highlight: "Rilis Mulai 14 Hari · Arsitektur Modular Siap Tumbuh",
  },
];
