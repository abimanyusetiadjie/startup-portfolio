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
  Check,
  ArrowRight,
  Server,
  Users,
  FileText,
  ScanLine,
  MessageSquare,
} from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
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
  ppdbStatus:
    | "Diterima · Gelombang 1"
    | "Aktif · Kelas XI IPA 1"
    | "Aktif · Kelas XII RPL";
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
    label: "Cek Stok & Grosir",
    customerMsg:
      "Halo Admin, mau tanya Kertas HVS A4 80gr sama Printer Thermal 80mm ready berapa dus di Tangerang & Jakarta? Kalau ambil 10 dus kena harga berapa?",
    aiReply: `Halo Pak! Berikut data stok real-time dari sistem kami:

1. Kertas HVS A4 80gr (Dus)
• Gudang Pusat Tangerang: 48 Dus Tersedia
• Harga Normal: Rp265.000/dus
• Harga Grosir (≥10 dus): Rp248.000/dus

2. Printer Thermal Bluetooth 80mm
• Toko Ritel Jakarta: 19 Unit Tersedia
• Harga: Rp685.000/unit

Ketik ORDER jika ingin saya buatkan draf faktur & tautan pembayarannya otomatis.`,
    metaTag: "Sinkron Stok Real-Time · 0,42 dtk",
  },
  {
    id: "faktur",
    label: "Minta Faktur & Resi",
    customerMsg:
      "Mbak, tolong kirim ulang PDF faktur INV-2611-088 atas nama PT Maju Jaya beserta status pengirimannya hari ini ya.",
    aiReply: `Baik Pak, data transaksi INV-2611-088 ditemukan:

• Pelanggan: PT Maju Jaya Logistik
• Total Tagihan: Rp530.000 (Lunas via VA BCA)
• Status Kurir: Dalam Pengiriman — Armada Tangerang #04
• Estimasi Tiba: Hari ini pukul 14:30 WIB

Dokumen PDF Faktur & Surat Jalan sudah dilampirkan otomatis.`,
    metaTag: "Otomasi Faktur & Resi · 0,58 dtk",
  },
  {
    id: "ppdb",
    label: "Info PPDB & Jadwal",
    customerMsg:
      "Permisi, untuk pendaftaran siswa baru Gelombang 1 masih buka? Biayanya berapa dan jadwal tes masuknya kapan?",
    aiReply: `Selamat siang Bapak/Ibu! Pendaftaran PPDB Gelombang 1 TA 2026/2027 masih dibuka hingga tanggal 30 bulan ini:

• Biaya Formulir & Tes CBT: Rp150.000 (QRIS/VA Otomatis)
• Jadwal Tes CBT Daring: Setiap Sabtu pukul 09.00 WIB
• Pengumuman Hasil: Otomatis keluar 5 menit setelah selesai

Ingin saya kirimkan tautan formulir pendaftarannya sekarang?`,
    metaTag: "Asisten Admisi SIAKAD · 0,39 dtk",
  },
];

const OCR_SAMPLES = [
  {
    id: "inv-supplier",
    docTitle: "Faktur_Supplier_Sinar_Mas_089.pdf",
    invoiceNo: "FP/2026/11/0892",
    vendor: "PT Sinar Distribusi Utama",
    date: "14 November 2026",
    confidence: "99,7%",
    processTime: "0,84 dtk",
    items: [
      {
        item: "Kertas HVS A4 80gr (Dus)",
        qty: "20 Dus",
        unitPrice: 245000,
        subtotal: 4900000,
      },
      {
        item: "Label Thermal 100x150mm",
        qty: "50 Pack",
        unitPrice: 38000,
        subtotal: 1900000,
      },
      {
        item: "Biaya Kirim Armada Box",
        qty: "1 Trip",
        unitPrice: 150000,
        subtotal: 150000,
      },
    ],
    total: 6950000,
  },
  {
    id: "po-retail",
    docTitle: "PO_Cabang_Bekasi_Hardware_114.jpg",
    invoiceNo: "PO/BKS/2026/114",
    vendor: "CV Karya Mandiri Elektronik",
    date: "14 November 2026",
    confidence: "99,5%",
    processTime: "0,79 dtk",
    items: [
      {
        item: "Printer Thermal Bluetooth 80mm",
        qty: "6 Unit",
        unitPrice: 640000,
        subtotal: 3840000,
      },
      {
        item: "Scanner Barcode 2D Wireless",
        qty: "8 Unit",
        unitPrice: 510000,
        subtotal: 4080000,
      },
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

  // --- TAB 1: ERP & GUDANG ---
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [logs, setLogs] = useState<MutationLog[]>(INITIAL_LOGS);
  const [warehouseFilter, setWarehouseFilter] = useState<string>("Semua Gudang");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [todayRevenue, setTodayRevenue] = useState<number>(4850000);
  const [todayTxCount, setTodayTxCount] = useState<number>(14);

  // --- TAB 2: SIAKAD & CBT ---
  const [onlineStudents, setOnlineStudents] = useState<number>(148);
  const [serverLatencyMs, setServerLatencyMs] = useState<number>(210);
  const [stressTested, setStressTested] = useState<boolean>(false);
  const [selectedStudentNisn, setSelectedStudentNisn] = useState<string>(
    STUDENTS_DATA[0].nisn
  );

  // --- TAB 3: AI & WHATSAPP ---
  const [selectedWaIdx, setSelectedWaIdx] = useState<number>(0);
  const [ocrSampleIdx, setOcrSampleIdx] = useState<number>(0);
  const [isScanningOcr, setIsScanningOcr] = useState<boolean>(false);

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
    setServerLatencyMs((prev) => Math.min(390, prev + 26));
    setStressTested(true);
  };

  const handleResetCbt = () => {
    setOnlineStudents(148);
    setServerLatencyMs(210);
    setStressTested(false);
  };

  const handleRunOcr = (nextIdx?: number) => {
    const targetIdx =
      typeof nextIdx === "number"
        ? nextIdx
        : (ocrSampleIdx + 1) % OCR_SAMPLES.length;
    setOcrSampleIdx(targetIdx);
    setIsScanningOcr(true);
    window.setTimeout(() => {
      setIsScanningOcr(false);
    }, 320);
  };

  const activeStudent =
    STUDENTS_DATA.find((s) => s.nisn === selectedStudentNisn) ??
    STUDENTS_DATA[0];
  const activeWaScenario = WA_SCENARIOS[selectedWaIdx];
  const activeOcr = OCR_SAMPLES[ocrSampleIdx];

  const loadPercent = Math.min(92, Math.round((onlineStudents / 2500) * 100));

  const demoOrderWaText =
    activeTab === "erp"
      ? "Halo Tim Abinest, saya sudah mencoba Live Demo ERP & Gudang di abinest.id. Saya tertarik membuat sistem stok/kasir/faktur seperti demo tersebut."
      : activeTab === "siakad"
      ? "Halo Tim Abinest, saya sudah mencoba Live Demo SIAKAD & Ujian CBT di abinest.id. Kami ingin konsultasi penerapan sistem serupa untuk sekolah/yayasan kami."
      : "Halo Tim Abinest, saya sudah mencoba Live Demo Bot WhatsApp & AI Scan Faktur OCR di abinest.id. Kami tertarik menerapkan otomasi serupa.";

  const demoTabs: {
    id: DemoTab;
    code: string;
    label: string;
    mobileLabel: string;
    icon: typeof Database;
  }[] = [
    {
      id: "erp",
      code: "01",
      label: "ERP & Gudang",
      mobileLabel: "ERP & Stok",
      icon: Database,
    },
    {
      id: "siakad",
      code: "02",
      label: "SIAKAD & CBT",
      mobileLabel: "SIAKAD",
      icon: GraduationCap,
    },
    {
      id: "ai",
      code: "03",
      label: "WhatsApp AI & OCR",
      mobileLabel: "AI & WA",
      icon: Bot,
    },
  ];

  return (
    <div>
      {/* 1. Architectural Paper Header Band (Aligned Flush-Left with Site System) */}
      <section className="bg-[#F2F1F3] pt-[104px] sm:pt-[124px] pb-10 sm:pb-14">
        <div className="clay-container space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-[12.5px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
              Sandbox Interaktif · Uji Coba Langsung Tanpa Login
            </p>
            <h1 className="text-[clamp(2rem,4vw+0.6rem,3.5rem)] font-semibold tracking-[-0.032em] leading-[1.08] text-[#111111]">
              Coba sistem kami.{" "}
              <span className="text-[#6B7280] font-medium">
                Sebelum memesan.
              </span>
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4B5563]">
              Uji langsung alur transaksi gudang multi-lokasi, simulasi lonjakan
              peserta ujian CBT, hingga balasan WhatsApp AI resmi dan pembacaan
              faktur otomatis di perangkat Anda.
            </p>
          </div>

          {/* Responsive Tab Bar: Full-width thumb tiles on Mobile, sleek pill rail on Desktop */}
          <div
            role="tablist"
            aria-label="Pilih simulasi sistem"
            className="grid grid-cols-3 sm:inline-flex p-1.5 rounded-[18px] sm:rounded-full bg-white border border-[#E2E4E9] shadow-[0_8px_24px_-16px_rgba(17,19,24,0.12)] gap-1.5 w-full sm:w-auto"
          >
            {demoTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-5 py-2.5 sm:py-2.5 rounded-[13px] sm:rounded-full text-[12px] sm:text-[14px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#111318] text-white shadow-sm"
                      : "text-[#4B5563] hover:text-[#111111] hover:bg-[#F5F5F7]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="sm:hidden leading-tight text-center">
                    {tab.mobileLabel}
                  </span>
                  <span className="hidden sm:inline whitespace-nowrap">
                    <span className="opacity-55 font-mono text-[12px] mr-1.5">
                      {tab.code}
                    </span>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Interactive Workspace Surface */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="clay-container space-y-10">
          <AnimatePresence mode="wait">
            {/* ===============================================================
                TAB 1: ERP & MULTI-GUDANG (Mobile Native Cards + Desktop Table)
               =============================================================== */}
            {activeTab === "erp" && (
              <motion.div
                key="demo-erp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* 4 Balanced KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="rounded-[18px] border border-[#E5E7EB] bg-[#FAF9FB] p-4 sm:p-5 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-[#6B7280] block">
                      Nilai Aset Stok
                    </span>
                    <div className="text-[18px] sm:text-[24px] font-semibold tracking-[-0.02em] text-[#111111] tabular-nums">
                      {formatRupiah(totalInventoryValue)}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[12px] text-[#059669] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      3 lokasi tersinkron
                    </span>
                  </div>

                  <div className="rounded-[18px] border border-[#E5E7EB] bg-[#FAF9FB] p-4 sm:p-5 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-[#6B7280] block">
                      Omzet Hari Ini
                    </span>
                    <div className="text-[18px] sm:text-[24px] font-semibold tracking-[-0.02em] text-[#111111] tabular-nums">
                      {formatRupiah(todayRevenue)}
                    </div>
                    <span className="text-[12px] text-[#6B7280] block">
                      {todayTxCount} faktur otomatis
                    </span>
                  </div>

                  <div className="rounded-[18px] border border-[#E5E7EB] bg-[#FAF9FB] p-4 sm:p-5 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-[#6B7280] block">
                      Kecepatan Update
                    </span>
                    <div className="text-[18px] sm:text-[24px] font-semibold tracking-[-0.02em] text-[#111111]">
                      Real-Time
                    </div>
                    <span className="text-[12px] text-[#6B7280] block">
                      Anti stok minus antar cabang
                    </span>
                  </div>

                  <div className="rounded-[18px] bg-[#111318] text-white p-4 sm:p-5 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-[#9CA3AF] block">
                      Biaya / Staf
                    </span>
                    <div className="text-[18px] sm:text-[24px] font-semibold tracking-[-0.02em] text-white">
                      Rp0 / bulan
                    </div>
                    <span className="text-[12px] text-[#D1D5DB] block">
                      Unlimited kasir &amp; cabang
                    </span>
                  </div>
                </div>

                {/* Main Inventory Workspace Card */}
                <div className="rounded-[22px] border border-[#E5E7EB] bg-white overflow-hidden">
                  {/* Toolbar */}
                  <div className="p-5 sm:p-6 border-b border-[#E5E7EB] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h2 className="text-[17px] sm:text-[18px] font-semibold tracking-[-0.015em] text-[#111111]">
                        Inventori Multi-Gudang &amp; Faktur Instan
                      </h2>
                      <p className="text-[13.5px] text-[#6B7280]">
                        Tekan <strong>-1 Jual</strong> atau{" "}
                        <strong>+5 Restock</strong> untuk menguji mutasi stok
                        dan omzet secara langsung.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 w-full lg:w-auto">
                      <select
                        aria-label="Filter Gudang"
                        value={warehouseFilter}
                        onChange={(e) => setWarehouseFilter(e.target.value)}
                        className="h-[40px] rounded-[12px] border border-[#E5E7EB] bg-[#FAF9FB] px-3.5 text-[13.5px] font-medium text-[#111111] outline-none focus:border-[#111111] cursor-pointer w-full sm:w-auto"
                      >
                        <option value="Semua Gudang">
                          Semua Gudang (3 Lokasi)
                        </option>
                        <option value="Gudang Pusat Tangerang">
                          Gudang Pusat Tangerang
                        </option>
                        <option value="Gudang Cabang Bekasi">
                          Gudang Cabang Bekasi
                        </option>
                        <option value="Toko Ritel Jakarta">
                          Toko Ritel Jakarta
                        </option>
                      </select>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-52">
                          <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari SKU / barang..."
                            className="h-[40px] w-full pl-9 pr-3 rounded-[12px] border border-[#E5E7EB] bg-[#FAF9FB] text-[13.5px] text-[#111111] outline-none focus:border-[#111111]"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={handleResetErp}
                          aria-label="Reset simulasi ERP"
                          className="h-[40px] inline-flex items-center justify-center gap-1.5 px-3.5 rounded-[12px] border border-[#E5E7EB] bg-white hover:border-[#111111] text-[13px] font-medium text-[#111111] cursor-pointer transition-colors shrink-0"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Reset</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* MOBILE VIEW (< md): Touch-Friendly Stacked Product Cards (Zero Horizontal Scroll) */}
                  <div className="md:hidden divide-y divide-[#E5E7EB]">
                    {filteredInventory.length === 0 ? (
                      <div className="p-8 text-center text-[14px] text-[#6B7280]">
                        Tidak ada produk yang cocok dengan pencarian Anda.
                      </div>
                    ) : (
                      filteredInventory.map((item) => {
                        const isLow = item.stock <= item.minStock;
                        return (
                          <div key={item.sku} className="p-4 space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0 space-y-0.5">
                                <span className="text-[11.5px] font-mono text-[#6B7280] block">
                                  {item.sku} · {item.warehouse}
                                </span>
                                <h3 className="text-[15px] font-semibold text-[#111111] leading-snug">
                                  {item.name}
                                </h3>
                              </div>
                              <span
                                className={`inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[11.5px] font-semibold shrink-0 ${
                                  item.stock === 0
                                    ? "bg-rose-50 text-rose-700 border border-rose-200"
                                    : isLow
                                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                                    : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                }`}
                              >
                                {item.stock} unit
                              </span>
                            </div>

                            <div className="flex items-center justify-between text-[14px]">
                              <span className="text-[#6B7280]">Harga satuan</span>
                              <span className="font-semibold text-[#111111] tabular-nums">
                                {formatRupiah(item.price)}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 pt-0.5">
                              <button
                                type="button"
                                disabled={item.stock <= 0}
                                onClick={() => handleSellItem(item.sku)}
                                className="h-[40px] inline-flex items-center justify-center gap-1.5 rounded-[11px] bg-[#111318] hover:bg-[#272A33] disabled:bg-[#D1D5DB] text-white text-[13px] font-medium cursor-pointer disabled:cursor-not-allowed transition-colors"
                              >
                                <ShoppingCart className="w-3.5 h-3.5" />
                                <span>-1 Jual</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRestockItem(item.sku)}
                                className="h-[40px] inline-flex items-center justify-center gap-1.5 rounded-[11px] bg-white hover:border-[#111111] border border-[#D4D6DC] text-[#111111] text-[13px] font-medium cursor-pointer transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>+5 Restock</span>
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* DESKTOP VIEW (md+): Spacious Architectural Precision Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[14px]">
                      <thead>
                        <tr className="bg-[#FAF9FB] border-b border-[#E5E7EB] text-[12px] font-semibold uppercase tracking-[0.05em] text-[#6B7280]">
                          <th className="py-3.5 px-5">SKU</th>
                          <th className="py-3.5 px-5">Nama Produk</th>
                          <th className="py-3.5 px-5">Lokasi Gudang</th>
                          <th className="py-3.5 px-5 text-right">Stok</th>
                          <th className="py-3.5 px-5 text-right">Harga</th>
                          <th className="py-3.5 px-5 text-right">Simulasi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5E7EB]">
                        {filteredInventory.length === 0 ? (
                          <tr>
                            <td
                              colSpan={6}
                              className="py-10 text-center text-[#6B7280]"
                            >
                              Tidak ada produk yang cocok dengan pencarian Anda.
                            </td>
                          </tr>
                        ) : (
                          filteredInventory.map((item) => {
                            const isLow = item.stock <= item.minStock;
                            return (
                              <tr
                                key={item.sku}
                                className="hover:bg-[#FAF9FB] transition-colors"
                              >
                                <td className="py-3.5 px-5 font-mono text-[12.5px] text-[#6B7280]">
                                  {item.sku}
                                </td>
                                <td className="py-3.5 px-5 font-medium text-[#111111]">
                                  {item.name}
                                </td>
                                <td className="py-3.5 px-5 text-[#4B5563]">
                                  {item.warehouse}
                                </td>
                                <td className="py-3.5 px-5 text-right tabular-nums">
                                  <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-mono text-[12px] font-semibold ${
                                      item.stock === 0
                                        ? "bg-rose-50 text-rose-700 border border-rose-200"
                                        : isLow
                                        ? "bg-amber-50 text-amber-800 border border-amber-200"
                                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    }`}
                                  >
                                    {item.stock} unit
                                  </span>
                                </td>
                                <td className="py-3.5 px-5 text-right font-medium text-[#111111] tabular-nums">
                                  {formatRupiah(item.price)}
                                </td>
                                <td className="py-3.5 px-5">
                                  <div className="flex items-center justify-end gap-2">
                                    <button
                                      type="button"
                                      disabled={item.stock <= 0}
                                      onClick={() => handleSellItem(item.sku)}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111318] hover:bg-[#2A2E38] disabled:bg-[#D1D5DB] text-white text-[12px] font-medium cursor-pointer disabled:cursor-not-allowed transition-colors"
                                    >
                                      <ShoppingCart className="w-3 h-3" />
                                      <span>-1 Jual</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleRestockItem(item.sku)}
                                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:border-[#111111] border border-[#D4D6DC] text-[#111111] text-[12px] font-medium cursor-pointer transition-colors"
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

                  {/* Live Mutation Stream (Responsive Stack on Mobile, Clean Row on Desktop) */}
                  <div className="p-5 sm:p-6 bg-[#FAF9FB] border-t border-[#E5E7EB] space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-[#6B7280]">
                        Log Mutasi Stok &amp; Faktur Otomatis
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11.5px] font-mono font-semibold text-[#059669]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                        LIVE
                      </span>
                    </div>

                    <div className="rounded-[14px] border border-[#E5E7EB] bg-white divide-y divide-[#F1F2F4]">
                      {logs.map((log) => (
                        <div
                          key={log.id}
                          className="p-3.5 sm:px-4 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13px]"
                        >
                          <div className="flex flex-wrap items-center gap-2 min-w-0">
                            <span
                              className={`px-2 py-0.5 rounded-[6px] text-[10.5px] font-mono font-semibold shrink-0 ${
                                log.type === "FAKTUR KELUAR"
                                  ? "bg-[#111318] text-white"
                                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              }`}
                            >
                              {log.type}
                            </span>
                            <span className="font-mono text-[12px] text-[#6B7280]">
                              {log.id}
                            </span>
                            <span className="font-medium text-[#111111] break-words">
                              {log.itemName} ({log.qty}x)
                            </span>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 text-[12.5px]">
                            <span className="font-semibold text-[#111111] tabular-nums">
                              {formatRupiah(log.amount)}
                            </span>
                            <span className="text-[#6B7280]">{log.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===============================================================
                TAB 2: SIAKAD & UJIAN CBT (Mobile Tappable Cards + Live E-Rapor)
               =============================================================== */}
            {activeTab === "siakad" && (
              <motion.div
                key="demo-siakad"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* CBT Load Simulator Card */}
                <div className="rounded-[22px] border border-[#E5E7EB] bg-white overflow-hidden">
                  <div className="p-5 sm:p-7 bg-[#111318] text-white flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-[12px] bg-white/10 border border-white/15 text-white flex items-center justify-center shrink-0">
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-[17px] sm:text-[18px] font-semibold text-white">
                          Simulasi Ketahanan Server Ujian CBT &amp; PPDB
                        </h2>
                        <p className="text-[13.5px] text-[#9CA3AF]">
                          Uji respon sistem saat ratusan siswa masuk dan
                          menyimpan jawaban ujian secara bersamaan.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={handleSimulateLoad}
                        className="h-[42px] inline-flex items-center justify-center gap-2 px-5 rounded-full bg-white hover:bg-[#F3F4F6] text-[#111318] font-semibold text-[13.5px] cursor-pointer transition-colors"
                      >
                        <Users className="w-4 h-4" />
                        <span>+250 Siswa Serentak</span>
                      </button>
                      {stressTested && (
                        <button
                          type="button"
                          onClick={handleResetCbt}
                          className="h-[42px] px-4 rounded-full border border-white/20 hover:bg-white/10 text-white text-[13px] font-medium cursor-pointer transition-colors"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
                    <div className="p-5 sm:p-6 space-y-1.5">
                      <span className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-[#6B7280] block">
                        Siswa Online Serentak
                      </span>
                      <div className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] text-[#111111] tabular-nums">
                        {onlineStudents.toLocaleString("id-ID")} Siswa
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#ECEEF2] overflow-hidden mt-2">
                        <div
                          style={{ width: `${loadPercent}%` }}
                          className="h-full bg-[#111318] rounded-full transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-1.5">
                      <span className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-[#6B7280] block">
                        Respon Buka Soal
                      </span>
                      <div className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] text-[#111111] tabular-nums">
                        0,{serverLatencyMs} Detik
                      </div>
                      <span className="text-[12.5px] text-[#6B7280] block">
                        Auto-save jawaban berkala aktif
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 space-y-1.5">
                      <span className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-[#6B7280] block">
                        Status Kestabilan
                      </span>
                      <div className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] text-[#059669]">
                        Stabil · Normal
                      </div>
                      <span className="text-[12.5px] text-[#6B7280] block">
                        Rp0 biaya tambahan per siswa
                      </span>
                    </div>
                  </div>

                  {stressTested && (
                    <div className="px-5 sm:px-6 py-3.5 bg-[#FAF9FB] border-t border-[#E5E7EB] text-[13.5px] font-medium text-[#111111] flex items-start sm:items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5 sm:mt-0" />
                      <span>
                        Simulasi lancar:{" "}
                        <strong>
                          {onlineStudents.toLocaleString("id-ID")} peserta
                        </strong>{" "}
                        ujian aktif tetap membuka soal dalam 0,{serverLatencyMs}{" "}
                        detik tanpa antrean macet.
                      </span>
                    </div>
                  )}
                </div>

                {/* Roster + Live E-Rapor Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left 7 Cols: Student Selector */}
                  <div className="lg:col-span-7 rounded-[22px] border border-[#E5E7EB] bg-white overflow-hidden">
                    <div className="px-5 sm:px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between gap-2">
                      <h3 className="text-[16px] font-semibold text-[#111111]">
                        Daftar Siswa &amp; Pendaftar PPDB
                      </h3>
                      <span className="text-[11.5px] font-medium text-[#6B7280]">
                        Pilih untuk lihat rapor
                      </span>
                    </div>

                    {/* Mobile Cards (< md) */}
                    <div className="md:hidden divide-y divide-[#E5E7EB]">
                      {STUDENTS_DATA.map((st) => {
                        const isSelected = st.nisn === activeStudent.nisn;
                        return (
                          <button
                            key={st.nisn}
                            type="button"
                            onClick={() => setSelectedStudentNisn(st.nisn)}
                            className={`w-full text-left p-4 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                              isSelected ? "bg-[#FAF9FB]" : "bg-white"
                            }`}
                          >
                            <div className="space-y-1 min-w-0">
                              <div className="text-[11.5px] font-mono text-[#6B7280]">
                                NISN {st.nisn}
                              </div>
                              <div className="text-[15px] font-semibold text-[#111111] truncate">
                                {st.name}
                              </div>
                              <div className="text-[12.5px] text-[#4B5563]">
                                {st.program} · {st.ppdbStatus}
                              </div>
                            </div>
                            <span
                              className={`px-3 py-1.5 rounded-full text-[12px] font-semibold shrink-0 ${
                                isSelected
                                  ? "bg-[#111318] text-white"
                                  : "bg-[#F5F5F7] text-[#111111]"
                              }`}
                            >
                              {isSelected ? "Aktif" : "Rapor"}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Desktop Table (md+) */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full text-left border-collapse text-[13.5px]">
                        <thead>
                          <tr className="bg-[#FAF9FB] border-b border-[#E5E7EB] text-[12px] font-semibold uppercase tracking-[0.05em] text-[#6B7280]">
                            <th className="py-3 px-5">NISN</th>
                            <th className="py-3 px-5">Nama Siswa</th>
                            <th className="py-3 px-5">Status</th>
                            <th className="py-3 px-5 text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E5E7EB]">
                          {STUDENTS_DATA.map((st) => {
                            const isSelected = st.nisn === activeStudent.nisn;
                            return (
                              <tr
                                key={st.nisn}
                                className={
                                  isSelected
                                    ? "bg-[#FAF9FB]"
                                    : "bg-white hover:bg-[#FAF9FB]/60"
                                }
                              >
                                <td className="py-3.5 px-5 font-mono text-[12.5px] text-[#6B7280]">
                                  {st.nisn}
                                </td>
                                <td className="py-3.5 px-5">
                                  <div className="font-semibold text-[#111111]">
                                    {st.name}
                                  </div>
                                  <div className="text-[12px] text-[#6B7280]">
                                    {st.program}
                                  </div>
                                </td>
                                <td className="py-3.5 px-5">
                                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F3F4F6] text-[#111111] text-[12px] font-medium">
                                    {st.ppdbStatus}
                                  </span>
                                </td>
                                <td className="py-3.5 px-5 text-right">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setSelectedStudentNisn(st.nisn)
                                    }
                                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium cursor-pointer transition-colors ${
                                      isSelected
                                        ? "bg-[#111318] text-white"
                                        : "bg-white border border-[#D4D6DC] text-[#111111] hover:border-[#111111]"
                                    }`}
                                  >
                                    {isSelected ? "Ditampilkan" : "Lihat Rapor"}
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right 5 Cols: Live E-Rapor Preview */}
                  <div className="lg:col-span-5 rounded-[22px] border border-[#E5E7EB] bg-[#FAF9FB] overflow-hidden">
                    <div className="px-5 py-4 bg-white border-b border-[#E5E7EB] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#111111]" />
                        <span className="text-[15px] font-semibold text-[#111111]">
                          Pratinjau Kartu E-Rapor
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#111318] text-white text-[10.5px] font-mono">
                        SIAP PDF
                      </span>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="rounded-[14px] border border-[#E5E7EB] bg-white divide-y divide-[#F1F2F4] text-[13px]">
                        <div className="px-4 py-2.5 flex justify-between gap-2">
                          <span className="text-[#6B7280]">Nama Siswa</span>
                          <span className="font-semibold text-[#111111] text-right">
                            {activeStudent.name}
                          </span>
                        </div>
                        <div className="px-4 py-2.5 flex justify-between gap-2">
                          <span className="text-[#6B7280]">NISN</span>
                          <span className="font-mono text-[#111111]">
                            {activeStudent.nisn}
                          </span>
                        </div>
                        <div className="px-4 py-2.5 flex justify-between gap-2">
                          <span className="text-[#6B7280]">
                            Rata-Rata · Kehadiran
                          </span>
                          <span className="font-semibold text-[#059669]">
                            {activeStudent.avgScore} · {activeStudent.attendance}
                          </span>
                        </div>
                      </div>

                      <div className="rounded-[14px] border border-[#E5E7EB] bg-white divide-y divide-[#F1F2F4] text-[13px]">
                        {activeStudent.subjects.map((sub) => (
                          <div
                            key={sub.name}
                            className="px-4 py-2.5 flex items-center justify-between gap-3"
                          >
                            <span className="text-[#111111]">{sub.name}</span>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="font-semibold text-[#111111] tabular-nums">
                                {sub.score}
                              </span>
                              <span className="px-2 py-0.5 rounded-[6px] bg-[#F5F5F7] border border-[#E5E7EB] text-[#111111] text-[11px] font-mono">
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

            {/* ===============================================================
                TAB 3: WHATSAPP AI RESMI META & OCR PEMBACA FAKTUR
               =============================================================== */}
            {activeTab === "ai" && (
              <motion.div
                key="demo-ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
              >
                {/* Left 6 Cols: WhatsApp AI 24/7 */}
                <div className="lg:col-span-6 rounded-[22px] border border-[#E5E7EB] bg-white overflow-hidden flex flex-col">
                  <div className="px-5 sm:px-6 py-4 bg-[#111318] text-white flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                        <WhatsAppIcon className="w-4 h-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-[15px] font-semibold text-white truncate">
                          Asisten WhatsApp Resmi Meta
                        </h2>
                        <p className="text-[12px] text-[#9CA3AF]">
                          Balas otomatis 24 jam · Membaca data stok asli
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      API Resmi
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 bg-[#F6F7F9] flex-1 space-y-5">
                    {/* Scenario Selector Pills */}
                    <div className="flex flex-wrap gap-2">
                      {WA_SCENARIOS.map((sc, idx) => (
                        <button
                          key={sc.id}
                          type="button"
                          onClick={() => setSelectedWaIdx(idx)}
                          className={`px-3.5 py-2 rounded-full text-[12.5px] font-medium border transition-all cursor-pointer ${
                            selectedWaIdx === idx
                              ? "bg-[#111318] text-white border-[#111318]"
                              : "bg-white text-[#374151] border-[#D8DCE3] hover:border-[#111111]"
                          }`}
                        >
                          {sc.label}
                        </button>
                      ))}
                    </div>

                    {/* Chat Thread */}
                    <div className="space-y-3.5">
                      <div className="flex justify-end">
                        <div className="max-w-[90%] sm:max-w-[85%] rounded-[18px] rounded-tr-[4px] bg-[#111318] text-white px-4 py-3 text-[13px] leading-relaxed">
                          <div className="text-[10.5px] font-medium text-[#9CA3AF] mb-1">
                            Calon Pelanggan
                          </div>
                          <p className="break-words">
                            {activeWaScenario.customerMsg}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-start">
                        <div className="max-w-[95%] sm:max-w-[92%] rounded-[18px] rounded-tl-[4px] bg-white border border-[#E5E7EB] px-4 py-3.5 text-[13px] text-[#111111] space-y-2.5 shadow-[0_6px_20px_-14px_rgba(17,19,24,0.12)]">
                          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#F1F2F4]">
                            <span className="text-[12px] font-semibold text-[#111111] inline-flex items-center gap-1.5">
                              <MessageSquare className="w-3.5 h-3.5 text-[#059669]" />
                              <span>AI Agent Abinest</span>
                            </span>
                            <span className="text-[11px] font-mono text-[#059669]">
                              {activeWaScenario.metaTag}
                            </span>
                          </div>
                          <p className="whitespace-pre-wrap break-words leading-relaxed text-[#374151]">
                            {activeWaScenario.aiReply}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 6 Cols: Document AI OCR */}
                <div className="lg:col-span-6 rounded-[22px] border border-[#E5E7EB] bg-white overflow-hidden flex flex-col">
                  <div className="px-5 sm:px-6 py-4 border-b border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-[11px] bg-[#111318] text-white flex items-center justify-center shrink-0">
                        <ScanLine className="w-4 h-4" />
                      </div>
                      <div>
                        <h2 className="text-[15px] font-semibold text-[#111111]">
                          AI Pembaca Faktur &amp; PO (OCR)
                        </h2>
                        <p className="text-[12px] text-[#6B7280]">
                          Foto/PDF faktur supplier langsung masuk pembukuan
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRunOcr()}
                      className="h-[38px] px-4 rounded-full bg-[#111318] hover:bg-[#2A2E38] text-white text-[12.5px] font-medium cursor-pointer transition-colors w-full sm:w-auto"
                    >
                      {isScanningOcr ? "Memindai..." : "Ganti & Scan Faktur"}
                    </button>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 space-y-4">
                    {/* Active Document Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 rounded-[14px] bg-[#FAF9FB] border border-[#E5E7EB] text-[12.5px]">
                      <span className="font-mono font-medium text-[#111111] truncate max-w-full">
                        {activeOcr.docTitle}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[11px] font-semibold">
                          Akurasi {activeOcr.confidence}
                        </span>
                        <span className="text-[#6B7280] font-mono text-[11px]">
                          {activeOcr.processTime}
                        </span>
                      </div>
                    </div>

                    {/* Extracted Header Metadata */}
                    <div
                      className={`rounded-[14px] border border-[#E5E7EB] divide-y divide-[#F1F2F4] text-[13px] transition-opacity duration-200 ${
                        isScanningOcr ? "opacity-45" : "opacity-100"
                      }`}
                    >
                      <div className="px-4 py-2.5 flex justify-between gap-3">
                        <span className="text-[#6B7280]">Nomor Dokumen</span>
                        <span className="font-mono font-semibold text-[#111111] text-right">
                          {activeOcr.invoiceNo}
                        </span>
                      </div>
                      <div className="px-4 py-2.5 flex justify-between gap-3">
                        <span className="text-[#6B7280]">Nama Vendor</span>
                        <span className="font-medium text-[#111111] text-right">
                          {activeOcr.vendor}
                        </span>
                      </div>
                      <div className="px-4 py-2.5 flex justify-between gap-3">
                        <span className="text-[#6B7280]">Tanggal</span>
                        <span className="text-[#111111] text-right">
                          {activeOcr.date}
                        </span>
                      </div>
                    </div>

                    {/* Extracted Line Items (Responsive Stacked on Mobile, Table on sm+) */}
                    <div
                      className={`rounded-[14px] border border-[#E5E7EB] overflow-hidden transition-opacity duration-200 ${
                        isScanningOcr ? "opacity-45" : "opacity-100"
                      }`}
                    >
                      {/* Mobile list */}
                      <div className="sm:hidden divide-y divide-[#F1F2F4] text-[13px]">
                        {activeOcr.items.map((row) => (
                          <div
                            key={row.item}
                            className="p-3.5 flex items-start justify-between gap-3"
                          >
                            <div className="space-y-0.5 min-w-0">
                              <div className="font-medium text-[#111111]">
                                {row.item}
                              </div>
                              <div className="text-[12px] text-[#6B7280]">
                                Qty: {row.qty}
                              </div>
                            </div>
                            <span className="font-semibold text-[#111111] tabular-nums shrink-0">
                              {formatRupiah(row.subtotal)}
                            </span>
                          </div>
                        ))}
                        <div className="p-3.5 bg-[#FAF9FB] flex items-center justify-between font-semibold text-[#111111]">
                          <span>Total Pembukuan</span>
                          <span className="tabular-nums">
                            {formatRupiah(activeOcr.total)}
                          </span>
                        </div>
                      </div>

                      {/* Desktop table */}
                      <table className="hidden sm:table w-full text-left border-collapse text-[13px]">
                        <thead>
                          <tr className="bg-[#FAF9FB] border-b border-[#E5E7EB] text-[11.5px] font-semibold uppercase tracking-[0.05em] text-[#6B7280]">
                            <th className="py-2.5 px-4">Item Terbaca</th>
                            <th className="py-2.5 px-4">Qty</th>
                            <th className="py-2.5 px-4 text-right">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F1F2F4]">
                          {activeOcr.items.map((row) => (
                            <tr key={row.item} className="bg-white">
                              <td className="py-2.5 px-4 font-medium text-[#111111]">
                                {row.item}
                              </td>
                              <td className="py-2.5 px-4 text-[#6B7280]">
                                {row.qty}
                              </td>
                              <td className="py-2.5 px-4 text-right font-medium text-[#111111] tabular-nums">
                                {formatRupiah(row.subtotal)}
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-[#FAF9FB] border-t border-[#E5E7EB]">
                            <td
                              colSpan={2}
                              className="py-3 px-4 font-semibold text-[#111111]"
                            >
                              Total Nilai Pembukuan Otomatis
                            </td>
                            <td className="py-3 px-4 text-right font-bold text-[#111111] tabular-nums">
                              {formatRupiah(activeOcr.total)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. Architectural Dark Closing CTA Banner (Proper & Transparent) */}
          <div className="rounded-[24px] bg-[#111318] text-white p-7 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">
                100% Kustom Mengikuti SOP Bisnis Anda
              </p>
              <h3 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.025em] leading-snug text-white">
                Ingin sistem seperti simulasi di atas dibangun khusus untuk tim
                Anda?
              </h3>
              <p className="text-[14.5px] text-[#D1D5DB] leading-relaxed">
                Tersedia skema Beli Putus (100% hak milik kode, Rp0 biaya per
                staf) maupun Terima Beres dengan pembayaran bertahap yang aman.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  demoOrderWaText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "interactive_demo",
                    label: "order_demo_cta",
                  })
                }
                className="inline-flex items-center justify-center gap-2 h-[46px] px-6 rounded-full bg-white text-[#111318] hover:bg-[#F3F4F6] text-[14.5px] font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#111318]" />
                <span>Pesan sistem serupa</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/harga"
                className="inline-flex items-center justify-center h-[46px] px-6 rounded-full border border-white/25 text-white hover:bg-white/10 text-[14.5px] font-medium transition-colors"
              >
                Lihat daftar harga
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
