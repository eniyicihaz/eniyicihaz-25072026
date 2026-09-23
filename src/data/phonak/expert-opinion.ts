// Expert perspective quote for the Phonak brand page (/markalar/phonak) —
// see PHONAK MASTER BLUEPRINT §6.11. Renders through the shared
// BrandPageExpertOpinion component. Not a named/personal testimonial —
// framed as the clinic's own general assessment, consistent with
// oticon/vs-phonak.ts's neutral "no single best brand" stance.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const phonakExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Phonak'ın evrensel bağlantı ve Roger ekosistemi, özellikle aktif sosyal yaşamı olan veya kalabalık ortamlarda zorlanan kullanıcılar için değerlendirilmeye değer bir seçenektir.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve yaşam tarzınız birlikte değerlendirilmelidir.",
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
