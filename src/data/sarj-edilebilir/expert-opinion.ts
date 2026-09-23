// "Uzman Yorumu" section for the /isitme-cihazlari/sarj-edilebilir page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on the BTE/ITE master pages.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const sarjEdilebilirExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Şarj edilebilir işitme cihazları; özellikle pil değiştirme zahmetinden kaçınmak isteyen ve düzenli bir günlük rutine sahip kullanıcılarda, sunduğu kullanım kolaylığı nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir seçenektir.",
  note: "Ancak güç seçimi tek başına yeterli değildir; cihaz tipi, işitme kaybınızın derecesi ve yaşam tarzınız birlikte değerlendirilmelidir.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
