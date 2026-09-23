// Final CTA content for the /neden-orijinal/guvenilir-teknoloji page —
// the page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) as every prior
// page; trustItems reframed around this page's own subject
// (authenticity/warranty) rather than the usual hearing-test-focused set.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const guvenilirTeknolojiFinalCta: BrandPageFinalCtaContent = {
  badge: "GÜVENİLİR ALIŞVERİŞ",
  heading: "Orijinal ve Güvenilir Bir Cihaz İçin Bize Ulaşın",
  description:
    "Yetkili distribütörlük güvencesiyle sunduğumuz orijinal cihazlar hakkında bilgi almak veya elinizdeki cihazın orijinalliğini doğrulatmak için bizimle iletişime geçin.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Yetkili Distribütörlük", "Üretici Garantisi", "Seri Numarası Doğrulama", "Ücretsiz Danışmanlık"],
  accentColor: "#1d4ed8",
  accentColorHover: "#1e40af",
  accentColorGlow: "rgb(29 78 216 / 0.22)",
  accentColorShadow: "rgb(29 78 216 / 0.55)",
  accentColorShadowHover: "rgb(29 78 216 / 0.65)",
  accentColorFocus: "rgb(29 78 216 / 0.5)",
  accentColorTrustBg: "rgb(29 78 216 / 0.16)",
};
