// "Uzman Yorumu" section for the /degerlendirme/odyometri page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page, foregrounded here given
// the clinical subject.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const odyometriExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Odyometri, işitme sağlığı değerlendirmesinin temel taşıdır; ancak tek başına bir sayı veya grafik değil, kapsamlı bir değerlendirmenin parçası olarak ele alınmalıdır. Bu nedenle odyogram sonuçlarını her zaman bir uzmanla birlikte yorumlamanızı öneriyoruz.",
  note: "Odyometri testiniz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
