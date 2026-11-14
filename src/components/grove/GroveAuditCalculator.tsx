"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Building2,
  Globe,
  Users,
  Target,
  ExternalLink,
} from "lucide-react";
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
  { id: "1-5", label: "1 – 5 Staf / Admin", usersCount: 4, saasPerUserMonth: 150000 },
  { id: "6-20", label: "6 – 20 Staf / Admin", usersCount: 12, saasPerUserMonth: 125000 },
  { id: "21-100", label: "21 – 100 Staf / Guru", usersCount: 45, saasPerUserMonth: 75000 },
  { id: "100+", label: "> 100 Pengguna Aktif", usersCount: 120, saasPerUserMonth: 50000 },
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

    // SaaS cost estimation over 36 months (3 years) vs Abinest Beli Putus
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
      duration = tier.usersCount > 20 ? "2 – 4 Minggu" : "7 – 14 Hari Kerja";
      beliPutusPrice = tier.usersCount > 20 ? 15000000 : 4000000;
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
      duration = tier.usersCount > 20 ? "2 – 4 Minggu" : "7 – 14 Hari Kerja";
      beliPutusPrice = 4500000;
      terimaBeresPrice = "Rp750 ribu / bulan";
      keyIssues = [
        "Peladen PPDB/ujian rentan tumbang saat ratusan siswa masuk bersamaan",
        "Data nilai, presensi, & tagihan SPP belum tersinkron dalam satu portal",
        "Situs web sekolah lambat (>5 detik) menurunkan minat calon pendaftar baru",
      ];
    } else if (goal === "Otomasi Balasan WhatsApp & Input Faktur") {
      architectureName = "Agen AI WhatsApp Resmi Meta + Document AI OCR Faktur";
      duration = "7 – 14 Hari Kerja";
      beliPutusPrice = 5000000;
      terimaBeresPrice = "Rp900 ribu / bulan";
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
• Target 14 Hari: ${goal}

*Hasil Rekomendasi Sistem:*
• Arsitektur: ${auditResult.architectureName}
• Estimasi Rilis: ${auditResult.duration}
• Estimasi Penghematan 3 Tahun: ${formatRupiah(auditResult.netSavings3Years)} (vs SaaS bulanan)

Saya ingin mengklaim *Preview Simulasi Gratis* & berdiskusi langkah penerapannya.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [businessType, condition, websiteUrl, goal, auditResult]);

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-slate-300/80">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1D4ED8] text-[11px] font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>DIAGNOSIS SISTEM &amp; KALKULATOR ROI GRATIS</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Audit Kebutuhan &amp; Hitung{" "}
            <span className="text-[#2563EB]">Penghematan Bisnis Anda</span>
          </h1>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Jawab 4 pertanyaan singkat di sebelah kiri untuk mengetahui arsitektur sistem yang paling tepat, estimasi biaya transparan, dan berapa puluh juta rupiah biaya sewa bulanan yang bisa Anda hemat dalam 3 tahun.
          </p>
        </div>

        {/* Main 12-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* LEFT 6 COLS: 4-Step Interactive Audit Form */}
          <div className="lg:col-span-6 ui-card overflow-hidden shadow-md">
            <div className="ui-card-header">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <h2 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                  Data Operasional Usaha Anda (4 Langkah)
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-300 text-[11px] font-bold text-slate-700">
                100% Gratis
              </span>
            </div>

            <div className="ui-card-body space-y-6">
              {/* Step 1: Jenis Usaha */}
              <div>
                <span className="ui-label flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>1. Jenis Usaha / Institusi Anda</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BUSINESS_TYPES.map((item) => {
                    const selected = businessType === item.label;
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setBusinessType(item.label)}
                        className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                          selected
                            ? "bg-blue-50/90 border-2 border-[#2563EB] text-blue-950 shadow-2xs"
                            : "bg-white hover:bg-slate-50 border-slate-300 text-slate-700"
                        }`}
                      >
                        <div className="text-xs font-extrabold">{item.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Kondisi Saat Ini + Optional URL */}
              <div className="space-y-3">
                <span className="ui-label flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
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
                        className={`text-left px-3 py-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                          selected
                            ? "bg-[#0F172A] text-white border-[#0F172A]"
                            : "bg-white hover:bg-slate-50 text-slate-700 border-slate-300"
                        }`}
                      >
                        {cond}
                      </button>
                    );
                  })}
                </div>

                <div>
                  <label htmlFor="audit-url" className="text-[11px] font-bold text-slate-600 block mb-1">
                    URL Website Lama (Opsional — untuk kami buatkan preview redesign gratis):
                  </label>
                  <input
                    id="audit-url"
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="Contoh: https://tokomaju.co.id atau nama Instagram usaha"
                    className="ui-input text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Step 3: Jumlah Staf / Pengguna Aktif */}
              <div>
                <span className="ui-label flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#2563EB]" />
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
                        className={`px-3 py-2.5 rounded-lg border text-center text-xs font-bold transition-all cursor-pointer ${
                          selected
                            ? "bg-[#2563EB] text-white border-[#1D4ED8] shadow-xs"
                            : "bg-white hover:bg-slate-50 text-slate-700 border-slate-300"
                        }`}
                      >
                        {tier.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Target Utama 14 Hari ke Depan */}
              <div>
                <span className="ui-label flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>4. Target Prioritas dalam 14 Hari ke Depan</span>
                </span>
                <div className="space-y-2">
                  {GOALS.map((g) => {
                    const selected = goal === g;
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGoal(g)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs sm:text-[13px] font-bold flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          selected
                            ? "bg-blue-50 border-2 border-[#2563EB] text-blue-950"
                            : "bg-white hover:bg-slate-50 border-slate-300 text-slate-700"
                        }`}
                      >
                        <span>{g}</span>
                        {selected && <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 6 COLS: Live ROI & Recommendation Report Card */}
          <div className="lg:col-span-6 ui-card overflow-hidden border-2 border-[#2563EB]/40 shadow-lg">
            <div className="ui-card-header bg-[#0F172A] text-white border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-sky-300 font-bold block">
                  LAPORAN AUDIT REAL-TIME ABINEST
                </span>
                <h2 className="text-sm sm:text-base font-extrabold text-white">
                  Rekomendasi Arsitektur &amp; Proyeksi Penghematan
                </h2>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[11px] font-bold">
                Siap &lt;14 Hari
              </span>
            </div>

            <div className="ui-card-body space-y-5">
              {/* Highlighted 3-Year Savings Banner */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                    <TrendingDown className="w-4 h-4 text-emerald-600" />
                    <span>Estimasi Penghematan Biaya Lisensi 3 Tahun</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-800 mt-1 tabular-nums">
                    Hemat {formatRupiah(auditResult.netSavings3Years)}
                  </div>
                  <p className="text-[11px] sm:text-xs text-emerald-900/80 mt-0.5">
                    Dibanding aplikasi sewa SaaS per-user (~{formatRupiah(auditResult.estimatedSaasMonthly)}/bulan untuk {auditResult.tier.label})
                  </p>
                </div>
                <div className="shrink-0 bg-white border border-emerald-300 rounded-xl px-3.5 py-2.5 text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">
                    Lisensi Per Staf
                  </span>
                  <span className="text-lg font-black text-emerald-700">Rp0</span>
                </div>
              </div>

              {/* Architecture & Investment Table */}
              <div className="ui-list-group text-xs sm:text-[13px]">
                <div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-blue-50/40">
                  <span className="text-slate-600 font-semibold">Rekomendasi Sistem Utama</span>
                  <span className="font-extrabold text-[#1D4ED8] sm:text-right">
                    {auditResult.architectureName}
                  </span>
                </div>
                <div className="px-4 py-2.5 flex items-center justify-between gap-2">
                  <span className="text-slate-600 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Estimasi Waktu Pengerjaan</span>
                  </span>
                  <span className="font-extrabold text-[#0F172A]">{auditResult.duration}</span>
                </div>
                <div className="px-4 py-2.5 flex items-center justify-between gap-2">
                  <span className="text-slate-600 font-semibold">Opsi 1 · Beli Putus (100% Hak Milik)</span>
                  <span className="font-black text-[#0D9488] tabular-nums">
                    Mulai {formatRupiah(auditResult.beliPutusPrice)}
                  </span>
                </div>
                <div className="px-4 py-2.5 flex items-center justify-between gap-2">
                  <span className="text-slate-600 font-semibold">Opsi 2 · Sewa / Terima Beres</span>
                  <span className="font-extrabold text-[#2563EB]">{auditResult.terimaBeresPrice}</span>
                </div>
                {auditResult.hasUrl && (
                  <div className="px-4 py-2.5 flex items-center justify-between gap-2 bg-amber-50/60">
                    <span className="text-amber-900 font-semibold">Bonus Audit URL Anda</span>
                    <span className="font-extrabold text-amber-800 truncate max-w-[210px]">
                      Gratis Simulasi Redesign ({websiteUrl.trim()})
                    </span>
                  </div>
                )}
              </div>

              {/* Key Pain Points Detected */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  Celah Efisiensi yang Akan Dibereskan Abinest:
                </h3>
                <div className="ui-list-group text-xs">
                  {auditResult.keyIssues.map((issue, idx) => (
                    <div key={idx} className="px-3.5 py-2.5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium leading-relaxed">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ui-card-footer space-y-3">
              <a
                href={claimAuditWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-sm transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Klaim Preview Redesign Gratis &amp; Kirim Hasil Audit ke WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Garansi SLA 99.9% &amp; 100% Kode Milik Klien</span>
                </span>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-1 text-[#2563EB] hover:underline font-bold"
                >
                  <span>Jajal Simulasi Live (/demo)</span>
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
