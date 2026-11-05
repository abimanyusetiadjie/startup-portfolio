# UI/UX Design System & Component Blueprint
**Tema Publik (`/`)**: *"Triloe Clean Modern B2B"* (Light Mode, High-Trust, Rounded Geometry, Cutout Visuals)  
**Tema Internal (`/portal`)**: *Shopify Polaris Enterprise System*

---

## 1. Palet Warna & Design Tokens (Light Mode B2B)

| Nama Token | Variabel CSS / Kelas Tailwind | Hex Code | Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `bg-[#F8FAFC]` / `bg-slate-50` | `#F8FAFC` | Latar belakang utama halaman (*Cool Alabaster*) |
| **Surface Card** | `bg-white` | `#FFFFFF` | Kontainer kartu layanan, Bento grid, dan kartu putih mengambang |
| **Contrast Floating Card** | `bg-[#0F172A]` / `bg-slate-900` | `#0F172A` | Kartu metrik kontras tinggi (*Obsidian Slate*) & seksi CTA gelap |
| **Primary Brand Accent** | `bg-[#2563EB]` / `text-[#2563EB]` | `#2563EB` | Tombol utama (*pill button*), item navigasi aktif, aksen sorotan |
| **Tech / Status Accent** | `bg-[#10B981]` / `text-[#10B981]` | `#10B981` | Indikator *system online* (titik berdenyut), ikon centang, status sukses |
| **Heading Text** | `text-[#09090B]` / `text-zinc-950` | `#09090B` | Teks judul utama (*Deep Charcoal*) |
| **Body / Muted Text** | `text-[#64748B]` / `text-slate-500` | `#64748B` | Teks paragraf, sub-headline, dan label sekunder |
| **Border Subtle** | `border-slate-200/80` | `#E2E8F0` | Garis tepi halus untuk kartu putih dan Bento Grid |

---

## 2. Sistem Tipografi (`next/font/google`)

1. **Heading Font (`--font-jakarta`)**: `Plus Jakarta Sans`
   - Bobot: `700` (Bold) & `800` (ExtraBold).
   - Letter Spacing: `tracking-tight` ($-0.03\text{em}$).
   - Skala Ukuran:
     - Hero Display: `text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]`
     - Section Title: `text-3xl sm:text-4xl font-bold leading-[1.15]`
2. **Body & UI Navigation (`--font-sans`)**: `DM Sans` atau `Inter`
   - Bobot: `400` (Regular) & `500` (Medium).
   - Ukuran Body: `text-base sm:text-lg text-[#64748B] leading-relaxed`.
3. **Metrics, Stats & Code (`--font-mono`)**: `JetBrains Mono`
   - Bobot: `600` (SemiBold).
   - Digunakan untuk: Angka $99.9\%$, $< 100\text{ ms}$, $5.0$, cuplikan log webhook, dan nomor *invoice*.

---

## 3. Geometri, Grid & Anatomi "Triloe Cutout Hero"

### A. Aturan Geometri Global
- **Grid Utama**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` dengan sistem 12 kolom (`grid-cols-12 gap-6`).
- **Radius Sudut**:
  - Kontainer Gambar/Bento/Section: `rounded-3xl` ($28\text{px}$).
  - Tombol CTA, Navigasi Aktif, dan Tag Layanan: `rounded-full` (Kapsul penuh).

### B. Blueprint Teknis: Hero Section (Gaya Triloe 03)
1. **Bagian Atas (Centered Header)**:
   - *Eyebrow Pill*: Kapsul putih dengan border halus, titik hijau berdenyut (`#10B981`), dan teks `"ENGINEERING & AUTOMATION STUDIO"`.
   - *Headline*: `"Rekayasa Sistem Kelas Enterprise & Otomasi Bisnis Tanpa Kompromi"`.
   - *Sub-headline*: Penjelasan singkat 2 baris dengan lebar maksimum `max-w-2xl mx-auto`.
2. **Bagian Tengah (Visual Container dengan Cutout Kanan Bawah)**:
   - Kontainer utama berdimensi `relative w-full h-[460px] lg:h-[560px] rounded-3xl overflow-hidden` yang menampilkan mockup arsitektur sistem/kolaborasi tim.
   - **Cutout Corner Kanan Bawah**: Sebuah wadah `absolute bottom-0 right-0 bg-[#F8FAFC] pt-4 pl-6 rounded-tl-3xl` yang menciptakan ilusi potongan sudut melengkung ke dalam (*inverted border radius*) dan menampung deretan *Service Pills*:
     - `[Web Modern]` `[Sistem SIAKAD]` `[WA Automation]` `[API Integration]` `[Consulting]`
3. **Tiga Floating Stat Cards (Mengambang di Sekeliling Visual Utama)**:
   - **Kiri Atas (Kartu Hitam `#0F172A`)**: Teks putih dengan font `JetBrains Mono` `99.9%` + label `"Uptime & Reliability SLA"`.
   - **Kiri Bawah (Kartu Putih `#FFFFFF`)**: Shadow lembut `shadow-xl shadow-slate-900/5`, ikon petir biru, angka `<100ms` + label `"Latensi Respon API & Edge"`.
   - **Kanan Atas (Kartu Putih `#FFFFFF`)**: Angka `5.0 ★` berwarna emas/biru + label `"Kepuasan Klien & Garansi Sistem"`.

---

## 4. Spesifikasi Micro-Animations (Framer Motion)

1. **Continuous Subtle Floating (Untuk Stat Cards)**:
   ```ts
   const floatingAnimation = (delay = 0) => ({
     y: [0, -8, 0],
     transition: {
       duration: 4,
       repeat: Infinity,
        repeatType: "mirror" as const,
       ease: "easeInOut",
       delay,
     },
   });
   ```
2. **Staggered Scroll Reveal (Untuk Seksi & Bento Grid)**:
   - Container: `hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } }`
   - Item: `hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }`
3. **Spring Button & Pill Hover**:
   - `whileHover={{ scale: 1.03, y: -2 }}` dan `whileTap={{ scale: 0.97 }}`.

---

## 5. Rincian Desain Seksi Lainnya

- **Bento Grid Keunggulan Engineering (4 Kotak Asimetris)**:
  - *Kotak 1 (Span 7 kolom)*: Visualisasi matriks **Row Level Security (RLS)** dengan indikator akses role `Admin`, `Guru`, `Siswa`, `Klien`.
  - *Kotak 2 (Span 5 kolom)*: Animasi **Supabase Realtime Sync** yang menunjukkan sinkronisasi status instan.
  - *Kotak 3 (Span 5 kolom)*: Simulasi alur **Automated Cloud Queue** (PDF Worker & Webhook Retry).
  - *Kotak 4 (Span 7 kolom)*: Pratinjau mini **Polaris Client Dashboard** dengan tombol menuju `/portal`.
- **Trusted Client Feedback (Gaya Triloe 06)**:
  - Layout 2 kolom (`lg:grid-cols-12`): Kolom kiri (5 kolom) berisi *eyebrow*, judul tegas, dan metrik kepuasan; Kolom kanan (7 kolom) berisi kartu kutipan testimoni besar di atas foto kolaborasi berbingkai `rounded-3xl`.