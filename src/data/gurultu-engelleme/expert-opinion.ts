// "Uzman Yorumu" section for the /teknolojiler/gurultu-engelleme page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every /isitme-cihazlari/* and /teknolojiler/*
// feature page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const gurultuEngellemeExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Gürültü engelleme teknolojisi; trafik, ofis veya restoran gibi gürültülü ortamlarda sık bulunan kullanıcılarda sunduğu dinleme konforu nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir teknolojidir.",
  note: "Ancak gürültü engelleme seviyesinin dengeli ayarlanması önemlidir; aşırı azaltma konuşma netliğini de etkileyebileceğinden ilk ayar ve periyodik kontrol bir odyometrist tarafından yapılmalıdır.",
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
