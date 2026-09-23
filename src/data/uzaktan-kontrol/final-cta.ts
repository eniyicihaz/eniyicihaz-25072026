// Final CTA content for the /teknolojiler/uzaktan-kontrol page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const uzaktanKontrolFinalCta: BrandPageFinalCtaContent = {
  badge: "UZMAN DESTEĞİ",
  heading: "Size Uygun Uzaktan Kontrol Özelliğini Birlikte Belirleyelim",
  description:
    "Teknoloji kullanım alışkanlığınıza, cihaz tipi tercihinize ve işitme kaybınızın derecesine uygun modeli ücretsiz işitme testi sonrasında birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz İşitme Testi", "Demo Cihaz Deneme", "SGK Anlaşmalı Merkez", "Uzman Odyometrist Desteği"],
  accentColor: "#0284c7",
  accentColorHover: "#0369a1",
  accentColorGlow: "rgb(2 132 199 / 0.22)",
  accentColorShadow: "rgb(2 132 199 / 0.55)",
  accentColorShadowHover: "rgb(2 132 199 / 0.65)",
  accentColorFocus: "rgb(2 132 199 / 0.5)",
  accentColorTrustBg: "rgb(2 132 199 / 0.16)",
};
