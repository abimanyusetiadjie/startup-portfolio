import { z } from "zod";
import type { ServicePillar } from "@/types/database.types";

export const SERVICE_INTEREST_VALUES = [
  "web_development",
  "custom_siakad_erp",
  "business_automation",
  "full_ecosystem",
] as const;

export type ServiceInterest = (typeof SERVICE_INTEREST_VALUES)[number];

export const SERVICE_INTEREST_LABELS: Record<ServiceInterest, string> = {
  web_development: "High-Performance Web (95–100 Lighthouse)",
  custom_siakad_erp: "Custom SIAKAD & Parallel PDF Engine",
  business_automation: "Business Automation & WA/API Gateway",
  full_ecosystem: "Full Enterprise Ecosystem (End-to-End)",
};

export const BUDGET_RANGE_OPTIONS = [
  "< Rp 15 Juta (MVP / Landing Page)",
  "Rp 15 Juta – Rp 45 Juta (Sistem Menengah)",
  "Rp 45 Juta – Rp 100 Juta (Enterprise / SIAKAD)",
  "> Rp 100 Juta (Full Custom Ecosystem)",
] as const;

/**
 * Normalisasi nomor WhatsApp Indonesia:
 * Mengubah awalan "08..." atau "+628..." atau "628..." (serta menghapus spasi/strip)
 * menjadi format standar internasional tanpa simbol tambah: "628..."
 */
export function normalizeIndonesianWhatsApp(rawNumber: string): string {
  const digitsOnly = rawNumber.replace(/[^\d+]/g, "").trim();

  if (digitsOnly.startsWith("+62")) {
    return `62${digitsOnly.slice(3)}`;
  }

  if (digitsOnly.startsWith("62")) {
    return digitsOnly;
  }

  if (digitsOnly.startsWith("0")) {
    return `62${digitsOnly.slice(1)}`;
  }

  if (digitsOnly.startsWith("8")) {
    return `62${digitsOnly}`;
  }

  return digitsOnly.replace(/^\+/, "");
}

const indonesianPhoneRegex = /^628[1-9][0-9]{6,11}$/;

export const leadSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(3, { message: "Nama lengkap minimal 3 karakter." })
    .max(100, { message: "Nama lengkap maksimal 100 karakter." }),
  company_name: z
    .string()
    .trim()
    .min(2, { message: "Nama institusi/perusahaan minimal 2 karakter." })
    .max(120, { message: "Nama institusi/perusahaan maksimal 120 karakter." }),
  whatsapp_number: z
    .string()
    .trim()
    .transform((val) => normalizeIndonesianWhatsApp(val))
    .refine((val) => indonesianPhoneRegex.test(val), {
      message:
        "Nomor WhatsApp Indonesia tidak valid (gunakan format 08xx, +628xx, atau 628xx).",
    }),
  email: z
    .union([
      z.literal(""),
      z.string().trim().email({ message: "Format alamat email tidak valid." }),
    ])
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
  service_interest: z.enum(SERVICE_INTEREST_VALUES, {
    message: "Pilih salah satu kategori layanan.",
  }),
  budget_range: z
    .string()
    .trim()
    .min(1, { message: "Pilih estimasi rentang anggaran proyek." }),
  project_summary: z
    .string()
    .trim()
    .min(10, {
      message: "Ringkasan kebutuhan proyek minimal 10 karakter.",
    })
    .max(1500, {
      message: "Ringkasan kebutuhan proyek maksimal 1500 karakter.",
    }),
});

export type LeadFormInput = z.input<typeof leadSchema>;
export type ValidatedLeadInput = z.output<typeof leadSchema>;

/**
 * Konversi nilai `service_interest` dari formulir ke enum `service_pillar` di database Supabase.
 */
export function mapInterestToDatabasePillar(
  interest: ServiceInterest
): ServicePillar {
  switch (interest) {
    case "web_development":
      return "high_perf_web";
    case "custom_siakad_erp":
      return "custom_siakad_erp";
    case "business_automation":
    case "full_ecosystem":
      return "business_automation";
  }
}
