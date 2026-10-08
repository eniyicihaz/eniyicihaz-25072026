// Evde İşitme Cihazı Hizmeti — Final CTA (Faz 2 P2). "Marka bağımsız
// değerlendirme" ve "mevcut cihazınızla ilgilenebiliriz" gibi doğrulanmamış
// maddeler çıkarıldı.
import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const evdeHizmetFinalCta: BrandPageFinalCtaContent = {
  badge: "EVDE HİZMET",
  heading: "Evde Hizmet İçin Bize Ulaşın",
  description: "Adresinizi ve ihtiyacınızı iletin, size uygun bir randevu günü belirleyelim.",
  ctaPrimary: { label: "Evde Hizmet Talep Et", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustItems: ["Kocaeli ve Anadolu Yakası", "Ücretsiz Evde Hizmet", "Randevulu Ziyaret"],
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorShadow: "rgb(13 148 136 / 0.55)",
  accentColorShadowHover: "rgb(13 148 136 / 0.65)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
  accentColorTrustBg: "rgb(13 148 136 / 0.16)",
};
