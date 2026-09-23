// Expert perspective quote for the NuEar brand page (/markalar/nuear).
// Renders through the shared BrandPageExpertOpinion component. Not a
// named/personal testimonial — framed as the clinic's own general
// assessment, consistent with oticon/vs-phonak.ts's neutral "no single
// best brand" stance.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const nuearExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "NuEar'ın Hear Circle uygulaması üzerinden sunduğu sağlık ve aktivite takibi, özellikle günlük yaşamını işitme deneyimiyle birlikte izlemek isteyen kullanıcılar için değerlendirilmeye değer bir yaklaşımdır.",
  note: "Ancak marka seçimi tek başına yeterli değildir; işitme kaybınızın derecesi ve beklentileriniz birlikte değerlendirilmelidir.",
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
};
