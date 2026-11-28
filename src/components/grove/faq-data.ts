export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlight: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "getting-started",
    category: "Mulai Proyek",
    question:
      "Saya awam soal teknis dan belum punya gambaran detail—harus mulai dari mana?",
    answer:
      "Cukup ceritakan masalah atau tujuan bisnis maupun project Anda lewat WhatsApp. Konsultasi awal gratis tanpa kewajiban langsung order—tim kami bantu merapikan konsep, alur fitur, hingga rekomendasi yang paling pas dengan budget Anda.",
    highlight: "Konsultasi Awal Gratis",
  },
  {
    id: "pricing-transparency",
    category: "Biaya",
    question:
      "Bagaimana rincian biayanya—apakah ada biaya tersembunyi setelah selesai?",
    answer:
      "Semua biaya disepakati transparan di depan sebelum pengerjaan dimulai. Tersedia skema Beli Putus (sistem 100% milik Anda tanpa iuran bulanan ke Abinest; di luar itu hanya biaya perpanjangan domain atau server sesuai pemakaian) atau Terima Beres jika ingin sekalian kami kelola rutin.",
    highlight: "Transparan Tanpa Biaya Tersembunyi",
  },
  {
    id: "payment-revision",
    category: "Pembayaran & Revisi",
    question:
      "Apakah pembayaran aman, dan bagaimana jika di tengah jalan saya ingin revisi?",
    answer:
      "Pembayaran dilakukan bertahap mengikuti progres nyata (DP awal, tahap uji coba, lalu pelunasan saat siap rilis)—bukan lunas di muka. Di setiap tahap Anda bisa melihat hasilnya langsung dan meminta penyesuaian hingga tampilan maupun alurnya benar-benar cocok.",
    highlight: "Bayar Bertahap · Bebas Cek Progres",
  },
  {
    id: "timeline",
    category: "Durasi",
    question:
      "Berapa lama pengerjaannya sampai website atau sistem siap dipakai?",
    answer:
      "Website bisnis umumnya siap dalam 7–14 hari kerja, sedangkan sistem operasional (ERP, POS, atau SIAKAD) dan automasi WhatsApp berkisar 2–6 minggu tergantung banyaknya fitur—dengan jadwal tahapan yang jelas sejak awal.",
    highlight: "Estimasi Jelas 7–14 Hari",
  },
  {
    id: "after-launch",
    category: "Setelah Rilis",
    question:
      "Setelah jadi, apakah mudah dipakai sendiri dan tetap dibantu kalau ada kendala?",
    answer:
      "Ya—tampilan dirancang sederhana agar nyaman dipakai tim non-IT, lengkap panduan singkat dan sesi pengenalan. Setiap pengerjaan juga dilindungi garansi perbaikan gratis pascarilis, dan akses penuh sistem sepenuhnya berada di tangan Anda.",
    highlight: "Ramah Non-IT · Garansi Pascarilis",
  },
  {
    id: "clients-scope",
    category: "Cakupan Klien",
    question:
      "Apakah melayani proyek pribadi, UMKM, luar kota, hingga perusahaan?",
    answer:
      "Ya, kami terbuka untuk proyek pribadi, UMKM, maupun perusahaan dan yayasan di seluruh Indonesia secara online maupun pertemuan terjadwal. Untuk kebutuhan korporat atau instansi, kami juga siap menerbitkan penawaran resmi, kontrak, invoice formal, hingga perjanjian kerahasiaan (NDA).",
    highlight: "Pribadi · UMKM · Perusahaan",
  },
];
