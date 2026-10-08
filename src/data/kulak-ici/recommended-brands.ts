// "Markalara Göre İnceleyin" bloğu — linkler `brand-unique/topic-links.ts` ile, yalnızca sitedeki model verisinden
// (aile adları ve cihaz türü / özellik / kategori etiketleri) üretilir: bir marka ancak ilgili etikete sahip bir
// ailesi varsa listelenir. Üretici/teknoloji/slogan/sağlık ifadesi yoktur; aile bilgisi korunur.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import { brandLinksForTopic } from "../brand-unique/topic-links";

export const kulakIciRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kulak İçi Etiketli Aileleri Olan Markalar",
  links: brandLinksForTopic("kulakIci"),
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
