// "Uzman Yorumu" section for the /ihtiyaciniza-gore/
// tek-tarafli-isitme-kaybi page. Renders through the shared
// BrandPageExpertOpinion component. Framed as the clinic's own general
// assessment, not a named/personal testimonial and never a diagnostic
// claim — same safe pattern used on every prior feature/need page,
// foregrounded here given the health-adjacent subject.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const tekTarafliIsitmeKaybiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Tek taraflı işitme kaybını doğru sistemlerle değerlendirmek; sesin geldiği yönü fark etme ve gürültülü ortamlarda konuşmayı takip etme konusunda sunduğu destek nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir konudur.",
  note: "Ancak bu sayfadaki bilgiler genel bir yönlendirme amacı taşır; ani başlayan kayıplarda vakit kaybetmeden bir KBB uzmanına başvurulmalı, size uygun sistem ise bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
};
