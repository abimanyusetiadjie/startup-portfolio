"use client";

import { useCallback, useEffect, useState } from "react";
import type { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import type { Tables } from "@/types/database.types";

export type ProjectRow = Tables<"projects">;
export type MilestoneRow = Tables<"project_milestones">;

export type RealtimeConnectionState =
  | "CONNECTING"
  | "SUBSCRIBED"
  | "SIMULATION_ACTIVE"
  | "DISCONNECTED";

const DEFAULT_DEMO_PROJECT: ProjectRow = {
  id: "proj-alazhar-siakad-01",
  client_id: "client-alazhar-01",
  name: "Implementasi SIAKAD Modern Yayasan Al-Azhar",
  slug: "implementasi-siakad-modern-yayasan-al-azhar",
  pillar: "custom_siakad_erp",
  status: "qa_testing",
  progress_percentage: 83,
  uptime_sla: 99.98,
  repository_url: "https://github.com/triloe-studio/siakad-core-alazhar",
  staging_url: "https://staging.siakad-alazhar.triloe.id",
  production_url: "https://siakad.alazhar-terpadu.sch.id",
  start_date: "2026-09-01",
  target_end_date: "2026-11-30",
  created_at: "2026-09-01T08:00:00.000Z",
  updated_at: "2026-11-05T03:30:00.000Z",
};

const DEFAULT_DEMO_MILESTONES: MilestoneRow[] = [
  {
    id: "ms-01",
    project_id: "proj-alazhar-siakad-01",
    title: "Arsitektur Database Terpisah & Kebijakan PostgreSQL RLS",
    description:
      "Isolasi penuh skema Administrasi/SPP dari LMS/Ujian beserta kebijakan RLS untuk Admin, Guru, dan Siswa.",
    is_completed: true,
    completed_at: "2026-09-14T10:15:00.000Z",
    sort_order: 1,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-09-14T10:15:00.000Z",
  },
  {
    id: "ms-02",
    project_id: "proj-alazhar-siakad-01",
    title: "Modul Akademik, Penilaian Kurikulum Merdeka & Absensi",
    description:
      "Dashboard input nilai guru dengan validasi skema ketat dan sinkronisasi instan.",
    is_completed: true,
    completed_at: "2026-10-02T14:20:00.000Z",
    sort_order: 2,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-10-02T14:20:00.000Z",
  },
  {
    id: "ms-03",
    project_id: "proj-alazhar-siakad-01",
    title: "Parallel PDF Report Engine (Upstash QStash + Supabase Storage)",
    description:
      "Worker asinkron pencetak 500+ PDF rapor paralel di bawah 45 detik dengan proteksi Signed URL 60 menit.",
    is_completed: true,
    completed_at: "2026-10-19T16:45:00.000Z",
    sort_order: 3,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-10-19T16:45:00.000Z",
  },
  {
    id: "ms-04",
    project_id: "proj-alazhar-siakad-01",
    title: "Integrasi WhatsApp Notification Gateway & Payment VA/QRIS",
    description:
      "Pengiriman notifikasi tagihan SPP otomatis dan rekonsiliasi pembayaran real-time.",
    is_completed: true,
    completed_at: "2026-10-29T11:10:00.000Z",
    sort_order: 4,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-10-29T11:10:00.000Z",
  },
  {
    id: "ms-05",
    project_id: "proj-alazhar-siakad-01",
    title: "Load Testing 2.500 Siswa Serentak & Security Audit",
    description:
      "Simulasi beban puncak ujian semester serentak dengan target 0% crash dan latensi API <100ms.",
    is_completed: true,
    completed_at: "2026-11-03T09:30:00.000Z",
    sort_order: 5,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-11-03T09:30:00.000Z",
  },
  {
    id: "ms-06",
    project_id: "proj-alazhar-siakad-01",
    title: "Deployment Produksi Multi-Kampus & Serah Terima Dokumentasi",
    description:
      "Peluncuran penuh ke domain produksi yayasan beserta pelatihan tim IT internal.",
    is_completed: false,
    completed_at: null,
    sort_order: 6,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-11-05T03:30:00.000Z",
  },
];

function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return (
    Boolean(url) &&
    Boolean(anonKey) &&
    !url?.includes("your-project-id") &&
    !anonKey?.startsWith("your-")
  );
}

export function useRealtimeProject(
  initialProjectId: string = DEFAULT_DEMO_PROJECT.id
) {
  const [project, setProject] = useState<ProjectRow>(DEFAULT_DEMO_PROJECT);
  const [milestones, setMilestones] = useState<MilestoneRow[]>(
    DEFAULT_DEMO_MILESTONES
  );
  const [connectionState, setConnectionState] =
    useState<RealtimeConnectionState>("CONNECTING");
  const [lastSyncAt, setLastSyncAt] = useState<string>(
    new Date().toISOString()
  );

  // Recalculate progress helper
  const recalculateProgress = useCallback((items: MilestoneRow[]): number => {
    if (items.length === 0) return 0;
    const completedCount = items.filter((m) => m.is_completed).length;
    return Math.round((completedCount / items.length) * 100);
  }, []);

  // Toggle milestone completion (untuk demonstrasi interaktif maupun sinkronisasi)
  const toggleMilestoneCompletion = useCallback(
    (milestoneId: string) => {
      setMilestones((prev) => {
        const updated = prev.map((ms) => {
          if (ms.id !== milestoneId) return ms;
          const nextCompleted = !ms.is_completed;
          return {
            ...ms,
            is_completed: nextCompleted,
            completed_at: nextCompleted ? new Date().toISOString() : null,
            updated_at: new Date().toISOString(),
          };
        });

        const nextProgress = recalculateProgress(updated);
        setProject((prevProj) => ({
          ...prevProj,
          progress_percentage: nextProgress,
          status: nextProgress === 100 ? "deployed" : "qa_testing",
          updated_at: new Date().toISOString(),
        }));
        setLastSyncAt(new Date().toISOString());

        return updated;
      });
    },
    [recalculateProgress]
  );

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setConnectionState("SIMULATION_ACTIVE");
      return;
    }

    const supabase = createClient();

    // Muat data awal proyek & milestone dari Supabase jika tersedia
    async function loadInitialProjectData() {
      try {
        const { data: projData } = await supabase
          .from("projects")
          .select("*")
          .eq("id", initialProjectId)
          .single();

        if (projData) {
          setProject(projData);
        }

        const { data: msData } = await supabase
          .from("project_milestones")
          .select("*")
          .eq("project_id", initialProjectId)
          .order("sort_order", { ascending: true });

        if (msData && msData.length > 0) {
          setMilestones(msData);
        }
      } catch {
        // Pertahankan data demo default bila belum ada baris dengan ID tersebut
      }
    }

    void loadInitialProjectData();

    // Berlangganan postgres_changes pada tabel `projects` dan `project_milestones`
    const channel = supabase
      .channel(`realtime-project-${initialProjectId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "projects",
          filter: `id=eq.${initialProjectId}`,
        },
        (payload: RealtimePostgresChangesPayload<ProjectRow>) => {
          if (
            payload.eventType === "UPDATE" ||
            payload.eventType === "INSERT"
          ) {
            setProject(payload.new);
            setLastSyncAt(new Date().toISOString());
          }
        }
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "project_milestones",
          filter: `project_id=eq.${initialProjectId}`,
        },
        (payload: RealtimePostgresChangesPayload<MilestoneRow>) => {
          setLastSyncAt(new Date().toISOString());

          if (payload.eventType === "INSERT") {
            setMilestones((prev) =>
              [...prev, payload.new].sort((a, b) => a.sort_order - b.sort_order)
            );
          } else if (payload.eventType === "UPDATE") {
            setMilestones((prev) =>
              prev.map((ms) => (ms.id === payload.new.id ? payload.new : ms))
            );
          } else if (payload.eventType === "DELETE") {
            const deletedId = payload.old.id;
            if (deletedId) {
              setMilestones((prev) => prev.filter((ms) => ms.id !== deletedId));
            }
          }
        }
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          setConnectionState("SUBSCRIBED");
        } else if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          setConnectionState("SIMULATION_ACTIVE");
        }
      });

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [initialProjectId]);

  return {
    project,
    milestones,
    connectionState,
    lastSyncAt,
    toggleMilestoneCompletion,
  };
}
