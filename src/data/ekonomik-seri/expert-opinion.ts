// "Uzman Yorumu" section for the /segmentler/ekonomik-seri page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page, here reinforcing that
// affordability shouldn't come at the cost of authenticity.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const ekonomikSeriExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Ekonomik seri, temel işitme ihtiyaçlarını karşılamak isteyen kullanıcılar için değerli bir seçenektir; ancak fiyat odaklı ararken dahi orijinallik ve garanti güvencesinden ödün vermemek önemlidir.",
  note: "Size uygun serinin ekonomik olup olmadığını belirlemek için ücretsiz işitme testimizden faydalanabilirsiniz.",
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
