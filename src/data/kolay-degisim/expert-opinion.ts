// "Uzman Yorumu" section for the /neden-orijinal/kolay-degisim page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial
// — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const kolayDegisimExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "İşitme cihazı seçimi zamanla değişen bir süreçtir; bu nedenle satın alma sonrasında da kullanıcıyı yalnız bırakmayan, net ve şeffaf bir değişim güvencesinin sunulması önemlidir.",
  note: "Değişim sürecimizle ilgili detaylı bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
