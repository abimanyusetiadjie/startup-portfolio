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
  id: "proj-logistik-erp-01",
  client_id: "client-logistik-01",
  name: "Implementasi Sistem ERP Kustom & Supply Chain PT Logistik Nusantara",
  slug: "implementasi-erp-kustom-logistik-nusantara",
  pillar: "custom_enterprise_erp",
  status: "qa_testing",
  progress_percentage: 88,
  uptime_sla: 99.99,
  repository_url: "https://github.com/abinest/erp-core-logistik-nusantara",
  staging_url: "https://staging.erp.logistiknusantara.id",
  production_url: "https://erp.logistiknusantara.id",
  start_date: "2026-09-01",
  target_end_date: "2026-11-30",
  created_at: "2026-09-01T08:00:00.000Z",
  updated_at: "2026-11-05T03:30:00.000Z",
};

const DEFAULT_DEMO_MILESTONES: MilestoneRow[] = [
  {
    id: "ms-01",
    project_id: "proj-logistik-erp-01",
    title: "Arsitektur PostgreSQL Multi-Warehouse & Role-Based Access Control (RBAC)",
    description:
      "Isolasi hak akses bertingkat untuk Direksi, Kepala Gudang, Staff Finance, dan Tim Lapangan.",
    is_completed: true,
    completed_at: "2026-09-14T10:15:00.000Z",
    sort_order: 1,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-09-14T10:15:00.000Z",
  },
  {
    id: "ms-02",
    project_id: "proj-logistik-erp-01",
    title: "Modul Sinkronisasi Inventori 18.000 SKU & Latensi <35ms",
    description:
      "Sinkronisasi real-time stok antar 4 gudang cabang Jakarta, Surabaya, Bandung, & Semarang.",
    is_completed: true,
    completed_at: "2026-10-02T14:20:00.000Z",
    sort_order: 2,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-10-02T14:20:00.000Z",
  },
  {
    id: "ms-03",
    project_id: "proj-logistik-erp-01",
    title: "Pipeline Document AI Invoice OCR & Rekonsiliasi Otomatis",
    description:
      "Ekstraksi faktur supplier otomatis dengan akurasi 99.7% memangkas waktu kerja manual finance.",
    is_completed: true,
    completed_at: "2026-10-19T16:45:00.000Z",
    sort_order: 3,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-10-19T16:45:00.000Z",
  },
  {
    id: "ms-04",
    project_id: "proj-logistik-erp-01",
    title: "Integrasi WhatsApp Meta Cloud API Resmi & Notifikasi Dispatch",
    description:
      "Notifikasi status pengiriman kontainer otomatis ke nomor WhatsApp klien korporat secara instan.",
    is_completed: true,
    completed_at: "2026-10-29T11:10:00.000Z",
    sort_order: 4,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-10-29T11:10:00.000Z",
  },
  {
    id: "ms-05",
    project_id: "proj-logistik-erp-01",
    title: "Automated Load Testing 10.000 Transaksi Serentak & Security Audit",
    description:
      "Simulasi lonjakan beban transaksi order masif dengan target 0% downtime dan SLA 99.99%.",
    is_completed: true,
    completed_at: "2026-11-03T09:30:00.000Z",
    sort_order: 5,
    created_at: "2026-09-01T08:00:00.000Z",
    updated_at: "2026-11-03T09:30:00.000Z",
  },
  {
    id: "ms-06",
    project_id: "proj-logistik-erp-01",
    title: "Deployment Cloud High-Availability & Handover 100% Source Code",
    description:
      "Peluncuran produksi resmi, transfer kepemilikan repository GitHub, dan pelatihan staf operasional.",
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
