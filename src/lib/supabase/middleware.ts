import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@/types/database.types";

export const PORTAL_DEMO_COOKIE = "abinest_portal_demo";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const pathname = request.nextUrl.pathname;
  const isPortalRoute =
    pathname === "/portal" || pathname.startsWith("/portal/");
  const isAdminRoute =
    pathname === "/admin" || pathname.startsWith("/admin/");

  // Izinkan bypass preview Mode Demo Portal Klien untuk rute /portal/*
  const hasDemoCookie =
    request.cookies.get(PORTAL_DEMO_COOKIE)?.value === "true";
  const hasDemoParam = request.nextUrl.searchParams.get("demo") === "true";

  if (isPortalRoute && (hasDemoCookie || hasDemoParam)) {
    if (hasDemoParam && !hasDemoCookie) {
      supabaseResponse.cookies.set(PORTAL_DEMO_COOKIE, "true", {
        path: "/",
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });
    }
    return supabaseResponse;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Jika env belum dikonfigurasi (atau masih menggunakan nilai placeholder .env.example),
  // lewati inisialisasi agar aplikasi dan demo portofolio tetap berjalan lancar
  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl.includes("your-project-id") ||
    supabaseAnonKey.startsWith("your-")
  ) {
    return supabaseResponse;
  }

  const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // PENTING: Gunakan auth.getUser() sesuai rules.md untuk memvalidasi token ke server Auth Supabase
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 1. Proteksi Rute /portal/* dan /admin/*: Redirect ke /login jika belum terautentikasi
  if ((isPortalRoute || isAdminRoute) && !user) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Proteksi Rute /admin/*: Hanya izinkan pengguna dengan role === 'admin'
  if (isAdminRoute && user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (!profile || profile.role !== "admin") {
      const unauthorizedUrl = request.nextUrl.clone();
      unauthorizedUrl.pathname = "/portal";
      return NextResponse.redirect(unauthorizedUrl);
    }
  }

  return supabaseResponse;
}
