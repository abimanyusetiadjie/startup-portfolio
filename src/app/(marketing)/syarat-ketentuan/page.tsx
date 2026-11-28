import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";

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
      "Angka investasi yang tercantum pada halaman utama dan halaman daftar harga merupakan acuan awal. Nilai investasi final, daftar modul teknis, jadwal rilis per tahap, serta kriteria serah terima ditetapkan secara tertulis dalam Surat Penawaran Resmi / Kontrak Kerja Sama (PO/SPK) setelah sesi diskusi kebutuhan.",
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
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <SignificaNavbar />

      <main className="flex-1 pt-[116px] pb-20">
        <article className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="sig-link inline-flex items-center gap-1.5 text-[14px] font-medium text-[#6F6F71] hover:text-[#171717]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke beranda</span>
            </Link>

            <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
              Ketentuan kerja sama · Abinest Digital Systems
            </p>

            <h1 className="text-[36px] sm:text-[46px] font-medium tracking-[-0.03em] leading-[1.08] text-[#171717]">
              Syarat &amp; ketentuan.
            </h1>
            <p className="text-[15.5px] text-[#6F6F71] leading-relaxed">
              Transparansi kepemilikan kode, skema kerja sama, dan garansi pascarilis untuk klien Abinest Digital Systems.
            </p>
          </div>

          <div className="rounded-[20px] bg-white border border-[#E8E8E8] divide-y divide-[#E8E8E8]">
            {TERMS.map((sec) => (
              <section key={sec.title} className="p-6 sm:p-8 space-y-3">
                <h2 className="text-[19px] font-medium tracking-[-0.015em] text-[#171717]">
                  {sec.title}
                </h2>
                {sec.body.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[15px] text-[#6F6F71] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>

      <SignificaFooter />
    </div>
  );
}
