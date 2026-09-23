// Final CTA content for the /servis-bakim/pil-aksesuar page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const pilAksesuarFinalCta: BrandPageFinalCtaContent = {
  badge: "SİZE UYGUN SEÇENEĞİ BULALIM",
  heading: "Pil ve Aksesuar İhtiyaçlarınızı Konuşalım",
  description:
    "Çinko-hava pilden şarjlı sisteme, saklama kutusundan yedek parçalara kadar, size en uygun seçeneği birlikte belirleyelim.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Geniş Ürün Seçeneği", "Uyumlu Aksesuarlar", "Kişiye Özel Öneri", "Kullanım Rehberliği"],
  accentColor: "#ca8a04",
  accentColorHover: "#a16207",
  accentColorGlow: "rgb(202 138 4 / 0.22)",
  accentColorShadow: "rgb(202 138 4 / 0.55)",
  accentColorShadowHover: "rgb(202 138 4 / 0.65)",
  accentColorFocus: "rgb(202 138 4 / 0.5)",
  accentColorTrustBg: "rgb(202 138 4 / 0.16)",
};
