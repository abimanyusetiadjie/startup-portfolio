"use client";

import { useMemo, useState } from "react";
import {
  FileText,
  Printer,
  Plus,
  Trash2,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ABINEST_WA_NUMBER = "6281398589745";

type StudioTab = "proposal" | "outreach";
type SchemeMode = "beli-putus" | "terima-beres";

interface ProposalModuleItem {
  id: string;
  name: string;
  spec: string;
  price: number;
}

interface ProposalPreset {
  id: string;
  label: string;
  badge: string;
  scheme: SchemeMode;
  timeline: string;
  warrantyNote: string;
  items: ProposalModuleItem[];
}

const PRESETS: ProposalPreset[] = [
  {
    id: "web-umkm",
    label: "1. Web UMKM & Company Profile (<0.8s)",
    badge: "Rp 1.500.000",
    scheme: "beli-putus",
    timeline: "7 – 10 Hari Kerja",
    warrantyNote:
      "Garansi perbaikan bug gratis 90 hari, skor Google PageSpeed Mobile ≥95/100, serta penyerahan penuh 100% source code & kontrol domain.",
    items: [
      {
        id: "m1",
        name: "Arsitektur Web Next.js 15 Kilat (<0.8s)",
        spec: "Halaman Beranda, Layanan, Portofolio, & Mobile-First Layout",
        price: 950000,
      },
      {
        id: "m2",
        name: "Integrasi Funnel WhatsApp & SEO Google Lokal",
        spec: "Tombol CTA terarah ke WhatsApp bisnis + Sitemap & Metadata JSON-LD",
        price: 350000,
      },
      {
        id: "m3",
        name: "Setup Hosting Edge, SSL HTTPS & Training Admin",
        spec: "Deploy produksi anti-down + video panduan ubah teks & foto",
        price: 200000,
      },
    ],
  },
  {
    id: "erp-gudang",
    label: "2. Custom ERP / Stok Gudang & Kasir",
    badge: "Rp 4.000.000",
    scheme: "beli-putus",
    timeline: "14 Hari Kerja",
    warrantyNote:
      "Unlimited staf, kasir & cabang dengan Rp 0 biaya lisensi bulanan selamanya. Source code & database PostgreSQL menjadi aset penuh milik klien.",
    items: [
      {
        id: "e1",
        name: "Modul Master Produk, Multi-Gudang & Stok Real-Time",
        spec: "Kartu stok masuk/keluar, peringatan stok menipis, & riwayat mutasi",
        price: 1800000,
      },
      {
        id: "e2",
        name: "Modul POS Kasir & Generator Faktur PDF Otomatis",
        spec: "Cetak struk/invoice resmi, piutang/tempo, & rekap laba rugi harian",
        price: 1450000,
      },
      {
        id: "e3",
        name: "Manajemen Hak Akses Role, Deploy & Training Staf",
        spec: "Role Owner, Admin Gudang, Kasir + Uji beban & pendampingan go-live",
        price: 750000,
      },
    ],
  },
  {
    id: "siakad-ppdb",
    label: "3. Portal PPDB & SIAKAD Sekolah Anti-Down",
    badge: "Rp 4.500.000",
    scheme: "beli-putus",
    timeline: "14 Hari Kerja",
    warrantyNote:
      "Garansi SLA Anti-Down 99.9% saat puncak PPDB dan Ujian CBT serentak. Bebas biaya per-siswa selamanya (100% hak milik institusi/yayasan).",
    items: [
      {
        id: "s1",
        name: "Portal Profil Sekolah & Pendaftaran PPDB Online",
        spec: "Formulir digital, upload berkas siswa, verifikasi admin & kartu peserta",
        price: 1650000,
      },
      {
        id: "s2",
        name: "Sistem Akademik SIAKAD, Presensi & E-Rapor PDF",
        spec: "Input nilai guru, absensi harian, cetak E-Rapor otomatis & tagihan SPP",
        price: 2100000,
      },
      {
        id: "s3",
        name: "Uji Ketahanan Trafik Serentak & Pelatihan Operator",
        spec: "Simulasi login serentak + sesi bimbingan teknis guru & staf TU",
        price: 750000,
      },
    ],
  },
  {
    id: "ai-whatsapp",
    label: "4. Automasi AI OCR & Bot WhatsApp Resmi",
    badge: "Rp 5.000.000",
    scheme: "beli-putus",
    timeline: "10 – 14 Hari Kerja",
    warrantyNote:
      "Terhubung dengan WhatsApp Cloud API resmi Meta & Pipeline Document AI OCR (akurasi 99.7%). Prompt & script 100% milik perusahaan klien.",
    items: [
      {
        id: "a1",
        name: "AI Sales & Customer Service Agent WhatsApp 24/7",
        spec: "Balas chat pelanggan otomatis <1 detik terhubung katalog & stok real-time",
        price: 2500000,
      },
      {
        id: "a2",
        name: "Pipeline Document AI OCR Faktur / Surat Jalan",
        spec: "Ekstraksi otomatis foto/PDF invoice supplier ke database & Excel/ERP",
        price: 1750000,
      },
      {
        id: "a3",
        name: "Dashboard Approval, Sanitasi PII & Integrasi API",
        spec: "Webhook n8n/FastAPI, notifikasi Telegram/WA ke owner & training tim",
        price: 750000,
      },
    ],
  },
];

function formatRupiah(num: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num);
}

function normalizeTargetPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return ABINEST_WA_NUMBER;
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (digits.startsWith("62")) return digits;
  if (digits.startsWith("8")) return `62${digits}`;
  return digits;
}

export function GroveProposalOutreachStudio() {
  const [activeTab, setActiveTab] = useState<StudioTab>("proposal");

  // --- TAB 1 STATE: PROPOSAL & RAB GENERATOR ---
  const [selectedPresetId, setSelectedPresetId] = useState<string>("erp-gudang");
  const [scheme, setScheme] = useState<SchemeMode>("beli-putus");
  const [clientPic, setClientPic] = useState<string>("Bapak Hendra Kusuma");
  const [clientCompany, setClientCompany] = useState<string>("PT Distribusi Nusantara Jaya");
  const [clientCity, setClientCity] = useState<string>("Tangerang");
  const [docNumber, setDocNumber] = useState<string>("ABN/QUO/2026/11-042");
  const [validUntil, setValidUntil] = useState<string>("14 Hari Kalender Sejak Terbit");
  const [timeline, setTimeline] = useState<string>("14 Hari Kerja");
  const [warrantyNote, setWarrantyNote] = useState<string>(PRESETS[1].warrantyNote);
  const [items, setItems] = useState<ProposalModuleItem[]>(PRESETS[1].items);
  const [copiedProposalWa, setCopiedProposalWa] = useState<boolean>(false);

  // --- TAB 2 STATE: OUTREACH KIT ---
  const [prospectPic, setProspectPic] = useState<string>("Bapak/Ibu Pemilik");
  const [prospectBusiness, setProspectBusiness] = useState<string>("CV Karya Mandiri");
  const [prospectCity, setProspectCity] = useState<string>("Tangerang");
  const [prospectIssue, setProspectIssue] = useState<string>(
    "website lama terbuka >6 detik di HP dan tombol WhatsApp tertutup di layar mobile"
  );
  const [prospectPhone, setProspectPhone] = useState<string>("");
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);

  const applyPreset = (preset: ProposalPreset) => {
    setSelectedPresetId(preset.id);
    setScheme(preset.scheme);
    setTimeline(preset.timeline);
    setWarrantyNote(preset.warrantyNote);
    setItems(preset.items.map((item) => ({ ...item })));
  };

  const handleUpdateItem = (
    id: string,
    field: keyof ProposalModuleItem,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: `custom-${Date.now()}`,
        name: "Modul Tambahan Kustom",
        spec: "Penyesuaian fitur sesuai alur operasional perusahaan",
        price: 500000,
      },
    ]);
  };

  const handleDeleteItem = (id: string) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const totalInvestment = useMemo(() => {
    return items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
  }, [items]);

  const dpAmount = Math.round(totalInvestment * 0.5);
  const finalAmount = totalInvestment - dpAmount;

  const proposalWaSummary = useMemo(() => {
    const schemeLabel =
      scheme === "beli-putus"
        ? "Beli Putus (100% Hak Milik Source Code, Rp 0 Biaya Bulanan)"
        : "Sewa / Terima Beres (Managed Cloud, Server & Maintenance Penuh)";
    const moduleLines = items
      .map((m, i) => `${i + 1}. ${m.name} (${formatRupiah(Number(m.price) || 0)})`)
      .join("\n");

    return `*PENAWARAN RESMI ABINEST STUDIO*
No. Dokumen: ${docNumber}
Kepada: *${clientPic}* — ${clientCompany} (${clientCity})

*Skema:* ${schemeLabel}
*Estimasi Selesai:* ${timeline}

*Rincian Modul:*
${moduleLines}

*Total Investasi:* *${formatRupiah(totalInvestment)}*
• Termin DP 50%: ${formatRupiah(dpAmount)}
• Pelunasan 50% (Saat Go-Live & Serah Terima): ${formatRupiah(finalAmount)}

*Garansi:* ${warrantyNote}
Live Demo Interaktif: https://abinest.id/demo
Kontak Resmi Abinest: +62 813-9858-9745`;
  }, [
    docNumber,
    clientPic,
    clientCompany,
    clientCity,
    scheme,
    timeline,
    items,
    totalInvestment,
    dpAmount,
    finalAmount,
    warrantyNote,
  ]);

  const handleCopyProposalSummary = async () => {
    try {
      await navigator.clipboard.writeText(proposalWaSummary);
      setCopiedProposalWa(true);
      setTimeout(() => setCopiedProposalWa(false), 2000);
    } catch {
      setCopiedProposalWa(false);
    }
  };

  const outreachTemplates = useMemo(() => {
    const pic = prospectPic.trim() || "Bapak/Ibu Pimpinan";
    const biz = prospectBusiness.trim() || "[Nama Usaha]";
    const city = prospectCity.trim() || "[Kota]";
    const issue =
      prospectIssue.trim() ||
      "loading website lambat di HP dan belum adanya tombol konsultasi WhatsApp yang menonjol";

    return [
      {
        id: "slow-web",
        title: "1. Audit Website Lambat / Tampilan Mobile Kurang Rapi (Tawarkan Preview Gratis)",
        target: "Pemilik Bisnis yang sudah punya web tetapi lambat / jadul di HP",
        script: `Selamat pagi ${pic} dari *${biz}* (${city}), perkenalkan saya Abimanyu dari Abinest Software Studio.

Tadi saya membuka profil dan website ${biz} lewat HP, dan melihat ${issue}. Biasanya calon pembeli dari Google di area ${city} langsung keluar dalam 3 detik sebelum sempat menghubungi admin.

Kebetulan saya sudah menyiapkan *simulasi sistem & tampilan baru (<0.8 detik)* untuk ${biz}. Bapak/Ibu juga bisa melihat contoh performa kami di sini:
https://abinest.id/demo

Boleh saya buatkan 1 halaman *preview simulasi gratis* khusus untuk ${biz} agar Bapak/Ibu bisa melihat perbandingannya tanpa ikatan apa pun?`,
      },
      {
        id: "maps-no-web",
        title: "2. Bisnis Ramai di Google Maps tapi Belum Punya Website Resmi",
        target: "UMKM, Klinik, Kontraktor, atau Supplier dengan banyak ulasan di Google Maps",
        script: `Halo ${pic} *${biz}* (${city}) 👋

Saya melihat reputasi dan ulasan ${biz} di Google Maps sudah sangat bagus, tetapi belum tertaut dengan website resmi perusahaan. Akibatnya, saat calon klien korporat mencari vendor di Google, kepercayaan mereka sering kalah oleh kompetitor yang punya profil & katalog resmi.

Di Abinest Studio, kami membantu usaha di ${city} memiliki Website Resmi (<0.8 detik + SEO Google Lokal) mulai *Rp 1,5 Juta (Beli Putus, bebas sewa selamanya)* dan siap dalam 7–10 hari kerja.

Ini simulasi & rincian hitungan transparannya:
https://abinest.id/audit-gratis

Jika berkenan, boleh saya kirimkan contoh portofolio desain yang cocok untuk ${biz}?`,
      },
      {
        id: "school-ppdb",
        title: "3. Sekolah / Yayasan — Penawaran Web Profil, PPDB Online & SIAKAD",
        target: "Kepala Sekolah, Wakil Kurikulum, atau Ketua Yayasan Pendidikan",
        script: `Selamat siang ${pic} *${biz}* di ${city}, saya Abimanyu dari Abinest Studio.

Menjelang gelombang PPDB baru dan ujian semester, banyak sekolah mengeluhkan server ujian CBT yang tumbang saat ratusan siswa login bersamaan, atau biaya langganan aplikasi SIAKAD per siswa yang membengkak setiap tahun.

Kami menyediakan solusi *Portal PPDB Online, SIAKAD & Ujian CBT Anti-Down* dengan skema *Beli Putus (Rp 0 biaya per siswa selamanya)* dan garansi SLA 99.9%.

Bapak/Ibu dapat langsung mencoba simulasi E-Rapor & uji beban server CBT kami di link berikut:
https://abinest.id/demo

Apakah boleh saya kirimkan Proposal & RAB resminya untuk bahan pertimbangan yayasan?`,
      },
      {
        id: "erp-gudang",
        title: "4. Distributor / Ritel / Gudang — Sistem Stok & Kasir Tanpa Biaya Bulanan",
        target: "Owner Distributor, Toko Material, Ekspedisi, atau Grosir Multi-Cabang",
        script: `Halo ${pic} *${biz}*, semoga operasional di ${city} selalu lancar hari ini.

Banyak distributor dan toko grosir mengalami kendala stok antar gudang sering selisih, rekap faktur masih ketik ulang di Excel, atau terbebani biaya sewa software kasir per-cabang yang mahal tiap bulan.

Kami membangun *Sistem Stok Multi-Gudang, POS Kasir & Faktur PDF Otomatis* yang bisa dicoba langsung simulasinya di sini:
https://abinest.id/demo

Sistem selesai dalam <14 hari, *100% Hak Milik Source Code*, dan *Rp 0 biaya sewa per kasir selamanya*. Boleh kami jadwalkan demo singkat 10 menit via WhatsApp/Zoom?`,
      },
      {
        id: "follow-up",
        title: "5. Follow-Up Elegan Setelah Kirim Link Demo / Proposal",
        target: "Prospek yang sudah menerima link /demo atau dokumen PDF 2–3 hari lalu",
        script: `Selamat pagi ${pic} *${biz}* 🙏

Menyambung diskusi kita mengenai sistem untuk ${biz} beberapa hari lalu—apakah dokumen penawaran & simulasi demo di https://abinest.id/demo sudah sempat Bapak/Ibu tinjau bersama tim?

Jika ada modul yang ingin disesuaikan agar masuk ke anggaran ${city} saat ini (tersedia juga opsi *Terima Beres bulanan* mulai Rp 350rb tanpa biaya awal besar), silakan beri tahu saya bagian mana yang perlu kita sesuaikan. Terima kasih banyak!`,
      },
    ];
  }, [prospectPic, prospectBusiness, prospectCity, prospectIssue]);

  const handleCopyOutreach = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedScriptId(id);
      setTimeout(() => setCopiedScriptId(null), 2000);
    } catch {
      setCopiedScriptId(null);
    }
  };

  const todayFormatted = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="py-8 sm:py-12 print:py-0 bg-[#F8FAFC] print:bg-white">
      <div className="max-w-[1320px] print:max-w-none mx-auto px-4 sm:px-8 print:px-0 space-y-6 print:space-y-0">
        {/* Top Header + Studio Tab Switcher (Hidden in PDF Print) */}
        <div className="print:hidden text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1D4ED8] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SALES ENGINE ABINEST · PROPOSAL PDF &amp; OUTREACH KIT</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Generator Proposal/RAB Resmi &amp;{" "}
            <span className="text-[#2563EB]">Kit Closing WhatsApp B2B</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Cetak penawaran harga resmi berlogo Abinest dalam format PDF A4 siap kirim dalam 10 detik, atau salin script WhatsApp bernilai tinggi untuk membidik prospek Google Maps &amp; B2B.
          </p>

          <div className="pt-2 flex justify-center">
            <div className="grid grid-cols-2 sm:inline-flex w-full sm:w-auto p-1 sm:p-1.5 rounded-xl bg-white border border-slate-300 shadow-xs gap-1 sm:gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("proposal")}
                className={`px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  activeTab === "proposal"
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Generator Proposal &amp; RAB (PDF A4)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("outreach")}
                className={`px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  activeTab === "outreach"
                    ? "bg-[#0F172A] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Kit Outreach WhatsApp B2B</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: PROPOSAL & RAB GENERATOR */}
        {activeTab === "proposal" && (
          <div className="grid grid-cols-1 xl:grid-cols-12 print:block gap-6 items-start">
            {/* LEFT PANEL (5 Cols): Editor (Hidden on Print) */}
            <div className="xl:col-span-5 print:hidden ui-card overflow-hidden shadow-md">
              <div className="ui-card-header">
                <span className="text-sm font-extrabold text-[#0F172A]">
                  1. Editor Data Penawaran &amp; Modul RAB
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  Live A4 Sync
                </span>
              </div>

              <div className="ui-card-body space-y-5">
                {/* Quick 1-Click Presets */}
                <div className="space-y-2">
                  <span className="ui-label">Preset Paket Cepat (1-Klik Isi Otomatis)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PRESETS.map((p) => {
                      const active = selectedPresetId === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => applyPreset(p)}
                          className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                            active
                              ? "bg-blue-50 border-2 border-[#2563EB] text-blue-950"
                              : "bg-white hover:bg-slate-50 border-slate-300 text-slate-700"
                          }`}
                        >
                          <div className="text-[11px] font-extrabold leading-snug">{p.label}</div>
                          <div className="text-[10.5px] font-bold text-[#2563EB] mt-0.5">
                            {p.badge}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Scheme Switcher */}
                <div className="space-y-1.5">
                  <span className="ui-label">Skema Kepemilikan Sistem</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setScheme("beli-putus")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border cursor-pointer ${
                        scheme === "beli-putus"
                          ? "bg-[#0D9488] text-white border-[#0D9488]"
                          : "bg-white text-slate-700 border-slate-300"
                      }`}
                    >
                      Beli Putus (100% Hak Milik)
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheme("terima-beres")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border cursor-pointer ${
                        scheme === "terima-beres"
                          ? "bg-[#2563EB] text-white border-[#2563EB]"
                          : "bg-white text-slate-700 border-slate-300"
                      }`}
                    >
                      Sewa / Terima Beres
                    </button>
                  </div>
                </div>

                {/* Client Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="ui-label">Nama PIC / Klien</label>
                    <input
                      type="text"
                      value={clientPic}
                      onChange={(e) => setClientPic(e.target.value)}
                      className="ui-input py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Nama Instansi / Perusahaan</label>
                    <input
                      type="text"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      className="ui-input py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Kota</label>
                    <input
                      type="text"
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      className="ui-input py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Nomor Dokumen</label>
                    <input
                      type="text"
                      value={docNumber}
                      onChange={(e) => setDocNumber(e.target.value)}
                      className="ui-input py-2 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Estimasi Pengerjaan</label>
                    <input
                      type="text"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="ui-input py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Masa Berlaku</label>
                    <input
                      type="text"
                      value={validUntil}
                      onChange={(e) => setValidUntil(e.target.value)}
                      className="ui-input py-2 text-xs"
                    />
                  </div>
                </div>

                {/* Dynamic Items Table */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="ui-label mb-0">Rincian Item Modul &amp; Biaya</span>
                    <button
                      type="button"
                      onClick={handleAddItem}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Tambah Modul</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {items.map((item, idx) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-300 space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-extrabold text-[#2563EB]">
                            Modul #{idx + 1}
                          </span>
                          {items.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleDeleteItem(item.id)}
                              className="text-rose-600 hover:text-rose-800 p-1 rounded cursor-pointer"
                              aria-label="Hapus Modul"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleUpdateItem(item.id, "name", e.target.value)}
                          placeholder="Nama Modul"
                          className="ui-input py-1.5 text-xs font-bold"
                        />
                        <input
                          type="text"
                          value={item.spec}
                          onChange={(e) => handleUpdateItem(item.id, "spec", e.target.value)}
                          placeholder="Spesifikasi / Cakupan"
                          className="ui-input py-1.5 text-xs"
                        />
                        <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500 block mb-0.5">
                            Biaya Investasi (Rp)
                          </label>
                          <input
                            type="number"
                            min={0}
                            step={50000}
                            value={item.price}
                            onChange={(e) =>
                              handleUpdateItem(item.id, "price", Number(e.target.value) || 0)
                            }
                            className="ui-input py-1.5 text-xs font-mono font-bold"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="ui-label">Catatan Garansi &amp; SLA</label>
                  <textarea
                    rows={2}
                    value={warrantyNote}
                    onChange={(e) => setWarrantyNote(e.target.value)}
                    className="ui-input py-2 text-xs resize-none"
                  />
                </div>
              </div>

              <div className="ui-card-footer space-y-2.5">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0F172A] hover:bg-[#2563EB] shadow-sm transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / Simpan PDF Resmi (A4)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopyProposalSummary}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold text-slate-800 cursor-pointer"
                  >
                    {copiedProposalWa ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Ringkasan WA</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/${ABINEST_WA_NUMBER}?text=${encodeURIComponent(
                      proposalWaSummary
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white shadow-xs transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Kirim ke WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL (7 Cols -> Full Width in Print): OFFICIAL A4 DOCUMENT PREVIEW */}
            <div className="xl:col-span-7 print:w-full">
              <div className="bg-white border border-slate-300 print:border-none rounded-2xl print:rounded-none shadow-lg print:shadow-none p-6 sm:p-10 print:p-0 text-[#0F172A] space-y-6">
                {/* Kop Surat Resmi Abinest */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b-2 border-[#0F172A]">
                  <div className="space-y-1.5">
                    <AbinestLogo size="md" showTagline={true} />
                    <p className="text-[11px] font-bold text-slate-700">
                      PT Abinest Teknologi Nusantara — Software &amp; Automation Studio
                    </p>
                    <p className="text-[11px] text-slate-600">
                      Jakarta Selatan &amp; Tangerang · WhatsApp: +62 813-9858-9745 · Email: halo@abinest.id
                    </p>
                  </div>

                  <div className="sm:text-right space-y-1">
                    <div className="inline-block px-3 py-1 rounded bg-[#0F172A] text-white text-[10px] font-extrabold uppercase tracking-widest">
                      PROPOSAL &amp; RAB RESMI
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-800 pt-1">
                      No: {docNumber}
                    </div>
                    <div className="text-[11px] text-slate-500">Tanggal: {todayFormatted}</div>
                  </div>
                </div>

                {/* Metadata Penerima & Proyek */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 border border-slate-300 rounded-xl p-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
                      Ditujukan Kepada Yth:
                    </span>
                    <div className="font-extrabold text-sm text-[#0F172A]">{clientPic}</div>
                    <div className="font-bold text-[#2563EB]">{clientCompany}</div>
                    <div className="text-slate-600">Lokasi: {clientCity}</div>
                  </div>

                  <div className="space-y-1 sm:border-l sm:border-slate-300 sm:pl-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
                      Parameter Kerja Sama:
                    </span>
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-500">Skema Lisensi:</span>
                      <span className="font-bold text-[#0F172A] text-right">
                        {scheme === "beli-putus"
                          ? "Beli Putus (100% Hak Milik)"
                          : "Sewa / Terima Beres"}
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-500">Target Selesai:</span>
                      <span className="font-bold text-[#0F172A]">{timeline}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-500">Masa Berlaku:</span>
                      <span className="font-semibold text-slate-700 text-right">{validUntil}</span>
                    </div>
                  </div>
                </div>

                {/* Tabel RAB Resmi Bergaris Tegas */}
                <div className="border border-slate-300 rounded-xl overflow-hidden">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#0F172A] text-white divide-x divide-slate-700">
                        <th className="py-2.5 px-3 font-bold w-10 text-center">No</th>
                        <th className="py-2.5 px-3 font-bold">Modul Sistem &amp; Ruang Lingkup Kerja</th>
                        <th className="py-2.5 px-3 font-bold text-right w-36">Investasi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {items.map((item, idx) => (
                        <tr
                          key={item.id}
                          className={`divide-x divide-slate-200 ${
                            idx % 2 === 1 ? "bg-slate-50/70" : "bg-white"
                          }`}
                        >
                          <td className="py-3 px-3 text-center font-bold text-slate-600 align-top">
                            {idx + 1}
                          </td>
                          <td className="py-3 px-3 align-top">
                            <div className="font-extrabold text-[#0F172A]">{item.name}</div>
                            <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                              {item.spec}
                            </div>
                          </td>
                          <td className="py-3 px-3 text-right font-extrabold text-[#0F172A] tabular-nums align-top">
                            {formatRupiah(Number(item.price) || 0)}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50/80 divide-x divide-slate-300 border-t-2 border-slate-300">
                        <td colSpan={2} className="py-3 px-3 font-extrabold text-sm text-[#0F172A] text-right">
                          TOTAL INVESTASI ({scheme === "beli-putus" ? "BELI PUTUS" : "TERIMA BERES"})
                        </td>
                        <td className="py-3 px-3 text-right font-black text-base text-[#2563EB] tabular-nums">
                          {formatRupiah(totalInvestment)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Termin Pembayaran & Jaminan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="border border-slate-300 rounded-xl p-3.5 space-y-1.5">
                    <div className="font-extrabold text-[#0F172A] uppercase tracking-wide text-[11px]">
                      Skema Termin Pembayaran:
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span>• DP 50% (Kick-Off &amp; Blueprint):</span>
                      <span className="font-bold tabular-nums">{formatRupiah(dpAmount)}</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span>• Pelunasan 50% (Uji Staging &amp; Serah Terima):</span>
                      <span className="font-bold tabular-nums">{formatRupiah(finalAmount)}</span>
                    </div>
                  </div>

                  <div className="border border-emerald-300 bg-emerald-50/60 rounded-xl p-3.5 space-y-1">
                    <div className="font-extrabold text-emerald-950 uppercase tracking-wide text-[11px] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Garansi &amp; Ketentuan Teknis:</span>
                    </div>
                    <p className="text-[11px] text-emerald-950 leading-relaxed">{warrantyNote}</p>
                  </div>
                </div>

                {/* Kolom Pengesahan */}
                <div className="pt-6 grid grid-cols-2 gap-8 text-xs border-t border-slate-200">
                  <div>
                    <p className="text-slate-500">Hormat kami,</p>
                    <p className="font-extrabold text-[#0F172A] mt-0.5">
                      Abinest Software &amp; Automation Studio
                    </p>
                    <div className="h-12" />
                    <p className="font-bold text-[#0F172A] underline">
                      Abimanyu — Founder &amp; Lead Architect
                    </p>
                    <p className="text-[11px] text-slate-500">WhatsApp Resmi: 0813-9858-9745</p>
                  </div>

                  <div className="text-right">
                    <p className="text-slate-500">Disetujui oleh Klien,</p>
                    <p className="font-extrabold text-[#0F172A] mt-0.5">{clientCompany}</p>
                    <div className="h-12" />
                    <p className="font-bold text-[#0F172A] underline">{clientPic}</p>
                    <p className="text-[11px] text-slate-500">{clientCity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KIT OUTREACH WHATSAPP B2B */}
        {activeTab === "outreach" && (
          <div className="print:hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 4 Cols: Prospect Personalization Form */}
            <div className="lg:col-span-4 ui-card overflow-hidden shadow-md">
              <div className="ui-card-header">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#2563EB]" />
                  <h2 className="text-sm font-extrabold text-[#0F172A]">
                    Data Target Prospek (Maps / B2B)
                  </h2>
                </div>
              </div>

              <div className="ui-card-body space-y-4">
                <div>
                  <label className="ui-label">Nama Prospek / Panggilan PIC</label>
                  <input
                    type="text"
                    value={prospectPic}
                    onChange={(e) => setProspectPic(e.target.value)}
                    placeholder="Contoh: Pak Budi / Ibu Sari"
                    className="ui-input py-2 text-xs"
                  />
                </div>

                <div>
                  <label className="ui-label">Nama Bisnis / Sekolah Target</label>
                  <input
                    type="text"
                    value={prospectBusiness}
                    onChange={(e) => setProspectBusiness(e.target.value)}
                    placeholder="Contoh: Toko Baja Jaya / SMK Harapan"
                    className="ui-input py-2 text-xs"
                  />
                </div>

                <div>
                  <label className="ui-label">Kota / Lokasi Target</label>
                  <input
                    type="text"
                    value={prospectCity}
                    onChange={(e) => setProspectCity(e.target.value)}
                    placeholder="Contoh: Tangerang / Jakarta Barat"
                    className="ui-input py-2 text-xs"
                  />
                </div>

                <div>
                  <label className="ui-label">Masalah yang Ditemukan (Audit Awal)</label>
                  <textarea
                    rows={3}
                    value={prospectIssue}
                    onChange={(e) => setProspectIssue(e.target.value)}
                    placeholder="Contoh: loading web di HP >6 detik atau tombol WA tidak muncul..."
                    className="ui-input py-2 text-xs resize-none"
                  />
                </div>

                <div>
                  <label className="ui-label">Nomor WA Target (Opsional)</label>
                  <input
                    type="tel"
                    value={prospectPhone}
                    onChange={(e) => setProspectPhone(e.target.value)}
                    placeholder="Contoh: 081234567890 (kosongkan utk test)"
                    className="ui-input py-2 text-xs font-mono"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Jika kosong, tombol kirim akan membuka chat uji coba ke WhatsApp Abinest (+62 813-9858-9745).
                  </p>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: 5 Battle-Tested Templates */}
            <div className="lg:col-span-8 space-y-4">
              {outreachTemplates.map((tpl) => {
                const isCopied = copiedScriptId === tpl.id;
                const waTarget = normalizeTargetPhone(prospectPhone);
                const waLink = `https://wa.me/${waTarget}?text=${encodeURIComponent(tpl.script)}`;

                return (
                  <div key={tpl.id} className="ui-card overflow-hidden shadow-xs">
                    <div className="ui-card-header flex-wrap gap-2">
                      <div>
                        <h3 className="text-sm font-extrabold text-[#0F172A]">{tpl.title}</h3>
                        <p className="text-[11px] text-slate-500">Target ideal: {tpl.target}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleCopyOutreach(tpl.id, tpl.script)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold text-slate-800 cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">Tersalin!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Salin Script WA</span>
                            </>
                          )}
                        </button>

                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white shadow-xs transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>
                            {prospectPhone.trim()
                              ? "Buka Chat WA ke Nomor Target"
                              : "Uji Kirim ke WA"}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50/70">
                      <pre className="whitespace-pre-wrap font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-white border border-slate-200 rounded-xl p-4">
                        {tpl.script}
                      </pre>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
