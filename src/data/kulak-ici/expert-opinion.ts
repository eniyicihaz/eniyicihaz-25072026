// "Uzman Yorumu" section for the /isitme-cihazlari/kulak-ici-ite page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on the BTE master page and every brand page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const kulakIciExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Kulak içi (ITE) işitme cihazları; özellikle görünürlüğü öncelik gören ve hafif ile orta-ileri derece işitme kaybı yaşayan yetişkin kullanıcılarda, kişiye özel kalıbı ve kompakt tasarımı nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir cihaz tipidir.",
  note: "Ancak cihaz tipi tek başına yeterli değildir; işitme kaybınızın derecesi, kulak kanalı yapınız ve el becerisi gibi faktörler birlikte değerlendirilmelidir.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
