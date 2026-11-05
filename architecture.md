# System & Code Architecture
**Arsitektur Utama:** Modular Monolith dengan Next.js App Router, Dual-Design System Isolation (Route Groups), Supabase SSR, dan Upstash Asynchronous Queue.

---

## 1. Diagram Arsitektur Tingkat Tinggi

```
+-------------------------------------------------------------------------+
|                        CLIENT BROWSER / DEVICES                         |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                      NEXT.JS APP ROUTER (VERCEL)                        |
|                                                                         |
|  +---------------------------------+  +------------------------------+  |
|  |   Route Group: (marketing)      |  |    Route Group: (portal)     |  |
|  |   UI: Tailwind + shadcn/ui +    |  |    UI: Shopify Polaris       |  |
|  |       Framer Motion (Triloe)    |  |        (@shopify/polaris)    |  |
|  +----------------+----------------+  +--------------+---------------+  |
|                   |                                  |                  |
|                   +----------------+-----------------+                  |
|                                    |                                    |
|                                    v                                    |
|  +-------------------------------------------------------------------+  |
|  |         Next.js Server Components (RSC) & Server Actions          |  |
|  |         Middleware Session Refresh (@supabase/ssr)                |  |
|  +-----------------+-------------------------------+-----------------+  |
+--------------------|-------------------------------|--------------------+
                     |                               |
         +-----------+                               +-----------+
         | (Direct Type-Safe Query & Auth)                       | (Async Dispatch)
         v                                                       v
+------------------------------------+  +---------------------------------+
|         SUPABASE ECOSYSTEM         |  |     UPSTASH REDIS / QSTASH      |
|  - PostgreSQL + RLS Policies       |  |  - Async Webhook Queue          |
|  - Supabase Auth (OAuth/MagicLink) |  |  - Parallel PDF Worker Trigger  |
|  - Supabase Storage (PDF/Assets)   |  |  - Exponential Backoff Retry    |
|  - Supabase Realtime (WebSockets)  |  +----------------+----------------+
+------------------------------------+                   |
                                                         v
                                        +---------------------------------+
                                        |   EXTERNAL INTEGRATIONS         |
                                        |  - WhatsApp Business API        |
                                        |  - Payment Gateway (VA / QRIS)  |
                                        +---------------------------------+
```

---

## 2. Isolasi Dual UI System (Strategi Route Groups)

Karena proyek ini menggabungkan **Tailwind CSS + shadcn/ui** di halaman publik (`/`) dan **Shopify Polaris** di halaman internal (`/portal`), penggunaan keduanya dalam satu `RootLayout` yang sama berisiko menimbulkan bentrok CSS global (*style bleeding*).

**Solusi Arsitektural:** Pisahkan menjadi 2 *Next.js Route Groups* dengan `layout.tsx` masing-masing:
1. `src/app/(marketing)/layout.tsx`: Memuat konfigurasi font `Plus Jakarta Sans`, `DM Sans`/`Inter`, `JetBrains Mono`, serta stylesheet Tailwind CSS murni dengan tema *Triloe Light Mode*.
2. `src/app/(portal)/portal/layout.tsx`: Memuat `@shopify/polaris/build/esm/styles.css` dan membungkus aplikasi dengan `<AppProvider i18n={enTranslations}>` khusus untuk rute `/portal/*`.

---

## 3. Struktur Direktori Proyek

```text
src/
├── app/
│   ├── (marketing)/                  # Area Publik - Gaya Triloe Clean Modern B2B
│   │   ├── layout.tsx                # Layout Marketing (Tailwind + Fonts)
│   │   └── page.tsx                  # Landing Page Utama (RSC)
│   ├── (portal)/                     # Area Internal - Shopify Polaris
│   │   └── portal/
│   │       ├── layout.tsx            # Polaris AppProvider & Frame Navigation
│   │       ├── page.tsx              # Ringkasan Dashboard Klien
│   │       ├── projects/page.tsx     # Tabel Progres Proyek (Realtime)
│   │       ├── invoices/page.tsx     # Manajemen Tagihan & Bukti Bayar
│   │       └── automation/page.tsx   # Monitor Antrean PDF & Webhook
│   ├── (auth)/
│   │   ├── login/page.tsx            # Halaman Login Multi-Metode
│   │   └── auth/callback/route.ts    # Endpoint pertukaran kode PKCE Supabase
│   └── api/
│       └── webhooks/
│           ├── qstash-pdf/route.ts   # Worker pembuat PDF Rapor asinkron
│           └── whatsapp/route.ts     # Worker pengirim WA dengan retry
├── actions/
│   ├── lead.actions.ts               # Server Action form konsultasi + WA trigger
│   └── portal.actions.ts             # Server Action mutasi proyek & invoice
├── components/
│   ├── layout/
│   │   ├── navbar.tsx                # Navbar kapsul biru (#2563EB)
│   │   └── footer.tsx                # Footer B2B
│   ├── sections/                     # Seksi-seksi Landing Page
│   │   ├── hero-triloe.tsx           # Hero dengan Cutout Corner & Floating Cards
│   │   ├── service-pillars.tsx       # 3 Pilar Layanan Utama
│   │   ├── bento-engineering.tsx     # Bento Grid Keunggulan Teknis
│   │   ├── case-studies.tsx          # Showcase SIAKAD & Omnichannel
│   │   ├── client-feedback.tsx       # Testimoni gaya Triloe 06
│   │   └── live-demo-cta.tsx         # Form interaktif terhubung ke WA
│   ├── portal/                       # Komponen berbasis @shopify/polaris
│   │   ├── polaris-provider.tsx      # Client wrapper untuk Polaris AppProvider
│   │   ├── project-table.tsx         # Tabel proyek dengan Realtime listener
│   │   └── invoice-list.tsx          # Daftar invoice & unduh PDF
│   └── ui/                           # Komponen atomik shadcn/ui & Magic UI
├── lib/
│   ├── supabase/
│   │   ├── client.ts                 # createBrowserClient (@supabase/ssr)
│   │   ├── server.ts                 # createServerClient (@supabase/ssr)
│   │   └── middleware.ts             # Pembaruan sesi token & proteksi rute
│   ├── queue/
│   │   └── qstash.ts                 # Konfigurasi Upstash QStash dispatcher
│   └── utils.ts                      # Helper cn() (clsx + tailwind-merge)
├── types/
│   ├── database.types.ts             # Tipe hasil generate Supabase CLI
│   └── index.ts                      # Interface domain aplikasi
└── middleware.ts                     # Next.js Edge Middleware
```

---

## 4. Alur Kerja Komponen Utama

### A. Live Consultation & Instant WhatsApp Demo (Server Action)
1. Calon klien mengisi nama, nama institusi/perusahaan, nomor WhatsApp, dan kebutuhan layanan di seksi **Live Demo CTA**.
2. Fungsi `submitConsultationLead()` di `src/actions/lead.actions.ts` melakukan validasi input menggunakan `zod`.
3. Data disimpan ke tabel `leads` di Supabase.
4. Secara paralel, Server Action menembakkan payload ke Upstash QStash (atau langsung ke WhatsApp Gateway API) untuk mengirimkan pesan sapaan interaktif beserta *link* jadwal diskusi ke nomor WhatsApp calon klien dalam waktu $< 2\text{ detik}$.
5. Status pengiriman (`queued` $\rightarrow$ `sent`) diperbarui pada UI secara langsung.

### B. Asynchronous PDF Report & Webhook Dispatcher (Exponential Backoff)
Untuk studi kasus **SIAKAD PDF Engine** dan **Business Automation**, kegagalan jaringan ditangani dengan algoritma *exponential backoff*:
$$t_{\text{retry}} = t_{\text{base}} \cdot 2^{\text{attempt}} + \text{jitter}$$
Di mana $t_{\text{base}} = 2\text{ detik}$ dan maksimum percobaan adalah $5$ kali sebelum masuk ke *Dead Letter Queue* (DLQ) yang dapat dipantau di `/portal/automation`.