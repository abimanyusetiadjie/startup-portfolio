# ABINEST — DOKUMEN MASTER SPESIFIKASI STARTUP, BISNIS, & DESAIN WEB
> **Dokumen Tunggal (Single-Source-of-Truth)** yang merangkum seluruh visi, positioning bisnis, target pasar, arsitektur layanan, strategi copywriting, standar desain UI anti-AI-slop, dan spesifikasi teknis untuk **Abinest**.

---

## 1. PROFIL & IDENTITAS PERUSAHAAN

* **Nama Perusahaan:** Abinest (PT Abinest Teknologi Nusantara)
* **Kategori Bisnis:** Software House & Konsultan Rekayasa Perangkat Lunak B2B
* **Tagline Utama:** *Website Cepat, Sistem Anti-Down, & Automasi Kerja yang Pasti Beres.*
* **Fokus Wilayah:** Jakarta Selatan, Jakarta Barat, Surabaya, Sidoarjo, dan melayani institusi di seluruh Indonesia.
* **Kontak Resmi:**
  * WhatsApp Konsultasi: `+62 857-0867-7918`
  * Email: `halo@abinest.id`
  * Repositori GitHub: `https://github.com/abimanyusetiadjie/startup-portfolio.git`

### Visi & Misi Abinest
1. **Menghadirkan Rasa Aman & Kepastian:** Menjadi mitra teknologi bagi institusi yang lelah dengan janji manis vendor IT namun sistem sering macet saat momen penting.
2. **Kemandirian Klien (Zero Lock-in):** Memastikan setiap klien memiliki 100% hak cipta dan kode program atas sistem yang mereka bangun, tanpa jebakan biaya sewa bulanan per user.
3. **Teknologi yang Bekerja Nyata:** Mengganti pekerjaan manual yang melelahkan dengan automasi cerdas yang langsung menghemat waktu dan biaya operasional.

---

## 2. TARGET PASAR & KARAKTERISTIK AUDIENS

### Siapa Pengambil Keputusannya?
* **Institusi Pendidikan:** Kepala Sekolah (SMA/SMK/SMP/SD), Ketua Yayasan Pendidikan, Rektor/Puket Kampus, Direktur Pesantren.
* **Bisnis & Perusahaan:** Pemilik UMKM, Direktur Operasional Perusahaan Distribusi/Logistik, Manajer Klinik/Rumah Sakit, Kepala Divisi Layanan.

### Psikologi & Bahasa Audiens (Wajib Diperhatikan):
1. **Bukan Orang Teknis:** Mereka tidak peduli istilah rumit seperti *"Kubernetes cluster, edge serverless, atau reactive micro-frontend"*.
2. **Peduli pada Hasil & Rasa Aman:** Pertanyaan mereka sederhana:
   * *“Apakah sistem ini akan macet saat 1.000 anak ujian serentak?”*
   * *“Bisa nggak staf tata usaha saya mengupdate berita sendiri tanpa manggil programmer?”*
   * *“Apakah nomor WhatsApp kami aman dari blokir jika kirim tagihan massal?”*
   * *“Apakah nanti saya ditagih biaya sewa bulanan terus-menerus?”*
3. **Bahasa Komunikasi:** Wajib menggunakan Bahasa Indonesia yang profesional, ramah, percaya diri, dan berorientasi manfaat nyata. Hindari campur bahasa Inggris yang tidak perlu (*code-switching*) dan hindari nada jualan yang berlebihan (*over-promising*).

---

## 3. TIGA PILAR LAYANAN UTAMA ABINEST

```
                               ┌────────────────────────┐
                               │        ABINEST         │
                               │  Software House & IT   │
                               └───────────┬────────────┘
               ┌───────────────────────────┼───────────────────────────┐
               ▼                           ▼                           ▼
    ┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
    │  1. JASA PEMBUATAN   │    │  2. JASA PEMBUATAN   │    │   3. JASA AUTOMASI   │
    │       WEBSITE        │    │        SISTEM        │    │   WHATSAPP & KERJA   │
    └──────────────────────┘    └──────────────────────┘    └──────────────────────┘
    • Profil Sekolah & Yayasan  • SIAKAD Sekolah Anti-Down  • WhatsApp Meta Cloud API
    • Company Profile UMKM      • Sistem Terpadu Yayasan    • Notifikasi Tagihan & SPP
    • Loading Cepat <0.8 Detik  • ERP Ringan & Dashboard    • Cetak Laporan PDF Instan
    • Staf Bisa Update Sendiri  • SLA 99.9% Uptime Garansi  • Rekap Data Bebas Salah
```

### Pilar 1: Jasa Pembuatan Website
* **Cocok Untuk:** Sekolah, Yayasan Pendidikan, UMKM, Klinik, dan Perusahaan Menengah.
* **Nilai Manfaat:** Website berkecepatan tinggi yang langsung terbuka kurang dari 0,8 detik di HP, tampilan bersih berwibawa, dan dilengkapi panel admin sederhana sehingga staf TU atau humas bisa memperbarui berita, pengumuman, dan foto semudah mengetik di Word.
* **Spesifikasi Kunci:** Next.js 15 App Router, Skor Google PageSpeed 95–100, Responsive Mobile-First, SEO-friendly untuk pencarian lokal Google.

### Pilar 2: Jasa Pembuatan Sistem (SIAKAD & ERP)
* **Cocok Untuk:** SMA/SMK/SMP/SD, Yayasan Multi-Unit, dan Perusahaan Distribusi/Retail.
* **Nilai Manfaat:** Mengelola data akademik, nilai rapor Kurikulum Merdeka, keuangan SPP, pendaftaran PPDB online, hingga stok dan cabang dalam satu sistem terpusat. Dirancang dengan arsitektur terpisah agar tidak crash saat ribuan siswa login ujian serentak.
* **Spesifikasi Kunci:** Jaminan tertulis SLA 99.9% Uptime, Isolasi Keamanan PostgreSQL Row-Level Security (RLS), Pemroses Dokumen Paralel, 100% Hak Milik Source Code.

### Pilar 3: Jasa Automasi WhatsApp & Alur Kerja
* **Cocok Untuk:** Bagian Keuangan Sekolah, Tim PPDB, Customer Service, dan Admin Operasional.
* **Nilai Manfaat:** Mengubah pekerjaan manual yang memakan waktu berjam-jam menjadi serba otomatis. Pengingat tagihan SPP, kartu ujian, kuitansi PDF, dan laporan harian terkirim mandiri tepat waktu tanpa risiko salah input data.
* **Spesifikasi Kunci:** Integrasi Resmi Meta WhatsApp Cloud API (anti-blokir nomor), Pengiriman <2 detik, Sinkronisasi Webhook ke Excel/Google Sheets/Database.

---

## 4. ENAM KEUNGGULAN KOMPETITIF UTAMA (USP)

Keunggulan ini wajib menjadi benang merah di seluruh halaman website:

1. **100% Hak Milik Source Code di Tangan Klien:**
   Setelah proyek selesai, seluruh kode program (repositori Git), struktur database, dan dokumentasi diserahkan utuh menjadi aset resmi klien. Tidak ada ketergantungan pada Abinest (*zero vendor lock-in*).
2. **Jaminan Tertulis SLA 99.9% Uptime (Anti-Down):**
   Sistem diuji ketahanan bebannya sebelum dipakai rilis. Diberi jaminan tertulis agar tidak lumpuh saat momen puncak seperti ujian semester, penutupan PPDB, atau tutup buku.
3. **Respons Engineer <15 Menit di Jam Kerja:**
   Klien memiliki kontak langsung ke tim software engineer pembuat sistem. Tidak ada birokrasi oper-operan customer service yang lambat.
4. **Portal Klien Transparan 24/7:**
   Klien diberikan akun khusus untuk memantau persentase progres mingguan, daftar tugas yang sedang dikerjakan, jadwal rilis, serta mengajukan catatan revisi kapan saja dari HP atau laptop.
5. **Tanpa Biaya Lisensi Bulanan yang Mengikat:**
   Klien cukup membayar biaya pembangunan sistem satu kali sesuai kesepakatan. Tidak ada pungutan biaya sewa per siswa atau per user setiap bulan yang membebani anggaran.
6. **Pelatihan Langsung & Serah Terima Lengkap:**
   Disertai sesi training langsung sampai staf non-teknis benar-benar mahir, dilengkapi buku panduan dan video rekaman tutorial berbahasa Indonesia.

---

## 5. DUA MODEL KERJA SAMA (ENGAGEMENT MODEL)

Untuk menghilangkan ketakutan klien terhadap biaya siluman (*hidden fees*):

* **Model 1: Proyek Sekali Bayar (Kepemilikan Penuh 100%) — *Paling Banyak Dipilih***
  * Pembayaran bertahap berdasarkan pencapaian (*milestone*).
  * Source code dan database 100% diserahkan ke klien.
  * Sudah termasuk masa garansi pemeliharaan pasca-rilis.
  * Bebas biaya sewa bulanan.
* **Model 2: Pendampingan & Maintenance Berkala — *100% Opsional***
  * Khusus institusi yang tidak memiliki staf IT sendiri dan ingin terima beres sepanjang tahun.
  * Mencakup pemantauan server 24/7, pencadangan data otomatis harian, dan prioritas perbaikan di bawah 15 menit saat momen kritis (ujian/PPDB).
  * Kontrak fleksibel tanpa mengunci akses atau kepemilikan data sistem.

---

## 6. PANDUAN DESAIN UI/UX ANTI-AI-SLOP (STANDAR KELAS DUNIA)

Website Abinest **bukan template AI murahan**. Desain harus mencerminkan studio rekayasa teknologi papan atas dengan mengacu pada standar *Swiss Minimalist / Modern Editorial* seperti **Midday.ai**, **Dub.co**, dan **Linear**:

### Aturan Visual Terlarang (Dilarang Digunakan):
* ❌ Dilarang menaruh badge kapsul kecil warna-warni di setiap section (`uppercase tracking-widest text-[11px]...`).
* ❌ Dilarang membungkus setiap ikon ke dalam kotak membulat warna-warni (misal: kotak oranye mini, kotak hijau mini) yang berulang-ulang di setiap baris.
* ❌ Dilarang membuat tumpukan kartu mengambang (*floating cards*) yang identik dari section atas sampai bawah.
* ❌ Dilarang menggunakan teks marketing yang terlalu panjang di dalam kartu sehingga terlihat sesak dan tidak berkelas.

### Aturan Visual Wajib (Harus Diterapkan):
* ✅ **Garis Pembatas Tipis 1px (*Hairline Borders*):** Gunakan garis `border-t border-slate-200/80` atau `divide-y` yang bersih, mirip format dokumen arsitektur atau majalah desain editorial.
* ✅ **Whitespace yang Berani & Lega:** Beri jarak napas antar-elemen. Ruang kosong yang tertata rapi memberikan kesan mahal, matang, dan profesional.
* ✅ **Tipografi Kontras Tinggi:**
  * Judul: Hitam pekat `#0A0A0A` atau `#0F172A` dengan jarak huruf rapat (*tracking-tight font-bold*).
  * Teks penjelasan: Abu-abu netral terukur `#475569` atau `#64748B`.
  * Sentuhan editorial: Font serif miring (*Playfair Display / Georgia*) hanya pada satu kata penegas di headline utama.
* ✅ **Disiplin Warna (Rasio 85:10:5):**
  * `85%` Latar kanvas netral bersih (`#FAF9F6` alabaster hangat atau `#FFFFFF` bersih).
  * `10%` Teks dan elemen struktur hitam/navy pekat (`#0F172A`).
  * `5%` Aksen terracotta/oranye tembaga hangat (`#D97736` / `#C2672B`) yang **hanya dipakai pada tombol aksi utama (CTA)**, bukan untuk mewarnai seluruh halaman.
* ✅ **Logo Teknologi Asli:** Hanya gunakan file SVG resmi berstandar Devicon (Next.js lingkaran hitam resmi, Python dua ular resmi, PostgreSQL kepala gajah Slonik, Docker, dll.) tanpa distorsi.

---

## 7. STRUKTUR HALAMAN & MASTER COPYWRITING SIAP PAKAI

Alur halaman utama disusun mengikuti psikologi pengambil keputusan institusi:

### Section 1: Sticky Navbar
* **Kiri:** Logo resmi Abinest (ikon digital nest circuit + teks brand).
* **Tengah:** Menu navigasi: `Layanan` · `Hasil Kerja` · `Cara Kerja` · `Testimoni` · `FAQ` · `Kontak`.
* **Kanan:** Link `Portal Klien` + Tombol Kapsul `Konsultasi Gratis →`.

### Section 2: Hero Section
* **Eyebrow:** `Software House & Konsultan Teknologi · Sekolah, Yayasan & Bisnis`
* **Headline (H1):**
  > **Website Cepat, Sistem Anti-Down, & Automasi Kerja yang *Pasti* Beres.**
* **Sub-headline:**
  > Kami membangun website institusi & perusahaan yang cepat dibuka, sistem SIAKAD & operasional yang tetap stabil di jam tersibuk, serta automasi WhatsApp & laporan yang memangkas kerja manual — dengan jaminan 100% source code milik Anda tanpa biaya lisensi bulanan.
* **Tombol Utama (CTA):** `Konsultasikan Kebutuhan Sistem Anda →`
* **Tombol Sekunder:** `Lihat Hasil Kerja Kami →`
* **Micro-Trust:**
  * `✓ Respons Engineer <15 Menit (Jam Kerja)`
  * `✓ Pantau Progres via Portal Klien`
  * `✓ Termasuk Training Staf & Dokumentasi`
* **Trust Bar 4 Metrik:**
  1. `99.9% Uptime` — Jaminan sistem anti-down saat ujian & PPDB serentak.
  2. `<0.8s Website` — Buka halaman instan di HP dengan skor Google 95–100.
  3. `<2s Sistem` — Respon cepat pengiriman notifikasi WhatsApp & rapor PDF.
  4. `100% Source Code` — Seluruh kode program diserahkan menjadi aset resmi Anda.

### Section 3: Trusted By Bar
* **Teks Pengantar:** `Dipercaya oleh 20+ Sekolah, Yayasan, dan UMKM di Jakarta, Surabaya & Sekitarnya`
* **Daftar Klien (Tampilan Grayscale Elegan):**
  * SMA Islam Terpadu Al-Hikmah (Surabaya)
  * Yayasan Pendidikan Bina Insani (Jakarta Selatan)
  * PT Maju Bersama Distribusi (Jakarta Barat)
  * Klinik Utama Medika Nusantara (Tangerang Selatan)
  * SMK Teknologi & Industri Karya (Sidoarjo)
  * CV Sentosa Retail Multi-Cabang (Surabaya)

### Section 4: Problem / Masalah yang Kerap Terjadi
* **Masalah 1 (Website):** Website lambat dan susah diupdate sendiri oleh staf tata usaha. *(Solusi Abinest: Loading <0.8 detik & bisa update berita semudah mengetik di Word).*
* **Masalah 2 (Sistem):** Server mendadak macet atau error saat ujian massal atau PPDB. *(Solusi Abinest: Arsitektur anti-down bergaransi SLA 99.9% uptime).*
* **Masalah 3 (Operasional):** Kerja manual menumpuk karena kirim tagihan SPP dan salin data Excel satu per satu. *(Solusi Abinest: Automasi pengiriman WhatsApp resmi & rapor PDF instan).*

### Section 5: Mengapa Abinest (Value Proposition)
Enam kartu nilai diferensiasi:
1. `100% Kepemilikan Source Code`
2. `SLA 99.9% Uptime Anti-Down`
3. `Respons Engineer <15 Menit`
4. `Portal Klien Transparan`
5. `Tanpa Biaya Lisensi Bulanan`
6. `Training & Serah Terima Lengkap`

### Section 6: Tiga Pilar Layanan Utama
Tiga kartu besar terpisah:
* **Pilar 1 — Jasa Pembuatan Website:** Cepat dibuka, staf TU bisa update sendiri, SEO lokal Google.
* **Pilar 2 — Jasa Pembuatan Sistem:** SIAKAD & ERP ringan, tahan ujian 1.200+ siswa, cetak 600 rapor dalam 4 menit.
* **Pilar 3 — Jasa Automasi WhatsApp & Kerja:** Tagihan SPP otomatis via Meta Cloud API resmi tanpa risiko blokir nomor.

### Section 7: Tiga Studi Kasus Terukur (Case Studies)
* **Kasus 1 (SMA IT Al-Hikmah):** *"SIAKAD Anti-Down untuk 1.240 Siswa Saat Ujian Massal — 0% Crash."*
* **Kasus 2 (Yayasan Bina Insani):** *"Website Sekolah Loading 0,7 Detik & Pendaftar PPDB Online Naik 40%."*
* **Kasus 3 (PT Maju Bersama Distribusi):** *"Automasi WhatsApp Memangkas 12 Jam Kerja Admin Per Minggu."*
* **CTA Tengah Halaman:** Tombol `"Konsultasikan Kebutuhan Sistem Anda"` tepat di bawah studi kasus.

### Section 8: Testimoni Klien Nyata
Enam testimoni kredibel dengan foto, nama lengkap, jabatan, dan hasil angka konkret (Kepala Sekolah, Ketua Yayasan, Direktur Operasional, Manajer Klinik, Owner Retail, Koordinator IT).

### Section 9: Alur Kerja (5 Langkah Transparan)
1. *Konsultasi & Pemetaan Kebutuhan (Gratis)*
2. *Proposal & Desain Solusi (Jadwal & Biaya Pasti)*
3. *Pembangunan & Demo Berkala (Pantau di Portal Klien)*
4. *Uji Coba & Training Staf (Sampai Mahir)*
5. *Serah Terima & Pendampingan (100% Kode Program)*

### Section 10: Model Kerja Sama
Penjelasan dua opsi: *Proyek Sekali Bayar (Kepemilikan Penuh)* vs *Pendampingan Berkala (Opsional)*.

### Section 11: Teknologi Standar Industri
12 logo resmi yang dijelaskan fungsinya dalam bahasa manfaat bagi pemilik bisnis/sekolah, dilengkapi 5 ringkasan perlindungan data & pencadangan harian otomatis.

### Section 12: Tanya Jawab (FAQ 8 Pertanyaan Utama)
Membahas tuntas: durasi pengerjaan, hak milik source code, penanganan saat server down, biaya bulanan, proses revisi, keamanan data, sesi training, dan termin pembayaran bertahap.

### Section 13: Final CTA & Formulir Konsultasi 4 Kolom
* **Formulir Ringkas:**
  1. Nama Lengkap Anda
  2. Nama Sekolah / Yayasan / Perusahaan
  3. Layanan yang Dibutuhkan *(Dropdown: Website / Sistem / Automasi / Paket Lengkap)*
  4. Nomor WhatsApp Aktif
* **Tombol Kirim:** `Konsultasikan Kebutuhan Sistem Anda →`
* **Teks Penenang:** *Respons <15 menit di jam kerja, tanpa komitmen, privasi data 100% terjaga.*

### Section 14: Footer Lengkap & Tombol Melayang
* Kontak telepon, WhatsApp, email resmi, alamat operasional (Jakarta & Surabaya), jam kerja.
* **Sticky Mobile CTA Bar:** Otomatis muncul di bagian bawah layar smartphone saat pengunjung melakukan scroll.

---

## 8. STRUKTUR ARSITEKTUR TEKNIS & SEO LOKAL

### Arsitektur Halaman Web:
```
/                                   -> Homepage Utama (Konversi Lengkap)
/jasa-pembuatan-website-jakarta     -> Landing Page SEO Khusus Jasa Website
/jasa-pembuatan-sistem-sekolah      -> Landing Page SEO Khusus SIAKAD & Sistem Sekolah
/jasa-automasi-whatsapp             -> Landing Page SEO Khusus Automasi WhatsApp Resmi
/login                              -> Pintu Masuk Portal Klien Abinest
/portal                             -> Dashboard Pemantauan Progres Klien
/sitemap.xml                        -> Peta Situs XML Otomatis untuk Mesin Pencari Google
```

### Rekomendasi Meta SEO:
* **Title Homepage:** `Abinest | Jasa Pembuatan Website, Sistem SIAKAD/ERP & Automasi WhatsApp (Jakarta & Surabaya)`
* **Meta Description:** `Software House & Konsultan IT untuk Sekolah, Yayasan, dan Bisnis. Website loading <0.8 detik, sistem SIAKAD/ERP anti-down (SLA 99.9%), & automasi WhatsApp resmi. 100% source code milik Anda tanpa biaya bulanan.`
* **Kata Kunci Prioritas:**
  * `jasa pembuatan website sekolah jakarta`
  * `jasa pembuatan sistem siakad anti down`
  * `software house jakarta surabaya`
  * `jasa automasi whatsapp tagihan spp`
  * `konsultan it sekolah dan umkm`

---

## 9. CARA PENGGUNAAN DOKUMEN INI

File dokumen ini tersimpan di root folder proyek:
`c:\Users\abima\.gemini\antigravity\scratch\startup-portfolio\ABINEST_MASTER_SPECIFICATION.md`

Anda dapat menggunakannya sebagai:
1. **Panduan Presentasi:** Menjelaskan profil bisnis Abinest kepada calon klien, investor, atau pengurus yayasan.
2. **Product Requirement Document (PRD):** Panduan standar bagi developer, copywriter, atau desainer saat mengembangkan fitur baru.
3. **Master Prompt AI:** File ini dapat langsung diunggah ke model AI mana pun di masa depan agar AI memahami konteks bisnis Abinest secara utuh tanpa perlu diberi tahu berulang-ulang.
