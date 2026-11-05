# Panduan Penempatan Gambar Portofolio Visual

Folder ini disiapkan khusus untuk menampung gambar tangkapan layar (*screenshots*), mockup desain, atau render arsitektur sistem Anda.

## Rekomendasi Format & Resolusi:
1. **Format Ideal:** `.webp` (paling ringan dan optimal untuk Core Web Vitals) atau `.png` / `.jpg`.
2. **Daftar Slot Gambar yang Telah Terpasang di Komponen:**

| Nama File Rekomendasi | Digunakan Pada Komponen | Rasio Aspek | Keterangan |
| :--- | :--- | :--- | :--- |
| `siakad-dashboard.webp` | `ProjectVisualGridSection` & `CaseStudiesSection` | `16:10` atau `16:9` | Tangkapan layar antarmuka dashboard SIAKAD / buku nilai |
| `pdf-worker.webp` | `ProjectVisualGridSection` | `16:10` | Visualisasi antrean PDF Rapor / worker dashboard |
| `omnichannel-hub.webp` | `ProjectVisualGridSection` & `CaseStudiesSection` | `16:10` atau `16:9` | Dashboard sinkronisasi stok lintas marketplace |
| `whatsapp-gateway.webp` | `ProjectVisualGridSection` | `16:10` | Pratinjau pesan otomatis WhatsApp & webhook logs |
| `polaris-portal.webp` | `ProjectVisualGridSection` | `16:10` | Antarmuka Client Portal berbasis Shopify Polaris |
| `lighthouse-speed.webp` | `ProjectVisualGridSection` | `21:9` atau `16:9` | Skor audit Google Lighthouse 100 / Web Vitals |

## Cara Mengaktifkan Gambar Nyata:
Buka file [`src/components/sections/ProjectVisualGridSection.tsx`](file:///c:/Users/abima/.gemini/antigravity/scratch/startup-portfolio/src/components/sections/ProjectVisualGridSection.tsx), lalu cukup isi properti `imageUrl` pada item yang diinginkan:

```ts
imageUrl: "/images/projects/siakad-dashboard.webp",
```

*Catatan: Selama `imageUrl` dikosongkan (`""`), sistem secara otomatis menampilkan mockup grafis vector beresolusi tinggi dengan indikator slot gambar aktif.*
