import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { GroveNavbar } from "@/components/grove/GroveNavbar";
import { GroveFooterSection } from "@/components/grove/GroveFooterSection";
import { GroveFloatingWhatsApp } from "@/components/grove/GroveFloatingWhatsApp";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi resmi Abinest Digital Systems mengenai penanganan informasi konsultasi, formulir WhatsApp, dan kerahasiaan data proyek klien.",
  alternates: {
    canonical: "/kebijakan-privasi",
  },
};

const SECTIONS = [
  {
    title: "1. Data yang Anda Kirimkan Melalui Formulir & Kalkulator",
    body: [
      "Situs web ini dirancang sebagai profil perusahaan dan kanal konsultasi langsung. Saat Anda mengisi formulir konsultasi atau kalkulator estimasi biaya, data seperti nama, nama usaha/institusi, nomor WhatsApp, dan ringkasan kebutuhan diproses langsung di peramban (browser) Anda untuk membentuk draf pesan WhatsApp resmi.",
      "Kami tidak menyimpan data pribadi pengunjung pada basis data akun publik di situs ini tanpa persetujuan terpisah saat kerja sama proyek berjalan.",
    ],
  },
  {
    title: "2. Penggunaan Komunikasi & Kerahasiaan Proyek (NDA)",
    body: [
      "Seluruh informasi bisnis, alur operasional, rancangan sistem, dokumen contoh faktur, maupun daftar kebutuhan yang Anda kirimkan melalui WhatsApp (+62 813-9858-9745) atau surat elektronik (halo@abinest.id) diperlakukan secara rahasia dan hanya digunakan untuk penyusunan estimasi teknis, proposal, serta pelaksanaan proyek.",
      "Untuk kebutuhan perusahaan, yayasan pendidikan, atau institusi pemerintahan, Abinest Digital Systems siap menandatangani Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) sebelum pertukaran data internal dilakukan.",
    ],
  },
  {
    title: "3. Analitik Kunjungan & Kuki (Cookies)",
    body: [
      "Jika analitik agregat (seperti Google Analytics 4 dengan anonimisasi IP) diaktifkan pada domain produksi, data statistik tersebut hanya mencatat halaman yang dilihat dan interaksi tombol WhatsApp secara agregat guna meningkatkan kejelasan informasi situs — tanpa menjual atau membagikan data kepada pihak ketiga untuk periklanan.",
    ],
  },
  {
    title: "4. Hak Anda & Kontak Resmi",
    body: [
      "Anda berhak meminta penghapusan riwayat percakapan penawaran, dokumen proposal, atau aset uji coba yang pernah dikirimkan selama tahap diskusi kapan saja dengan menghubungi kami di halo@abinest.id atau WhatsApp +62 813-9858-9745.",
    ],
  },
];

export default function KebijakanPrivasiPage() {
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dokumen Legal · Abinest Digital Systems</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Kebijakan Privasi
            </h1>
            <p className="text-sm text-slate-500">
              Berlaku untuk seluruh layanan konsultasi dan situs web Abinest Digital Systems · Jakarta &amp; Surabaya.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/80 divide-y divide-slate-100 shadow-xs">
            {SECTIONS.map((sec) => (
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
