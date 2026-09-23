// Final CTA content for the /servis-bakim/periyodik-bakim page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const periyodikBakimFinalCta: BrandPageFinalCtaContent = {
  badge: "SORUN OLUŞMADAN ÖNCE",
  heading: "Cihazınızın Bakımını Şimdi Planlayalım",
  description:
    "Balmumu filtresi ve tüp yenilemeden genel aşınma kontrolüne kadar, cihazınızı en iyi durumda tutmanıza yardımcı oluyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Periyodik Bakım", "Filtre ve Tüp Yenileme", "Genel Aşınma Kontrolü", "Hızlı Randevu"],
  accentColor: "#65a30d",
  accentColorHover: "#4d7c0f",
  accentColorGlow: "rgb(101 163 13 / 0.22)",
  accentColorShadow: "rgb(101 163 13 / 0.55)",
  accentColorShadowHover: "rgb(101 163 13 / 0.65)",
  accentColorFocus: "rgb(101 163 13 / 0.5)",
  accentColorTrustBg: "rgb(101 163 13 / 0.16)",
};
