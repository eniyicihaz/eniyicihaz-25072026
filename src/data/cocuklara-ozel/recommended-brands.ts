// "Markalara Göre İnceleyin" bloğu — linkler `brand-unique/topic-links.ts` ile, yalnızca sitedeki model verisinden
// (aile adları ve çocuk kategorisi etiketi) üretilir: bir marka ancak çocuk etiketli bir ailesi varsa listelenir
// (Oticon: Xceed Play, Play PX, Opn Play; Phonak: Sky). Üretici/teknoloji/slogan/sağlık ifadesi yoktur.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import { brandLinksForTopic } from "../brand-unique/topic-links";

export const cocuklaraOzelRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Çocuk Kategorisinde Aileleri Olan Markalar",
  links: brandLinksForTopic("cocuk"),
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
