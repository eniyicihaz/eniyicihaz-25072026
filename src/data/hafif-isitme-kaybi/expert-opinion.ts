// "Uzman Yorumu" section for the /ihtiyaciniza-gore/hafif-isitme-kaybi
// page. Renders through the shared BrandPageExpertOpinion component.
// Framed as the clinic's own general assessment, not a named/personal
// testimonial and never a diagnostic claim — same safe pattern used on
// every /isitme-cihazlari/* and /teknolojiler/* feature page, foregrounded
// here given the health-adjacent subject.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const hafifIsitmeKaybiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Hafif derecede işitme kaybını erken dönemde değerlendirmek; günlük iletişim kalitesini korumaya yardımcı olabileceğinden klinik pratiğimizde sıkça önerdiğimiz bir yaklaşımdır.",
  note: "Ancak bu sayfadaki bilgiler genel bir yönlendirme amacı taşır; kesin derece ve size uygun çözüm, yalnızca bir odyometri testi sonrasında belirlenebilir.",
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
