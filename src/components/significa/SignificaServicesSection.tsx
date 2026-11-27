"use client";

import Link from "next/link";

const CAPABILITIES = [
  {
    title: "Website & Portal Bisnis",
    desc: "Situs perusahaan cepat (<0,8 detik), katalog produk, dan Local SEO dengan 100% hak milik kode sumber.",
    price: "Mulai Rp1,5 juta · 7–14 hari",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    title: "ERP, WMS, POS & SIAKAD",
    desc: "Sistem gudang offline/cloud, kasir barcode, manajemen properti, HRIS, dan akademik sekolah tanpa biaya per pengguna.",
    price: "Mulai Rp4 juta · Rp0/staf",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    title: "Automasi AI & WhatsApp",
    desc: "Asisten AI katalog 24/7 lewat WhatsApp API resmi Meta, estimasi harga Machine Learning, dan baca faktur otomatis.",
    price: "Mulai Rp5 juta · API Resmi",
    href: "/jasa-automasi-whatsapp",
  },
];

export function SignificaServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-8 bg-white">
      <div className="ed-container">
        <div className="border-t border-[#E6E6E6] py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-[15px] font-semibold text-[#111111]">
              Layanan
            </h2>
            <p className="font-serif text-[15px] leading-relaxed text-[#737373] max-w-[220px]">
              Skema Beli Putus atau Terima Beres, langsung bersama engineer.
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-serif text-[18.5px] sm:text-[19.5px] leading-[1.58] text-[#4A4A4A] max-w-[640px] pb-8">
              Setiap sistem kami rancang dari kebutuhan operasional nyata —
              mulai dari prototipe kerja di minggu pertama hingga serah terima
              penuh kode sumber dan garansi bug-fix 90 hari.
            </p>

            <div className="divide-y divide-[#E6E6E6] border-t border-b border-[#E6E6E6]">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-8 space-y-1.5">
                    <h3 className="text-[18px] font-semibold tracking-[-0.015em] text-[#111111]">
                      {cap.title}
                    </h3>
                    <p className="font-serif text-[15.5px] leading-[1.55] text-[#4A4A4A]">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="sm:col-span-4 sm:text-right space-y-1.5">
                    <div className="text-[13.5px] text-[#595959]">
                      {cap.price}
                    </div>
                    <Link
                      href={cap.href}
                      className="ed-link font-serif text-[15.5px] inline-block"
                    >
                      Pelajari layanan
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
