// Final CTA content for the /servis-bakim/onarim-takibi page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const onarimTakibiFinalCta: BrandPageFinalCtaContent = {
  badge: "SÜRECİNİZİ MERAK MI EDİYORSUNUZ?",
  heading: "Cihazınızın Güncel Durumunu Öğrenelim",
  description:
    "Servisteki cihazınızın hangi aşamada olduğunu öğrenmek için bizi arayabilir veya WhatsApp'tan yazabilirsiniz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Dijital Servis Kaydı", "SMS / WhatsApp ile Manuel Bilgilendirme", "Telefon ve WhatsApp'tan Bilgi Alma", "Tahmini Süre İlk Değerlendirmeden Sonra"],
  accentColor: "#c026d3",
  accentColorHover: "#a21caf",
  accentColorGlow: "rgb(192 38 211 / 0.22)",
  accentColorShadow: "rgb(192 38 211 / 0.55)",
  accentColorShadowHover: "rgb(192 38 211 / 0.65)",
  accentColorFocus: "rgb(192 38 211 / 0.5)",
  accentColorTrustBg: "rgb(192 38 211 / 0.16)",
};
