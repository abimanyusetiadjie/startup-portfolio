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
    label: "1. Web UMKM & Profil Perusahaan (<0,8 detik)",
    badge: "Rp1.500.000",
    scheme: "beli-putus",
    timeline: "7 – 10 Hari Kerja",
    warrantyNote:
      "Garansi perbaikan kutu program gratis 90 hari, skor Google PageSpeed Mobile ≥95/100, serta penyerahan penuh 100% kode program & kontrol domain.",
    items: [
      {
        id: "m1",
        name: "Arsitektur Web Next.js 15 Cepat (<0,8 detik)",
        spec: "Halaman Beranda, Layanan, Portofolio, & Tata Letak Seluler",
        price: 950000,
      },
      {
        id: "m2",
        name: "Integrasi Alur WhatsApp & SEO Google Lokal",
        spec: "Tombol ajakan terarah ke WhatsApp bisnis + Sitemap & Metadata JSON-LD",
        price: 350000,
      },
      {
        id: "m3",
        name: "Penyiapan Hosting Edge, SSL HTTPS & Pelatihan Admin",
        spec: "Rilis produksi tangguh + video panduan ubah teks & foto",
        price: 200000,
      },
    ],
  },
  {
    id: "erp-gudang",
    label: "2. Sistem ERP Kustom / Stok Gudang & Kasir",
    badge: "Rp4.000.000",
    scheme: "beli-putus",
    timeline: "14 Hari Kerja",
    warrantyNote:
      "Pengguna, kasir & cabang tak terbatas dengan Rp0 biaya lisensi bulanan selamanya. Kode program & basis data PostgreSQL menjadi aset penuh milik klien.",
    items: [
      {
        id: "e1",
        name: "Modul Master Produk, Multi-Gudang & Stok Real-Time",
        spec: "Kartu stok masuk/keluar, peringatan stok menipis, & riwayat mutasi",
        price: 1800000,
      },
      {
        id: "e2",
        name: "Modul POS Kasir & Pembuat Faktur PDF Otomatis",
        spec: "Cetak struk/faktur resmi, piutang/tempo, & rekap laba rugi harian",
        price: 1450000,
      },
      {
        id: "e3",
        name: "Manajemen Hak Akses Peran, Rilis & Pelatihan Staf",
        spec: "Peran Pemilik, Admin Gudang, Kasir + uji beban & pendampingan operasi",
        price: 750000,
      },
    ],
  },
  {
    id: "siakad-ppdb",
    label: "3. Portal PPDB & SIAKAD Sekolah Anti-Tumbang",
    badge: "Rp4.500.000",
    scheme: "beli-putus",
    timeline: "14 Hari Kerja",
    warrantyNote:
      "Garansi SLA Anti-Tumbang 99,9% saat puncak PPDB dan Ujian CBT serentak. Bebas biaya per siswa selamanya (100% hak milik institusi/yayasan).",
    items: [
      {
        id: "s1",
        name: "Portal Profil Sekolah & Pendaftaran PPDB Daring",
        spec: "Formulir digital, unggah berkas siswa, verifikasi admin & kartu peserta",
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
        spec: "Simulasi masuk serentak + sesi bimbingan teknis guru & staf TU",
        price: 750000,
      },
    ],
  },
  {
    id: "ai-whatsapp",
    label: "4. Automasi AI & Bot WhatsApp Resmi",
    badge: "Mulai Rp1.500.000",
    scheme: "beli-putus",
    timeline: "7 – 14 Hari Kerja",
    warrantyNote:
      "Terhubung dengan jalur WhatsApp resmi & alur kerja otomatis. Seluruh prompt dan alur kerja 100% milik klien.",
    items: [
      {
        id: "a1",
        name: "AI Sales & Customer Service Agent WhatsApp 24/7",
        spec: "Balas chat pelanggan otomatis terhubung katalog & stok real-time",
        price: 750000,
      },
      {
        id: "a2",
        name: "Alur Pencatatan Pesanan & Pembacaan Dokumen Otomatis",
        spec: "Rekap pesanan, bukti transfer, dan faktur masuk langsung ke database/spreadsheet",
        price: 450000,
      },
      {
        id: "a3",
        name: "Panel Kontrol, Pengambilalihan Admin & Pelatihan Tim",
        spec: "Notifikasi pesanan masuk ke tim internal, jeda bot instan, dan panduan operasional",
        price: 300000,
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
        ? "Beli Putus (100% Hak Milik Kode Program, Rp0 Biaya Bulanan)"
        : "Sewa / Terima Beres (Managed Cloud, Peladen & Pemeliharaan Penuh)";
    const moduleLines = items
      .map((m, i) => `${i + 1}. ${m.name} (${formatRupiah(Number(m.price) || 0)})`)
      .join("\n");

    return `*PENAWARAN RESMI ABINEST DIGITAL SYSTEMS*
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
        title: "1. Audit Website Lambat / Tampilan Mobile Kurang Rapi",
        target: "Pemilik Bisnis yang sudah punya web tetapi lambat di HP",
        script: `Selamat pagi ${pic} dari *${biz}* (${city}), perkenalkan saya Abimanyu dari Abinest Digital Systems.

Tadi saya membuka profil dan website ${biz} lewat HP, dan melihat ${issue}. Biasanya calon pembeli dari Google di area ${city} langsung keluar dalam 3 detik sebelum sempat menghubungi admin.

Kebetulan saya sudah menyiapkan *simulasi sistem & tampilan baru (<0,8 detik)* untuk ${biz}. Bapak/Ibu juga bisa melihat contoh performa kami di sini:
https://abinest.id/demo

Boleh saya buatkan 1 halaman *pratinjau simulasi gratis* khusus untuk ${biz} agar Bapak/Ibu bisa melihat perbandingannya tanpa ikatan apa pun?`,
      },
      {
        id: "maps-no-web",
        title: "2. Bisnis Ramai di Google Maps tapi Belum Punya Website Resmi",
        target: "UMKM, Klinik, Kontraktor, atau Pemasok dengan banyak ulasan di Google Maps",
        script: `Halo ${pic} *${biz}* (${city}),

Saya melihat reputasi dan ulasan ${biz} di Google Maps sudah sangat bagus, tetapi belum tertaut dengan situs web resmi perusahaan. Akibatnya, saat calon klien korporat mencari vendor di Google, kepercayaan mereka sering kalah oleh kompetitor yang punya profil & katalog resmi.

Di Abinest Digital Systems, kami membantu usaha di ${city} memiliki Situs Web Resmi (<0,8 detik + SEO Google Lokal) mulai *Rp1,5 Juta (Beli Putus, bebas sewa selamanya)* dan siap dalam 7–10 hari kerja.

Ini simulasi & rincian hitungan transparannya:
https://abinest.id/harga

Jika berkenan, boleh saya kirimkan contoh portofolio desain yang cocok untuk ${biz}?`,
      },
      {
        id: "school-ppdb",
        title: "3. Sekolah / Yayasan — Penawaran Web Profil, PPDB Daring & SIAKAD",
        target: "Kepala Sekolah, Wakil Kurikulum, atau Ketua Yayasan Pendidikan",
        script: `Selamat siang ${pic} *${biz}* di ${city}, saya Abimanyu dari Abinest Digital Systems.

Menjelang gelombang PPDB baru dan ujian semester, banyak sekolah mengeluhkan peladen ujian CBT yang tumbang saat ratusan siswa masuk bersamaan, atau biaya langganan aplikasi SIAKAD per siswa yang membengkak setiap tahun.

Kami menyediakan solusi *Portal PPDB Daring, SIAKAD & Ujian CBT Anti-Tumbang* dengan skema *Beli Putus (Rp0 biaya per siswa selamanya)* dan garansi SLA 99,9%.

Bapak/Ibu dapat langsung mencoba simulasi E-Rapor & uji beban peladen CBT kami di tautan berikut:
https://abinest.id/demo

Apakah boleh saya kirimkan Proposal & RAB resminya untuk bahan pertimbangan yayasan?`,
      },
      {
        id: "erp-gudang",
        title: "4. Distributor / Ritel / Gudang — Sistem Stok & Kasir Tanpa Biaya Bulanan",
        target: "Pemilik Distributor, Toko Material, Ekspedisi, atau Grosir Multi-Cabang",
        script: `Halo ${pic} *${biz}*, semoga operasional di ${city} selalu lancar hari ini.

Banyak distributor dan toko grosir mengalami kendala stok antar gudang sering selisih, rekap faktur masih ketik ulang di Excel, atau terbebani biaya sewa perangkat lunak kasir per cabang yang mahal tiap bulan.

Kami membangun *Sistem Stok Multi-Gudang, POS Kasir & Faktur PDF Otomatis* yang bisa dicoba langsung simulasinya di sini:
https://abinest.id/demo

Sistem selesai dalam <14 hari, *100% Hak Milik Kode Program*, dan *Rp0 biaya sewa per kasir selamanya*. Boleh kami jadwalkan demo singkat 10 menit via WhatsApp/Zoom?`,
      },
      {
        id: "follow-up",
        title: "5. Follow-Up Elegan Setelah Kirim Tautan Demo / Proposal",
        target: "Prospek yang sudah menerima tautan /demo atau dokumen PDF 2–3 hari lalu",
        script: `Selamat pagi ${pic} *${biz}*,

Menyambung diskusi kita mengenai sistem untuk ${biz} beberapa hari lalu—apakah dokumen penawaran & simulasi demo di https://abinest.id/demo sudah sempat Bapak/Ibu tinjau bersama tim?

Jika ada modul yang ingin disesuaikan agar masuk ke anggaran ${city} saat ini (tersedia juga opsi *Terima Beres bulanan* mulai Rp350 ribu tanpa biaya awal besar), silakan beri tahu saya bagian mana yang perlu kita sesuaikan. Terima kasih banyak!`,
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
    <section className="py-10 sm:py-14 print:py-0 bg-[#F7F7F7] print:bg-white">
      <div className="sig-container print:max-w-none print:px-0 space-y-8 print:space-y-0">
        {/* Top Header + Tab Switcher (Hidden in Print) */}
        <div className="print:hidden flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E8E8E8]">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
              Alat internal Abinest · Proposal PDF A4 &amp; Outreach B2B
            </p>
            <h1 className="text-[clamp(1.9rem,3vw+1rem,3rem)] font-bold tracking-[-0.025em] leading-[1.08] text-[#171717]">
              Generator proposal.
              <br />
              <span className="text-[#6F6F71]">Siap cetak A4 &amp; kirim WA.</span>
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:inline-flex p-1.5 rounded-[16px] bg-white border border-[#E8E8E8] gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("proposal")}
              className={`px-4 py-2.5 rounded-[12px] text-xs sm:text-[13.5px] font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                activeTab === "proposal"
                  ? "bg-[#171717] text-[#F7F7F7]"
                  : "text-[#6F6F71] hover:text-[#171717] hover:bg-[#EDEDED]"
              }`}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Proposal &amp; RAB (A4)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("outreach")}
              className={`px-4 py-2.5 rounded-[12px] text-xs sm:text-[13.5px] font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                activeTab === "outreach"
                  ? "bg-[#171717] text-[#F7F7F7]"
                  : "text-[#6F6F71] hover:text-[#171717] hover:bg-[#EDEDED]"
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Kit Outreach WA B2B</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PROPOSAL & RAB GENERATOR */}
        {activeTab === "proposal" && (
          <div className="grid grid-cols-1 xl:grid-cols-12 print:block gap-6 items-start">
            {/* LEFT PANEL (5 Cols): Editor */}
            <div className="xl:col-span-5 print:hidden ui-card overflow-hidden">
              <div className="ui-card-header">
                <span className="text-[14.5px] font-semibold text-[#171717]">
                  1. Editor data penawaran &amp; modul RAB
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-[8px] bg-white text-[#171717] border border-[#E8E8E8]">
                  A4 SYNC
                </span>
              </div>

              <div className="ui-card-body space-y-5">
                {/* Quick Presets */}
                <div className="space-y-2">
                  <span className="ui-label">Preset Paket Cepat</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PRESETS.map((p) => {
                      const active = selectedPresetId === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => applyPreset(p)}
                          className={`text-left p-3 rounded-[14px] border transition-all cursor-pointer ${
                            active
                              ? "bg-[#171717] border-[#171717] text-[#F7F7F7]"
                              : "bg-white hover:border-[#FFD124] border-[#E8E8E8] text-[#171717]"
                          }`}
                        >
                          <div className="text-[11.5px] font-medium leading-snug">
                            {p.label}
                          </div>
                          <div
                            className={`text-[11px] font-mono mt-1 ${
                              active ? "text-[#FFD124]" : "text-[#6F6F71]"
                            }`}
                          >
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
                      className={`py-2.5 px-3 rounded-[12px] text-xs font-medium border cursor-pointer transition-colors ${
                        scheme === "beli-putus"
                          ? "bg-[#3C846E] text-white border-[#3C846E]"
                          : "bg-white text-[#171717] border-[#E8E8E8] hover:border-[#FFD124]"
                      }`}
                    >
                      Beli Putus (100% Milik)
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheme("terima-beres")}
                      className={`py-2.5 px-3 rounded-[12px] text-xs font-medium border cursor-pointer transition-colors ${
                        scheme === "terima-beres"
                          ? "bg-[#171717] text-white border-[#171717]"
                          : "bg-white text-[#171717] border-[#E8E8E8] hover:border-[#FFD124]"
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
                      className="ui-input bg-white py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Nama Instansi / Perusahaan</label>
                    <input
                      type="text"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      className="ui-input bg-white py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Kota</label>
                    <input
                      type="text"
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      className="ui-input bg-white py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Nomor Dokumen</label>
                    <input
                      type="text"
                      value={docNumber}
                      onChange={(e) => setDocNumber(e.target.value)}
                      className="ui-input bg-white py-2 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Estimasi Pengerjaan</label>
                    <input
                      type="text"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="ui-input bg-white py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="ui-label">Masa Berlaku</label>
                    <input
                      type="text"
                      value={validUntil}
                      onChange={(e) => setValidUntil(e.target.value)}
                      className="ui-input bg-white py-2 text-xs"
                    />
                  </div>
                </div>

                {/* Dynamic Items */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="ui-label mb-0">Rincian Item Modul &amp; Biaya</span>
                    <button
                      type="button"
                      onClick={handleAddItem}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[10px] bg-[#171717] text-white text-[11.5px] font-medium cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Tambah Modul</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {items.map((item, idx) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-[14px] bg-[#F7F7F7] border border-[#E8E8E8] space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-mono text-[#6F6F71]">
                            MODUL #{idx + 1}
                          </span>
                          {items.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleDeleteItem(item.id)}
                              className="text-[#E1251B] hover:opacity-75 p-1 rounded cursor-pointer"
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
                          className="ui-input bg-white py-1.5 text-xs font-medium"
                        />
                        <input
                          type="text"
                          value={item.spec}
                          onChange={(e) => handleUpdateItem(item.id, "spec", e.target.value)}
                          placeholder="Spesifikasi / Cakupan"
                          className="ui-input bg-white py-1.5 text-xs"
                        />
                        <div>
                          <label className="text-[10px] font-mono uppercase text-[#6F6F71] block mb-0.5">
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
                            className="ui-input bg-white py-1.5 text-xs font-mono font-semibold"
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
                    className="ui-input bg-white py-2 text-xs resize-none"
                  />
                </div>
              </div>

              <div className="ui-card-footer space-y-2.5">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="sig-btn-primary w-full"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / Simpan PDF Resmi (A4)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopyProposalSummary}
                    className="sig-btn-outline bg-white text-xs"
                  >
                    {copiedProposalWa ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#3C846E]" />
                        <span className="text-[#3C846E]">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Ringkasan</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/${ABINEST_WA_NUMBER}?text=${encodeURIComponent(
                      proposalWaSummary
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 h-[44px] px-4 rounded-[16px] bg-[#3C846E] hover:opacity-90 text-xs font-medium text-white transition-opacity"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Kirim via WA</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL (7 Cols -> Full Width in Print): OFFICIAL A4 DOCUMENT PREVIEW */}
            <div className="xl:col-span-7 print:w-full">
              <div className="bg-white border border-[#E8E8E8] print:border-none rounded-[20px] print:rounded-none p-6 sm:p-10 print:p-0 text-[#171717] space-y-6">
                {/* Kop Surat Resmi Abinest */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b-2 border-[#171717]">
                  <div className="space-y-1.5">
                    <AbinestLogo size="md" showTagline={true} />
                    <p className="text-[11.5px] font-semibold text-[#171717]">
                      Abinest Digital Systems — Studio Rekayasa Perangkat Lunak
                    </p>
                    <p className="text-[11px] text-[#6F6F71]">
                      Jakarta &amp; Surabaya · WhatsApp: +62 813-9858-9745 · Email: abinest.id@gmail.com
                    </p>
                  </div>

                  <div className="sm:text-right space-y-1">
                    <div className="inline-block px-3 py-1 rounded-[8px] bg-[#171717] text-[#FFD124] text-[10px] font-mono uppercase tracking-widest">
                      PROPOSAL &amp; RAB RESMI
                    </div>
                    <div className="text-xs font-mono font-semibold text-[#171717] pt-1">
                      No: {docNumber}
                    </div>
                    <div className="text-[11px] text-[#6F6F71]">
                      Tanggal: {todayFormatted}
                    </div>
                  </div>
                </div>

                {/* Metadata Penerima & Proyek */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F7F7F7] border border-[#E8E8E8] rounded-[14px] p-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6F6F71] block">
                      Ditujukan Kepada Yth:
                    </span>
                    <div className="font-semibold text-sm text-[#171717]">
                      {clientPic}
                    </div>
                    <div className="font-semibold text-[#171717]">
                      {clientCompany}
                    </div>
                    <div className="text-[#6F6F71]">Lokasi: {clientCity}</div>
                  </div>

                  <div className="space-y-1 sm:border-l sm:border-[#E8E8E8] sm:pl-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6F6F71] block">
                      Parameter Kerja Sama:
                    </span>
                    <div className="flex justify-between gap-2">
                      <span className="text-[#6F6F71]">Skema Lisensi:</span>
                      <span className="font-semibold text-[#171717] text-right">
                        {scheme === "beli-putus"
                          ? "Beli Putus (100% Hak Milik)"
                          : "Sewa / Terima Beres"}
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-[#6F6F71]">Target Selesai:</span>
                      <span className="font-semibold text-[#171717]">
                        {timeline}
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-[#6F6F71]">Masa Berlaku:</span>
                      <span className="text-[#171717] text-right">
                        {validUntil}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tabel RAB Resmi */}
                <div className="border border-[#E8E8E8] rounded-[14px] overflow-hidden">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#171717] text-white divide-x divide-white/10">
                        <th className="py-2.5 px-3 font-mono w-10 text-center">No</th>
                        <th className="py-2.5 px-3 font-medium">
                          Modul Sistem &amp; Ruang Lingkup Kerja
                        </th>
                        <th className="py-2.5 px-3 font-medium text-right w-36">
                          Investasi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E8]">
                      {items.map((item, idx) => (
                        <tr
                          key={item.id}
                          className={`divide-x divide-[#E8E8E8] ${
                            idx % 2 === 1 ? "bg-[#F7F7F7]/70" : "bg-white"
                          }`}
                        >
                          <td className="py-3 px-3 text-center font-mono text-[#6F6F71] align-top">
                            {idx + 1}
                          </td>
                          <td className="py-3 px-3 align-top">
                            <div className="font-semibold text-[#171717]">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-[#6F6F71] mt-0.5 leading-snug">
                              {item.spec}
                            </div>
                          </td>
                          <td className="py-3 px-3 text-right font-semibold text-[#171717] tabular-nums align-top">
                            {formatRupiah(Number(item.price) || 0)}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-[#F7F7F7] divide-x divide-[#E8E8E8] border-t-2 border-[#171717]">
                        <td
                          colSpan={2}
                          className="py-3 px-3 font-bold text-sm text-[#171717] text-right"
                        >
                          TOTAL INVESTASI ({scheme === "beli-putus" ? "BELI PUTUS" : "TERIMA BERES"})
                        </td>
                        <td className="py-3 px-3 text-right font-bold text-base text-[#171717] tabular-nums">
                          {formatRupiah(totalInvestment)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Termin Pembayaran & Jaminan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="border border-[#E8E8E8] rounded-[14px] p-4 space-y-1.5">
                    <div className="font-mono text-[#6F6F71] uppercase tracking-wider text-[10.5px]">
                      Skema Termin Pembayaran
                    </div>
                    <div className="flex justify-between text-[#171717]">
                      <span>DP 50% (Kick-Off):</span>
                      <span className="font-semibold tabular-nums">
                        {formatRupiah(dpAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#171717]">
                      <span>Pelunasan 50% (Serah Terima):</span>
                      <span className="font-semibold tabular-nums">
                        {formatRupiah(finalAmount)}
                      </span>
                    </div>
                  </div>

                  <div className="border border-[#E8E8E8] bg-[#F7F7F7] rounded-[14px] p-4 space-y-1.5">
                    <div className="font-mono text-[#171717] uppercase tracking-wider text-[10.5px] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#3C846E]" />
                      <span>Garansi &amp; Ketentuan Teknis</span>
                    </div>
                    <p className="text-[11px] text-[#6F6F71] leading-relaxed">
                      {warrantyNote}
                    </p>
                  </div>
                </div>

                {/* Kolom Pengesahan */}
                <div className="pt-6 grid grid-cols-2 gap-8 text-xs border-t border-[#E8E8E8]">
                  <div>
                    <p className="text-[#6F6F71]">Hormat kami,</p>
                    <p className="font-semibold text-[#171717] mt-0.5">
                      Abinest Digital Systems
                    </p>
                    <div className="h-12" />
                    <p className="font-semibold text-[#171717] underline">
                      Abimanyu — Founder &amp; Lead Architect
                    </p>
                    <p className="text-[11px] text-[#6F6F71]">
                      WhatsApp Resmi: +62 813-9858-9745
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[#6F6F71]">Disetujui oleh Klien,</p>
                    <p className="font-semibold text-[#171717] mt-0.5">
                      {clientCompany}
                    </p>
                    <div className="h-12" />
                    <p className="font-semibold text-[#171717] underline">
                      {clientPic}
                    </p>
                    <p className="text-[11px] text-[#6F6F71]">{clientCity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KIT OUTREACH WHATSAPP B2B */}
        {activeTab === "outreach" && (
          <div className="print:hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 ui-card overflow-hidden">
              <div className="ui-card-header">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#171717]" />
                  <h2 className="text-[14.5px] font-semibold text-[#171717]">
                    Data target prospek (B2B)
                  </h2>
                </div>
              </div>

              <div className="ui-card-body space-y-4">
                <div>
                  <label className="ui-label">Nama Prospek / PIC</label>
                  <input
                    type="text"
                    value={prospectPic}
                    onChange={(e) => setProspectPic(e.target.value)}
                    placeholder="Contoh: Pak Budi / Ibu Sari"
                    className="ui-input bg-white py-2 text-xs"
                  />
                </div>

                <div>
                  <label className="ui-label">Nama Bisnis / Sekolah Target</label>
                  <input
                    type="text"
                    value={prospectBusiness}
                    onChange={(e) => setProspectBusiness(e.target.value)}
                    placeholder="Contoh: Toko Baja Jaya / SMK Harapan"
                    className="ui-input bg-white py-2 text-xs"
                  />
                </div>

                <div>
                  <label className="ui-label">Kota / Lokasi Target</label>
                  <input
                    type="text"
                    value={prospectCity}
                    onChange={(e) => setProspectCity(e.target.value)}
                    placeholder="Contoh: Tangerang / Jakarta Barat"
                    className="ui-input bg-white py-2 text-xs"
                  />
                </div>

                <div>
                  <label className="ui-label">Temuan Audit Awal</label>
                  <textarea
                    rows={3}
                    value={prospectIssue}
                    onChange={(e) => setProspectIssue(e.target.value)}
                    placeholder="Contoh: loading web di HP >6 detik..."
                    className="ui-input bg-white py-2 text-xs resize-none"
                  />
                </div>

                <div>
                  <label className="ui-label">Nomor WA Target (Opsional)</label>
                  <input
                    type="tel"
                    value={prospectPhone}
                    onChange={(e) => setProspectPhone(e.target.value)}
                    placeholder="081234567890 (kosongkan utk test)"
                    className="ui-input bg-white py-2 text-xs font-mono"
                  />
                  <p className="text-[11px] text-[#6F6F71] mt-1">
                    Jika kosong, tombol membuka chat uji coba ke WhatsApp Abinest.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {outreachTemplates.map((tpl) => {
                const isCopied = copiedScriptId === tpl.id;
                const waTarget = normalizeTargetPhone(prospectPhone);
                const waLink = `https://wa.me/${waTarget}?text=${encodeURIComponent(
                  tpl.script
                )}`;

                return (
                  <div key={tpl.id} className="ui-card overflow-hidden">
                    <div className="ui-card-header flex-wrap gap-2">
                      <div>
                        <h3 className="text-[14.5px] font-semibold text-[#171717]">
                          {tpl.title}
                        </h3>
                        <p className="text-[11.5px] text-[#6F6F71]">
                          Target ideal: {tpl.target}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleCopyOutreach(tpl.id, tpl.script)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] border border-[#E8E8E8] bg-white hover:border-[#FFD124] text-xs font-medium text-[#171717] cursor-pointer transition-colors"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#3C846E]" />
                              <span className="text-[#3C846E]">Tersalin!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Salin Script</span>
                            </>
                          )}
                        </button>

                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] bg-[#171717] hover:opacity-90 text-xs font-medium text-white transition-opacity"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>
                            {prospectPhone.trim() ? "Buka WA Target" : "Uji Kirim WA"}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="p-4 bg-[#F7F7F7]">
                      <pre className="whitespace-pre-wrap font-sans text-[13px] text-[#171717] leading-relaxed bg-white border border-[#E8E8E8] rounded-[14px] p-4">
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
