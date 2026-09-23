// Final CTA content for the /rehberler/isitme-kaybi-nedir page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const isitmeKaybiNedirFinalCta: BrandPageFinalCtaContent = {
  badge: "İŞİTME SAĞLIĞINIZ İÇİN İLK ADIM",
  heading: "İşitme Durumunuzu Ücretsiz Değerlendirelim",
  description:
    "Merak ettiğiniz belirtileri sizinle birlikte değerlendiriyor, ücretsiz işitme testiyle net bir tablo ortaya koyuyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Uzman Odyometrist", "Baskısız Süreç", "Kişiye Özel Yönlendirme"],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
