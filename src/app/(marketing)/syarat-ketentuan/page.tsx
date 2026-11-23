import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan",
  description:
    "Ketentuan resmi pengembangan website, sistem ERP/SIAKAD/POS, dan automasi AI/ML di Abinest Digital Systems mengenai skema Beli Putus, Terima Beres, garansi, dan kepemilikan kode.",
  alternates: {
    canonical: "/syarat-ketentuan",
  },
};

const TERMS = [
  {
    title: "1. Ruang Lingkup & Penawaran Resmi",
    body: [
      "Angka investasi yang tercantum pada halaman utama dan kalkulator biaya merupakan acuan awal. Nilai investasi final, daftar modul teknis, jadwal rilis per tahap, serta kriteria serah terima ditetapkan secara tertulis dalam Surat Penawaran Resmi / Kontrak Kerja Sama (PO/SPK) setelah sesi diskusi kebutuhan.",
      "Estimasi rilis web dan sistem awal adalah 7–14 hari kerja, sedangkan sistem ERP, SIAKAD, POS multi-cabang, atau integrasi AI/ML kustom umumnya berkisar 2–8 minggu bergantung pada kompleksitas alur usaha dan kesiapan data awal dari klien.",
    ],
  },
  {
    title: "2. Skema Beli Putus vs. Terima Beres",
    body: [
      "Pada skema Beli Putus, setelah seluruh termin pelunasan diselesaikan, 100% kode program (source code), aset antarmuka, dan struktur basis data menjadi hak milik penuh klien tanpa biaya langganan berulang maupun biaya lisensi per pengguna dari pihak Abinest.",
      "Pada skema Terima Beres (layanan terkelola), biaya bulanan mencakup pemeliharaan server cloud, pemantauan uptime, backup rutin, serta penyesuaian teknis sesuai paket yang disepakati pada kontrak layanan.",
    ],
  },
  {
    title: "3. Pembayaran Termin & Revisi",
    body: [
      "Kecuali disepakati lain dalam kontrak proyek korporat/instansi, pembayaran proyek pengembangan umumnya dibagi bertahap (uang muka awal saat penandatanganan SPK, termin progres uji coba staging, dan pelunasan saat serah terima produksi).",
      "Revisi desain dan penyesuaian alur yang masih berada di dalam ruang lingkup dokumen spesifikasi awal (BRD) dikerjakan tanpa biaya tambahan hingga tahap User Acceptance Testing (UAT) selesai.",
    ],
  },
  {
    title: "4. Garansi Pascarilis & Biaya Pihak Ketiga",
    body: [
      "Setiap proyek yang diluncurkan dilengkapi masa garansi perbaikan kendala teknis (bug-fix) pascarilis sesuai kesepakatan SPK, beserta sesi pelatihan admin dan buku panduan operasional.",
      "Biaya infrastruktur pihak ketiga yang terdaftar atas nama klien — seperti perpanjangan domain tahunan, layanan cloud/VPS eksternal, atau tarif percakapan resmi Meta WhatsApp Cloud API — dibayarkan sesuai pemakaian langsung ke penyedia layanan terkait.",
    ],
  },
];

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      <GroveNavbar />

      <main className="flex-1 py-12 sm:py-16">
        <article className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-4">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Beranda</span>
              </Link>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700">
              <FileText className="w-3.5 h-3.5" />
              <span>Ketentuan Kerja Sama · Abinest Digital Systems</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Syarat &amp; Ketentuan Layanan
            </h1>
            <p className="text-sm text-slate-500">
              Transparansi kepemilikan kode, skema kerja sama, dan garansi pascarilis untuk klien Abinest Digital Systems.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/80 divide-y divide-slate-100 shadow-sm">
            {TERMS.map((sec) => (
              <section key={sec.title} className="p-6 sm:p-7 space-y-3">
                <h2 className="text-lg font-bold text-slate-900">{sec.title}</h2>
                {sec.body.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[14.5px] text-slate-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>

      <GroveFooterSection />
      <GroveFloatingWhatsApp />
    </div>
  );
}
