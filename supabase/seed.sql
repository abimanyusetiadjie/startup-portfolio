-- ============================================================================
-- SEED DATA: supabase/seed.sql
-- DESKRIPSI: Data awal 2 Studi Kasus Unggulan pada tabel public.case_studies
-- ============================================================================

INSERT INTO public.case_studies (
    slug,
    title,
    subtitle,
    client_industry,
    pillar,
    challenge_summary,
    architecture_solution,
    impact_metrics,
    tech_stack,
    diagram_schema,
    cover_image_url,
    is_featured,
    sort_order,
    published_at
)
VALUES
(
    'siakad-core-parallel-pdf-engine',
    'SIAKAD Core + Parallel PDF Engine',
    'Arsitektur Akademik Terpisah & Mesin Pembuat Rapor Asinkron untuk Yayasan Pendidikan Multi-Kampus',
    'Pendidikan & Yayasan Sekolah (B2B EdTech)',
    'custom_siakad_erp',
    'Saat periode pembagian rapor semester dan ujian serentak, ribuan siswa dan guru mengakses sistem bersamaan sehingga proses render PDF rapor sinkron membebani CPU server utama dan menyebabkan timeout massal.',
    'Memisahkan (decoupled) beban kerja modul Administrasi/SPP dari modul LMS/Ujian, serta memindahkan pembuatan PDF rapor ke antrean asinkron terdistribusi (Upstash QStash Worker) dengan penyimpanan langsung ke Supabase Storage berproteksi Signed URL.',
    '[
        {"label": "Kecepatan Render 1.000 Rapor", "value": "< 42 dtk", "delta": "-94% Waktu Tunggu"},
        {"label": "Uptime Saat Ujian Serentak", "value": "99.98%", "delta": "Zero Downtime"},
        {"label": "Penghematan Beban CPU Utama", "value": "78%", "delta": "Async Offloading"}
    ]'::jsonb,
    ARRAY['Next.js App Router', 'TypeScript', 'Supabase PostgreSQL', 'Row Level Security', 'Upstash QStash', 'Supabase Storage'],
    '{
        "nodes": [
            {"id": "client", "label": "Portal Guru / Wali Kelas"},
            {"id": "action", "label": "Next.js Server Action"},
            {"id": "qstash", "label": "Upstash QStash Queue"},
            {"id": "worker", "label": "Parallel PDF Worker"},
            {"id": "storage", "label": "Supabase Storage (Signed URL)"}
        ],
        "flow": "client -> action -> qstash -> worker -> storage"
    }'::jsonb,
    '/images/case-studies/siakad-pdf-engine.webp',
    true,
    1,
    NOW()
),
(
    'omnichannel-order-stock-hub',
    'Omnichannel Order & Stock Hub',
    'Sinkronisasi Stok Real-Time Lintas Marketplace & Rekonsiliasi Pembayaran Otomatis dengan Resilient Webhook',
    'Retail Distribusi & E-Commerce B2B',
    'business_automation',
    'Perusahaan mengalami overselling hingga ratusan pesanan setiap bulan saat flash sale karena keterlambatan sinkronisasi stok antar gudang fisik dan 4 marketplace, ditambah kegagalan webhook pembayaran akibat lonjakan trafik.',
    'Membangun Event-Driven Order & Stock Gateway menggunakan Supabase Realtime dan Resilient Webhook Dispatcher berbasis Exponential Backoff (maksimum 5 percobaan sebelum masuk ke Dead Letter Queue) serta notifikasi WhatsApp otomatis.',
    '[
        {"label": "Latensi Sinkronisasi Stok", "value": "< 85 ms", "delta": "Real-time Sync"},
        {"label": "Insiden Overselling", "value": "0%", "delta": "-100% Eliminasi Selisih"},
        {"label": "Keberhasilan Delivery Webhook", "value": "99.95%", "delta": "Exponential Backoff"}
    ]'::jsonb,
    ARRAY['Next.js App Router', 'TypeScript', 'Supabase Realtime', 'Upstash QStash', 'WhatsApp Business API', 'Shopify Polaris'],
    '{
        "nodes": [
            {"id": "marketplace", "label": "Multi-Marketplace Webhook"},
            {"id": "dispatcher", "label": "Resilient Queue (Backoff)"},
            {"id": "db", "label": "Supabase Atomic Stock Lock"},
            {"id": "realtime", "label": "Polaris Live Dashboard"},
            {"id": "wa", "label": "WhatsApp Instant Alert"}
        ],
        "flow": "marketplace -> dispatcher -> db -> realtime -> wa"
    }'::jsonb,
    '/images/case-studies/omnichannel-order-hub.webp',
    true,
    2,
    NOW()
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    subtitle = EXCLUDED.subtitle,
    client_industry = EXCLUDED.client_industry,
    pillar = EXCLUDED.pillar,
    challenge_summary = EXCLUDED.challenge_summary,
    architecture_solution = EXCLUDED.architecture_solution,
    impact_metrics = EXCLUDED.impact_metrics,
    tech_stack = EXCLUDED.tech_stack,
    diagram_schema = EXCLUDED.diagram_schema,
    cover_image_url = EXCLUDED.cover_image_url,
    is_featured = EXCLUDED.is_featured,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
