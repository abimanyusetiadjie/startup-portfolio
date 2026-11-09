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
      announcement: "Jasa Pembuatan Website, Sistem & Otomasi Bisnis • Jaminan SLA Uptime 99.9% • Konsultasi Gratis",
      systems: "Layanan & Sistem",
      caseStudy: "Studi Kasus Enterprise ERP",
      standards: "Standar Layanan",
      portal: "Client Portal",
      clientLogin: "Masuk Klien",
      cta: "Mulai Konsultasi →",
    },
    hero: {
      eyebrow: "SOFTWARE HOUSE & KONSULTAN TEKNOLOGI",
      headlinePrefix: "Jasa pembuatan website, sistem & otomasi bisnis yang ",
      headlineHighlight: "andal & cepat.",
      subtitle:
        "Abinest adalah software house dan konsultan teknologi terpercaya. Kami melayani pembuatan website modern berkecepatan tinggi, sistem ERP enterprise kustom multi-gudang, serta bot otomasi WhatsApp untuk mengoptimalkan operasional bisnis Anda.",
      ctaPrimary: "Mulai Konsultasi Gratis →",
      ctaSecondary: "Buka Client Portal (/portal) →",
      featureBar: [
        { title: "Website Modern Super Cepat", desc: "Next.js 15 • Skor Lighthouse 95–100" },
        { title: "Custom ERP Anti-Down", desc: "Kapasitas ribuan transaksi serentak" },
        { title: "Mesin Rapor PDF Otomatis", desc: "500+ PDF tercetak dalam <45 detik" },
        { title: "Otomasi WhatsApp API", desc: "Kirim tagihan & pesan instan <2 detik" },
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
      eyebrow: "KATALOG LAYANAN & SISTEM KAMI",
      title: "Solusi Website & Sistem yang Kami Bangun untuk Anda.",
      subtitle:
        "Setiap solusi kami bangun dengan kode bersih, arsitektur modern anti-crash, dan antarmuka yang mudah digunakan oleh siapa saja.",
      items: [
        {
          id: "siakad-core",
          badge: "Sistem Pendidikan",
          name: "Custom Enterprise ERP & Multi-Warehouse",
          metric: "SLA 99.9%",
          subtitle: "Buku nilai digital, modul SPP & ujian serentak tanpa server down",
          ctaLabel: "Konsultasi Sistem ERP",
        },
        {
          id: "pdf-worker",
          badge: "Otomasi Dokumen",
          name: "Mesin Cetak Rapor PDF Otomatis",
          metric: "500+ PDF / <45s",
          subtitle: "Sekali klik, ratusan PDF langsung jadi di cloud",
          ctaLabel: "Konsultasi Otomasi Dokumen",
        },
        {
          id: "omnichannel-hub",
          badge: "Sistem ERP & Toko",
          name: "Manajemen Stok & Omnichannel Hub",
          metric: "< 150ms Sync",
          subtitle: "Sinkronisasi otomatis Shopee, Tokopedia, TikTok Shop & toko fisik",
          ctaLabel: "Konsultasi Sistem ERP",
        },
        {
          id: "whatsapp-gateway",
          badge: "Otomasi WhatsApp",
          name: "WhatsApp Notification Gateway & Bot",
          metric: "< 2s Terkirim",
          subtitle: "Notifikasi SPP, invoice & pesanan otomatis 24/7",
          ctaLabel: "Konsultasi Otomasi WA",
        },
      ],
    },
    caseStudy: {
      eyebrow: "STUDI KASUS PEMBUATAN SISTEM",
      title: "Sistem ERP Multi-Gudang yang Mengotomasi 18.000 SKU.",
      desc: "Masalah umum perusahaan: sistem down saat sinkronisasi stok dan lonjakan transaksi akhir bulan. Kami merancang arsitektur terpadu dengan koneksi pooling PostgreSQL, sehingga operasional gudang dan finance selalu lancar.",
      stat1Number: "0%",
      stat1Label: "Server crash saat pembagian rapor serentak",
      stat2Number: "< 45s",
      stat2Label: "Sinkronisasi 18.000 SKU 4 cabang <35ms",
      cta: "Konsultasikan Kebutuhan Sistem Anda →",
    },
    standards: {
      eyebrow: "MENGAPA MEMILIH KAMI",
      title: "Standar Kualitas Pembuatan Sistem di Abinest.",
      subtitle:
        "Kami bukan sekadar pembuat website biasa. Kami adalah mitra konsultan teknologi yang memastikan sistem Anda cepat, aman, dan mudah dikembangkan untuk jangka panjang.",
      items: [
        {
          num: "01",
          title: "Sistem Cepat & Anti-Lelet (Decoupled Architecture)",
          desc: "Proses berat seperti ekspor ratusan PDF, rekap nilai, dan blast WhatsApp diproses di server latar belakang (background worker) agar aplikasi tidak lemot.",
        },
        {
          num: "02",
          title: "Keamanan Data Terjamin (PostgreSQL Row Level Security)",
          desc: "Data transaksi finansial, inventori gudang, dan rahasia bisnis dilindungi enkripsi ketat. Hanya akun berwenang yang dapat mengakses data terkait.",
        },
        {
          num: "03",
          title: "Website Modern Super Cepat (Lighthouse 95–100)",
          desc: "Dibangun dengan teknologi Next.js terkini yang membuat halaman website terbuka seketika di ponsel maupun laptop tanpa membuat pengunjung menunggu lama.",
        },
      ],
    },
    consultation: {
      eyebrow: "KONSULTASI GRATIS DENGAN KONSULTAN KAMI",
      title: "Ceritakan Kebutuhan Website atau Sistem Anda.",
      subtitle:
        "Diskusikan ide proyek pembuatan website, sistem ERP kustom operasional, atau otomasi bisnis Anda langsung bersama konsultan Abinest tanpa biaya komitmen awal.",
      form: {
        nameLabel: "Nama Lengkap & Jabatan",
        namePlaceholder: "contoh: Bpk. Hendra Kusuma (Direktur / Founder Bisnis)",
        emailLabel: "Email Anda",
        emailPlaceholder: "hendra@perusahaan.com",
        phoneLabel: "Nomor WhatsApp (Aktif)",
        phonePlaceholder: "081234567890",
        systemLabel: "Layanan yang Anda Butuhkan",
        options: [
          { val: "custom_enterprise_erp", label: "Sistem ERP Kustom Multi-Gudang & Finansial" },
          { val: "custom_enterprise_erp", label: "Automasi AI & WhatsApp Agent Resmi Meta" },
          { val: "whatsapp_gateway_bot", label: "Jasa Otomasi WhatsApp & Notifikasi Pelanggan" },
          { val: "custom_web_app", label: "Jasa Pembuatan Website Perusahaan & Landing Page Modern" },
        ],
        noteLabel: "Deskripsi Singkat / Masalah yang Ingin Diselesaikan",
        notePlaceholder:
          "Ceritakan kebutuhan Anda (misal: ingin buat website modern <0.8s, sistem ERP multi-cabang, atau automasi invoice AI, kirim tagihan WhatsApp otomatis, dll.)",
        submitBtn: "Kirim Permintaan Konsultasi Gratis →",
        submittingBtn: "Sedang Mengirimkan Data...",
        successTitle: "Permintaan Konsultasi Berhasil Terkirim!",
        successDesc:
          "Tim konsultan Abinest akan menghubungi WhatsApp atau Email Anda dalam waktu 1x24 jam kerja untuk memberikan solusi dan penawaran terbaik.",
        resetBtn: "Kirim Permintaan Lain",
      },
    },
    footer: {
      studioTagline:
        "Software house & konsultan teknologi yang melayani jasa pembuatan website modern, sistem ERP kustom & automasi AI/ML, dan otomasi bisnis terintegrasi.",
      col1Title: "Layanan Kami",
      col2Title: "Infrastruktur",
      col3Title: "Akses Klien",
      clientPortalLive: "Client Portal (Aktif)",
      viewInvoices: "Monitoring Invoice & SLA",
      webhookWorkers: "Worker Antrean Webhook",
      copyright: "Hak cipta dilindungi undang-undang.",
      allSystemsOperational: "Semua Layanan Beroperasi Normal",
    },
  },

  en: {
    nav: {
      announcement: "Web, System & Automation Engineering Services • 99.9% Uptime SLA • Free Consultation",
      systems: "Services & Systems",
      caseStudy: "Enterprise ERP Case Study",
      standards: "Our Standards",
      portal: "Client Portal",
      clientLogin: "Client Login",
      cta: "Start Consultation →",
    },
    hero: {
      eyebrow: "SOFTWARE HOUSE & IT CONSULTING FIRM",
      headlinePrefix: "Custom web development, systems & business automation built to be ",
      headlineHighlight: "fast & resilient.",
      subtitle:
        "Abinest is a software house and IT consulting partner. We build lightning-fast modern websites, crash-proof enterprise information systems (Custom ERP & AI), and resilient WhatsApp automation to scale your operations.",
      ctaPrimary: "Start Free Consultation →",
      ctaSecondary: "Open Client Portal (/portal) →",
      featureBar: [
        { title: "Superfast Modern Web", desc: "Next.js 15 • Lighthouse score 95–100" },
        { title: "Crash-Proof Custom ERP", desc: "High throughput multi-warehouse architecture" },
        { title: "Automated PDF Report Engine", desc: "500+ student PDFs generated in <45s" },
        { title: "WhatsApp API Automation", desc: "Automated invoices & alerts under 2s" },
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
      eyebrow: "OUR SERVICES & SYSTEMS CATALOG",
      title: "Web & Enterprise Systems We Build For You.",
      subtitle:
        "Every solution is crafted with clean code, decoupled crash-resistant architecture, and intuitive modern interfaces.",
      items: [
        {
          id: "siakad-core",
          badge: "Education System",
          name: "Custom Enterprise ERP System",
          metric: "SLA 99.9%",
          subtitle: "Digital gradebook, tuition billing, and exam portal with zero crash risk",
          ctaLabel: "Consult ERP System",
        },
        {
          id: "pdf-worker",
          badge: "Document Automation",
          name: "Automated Batch PDF Report Engine",
          metric: "500+ PDF / <45s",
          subtitle: "One-click generation of hundreds of report PDFs in the cloud",
          ctaLabel: "Consult Document Automation",
        },
        {
          id: "omnichannel-hub",
          badge: "ERP & E-Commerce",
          name: "Atomic Inventory & Omnichannel Hub",
          metric: "< 150ms Sync",
          subtitle: "Auto-sync stock across Shopee, Tokopedia, TikTok Shop & offline stores",
          ctaLabel: "Consult ERP System",
        },
        {
          id: "whatsapp-gateway",
          badge: "WhatsApp Automation",
          name: "WhatsApp Notification Gateway & Bot",
          metric: "< 2s Dispatch",
          subtitle: "Automated tuition reminders, receipts & order alerts 24/7",
          ctaLabel: "Consult WA Automation",
        },
      ],
    },
    caseStudy: {
      eyebrow: "SYSTEM ENGINEERING CASE STUDY",
      title: "A Custom ERP System Managing 18,000 SKUs Seamlessly.",
      desc: "The common bottleneck for schools and foundations: crashes during report releases and exam sign-ups. We engineered a modern architecture separating PDF generation into asynchronous background workers, keeping the main app fast and fluid.",
      stat1Number: "0%",
      stat1Label: "Server downtime during peak report releases",
      stat2Number: "< 45s",
      stat2Label: "Completed batch rendering for 500+ student PDFs",
      cta: "Consult Your System Architecture →",
    },
    standards: {
      eyebrow: "WHY WORK WITH US",
      title: "Quality Standards in Every System We Build.",
      subtitle:
        "We are not just typical website builders. We are your dedicated IT consulting partner ensuring your systems are fast, rock-solid, and easily maintainable for years to come.",
      items: [
        {
          num: "01",
          title: "Speed & Crash Resistance (Decoupled Architecture)",
          desc: "Heavy background processes like batch PDF exports, grade summaries, and WhatsApp broadcasts are isolated into asynchronous worker queues to prevent database saturation.",
        },
        {
          num: "02",
          title: "Rigorous Data Security (PostgreSQL Row Level Security)",
          desc: "Sensitive student, employee, and financial records are protected with bank-grade security policies so only authorized roles can access designated data.",
        },
        {
          num: "03",
          title: "Blazing Fast Modern Websites (Lighthouse 95–100)",
          desc: "Powered by the latest Next.js 15 framework, loading instantaneously on mobile and desktop without annoying loading spinners.",
        },
      ],
    },
    consultation: {
      eyebrow: "FREE CONSULTATION WITH OUR EXPERTS",
      title: "Tell Us About Your Website or System Needs.",
      subtitle:
        "Discuss your new website, school/company management software, or business automation ideas directly with Abinest consultants with zero upfront commitment.",
      form: {
        nameLabel: "Full Name & Position",
        namePlaceholder: "e.g. Alex Graham (Foundation Head / Business Owner)",
        emailLabel: "Your Email Address",
        emailPlaceholder: "alex@company.com",
        phoneLabel: "Active WhatsApp Number",
        phonePlaceholder: "081234567890",
        systemLabel: "Service You Need",
        options: [
          { val: "custom_enterprise_erp", label: "Custom Enterprise ERP & Supply Chain" },
          { val: "custom_enterprise_erp", label: "Applied AI Automation & Meta WhatsApp Agent" },
          { val: "whatsapp_gateway_bot", label: "WhatsApp Automation & Customer Notification" },
          { val: "custom_web_app", label: "Modern Corporate Website & Landing Page" },
        ],
        noteLabel: "Brief Summary / Goals You Want to Achieve",
        notePlaceholder:
          "Tell us what you want to build (e.g., custom school website, attendance system, automated WhatsApp billing, etc.)",
        submitBtn: "Submit Free Consultation Request →",
        submittingBtn: "Submitting...",
        successTitle: "Consultation Request Received!",
        successDesc:
          "The Abinest consulting team will reach out via WhatsApp or Email within 1 business day with tailored recommendations and a proposal.",
        resetBtn: "Submit Another Request",
      },
    },
    footer: {
      studioTagline:
        "Software house & IT consulting partner providing custom web development, management information systems (SIAKAD/ERP), and integrated business automation.",
      col1Title: "Our Services",
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
