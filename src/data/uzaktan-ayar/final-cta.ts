// Final CTA content for the /uygulama-ayar/uzaktan-ayar page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const uzaktanAyarFinalCta: BrandPageFinalCtaContent = {
  badge: "KLİNİĞE GELMEDEN DESTEK",
  heading: "Küçük Bir Ayar İhtiyacınız mı Var?",
  description:
    "Uygun cihazınızla, güvenli bir video görüşme üzerinden kliniğe gelmeden küçük ayar güncellemeleri alabilirsiniz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Uzaktan Ayar", "Güvenli Video Görüşme", "Aynı Klinik Ekibi", "Hızlı Çözüm"],
  accentColor: "#16a34a",
  accentColorHover: "#15803d",
  accentColorGlow: "rgb(22 163 74 / 0.22)",
  accentColorShadow: "rgb(22 163 74 / 0.55)",
  accentColorShadowHover: "rgb(22 163 74 / 0.65)",
  accentColorFocus: "rgb(22 163 74 / 0.5)",
  accentColorTrustBg: "rgb(22 163 74 / 0.16)",
};
