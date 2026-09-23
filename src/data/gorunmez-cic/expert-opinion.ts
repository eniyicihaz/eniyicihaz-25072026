// "Uzman Yorumu" section for the /isitme-cihazlari/gorunmez-cic page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on the BTE/ITE/Şarj Edilebilir/Bluetooth/
// Çocuklara Özel master pages.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const gorunmezCicExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Görünmez (CIC/IIC) cihazlar; kulak kanalı yapısı uygun olan ve görünürlüğü önceliklendiren yetişkin kullanıcılarda sunduğu diskretlik nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir seçenektir.",
  note: "Ancak görünürlük tek başına yeterli değildir; kulak kanalı boyutunuz, işitme kaybınızın derecesi ve el becerinizin birlikte değerlendirilmesi gerekir.",
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
