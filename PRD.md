# Product Requirements Document (PRD)
**Nama Proyek:** Studio Rekayasa Perangkat Lunak & Otomasi B2B (Web Portfolio, Live Demo Engine & Client Portal)  
**Target Pasar:** B2B (Sekolah/Yayasan Pendidikan, UMKM Skala Menengah-Atas, Korporat, dan E-Commerce)  
**Stack Utama:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Shopify Polaris, Supabase, Upstash QStash/Redis.

---

## 1. Visi & Tujuan Produk
Membangun platform web terpadu yang berfungsi ganda:
1. **High-Trust B2B Conversion Engine (`/`)**: Memamerkan kapabilitas rekayasa perangkat lunak kelas enterprise melalui desain bergaya *Triloe Clean Modern B2B* dan fitur demonstrasi interaktif secara langsung (*Live WhatsApp Automation Demo*).
2. **Enterprise Client Portal (`/portal`)**: Ruang kerja terisolasi berbasis *Shopify Polaris* bagi klien untuk memantau progres pengerjaan proyek secara *real-time*, mengelola tagihan (*invoice*), serta mengakses dokumen teknis dan hasil *automated report*.

---

## 2. Tiga Pilar Layanan Utama (Value Proposition)

### Pilar 1: High-Performance & SEO-Optimized Website
- Skor Google Lighthouse konsisten di rentang $95 - 100$ (Performance, Accessibility, Best Practices, SEO).
- Optimasi *Core Web Vitals* ($LCP < 1.2\text{ s}$, $CLS < 0.05$, $INP < 100\text{ ms}$).
- Arsitektur *Server-Side Rendering* (SSR) dan *Static Site Generation* (SSG) untuk dominasi SEO organik dan konversi tinggi.

### Pilar 2: Custom Enterprise System (SIAKAD & ERP)
- **SIAKAD Sekolah Modern + Automated PDF Report Generator**:
  - Arsitektur terpisah (*decoupled*) antara modul Administrasi/SPP dan modul LMS/Ujian serentak untuk menjaga stabilitas beban server.
  - Mesin pembuat PDF rapor paralel secara asinkron (*asynchronous queue worker*) yang menyimpan hasil render ke Supabase Storage dengan aman.
- **Omnichannel Order & Stock Hub**:
  - Penyelarasan stok *real-time* lintas *marketplace* untuk mencegah *overselling*.

### Pilar 3: Business Automation & API Integration
- **WhatsApp Notification Gateway**: Pengiriman notifikasi transaksional otomatis.
- **Resilient Webhook Dispatcher**: Mekanisme pengiriman webhook anti-gagal dengan *auto-retry* dan *exponential backoff*.
- **Payment Gateway & Auto-Reconciliation**: Integrasi Virtual Account/QRIS beserta pencocokan mutasi otomatis.

---

## 3. Spesifikasi Fungsional: Public Landing Page (`/`)

| ID | Seksi Halaman | Deskripsi Fungsional & Elemen Kunci |
| :--- | :--- | :--- |
| **LP-01** | **Navbar** | Logo di kiri, menu navigasi tengah dengan indikator aktif berbentuk kapsul biru (`#2563EB`), dan tombol CTA kapsul *"Konsultasi Gratis"* di kanan. |
| **LP-02** | **Hero Section (Triloe 03 Style)** | *Eyebrow badge*, Headline & Sub-headline rata tengah, kontainer visual utama dengan sudut kanan bawah terpotong (*cutout corner*) berisi deretan kapsul layanan (`Web Modern`, `Sistem SIAKAD`, `WA Automation`, `API Integration`, `Consulting`), serta 3 *Floating Stat Cards* ($99.9\%$ Uptime, $< 100\text{ ms}$ Latency, $5.0$ Rating). |
| **LP-03** | **3 Pilar Layanan** | Kartu interaktif yang menguraikan arsitektur *High-Speed Web*, *SIAKAD/ERP*, dan *Business Automation* beserta metrik dampaknya. |
| **LP-04** | **Bento Grid Keunggulan** | Visualisasi interaktif 4 keunggulan teknis: *Row Level Security (RLS)*, *Supabase Realtime Sync*, *Automated Cloud Queue*, dan *Polaris Client Dashboard*. |
| **LP-05** | **Showcase & Studi Kasus** | Studi Kasus 1: *SIAKAD Core + Parallel PDF Engine*. Studi Kasus 2: *Omnichannel Stock & Order Gateway*. Dilengkapi diagram alur data ringkas. |
| **LP-06** | **Trusted Client Feedback** | Mengadopsi gaya *Triloe 06*: Headline di sisi kiri, kutipan testimoni institusi/korporat di kanan, dan visual kolaborasi berbingkai melengkung (`rounded-3xl`). |
| **LP-07** | **Live Demo CTA & Footer** | Formulir konsultasi menggunakan *Next.js Server Action* yang menyimpan *lead* ke Supabase dan langsung menembakkan pesan WhatsApp otomatis ke nomor pengunjung dalam hitungan detik. |

---

## 4. Spesifikasi Fungsional: Client Portal (`/portal`)

Menggunakan ekosistem desain **Shopify Polaris (`@shopify/polaris`)** untuk antarmuka manajemen data padat informasi:
1. **Authentication & Role Gate (`/login`)**: Mendukung *Email/Password*, *Magic Link*, dan *Google OAuth* via Supabase Auth. Pengalihan otomatis berdasarkan *role* (`admin`, `client`).
2. **Project Tracker Dashboard (`/portal/projects`)**:
   - Tabel data proyek menggunakan Polaris `IndexTable` & `Card`.
   - Indikator progres *real-time* (via Supabase Realtime) saat tim engineer memperbarui *milestone*.
3. **Invoice & Billing Management (`/portal/invoices`)**:
   - Daftar tagihan proyek dengan status (`Unpaid`, `Paid`, `Overdue`), unduh PDF *invoice* dari Supabase Storage, dan unggah bukti pembayaran.
4. **Queue & Automation Monitor (`/portal/automation`)**:
   - Log eksekusi *background job* (simulasi atau *live monitoring* antrean PDF Rapor & Webhook) lengkap dengan indikator *retry* dan latensi.

---

## 5. Kebutuhan Non-Fungsional & KPI Teknis
- **Keamanan Data**: $100\%$ tabel di Supabase wajib mengaktifkan *Row Level Security* (RLS). Klien hanya dapat membaca data proyek dan tagihan milik organisasi mereka sendiri.
- **Performa**: Menggunakan *React Server Components* (RSC) secara *default* untuk pemuatan data awal tanpa membebani *client bundle*.
- **Type-Safety**: Seluruh operasi database wajib terikat dengan tipe otomatis dari `supabase gen types typescript`.