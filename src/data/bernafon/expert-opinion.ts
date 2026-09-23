// Expert perspective quote for the Bernafon brand page (/markalar/bernafon).
// Renders through the shared BrandPageExpertOpinion component. Not a
// named/personal testimonial — framed as the clinic's own general
// assessment, consistent with oticon/vs-phonak.ts's neutral "no single
// best brand" stance.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const bernafonExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Bernafon'un Smart Sensor teknolojisi ve hareket algılayan otomatik uyum yaklaşımı, özellikle grup konuşmalarında ve değişken ortamlarda konuşma anlaşılırlığını önemseyen kullanıcılar için değerlendirilmeye değer bir seçenektir.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve beklentileriniz birlikte değerlendirilmelidir.",
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
};
