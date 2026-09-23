// Expert perspective quote for the Vista brand page (/markalar/vista).
// Renders through the shared BrandPageExpertOpinion component. Not a
// named/personal testimonial — framed as the clinic's own general
// assessment.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const vistaExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Vista'nın Sonova'ya bağlılığı ve Soundsuite OS teknolojisini erişilebilir bir fiyat noktasında sunması, büyük bir grubun teknolojisini bütçe önceliğiyle arayan kullanıcılar için değerlendirilmeye değer bir seçenektir.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve beklentileriniz birlikte değerlendirilmelidir.",
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
};
