import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";

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
              Dokumen legal · Abinest Digital Systems
            </p>

            <h1 className="text-[36px] sm:text-[46px] font-medium tracking-[-0.03em] leading-[1.08] text-[#171717]">
              Kebijakan privasi.
            </h1>
            <p className="text-[15.5px] text-[#6F6F71] leading-relaxed">
              Berlaku untuk seluruh layanan konsultasi dan situs web Abinest Digital Systems · Jakarta &amp; Surabaya.
            </p>
          </div>

          <div className="rounded-[20px] bg-white border border-[#E8E8E8] divide-y divide-[#E8E8E8]">
            {SECTIONS.map((sec) => (
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
