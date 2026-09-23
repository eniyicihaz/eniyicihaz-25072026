// "Uzman Yorumu" section for the /uygulama-ayar/kalip-alimi page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const kalipAlimiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Kişiye özel bir kulak kalıbı, küçük bir ayrıntı gibi görünse de günlük konforu ve ses kalitesini doğrudan etkiler. Bu yüzden kalıp alımına, cihazın kendisi kadar özen gösteriyoruz.",
  note: "Kalıp alımı randevunuz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
