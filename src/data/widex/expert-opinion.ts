// Expert perspective quote for the Widex brand page (/markalar/widex).
// Renders through the shared BrandPageExpertOpinion component. Not a
// named/personal testimonial — framed as the clinic's own general
// assessment, consistent with oticon/vs-phonak.ts's neutral "no single
// best brand" stance.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const widexExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Widex'in PureSound™ yaklaşımı ve düşük ses işleme gecikmesi, özellikle doğal ve az işlenmiş bir ses deneyimini önemseyen kullanıcılar için değerlendirilmeye değer bir seçenektir.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve beklentileriniz birlikte değerlendirilmelidir.",
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
