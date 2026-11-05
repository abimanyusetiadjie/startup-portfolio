export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = "admin" | "client" | "teacher" | "student";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "proposal"
  | "won"
  | "lost";

export type ServicePillar =
  | "high_perf_web"
  | "custom_siakad_erp"
  | "business_automation";

export type ProjectStatus =
  | "discovery"
  | "architecture"
  | "development"
  | "qa_testing"
  | "deployed"
  | "maintenance";

export type InvoiceStatus =
  | "draft"
  | "unpaid"
  | "paid"
  | "overdue"
  | "cancelled";

export type JobStatus =
  | "queued"
  | "processing"
  | "completed"
  | "failed_retrying"
  | "dead_letter";

export interface CaseStudyMetric {
  label: string;
  value: string;
  delta?: string;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string;
          company_name: string | null;
          role: UserRole;
          whatsapp_number: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          company_name?: string | null;
          role?: UserRole;
          whatsapp_number?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          company_name?: string | null;
          role?: UserRole;
          whatsapp_number?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      leads: {
        Row: {
          id: string;
          full_name: string;
          institution_name: string;
          whatsapp_number: string;
          email: string | null;
          interested_pillar: ServicePillar;
          project_brief: string | null;
          status: LeadStatus;
          wa_notification_sent: boolean;
          wa_sent_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          institution_name: string;
          whatsapp_number: string;
          email?: string | null;
          interested_pillar: ServicePillar;
          project_brief?: string | null;
          status?: LeadStatus;
          wa_notification_sent?: boolean;
          wa_sent_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          institution_name?: string;
          whatsapp_number?: string;
          email?: string | null;
          interested_pillar?: ServicePillar;
          project_brief?: string | null;
          status?: LeadStatus;
          wa_notification_sent?: boolean;
          wa_sent_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
          client_id: string;
          name: string;
          slug: string;
          pillar: ServicePillar;
          status: ProjectStatus;
          progress_percentage: number;
          uptime_sla: number;
          repository_url: string | null;
          staging_url: string | null;
          production_url: string | null;
          start_date: string;
          target_end_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          client_id: string;
          name: string;
          slug: string;
          pillar: ServicePillar;
          status?: ProjectStatus;
          progress_percentage?: number;
          uptime_sla?: number;
          repository_url?: string | null;
          staging_url?: string | null;
          production_url?: string | null;
          start_date?: string;
          target_end_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          client_id?: string;
          name?: string;
          slug?: string;
          pillar?: ServicePillar;
          status?: ProjectStatus;
          progress_percentage?: number;
          uptime_sla?: number;
          repository_url?: string | null;
          staging_url?: string | null;
          production_url?: string | null;
          start_date?: string;
          target_end_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      project_milestones: {
        Row: {
          id: string;
          project_id: string;
          title: string;
          description: string | null;
          is_completed: boolean;
          completed_at: string | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          title: string;
          description?: string | null;
          is_completed?: boolean;
          completed_at?: string | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          title?: string;
          description?: string | null;
          is_completed?: boolean;
          completed_at?: string | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_milestones_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          }
        ];
      };
      invoices: {
        Row: {
          id: string;
          invoice_number: string;
          project_id: string;
          client_id: string;
          amount_idr: number;
          status: InvoiceStatus;
          due_date: string;
          paid_at: string | null;
          invoice_pdf_path: string | null;
          payment_proof_path: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          invoice_number: string;
          project_id: string;
          client_id: string;
          amount_idr: number;
          status?: InvoiceStatus;
          due_date: string;
          paid_at?: string | null;
          invoice_pdf_path?: string | null;
          payment_proof_path?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          invoice_number?: string;
          project_id?: string;
          client_id?: string;
          amount_idr?: number;
          status?: InvoiceStatus;
          due_date?: string;
          paid_at?: string | null;
          invoice_pdf_path?: string | null;
          payment_proof_path?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "invoices_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "invoices_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      report_generation_jobs: {
        Row: {
          id: string;
          project_id: string | null;
          requested_by: string | null;
          academic_term: string;
          student_identifier: string;
          student_name: string;
          processed_students: number;
          total_students: number;
          status: JobStatus;
          retry_count: number;
          max_retries: number;
          execution_latency_ms: number | null;
          pdf_storage_path: string | null;
          qstash_message_id: string | null;
          error_message: string | null;
          payload: Json;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id?: string | null;
          requested_by?: string | null;
          academic_term: string;
          student_identifier: string;
          student_name: string;
          processed_students?: number;
          total_students?: number;
          status?: JobStatus;
          retry_count?: number;
          max_retries?: number;
          execution_latency_ms?: number | null;
          pdf_storage_path?: string | null;
          qstash_message_id?: string | null;
          error_message?: string | null;
          payload?: Json;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string | null;
          requested_by?: string | null;
          academic_term?: string;
          student_identifier?: string;
          student_name?: string;
          processed_students?: number;
          total_students?: number;
          status?: JobStatus;
          retry_count?: number;
          max_retries?: number;
          execution_latency_ms?: number | null;
          pdf_storage_path?: string | null;
          qstash_message_id?: string | null;
          error_message?: string | null;
          payload?: Json;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "report_generation_jobs_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "report_generation_jobs_requested_by_fkey";
            columns: ["requested_by"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      webhook_logs: {
        Row: {
          id: string;
          project_id: string | null;
          lead_id: string | null;
          channel: string;
          event_type: string;
          endpoint_url: string;
          request_payload: Json;
          response_status: number | null;
          response_body: Json | null;
          status: JobStatus;
          attempt_count: number;
          max_attempts: number;
          next_retry_at: string | null;
          latency_ms: number | null;
          error_message: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id?: string | null;
          lead_id?: string | null;
          channel: string;
          event_type: string;
          endpoint_url: string;
          request_payload?: Json;
          response_status?: number | null;
          response_body?: Json | null;
          status?: JobStatus;
          attempt_count?: number;
          max_attempts?: number;
          next_retry_at?: string | null;
          latency_ms?: number | null;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string | null;
          lead_id?: string | null;
          channel?: string;
          event_type?: string;
          endpoint_url?: string;
          request_payload?: Json;
          response_status?: number | null;
          response_body?: Json | null;
          status?: JobStatus;
          attempt_count?: number;
          max_attempts?: number;
          next_retry_at?: string | null;
          latency_ms?: number | null;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "webhook_logs_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "webhook_logs_lead_id_fkey";
            columns: ["lead_id"];
            isOneToOne: false;
            referencedRelation: "leads";
            referencedColumns: ["id"];
          }
        ];
      };
      case_studies: {
        Row: {
          id: string;
          slug: string;
          title: string;
          subtitle: string;
          client_industry: string;
          pillar: ServicePillar;
          challenge_summary: string;
          architecture_solution: string;
          impact_metrics: Json;
          tech_stack: string[];
          diagram_schema: Json;
          cover_image_url: string | null;
          is_featured: boolean;
          sort_order: number;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          subtitle: string;
          client_industry: string;
          pillar: ServicePillar;
          challenge_summary: string;
          architecture_solution: string;
          impact_metrics?: Json;
          tech_stack?: string[];
          diagram_schema?: Json;
          cover_image_url?: string | null;
          is_featured?: boolean;
          sort_order?: number;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          subtitle?: string;
          client_industry?: string;
          pillar?: ServicePillar;
          challenge_summary?: string;
          architecture_solution?: string;
          impact_metrics?: Json;
          tech_stack?: string[];
          diagram_schema?: Json;
          cover_image_url?: string | null;
          is_featured?: boolean;
          sort_order?: number;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      async_queue_jobs: {
        Row: {
          id: string;
          project_id: string | null;
          job_type: string;
          payload: Json;
          status: JobStatus;
          retry_count: number;
          max_retries: number;
          execution_latency_ms: number | null;
          output_file_path: string | null;
          error_message: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id?: string | null;
          job_type: string;
          payload?: Json;
          status?: JobStatus;
          retry_count?: number;
          max_retries?: number;
          execution_latency_ms?: number | null;
          output_file_path?: string | null;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string | null;
          job_type?: string;
          payload?: Json;
          status?: JobStatus;
          retry_count?: number;
          max_retries?: number;
          execution_latency_ms?: number | null;
          output_file_path?: string | null;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "async_queue_jobs_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_user_role: {
        Args: Record<PropertyKey, never>;
        Returns: UserRole;
      };
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      user_role: UserRole;
      lead_status: LeadStatus;
      service_pillar: ServicePillar;
      project_status: ProjectStatus;
      invoice_status: InvoiceStatus;
      job_status: JobStatus;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
