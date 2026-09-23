// "Uzman Yorumu" section for the /sgk/katki-payi page. Renders through
// the shared BrandPageExpertOpinion component. Framed as the clinic's
// own general assessment, not a named/personal testimonial — same safe
// pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const sgkKatkiPayiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Katkı payınızı önceden net bir şekilde bilmeniz, doğru bütçe planlaması yapmanız için önemlidir. Bu yüzden hesaplamayı randevunuzda sizinle birlikte, şeffaf bir şekilde yapıyoruz.",
  note: "Size özel katkı payı hesaplamanız için bizimle iletişime geçebilirsiniz.",
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
