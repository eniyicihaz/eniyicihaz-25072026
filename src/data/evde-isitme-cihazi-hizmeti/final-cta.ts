// Son CTA — Evde İşitme Cihazı Hizmeti. Renders through the existing
// BrandPageFinalCta (unchanged).
import { contactConfig } from "../../config";
import type { BrandPageFinalCtaContent } from "../../components/brand-page/BrandPageFinalCta/BrandPageFinalCta.astro";

export const evdeHizmetFinalCta: BrandPageFinalCtaContent = {
  badge: "İŞİTME DESTEĞİ EVİNİZE GELSİN",
  heading: "Darıca, Gebze ve Çayırova'da Evde Hizmet İçin Bize Ulaşın",
  description: "İhtiyacınızı bize iletin, size uygun bir ev ziyareti saati belirleyelim.",
  ctaPrimary: { label: "Evde Hizmet Talep Et", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  trustItems: ["Marka Bağımsız Değerlendirme", "Darıca, Gebze, Çayırova'da Randevulu Ziyaret", "Mevcut Cihazınızla İlgilenebiliriz", "Gerektiğinde Merkeze Yönlendirme"],
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorGlow: "rgb(13 148 136 / 0.22)",
  accentColorShadow: "rgb(13 148 136 / 0.55)",
  accentColorShadowHover: "rgb(13 148 136 / 0.65)",
  accentColorFocus: "rgb(13 148 136 / 0.5)",
  accentColorTrustBg: "rgb(13 148 136 / 0.16)",
};
