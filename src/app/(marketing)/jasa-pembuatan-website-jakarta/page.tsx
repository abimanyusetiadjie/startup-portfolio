import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveAmberContactSection } from "@/components/grove/GroveAmberContactSection";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Situs Web Bisnis (<0,8 detik) Jakarta & Surabaya | Abinest",
  description:
    "Jasa pembuatan situs web modern berbasis Next.js berkecepatan tinggi (<0,8 detik), struktur SEO Google rapi, dan 100% hak milik kode program tanpa biaya sewa bulanan.",
  keywords: [
    "jasa pembuatan website jakarta",
    "jasa pembuatan website surabaya",
    "jasa website next.js",
    "jasa pembuatan website perusahaan",
  ],
  alternates: {
    canonical: "/jasa-pembuatan-website-jakarta",
  },
};

export default function JasaWebsitePage() {
  const benefits = [
    "Waktu muat di bawah 0,8 detik pada jaringan seluler calon klien.",
    "Arsitektur Next.js dengan struktur data ramah mesin pencari Google.",
    "Desain editorial bersih dengan hierarki informasi yang jelas dan mudah dipindai.",
    "100% hak milik kode program dan repositori Git diserahkan utuh tanpa biaya bulanan.",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <GroveNavbar />

      <main className="flex-1">
        <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>

            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Layanan 01 · Situs Web Bisnis
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Pembuatan Situs Web Modern Berkecepatan Tinggi
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Kami merancang situs web resmi untuk perusahaan, sekolah, dan usaha berkembang di Jakarta serta Surabaya dengan standar waktu muat di bawah 0,8 detik.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200/80"
                >
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <p className="text-sm text-slate-700 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <span>Konsultasikan Situs Web Anda</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-sm text-slate-500">
                Estimasi rilis 7–14 hari kerja
              </span>
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
