"use client";

export function GrovePartnerPill() {
  const partners = [
    {
      name: "Microsoft Certified",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z" />
        </svg>
      ),
      label: "Microsoft",
    },
    {
      name: "Apple",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3" />
        </svg>
      ),
      label: "Apple Ecosystem",
    },
    {
      name: "AWS",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M6.55 13.9c-1.57 0-2.82-.41-3.76-1.22-.94-.81-1.41-1.92-1.41-3.33 0-1.48.51-2.65 1.53-3.51C3.93 4.98 5.3 4.55 7.02 4.55c.81 0 1.54.1 2.19.3.65.2 1.22.48 1.71.84v-.96c0-.98-.27-1.72-.81-2.22-.54-.5-1.34-.75-2.4-.75-.81 0-1.61.16-2.4.48-.79.32-1.51.78-2.16 1.38L1.6 1.74C2.5.94 3.55.38 4.75.12 5.95-.14 7.2-.09 8.5.17c1.78.36 3.09 1.12 3.93 2.28.84 1.16 1.26 2.74 1.26 4.74v7.7h-3.05v-1.62c-.54.6-1.19 1.07-1.95 1.41-.76.34-1.64.51-2.64.51zm.93-2.61c.84 0 1.56-.25 2.16-.75.6-.5 1.02-1.16 1.26-1.98V6.99c-.39-.24-.86-.44-1.41-.6-.55-.16-1.11-.24-1.68-.24-1.11 0-1.97.27-2.58.81-.61.54-.92 1.26-.92 2.16 0 .84.28 1.48.84 1.92.56.44 1.34.66 2.33.66z" />
          <path d="M19.8 14.88c-4.95 2.37-10.45 2.47-15.65.3-.2-.08-.43.08-.34.28 2.05 3.32 6.64 5.3 11.02 4.67 2.5-.36 4.88-1.5 6.84-3.25.32-.29.07-.76-.32-.61l-1.55-1.39z" />
        </svg>
      ),
      label: "AWS Cloud",
    },
    {
      name: "Google Cloud",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
      label: "Google Cloud",
    },
    {
      name: "Meta Cloud API",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
        </svg>
      ),
      label: "Meta Official Partner",
    },
  ];

  return (
    <section className="py-6 relative bg-[#FAF9F6]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* Label */}
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-3.5">
          EKOSISTEM &amp; PARTNER OTORITAS RESMI
        </span>

        {/* Centered Light Pill Container */}
        <div className="relative">
          {/* Subtle warm orange shadow behind pill */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-full bg-gradient-to-r from-orange-400/15 via-amber-300/15 to-orange-400/15 blur-lg"
          />

          <div className="relative z-10 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 sm:px-12 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-md">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group cursor-default"
                title={p.name}
              >
                <div className="text-slate-700 group-hover:text-orange-600 transition-colors">
                  {p.icon}
                </div>
                <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-slate-700 group-hover:text-slate-900 transition-colors">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
