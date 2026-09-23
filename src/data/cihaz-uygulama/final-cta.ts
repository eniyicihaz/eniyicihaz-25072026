// Final CTA content for the /uygulama-ayar/cihaz-uygulama page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const cihazUygulamaFinalCta: BrandPageFinalCtaContent = {
  badge: "DOĞRU BAŞLANGIÇ İÇİN YANINIZDAYIZ",
  heading: "Cihazınızla Doğru Bir Başlangıç Yapın",
  description:
    "Odyograma dayalı programlama, doğrulama ölçümü ve kapsamlı kullanım eğitimiyle, cihazınızdan en iyi verimi almanızı sağlıyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Uygulama Randevusu", "Odyograma Dayalı Programlama", "Doğrulama Ölçümü", "Kapsamlı Kullanım Eğitimi"],
  accentColor: "#2563eb",
  accentColorHover: "#1d4ed8",
  accentColorGlow: "rgb(37 99 235 / 0.22)",
  accentColorShadow: "rgb(37 99 235 / 0.55)",
  accentColorShadowHover: "rgb(37 99 235 / 0.65)",
  accentColorFocus: "rgb(37 99 235 / 0.5)",
  accentColorTrustBg: "rgb(37 99 235 / 0.16)",
};
