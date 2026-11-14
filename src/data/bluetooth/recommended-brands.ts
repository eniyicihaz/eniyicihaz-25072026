// "Markalara Göre İnceleyin" bloğu — linkler `brand-unique/topic-links.ts` ile, yalnızca sitedeki model verisinden
// (aile adları ve cihaz türü / özellik / kategori etiketleri) üretilir: bir marka ancak ilgili etikete sahip bir
// ailesi varsa listelenir. Üretici/teknoloji/slogan/sağlık ifadesi yoktur; aile bilgisi korunur.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";
import { brandLinksForTopic } from "../brand-unique/topic-links";

export const bluetoothRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Bluetooth Etiketli Aileleri Olan Ana Markalar",
  // Mobil yükseklik ve kullanıcı faydası için 4 ana marka (Bluetooth etiketi neredeyse her markada olduğundan tüm markaların listesi ayırt edici değildi).
  links: brandLinksForTopic("bluetooth", ["oticon", "phonak", "resound", "nuear"]),
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
