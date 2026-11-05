# Supabase PostgreSQL Schema, RLS & Storage
**Database Engine:** PostgreSQL 15+ (Supabase)  
**Autentikasi:** Supabase Auth (`auth.users`)  
**Keamanan:** Row Level Security (RLS) diaktifkan secara ketat pada seluruh tabel.

---

## 1. Skrip SQL Lengkap (Siap Eksekusi di Supabase SQL Editor)

```sql
-- Aktifkan ekstensi UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- 1. ENUMS
-- ==========================================
CREATE TYPE user_role AS ENUM ('admin', 'client', 'teacher', 'student');
CREATE TYPE service_pillar AS ENUM ('high_perf_web', 'custom_siakad_erp', 'business_automation');
CREATE TYPE project_status AS ENUM ('discovery', 'architecture', 'development', 'qa_testing', 'deployed', 'maintenance');
CREATE TYPE invoice_status AS ENUM ('draft', 'unpaid', 'paid', 'overdue', 'cancelled');
CREATE TYPE job_status AS ENUM ('queued', 'processing', 'completed', 'failed_retrying', 'dead_letter');

-- ==========================================
-- 2. TABEL PROFILES (Terhubung ke auth.users)
-- ==========================================
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    company_name TEXT,
    role user_role NOT NULL DEFAULT 'client',
    whatsapp_number TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==========================================
-- 3. TABEL LEADS (Fitur Live Demo WhatsApp di Landing Page)
-- ==========================================
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    institution_name TEXT NOT NULL,
    whatsapp_number TEXT NOT NULL,
    email TEXT,
    interested_pillar service_pillar NOT NULL,
    project_brief TEXT,
    wa_notification_sent BOOLEAN NOT NULL DEFAULT FALSE,
    wa_sent_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==========================================
-- 4. TABEL PROJECTS (Dipantau di Client Portal Polaris)
-- ==========================================
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    pillar service_pillar NOT NULL,
    status project_status NOT NULL DEFAULT 'discovery',
    progress_percentage INTEGER NOT NULL DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
    uptime_sla NUMERIC(5,2) DEFAULT 99.90,
    repository_url TEXT,
    staging_url TEXT,
    production_url TEXT,
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    target_end_date DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==========================================
-- 5. TABEL PROJECT MILESTONES
-- ==========================================
CREATE TABLE public.project_milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    sort_order INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==========================================
-- 6. TABEL INVOICES (Tagihan Klien)
-- ==========================================
CREATE TABLE public.invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_number TEXT UNIQUE NOT NULL,
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    client_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    amount_idr BIGINT NOT NULL CHECK (amount_idr >= 0),
    status invoice_status NOT NULL DEFAULT 'unpaid',
    due_date DATE NOT NULL,
    paid_at TIMESTAMPTZ,
    invoice_pdf_path TEXT,      -- Path di Supabase Storage
    payment_proof_path TEXT,    -- Bukti transfer yang diunggah klien
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==========================================
-- 7. TABEL ASYNC QUEUE JOBS (SIAKAD PDF & Webhook Monitor)
-- ==========================================
CREATE TABLE public.async_queue_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    job_type TEXT NOT NULL,     -- Contoh: 'SIAKAD_PDF_REPORT', 'WA_WEBHOOK_DISPATCH', 'STOCK_SYNC'
    payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    status job_status NOT NULL DEFAULT 'queued',
    retry_count INTEGER NOT NULL DEFAULT 0,
    max_retries INTEGER NOT NULL DEFAULT 5,
    execution_latency_ms INTEGER,
    output_file_path TEXT,      -- Lokasi PDF hasil render di Supabase Storage
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

## 2. Row Level Security (RLS) Policies

```sql
-- Aktifkan RLS di semua tabel
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.async_queue_jobs ENABLE ROW LEVEL SECURITY;

-- Helper function untuk mengecek apakah user saat ini adalah Admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- POLICIES: PROFILES
CREATE POLICY "Users can view own profile or Admin views all"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "Users can update own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

-- POLICIES: LEADS
-- Pengunjung anonim/publik dapat mengirim lead via Server Action, namun hanya Admin yang bisa membaca
CREATE POLICY "Anyone can insert leads"
    ON public.leads FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Only admin can view leads"
    ON public.leads FOR SELECT
    USING (public.is_admin());

-- POLICIES: PROJECTS
CREATE POLICY "Clients view own projects, Admin views all"
    ON public.projects FOR SELECT
    USING (client_id = auth.uid() OR public.is_admin());

CREATE POLICY "Only admin can mutate projects"
    ON public.projects FOR ALL
    USING (public.is_admin());

-- POLICIES: PROJECT MILESTONES
CREATE POLICY "Clients view milestones of own projects"
    ON public.project_milestones FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.projects p
            WHERE p.id = project_milestones.project_id
            AND (p.client_id = auth.uid() OR public.is_admin())
        )
    );

-- POLICIES: INVOICES
CREATE POLICY "Clients view own invoices, Admin views all"
    ON public.invoices FOR SELECT
    USING (client_id = auth.uid() OR public.is_admin());

CREATE POLICY "Clients can upload payment proof to own invoice"
    ON public.invoices FOR UPDATE
    USING (client_id = auth.uid())
    WITH CHECK (client_id = auth.uid());

-- POLICIES: ASYNC QUEUE JOBS
CREATE POLICY "Clients view jobs linked to own projects, Admin views all"
    ON public.async_queue_jobs FOR SELECT
    USING (
        public.is_admin() OR
        EXISTS (
            SELECT 1 FROM public.projects p
            WHERE p.id = async_queue_jobs.project_id
            AND p.client_id = auth.uid()
        )
    );
```

---

## 3. Trigger Otomatis Pembuatan Profil & Realtime

```sql
-- Otomatis buat baris di public.profiles saat user mendaftar di Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    'client'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Aktifkan Supabase Realtime untuk tabel yang membutuhkan live sync di Portal
ALTER PUBLICATION supabase_realtime ADD TABLE public.projects;
ALTER PUBLICATION supabase_realtime ADD TABLE public.project_milestones;
ALTER PUBLICATION supabase_realtime ADD TABLE public.async_queue_jobs;
```

---

## 4. Konfigurasi Supabase Storage Buckets

Buat 3 *Private Buckets* melalui dashboard atau migrasi SQL:
1. `siakad-reports`: Menyimpan hasil render PDF rapor otomatis (Akses baca via *Signed URL* berdurasi $60\text{ menit}$).
2. `invoices-pdf`: Menyimpan dokumen tagihan resmi dan bukti transfer klien.
3. `project-assets`: Menyimpan dokumen kontrak, *blueprint* arsitektur, dan aset klien.