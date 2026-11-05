import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const nextPath = searchParams.get("next") ?? "/portal";

  const safeNext = nextPath.startsWith("/") ? nextPath : "/portal";

  if (code) {
    try {
      const supabase = await createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (!error) {
        return NextResponse.redirect(`${origin}${safeNext}`);
      }
    } catch {
      // Jika pertukaran sesi gagal, arahkan kembali ke halaman login dengan pesan error
    }
  }

  return NextResponse.redirect(
    `${origin}/login?error=auth_callback_exchange_failed`
  );
}
