// "Uzman Yorumu" section for the /isitme-cihazlari/cocuklara-ozel page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on the BTE/ITE/Şarj Edilebilir/Bluetooth master
// pages.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const cocuklaraOzelExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Çocuklarda erken tanı ve düzenli cihaz kullanımı, dil ve konuşma gelişimi açısından belirleyici bir rol oynar; bu nedenle çocuğa özel güvenlik ve dayanıklılık özellikleri taşıyan cihazları klinik pratiğimizde sıkça değerlendiriyoruz.",
  note: "Ancak cihaz seçimi tek başına yeterli değildir; çocuğun yaşı, işitme kaybının derecesi ve okul/aile ortamı birlikte değerlendirilmelidir.",
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
