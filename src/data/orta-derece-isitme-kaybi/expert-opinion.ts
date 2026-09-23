// "Uzman Yorumu" section for the /ihtiyaciniza-gore/
// orta-derece-isitme-kaybi page. Renders through the shared
// BrandPageExpertOpinion component. Framed as the clinic's own general
// assessment, not a named/personal testimonial and never a diagnostic
// claim — same safe pattern used on every prior feature/need page,
// foregrounded here given the health-adjacent subject.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const ortaDereceIsitmeKaybiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Orta derecede işitme kaybını zamanında değerlendirmek; günlük konuşmaların çoğunun etkilendiği bu dönemde iletişim kalitesini korumaya yardımcı olabileceğinden klinik pratiğimizde sıkça önerdiğimiz bir yaklaşımdır.",
  note: "Ancak bu sayfadaki bilgiler genel bir yönlendirme amacı taşır; kesin derece ve size uygun çözüm, yalnızca bir odyometri testi sonrasında belirlenebilir.",
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
