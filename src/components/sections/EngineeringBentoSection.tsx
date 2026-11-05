"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  FileCheck2,
  LayoutDashboard,
  Lock,
  Radio,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const bentoContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const bentoItemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

type RoleKey = "Admin" | "Guru" | "Siswa" | "Klien";

interface RoleRlsSpec {
  role: RoleKey;
  badge: string;
  permissions: {
    resource: string;
    access: string;
    allowed: boolean;
  }[];
  sqlSnippet: string;
}

const RLS_ROLE_MATRIX: Record<RoleKey, RoleRlsSpec> = {
  Admin: {
    role: "Admin",
    badge: "FULL SYSTEM GOVERNANCE",
    permissions: [
      { resource: "public.projects & invoices", access: "SELECT / ALL", allowed: true },
      { resource: "public.report_generation_jobs", access: "SELECT / ALL", allowed: true },
      { resource: "public.webhook_logs & leads", access: "SELECT / ALL", allowed: true },
    ],
    sqlSnippet: `CREATE POLICY "Admin views & mutates all records"
ON public.projects FOR ALL
USING (public.is_admin());`,
  },
  Guru: {
    role: "Guru",
    badge: "ACADEMIC & PDF WORKER ACCESS",
    permissions: [
      { resource: "public.report_generation_jobs", access: "INSERT / SELECT", allowed: true },
      { resource: "storage.siakad-reports", access: "UPLOAD / READ", allowed: true },
      { resource: "public.invoices (Billing Klien)", access: "BLOCKED BY RLS", allowed: false },
    ],
    sqlSnippet: `CREATE POLICY "Teachers enqueue & view SIAKAD PDF jobs"
ON public.report_generation_jobs FOR INSERT
WITH CHECK (public.get_user_role() IN ('admin', 'teacher'));`,
  },
  Siswa: {
    role: "Siswa",
    badge: "READ-ONLY SIGNED REPORT",
    permissions: [
      { resource: "storage.siakad-reports (Milik Sendiri)", access: "SIGNED URL (60m)", allowed: true },
      { resource: "public.report_generation_jobs", access: "SELECT OWN", allowed: true },
      { resource: "public.projects & webhook_logs", access: "BLOCKED BY RLS", allowed: false },
    ],
    sqlSnippet: `CREATE POLICY "Students view own academic report"
ON storage.objects FOR SELECT
USING (bucket_id = 'siakad-reports' AND auth.uid() = owner);`,
  },
  Klien: {
    role: "Klien",
    badge: "ISOLATED TENANT PORTAL",
    permissions: [
      { resource: "public.projects (client_id = uid)", access: "SELECT REALTIME", allowed: true },
      { resource: "public.invoices (Upload Bukti Bayar)", access: "SELECT / UPDATE", allowed: true },
      { resource: "Data Proyek Organisasi Lain", access: "BLOCKED BY RLS", allowed: false },
    ],
    sqlSnippet: `CREATE POLICY "Clients view own projects & milestones"
ON public.projects FOR SELECT
USING (client_id = auth.uid() OR public.is_admin());`,
  },
};

const REALTIME_MILESTONES = [
  {
    id: "ms-1",
    title: "Database Schema & RLS Isolation",
    status: "Completed",
    latency: "18ms",
    progress: 100,
  },
  {
    id: "ms-2",
    title: "Parallel PDF QStash Worker Pipeline",
    status: "Completed",
    latency: "24ms",
    progress: 100,
  },
  {
    id: "ms-3",
    title: "Omnichannel Webhook & WA Gateway",
    status: "Live Syncing",
    latency: "31ms",
    progress: 85,
  },
] as const;

export function EngineeringBentoSection() {
  const [selectedRole, setSelectedRole] = useState<RoleKey>("Klien");
  const currentRls = RLS_ROLE_MATRIX[selectedRole];

  return (
    <section
      id="arsitektur"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-4">
            <Cpu className="h-3.5 w-3.5 text-[#2563EB]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#09090B]">
              KEUNGGULAN REKAYASA SISTEM
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#09090B]">
            Arsitektur Kelas Produksi dengan{" "}
            <span className="text-[#2563EB]">Transparansi Penuh</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Empat pilar rekayasa teknis yang membedakan infrastruktur kami dari
            pengembangan web konvensional.
          </p>
        </motion.div>

        {/* Asymmetric 12-Column Bento Grid */}
        <motion.div
          variants={bentoContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* BENTO ITEM 1 (md:col-span-7): RLS Multi-Role Data Protection */}
          <motion.div
            variants={bentoItemVariants}
            className="md:col-span-7 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-triloe-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  PostgreSQL Row Level Security (RLS)
                </span>
                <span className="font-mono text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full">
                  100% Tenant Isolation
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#09090B]">
                RLS Multi-Role Data Protection
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#64748B] leading-relaxed">
                Otorisasi dieksekusi langsung di level mesin database PostgreSQL.
                Pilih peran di bawah untuk melihat simulasi matriks akses dan
                kebijakan SQL aktif:
              </p>

              {/* Interactive Role Selector Pills */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {(Object.keys(RLS_ROLE_MATRIX) as RoleKey[]).map((role) => {
                  const isActive = selectedRole === role;
                  return (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setSelectedRole(role)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-[#2563EB] text-white shadow-sm"
                          : "bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB]"
                      }`}
                    >
                      Role: {role}
                    </button>
                  );
                })}
              </div>

              {/* Permission Matrix List */}
              <div className="mt-4 space-y-2">
                {currentRls.permissions.map((perm) => (
                  <div
                    key={perm.resource}
                    className="flex items-center justify-between gap-2 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2.5 text-xs"
                  >
                    <div className="flex items-center gap-2 font-mono text-[#09090B] truncate">
                      <Database className="h-3.5 w-3.5 text-[#2563EB] shrink-0" />
                      <span className="truncate">{perm.resource}</span>
                    </div>
                    <span
                      className={`font-mono font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${
                        perm.allowed
                          ? "bg-[#10B981]/15 text-[#10B981]"
                          : "bg-rose-500/10 text-rose-600"
                      }`}
                    >
                      {perm.access}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SQL Policy Code Block */}
            <div className="mt-5 rounded-2xl bg-[#0F172A] text-slate-200 p-4 border border-slate-800">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-[#10B981]" />
                  Active Policy ({currentRls.role})
                </span>
                <span className="text-[#10B981]">{currentRls.badge}</span>
              </div>
              <pre className="font-mono text-xs leading-relaxed text-blue-200 overflow-x-auto">
                <code>{currentRls.sqlSnippet}</code>
              </pre>
            </div>
          </motion.div>

          {/* BENTO ITEM 2 (md:col-span-5): Supabase Realtime Sync <50ms */}
          <motion.div
            variants={bentoItemVariants}
            className="md:col-span-5 rounded-3xl bg-[#0F172A] text-white p-6 sm:p-8 border border-slate-800 shadow-soft-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-xs font-semibold">
                  <Radio className="h-4 w-4 animate-pulse" />
                  WebSockets Channel
                </span>
                <span className="font-mono text-xs font-semibold text-white bg-slate-800 px-3 py-1 rounded-full">
                  &lt;50ms Latency
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
                Supabase Realtime Sync{" "}
                <span className="font-mono text-[#10B981]">&lt;50ms</span>
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Perubahan progres milestone proyek dan status antrean langsung
                tersinkronisasi ke layar klien tanpa perlu me-refresh halaman.
              </p>

              {/* Simulated Live Milestone Sync Cards */}
              <div className="mt-6 space-y-3">
                {REALTIME_MILESTONES.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-medium text-slate-100 truncate">
                        {item.title}
                      </span>
                      <span className="font-mono text-[11px] text-[#10B981] shrink-0">
                        {item.status} ({item.latency})
                      </span>
                    </div>
                    <div className="mt-2.5 w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          item.progress === 100
                            ? "bg-[#10B981]"
                            : "bg-[#2563EB]"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-[#10B981]">
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                postgres_changes: public.projects
              </span>
              <span>99.98% Socket SLA</span>
            </div>
          </motion.div>

          {/* BENTO ITEM 3 (md:col-span-5): Asynchronous Cloud Queue & PDF Worker */}
          <motion.div
            variants={bentoItemVariants}
            className="md:col-span-5 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-triloe-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold">
                  <Workflow className="h-4 w-4" />
                  Upstash QStash Pipeline
                </span>
                <span className="font-mono text-xs font-semibold text-[#09090B] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full">
                  500+ PDF / Batch
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#09090B]">
                Asynchronous Cloud Queue &amp; PDF Worker
              </h3>
              <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                Mencetak ratusan PDF rapor SIAKAD secara paralel di latar
                belakang tanpa membuat server utama mengalami <em>timeout</em>.
              </p>

              {/* Visual Pipeline Steps */}
              <div className="mt-6 space-y-2.5">
                <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-white font-mono font-semibold text-[11px]">
                      1
                    </span>
                    <span className="font-semibold text-[#09090B]">
                      Batch Enqueue (500+ Rapor)
                    </span>
                  </div>
                  <span className="font-mono text-[#64748B]">&lt; 15ms</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-white font-mono font-semibold text-[11px]">
                      2
                    </span>
                    <span className="font-semibold text-[#09090B]">
                      Parallel Edge PDF Workers
                    </span>
                  </div>
                  <span className="font-mono text-[#2563EB] font-semibold">
                    Auto-Retry 5x
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 p-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <FileCheck2 className="h-5 w-5 text-[#10B981]" />
                    <span className="font-semibold text-[#09090B]">
                      Supabase Storage (Signed URL)
                    </span>
                  </div>
                  <span className="font-mono font-semibold text-[#10B981]">
                    READY
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
              <span className="font-mono text-[#64748B]">
                Backoff: t_base * 2^attempt + jitter
              </span>
              <span className="font-mono font-semibold text-[#10B981]">
                0 Timeout
              </span>
            </div>
          </motion.div>

          {/* BENTO ITEM 4 (md:col-span-7): Enterprise Client Portal via Shopify Polaris */}
          <motion.div
            variants={bentoItemVariants}
            className="md:col-span-7 rounded-3xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-triloe-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F172A] text-white text-xs font-semibold">
                  <LayoutDashboard className="h-4 w-4 text-[#10B981]" />
                  Shopify Polaris Design System
                </span>
                <span className="font-mono text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full">
                  Route Group: /portal
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#09090B]">
                Enterprise Client Portal via Shopify Polaris
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#64748B] leading-relaxed">
                Setiap klien B2B mendapatkan akses ruang kerja khusus berbasis{" "}
                <strong className="text-[#09090B]">@shopify/polaris</strong>{" "}
                untuk memantau progres milestone secara real-time, mengunduh PDF
                invoice resmi, dan mengaudit log antrean otomatisasi.
              </p>

              {/* Mini Polaris Portal UI Preview */}
              <div className="mt-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                    <span className="font-heading text-xs sm:text-sm font-bold text-[#09090B]">
                      SIAKAD Yayasan Al-Azhar Terpadu • Sprint #04
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#10B981]/15 text-[#10B981]">
                    QA_TESTING • 88%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3.5">
                  <div className="rounded-xl bg-white border border-[#E2E8F0] p-3">
                    <div className="flex items-center justify-between text-xs text-[#64748B]">
                      <span>Milestone Aktif</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                    </div>
                    <p className="font-mono text-base font-semibold text-[#09090B] mt-1">
                      7 / 8 Selesai
                    </p>
                  </div>

                  <div className="rounded-xl bg-white border border-[#E2E8F0] p-3">
                    <div className="flex items-center justify-between text-xs text-[#64748B]">
                      <span>Status Invoice</span>
                      <Receipt className="h-3.5 w-3.5 text-[#2563EB]" />
                    </div>
                    <p className="font-mono text-base font-semibold text-[#09090B] mt-1">
                      INV-2026-041
                    </p>
                  </div>

                  <div className="rounded-xl bg-white border border-[#E2E8F0] p-3">
                    <div className="flex items-center justify-between text-xs text-[#64748B]">
                      <span>PDF Queue SLA</span>
                      <Activity className="h-3.5 w-3.5 text-[#10B981]" />
                    </div>
                    <p className="font-mono text-base font-semibold text-[#10B981] mt-1">
                      99.95% OK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-xs text-[#64748B]">
                Terisolasi penuh dari CSS publik menggunakan Next.js Route Groups
              </span>

              <Link
                href="/portal"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-xs sm:text-sm font-semibold hover:bg-[#2563EB] transition-colors shrink-0"
              >
                <span>Eksplorasi Client Portal (/portal)</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default EngineeringBentoSection;
