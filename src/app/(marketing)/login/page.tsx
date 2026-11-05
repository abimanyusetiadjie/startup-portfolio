"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  KeyRound,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type AuthMode = "password" | "magic_link";

export default function LoginPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<AuthMode>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const isSupabaseEnvReady = () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    return (
      Boolean(url) &&
      Boolean(key) &&
      !url?.includes("your-project-id") &&
      !key?.startsWith("your-")
    );
  };

  const handleBypassDemoPreview = () => {
    document.cookie =
      "triloe_portal_demo=true; path=/; max-age=86400; SameSite=Lax";
    router.push("/portal?demo=true");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email.trim()) {
      setErrorMessage("Masukkan alamat email institusi atau korporat Anda.");
      return;
    }

    if (!isSupabaseEnvReady()) {
      setErrorMessage(
        "Kredensial Supabase Auth belum dikonfigurasi di environment lokal. Gunakan tombol 'Mode Demo Portal Klien (Bypass Preview)' di bawah untuk langsung meninjau UI Shopify Polaris."
      );
      return;
    }

    setIsLoading(true);
    try {
      const supabase = createClient();

      if (authMode === "password") {
        if (!password) {
          setErrorMessage("Masukkan kata sandi akun portal Anda.");
          setIsLoading(false);
          return;
        }

        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setErrorMessage(error.message);
          setIsLoading(false);
          return;
        }

        router.push("/portal");
        router.refresh();
      } else {
        const callbackUrl = `${window.location.origin}/auth/callback?next=/portal`;
        const { error } = await supabase.auth.signInWithOtp({
          email: email.trim(),
          options: {
            emailRedirectTo: callbackUrl,
          },
        });

        if (error) {
          setErrorMessage(error.message);
          setIsLoading(false);
          return;
        }

        setSuccessMessage(
          `Tautan Magic Link telah dikirim ke ${email.trim()}. Silakan periksa kotak masuk email Anda.`
        );
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat menghubungi layanan autentikasi."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#09090B] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-6">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#2563EB] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Halaman Utama</span>
          </Link>
        </div>

        {/* Auth Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-3xl bg-white p-8 border border-[#E2E8F0] shadow-soft-lg space-y-6"
        >
          {/* Header */}
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>ENTERPRISE CLIENT PORTAL GATE</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09090B]">
              Masuk ke Ruang Kerja Klien
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Pantau progres proyek secara real-time, kelola invoice, dan audit
              antrean worker SIAKAD di dashboard Shopify Polaris.
            </p>
          </div>

          {/* Mode Selector Tabs (Email/Password vs Magic Link) */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0]">
            <button
              type="button"
              onClick={() => {
                setAuthMode("password");
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`py-2 px-3 rounded-full text-xs font-semibold transition-all ${
                authMode === "password"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#09090B]"
              }`}
            >
              Email &amp; Password
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMode("magic_link");
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`py-2 px-3 rounded-full text-xs font-semibold transition-all ${
                authMode === "magic_link"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#09090B]"
              }`}
            >
              Passwordless Magic Link
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label
                htmlFor="auth-email"
                className="block text-xs font-semibold text-[#09090B] mb-1.5"
              >
                Alamat Email Klien / Institusi
              </label>
              <div className="relative">
                <Mail className="h-4 w-4 text-[#64748B] absolute left-3.5 top-3.5" />
                <input
                  id="auth-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@yayasan-alazhar.sch.id"
                  className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] pl-10 pr-4 py-3 text-sm text-[#09090B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
                />
              </div>
            </div>

            {authMode === "password" && (
              <div>
                <label
                  htmlFor="auth-password"
                  className="block text-xs font-semibold text-[#09090B] mb-1.5"
                >
                  Kata Sandi
                </label>
                <div className="relative">
                  <KeyRound className="h-4 w-4 text-[#64748B] absolute left-3.5 top-3.5" />
                  <input
                    id="auth-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] pl-10 pr-4 py-3 text-sm text-[#09090B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
                  />
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="rounded-2xl bg-rose-500/10 border border-rose-500/20 p-3.5 text-xs font-medium text-rose-600 leading-relaxed">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 p-3.5 text-xs font-medium text-[#10B981] flex items-start gap-2 leading-relaxed">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2563EB] text-white font-semibold text-sm shadow-md shadow-[#2563EB]/20 hover:bg-[#1D4ED8] disabled:opacity-60 transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Memverifikasi Sesi Supabase...</span>
                </>
              ) : authMode === "password" ? (
                <>
                  <Lock className="h-4 w-4" />
                  <span>Masuk dengan Email &amp; Password</span>
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  <span>Kirim Magic Link ke Email</span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative py-1">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E2E8F0]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 font-mono text-[11px] text-[#64748B]">
                Atau Eksplorasi Instan
              </span>
            </div>
          </div>

          {/* Mode Demo Portal Klien (Bypass Preview) */}
          <div className="rounded-2xl bg-[#0F172A] text-white p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#10B981]">
                <Sparkles className="h-3.5 w-3.5" />
                PORTFOLIO LIVE PREVIEW
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                Shopify Polaris UI
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Ingin meninjau antarmuka Client Portal berbasis{" "}
              <strong className="text-white">@shopify/polaris</strong> secara
              langsung tanpa akun? Gunakan pintasan demonstrasi di bawah ini:
            </p>

            <button
              type="button"
              onClick={handleBypassDemoPreview}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#10B981] text-[#09090B] font-bold text-xs sm:text-sm hover:opacity-95 transition"
            >
              <span>Mode Demo Portal Klien (Bypass Preview)</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
