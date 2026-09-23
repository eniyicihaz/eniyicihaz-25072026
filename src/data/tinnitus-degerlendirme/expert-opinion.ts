// "Uzman Yorumu" section for the /degerlendirme/tinnitus-degerlendirme
// page. Renders through the shared BrandPageExpertOpinion component.
// Framed as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const tinnitusDegerlendirmeExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Tinnitus şikayetiyle gelen her kullanıcımızın öyküsünü dikkatle dinliyor ve işitme durumuyla birlikte değerlendirerek en uygun sonraki adımı birlikte belirliyoruz.",
  note: "Tinnitus değerlendirmeniz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
