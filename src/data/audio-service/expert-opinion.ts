// Expert perspective quote for the Audio Service brand page
// (/markalar/audio-service). Renders through the shared
// BrandPageExpertOpinion component. Not a named/personal testimonial —
// framed as the clinic's own general assessment.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const audioServiceExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Audio Service'in kulak içi (ITE) uzmanlığı, kulak kanalında neredeyse görünmez bir çözüm arayan kullanıcılar için değerlendirilmeye değer bir seçenektir; 1977'den bu yana süregelen üretim tecrübesi de bunu destekler.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve beklentileriniz birlikte değerlendirilmelidir.",
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
};
