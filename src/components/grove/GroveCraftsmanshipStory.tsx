"use client";

export function GroveCraftsmanshipStory() {
  return (
    <section id="engineering" className="bg-[#F4F1EA] py-16 sm:py-24 font-sans border-b border-[#E7E2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Engineering Workspace Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#E8E3D7] border border-[#DDD7C9] shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                alt="Abinest Software House & Konsultan IT"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute bottom-3 left-3 bg-[#18362B]/90 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] font-mono text-emerald-200 border border-white/10">
                ABINEST STUDIO • JAKARTA
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Manifesto & 3 Numbered Dividers */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#D15B3A]">
                MENGAPA MEMILIH ABINEST
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1A201C] mt-2 mb-4">
                Sistem kustom yang dibuat khusus untuk kebutuhan Anda, bukan sekadar template instan.
              </h2>
              <p className="text-xs sm:text-sm text-[#6B736C] leading-relaxed max-w-xl">
                Banyak jasa pembuatan website di luar sana yang hanya menginstal template murahan yang rawan lambat dan mudah diretas. Di Abinest, kami adalah software house dan konsultan teknologi yang membangun sistem dari fondasi kode yang kokoh, cepat, dan terjamin keamanannya.
              </p>
            </div>

            {/* 3 Numbered List Items with Thin Dividers */}
            <div className="space-y-4 pt-2">
              <div className="pt-3.5 border-t border-[#DDD7C9] flex items-baseline gap-4">
                <span className="font-mono text-sm font-bold text-[#D15B3A]">01</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1A201C]">
                    Website &amp; Sistem Dirancang Sesuai Alur Kerja Nyata Anda
                  </h4>
                  <p className="text-xs text-[#6B736C] mt-0.5">
                    Tidak ada fitur mubazir yang membingungkan. Setiap tombol dan modul disesuaikan dengan kebutuhan harian sekolah atau bisnis Anda.
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#DDD7C9] flex items-baseline gap-4">
                <span className="font-mono text-sm font-bold text-[#D15B3A]">02</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1A201C]">
                    Keamanan Data Terproteksi &amp; Standar Industri
                  </h4>
                  <p className="text-xs text-[#6B736C] mt-0.5">
                    Data yayasan, nilai siswa, dan catatan keuangan diamankan dengan Row Level Security (RLS) PostgreSQL dan backup cloud otomatis.
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#DDD7C9] flex items-baseline gap-4">
                <span className="font-mono text-sm font-bold text-[#D15B3A]">03</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1A201C]">
                    Transparansi Penuh &amp; Garansi Pemeliharaan
                  </h4>
                  <p className="text-xs text-[#6B736C] mt-0.5">
                    Pantau progres pengerjaan di Client Portal kami, lengkap dengan garansi perbaikan bug dan jaminan SLA uptime 99.9%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
