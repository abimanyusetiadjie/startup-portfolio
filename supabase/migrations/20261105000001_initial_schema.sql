-- ============================================================================
-- MIGRATION: 20261105000001_initial_schema.sql
-- DESKRIPSI: Skema Database Awal, Custom ENUMs, Indexes, Triggers, RLS Policies,
--            Supabase Realtime Publication, dan Storage Buckets & Policies.
-- ============================================================================

-- Aktifkan ekstensi standar
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 1. CUSTOM ENUMS
-- ============================================================================
DO $$ BEGIN
    CREATE TYPE public.user_role AS ENUM ('admin', 'client', 'teacher', 'student');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.lead_status AS ENUM ('new', 'contacted', 'qualified', 'proposal', 'won', 'lost');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.service_pillar AS ENUM ('high_perf_web', 'custom_siakad_erp', 'business_automation');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.project_status AS ENUM ('discovery', 'architecture', 'development', 'qa_testing', 'deployed', 'maintenance');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.invoice_status AS ENUM ('draft', 'unpaid', 'paid', 'overdue', 'cancelled');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.job_status AS ENUM ('queued', 'processing', 'completed', 'failed_retrying', 'dead_letter');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- ============================================================================
-- 2. TABEL UTAMA
-- ============================================================================

-- 2.1 TABEL PROFILES (Terhubung ke auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    company_name TEXT,
    role public.user_role NOT NULL DEFAULT 'client',
    whatsapp_number TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.2 TABEL LEADS (Fitur Live Demo WhatsApp di Landing Page)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    institution_name TEXT NOT NULL,
    whatsapp_number TEXT NOT NULL,
    email TEXT,
    interested_pillar public.service_pillar NOT NULL,
    project_brief TEXT,
    status public.lead_status NOT NULL DEFAULT 'new',
    wa_notification_sent BOOLEAN NOT NULL DEFAULT FALSE,
    wa_sent_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.3 TABEL PROJECTS (Dipantau di Client Portal Polaris)
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    pillar public.service_pillar NOT NULL,
    status public.project_status NOT NULL DEFAULT 'discovery',
    progress_percentage INTEGER NOT NULL DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
    uptime_sla NUMERIC(5,2) NOT NULL DEFAULT 99.90,
    repository_url TEXT,
    staging_url TEXT,
    production_url TEXT,
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    target_end_date DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.4 TABEL PROJECT MILESTONES
CREATE TABLE IF NOT EXISTS public.project_milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    sort_order INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.5 TABEL INVOICES (Tagihan Klien)
CREATE TABLE IF NOT EXISTS public.invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_number TEXT UNIQUE NOT NULL,
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    client_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    amount_idr BIGINT NOT NULL CHECK (amount_idr >= 0),
    status public.invoice_status NOT NULL DEFAULT 'unpaid',
    due_date DATE NOT NULL,
    paid_at TIMESTAMPTZ,
    invoice_pdf_path TEXT,      -- Path di Supabase Storage (bucket: invoices-pdf)
    payment_proof_path TEXT,    -- Bukti transfer yang diunggah klien
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.6 TABEL REPORT GENERATION JOBS (SIAKAD Parallel PDF Engine)
CREATE TABLE IF NOT EXISTS public.report_generation_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    requested_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    academic_term TEXT NOT NULL,
    student_identifier TEXT NOT NULL,
    student_name TEXT NOT NULL,
    processed_students INTEGER NOT NULL DEFAULT 0,
    total_students INTEGER NOT NULL DEFAULT 1,
    status public.job_status NOT NULL DEFAULT 'queued',
    retry_count INTEGER NOT NULL DEFAULT 0,
    max_retries INTEGER NOT NULL DEFAULT 5,
    execution_latency_ms INTEGER,
    pdf_storage_path TEXT,      -- Lokasi PDF hasil render di bucket siakad-reports
    qstash_message_id TEXT,
    error_message TEXT,
    payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.7 TABEL WEBHOOK LOGS (Resilient Webhook Dispatcher & Exponential Backoff)
CREATE TABLE IF NOT EXISTS public.webhook_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    channel TEXT NOT NULL,      -- 'whatsapp', 'qstash_pdf', 'payment_gateway', 'omnichannel_sync'
    event_type TEXT NOT NULL,
    endpoint_url TEXT NOT NULL,
    request_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    response_status INTEGER,
    response_body JSONB,
    status public.job_status NOT NULL DEFAULT 'queued',
    attempt_count INTEGER NOT NULL DEFAULT 1,
    max_attempts INTEGER NOT NULL DEFAULT 5,
    next_retry_at TIMESTAMPTZ,
    latency_ms INTEGER,
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.8 TABEL CASE STUDIES (Showcase Studi Kasus Unggulan di Landing Page)
CREATE TABLE IF NOT EXISTS public.case_studies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    client_industry TEXT NOT NULL,
    pillar public.service_pillar NOT NULL,
    challenge_summary TEXT NOT NULL,
    architecture_solution TEXT NOT NULL,
    impact_metrics JSONB NOT NULL DEFAULT '[]'::jsonb,
    tech_stack TEXT[] NOT NULL DEFAULT '{}',
    diagram_schema JSONB NOT NULL DEFAULT '{}'::jsonb,
    cover_image_url TEXT,
    is_featured BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order INTEGER NOT NULL DEFAULT 1,
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2.9 TABEL ASYNC QUEUE JOBS (Unified Queue Monitor sesuai schema.md)
CREATE TABLE IF NOT EXISTS public.async_queue_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    job_type TEXT NOT NULL,     -- Contoh: 'SIAKAD_PDF_REPORT', 'WA_WEBHOOK_DISPATCH', 'STOCK_SYNC'
    payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    status public.job_status NOT NULL DEFAULT 'queued',
    retry_count INTEGER NOT NULL DEFAULT 0,
    max_retries INTEGER NOT NULL DEFAULT 5,
    execution_latency_ms INTEGER,
    output_file_path TEXT,
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 3. INDEXES UNTUK OPTIMASI QUERY
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_leads_status_created ON public.leads(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_pillar ON public.leads(interested_pillar);
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON public.projects(client_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);
CREATE INDEX IF NOT EXISTS idx_project_milestones_project_sort ON public.project_milestones(project_id, sort_order ASC);
CREATE INDEX IF NOT EXISTS idx_invoices_client_status ON public.invoices(client_id, status);
CREATE INDEX IF NOT EXISTS idx_invoices_project_id ON public.invoices(project_id);
CREATE INDEX IF NOT EXISTS idx_report_jobs_project_status ON public.report_generation_jobs(project_id, status);
CREATE INDEX IF NOT EXISTS idx_report_jobs_requested_by ON public.report_generation_jobs(requested_by);
CREATE INDEX IF NOT EXISTS idx_webhook_logs_status_retry ON public.webhook_logs(status, next_retry_at);
CREATE INDEX IF NOT EXISTS idx_webhook_logs_project_id ON public.webhook_logs(project_id);
CREATE INDEX IF NOT EXISTS idx_case_studies_featured_sort ON public.case_studies(is_featured, sort_order ASC);
CREATE INDEX IF NOT EXISTS idx_async_queue_jobs_project_status ON public.async_queue_jobs(project_id, status);

-- ============================================================================
-- 4. HELPER FUNCTIONS & TRIGGERS
-- ============================================================================

-- 4.1 Trigger Function: Otomatis perbarui kolom updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Pasang trigger handle_updated_at pada seluruh tabel yang memiliki updated_at
CREATE TRIGGER set_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_leads_updated_at
    BEFORE UPDATE ON public.leads
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_projects_updated_at
    BEFORE UPDATE ON public.projects
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_project_milestones_updated_at
    BEFORE UPDATE ON public.project_milestones
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_invoices_updated_at
    BEFORE UPDATE ON public.invoices
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_report_generation_jobs_updated_at
    BEFORE UPDATE ON public.report_generation_jobs
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_webhook_logs_updated_at
    BEFORE UPDATE ON public.webhook_logs
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_case_studies_updated_at
    BEFORE UPDATE ON public.case_studies
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_async_queue_jobs_updated_at
    BEFORE UPDATE ON public.async_queue_jobs
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 4.2 Trigger Function: Otomatis buat baris di public.profiles saat user mendaftar di Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, company_name, role, whatsapp_number, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1), 'Client User'),
        NEW.raw_user_meta_data->>'company_name',
        COALESCE((NEW.raw_user_meta_data->>'role')::public.user_role, 'client'::public.user_role),
        NEW.raw_user_meta_data->>'whatsapp_number',
        NEW.raw_user_meta_data->>'avatar_url'
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4.3 Helper Function: Ambil role pengguna saat ini secara aman (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS public.user_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

-- 4.4 Helper Function: Cek apakah pengguna saat ini adalah Admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    );
$$;

-- ============================================================================
-- 5. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.report_generation_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webhook_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.async_queue_jobs ENABLE ROW LEVEL SECURITY;

-- 5.1 POLICIES: PROFILES
CREATE POLICY "Users can view own profile or Admin views all"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "Users can update own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can manage all profiles"
    ON public.profiles FOR ALL
    USING (public.is_admin());

-- 5.2 POLICIES: LEADS
CREATE POLICY "Anyone can insert leads"
    ON public.leads FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Only admin can view leads"
    ON public.leads FOR SELECT
    USING (public.is_admin());

CREATE POLICY "Only admin can update or delete leads"
    ON public.leads FOR ALL
    USING (public.is_admin());

-- 5.3 POLICIES: PROJECTS
CREATE POLICY "Clients view own projects, Admin views all"
    ON public.projects FOR SELECT
    USING (client_id = auth.uid() OR public.is_admin());

CREATE POLICY "Only admin can mutate projects"
    ON public.projects FOR ALL
    USING (public.is_admin());

-- 5.4 POLICIES: PROJECT MILESTONES
CREATE POLICY "Clients view milestones of own projects, Admin views all"
    ON public.project_milestones FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.projects p
            WHERE p.id = project_milestones.project_id
            AND (p.client_id = auth.uid() OR public.is_admin())
        )
    );

CREATE POLICY "Only admin can mutate project milestones"
    ON public.project_milestones FOR ALL
    USING (public.is_admin());

-- 5.5 POLICIES: INVOICES
CREATE POLICY "Clients view own invoices, Admin views all"
    ON public.invoices FOR SELECT
    USING (client_id = auth.uid() OR public.is_admin());

CREATE POLICY "Clients can upload payment proof to own invoice"
    ON public.invoices FOR UPDATE
    USING (client_id = auth.uid())
    WITH CHECK (client_id = auth.uid());

CREATE POLICY "Only admin can insert or delete invoices"
    ON public.invoices FOR ALL
    USING (public.is_admin());

-- 5.6 POLICIES: REPORT GENERATION JOBS
CREATE POLICY "Authorized users view report generation jobs"
    ON public.report_generation_jobs FOR SELECT
    USING (
        public.is_admin()
        OR requested_by = auth.uid()
        OR public.get_user_role() IN ('teacher', 'student')
        OR EXISTS (
            SELECT 1 FROM public.projects p
            WHERE p.id = report_generation_jobs.project_id
            AND p.client_id = auth.uid()
        )
    );

CREATE POLICY "Teachers, Clients, and Admins can enqueue report jobs"
    ON public.report_generation_jobs FOR INSERT
    WITH CHECK (
        public.is_admin()
        OR public.get_user_role() IN ('client', 'teacher')
    );

CREATE POLICY "Only admin can mutate report jobs"
    ON public.report_generation_jobs FOR ALL
    USING (public.is_admin());

-- 5.7 POLICIES: WEBHOOK LOGS
CREATE POLICY "Clients view webhook logs of own projects, Admin views all"
    ON public.webhook_logs FOR SELECT
    USING (
        public.is_admin()
        OR EXISTS (
            SELECT 1 FROM public.projects p
            WHERE p.id = webhook_logs.project_id
            AND p.client_id = auth.uid()
        )
    );

CREATE POLICY "Only admin can mutate webhook logs"
    ON public.webhook_logs FOR ALL
    USING (public.is_admin());

-- 5.8 POLICIES: CASE STUDIES
CREATE POLICY "Anyone can view published case studies"
    ON public.case_studies FOR SELECT
    USING (true);

CREATE POLICY "Only admin can mutate case studies"
    ON public.case_studies FOR ALL
    USING (public.is_admin());

-- 5.9 POLICIES: ASYNC QUEUE JOBS
CREATE POLICY "Clients view jobs linked to own projects, Admin views all"
    ON public.async_queue_jobs FOR SELECT
    USING (
        public.is_admin()
        OR EXISTS (
            SELECT 1 FROM public.projects p
            WHERE p.id = async_queue_jobs.project_id
            AND p.client_id = auth.uid()
        )
    );

CREATE POLICY "Only admin can mutate async queue jobs"
    ON public.async_queue_jobs FOR ALL
    USING (public.is_admin());

-- ============================================================================
-- 6. SUPABASE REALTIME PUBLICATION
-- ============================================================================
ALTER PUBLICATION supabase_realtime ADD TABLE public.projects;
ALTER PUBLICATION supabase_realtime ADD TABLE public.project_milestones;
ALTER PUBLICATION supabase_realtime ADD TABLE public.report_generation_jobs;
ALTER PUBLICATION supabase_realtime ADD TABLE public.webhook_logs;
ALTER PUBLICATION supabase_realtime ADD TABLE public.async_queue_jobs;

-- ============================================================================
-- 7. SUPABASE STORAGE BUCKETS & RLS POLICIES
-- ============================================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
    ('project-deliverables', 'project-deliverables', false, 52428800, ARRAY['application/pdf', 'application/zip', 'image/png', 'image/jpeg', 'image/webp']),
    ('invoices-pdf', 'invoices-pdf', false, 10485760, ARRAY['application/pdf', 'image/png', 'image/jpeg', 'image/webp']),
    ('siakad-reports', 'siakad-reports', false, 10485760, ARRAY['application/pdf']),
    ('public-portfolio', 'public-portfolio', true, 10485760, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'])
ON CONFLICT (id) DO NOTHING;

-- 7.1 Policy untuk Bucket: public-portfolio (Publik bisa melihat, hanya Admin yang bisa mengunggah/menghapus)
CREATE POLICY "Public can view portfolio assets"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'public-portfolio');

CREATE POLICY "Admin can manage portfolio assets"
    ON storage.objects FOR ALL
    USING (bucket_id = 'public-portfolio' AND public.is_admin())
    WITH CHECK (bucket_id = 'public-portfolio' AND public.is_admin());

-- 7.2 Policy untuk Bucket: project-deliverables (Klien pemilik folder / Admin)
CREATE POLICY "Authenticated clients and admins can view project deliverables"
    ON storage.objects FOR SELECT
    USING (
        bucket_id = 'project-deliverables'
        AND (
            public.is_admin()
            OR (storage.foldername(name))[1] = auth.uid()::text
        )
    );

CREATE POLICY "Admin can manage project deliverables"
    ON storage.objects FOR ALL
    USING (bucket_id = 'project-deliverables' AND public.is_admin())
    WITH CHECK (bucket_id = 'project-deliverables' AND public.is_admin());

-- 7.3 Policy untuk Bucket: invoices-pdf (Klien membaca invoice & mengunggah bukti bayar di folder miliknya / Admin)
CREATE POLICY "Clients and admins can view invoices pdf"
    ON storage.objects FOR SELECT
    USING (
        bucket_id = 'invoices-pdf'
        AND (
            public.is_admin()
            OR (storage.foldername(name))[1] = auth.uid()::text
        )
    );

CREATE POLICY "Clients can upload payment proof to own folder in invoices-pdf"
    ON storage.objects FOR INSERT
    WITH CHECK (
        bucket_id = 'invoices-pdf'
        AND (
            public.is_admin()
            OR (storage.foldername(name))[1] = auth.uid()::text
        )
    );

CREATE POLICY "Admin can manage all invoices pdf"
    ON storage.objects FOR ALL
    USING (bucket_id = 'invoices-pdf' AND public.is_admin())
    WITH CHECK (bucket_id = 'invoices-pdf' AND public.is_admin());

-- 7.4 Policy untuk Bucket: siakad-reports (Admin, Teacher, Student, dan Client terkait)
CREATE POLICY "Authorized users can view siakad reports"
    ON storage.objects FOR SELECT
    USING (
        bucket_id = 'siakad-reports'
        AND (
            public.is_admin()
            OR public.get_user_role() IN ('teacher', 'student', 'client')
        )
    );

CREATE POLICY "Admin and teachers can upload siakad reports"
    ON storage.objects FOR INSERT
    WITH CHECK (
        bucket_id = 'siakad-reports'
        AND (
            public.is_admin()
            OR public.get_user_role() = 'teacher'
        )
    );
