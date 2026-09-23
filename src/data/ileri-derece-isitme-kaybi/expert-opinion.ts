// "Uzman Yorumu" section for the /ihtiyaciniza-gore/
// ileri-derece-isitme-kaybi page. Renders through the shared
// BrandPageExpertOpinion component. Framed as the clinic's own general
// assessment, not a named/personal testimonial and never a diagnostic
// claim — same safe pattern used on every prior feature/need page,
// foregrounded here given the health-adjacent subject.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const ileriDereceIsitmeKaybiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "İleri derecede işitme kaybını doğru cihazlarla değerlendirmek; günlük iletişimin belirgin şekilde etkilendiği bu dönemde yaşam kalitesini korumaya yardımcı olabileceğinden klinik pratiğimizde büyük önem verdiğimiz bir konudur.",
  note: "Ancak bu sayfadaki bilgiler genel bir yönlendirme amacı taşır; kesin derece ve size uygun çözüm, yalnızca bir odyometri testi sonrasında belirlenebilir.",
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
};
