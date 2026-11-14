export const ABINEST_WHATSAPP_NUMBER = "6281398589745";

/**
 * Strips non-digit separators and validates an Indonesian WhatsApp number
 * formatted for clear display inside outgoing WhatsApp consultation drafts.
 */
export function normalizeIndonesianPhoneForWa(raw: string): {
  formatted: string;
  isValid: boolean;
} {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { formatted: "-", isValid: false };
  }

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) {
    return { formatted: trimmed, isValid: false };
  }

  if (digits.startsWith("628")) {
    return { formatted: `+${digits}`, isValid: true };
  }
  if (digits.startsWith("08")) {
    return { formatted: `+62${digits.slice(1)}`, isValid: true };
  }
  if (digits.startsWith("8")) {
    return { formatted: `+62${digits}`, isValid: true };
  }

  return { formatted: trimmed, isValid: false };
}

export function buildConsultationWaUrl(message: string): string {
  return `https://wa.me/${ABINEST_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Resolves the currently visible desktop or mobile section node matching
 * either `[data-section="<id>"]` or `#<id>`.
 */
export function findVisibleSection(rawId: string): HTMLElement | null {
  if (typeof document === "undefined") return null;
  const cleanId = rawId.replace(/^\/?#/, "");
  if (!cleanId) return null;

  const candidates = Array.from(
    document.querySelectorAll(`[data-section="${cleanId}"], #${cleanId}`)
  ) as HTMLElement[];
  const visible = candidates.find((el) => el.offsetParent !== null);
  return visible ?? document.getElementById(cleanId);
}
