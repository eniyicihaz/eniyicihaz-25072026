// "Uzman Yorumu" section for the /teknolojiler/tinnitus-cozumleri page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial
// and never a treatment claim — same safe pattern used on every
// /isitme-cihazlari/* and /teknolojiler/* feature page, foregrounded here
// given the health-adjacent subject.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const tinnitusCozumleriExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Tinnitus destek özellikli işitme cihazları; işitme kaybıyla birlikte kulak çınlaması yaşayan ve rahatlatıcı bir destek arayan kullanıcılarda klinik pratiğimizde sıkça değerlendirdiğimiz bir seçenektir.",
  note: "Ancak tinnitus desteği bir tedavi değildir; çınlamanın nedeninin araştırılması için önce bir kulak burun boğaz değerlendirmesi, ardından bir odyometrist ile birlikte planlama yapılması önerilir.",
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
