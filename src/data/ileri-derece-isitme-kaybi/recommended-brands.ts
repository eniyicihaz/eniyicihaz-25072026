// "Markalara Göre İnceleyin" bloğu — linkler `brand-unique/topic-links.ts` ile, yalnızca sitedeki model verisinden
// (aile adları ve cihaz türü / özellik / kategori etiketleri) üretilir: bir marka ancak ilgili etikete sahip bir
// ailesi varsa listelenir. Üretici/teknoloji/slogan/sağlık ifadesi yoktur; aile bilgisi korunur.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import { brandLinksForTopic } from "../brand-unique/topic-links";

export const ileriDereceIsitmeKaybiRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Güçlü Kayıplar Kategorisinde Listelenen Aileler",
  links: brandLinksForTopic("gucluKayip"),
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
};
