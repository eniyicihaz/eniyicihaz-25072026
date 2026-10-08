// "Markalara Göre İnceleyin" bloğu — linkler `brand-unique/topic-links.ts` ile, yalnızca sitedeki model verisinden
// (aile adları ve cihaz türü / özellik / kategori etiketleri) üretilir: bir marka ancak ilgili etikete sahip bir
// ailesi varsa listelenir. Üretici/teknoloji/slogan/sağlık ifadesi yoktur; aile bilgisi korunur.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import { brandLinksForTopic } from "../brand-unique/topic-links";

export const kulakArkasiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Kulak Arkası (BTE) Etiketli Aileleri Olan Markalar",
  links: brandLinksForTopic("bte"),
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
