import Link from "next/link";
import { ArrowRight, Home, Layers, MonitorPlay } from "lucide-react";
import { SignificaNavbar } from "@/components/significa/SignificaNavbar";
import { SignificaFooter } from "@/components/significa/SignificaFooter";

const quickLinks = [
  {
    icon: Home,
    title: "Beranda Abinest",
    description:
      "Lihat karya terpilih, ringkasan layanan, cara kerja, dan pertanyaan umum kami.",
    href: "/",
    cta: "Kembali ke beranda",
  },
  {
    icon: Layers,
    title: "Harga & Skema",
    description:
      "Lihat rincian harga transparan website, ERP/POS/SIAKAD, dan automasi WhatsApp resmi.",
    href: "/harga",
    cta: "Lihat daftar harga",
  },
  {
    icon: MonitorPlay,
    title: "Demo Interaktif",
    description:
      "Coba simulasi langsung ERP Multi-Gudang, SIAKAD & CBT, serta Asisten WhatsApp AI.",
    href: "/demo",
    cta: "Buka demo",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      <SignificaNavbar />

      <main className="flex-1 flex items-center pt-[124px] pb-24">
        <div className="clay-container w-full">
          <div className="max-w-3xl space-y-5">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
              404 · Halaman tidak ditemukan
            </p>

            <h1 className="text-[36px] sm:text-[48px] font-semibold tracking-[-0.03em] leading-[1.08] text-[#111111]">
              Halaman berpindah.
              <br />
              <span className="text-[#6B7280]">
                Mari kembali ke jalur yang tepat.
              </span>
            </h1>

            <p className="text-[16px] text-[#4B5563] max-w-xl leading-relaxed">
              Tautan yang Anda buka mungkin sudah diperbarui. Pilih salah satu
              pintu masuk di bawah ini untuk melanjutkan.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#E5E7EB] md:divide-x divide-y md:divide-y-0 divide-[#E5E7EB]">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group py-8 md:px-7 first:md:pl-0 last:md:pr-0 flex flex-col justify-between gap-6 hover:bg-[#FAF9FB] transition-colors"
                >
                  <div className="space-y-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#F5F5F7] border border-[#E5E7EB] text-[#111111] group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#111111]">
                      {item.title}
                    </h2>
                    <p className="text-[14.5px] text-[#4B5563] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="w-fit inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#111111]">
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
