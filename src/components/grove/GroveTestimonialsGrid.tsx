"use client";

import { Star } from "lucide-react";

export function GroveTestimonialsGrid() {
  const row1 = [
    {
      name: "Alex Rivera",
      role: "VP of Engineering, Horizon Scale",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote:
        "TechRoos completely transformed our deployment infrastructure. We went from weekly downtime incidents during traffic peaks to 99.99% rock-solid stability.",
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer, FinApex",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote:
        "Their automated database isolation and Row-Level Security policies passed our institutional audit with zero remarks. True enterprise engineering partner.",
    },
    {
      name: "Michael Ross",
      role: "Director of IT, MedCore Health",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote:
        "Under 15-minute response times from engineers who actually understand our codebase. No outsourced runaround, just pure technical execution.",
    },
  ];

  const row2 = [
    {
      name: "Emily Parker",
      role: "Head of Operations, EduSphere Network",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      quote:
        "During our nationwide concurrent exams with 1,200+ students, the system stayed cool and responsive. Their background PDF queues saved us 40 hours a week.",
    },
    {
      name: "David Kim",
      role: "Co-Founder & CEO, Nexus Logistics",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      quote:
        "The official Meta WhatsApp Cloud API automation pipeline they architected reduced our manual billing reconciliation by 50% with zero duplicate messages.",
    },
    {
      name: "Marcus Vance",
      role: "VP of Product, CloudForge",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      quote:
        "Full intellectual property handover and 100% source code ownership. TechRoos builds systems designed to outlast ordinary vendor dependencies.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Why TechRoos Clients
            <br />
            Stick With Us
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Dipercaya oleh para pemimpin teknologi, direktur operasional, dan founder institusi digital.
          </p>
        </div>
      </div>

      {/* 2-Row Wall of Love with Subtle Offset for Infinite Feel */}
      <div className="max-w-[1340px] mx-auto px-4 space-y-4">
        {/* Row 1: 3 Full Cards with Offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {row1.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-zinc-400">{item.role}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* 5 Orange Stars */}
              <div className="flex items-center gap-1 mt-6 pt-2 border-t border-white/[0.04]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 3 Full Cards with Horizontal Desktop Shift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:translate-x-6">
          {row2.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-zinc-400">{item.role}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* 5 Orange Stars */}
              <div className="flex items-center gap-1 mt-6 pt-2 border-t border-white/[0.04]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
