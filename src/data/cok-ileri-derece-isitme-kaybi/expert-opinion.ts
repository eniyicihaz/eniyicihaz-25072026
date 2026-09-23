// "Uzman Yorumu" section for the /ihtiyaciniza-gore/
// cok-ileri-derece-isitme-kaybi page. Renders through the shared
// BrandPageExpertOpinion component. Framed as the clinic's own general
// assessment, not a named/personal testimonial and never a diagnostic
// claim — same safe pattern used on every prior feature/need page,
// foregrounded here given the health-adjacent subject and explicitly
// naming the multidisciplinary (KBB) nature of care at this degree.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const cokIleriDereceIsitmeKaybiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Çok ileri derecede işitme kaybını kapsamlı bir yaklaşımla, gerektiğinde bir kulak burun boğaz uzmanıyla birlikte değerlendirmek; bu derecede en uygun çözümü belirlemek için klinik pratiğimizde önem verdiğimiz bir yaklaşımdır.",
  note: "Ancak bu sayfadaki bilgiler genel bir yönlendirme amacı taşır; kesin derece, uygunluk ve size özel çözüm, yalnızca bir odyometri testi ve gerektiğinde bir KBB değerlendirmesi sonrasında belirlenebilir.",
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
};
