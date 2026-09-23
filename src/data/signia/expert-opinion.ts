// Expert perspective quote for the Signia brand page (/markalar/signia) —
// see SIGNIA MASTER BLUEPRINT §9.11. Renders through the shared
// BrandPageExpertOpinion component. Not a named/personal testimonial —
// framed as the clinic's own general assessment, consistent with
// oticon/vs-phonak.ts's neutral "no single best brand" stance.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const signiaExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Signia'nın yapay zekâ destekli kişiselleştirme yaklaşımı ve Own Voice Processing teknolojisi, özellikle teknolojiye açık ve tasarımı önemseyen kullanıcılar için değerlendirilmeye değer bir seçenektir.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve beklentileriniz birlikte değerlendirilmelidir.",
  // Signia brand theme revision (2026-07): bordo (#B21F4B).
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
};
