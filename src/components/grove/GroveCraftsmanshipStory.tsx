"use client";

interface GroveCraftsmanshipStoryProps {
  isTechMode?: boolean;
}

export function GroveCraftsmanshipStory({ isTechMode = false }: GroveCraftsmanshipStoryProps) {
  return (
    <section id="promise" className="bg-[#F4F1EA] py-16 sm:py-24 font-sans border-b border-[#E7E2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Square Image Container */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#E8E3D7] border border-[#DDD7C9] shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  isTechMode
                    ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop"
                }
                alt={isTechMode ? "Rekayasa Kode & Engineering" : "Potting soil and hand trowel"}
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#18362B]">
                {isTechMode ? "📷 SLOT GAMBAR WORKSHOP" : "PECKHAM GLASSHOUSE"}
              </div>
            </div>
          </div>

          {/* Right Column: Story & 3 Numbered Dividers */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#D15B3A]">
                {isTechMode ? "STANDAR TEKNIS KAMI" : "OUR PROMISE"}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1A201C] mt-2 mb-4">
                {isTechMode ? "Direkayasa Presisi, Bukan Sekadar Template." : "Potted by hand, in Peckham."}
              </h2>
              <p className="text-xs sm:text-sm text-[#6B736C] leading-relaxed max-w-xl">
                {isTechMode
                  ? "Kami bukan sekadar agensi template WordPress biasa. Setiap baris arsitektur dirancang dengan isolasi keamanan data ketat (PostgreSQL RLS), pengujian beban konkurensi tinggi, dan didukung penuh oleh tim insinyur yang sama yang membangun sistem Anda."
                  : "We are not a warehouse. Every plant is grown slow, potted to order, and packed by the same eight people who answer your emails. If you're stuck on potting, we would rather hear about it than not."}
              </p>
            </div>

            {/* 3 Numbered List Items with Dividers */}
            <div className="space-y-4 pt-2">
              {isTechMode ? (
                <>
                  <div className="pt-3 border-t border-[#DDD7C9] flex items-baseline gap-4">
                    <span className="font-mono text-xs font-bold text-[#D15B3A]">01</span>
                    <p className="text-xs sm:text-sm text-[#1A201C] font-medium">
                      Keamanan data zero-trust dengan PostgreSQL Row Level Security (RLS) di setiap tabel.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#DDD7C9] flex items-baseline gap-4">
                    <span className="font-mono text-xs font-bold text-[#D15B3A]">02</span>
                    <p className="text-xs sm:text-sm text-[#1A201C] font-medium">
                      Transparansi penuh melalui Shopify Polaris Client Portal untuk memantau milestone &amp; tagihan.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#DDD7C9] flex items-baseline gap-4">
                    <span className="font-mono text-xs font-bold text-[#D15B3A]">03</span>
                    <p className="text-xs sm:text-sm text-[#1A201C] font-medium">
                      Garansi stabilitas sistem &amp; perbaikan bug prioritas dalam SLA kontrak terikat.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="pt-3 border-t border-[#DDD7C9] flex items-baseline gap-4">
                    <span className="font-mono text-xs font-bold text-[#D15B3A]">01</span>
                    <p className="text-xs sm:text-sm text-[#1A201C] font-medium">
                      Peat-free compost and recyclable plastic, always.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#DDD7C9] flex items-baseline gap-4">
                    <span className="font-mono text-xs font-bold text-[#D15B3A]">02</span>
                    <p className="text-xs sm:text-sm text-[#1A201C] font-medium">
                      A real person on the other end of every care question.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#DDD7C9] flex items-baseline gap-4">
                    <span className="font-mono text-xs font-bold text-[#D15B3A]">03</span>
                    <p className="text-xs sm:text-sm text-[#1A201C] font-medium">
                      Thirty days to let us know if it&apos;s thriving — then we replace it.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
