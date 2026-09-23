// "Uzman Yorumu" section for the /ihtiyaciniza-gore/
// aktif-yasam-icin-cihazlar page. Renders through the shared
// BrandPageExpertOpinion component. Framed as the clinic's own general
// assessment, not a named/personal testimonial and never a diagnostic
// claim — same safe pattern used on every prior feature/need page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const aktifYasamIcinCihazlarExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Aktif bir yaşam tarzı sürdüren kullanıcılarda cihazın güvenli oturması ve dayanıklılığı, ses kalitesi kadar önemli bir konu olarak klinik pratiğimizde sıkça değerlendirdiğimiz bir husustur.",
  note: "Ancak bu sayfadaki bilgiler genel bir yönlendirme amacı taşır; ani başlayan kayıplarda vakit kaybetmeden bir KBB uzmanına başvurulmalı, size uygun cihaz ise bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
};
