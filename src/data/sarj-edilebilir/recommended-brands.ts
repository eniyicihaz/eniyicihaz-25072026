// "Markalara Göre İnceleyin" bloğu — linkler `brand-unique/topic-links.ts` ile, yalnızca sitedeki model verisinden
// (aile adları ve cihaz türü / özellik / kategori etiketleri) üretilir: bir marka ancak ilgili etikete sahip bir
// ailesi varsa listelenir. Üretici/teknoloji/slogan/sağlık ifadesi yoktur; aile bilgisi korunur.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import { brandLinksForTopic } from "../brand-unique/topic-links";

export const sarjEdilebilirRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Şarjlı Etiketli Aileleri Olan Markalar",
  links: brandLinksForTopic("sarjli"),
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
