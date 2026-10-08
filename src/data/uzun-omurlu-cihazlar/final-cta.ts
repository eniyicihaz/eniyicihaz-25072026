// Final CTA content for the /neden-orijinal/uzun-omurlu-cihazlar page —
// the page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) as every prior
// page; trustItems reframed around this page's own subject (maintenance/
// longevity) rather than the usual hearing-test-focused set.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const uzunOmurluCihazlarFinalCta: BrandPageFinalCtaContent = {
  badge: "UZUN ÖMÜRLÜ KULLANIM",
  heading: "Cihazınızın Ömrünü Birlikte Uzatalım",
  description:
    "Ücretsiz periyodik bakım ve teknik servis desteğiyle cihazınızın uzun yıllar kullanılmasına yardımcı oluyoruz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Periyodik Bakım", "Teknik Servis Desteği", "Ücretsiz Garanti İşlemleri", "Ücretsiz Danışmanlık"],
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorGlow: "rgb(5 150 105 / 0.22)",
  accentColorShadow: "rgb(5 150 105 / 0.55)",
  accentColorShadowHover: "rgb(5 150 105 / 0.65)",
  accentColorFocus: "rgb(5 150 105 / 0.5)",
  accentColorTrustBg: "rgb(5 150 105 / 0.16)",
};
