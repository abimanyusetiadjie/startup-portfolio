"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Clock,
  ShieldCheck,
  TrendingDown,
  Building2,
  Globe,
  Users,
  Target,
  ExternalLink,
} from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6281398589745";

type BusinessType =
  | "UMKM / Jasa / Company Profile"
  | "Distributor / Gudang / Toko Ritel"
  | "Sekolah / Kampus / Lembaga Kursus"
  | "Klinik / Perusahaan Korporat";

type CurrentCondition =
  | "Belum Punya Website Resmi"
  | "Sudah Punya Web tapi Lambat / Sepi Leads"
  | "Masih Pakai Excel / Nota Manual"
  | "Sudah Pakai Aplikasi Sewa Bulanan tapi Mahal";

type StaffTierId = "1-5" | "6-20" | "21-100" | "100+";

type MainGoal =
  | "Naikkan Leads & Kepercayaan di Google"
  | "Rapikan Stok, Kasir & Laporan Laba Rugi"
  | "Siapkan PPDB Online & SIAKAD Anti-Down"
  | "Otomasi Balasan WhatsApp & Input Faktur";

const BUSINESS_TYPES: { label: BusinessType; desc: string }[] = [
  { label: "UMKM / Jasa / Company Profile", desc: "Fokus omzet & kepercayaan di Google" },
  { label: "Distributor / Gudang / Toko Ritel", desc: "Fokus kontrol stok & faktur cepat" },
  { label: "Sekolah / Kampus / Lembaga Kursus", desc: "Fokus PPDB online, ujian CBT & rapor" },
  { label: "Klinik / Perusahaan Korporat", desc: "Fokus efisiensi operasional & automasi" },
];

const CONDITIONS: CurrentCondition[] = [
  "Belum Punya Website Resmi",
  "Sudah Punya Web tapi Lambat / Sepi Leads",
  "Masih Pakai Excel / Nota Manual",
  "Sudah Pakai Aplikasi Sewa Bulanan tapi Mahal",
];

const STAFF_TIERS: { id: StaffTierId; label: string; usersCount: number; saasPerUserMonth: number }[] = [
  { id: "1-5", label: "1 – 5 Staf", usersCount: 4, saasPerUserMonth: 150000 },
  { id: "6-20", label: "6 – 20 Staf", usersCount: 12, saasPerUserMonth: 125000 },
  { id: "21-100", label: "21 – 100 Staf", usersCount: 45, saasPerUserMonth: 75000 },
  { id: "100+", label: "> 100 Pengguna", usersCount: 120, saasPerUserMonth: 50000 },
];

const GOALS: MainGoal[] = [
  "Naikkan Leads & Kepercayaan di Google",
  "Rapikan Stok, Kasir & Laporan Laba Rugi",
  "Siapkan PPDB Online & SIAKAD Anti-Down",
  "Otomasi Balasan WhatsApp & Input Faktur",
];

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function GroveAuditCalculator() {
  const [businessType, setBusinessType] = useState<BusinessType>("Distributor / Gudang / Toko Ritel");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [condition, setCondition] = useState<CurrentCondition>("Masih Pakai Excel / Nota Manual");
  const [staffTierId, setStaffTierId] = useState<StaffTierId>("6-20");
  const [goal, setGoal] = useState<MainGoal>("Rapikan Stok, Kasir & Laporan Laba Rugi");

  const auditResult = useMemo(() => {
    const tier = STAFF_TIERS.find((t) => t.id === staffTierId) ?? STAFF_TIERS[1];

    const estimatedSaasMonthly = tier.usersCount * tier.saasPerUserMonth;
    const estimatedSaas3Years = estimatedSaasMonthly * 36;

    let architectureName = "Situs Web Modern Next.js (<0,8 detik)";
    let duration = "7 – 14 Hari Kerja";
    let beliPutusPrice = 1500000;
    let terimaBeresPrice = "Rp350 ribu / bulan";
    let keyIssues: string[] = [];

    if (
      goal === "Rapikan Stok, Kasir & Laporan Laba Rugi" ||
      businessType === "Distributor / Gudang / Toko Ritel"
    ) {
      architectureName = "Sistem ERP Multi-Gudang, POS Kasir & Faktur Otomatis";
      duration = tier.usersCount > 20 ? "4 – 8 Minggu (Bertahap)" : "2 – 4 Minggu Kerja";
      beliPutusPrice = tier.usersCount > 20 ? 12000000 : 4000000;
      terimaBeresPrice = "Rp750 ribu / bulan";
      keyIssues = [
        "Risiko selisih stok antar gudang/kasir jika masih rekap manual",
        "Ketergantungan biaya lisensi per-kasir SaaS terus membengkak tiap tahun",
        "Pembuatan faktur & laporan laba rugi harian memakan waktu 2–3 jam/hari",
      ];
    } else if (
      goal === "Siapkan PPDB Online & SIAKAD Anti-Down" ||
      businessType === "Sekolah / Kampus / Lembaga Kursus"
    ) {
      architectureName = "Portal SIAKAD Terpadu, PPDB Daring & Ujian CBT Anti-Tumbang";
      duration = tier.usersCount > 20 ? "4 – 8 Minggu (Bertahap)" : "2 – 4 Minggu Kerja";
      beliPutusPrice = tier.usersCount > 20 ? 9500000 : 4500000;
      terimaBeresPrice = "Rp750 ribu / bulan";
      keyIssues = [
        "Peladen PPDB/ujian rentan tumbang saat ratusan siswa masuk bersamaan",
        "Data nilai, presensi, & tagihan SPP belum tersinkron dalam satu portal",
        "Situs web sekolah lambat (>5 detik) menurunkan minat calon pendaftar baru",
      ];
    } else if (goal === "Otomasi Balasan WhatsApp & Input Faktur") {
      architectureName = "Agen AI WhatsApp Resmi + Automasi Pencatatan Faktur";
      duration = "7 – 14 Hari Kerja";
      beliPutusPrice = 1500000;
      terimaBeresPrice = "Rp350 ribu / bulan";
      keyIssues = [
        "Pesan calon pembeli di WhatsApp lambat dibalas di luar jam kerja",
        "Kesalahan ketik (human error) saat input faktur pemasok ke Excel",
        "Tim admin kehabisan waktu menjawab pertanyaan berulang seputar stok & harga",
      ];
    } else {
      architectureName = "Situs Web Modern (<0,8 detik) + SEO Lokal & Alur WhatsApp";
      duration = "7 – 14 Hari Kerja";
      beliPutusPrice = 1500000;
      terimaBeresPrice = "Rp350 ribu / bulan";
      keyIssues = [
        condition === "Belum Punya Website Resmi"
          ? "Calon pelanggan Google Maps kesulitan memvalidasi kredibilitas bisnis"
          : "Situs web lama memuat lambat di ponsel (>5 detik) sehingga pengunjung pergi",
        "Belum terindeks kata kunci lokal berniat beli tinggi di Google",
        "Alur tombol menuju konsultasi WhatsApp kurang menonjol di layar seluler",
      ];
    }

    const netSavings3Years = Math.max(3500000, estimatedSaas3Years - beliPutusPrice);
    const hasUrl = websiteUrl.trim().length > 0;

    return {
      tier,
      estimatedSaasMonthly,
      estimatedSaas3Years,
      beliPutusPrice,
      terimaBeresPrice,
      netSavings3Years,
      architectureName,
      duration,
      keyIssues,
      hasUrl,
    };
  }, [businessType, websiteUrl, condition, staffTierId, goal]);

  const claimAuditWaUrl = useMemo(() => {
    const urlText = websiteUrl.trim() ? `\n• URL Website Saat Ini: ${websiteUrl.trim()}` : "";
    const message = `Halo Tim Abinest, saya baru saja menyelesaikan Audit & Kalkulator Sistem Gratis di website Abinest:

• Jenis Usaha: ${businessType}
• Kondisi Saat Ini: ${condition}${urlText}
• Jumlah Pengguna/Staf: ${auditResult.tier.label}
• Target Prioritas: ${goal}

*Hasil Rekomendasi Sistem:*
• Arsitektur: ${auditResult.architectureName}
• Estimasi Rilis: ${auditResult.duration}
• Estimasi Penghematan 3 Tahun: ${formatRupiah(auditResult.netSavings3Years)} (vs SaaS bulanan)

Saya ingin mengklaim *Preview Simulasi Gratis* & berdiskusi langkah penerapannya.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [businessType, condition, websiteUrl, goal, auditResult]);

  return (
    <section className="py-12 sm:py-16 bg-[#F7F7F7]">
      <div className="sig-container space-y-12">
        {/* Swiss Editorial Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
            Diagnosis sistem &amp; kalkulator ROI · 100% gratis
          </p>
          <h1 className="text-[clamp(2rem,3.4vw+1rem,3.5rem)] font-bold tracking-[-0.025em] leading-[1.08] text-[#171717]">
            Audit kebutuhan.
            <br />
            <span className="text-[#6F6F71]">Hitung penghematan 3 tahun.</span>
          </h1>
          <p className="text-[17px] sm:text-[19px] text-[#6F6F71] leading-relaxed max-w-2xl">
            Jawab 4 pertanyaan singkat di bawah untuk melihat rekomendasi arsitektur, estimasi biaya transparan, dan berapa puluh juta biaya sewa SaaS yang bisa Anda hemat.
          </p>
        </div>

        {/* Main 12-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 6 COLS: 4-Step Interactive Audit Form */}
          <div className="lg:col-span-6 ui-card overflow-hidden">
            <div className="ui-card-header">
              <h2 className="text-[15.5px] font-semibold text-[#171717]">
                Data operasional usaha Anda (4 langkah)
              </h2>
              <span className="px-2.5 py-1 rounded-[8px] bg-white border border-[#E8E8E8] text-[11px] font-mono text-[#171717]">
                GRATIS
              </span>
            </div>

            <div className="ui-card-body space-y-7">
              {/* Step 1: Jenis Usaha */}
              <div>
                <span className="ui-label flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#171717]" />
                  <span>1. Jenis Usaha / Institusi</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BUSINESS_TYPES.map((item) => {
                    const selected = businessType === item.label;
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setBusinessType(item.label)}
                        className={`text-left p-3.5 rounded-[14px] border transition-all cursor-pointer ${
                          selected
                            ? "bg-[#171717] border-[#171717] text-[#F7F7F7]"
                            : "bg-white hover:border-[#FFD124] border-[#E8E8E8] text-[#171717]"
                        }`}
                      >
                        <div className="text-[13px] font-semibold leading-snug">
                          {item.label}
                        </div>
                        <div
                          className={`text-[11.5px] mt-0.5 ${
                            selected ? "text-white/70" : "text-[#6F6F71]"
                          }`}
                        >
                          {item.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Kondisi Saat Ini + Optional URL */}
              <div className="space-y-3">
                <span className="ui-label flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#171717]" />
                  <span>2. Kondisi Website / Sistem Saat Ini</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CONDITIONS.map((cond) => {
                    const selected = condition === cond;
                    return (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => setCondition(cond)}
                        className={`text-left px-3.5 py-2.5 rounded-[12px] border text-[12.5px] font-medium transition-all cursor-pointer ${
                          selected
                            ? "bg-[#171717] text-[#F7F7F7] border-[#171717]"
                            : "bg-white hover:border-[#FFD124] text-[#171717] border-[#E8E8E8]"
                        }`}
                      >
                        {cond}
                      </button>
                    );
                  })}
                </div>

                <div>
                  <label
                    htmlFor="audit-url"
                    className="text-[12px] font-medium text-[#6F6F71] block mb-1.5"
                  >
                    URL Website Lama (opsional — untuk preview redesign gratis):
                  </label>
                  <input
                    id="audit-url"
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="Contoh: https://tokomaju.co.id atau Instagram usaha"
                    className="ui-input bg-white text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Step 3: Jumlah Staf / Pengguna Aktif */}
              <div>
                <span className="ui-label flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#171717]" />
                  <span>3. Jumlah Staf / Admin / Pengguna Aktif</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {STAFF_TIERS.map((tier) => {
                    const selected = staffTierId === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setStaffTierId(tier.id)}
                        className={`px-3 py-2.5 rounded-[12px] border text-center text-[12.5px] font-medium transition-all cursor-pointer ${
                          selected
                            ? "bg-[#171717] text-[#F7F7F7] border-[#171717]"
                            : "bg-white hover:border-[#FFD124] text-[#171717] border-[#E8E8E8]"
                        }`}
                      >
                        {tier.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Target Prioritas Operasional */}
              <div>
                <span className="ui-label flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#171717]" />
                  <span>4. Target Prioritas Operasional</span>
                </span>
                <div className="space-y-2">
                  {GOALS.map((g) => {
                    const selected = goal === g;
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGoal(g)}
                        className={`w-full text-left px-4 py-3 rounded-[14px] border text-[13px] font-medium flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          selected
                            ? "bg-white border-[#171717] text-[#171717] ring-2 ring-[#FFD124]/60"
                            : "bg-white hover:border-[#FFD124] border-[#E8E8E8] text-[#6F6F71] hover:text-[#171717]"
                        }`}
                      >
                        <span>{g}</span>
                        {selected && (
                          <span className="w-5 h-5 rounded-full bg-[#171717] text-[#FFD124] inline-flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 6 COLS: Live ROI & Recommendation Report Card */}
          <div className="lg:col-span-6 ui-card overflow-hidden">
            <div className="px-6 py-5 bg-[#171717] text-white flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#FFD124] block">
                  Laporan audit real-time Abinest
                </span>
                <h2 className="text-[16px] font-semibold text-white mt-0.5">
                  Rekomendasi arsitektur &amp; proyeksi hemat
                </h2>
              </div>
              <span className="px-2.5 py-1 rounded-[8px] bg-white/10 text-[#F7F7F7] text-[11px] font-mono">
                {auditResult.duration}
              </span>
            </div>

            <div className="ui-card-body space-y-6">
              {/* Highlighted 3-Year Savings Banner (Significa Warm Forest Sage) */}
              <div className="p-5 rounded-[16px] bg-[#3C846E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#FFD124]">
                    <TrendingDown className="w-4 h-4" />
                    <span>Proyeksi hemat lisensi 3 tahun</span>
                  </div>
                  <div className="text-[28px] sm:text-[34px] font-bold tracking-[-0.025em] mt-1 tabular-nums">
                    Hemat {formatRupiah(auditResult.netSavings3Years)}
                  </div>
                  <p className="text-[12.5px] text-white/80 mt-0.5">
                    Dibanding aplikasi sewa SaaS (~{formatRupiah(auditResult.estimatedSaasMonthly)}/bulan untuk {auditResult.tier.label})
                  </p>
                </div>
                <div className="shrink-0 bg-[#171717] text-white rounded-[14px] px-4 py-3 text-center">
                  <span className="text-[10px] font-mono uppercase text-white/60 block">
                    Lisensi/staf
                  </span>
                  <span className="text-lg font-bold text-[#FFD124]">Rp0</span>
                </div>
              </div>

              {/* Architecture & Investment Table */}
              <div className="ui-list-group text-[13px]">
                <div className="px-4 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-[#F7F7F7]">
                  <span className="text-[#6F6F71]">Rekomendasi sistem utama</span>
                  <span className="font-semibold text-[#171717] sm:text-right">
                    {auditResult.architectureName}
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-2">
                  <span className="text-[#6F6F71] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#171717]" />
                    <span>Estimasi waktu rilis</span>
                  </span>
                  <span className="font-semibold text-[#171717]">
                    {auditResult.duration}
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-2">
                  <span className="text-[#6F6F71]">
                    Opsi 1 · Beli Putus (100% hak milik)
                  </span>
                  <span className="font-bold text-[#3C846E] tabular-nums">
                    Mulai {formatRupiah(auditResult.beliPutusPrice)}
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-2">
                  <span className="text-[#6F6F71]">
                    Opsi 2 · Sewa / Terima Beres
                  </span>
                  <span className="font-semibold text-[#171717]">
                    {auditResult.terimaBeresPrice}
                  </span>
                </div>
                {auditResult.hasUrl && (
                  <div className="px-4 py-3 flex items-center justify-between gap-2 bg-[#FFD124]/20">
                    <span className="text-[#171717] font-medium">
                      Bonus audit URL Anda
                    </span>
                    <span className="font-semibold text-[#171717] truncate max-w-[220px]">
                      Preview redesign ({websiteUrl.trim()})
                    </span>
                  </div>
                )}
              </div>

              {/* Key Pain Points Detected */}
              <div className="space-y-2.5">
                <h3 className="text-[11.5px] font-mono uppercase tracking-wider text-[#6F6F71]">
                  Celah efisiensi yang akan dibereskan Abinest
                </h3>
                <div className="ui-list-group text-[13px]">
                  {auditResult.keyIssues.map((issue, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-3 flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                      <span className="text-[#171717] leading-relaxed">
                        {issue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ui-card-footer space-y-3.5">
              <a
                href={claimAuditWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "audit_calculator",
                    service: businessType,
                  })
                }
                className="sig-btn-primary w-full"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Kirim hasil audit &amp; klaim preview gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#6F6F71]">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3C846E]" />
                  <span>Garansi SLA 99,9% &amp; 100% hak milik kode</span>
                </span>
                <Link
                  href="/demo"
                  className="sig-link inline-flex items-center gap-1 text-[#171717] font-medium"
                >
                  <span>Coba simulasi live</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
