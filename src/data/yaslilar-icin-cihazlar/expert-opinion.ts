// "Uzman Yorumu" section for the /ihtiyaciniza-gore/
// yaslilar-icin-cihazlar page. Renders through the shared
// BrandPageExpertOpinion component. Framed as the clinic's own general
// assessment, not a named/personal testimonial and never a diagnostic
// claim — same safe pattern used on every prior feature/need page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const yaslilarIcinCihazlarExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Yaşlı kullanıcılarda doğru cihazın kolay kullanılabilir olması kadar, aile desteğiyle birlikte değerlendirilmesi de klinik pratiğimizde sıkça önem verdiğimiz bir konudur; bu sayede cihaza uyum süreci daha rahat ilerleyebilir.",
  note: "Ancak bu sayfadaki bilgiler genel bir yönlendirme amacı taşır; ani başlayan kayıplarda vakit kaybetmeden bir KBB uzmanına başvurulmalı, size uygun cihaz ise bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
