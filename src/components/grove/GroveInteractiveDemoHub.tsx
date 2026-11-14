"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  GraduationCap,
  Bot,
  Search,
  RotateCcw,
  Plus,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
  Server,
  Users,
  FileText,
  Sparkles,
  ScanLine,
  MessageSquare,
  ShieldCheck,
  Calculator,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6281398589745";

type DemoTab = "erp" | "siakad" | "ai";

interface InventoryItem {
  sku: string;
  name: string;
  warehouse: string;
  stock: number;
  minStock: number;
  price: number;
}

interface MutationLog {
  id: string;
  time: string;
  type: "FAKTUR KELUAR" | "RESTOCK MASUK";
  sku: string;
  itemName: string;
  warehouse: string;
  qty: number;
  amount: number;
}

interface StudentRow {
  nisn: string;
  name: string;
  program: string;
  ppdbStatus: "Diterima · Gelombang 1" | "Aktif · Kelas XI IPA 1" | "Aktif · Kelas XII RPL";
  avgScore: number;
  attendance: string;
  subjects: { name: string; score: number; grade: string }[];
}

const INITIAL_INVENTORY: InventoryItem[] = [
  {
    sku: "BRG-101",
    name: "Kertas HVS A4 80gr (Dus 5 Rim)",
    warehouse: "Gudang Pusat Tangerang",
    stock: 48,
    minStock: 15,
    price: 265000,
  },
  {
    sku: "BRG-204",
    name: "Printer Thermal Bluetooth 80mm",
    warehouse: "Toko Ritel Jakarta",
    stock: 19,
    minStock: 8,
    price: 685000,
  },
  {
    sku: "BRG-309",
    name: "Scanner Barcode 2D Wireless",
    warehouse: "Gudang Cabang Bekasi",
    stock: 12,
    minStock: 10,
    price: 540000,
  },
  {
    sku: "BRG-412",
    name: "Kabel LAN Cat6 Belden (Roll 305m)",
    warehouse: "Gudang Pusat Tangerang",
    stock: 9,
    minStock: 6,
    price: 1850000,
  },
  {
    sku: "BRG-518",
    name: "Router Mikrotik RB4011 Dual Band",
    warehouse: "Toko Ritel Jakarta",
    stock: 7,
    minStock: 4,
    price: 2950000,
  },
  {
    sku: "BRG-625",
    name: "Label Resi Thermal 100x150mm (Pack)",
    warehouse: "Gudang Cabang Bekasi",
    stock: 64,
    minStock: 20,
    price: 42000,
  },
];

const INITIAL_LOGS: MutationLog[] = [
  {
    id: "INV-2611-088",
    time: "10:42 WIB",
    type: "FAKTUR KELUAR",
    sku: "BRG-101",
    itemName: "Kertas HVS A4 80gr (Dus 5 Rim)",
    warehouse: "Gudang Pusat Tangerang",
    qty: 2,
    amount: 530000,
  },
  {
    id: "RST-2611-014",
    time: "09:18 WIB",
    type: "RESTOCK MASUK",
    sku: "BRG-204",
    itemName: "Printer Thermal Bluetooth 80mm",
    warehouse: "Toko Ritel Jakarta",
    qty: 5,
    amount: 3425000,
  },
];

const STUDENTS_DATA: StudentRow[] = [
  {
    nisn: "008914210",
    name: "Ahmad Fauzan Pratama",
    program: "SMK Teknik Komputer & Jaringan",
    ppdbStatus: "Aktif · Kelas XII RPL",
    avgScore: 91.5,
    attendance: "98%",
    subjects: [
      { name: "Pemrograman Web & Basis Data", score: 94, grade: "A" },
      { name: "Administrasi Infrastruktur Jaringan", score: 91, grade: "A" },
      { name: "Matematika Terapan", score: 89, grade: "A-" },
      { name: "Bahasa Inggris Teknis", score: 92, grade: "A" },
    ],
  },
  {
    nisn: "009441802",
    name: "Siti Rahmawati Putri",
    program: "SMA Unggulan IPA",
    ppdbStatus: "Aktif · Kelas XI IPA 1",
    avgScore: 93.0,
    attendance: "100%",
    subjects: [
      { name: "Matematika Peminatan", score: 95, grade: "A" },
      { name: "Fisika & Komputasi", score: 92, grade: "A" },
      { name: "Kimia Analitik", score: 91, grade: "A" },
      { name: "Biologi Molekuler", score: 94, grade: "A" },
    ],
  },
  {
    nisn: "010283719",
    name: "Budi Santoso Wijaya",
    program: "Pendaftar PPDB 2026/2027",
    ppdbStatus: "Diterima · Gelombang 1",
    avgScore: 88.8,
    attendance: "Tes CBT Lulus",
    subjects: [
      { name: "Tes Potensi Akademik (CBT)", score: 90, grade: "Lulus" },
      { name: "Literasi & Numerasi", score: 88, grade: "Lulus" },
      { name: "Wawancara Minat Bakat", score: 89, grade: "Lulus" },
      { name: "Verifikasi Berkas Digital", score: 88, grade: "Valid" },
    ],
  },
];

const WA_SCENARIOS = [
  {
    id: "stok",
    label: "1. Cek Stok & Harga Grosir",
    customerMsg:
      "Halo Admin, mau tanya Kertas HVS A4 80gr sama Printer Thermal 80mm ready berapa dus di Tangerang & Jakarta? Kalau ambil 10 dus kena harga berapa?",
    aiReply: `Halo Pak! 👋 Berikut data stok real-time dari sistem ERP kami:

1. *Kertas HVS A4 80gr (Dus)*
• Gudang Pusat Tangerang: *48 Dus Ready*
• Harga Normal: Rp 265.000/dus
• Harga Grosir (≥10 dus): *Rp 248.000/dus*

2. *Printer Thermal Bluetooth 80mm*
• Toko Ritel Jakarta: *19 Unit Ready*
• Harga: Rp 685.000/unit

Ketik *ORDER* jika ingin saya buatkan draf faktur & link pembayarannya otomatis sekarang. ⚡`,
    metaTag: "DB Inventory Sync · 0.42 detik",
  },
  {
    id: "faktur",
    label: "2. Minta Faktur PDF & Resi",
    customerMsg:
      "Mbak, tolong kirim ulang PDF faktur INV-2611-088 atas nama PT Maju Jaya beserta status pengirimannya hari ini ya.",
    aiReply: `Baik Pak, data transaksi *INV-2611-088* ditemukan ✅

• Pelanggan: PT Maju Jaya Logistik
• Total Tagihan: *Rp 530.000* (Lunas via VA BCA)
• Status Kurir: *Dalam Pengiriman — Armada Tangerang #04*
• Estimasi Tiba: Hari ini pukul 14:30 WIB

📎 Dokumen PDF Faktur & Surat Jalan telah dilampirkan otomatis di pesan ini.`,
    metaTag: "PDF Worker & Logistics API · 0.58 detik",
  },
  {
    id: "ppdb",
    label: "3. Info Pendaftaran / Jadwal",
    customerMsg:
      "Permisi, untuk pendaftaran siswa baru Gelombang 1 masih buka? Biayanya berapa dan jadwal tes masuknya kapan?",
    aiReply: `Selamat siang Bapak/Ibu! 😊 Pendaftaran *PPDB Gelombang 1 TA 2026/2027* masih dibuka sampai tanggal 30 bulan ini.

• Biaya Formulir & Tes CBT: *Rp 150.000* (Bayar via QRIS/VA Otomatis)
• Jadwal Tes CBT Online: Bisa dikerjakan dari rumah setiap hari Sabtu pukul 09.00 WIB
• Pengumuman Kelulusan: Otomatis keluar 5 menit setelah tes selesai

Ingin saya kirimkan link formulir pendaftarannya sekarang?`,
    metaTag: "SIAKAD Admission Agent · 0.39 detik",
  },
];

const OCR_SAMPLES = [
  {
    id: "inv-supplier",
    docTitle: "Faktur Supplier_PT_Sinar_Mas_089.pdf",
    invoiceNo: "FP/2026/11/0892",
    vendor: "PT Sinar Distribusi Utama",
    date: "14 November 2026",
    confidence: "99.7%",
    processTime: "0.84 detik",
    items: [
      { item: "Kertas HVS A4 80gr (Dus)", qty: "20 Dus", unitPrice: 245000, subtotal: 4900000 },
      { item: "Label Thermal 100x150mm", qty: "50 Pack", unitPrice: 38000, subtotal: 1900000 },
      { item: "Biaya Kirim Armada Box", qty: "1 Trip", unitPrice: 150000, subtotal: 150000 },
    ],
    total: 6950000,
  },
  {
    id: "po-retail",
    docTitle: "PO_Cabang_Bekasi_Hardware_114.jpg",
    invoiceNo: "PO/BKS/2026/114",
    vendor: "CV Karya Mandiri Elektronik",
    date: "14 November 2026",
    confidence: "99.5%",
    processTime: "0.79 detik",
    items: [
      { item: "Printer Thermal Bluetooth 80mm", qty: "6 Unit", unitPrice: 640000, subtotal: 3840000 },
      { item: "Scanner Barcode 2D Wireless", qty: "8 Unit", unitPrice: 510000, subtotal: 4080000 },
    ],
    total: 7920000,
  },
];

function formatRupiah(num: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num);
}

export function GroveInteractiveDemoHub() {
  const [activeTab, setActiveTab] = useState<DemoTab>("erp");

  // --- STATE TAB 1: ERP & GUDANG ---
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [logs, setLogs] = useState<MutationLog[]>(INITIAL_LOGS);
  const [warehouseFilter, setWarehouseFilter] = useState<string>("Semua Gudang");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [todayRevenue, setTodayRevenue] = useState<number>(4850000);
  const [todayTxCount, setTodayTxCount] = useState<number>(14);

  // --- STATE TAB 2: SIAKAD & CBT ---
  const [onlineStudents, setOnlineStudents] = useState<number>(148);
  const [serverLatencyMs, setServerLatencyMs] = useState<number>(210);
  const [stressTested, setStressTested] = useState<boolean>(false);
  const [selectedStudentNisn, setSelectedStudentNisn] = useState<string>(STUDENTS_DATA[0].nisn);

  // --- STATE TAB 3: AI & WHATSAPP ---
  const [selectedWaIdx, setSelectedWaIdx] = useState<number>(0);
  const [ocrSampleIdx, setOcrSampleIdx] = useState<number>(0);
  const [isScanningOcr, setIsScanningOcr] = useState<boolean>(false);
  const [ocrScannedOnce, setOcrScannedOnce] = useState<boolean>(true);

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchWarehouse =
        warehouseFilter === "Semua Gudang" || item.warehouse === warehouseFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q);
      return matchWarehouse && matchSearch;
    });
  }, [inventory, warehouseFilter, searchQuery]);

  const totalInventoryValue = useMemo(() => {
    return inventory.reduce((acc, item) => acc + item.stock * item.price, 0);
  }, [inventory]);

  const handleSellItem = (sku: string) => {
    const target = inventory.find((i) => i.sku === sku);
    if (!target || target.stock <= 0) return;

    setInventory((prev) =>
      prev.map((item) =>
        item.sku === sku ? { ...item, stock: Math.max(0, item.stock - 1) } : item
      )
    );
    setTodayRevenue((prev) => prev + target.price);
    setTodayTxCount((prev) => prev + 1);

    const newLog: MutationLog = {
      id: `INV-2611-${Math.floor(100 + Math.random() * 899)}`,
      time: "Baru saja",
      type: "FAKTUR KELUAR",
      sku: target.sku,
      itemName: target.name,
      warehouse: target.warehouse,
      qty: 1,
      amount: target.price,
    };
    setLogs((prev) => [newLog, ...prev].slice(0, 6));
  };

  const handleRestockItem = (sku: string) => {
    const target = inventory.find((i) => i.sku === sku);
    if (!target) return;

    setInventory((prev) =>
      prev.map((item) =>
        item.sku === sku ? { ...item, stock: item.stock + 5 } : item
      )
    );

    const newLog: MutationLog = {
      id: `RST-2611-${Math.floor(100 + Math.random() * 899)}`,
      time: "Baru saja",
      type: "RESTOCK MASUK",
      sku: target.sku,
      itemName: target.name,
      warehouse: target.warehouse,
      qty: 5,
      amount: target.price * 5,
    };
    setLogs((prev) => [newLog, ...prev].slice(0, 6));
  };

  const handleResetErp = () => {
    setInventory(INITIAL_INVENTORY);
    setLogs(INITIAL_LOGS);
    setWarehouseFilter("Semua Gudang");
    setSearchQuery("");
    setTodayRevenue(4850000);
    setTodayTxCount(14);
  };

  const handleSimulateLoad = () => {
    setOnlineStudents((prev) => Math.min(2500, prev + 250));
    setServerLatencyMs((prev) => Math.min(410, prev + 32));
    setStressTested(true);
  };

  const handleResetCbt = () => {
    setOnlineStudents(148);
    setServerLatencyMs(210);
    setStressTested(false);
  };

  const handleRunOcr = (nextIdx?: number) => {
    const targetIdx = typeof nextIdx === "number" ? nextIdx : (ocrSampleIdx + 1) % OCR_SAMPLES.length;
    setOcrSampleIdx(targetIdx);
    setIsScanningOcr(true);
    setTimeout(() => {
      setIsScanningOcr(false);
      setOcrScannedOnce(true);
    }, 350);
  };

  const activeStudent =
    STUDENTS_DATA.find((s) => s.nisn === selectedStudentNisn) ?? STUDENTS_DATA[0];
  const activeWaScenario = WA_SCENARIOS[selectedWaIdx];
  const activeOcr = OCR_SAMPLES[ocrSampleIdx];

  const demoOrderWaText =
    activeTab === "erp"
      ? "Halo Tim Abinest, saya sudah mencoba Live Demo ERP & Gudang di website Abinest. Saya tertarik membuat sistem stok/kasir/faktur seperti demo tersebut untuk usaha kami."
      : activeTab === "siakad"
      ? "Halo Tim Abinest, saya sudah mencoba Live Demo SIAKAD & Ujian CBT Anti-Down di website Abinest. Kami ingin konsultasi penerapan sistem serupa untuk sekolah/kampus kami."
      : "Halo Tim Abinest, saya sudah mencoba Live Demo Bot WhatsApp & AI Scan Faktur OCR di website Abinest. Kami tertarik menerapkan otomasi serupa.";

  const demoTabs: { id: DemoTab; label: string; shortLabel: string; icon: typeof Database }[] = [
    {
      id: "erp",
      label: "1. Simulasi ERP & Gudang",
      shortLabel: "1. ERP & Gudang",
      icon: Database,
    },
    {
      id: "siakad",
      label: "2. Simulasi SIAKAD & CBT",
      shortLabel: "2. SIAKAD & CBT",
      icon: GraduationCap,
    },
    {
      id: "ai",
      label: "3. Automasi AI & WhatsApp",
      shortLabel: "3. Automasi AI/WA",
      icon: Bot,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-slate-300/80">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1D4ED8] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE SANDBOX · UJI COBA LANGSUNG</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Coba Langsung Sistem Kerja Abinest{" "}
            <span className="text-[#2563EB]">Sebelum Memesan</span>
          </h1>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Jangan beli kucing dalam karung. Klik tombol transaksi, simulasikan lonjakan peserta ujian CBT, hingga uji balasan otomatis AI WhatsApp secara real-time di bawah ini.
          </p>

          {/* 1-Row 3-Tab Switcher (Mobile & Desktop) */}
          <div className="pt-2 flex justify-center">
            <div className="grid grid-cols-3 sm:inline-flex w-full sm:w-auto p-1 sm:p-1.5 rounded-xl bg-white border border-slate-300 shadow-xs gap-1 sm:gap-1.5">
              {demoTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2 sm:px-4 py-2.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-[#2563EB] text-white shadow-xs"
                        : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="md:hidden truncate">{tab.shortLabel}</span>
                    <span className="hidden md:inline whitespace-nowrap">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive Demo Surface */}
        <AnimatePresence mode="wait">
          {activeTab === "erp" && (
            <motion.div
              key="demo-erp"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="space-y-6"
            >
              {/* 4 KPI Strip */}
              <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-300 rounded-2xl bg-white divide-y lg:divide-y-0 divide-x divide-slate-200 shadow-xs overflow-hidden">
                <div className="p-4 sm:p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Total Nilai Aset Stok
                  </span>
                  <div className="text-lg sm:text-2xl font-black text-[#0F172A] mt-1 tabular-nums">
                    {formatRupiah(totalInventoryValue)}
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    ✓ Sinkronisasi 3 Gudang
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Omzet Faktur Hari Ini
                  </span>
                  <div className="text-lg sm:text-2xl font-black text-[#2563EB] mt-1 tabular-nums">
                    {formatRupiah(todayRevenue)}
                  </div>
                  <span className="text-[11px] text-slate-600 font-semibold">
                    {todayTxCount} Faktur Terbit Otomatis
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Kecepatan Sinkronisasi
                  </span>
                  <div className="text-lg sm:text-2xl font-black text-[#0F172A] mt-1">
                    &lt;0.2 Detik
                  </div>
                  <span className="text-[11px] text-blue-700 font-semibold">
                    PostgreSQL + Edge Cache
                  </span>
                </div>
                <div className="p-4 sm:p-5 bg-emerald-50/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Biaya Lisensi Per Kasir
                  </span>
                  <div className="text-lg sm:text-2xl font-black text-emerald-700 mt-1">
                    Rp 0 / Bulan
                  </div>
                  <span className="text-[11px] text-emerald-800 font-semibold">
                    Unlimited Cabang &amp; Staf
                  </span>
                </div>
              </div>

              {/* Filter & Table Card */}
              <div className="ui-card overflow-hidden shadow-md">
                <div className="ui-card-header flex-wrap gap-3">
                  <div>
                    <h2 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                      Live Dashboard Inventori Multi-Gudang &amp; Faktur Instan
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Coba klik &ldquo;+ Simulasi Jual&rdquo; atau &ldquo;+ Restock&rdquo; pada tabel di bawah untuk melihat stok &amp; omzet berubah seketika.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <select
                      aria-label="Filter Gudang"
                      value={warehouseFilter}
                      onChange={(e) => setWarehouseFilter(e.target.value)}
                      className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 outline-none focus:border-[#2563EB] cursor-pointer"
                    >
                      <option value="Semua Gudang">Semua Gudang (3 Lokasi)</option>
                      <option value="Gudang Pusat Tangerang">Gudang Pusat Tangerang</option>
                      <option value="Gudang Cabang Bekasi">Gudang Cabang Bekasi</option>
                      <option value="Toko Ritel Jakarta">Toko Ritel Jakarta</option>
                    </select>

                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari SKU / barang..."
                        className="pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs text-[#0F172A] outline-none focus:border-[#2563EB] w-40 sm:w-48"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleResetErp}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Simulasi</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-[13px]">
                    <thead>
                      <tr className="bg-[#0F172A] text-white border-b border-slate-300 divide-x divide-slate-700">
                        <th className="py-3 px-4 font-bold">SKU</th>
                        <th className="py-3 px-4 font-bold">Nama Produk</th>
                        <th className="py-3 px-4 font-bold">Lokasi Gudang</th>
                        <th className="py-3 px-4 font-bold text-right">Stok Aktif</th>
                        <th className="py-3 px-4 font-bold text-right">Harga Satuan</th>
                        <th className="py-3 px-4 font-bold text-center">Simulasi Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredInventory.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500 font-medium">
                            Tidak ada barang yang cocok dengan pencarian Anda.
                          </td>
                        </tr>
                      ) : (
                        filteredInventory.map((item, idx) => {
                          const isLow = item.stock <= item.minStock;
                          return (
                            <tr
                              key={item.sku}
                              className={`divide-x divide-slate-200 ${
                                idx % 2 === 1 ? "bg-slate-50/60" : "bg-white"
                              } hover:bg-blue-50/40`}
                            >
                              <td className="py-3 px-4 font-mono font-bold text-slate-700">
                                {item.sku}
                              </td>
                              <td className="py-3 px-4 font-bold text-[#0F172A]">
                                {item.name}
                              </td>
                              <td className="py-3 px-4 text-slate-600">{item.warehouse}</td>
                              <td className="py-3 px-4 text-right tabular-nums">
                                <span
                                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-extrabold ${
                                    item.stock === 0
                                      ? "bg-rose-100 text-rose-800 border border-rose-300"
                                      : isLow
                                      ? "bg-amber-100 text-amber-800 border border-amber-300"
                                      : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                  }`}
                                >
                                  {item.stock} unit
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right font-semibold text-slate-800 tabular-nums">
                                {formatRupiah(item.price)}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center justify-center gap-2">
                                  <button
                                    type="button"
                                    disabled={item.stock <= 0}
                                    onClick={() => handleSellItem(item.sku)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-slate-300 text-white text-[11px] font-bold cursor-pointer disabled:cursor-not-allowed transition-colors"
                                  >
                                    <ShoppingCart className="w-3 h-3" />
                                    <span>-1 Jual (Faktur)</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleRestockItem(item.sku)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-300 hover:border-emerald-400 text-slate-700 hover:text-emerald-800 text-[11px] font-bold cursor-pointer transition-colors"
                                  >
                                    <Plus className="w-3 h-3" />
                                    <span>+5 Restock</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Live Mutation Log */}
                <div className="ui-card-footer space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Log Mutasi Gudang &amp; Faktur Otomatis (Real-Time)
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-bold">
                      ● LIVE DB STREAM
                    </span>
                  </div>
                  <div className="ui-list-group text-xs">
                    {logs.map((log) => (
                      <div
                        key={log.id}
                        className="px-3.5 py-2 flex flex-wrap items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-extrabold border shrink-0 ${
                              log.type === "FAKTUR KELUAR"
                                ? "bg-blue-50 text-blue-800 border-blue-200"
                                : "bg-emerald-50 text-emerald-800 border-emerald-200"
                            }`}
                          >
                            {log.type}
                          </span>
                          <span className="font-mono font-bold text-slate-700">{log.id}</span>
                          <span className="font-semibold text-[#0F172A] truncate">
                            {log.itemName} ({log.qty}x · {log.warehouse})
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-extrabold text-[#0F172A] tabular-nums">
                            {formatRupiah(log.amount)}
                          </span>
                          <span className="text-slate-400 font-medium">{log.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "siakad" && (
            <motion.div
              key="demo-siakad"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="space-y-6"
            >
              {/* Stress Test CBT Panel */}
              <div className="ui-card overflow-hidden shadow-md">
                <div className="ui-card-header bg-[#0F172A] text-white border-b border-slate-800 flex-wrap gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                      <Server className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base font-extrabold text-white">
                        Uji Ketahanan Server Ujian CBT &amp; PPDB Anti-Down
                      </h2>
                      <p className="text-[11px] text-slate-300">
                        Klik tombol di kanan untuk mensimulasikan ratusan siswa login dan mengerjakan ujian secara serentak.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSimulateLoad}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs cursor-pointer shadow-xs transition-colors"
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>Simulasikan +250 Siswa Login Serentak</span>
                    </button>
                    {stressTested && (
                      <button
                        type="button"
                        onClick={handleResetCbt}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold cursor-pointer"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Siswa Online Serentak
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-1 tabular-nums">
                      {onlineStudents.toLocaleString("id-ID")} Siswa
                    </div>
                    <span className="text-xs font-semibold text-emerald-700">
                      Kapasitas Auto-Scale hingga 10.000+ user
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Response Time Server
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-[#2563EB] mt-1 tabular-nums">
                      0.{serverLatencyMs} Detik
                    </div>
                    <span className="text-xs font-semibold text-slate-600">
                      Jauh di bawah batas aman (&lt;0.45 detik)
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Status Uptime Garansi SLA
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">
                      99.98% Online
                    </div>
                    <span className="text-xs font-semibold text-slate-600">
                      0% Error 502/Timeout selama simulasi
                    </span>
                  </div>
                </div>

                {stressTested && (
                  <div className="px-5 py-3 bg-emerald-50 border-t border-emerald-200 text-xs sm:text-[13px] font-semibold text-emerald-950 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Simulasi Lonjakan Sukses: {onlineStudents} peserta ujian aktif serentak tetap membuka soal dalam 0.{serverLatencyMs} detik tanpa antrean macet!
                    </span>
                  </div>
                )}
              </div>

              {/* Tabel Siswa & Preview E-Rapor */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 ui-card overflow-hidden">
                  <div className="ui-card-header">
                    <h3 className="text-sm font-extrabold text-[#0F172A]">
                      Daftar Peserta PPDB &amp; Akademik Siswa
                    </h3>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                      Pilih Siswa Untuk E-Rapor
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 divide-x divide-slate-200 text-slate-700">
                          <th className="py-2.5 px-3.5 font-bold">NISN</th>
                          <th className="py-2.5 px-3.5 font-bold">Nama Lengkap</th>
                          <th className="py-2.5 px-3.5 font-bold">Status</th>
                          <th className="py-2.5 px-3.5 font-bold text-center">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {STUDENTS_DATA.map((st) => {
                          const isSelected = st.nisn === activeStudent.nisn;
                          return (
                            <tr
                              key={st.nisn}
                              className={`divide-x divide-slate-200 ${
                                isSelected ? "bg-blue-50/70" : "bg-white hover:bg-slate-50"
                              }`}
                            >
                              <td className="py-3 px-3.5 font-mono text-slate-600">{st.nisn}</td>
                              <td className="py-3 px-3.5">
                                <div className="font-bold text-[#0F172A]">{st.name}</div>
                                <div className="text-[11px] text-slate-500">{st.program}</div>
                              </td>
                              <td className="py-3 px-3.5">
                                <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                                  {st.ppdbStatus}
                                </span>
                              </td>
                              <td className="py-3 px-3.5 text-center">
                                <button
                                  type="button"
                                  onClick={() => setSelectedStudentNisn(st.nisn)}
                                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer transition-colors ${
                                    isSelected
                                      ? "bg-[#2563EB] text-white"
                                      : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                                  }`}
                                >
                                  Preview E-Rapor
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Live E-Rapor Card */}
                <div className="lg:col-span-5 ui-card overflow-hidden border-blue-300 shadow-sm">
                  <div className="ui-card-header bg-blue-50/80 border-blue-200">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#2563EB]" />
                      <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                        Preview Kartu E-Rapor &amp; Hasil Seleksi
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold">
                      VERIFIED PDF
                    </span>
                  </div>
                  <div className="ui-card-body space-y-4">
                    <div className="ui-list-group text-xs">
                      <div className="px-3.5 py-2 flex justify-between">
                        <span className="text-slate-500">Nama Siswa</span>
                        <span className="font-bold text-[#0F172A]">{activeStudent.name}</span>
                      </div>
                      <div className="px-3.5 py-2 flex justify-between">
                        <span className="text-slate-500">NISN / Jurusan</span>
                        <span className="font-semibold text-slate-700">{activeStudent.nisn}</span>
                      </div>
                      <div className="px-3.5 py-2 flex justify-between">
                        <span className="text-slate-500">Rata-Rata Nilai / Kehadiran</span>
                        <span className="font-extrabold text-[#2563EB]">
                          {activeStudent.avgScore} · {activeStudent.attendance}
                        </span>
                      </div>
                    </div>

                    <div className="ui-list-group text-xs">
                      {activeStudent.subjects.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-3.5 py-2 flex items-center justify-between gap-2"
                        >
                          <span className="text-slate-700 font-medium">{sub.name}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-bold text-[#0F172A]">{sub.score}</span>
                            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-extrabold">
                              {sub.grade}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "ai" && (
            <motion.div
              key="demo-ai"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Left: WhatsApp Meta Official Bot Sim */}
              <div className="lg:col-span-6 ui-card overflow-hidden shadow-md">
                <div className="ui-card-header bg-emerald-950 text-white border-b border-emerald-900">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-sm font-extrabold text-white">
                        Simulasi AI Customer Service WhatsApp Resmi (24/7)
                      </h2>
                      <p className="text-[11px] text-emerald-200">
                        Klik salah satu pertanyaan pelanggan di bawah untuk menguji respon otomatis &lt;1 detik:
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ui-card-body space-y-4 bg-[#F0F2F5]">
                  <div className="flex flex-wrap gap-2">
                    {WA_SCENARIOS.map((sc, idx) => (
                      <button
                        key={sc.id}
                        type="button"
                        onClick={() => setSelectedWaIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold border transition-all cursor-pointer ${
                          selectedWaIdx === idx
                            ? "bg-emerald-600 text-white border-emerald-700 shadow-xs"
                            : "bg-white text-slate-700 border-slate-300 hover:border-emerald-500"
                        }`}
                      >
                        {sc.label}
                      </button>
                    ))}
                  </div>

                  {/* Chat Bubbles */}
                  <div className="space-y-3 pt-1">
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] border border-emerald-300 px-3.5 py-2.5 text-xs text-slate-900 shadow-2xs">
                        <div className="text-[10px] font-bold text-emerald-800 mb-1">
                          Calon Pelanggan / Wali Murid
                        </div>
                        <p className="leading-relaxed">{activeWaScenario.customerMsg}</p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white border border-slate-300 px-4 py-3 text-xs text-slate-800 shadow-xs space-y-2">
                        <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-1.5">
                          <span className="text-[10.5px] font-extrabold text-[#2563EB] flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            <span>AI Agent Abinest (Terhubung ke Database)</span>
                          </span>
                          <span className="text-[10px] font-mono text-emerald-700 font-bold">
                            {activeWaScenario.metaTag}
                          </span>
                        </div>
                        <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-slate-800">
                          {activeWaScenario.aiReply}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: AI Document OCR */}
              <div className="lg:col-span-6 ui-card overflow-hidden shadow-md">
                <div className="ui-card-header flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shrink-0">
                      <ScanLine className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-extrabold text-[#0F172A]">
                        Simulasi AI Pembaca Faktur &amp; PO Otomatis (OCR)
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        Input foto/PDF faktur supplier langsung masuk pembukuan tanpa ketik manual.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRunOcr()}
                    className="px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold cursor-pointer shadow-xs transition-colors"
                  >
                    {isScanningOcr ? "Memindai Dokumen..." : "Ganti & Scan Faktur Lain"}
                  </button>
                </div>

                <div className="ui-card-body space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-900 text-white text-xs">
                    <div className="font-mono truncate">
                      📄 File: <span className="text-sky-300 font-bold">{activeOcr.docTitle}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-[10.5px]">
                        Akurasi {activeOcr.confidence}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-400/40 text-blue-200 font-mono text-[10.5px]">
                        {activeOcr.processTime}
                      </span>
                    </div>
                  </div>

                  {ocrScannedOnce && (
                    <>
                      <div className="ui-list-group text-xs">
                        <div className="px-3.5 py-2 flex justify-between">
                          <span className="text-slate-500">Nomor Dokumen Terdeteksi</span>
                          <span className="font-mono font-bold text-[#0F172A]">
                            {activeOcr.invoiceNo}
                          </span>
                        </div>
                        <div className="px-3.5 py-2 flex justify-between">
                          <span className="text-slate-500">Nama Vendor / Supplier</span>
                          <span className="font-bold text-[#0F172A]">{activeOcr.vendor}</span>
                        </div>
                        <div className="px-3.5 py-2 flex justify-between">
                          <span className="text-slate-500">Tanggal Transaksi</span>
                          <span className="font-semibold text-slate-700">{activeOcr.date}</span>
                        </div>
                      </div>

                      <div className="overflow-x-auto border border-slate-200 rounded-xl">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-100 border-b border-slate-200 divide-x divide-slate-200 text-slate-700">
                              <th className="py-2 px-3 font-bold">Item Terbaca AI</th>
                              <th className="py-2 px-3 font-bold">Qty</th>
                              <th className="py-2 px-3 font-bold text-right">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {activeOcr.items.map((row, rIdx) => (
                              <tr key={rIdx} className="divide-x divide-slate-200 bg-white">
                                <td className="py-2 px-3 font-semibold text-[#0F172A]">
                                  {row.item}
                                </td>
                                <td className="py-2 px-3 text-slate-600">{row.qty}</td>
                                <td className="py-2 px-3 text-right font-bold text-slate-800 tabular-nums">
                                  {formatRupiah(row.subtotal)}
                                </td>
                              </tr>
                            ))}
                            <tr className="bg-blue-50/70 divide-x divide-slate-200">
                              <td colSpan={2} className="py-2.5 px-3 font-extrabold text-[#0F172A]">
                                Total Nilai Pembukuan Otomatis
                              </td>
                              <td className="py-2.5 px-3 text-right font-black text-[#2563EB] tabular-nums">
                                {formatRupiah(activeOcr.total)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Conversion Strip */}
        <div className="ui-card bg-white border-2 border-[#2563EB]/40 p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8]">
              <ShieldCheck className="w-4 h-4" />
              <span>SIAP DIKUSTOMISASI SESUAI ALUR USAHA ANDA DALAM &lt;14 HARI KERJA</span>
            </div>
            <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">
              Ingin sistem seperti simulasi di atas disesuaikan dengan logo &amp; kebutuhan perusahaan Anda?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Tersedia paket Beli Putus (100% hak milik source code tanpa biaya bulanan) atau Sewa / Terima Beres.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(demoOrderWaText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-sm transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Pesan Sistem Seperti Demo Ini</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/audit-gratis"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
            >
              <Calculator className="w-4 h-4 text-[#2563EB]" />
              <span>Hitung Biaya &amp; Audit Gratis</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
