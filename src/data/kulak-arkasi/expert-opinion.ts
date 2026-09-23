// "Uzman Yorumu" section for the /isitme-cihazlari/kulak-arkasi-bte page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every brand page's expert-opinion.ts.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const kulakArkasiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Kulak arkası (BTE) işitme cihazları; özellikle ileri derece işitme kayıplarında ve çocuk kullanıcılarda sunduğu güç, dayanıklılık ve kullanım kolaylığı nedeniyle klinik pratiğimizde sıkça tercih ettiğimiz bir cihaz tipidir.",
  note: "Ancak cihaz tipi tek başına yeterli değildir; işitme kaybınızın derecesi, kulak yapınız ve yaşam tarzınız birlikte değerlendirilmelidir.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
