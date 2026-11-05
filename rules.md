# Project Engineering Rules (`.cursorrules` / AI IDE Guidelines)
Gunakan aturan ini sebagai instruksi sistem (*System Prompt* / `.cursorrules`) di dalam IDE Anda (Cursor, Windsurf, atau VS Code Copilot) agar seluruh kode yang dihasilkan konsisten dan bebas *bug*.

---

## 1. Tech Stack & Versi Baku
- **Framework**: Next.js App Router (React 19 / Next 15+), TypeScript (`strict: true`).
- **Styling (Public Marketing `(marketing)`)**: Tailwind CSS, `shadcn/ui`, `lucide-react`, `framer-motion`.
- **Styling (Client Portal `(portal)`)**: `@shopify/polaris` dan `@shopify/polaris-icons`.
- **Backend & Auth**: Supabase (`@supabase/supabase-js` & `@supabase/ssr`).
- **Validasi Form & Server Actions**: `zod` + `react-hook-form`.

---

## 2. Aturan Arsitektur Next.js App Router
1. **Default ke Server Components (RSC)**:
   - Seluruh `page.tsx` dan komponen seksi statis wajib berupa *Server Component*.
   - Hanya tambahkan direktif `"use client"` pada komponen daun (*leaf components*) yang menggunakan `framer-motion`, *event listener* (`onClick`, `onChange`), React Hooks (`useState`, `useEffect`), atau komponen `@shopify/polaris` (karena Polaris membutuhkan React Context).
2. **Isolasi CSS Antara Marketing dan Portal**:
   - **DILARANG** mengimpor `@shopify/polaris/build/esm/styles.css` di dalam `src/app/layout.tsx` global atau di dalam `(marketing)`.
   - Impor CSS Polaris **HANYA** di dalam `src/app/(portal)/portal/layout.tsx` agar gaya reset Polaris tidak merusak tipografi dan layout Tailwind pada Landing Page.
3. **Mutasi Data**:
   - Gunakan **Next.js Server Actions** (`src/actions/*.ts`) untuk pengiriman form konsultasi dan pembaruan data di portal. Jangan membuat API Route (`app/api/*`) kecuali untuk penerima *webhook* eksternal (seperti Upstash QStash atau Payment Gateway).

---

## 3. Aturan Integrasi Supabase (`@supabase/ssr`)
1. **DILARANG** menggunakan paket `@supabase/auth-helpers-nextjs` yang sudah usang (*deprecated*). Wajib gunakan `@supabase/ssr`.
2. **Pemisahan Client**:
   - Gunakan `createClient()` dari `src/lib/supabase/server.ts` (berbasis `cookies()` asinkron dari `next/headers`) untuk seluruh query di *Server Components*, *Server Actions*, dan *Route Handlers*.
   - Gunakan `createClient()` dari `src/lib/supabase/client.ts` (`createBrowserClient`) hanya untuk langganan *Supabase Realtime* di *Client Components*.
3. **Keamanan & Type-Safety**:
   - Selalu impor tipe `Database` dari `@/types/database.types` saat menginisialisasi Supabase client: `createServerClient<Database>(...)`.
   - Gunakan `supabase.auth.getUser()` (bukan `getSession()`) di sisi server untuk memverifikasi autentikasi pengguna secara aman.

---

## 4. Standar Kualitas Kode & UI/UX
1. **Kepatuhan Desain Triloe**:
   - Gunakan background `#F8FAFC`, kartu `#FFFFFF`, aksen utama `#2563EB`, aksen status `#10B981`, dan kartu kontras `#0F172A`.
   - Seluruh tombol utama dan lencana navigasi wajib menggunakan `rounded-full`.
   - Seluruh kontainer visual besar dan Bento card wajib menggunakan `rounded-3xl`.
2. **Tipografi Numerik**:
   - Setiap kali merender angka statistik, persentase SLA ($99.9\%$), latensi ($< 100\text{ ms}$), atau nominal harga Rupiah, wajib terapkan kelas `font-mono` (`JetBrains Mono`).
3. **Aksesibilitas & SEO**:
   - Gunakan komponen `<Image />` dari `next/image` dengan atribut `alt` deskriptif dan `priority` khusus pada visual Hero utama.
   - Sediakan `Metadata` API lengkap beserta skema JSON-LD `Organization` dan `SoftwareApplication` pada halaman utama.