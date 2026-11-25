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
  ShieldCheck,
  Calculator,
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
    aiReply: `Halo Pak! Berikut data stok real-time dari sistem ERP kami:

1. *Kertas HVS A4 80gr (Dus)*
• Gudang Pusat Tangerang: *48 Dus Tersedia*
• Harga Normal: Rp265.000/dus
• Harga Grosir (≥10 dus): *Rp248.000/dus*

2. *Printer Thermal Bluetooth 80mm*
• Toko Ritel Jakarta: *19 Unit Tersedia*
• Harga: Rp685.000/unit

Ketik *ORDER* jika ingin saya buatkan draf faktur & tautan pembayarannya otomatis sekarang.`,
    metaTag: "Sinkronisasi Basis Data Stok · 0,42 detik",
  },
  {
    id: "faktur",
    label: "2. Minta Faktur PDF & Resi",
    customerMsg:
      "Mbak, tolong kirim ulang PDF faktur INV-2611-088 atas nama PT Maju Jaya beserta status pengirimannya hari ini ya.",
    aiReply: `Baik Pak, data transaksi *INV-2611-088* ditemukan.

• Pelanggan: PT Maju Jaya Logistik
• Total Tagihan: *Rp530.000* (Lunas via VA BCA)
• Status Kurir: *Dalam Pengiriman — Armada Tangerang #04*
• Estimasi Tiba: Hari ini pukul 14:30 WIB

Dokumen PDF Faktur & Surat Jalan telah dilampirkan otomatis di pesan ini.`,
    metaTag: "Pekerja PDF & API Logistik · 0,58 detik",
  },
  {
    id: "ppdb",
    label: "3. Info Pendaftaran / Jadwal",
    customerMsg:
      "Permisi, untuk pendaftaran siswa baru Gelombang 1 masih buka? Biayanya berapa dan jadwal tes masuknya kapan?",
    aiReply: `Selamat siang Bapak/Ibu! Pendaftaran *PPDB Gelombang 1 TA 2026/2027* masih dibuka sampai tanggal 30 bulan ini.

• Biaya Formulir & Tes CBT: *Rp150.000* (Bayar via QRIS/VA Otomatis)
• Jadwal Tes CBT Daring: Bisa dikerjakan dari rumah setiap hari Sabtu pukul 09.00 WIB
• Pengumuman Kelulusan: Otomatis keluar 5 menit setelah tes selesai

Ingin saya kirimkan tautan formulir pendaftarannya sekarang?`,
    metaTag: "Agen Admisi SIAKAD · 0,39 detik",
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
      label: "01 · Simulasi ERP & Gudang",
      shortLabel: "01 · ERP",
      icon: Database,
    },
    {
      id: "siakad",
      label: "02 · Simulasi SIAKAD & CBT",
      shortLabel: "02 · SIAKAD",
      icon: GraduationCap,
    },
    {
      id: "ai",
      label: "03 · Automasi AI & WhatsApp",
      shortLabel: "03 · AI & WA",
      icon: Bot,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7F7F7]">
      <div className="sig-container space-y-10">
        {/* Swiss Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#E8E8E8]">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
              Sandbox interaktif · Uji coba langsung
            </p>
            <h1 className="text-[clamp(2rem,3.4vw+1rem,3.5rem)] font-bold tracking-[-0.025em] leading-[1.08] text-[#171717]">
              Coba sistem kami.
              <br />
              <span className="text-[#6F6F71]">Sebelum memesan.</span>
            </h1>
            <p className="text-[16.5px] sm:text-[18px] text-[#6F6F71] leading-relaxed">
              Klik transaksi gudang, simulasikan lonjakan peserta ujian CBT, hingga uji balasan otomatis AI WhatsApp dan pembacaan faktur OCR secara real-time.
            </p>
          </div>

          {/* Significa Tab Switcher */}
          <div className="grid grid-cols-3 sm:inline-flex p-1.5 rounded-[18px] bg-white border border-[#E8E8E8] gap-1 shrink-0">
            {demoTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-2.5 rounded-[12px] text-[11.5px] sm:text-[13px] font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#171717] text-[#F7F7F7]"
                      : "text-[#6F6F71] hover:text-[#171717] hover:bg-[#EDEDED]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="md:hidden truncate">{tab.shortLabel}</span>
                  <span className="hidden md:inline whitespace-nowrap">
                    {tab.label}
                  </span>
                </button>
              );
            })}
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
              <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#E8E8E8] rounded-[20px] bg-white divide-y lg:divide-y-0 divide-x divide-[#E8E8E8] overflow-hidden">
                <div className="p-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71] block">
                    Total Nilai Aset Stok
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-[#171717] mt-1 tabular-nums">
                    {formatRupiah(totalInventoryValue)}
                  </div>
                  <span className="text-[12px] text-[#3C846E] font-medium">
                    Sinkronisasi 3 gudang
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71] block">
                    Omzet Faktur Hari Ini
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-[#171717] mt-1 tabular-nums">
                    {formatRupiah(todayRevenue)}
                  </div>
                  <span className="text-[12px] text-[#6F6F71]">
                    {todayTxCount} faktur terbit otomatis
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71] block">
                    Kecepatan Sinkronisasi
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-[#171717] mt-1">
                    &lt;0,2 detik
                  </div>
                  <span className="text-[12px] text-[#6F6F71]">
                    PostgreSQL + Edge Cache
                  </span>
                </div>
                <div className="p-5 bg-[#3C846E] text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD124] block">
                    Biaya Lisensi / Kasir
                  </span>
                  <div className="text-xl sm:text-2xl font-bold mt-1">
                    Rp0 / bulan
                  </div>
                  <span className="text-[12px] text-white/80">
                    Unlimited cabang &amp; staf
                  </span>
                </div>
              </div>

              {/* Filter & Table Card */}
              <div className="ui-card overflow-hidden">
                <div className="ui-card-header flex-wrap gap-3">
                  <div>
                    <h2 className="text-[15.5px] font-semibold text-[#171717]">
                      Dasbor inventori multi-gudang &amp; faktur instan
                    </h2>
                    <p className="text-[12.5px] text-[#6F6F71]">
                      Klik &ldquo;-1 Jual&rdquo; atau &ldquo;+5 Restock&rdquo; untuk melihat stok &amp; omzet berubah langsung.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <select
                      aria-label="Filter Gudang"
                      value={warehouseFilter}
                      onChange={(e) => setWarehouseFilter(e.target.value)}
                      className="rounded-[12px] border border-[#E8E8E8] bg-white px-3 py-2 text-xs font-medium text-[#171717] outline-none focus:border-[#FFD124] cursor-pointer"
                    >
                      <option value="Semua Gudang">Semua Gudang (3 Lokasi)</option>
                      <option value="Gudang Pusat Tangerang">Gudang Pusat Tangerang</option>
                      <option value="Gudang Cabang Bekasi">Gudang Cabang Bekasi</option>
                      <option value="Toko Ritel Jakarta">Toko Ritel Jakarta</option>
                    </select>

                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-[#6F6F71] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari SKU / barang..."
                        className="pl-8 pr-3 py-2 rounded-[12px] border border-[#E8E8E8] bg-white text-xs text-[#171717] outline-none focus:border-[#FFD124] w-40 sm:w-48"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleResetErp}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[12px] border border-[#E8E8E8] bg-white hover:border-[#FFD124] text-xs font-medium text-[#171717] cursor-pointer transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[760px] text-[13px]">
                    <thead>
                      <tr className="bg-[#171717] text-[#F7F7F7] divide-x divide-white/10">
                        <th className="py-3 px-4 font-medium font-mono text-xs">SKU</th>
                        <th className="py-3 px-4 font-medium">Nama Produk</th>
                        <th className="py-3 px-4 font-medium">Lokasi Gudang</th>
                        <th className="py-3 px-4 font-medium text-right">Stok Aktif</th>
                        <th className="py-3 px-4 font-medium text-right">Harga Satuan</th>
                        <th className="py-3 px-4 font-medium text-center">Simulasi Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E8]">
                      {filteredInventory.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-[#6F6F71]">
                            Tidak ada barang yang cocok dengan pencarian Anda.
                          </td>
                        </tr>
                      ) : (
                        filteredInventory.map((item, idx) => {
                          const isLow = item.stock <= item.minStock;
                          return (
                            <tr
                              key={item.sku}
                              className={`divide-x divide-[#E8E8E8] ${
                                idx % 2 === 1 ? "bg-[#F7F7F7]/60" : "bg-white"
                              } hover:bg-[#EDEDED]/50 transition-colors`}
                            >
                              <td className="py-3 px-4 font-mono text-xs text-[#6F6F71]">
                                {item.sku}
                              </td>
                              <td className="py-3 px-4 font-medium text-[#171717]">
                                {item.name}
                              </td>
                              <td className="py-3 px-4 text-[#6F6F71]">
                                {item.warehouse}
                              </td>
                              <td className="py-3 px-4 text-right tabular-nums">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-[8px] font-mono text-xs font-semibold ${
                                    item.stock === 0
                                      ? "bg-[#E1251B] text-white"
                                      : isLow
                                      ? "bg-[#FFD124] text-[#171717]"
                                      : "bg-[#3C846E]/15 text-[#171717]"
                                  }`}
                                >
                                  {item.stock} unit
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right font-medium text-[#171717] tabular-nums">
                                {formatRupiah(item.price)}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center justify-center gap-2">
                                  <button
                                    type="button"
                                    disabled={item.stock <= 0}
                                    onClick={() => handleSellItem(item.sku)}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[10px] bg-[#171717] hover:bg-[#171717]/85 disabled:bg-[#C6C6C8] text-[#F7F7F7] text-[11.5px] font-medium cursor-pointer disabled:cursor-not-allowed transition-colors"
                                  >
                                    <ShoppingCart className="w-3 h-3" />
                                    <span>-1 Jual</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleRestockItem(item.sku)}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[10px] bg-white hover:border-[#FFD124] border border-[#E8E8E8] text-[#171717] text-[11.5px] font-medium cursor-pointer transition-colors"
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
                <div className="ui-card-footer space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                      Log mutasi gudang &amp; faktur otomatis (real-time)
                    </span>
                    <span className="text-[11px] font-mono text-[#3C846E] font-semibold">
                      ● LIVE DB STREAM
                    </span>
                  </div>
                  <div className="ui-list-group text-xs">
                    {logs.map((log) => (
                      <div
                        key={log.id}
                        className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`px-2 py-0.5 rounded-[6px] text-[10px] font-mono font-semibold shrink-0 ${
                              log.type === "FAKTUR KELUAR"
                                ? "bg-[#171717] text-[#F7F7F7]"
                                : "bg-[#3C846E] text-white"
                            }`}
                          >
                            {log.type}
                          </span>
                          <span className="font-mono text-[#6F6F71]">
                            {log.id}
                          </span>
                          <span className="font-medium text-[#171717] truncate">
                            {log.itemName} ({log.qty}x · {log.warehouse})
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-semibold text-[#171717] tabular-nums">
                            {formatRupiah(log.amount)}
                          </span>
                          <span className="text-[#6F6F71]">{log.time}</span>
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
              <div className="ui-card overflow-hidden">
                <div className="px-6 py-5 bg-[#171717] text-white flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[12px] bg-[#FFD124] text-[#171717] flex items-center justify-center shrink-0">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-[15.5px] font-semibold text-white">
                        Uji ketahanan server ujian CBT &amp; PPDB anti-down
                      </h2>
                      <p className="text-[12.5px] text-white/70">
                        Simulasikan lonjakan login ratusan siswa secara serentak.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSimulateLoad}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[12px] bg-[#FFD124] hover:opacity-90 text-[#171717] font-semibold text-xs cursor-pointer transition-opacity"
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>Simulasikan +250 Siswa Serentak</span>
                    </button>
                    {stressTested && (
                      <button
                        type="button"
                        onClick={handleResetCbt}
                        className="px-3.5 py-2.5 rounded-[12px] bg-white/10 hover:bg-white/20 text-white text-xs font-medium cursor-pointer transition-colors"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E8E8]">
                  <div className="p-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                      Siswa Online Serentak
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-[#171717] mt-1 tabular-nums">
                      {onlineStudents.toLocaleString("id-ID")} Siswa
                    </div>
                    <span className="text-xs text-[#3C846E] font-medium">
                      Kapasitas auto-scale hingga 10.000+ user
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                      Response Time Server
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-[#171717] mt-1 tabular-nums">
                      0,{serverLatencyMs} Detik
                    </div>
                    <span className="text-xs text-[#6F6F71]">
                      Jauh di bawah batas aman (&lt;0,45 detik)
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
                      Uptime Garansi SLA
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-[#3C846E] mt-1">
                      99,98% Online
                    </div>
                    <span className="text-xs text-[#6F6F71]">
                      0% galat 502/timeout selama ujian
                    </span>
                  </div>
                </div>

                {stressTested && (
                  <div className="px-6 py-3.5 bg-[#3C846E] text-white text-[13px] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFD124] shrink-0" />
                    <span>
                      Simulasi sukses: {onlineStudents} peserta ujian aktif serentak tetap membuka soal dalam 0,{serverLatencyMs} detik tanpa antrean macet.
                    </span>
                  </div>
                )}
              </div>

              {/* Tabel Siswa & Preview E-Rapor */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 ui-card overflow-hidden">
                  <div className="ui-card-header">
                    <h3 className="text-[15px] font-semibold text-[#171717]">
                      Daftar peserta PPDB &amp; akademik siswa
                    </h3>
                    <span className="text-[11px] font-mono text-[#6F6F71]">
                      PILIH SISWA
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[13px]">
                      <thead>
                        <tr className="bg-[#F7F7F7] border-b border-[#E8E8E8] divide-x divide-[#E8E8E8] text-[#6F6F71] text-xs">
                          <th className="py-2.5 px-4 font-mono">NISN</th>
                          <th className="py-2.5 px-4 font-medium">Nama Lengkap</th>
                          <th className="py-2.5 px-4 font-medium">Status</th>
                          <th className="py-2.5 px-4 font-medium text-center">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E8]">
                        {STUDENTS_DATA.map((st) => {
                          const isSelected = st.nisn === activeStudent.nisn;
                          return (
                            <tr
                              key={st.nisn}
                              className={`divide-x divide-[#E8E8E8] ${
                                isSelected ? "bg-[#EDEDED]/70" : "bg-white hover:bg-[#F7F7F7]"
                              }`}
                            >
                              <td className="py-3 px-4 font-mono text-xs text-[#6F6F71]">
                                {st.nisn}
                              </td>
                              <td className="py-3 px-4">
                                <div className="font-medium text-[#171717]">
                                  {st.name}
                                </div>
                                <div className="text-[11.5px] text-[#6F6F71]">
                                  {st.program}
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <span className="inline-block px-2 py-0.5 rounded-[6px] bg-[#3C846E]/15 text-[#171717] text-[11px] font-medium">
                                  {st.ppdbStatus}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center">
                                <button
                                  type="button"
                                  onClick={() => setSelectedStudentNisn(st.nisn)}
                                  className={`px-3 py-1.5 rounded-[10px] text-[11.5px] font-medium cursor-pointer transition-colors ${
                                    isSelected
                                      ? "bg-[#171717] text-[#F7F7F7]"
                                      : "bg-white border border-[#E8E8E8] text-[#171717] hover:border-[#FFD124]"
                                  }`}
                                >
                                  E-Rapor
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
                <div className="lg:col-span-5 ui-card overflow-hidden">
                  <div className="ui-card-header">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#171717]" />
                      <span className="text-[14px] font-semibold text-[#171717]">
                        Preview kartu E-Rapor
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-[6px] bg-[#171717] text-[#FFD124] text-[10px] font-mono">
                      VERIFIED PDF
                    </span>
                  </div>
                  <div className="ui-card-body space-y-4">
                    <div className="ui-list-group text-xs">
                      <div className="px-4 py-2.5 flex justify-between">
                        <span className="text-[#6F6F71]">Nama Siswa</span>
                        <span className="font-semibold text-[#171717]">
                          {activeStudent.name}
                        </span>
                      </div>
                      <div className="px-4 py-2.5 flex justify-between">
                        <span className="text-[#6F6F71]">NISN</span>
                        <span className="font-mono text-[#171717]">
                          {activeStudent.nisn}
                        </span>
                      </div>
                      <div className="px-4 py-2.5 flex justify-between">
                        <span className="text-[#6F6F71]">Rata-Rata / Kehadiran</span>
                        <span className="font-semibold text-[#3C846E]">
                          {activeStudent.avgScore} · {activeStudent.attendance}
                        </span>
                      </div>
                    </div>

                    <div className="ui-list-group text-xs">
                      {activeStudent.subjects.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-4 py-2.5 flex items-center justify-between gap-2"
                        >
                          <span className="text-[#171717]">{sub.name}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-semibold text-[#171717]">
                              {sub.score}
                            </span>
                            <span className="px-2 py-0.5 rounded-[6px] bg-[#F7F7F7] border border-[#E8E8E8] text-[#171717] text-[10px] font-mono">
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
              <div className="lg:col-span-6 ui-card overflow-hidden">
                <div className="px-6 py-4 bg-[#171717] text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[10px] bg-[#3C846E] text-white flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-[14.5px] font-semibold text-white">
                      Simulasi AI WhatsApp Resmi Meta (24/7)
                    </h2>
                    <p className="text-[11.5px] text-white/70">
                      Pilih pertanyaan pelanggan untuk uji balasan otomatis &lt;1 detik:
                    </p>
                  </div>
                </div>

                <div className="ui-card-body space-y-4 bg-[#EDEDED]/60">
                  <div className="flex flex-wrap gap-2">
                    {WA_SCENARIOS.map((sc, idx) => (
                      <button
                        key={sc.id}
                        type="button"
                        onClick={() => setSelectedWaIdx(idx)}
                        className={`px-3 py-1.5 rounded-[10px] text-xs font-medium border transition-all cursor-pointer ${
                          selectedWaIdx === idx
                            ? "bg-[#171717] text-[#F7F7F7] border-[#171717]"
                            : "bg-white text-[#171717] border-[#E8E8E8] hover:border-[#FFD124]"
                        }`}
                      >
                        {sc.label}
                      </button>
                    ))}
                  </div>

                  {/* Chat Bubbles */}
                  <div className="space-y-3 pt-1">
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-[16px] rounded-tr-sm bg-[#DAD6CE] px-4 py-3 text-xs text-[#171717]">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#6F6F71] mb-1">
                          Calon Pelanggan
                        </div>
                        <p className="leading-relaxed">
                          {activeWaScenario.customerMsg}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-[92%] rounded-[16px] rounded-tl-sm bg-white border border-[#E8E8E8] px-4 py-3.5 text-xs text-[#171717] space-y-2">
                        <div className="flex items-center justify-between gap-2 border-b border-[#E8E8E8] pb-2">
                          <span className="text-[11px] font-semibold text-[#171717] flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5 text-[#3C846E]" />
                            <span>AI Agent Abinest</span>
                          </span>
                          <span className="text-[10px] font-mono text-[#3C846E]">
                            {activeWaScenario.metaTag}
                          </span>
                        </div>
                        <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-[#171717]">
                          {activeWaScenario.aiReply}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: AI Document OCR */}
              <div className="lg:col-span-6 ui-card overflow-hidden">
                <div className="ui-card-header flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-[10px] bg-[#171717] text-[#FFD124] flex items-center justify-center shrink-0">
                      <ScanLine className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-[14.5px] font-semibold text-[#171717]">
                        Simulasi AI Pembaca Faktur &amp; PO (OCR)
                      </h2>
                      <p className="text-[11.5px] text-[#6F6F71]">
                        Foto/PDF faktur supplier langsung masuk pembukuan.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRunOcr()}
                    className="px-3.5 py-2 rounded-[12px] bg-[#171717] hover:opacity-90 text-[#F7F7F7] text-xs font-medium cursor-pointer transition-opacity"
                  >
                    {isScanningOcr ? "Memindai..." : "Ganti & Scan Faktur"}
                  </button>
                </div>

                <div className="ui-card-body space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-[14px] bg-[#171717] text-white text-xs">
                    <div className="font-mono truncate">
                      FILE: <span className="text-[#FFD124]">{activeOcr.docTitle}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded-[6px] bg-[#3C846E] text-white font-mono text-[10.5px]">
                        Akurasi {activeOcr.confidence}
                      </span>
                      <span className="px-2 py-0.5 rounded-[6px] bg-white/10 text-white font-mono text-[10.5px]">
                        {activeOcr.processTime}
                      </span>
                    </div>
                  </div>

                  {ocrScannedOnce && (
                    <>
                      <div className="ui-list-group text-xs">
                        <div className="px-4 py-2.5 flex justify-between">
                          <span className="text-[#6F6F71]">Nomor Dokumen</span>
                          <span className="font-mono font-semibold text-[#171717]">
                            {activeOcr.invoiceNo}
                          </span>
                        </div>
                        <div className="px-4 py-2.5 flex justify-between">
                          <span className="text-[#6F6F71]">Nama Vendor</span>
                          <span className="font-medium text-[#171717]">
                            {activeOcr.vendor}
                          </span>
                        </div>
                        <div className="px-4 py-2.5 flex justify-between">
                          <span className="text-[#6F6F71]">Tanggal Transaksi</span>
                          <span className="text-[#171717]">{activeOcr.date}</span>
                        </div>
                      </div>

                      <div className="overflow-x-auto border border-[#E8E8E8] rounded-[14px]">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-[#F7F7F7] border-b border-[#E8E8E8] divide-x divide-[#E8E8E8] text-[#6F6F71]">
                              <th className="py-2.5 px-3 font-medium">Item Terbaca AI</th>
                              <th className="py-2.5 px-3 font-medium">Qty</th>
                              <th className="py-2.5 px-3 font-medium text-right">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#E8E8E8]">
                            {activeOcr.items.map((row, rIdx) => (
                              <tr key={rIdx} className="divide-x divide-[#E8E8E8] bg-white">
                                <td className="py-2.5 px-3 font-medium text-[#171717]">
                                  {row.item}
                                </td>
                                <td className="py-2.5 px-3 text-[#6F6F71]">{row.qty}</td>
                                <td className="py-2.5 px-3 text-right font-medium text-[#171717] tabular-nums">
                                  {formatRupiah(row.subtotal)}
                                </td>
                              </tr>
                            ))}
                            <tr className="bg-[#F7F7F7] divide-x divide-[#E8E8E8]">
                              <td colSpan={2} className="py-3 px-3 font-semibold text-[#171717]">
                                Total Nilai Pembukuan Otomatis
                              </td>
                              <td className="py-3 px-3 text-right font-bold text-[#171717] tabular-nums">
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

        {/* Bottom Significa Editorial Conversion Strip */}
        <div className="rounded-[20px] bg-white border border-[#E8E8E8] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#6F6F71]">
              <ShieldCheck className="w-4 h-4 text-[#3C846E]" />
              <span>Siap dikustomisasi sesuai alur usaha Anda &lt; 14 hari kerja</span>
            </div>
            <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#171717]">
              Ingin sistem seperti simulasi di atas dibangun khusus untuk perusahaan Anda?
            </h3>
            <p className="text-[14.5px] text-[#6F6F71]">
              Tersedia skema Beli Putus (100% hak milik kode sumber tanpa iuran bulanan) atau Terima Beres.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(demoOrderWaText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  source: "interactive_demo",
                  label: "order_demo_cta",
                })
              }
              className="sig-btn-primary"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Pesan sistem serupa</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link href="/audit-gratis" className="sig-btn-outline">
              <Calculator className="w-4 h-4" />
              <span>Hitung estimasi biaya</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
