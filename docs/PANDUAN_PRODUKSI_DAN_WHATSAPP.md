# Panduan Operasional Produksi & WhatsApp — Abinest Digital Systems

Dokumen ini berisi checklist peluncuran produksi, template balasan cepat WhatsApp Business, dan panduan pembaruan studi kasus nyata.

---

## 1. Template Balas Cepat WhatsApp Business (`Quick Replies`)

Seluruh formulir konsultasi, kartu paket, demo interaktif, dan kalkulator ROI mengarah ke nomor `+62 813-9858-9745`. Simpan template berikut di fitur **Quick Replies** WhatsApp Business agar setiap pesan masuk bisa direspons di bawah 5 menit.

### `/balas-web` — Website Profil, UMKM & Landing Page Cepat
```text
Halo Bapak/Ibu [Nama], terima kasih sudah menghubungi Abinest Digital Systems 👋

Saya sudah menerima kebutuhan websitenya. Untuk website bisnis cepat (<0,8 detik + ramah SEO Google), kita bisa mulai dengan 2 pilihan skema:
1. Beli Putus (Rp1,5–3,5 jt — 100% file & kode jadi hak milik selamanya, bebas iuran bulanan)
2. Terima Beres (hosting, domain, & maintenance kami kelola)

Boleh dibantu info singkat: apakah sudah ada referensi website yang disukai atau materi profil/katalog produknya? Tim kami bisa langsung buatkan preview tampilan awal gratisnya.
```

### `/balas-erp` — ERP, Kasir POS, Stok Multi-Gudang & Custom System
```text
Halo Bapak/Ibu [Nama], terima kasih sudah menghubungi Abinest Digital Systems 👋

Untuk kebutuhan sistem operasional/ERP/POS kustom, prinsip utama kami adalah *Beli Putus* dengan *Rp0 biaya lisensi per staf/cabang* sehingga tetap hemat saat tim bertumbuh.

Agar estimasi alur dan biayanya akurat, boleh kami tahu:
1. Berapa cabang/gudang atau jumlah pengguna aktif saat ini?
2. Proses paling mendesak yang ingin dirapikan terlebih dahulu (mis. stok, kasir POS, keuangan/invoice, atau laporan)?

Kami siap jadwalkan demo singkat 15 menit via Google Meet atau kirimkan simulasi interaktifnya.
```

### `/balas-siakad` — Portal Sekolah, PPDB & Ujian CBT
```text
Halo Bapak/Ibu [Nama], salam hangat dari Abinest Digital Systems 👋

Untuk Portal SIAKAD, PPDB Daring, & Ujian CBT, sistem kami didesain dengan skema Rp0 biaya per siswa/guru selamanya dan isolasi beban trafik agar tetap stabil saat ujian serentak.

Untuk perkiraan modul yang pas bagi sekolah/kampus Bapak/Ibu, sekitar berapa total siswa aktif saat ini dan apakah butuh integrasi pembayaran SPP (Virtual Account/QRIS)?
```

### `/balas-ai` — Automasi AI/ML, Document OCR & WhatsApp Cloud API Resmi Meta
```text
Halo Bapak/Ibu [Nama], terima kasih sudah menghubungi Abinest Digital Systems 👋

Untuk kebutuhan Automasi AI & WhatsApp resmi Meta:
- Customer Service AI WhatsApp: bisa merespons FAQ, cek status/stok, hingga eskalasi ke admin manusia 24 jam.
- Document AI OCR: mengekstrak PDF faktur/dokumen otomatis langsung masuk ke rekap Excel/ERP.

Boleh diinformasikan volume rata-rata chat harian atau jenis dokumen yang paling menyita waktu tim saat ini? Kami bisa kirimkan contoh alur implementasinya.
```

### `/balas-followup` — Follow-up Halus (H+1 / H+3)
```text
Halo Bapak/Ibu [Nama], izin menyapa kembali dari Abinest Digital Systems. Terkait diskusi kebutuhan [Nama Layanan] kemarin, apakah ada poin teknis atau rincian investasi yang perlu kami perjelas atau kirimkan PDF penawaran resminya? Siap membantu kapan saja 🙏
```

---

## 2. Checklist Peluncuran Produksi & SEO (Vercel & Google Search Console)

1. **Environment Variables di Vercel Dashboard (`Settings → Environment Variables`):**
   - Set `NEXT_PUBLIC_APP_URL` ke domain produksi resmi (contoh: `https://abinest.id`, tanpa garis miring di akhir). Ini memastikan `canonical`, `robots.txt`, `sitemap.xml`, JSON-LD `Organization`, dan `og:image` memakai domain yang tepat.
   - *(Opsional)* Set `NEXT_PUBLIC_GA_ID` (format `G-XXXXXXXXXX`) jika ingin melacak event klik `whatsapp_click` per sumber tombol/halaman di Google Analytics 4.
2. **Daftarkan ke Google Search Console:**
   - Verifikasi kepemilikan domain produksi via DNS TXT record.
   - Buka menu **Sitemaps**, lalu submit `https://<domain-anda>/sitemap.xml`.
3. **Verifikasi Pratinjau Link Share (`og:image`):**
   - Bagikan URL homepage ke WhatsApp Web atau cek via Meta Sharing Debugger untuk memastikan kartu pratinjau menampilkan `abinest-og-card.jpg` (1376×768) dan deskripsi yang rapi.
4. **Uji PageSpeed Insights domain produksi:**
   - Jalankan pengujian pada `https://pagespeed.web.dev/` untuk URL live guna memantau skor Performance (Mobile & Desktop), SEO, Best Practices, dan Accessibility.
5. **Akses Tool Sales Internal (`/tools/proposal-generator`):**
   - Rute ini tetap tersedia di `https://<domain-anda>/tools/proposal-generator` untuk tim membuat PDF RAB/Proposal dan kit outreach, serta sudah diset `noindex` dan dilarang di `robots.txt` agar tidak muncul di Google Search maupun footer publik.

---

## 3. Panduan Mengisi Studi Kasus & Testimoni Nyata

Saat proyek pertama dengan klien siap dipublikasikan (dengan izin klien):
- **Tampilan Desktop:** edit array `STUDIES` di `src/components/grove/GroveCaseStudySection.tsx` (ganti `sector`, `headline`, `metric`, `summary`, `quote`, `author`, dan foto hasil proyek di `public/images/case-studies/`).
- **Tampilan Mobile:** edit array `cases` di `src/components/grove/mobile/MobileCaseStudiesSection.tsx` agar data tetap sinkron antara versi desktop dan mobile.
