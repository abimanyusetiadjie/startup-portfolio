import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveAmberContactSection } from "@/components/grove/GroveAmberContactSection";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "Jasa Pembuatan Sistem Sekolah (SIAKAD), Yayasan & ERP Anti-Down | Abinest",
  description:
    "Jasa pembuatan Sistem Informasi Akademik (SIAKAD) sekolah, sistem yayasan, ERP ringan, dan sistem kustom dengan SLA 99.9% uptime anti-down saat ujian & PPDB. 100% source code milik Anda.",
  keywords: [
    "jasa pembuatan sistem sekolah",
    "jasa pembuatan siakad sekolah",
    "sistem informasi akademik anti down",
    "jasa pembuatan aplikasi sekolah jakarta surabaya",
    "jasa pembuatan sistem erp umkm",
  ],
  alternates: {
    canonical: "/jasa-pembuatan-sistem-sekolah",
  },
};

export default function JasaSistemSekolahPage() {
  const benefits = [
    "Jaminan SLA 99.9% Uptime: Sistem tetap berjalan stabil saat 1.200+ siswa login ujian CBT bersamaan atau saat PPDB.",
    "Cetak ratusan rapor PDF Kurikulum Merdeka secara serentak di latar belakang tanpa membuat server macet.",
    "Hak akses terpisah dan aman untuk Kepala Sekolah, Guru, Wali Kelas, Staf Keuangan, Siswa, dan Orang Tua.",
    "100% kepemilikan source code diserahkan penuh ke sekolah/yayasan Anda tanpa biaya lisensi bulanan per siswa.",
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col font-sans">
      <GroveNavbar />

      <main className="flex-1">
        <section className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-slate-200/80">
          <div className="max-w-[1060px] mx-auto px-5 sm:px-8 space-y-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#C2672B]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Halaman Utama Abinest</span>
            </Link>

            <div className="space-y-4 max-w-3xl">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2672B] bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
                PILAR LAYANAN 02 · SIAKAD &amp; ERP KUSTOM
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Jasa Pembuatan Sistem Informasi Sekolah (SIAKAD), Yayasan, &amp; ERP Anti-Down
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Kami membangun sistem akademik, keuangan SPP, PPDB online, hingga dashboard operasional perusahaan yang dirancang khusus agar tahan lonjakan ribuan pengguna bersamaan tanpa server down.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 flex items-start gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            {/* Internal Linking to Other Pillars */}
            <div className="pt-6 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="text-slate-500">Lihat layanan Abinest lainnya:</span>
              <Link
                href="/jasa-pembuatan-website-jakarta"
                className="text-[#C2672B] hover:underline inline-flex items-center gap-1"
              >
                <span>Jasa Pembuatan Website Cepat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/jasa-automasi-whatsapp"
                className="text-[#C2672B] hover:underline inline-flex items-center gap-1"
              >
                <span>Jasa Automasi WhatsApp Resmi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <GroveAmberContactSection />
      </main>

      <GroveFooterSection />
      <GroveFloatingWhatsApp />
    </div>
  );
}
