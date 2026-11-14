export interface WhatsAppClickPayload {
  source: string;
  label?: string;
  service?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function getGaMeasurementId(): string | null {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim();
  if (!id || id === "G-XXXXXXXXXX" || id.startsWith("your-")) {
    return null;
  }
  return id;
}

/**
 * Mengirim event konversi standar ke GA4 / Google Tag Manager dan
 * memancarkan CustomEvent agar tombol WhatsApp mudah diukur efektivitasnya.
 */
export function trackWhatsAppClick({
  source,
  label,
  service,
}: WhatsAppClickPayload): void {
  if (typeof window === "undefined") return;

  const eventParams = {
    event_category: "lead_conversion",
    wa_source: source,
    ...(label ? { wa_label: label } : {}),
    ...(service ? { wa_service: service } : {}),
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", eventParams);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "whatsapp_click", ...eventParams });
  }

  window.dispatchEvent(
    new CustomEvent("abinest:whatsapp_click", { detail: eventParams })
  );
}
