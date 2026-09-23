// Expert perspective quote for the Coselgi brand page (/markalar/coselgi).
// Renders through the shared BrandPageExpertOpinion component. Not a
// named/personal testimonial — framed as the clinic's own general
// assessment.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const coselgiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Coselgi'nin Widex teknolojisine dayanan Acoustic Environment Technology'si, güvenilir bir markanın teknolojisini daha erişilebilir bir fiyat noktasında arayan kullanıcılar için değerlendirilmeye değer bir seçenektir.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve beklentileriniz birlikte değerlendirilmelidir.",
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
};
