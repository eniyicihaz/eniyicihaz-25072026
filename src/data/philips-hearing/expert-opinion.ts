// Expert perspective quote for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared
// BrandPageExpertOpinion component. Not a named/personal testimonial —
// framed as the clinic's own general assessment.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const philipsHearingExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Philips HearLink'in anlaşılır 50/40/30 kademe sistemi, özellikle ilk kez işitme cihazı alacak ve tanıdık bir markadan net bir seçim yapmak isteyen kullanıcılar için değerlendirilmeye değer bir seçenektir.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve beklentileriniz birlikte değerlendirilmelidir.",
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
};
