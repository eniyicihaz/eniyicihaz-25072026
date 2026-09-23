// Final CTA content for the /rehberler/ilk-kullanim-rehberi page — the
// page's last section. Renders through the shared BrandPageFinalCta
// component. Same real contact channels (contactConfig) and verified
// trust facts used across the site.

import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const ilkKullanimRehberiFinalCta: BrandPageFinalCtaContent = {
  badge: "İLK GÜNLERİNİZDE YANINIZDAYIZ",
  heading: "Bir Sorunuz mu Var? Bize Ulaşın",
  description:
    "Cihazınızla ilgili ilk günlerde aklınıza takılan her konuda, tahmin yürütmek yerine bizimle iletişime geçebilirsiniz.",
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Ücretsiz Destek", "Temel Kontroller Eğitimi", "Basit Sorun Giderme", "Doğrudan İletişim"],
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorGlow: "rgb(5 150 105 / 0.22)",
  accentColorShadow: "rgb(5 150 105 / 0.55)",
  accentColorShadowHover: "rgb(5 150 105 / 0.65)",
  accentColorFocus: "rgb(5 150 105 / 0.5)",
  accentColorTrustBg: "rgb(5 150 105 / 0.16)",
};
