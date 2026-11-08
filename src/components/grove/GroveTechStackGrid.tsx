"use client";

import {
  MessageSquare,
  GitBranch,
  Database,
  Cloud,
  Terminal,
  Layers,
  FileCode,
  Workflow,
  Cpu,
  Share2,
  HardDrive,
} from "lucide-react";

export function GroveTechStackGrid() {
  const tools = [
    {
      name: "Slack",
      category: "Messaging",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      ),
      color: "text-[#E01E5A]",
      glow: "hover:border-[#E01E5A]/40",
    },
    {
      name: "WhatsApp",
      category: "API Automation",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.55c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.11-.22-.17-.47-.29z" />
        </svg>
      ),
      color: "text-[#25D366]",
      glow: "hover:border-[#25D366]/40",
    },
    {
      name: "Google Drive",
      category: "Cloud Storage",
      icon: <HardDrive className="w-5 h-5" />,
      color: "text-[#F4B400]",
      glow: "hover:border-[#F4B400]/40",
    },
    {
      name: "Jira",
      category: "Issue Tracker",
      icon: <Workflow className="w-5 h-5" />,
      color: "text-[#0052CC]",
      glow: "hover:border-[#0052CC]/40",
    },
    {
      name: "Notion",
      category: "Knowledge Base",
      icon: <Layers className="w-5 h-5" />,
      color: "text-white",
      glow: "hover:border-white/40",
    },
    {
      name: "GitHub",
      category: "VCS & CI/CD",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      color: "text-zinc-200",
      glow: "hover:border-zinc-300/40",
    },
    {
      name: "Docker",
      category: "Containerization",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 0 0 .186-.186V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.186V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.187.187 0 0 0 .185-.186V9.006a.186.186 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.186V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185M23.76 9.89c-.615-.472-1.587-.537-2.395-.18a4.34 4.34 0 0 0-.742-.782l-.4-.28-.313.38a3.15 3.15 0 0 0-.543 1.18c-.77-.12-1.928-.02-2.85.55-.42.26-.78.61-1.07 1.02H1.147a1.147 1.147 0 0 0-1.147 1.147c0 3.197 1.488 5.485 3.75 6.673 2.158 1.133 5.097 1.34 8.423.633 4.298-.915 7.15-3.565 7.747-7.228.87-.042 2.37-.282 3.18-1.52.32-.49.56-1.16.66-1.597z" />
        </svg>
      ),
      color: "text-[#2496ED]",
      glow: "hover:border-[#2496ED]/40",
    },
    {
      name: "Cloudflare",
      category: "Edge & WAF",
      icon: <Cloud className="w-5 h-5" />,
      color: "text-[#F38020]",
      glow: "hover:border-[#F38020]/40",
    },
    {
      name: "VS Code",
      category: "IDE & Tooling",
      icon: <FileCode className="w-5 h-5" />,
      color: "text-[#007ACC]",
      glow: "hover:border-[#007ACC]/40",
    },
    {
      name: "Figma",
      category: "Design System",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm-8 4a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8a4 4 0 0 0-4 4zm0-8a4 4 0 0 0 4 4h4V4H8a4 4 0 0 0-4 4zm8-4h4a4 4 0 1 1-4 4V4zm-8 8a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z" />
        </svg>
      ),
      color: "text-[#F24E1E]",
      glow: "hover:border-[#F24E1E]/40",
    },
    {
      name: "AWS Lambda",
      category: "Serverless",
      icon: <Cpu className="w-5 h-5" />,
      color: "text-[#FF9900]",
      glow: "hover:border-[#FF9900]/40",
    },
    {
      name: "PostgreSQL",
      category: "Database RLS",
      icon: <Database className="w-5 h-5" />,
      color: "text-[#4169E1]",
      glow: "hover:border-[#4169E1]/40",
    },
  ];

  // Split into 2 rows of 6 for the wavy staggered layout
  const row1 = tools.slice(0, 6);
  const row2 = tools.slice(6, 12);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Subtle Radial Amber Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            INTEGRATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Connected to the Tools
            <br />
            That Power Your Stack
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Integrasi langsung ke ekosistem tooling dan platform terbaik di industri untuk menjamin alur data yang mulus.
          </p>
        </div>

        {/* 2 Staggered / Wavy Rows of 6 Dark Floating Square Icon Tiles */}
        <div className="space-y-4 max-w-[960px] mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
            {row1.map((tool, idx) => (
              <div
                key={idx}
                className={`group relative bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 hover:-translate-y-1 ${tool.glow}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform`}
                >
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white tracking-tight">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] text-zinc-500">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (Wavy offset / stagger on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 md:translate-x-4">
            {row2.map((tool, idx) => (
              <div
                key={idx}
                className={`group relative bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 hover:-translate-y-1 ${tool.glow}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform`}
                >
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white tracking-tight">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] text-zinc-500">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action: Centered Button "Explore All" */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#121318] border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-all"
          >
            Explore All
          </a>
        </div>
      </div>
    </section>
  );
}
