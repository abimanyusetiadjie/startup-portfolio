export type Language = "id" | "en";

export interface TranslationDictionary {
  nav: {
    announcement: string;
    systems: string;
    caseStudy: string;
    standards: string;
    portal: string;
    clientLogin: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    featureBar: Array<{ title: string; desc: string }>;
  };
  hero3D: {
    badgeTitle: string;
    badgeSub: string;
    interactiveBadge: string;
    nodeMonitor: string;
    activeNode: string;
    activeMetric: string;
    hint: string;
    hintShort: string;
    loading: string;
  };
  systems: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      badge: string;
      name: string;
      metric: string;
      subtitle: string;
      ctaLabel: string;
    }>;
  };
  caseStudy: {
    eyebrow: string;
    title: string;
    desc: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    cta: string;
  };
  standards: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  consultation: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      systemLabel: string;
      options: Array<{ val: string; label: string }>;
      noteLabel: string;
      notePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successDesc: string;
      resetBtn: string;
    };
  };
  footer: {
    studioTagline: string;
    col1Title: string;
    col2Title: string;
    col3Title: string;
    clientPortalLive: string;
    viewInvoices: string;
    webhookWorkers: string;
    copyright: string;
    allSystemsOperational: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  id: {
    nav: {
      announcement: "Jaminan SLA Uptime 99.9% • Arsitektur Next.js 15 Edge • Konsultasi Teknis Arsitektur Bebas Biaya",
      systems: "Sistem & Solusi",
      caseStudy: "Studi Kasus SIAKAD",
      standards: "Standar Rekayasa",
      portal: "Client Portal",
      clientLogin: "Masuk Klien",
      cta: "Mulai Konsultasi →",
    },
    hero: {
      eyebrow: "STUDIO REKAYASA SISTEM ENTERPRISE & OTOMASI B2B",
      headlinePrefix: "Rekayasa sistem yang membuat bisnis tumbuh ",
      headlineHighlight: "terukur.",
      subtitle:
        "Abinest merancang website Next.js berkecepatan tinggi (skor Lighthouse 100), sistem SIAKAD sekolah terpisah anti-down dengan mesin cetak ratusan PDF rapor paralel, serta otomasi WhatsApp & API berketahanan tinggi.",
      ctaPrimary: "Mulai Konsultasi Teknis →",
      ctaSecondary: "Buka Client Portal (/portal) →",
      featureBar: [
        { title: "Lighthouse 95–100", desc: "Core Web Vitals LCP < 1.0s" },
        { title: "Parallel PDF Worker", desc: "500+ Rapor / <45s Batch" },
        { title: "99.9% Uptime SLA", desc: "Decoupled Anti-Crash Database" },
        { title: "WhatsApp Real-Time", desc: "Auto-Retry Backoff < 2s" },
      ],
    },
    hero3D: {
      badgeTitle: "REAL 3D ARCHITECTURE CLUSTER",
      badgeSub: "Next.js 15 Edge • WebGL Procedural",
      interactiveBadge: "INTERAKTIF 360°",
      nodeMonitor: "MONITOR NODE",
      activeNode: "High-Availability Core",
      activeMetric: "SLA 99.98% • Latency < 15ms",
      hint: "Geser mouse / sentuh untuk memutar",
      hintShort: "Drag untuk putar",
      loading: "MEMUAT REAL 3D ENGINE...",
    },
    systems: {
      eyebrow: "PORTFOLIO SISTEM PRODUCTION",
      title: "Sistem yang Kami Bangun untuk Bisnis Anda.",
      subtitle:
        "Setiap solusi dirancang decoupled, scalable, dan memiliki metrik performa yang dapat diaudit langsung.",
      items: [
        {
          id: "siakad-core",
          badge: "EdTech Core",
          name: "SIAKAD Modern v2.4",
          metric: "SLA 99.9%",
          subtitle: "Arsitektur terpisah • SPP & Ujian serentak",
          ctaLabel: "Konsultasi Sistem SIAKAD",
        },
        {
          id: "pdf-worker",
          badge: "Async Worker",
          name: "Parallel PDF Engine",
          metric: "500+ PDF / <45s",
          subtitle: "Upstash QStash • S3 Signed URL",
          ctaLabel: "Konsultasi Mesin Rapor",
        },
        {
          id: "omnichannel-hub",
          badge: "Omnichannel Hub",
          name: "Atomic Stock Hub",
          metric: "< 150ms Sync",
          subtitle: "Sinkronisasi 4 marketplace • 0% oversell",
          ctaLabel: "Konsultasi Omnichannel",
        },
        {
          id: "whatsapp-gateway",
          badge: "WhatsApp API",
          name: "Resilient WA Gateway",
          metric: "< 2s Dispatch",
          subtitle: "Meta Cloud API • Backoff Retry 5x",
          ctaLabel: "Konsultasi Otomasi WA",
        },
      ],
    },
    caseStudy: {
      eyebrow: "STUDI KASUS REKAYASA SIAKAD",
      title: "SIAKAD yang Menolak Tumbang Saat 1.200 Siswa Mengakses Serentak.",
      desc: "Masalah klasik sistem institusi pendidikan: crash saat pembagian rapor dan pendaftaran ujian. Kami memisahkan database inti dari antrean komputasi cetak PDF dengan worker serverless asinkron.",
      stat1Number: "0%",
      stat1Label: "Downtime saat pembagian rapor serentak",
      stat2Number: "< 45s",
      stat2Label: "Selesai cetak 500+ PDF rapor paralel",
      cta: "Tinjau Arsitektur & Pelajari Lebih Lanjut →",
    },
    standards: {
      eyebrow: "STANDAR REKAYASA KAMI",
      title: "Tiga Prinsip yang Tidak Kami Kompromikan.",
      subtitle:
        "Kami tidak menjual kode sekali jadi yang ditinggalkan. Kami merekayasa infrastruktur yang dapat dirawat, diuji, dan bertahan dalam jangka panjang.",
      items: [
        {
          num: "01",
          title: "Decoupled Architecture (Anti-Monolith Rentan)",
          desc: "Proses berat seperti kalkulasi nilai, ekspor PDF, dan blast notifikasi dipisahkan ke antrean worker asinkron berkecepatan tinggi agar server database utama tidak pernah kehabisan koneksi.",
        },
        {
          num: "02",
          title: "Keamanan Level Basis Data (Supabase RLS)",
          desc: "Proteksi data siswa, nilai, dan invoice tidak hanya dijaga di level UI, melainkan ditegakkan langsung di PostgreSQL Row Level Security (RLS) dengan autentikasi berbasis peran (RBAC).",
        },
        {
          num: "03",
          title: "Performa Web Lighthouse 95–100",
          desc: "Mengoptimalkan Core Web Vitals, partial prerendering, zero layout shift (CLS 0), dan pemuatan aset efisien demi pengalaman klien yang instan tanpa loading screen berkepanjangan.",
        },
      ],
    },
    consultation: {
      eyebrow: "KONSULTASI TEKNIS LANGSUNG",
      title: "Diskusikan Sistem yang Ingin Anda Bangun.",
      subtitle:
        "Dapatkan analisis arsitektur awal, estimasi SLA, dan rekomendasi tumpukan teknologi langsung dari tim rekayasa Abinest tanpa biaya komitmen awal.",
      form: {
        nameLabel: "Nama Lengkap / Jabatan",
        namePlaceholder: "contoh: Dr. Hendra Wijaya (Kepala Yayasan / CTO)",
        emailLabel: "Email Perusahaan / Institusi",
        emailPlaceholder: "hendra@institusi.ac.id",
        phoneLabel: "Nomor WhatsApp (Aktif)",
        phonePlaceholder: "081234567890",
        systemLabel: "Kebutuhan Sistem / Solusi",
        options: [
          { val: "siakad", label: "SIAKAD & Parallel PDF Report Engine (Institusi Pendidikan)" },
          { val: "omnichannel", label: "Atomic Stock Hub & Integrasi Omnichannel (Retail/E-commerce)" },
          { val: "whatsapp", label: "Resilient WhatsApp API Automation (B2B Messaging)" },
          { val: "enterprise_web", label: "Arsitektur Web Modern Next.js 100 Lighthouse (Custom Enterprise)" },
        ],
        noteLabel: "Catatan Tambahan / Tantangan Sistem Saat Ini",
        notePlaceholder:
          "Ceritakan kendala sistem Anda (misal: server down saat pembagian rapor, sinkronisasi stok sering selisih, dll.)",
        submitBtn: "Kirim Jadwal Konsultasi Teknis →",
        submittingBtn: "Memproses Pengiriman...",
        successTitle: "Jadwal Konsultasi Berhasil Diterima",
        successDesc:
          "Tim rekayasa Abinest akan menghubungi WhatsApp/Email Anda dalam waktu 1x24 jam kerja dengan proposal arsitektur awal.",
        resetBtn: "Kirim Permintaan Konsultasi Lain",
      },
    },
    footer: {
      studioTagline:
        "Studio rekayasa perangkat lunak enterprise spesialis sistem decoupled anti-down, pemrosesan antrean paralel, dan otomasi bisnis B2B berkinerja tinggi.",
      col1Title: "Sistem & Solusi",
      col2Title: "Infrastruktur",
      col3Title: "Akses Klien",
      clientPortalLive: "Client Portal (Aktif)",
      viewInvoices: "Monitoring Invoice & SLA",
      webhookWorkers: "Worker Antrean Webhook",
      copyright: "Hak cipta dilindungi undang-undang.",
      allSystemsOperational: "Semua Sistem Produksi Operasional",
    },
  },

  en: {
    nav: {
      announcement: "99.9% Uptime SLA Guaranteed • Next.js 15 Edge Architecture • Complimentary Technical Architecture Consultation",
      systems: "Systems & Solutions",
      caseStudy: "SIAKAD Case Study",
      standards: "Engineering Standards",
      portal: "Client Portal",
      clientLogin: "Client Login",
      cta: "Start Consultation →",
    },
    hero: {
      eyebrow: "ENTERPRISE SYSTEM & B2B AUTOMATION ENGINEERING STUDIO",
      headlinePrefix: "Engineering resilient systems that scale businesses ",
      headlineHighlight: "measurably.",
      subtitle:
        "Abinest architects high-performance Next.js web applications (Lighthouse 100), decoupled anti-down institutional SIAKAD with parallel batch PDF report generators, and resilient WhatsApp & API automation.",
      ctaPrimary: "Start Technical Consultation →",
      ctaSecondary: "Open Client Portal (/portal) →",
      featureBar: [
        { title: "Lighthouse 95–100", desc: "Core Web Vitals LCP < 1.0s" },
        { title: "Parallel PDF Worker", desc: "500+ Reports / <45s Batch" },
        { title: "99.9% Uptime SLA", desc: "Decoupled Anti-Crash Database" },
        { title: "WhatsApp Real-Time", desc: "Auto-Retry Backoff < 2s" },
      ],
    },
    hero3D: {
      badgeTitle: "REAL 3D ARCHITECTURE CLUSTER",
      badgeSub: "Next.js 15 Edge • WebGL Procedural",
      interactiveBadge: "INTERACTIVE 360°",
      nodeMonitor: "NODE TELEMETRY",
      activeNode: "High-Availability Core",
      activeMetric: "SLA 99.98% • Latency < 15ms",
      hint: "Drag or move cursor to rotate",
      hintShort: "Drag to rotate",
      loading: "LOADING REAL 3D ENGINE...",
    },
    systems: {
      eyebrow: "PRODUCTION SYSTEM PORTFOLIO",
      title: "Systems We Architect for Your Enterprise.",
      subtitle:
        "Every solution is decoupled, horizontally scalable, and equipped with directly auditable performance metrics.",
      items: [
        {
          id: "siakad-core",
          badge: "EdTech Core",
          name: "SIAKAD Modern v2.4",
          metric: "SLA 99.9%",
          subtitle: "Decoupled Architecture • Simultaneous Tuition & Exams",
          ctaLabel: "Consult SIAKAD System",
        },
        {
          id: "pdf-worker",
          badge: "Async Worker",
          name: "Parallel PDF Engine",
          metric: "500+ PDF / <45s",
          subtitle: "Upstash QStash • S3 Signed URL",
          ctaLabel: "Consult Report Engine",
        },
        {
          id: "omnichannel-hub",
          badge: "Omnichannel Hub",
          name: "Atomic Stock Hub",
          metric: "< 150ms Sync",
          subtitle: "4 Marketplace Sync • 0% Oversell Guarantee",
          ctaLabel: "Consult Omnichannel",
        },
        {
          id: "whatsapp-gateway",
          badge: "WhatsApp API",
          name: "Resilient WA Gateway",
          metric: "< 2s Dispatch",
          subtitle: "Meta Cloud API • 5x Exponential Backoff Retry",
          ctaLabel: "Consult WA Automation",
        },
      ],
    },
    caseStudy: {
      eyebrow: "SIAKAD ENGINEERING CASE STUDY",
      title: "SIAKAD That Refuses to Crash Under 1,200 Simultaneous Users.",
      desc: "The classic bottleneck of institutional software: downtime during report card releases and exam registrations. We decouple the core relational database from CPU-heavy PDF generation using asynchronous serverless workers.",
      stat1Number: "0%",
      stat1Label: "Downtime during simultaneous report distribution",
      stat2Number: "< 45s",
      stat2Label: "Batch processing completed for 500+ student PDFs",
      cta: "Review Architecture & Learn More →",
    },
    standards: {
      eyebrow: "OUR ENGINEERING STANDARDS",
      title: "Three Principles We Never Compromise.",
      subtitle:
        "We do not ship disposable code. We engineer maintainable, tested software infrastructure built to endure and scale over the long haul.",
      items: [
        {
          num: "01",
          title: "Decoupled Architecture (Resilient Anti-Monolith)",
          desc: "Heavy workloads like grade computations, PDF batch rendering, and notification blasts are offloaded to high-throughput asynchronous workers so primary database connection pools never choke.",
        },
        {
          num: "02",
          title: "Database-Level Security (Supabase RLS)",
          desc: "Student records, grades, and financial invoices are protected not just by UI guards, but strictly enforced inside PostgreSQL Row Level Security (RLS) with granular Role-Based Access Control (RBAC).",
        },
        {
          num: "03",
          title: "Lighthouse 95–100 Web Performance",
          desc: "Engineered with optimized Core Web Vitals, partial prerendering, zero layout shift (CLS 0), and lean asset pipelines for instantaneous client experiences without sluggish loaders.",
        },
      ],
    },
    consultation: {
      eyebrow: "DIRECT TECHNICAL CONSULTATION",
      title: "Discuss the Architecture You Want to Build.",
      subtitle:
        "Receive an initial architecture blueprint, SLA estimation, and technology stack recommendations directly from Abinest engineers with zero upfront commitment.",
      form: {
        nameLabel: "Full Name / Role",
        namePlaceholder: "e.g. Alex Graham (Head of Product / CTO)",
        emailLabel: "Corporate / Institutional Email",
        emailPlaceholder: "alex@company.com",
        phoneLabel: "WhatsApp / Direct Phone Number",
        phonePlaceholder: "+1 (555) 019-2834",
        systemLabel: "Required System / Solution",
        options: [
          { val: "siakad", label: "SIAKAD & Parallel PDF Report Engine (EdTech)" },
          { val: "omnichannel", label: "Atomic Stock Hub & Omnichannel Sync (Retail/E-commerce)" },
          { val: "whatsapp", label: "Resilient WhatsApp API Automation (B2B Messaging)" },
          { val: "enterprise_web", label: "Modern High-Speed Next.js Web App (Custom Enterprise)" },
        ],
        noteLabel: "Additional Notes / Current Technical Bottlenecks",
        notePlaceholder:
          "Describe your system bottlenecks (e.g. server crashes during peak grading, inventory sync lags, etc.)",
        submitBtn: "Submit Technical Consultation Request →",
        submittingBtn: "Processing Submission...",
        successTitle: "Consultation Request Confirmed",
        successDesc:
          "The Abinest engineering team will reach out via WhatsApp or Email within 1 business day with an initial architecture proposal.",
        resetBtn: "Submit Another Request",
      },
    },
    footer: {
      studioTagline:
        "Enterprise software engineering studio specializing in decoupled anti-down systems, parallel batch queuing, and high-performance B2B automation.",
      col1Title: "Systems & Solutions",
      col2Title: "Infrastructure",
      col3Title: "Client Access",
      clientPortalLive: "Client Portal (Live)",
      viewInvoices: "Invoice & SLA Monitoring",
      webhookWorkers: "Webhook Queue Workers",
      copyright: "All rights reserved.",
      allSystemsOperational: "All Systems Operational",
    },
  },
};
