# Software Engineering & Automation Studio — B2B Portfolio, Live Demo Engine & Enterprise Client Portal

Platform web terpadu kelas *enterprise* yang dibangun menggunakan arsitektur **Modular Monolith Next.js App Router**, **Isolasi Dual-Design System (Route Groups)**, **Supabase PostgreSQL (Strict RLS & Realtime)**, serta **Upstash QStash Asynchronous Worker**.

---

## Fitur & Arsitektur Utama

1. **Isolasi Dual UI System (Next.js Route Groups)**:
   - **Area Publik `(marketing)` (`/`)**: Menggunakan *Triloe Clean Modern B2B Light Mode* (Tailwind CSS, Framer Motion, Lucide Icons, tipografi `Plus Jakarta Sans`, `DM Sans`, dan `JetBrains Mono`) tanpa kontaminasi CSS eksternal.
   - **Area Internal `(portal)` (`/portal/*`)**: Menggunakan **Shopify Polaris (`@shopify/polaris`)** yang terisolasi di dalam `PolarisProvider` dan `PortalShell` untuk manajemen data proyek, invoice, dan telemetri antrean.

2. **Tiga Pilar Layanan & Studi Kasus Produksi**:
   - **High-Performance & SEO-Optimized Web**: Skor Lighthouse `95–100`, SSR/SSG, serta JSON-LD (`Organization` & `SoftwareApplication`).
   - **SIAKAD Core + Parallel PDF Report Engine**: Pemisahan beban kerja Administrasi/SPP vs LMS/Ujian serentak, dilengkapi worker perender ratusan PDF rapor paralel ke Supabase Storage (`siakad-reports`).
   - **Omnichannel Order Hub & Business Automation**: Sinkronisasi stok real-time lintas marketplace, *Resilient Webhook Dispatcher* dengan *Exponential Backoff + Jitter*, dan *WhatsApp Notification Gateway*.

3. **Live WhatsApp Automation Demo (`/#konsultasi`)**:
   - Validasi input menggunakan `zod` dan normalisasi otomatis nomor WhatsApp Indonesia (`08...` / `+628...` $\rightarrow$ `628...`).
   - Eksekusi *Next.js Server Action* (`submitConsultationLead`) yang menyimpan prospek ke tabel `leads`, memicu pengiriman pesan WhatsApp otomatis, mencatat audit trail ke `webhook_logs`, dan menampilkan kartu bukti telemetri langsung (`200 OK`, latensi `ms`, pratinjau pesan).

4. **Enterprise Client Portal (`/portal`)**:
   - `/login` — Autentikasi Supabase (*Email/Password* & *Passwordless Magic Link*) serta tombol **Mode Demo Portal Klien (Bypass Preview)**.
   - `/portal` — Pelacakan progres proyek & milestone secara *real-time* via `postgres_changes` Supabase Realtime.
   - `/portal/invoices` — Manajemen tagihan proyek dengan filter status (`Paid`, `Issued`, `Overdue`) dan pembuatan *Signed URL* unduhan PDF dari bucket `invoices-pdf`.
   - `/portal/automation` — Monitor antrean worker PDF SIAKAD (`report_generation_jobs`) dan log transmisi webhook (`webhook_logs`) lengkap dengan pemicu simulasi batch job.

---

## Struktur Direktori

```text
├── supabase/
│   ├── migrations/
│   │   └── 20261105000001_initial_schema.sql  # DDL Lengkap, ENUMs, Indexes, Triggers, RLS & Storage Buckets
│   └── seed.sql                               # Seed 2 Studi Kasus Unggulan (SIAKAD & Omnichannel)
├── src/
│   ├── actions/
│   │   └── submit-lead.ts                     # Server Action Form Konsultasi & Trigger WA Instan
│   ├── app/
│   │   ├── (marketing)/                       # Route Group Publik (Tailwind CSS Light Mode)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── login/page.tsx
│   │   ├── (portal)/                          # Route Group Internal (Shopify Polaris)
│   │   │   ├── layout.tsx
│   │   │   └── portal/
│   │   │       ├── page.tsx                   # Project Overview & Realtime Milestones
│   │   │       ├── invoices/page.tsx          # Manajemen Invoice & Signed URL PDF
│   │   │       └── automation/page.tsx        # Monitor Worker PDF SIAKAD & Webhook Logs
│   │   ├── api/
│   │   │   ├── webhooks/qstash-wa/route.ts    # Endpoint Webhook WA + Exponential Backoff
│   │   │   └── workers/pdf-generator/route.ts # Endpoint Worker Paralel Cetak PDF Rapor SIAKAD
│   │   ├── auth/callback/route.ts             # Pertukaran Kode OAuth/Magic Link (@supabase/ssr)
│   │   ├── layout.tsx                         # Root Layout & Konfigurasi Font Google
│   │   ├── robots.ts                          # Konfigurasi robots.txt
│   │   └── sitemap.ts                         # Konfigurasi sitemap.xml
│   ├── components/
│   │   ├── portal/                            # Wrapper PolarisProvider & PortalShell
│   │   └── sections/                          # Hero, ServicePillars, EngineeringBento, CaseStudies, Testimonial, Consultation
│   ├── hooks/
│   │   └── use-realtime-project.ts            # Custom Hook Langganan Supabase Realtime
│   ├── lib/
│   │   ├── automation/whatsapp.ts             # Dispatcher WhatsApp Gateway & Upstash QStash
│   │   ├── supabase/                          # Koneksi Browser, Server, Admin & Middleware (@supabase/ssr)
│   │   ├── validations/lead.ts                # Skema Zod & Normalisasi Nomor Telepon Indonesia
│   │   └── utils.ts                           # Helper cn()
│   ├── types/
│   │   └── database.types.ts                  # Definisi Tipe Ketat Database Supabase (Strict TypeScript)
│   └── middleware.ts                          # Next.js Edge Middleware Proteksi Rute
└── .env.example                               # Template Variabel Environment
```

---

## Cara Menjalankan Secara Lokal

1. **Instal Dependensi**:
   ```bash
   npm install
   ```

2. **Konfigurasi Environment Variables**:
   Salin `.env.example` menjadi `.env.local` dan lengkapi kredensial Supabase, Upstash QStash, serta WhatsApp Gateway Anda:
   ```bash
   cp .env.example .env.local
   ```
   > **Catatan Mode Demo**: Apabila variabel environment eksternal belum diisi, aplikasi secara otomatis mengaktifkan fallback data studi kasus, simulasi pengiriman WhatsApp terukur (`~180ms`), dan tombol **Mode Demo Portal Klien (Bypass Preview)** di `/login` agar seluruh fitur dapat diuji secara *end-to-end*.

3. **Jalankan Migrasi & Seed Database Supabase (Opsional untuk Koneksi Live)**:
   Jalankan isi file `supabase/migrations/20261105000001_initial_schema.sql` dan `supabase/seed.sql` pada SQL Editor proyek Supabase Anda.

4. **Jalankan Server Development**:
   ```bash
   npm run dev
   ```
   Buka `http://localhost:3000` untuk halaman utama atau `http://localhost:3000/portal?demo=true` untuk meninjau Client Portal Shopify Polaris.

5. **Verifikasi Tipe & Build Produksi**:
   ```bash
   npx tsc --noEmit
   npm run build
   ```

---

## Deployment ke GitHub & Vercel

1. **Push ke Repository GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial enterprise software & automation studio platform"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

2. **Deploy ke Vercel**:
   - Hubungkan repository GitHub Anda di dashboard Vercel atau gunakan Vercel integration.
   - Tambahkan variabel environment dari `.env.example` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `QSTASH_TOKEN`, dll.) pada pengaturan *Environment Variables* proyek Vercel.
   - Klik **Deploy**.
