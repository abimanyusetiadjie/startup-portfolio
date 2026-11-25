import Link from "next/link";
import { ArrowRight, Calculator, Home, MonitorPlay } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";

const quickLinks = [
  {
    icon: Home,
    title: "Beranda Abinest.",
    description:
      "Lihat karya terpilih, ringkasan layanan, cara kerja, dan pertanyaan umum kami.",
    href: "/",
    cta: "Kembali ke beranda",
  },
  {
    icon: MonitorPlay,
    title: "Demo interaktif.",
    description:
      "Coba simulasi langsung ERP Multi-Gudang, SIAKAD Sekolah, Kasir POS, dan Asisten AI.",
    href: "/demo",
    cta: "Buka demo",
  },
  {
    icon: Calculator,
    title: "Audit & estimasi.",
    description:
      "Hitung proyeksi penghematan biaya lisensi software dan rekomendasi sistem gratis.",
    href: "/audit-gratis",
    cta: "Mulai estimasi",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans selection:bg-[#FFD124] selection:text-[#171717]">
      <SignificaNavbar />

      <main className="flex-1 flex items-center pt-[124px] pb-24">
        <div className="sig-container w-full">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6F6F71]">
              404 · Halaman tidak ditemukan
            </p>

            <h1 className="text-[36px] sm:text-[48px] font-medium tracking-[-0.03em] leading-[1.08] text-[#171717]">
              Halaman berpindah.
              <br />
              <span className="text-[#6F6F71]">Mari kembali ke jalur yang tepat.</span>
            </h1>

            <p className="text-[16px] text-[#6F6F71] max-w-xl leading-relaxed">
              Tautan yang Anda buka mungkin sudah diperbarui. Pilih salah satu pintu masuk di bawah ini untuk melanjutkan.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#E8E8E8] md:divide-x divide-y md:divide-y-0 divide-[#E8E8E8]">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group py-8 md:px-7 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-6 hover:bg-[#EDEDED]/60 transition-colors"
                >
                  <div className="space-y-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px] bg-white border border-[#E8E8E8] text-[#171717] group-hover:border-[#FFD124] transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h2 className="text-[20px] font-medium tracking-[-0.02em] text-[#171717]">
                      {item.title}
                    </h2>
                    <p className="text-[14.5px] text-[#6F6F71] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="sig-link w-fit inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#171717]">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <SignificaFooter />
    </div>
  );
}
