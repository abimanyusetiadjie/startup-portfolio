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
    category: "Kepemilikan",
    question: "Apakah kode program 100% milik kami?",
    answer:
      "Ya. Pada skema Beli Putus, kode sumber, database, dan akses server sepenuhnya milik Anda—tanpa biaya bulanan per pengguna ke Abinest.",
    highlight: "100% Hak Milik · Rp0/staf",
  },
  {
    id: "payment",
    category: "Pembayaran",
    question: "Bagaimana skema pembayarannya?",
    answer:
      "Bertahap sesuai progres: 40% saat kick-off, 40% saat sistem siap uji coba (UAT), dan 20% saat rilis beserta serah terima kode.",
    highlight: "3 Termin Berbasis Progres",
  },
  {
    id: "usability",
    category: "Pelatihan",
    question: "Apakah mudah dipakai tim non-IT?",
    answer:
      "Alur dirancang mengikuti kerja harian admin, kasir, atau guru. Setiap proyek sudah termasuk pelatihan tim dan panduan singkat.",
    highlight: "Termasuk Pelatihan & Panduan",
  },
  {
    id: "warranty",
    category: "Garansi",
    question: "Bagaimana jika ada bug setelah rilis?",
    answer:
      "Dilindungi garansi perbaikan bug gratis 30–90 hari pascarilis. Setelahnya, bebas kelola mandiri atau lanjut maintenance berkala.",
    highlight: "Garansi Bug-Fix 30–90 Hari",
  },
  {
    id: "legal",
    category: "Legalitas",
    question: "Apakah bisa NDA & dokumen resmi PT/yayasan?",
    answer:
      "Bisa. Kami siap menandatangani NDA dan menerbitkan quotation resmi, SOW, invoice formal, hingga BAST sesuai standar pengadaan.",
    highlight: "Siap NDA, Invoice & BAST",
  },
  {
    id: "timeline",
    category: "Durasi",
    question: "Berapa lama pengerjaan & bisa tambah fitur?",
    answer:
      "Website profil 7–14 hari kerja; ERP, SIAKAD, atau AI WhatsApp 2–6 minggu. Arsitektur modular siap ditambah fitur kapan saja.",
    highlight: "Rilis 7–14 Hari · Modular",
  },
];
