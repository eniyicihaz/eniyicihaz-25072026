// "Uzman Yorumu" section for the /isitme-cihazlari/suya-dayanikli page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on the BTE/ITE/Şarj Edilebilir/Bluetooth/
// Çocuklara Özel/Görünmez master pages.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const suyaDayankliExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Suya dayanıklı işitme cihazları; düzenli spor yapan, aktif yaşam tarzı süren veya nemli iklimde yaşayan kullanıcılarda sunduğu ek güvence nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir özelliktir.",
  note: "Ancak IP koruma sınıfı tek başına yeterli değildir; cihazın suya tam dayanıklı (waterproof) olmadığı unutulmamalı ve düzenli bakım alışkanlıkları sürdürülmelidir.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
