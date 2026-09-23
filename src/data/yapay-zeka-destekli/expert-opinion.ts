// "Uzman Yorumu" section for the /teknolojiler/yapay-zeka-destekli page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every /isitme-cihazlari/* feature page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const yapayZekaDestekliExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Yapay zeka destekli işitme cihazları; sürekli değişen ortamlarda bulunan ve manuel ayarla uğraşmak istemeyen kullanıcılarda sunduğu otomatik uyum nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir teknolojidir.",
  note: "Ancak yapay zeka, profesyonel programlamanın yerini almaz; cihazın ilk ayarı ve periyodik kontrolü her zaman bir odyometrist tarafından yapılmalıdır.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
