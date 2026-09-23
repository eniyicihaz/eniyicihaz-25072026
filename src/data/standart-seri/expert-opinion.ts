// "Uzman Yorumu" section for the /segmentler/standart-seri page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const standartSeriExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Standart seri, çoğu kullanıcının günlük ihtiyaçlarını karşılayacak dengeli bir teknoloji seviyesi sunar; bu nedenle ilk kez cihaz kullanacak veya dengeli bir yatırım arayan kullanıcılara sıkça önerdiğimiz bir seçenektir.",
  note: "Size uygun serinin standart olup olmadığını belirlemek için ücretsiz işitme testimizden faydalanabilirsiniz.",
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
