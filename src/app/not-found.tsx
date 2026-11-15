import Link from "next/link";
import { ArrowRight, Calculator, Compass, Home, MonitorPlay } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

const quickLinks = [
  {
    icon: Home,
    title: "Beranda Utama Abinest",
    description:
      "Lihat ringkasan layanan, studi kasus terukur, alur kerja 5 langkah, dan perbandingan harga.",
    href: "/",
    cta: "Buka Beranda",
  },
  {
    icon: MonitorPlay,
    title: "Simulasi Demo Interaktif",
    description:
      "Uji langsung tampilan sistem ERP Gudang, SIAKAD Sekolah, Kasir POS, dan Asisten AI.",
    href: "/demo",
    cta: "Jalankan Demo",
  },
  {
    icon: Calculator,
    title: "Audit Sistem & Estimasi Gratis",
    description:
      "Evaluasi kecepatan situs web atau sistem operasional Anda dan dapatkan rekomendasi arsitektur.",
    href: "/audit-gratis",
    cta: "Mulai Audit",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <GroveNavbar />

      <main className="flex-1 flex items-center justify-center px-5 sm:px-8 pt-28 pb-20">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <Compass className="w-3.5 h-3.5" />
              <span>404 · Halaman Tidak Ditemukan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0F172A] leading-tight">
              Halaman yang Anda Cari Telah Berpindah atau Tidak Tersedia
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Tautan yang Anda buka mungkin sudah diperbarui. Gunakan pintasan di bawah ini untuk melanjutkan penjelajahan layanan dan demo sistem Abinest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 p-5 shadow-sm transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h2 className="text-base font-semibold text-[#0F172A] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <GroveFooterSection />
      <GroveFloatingWhatsApp />
    </div>
  );
}
