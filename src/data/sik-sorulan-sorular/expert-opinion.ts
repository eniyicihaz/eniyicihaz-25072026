// "Uzman Yorumu" section for the /blog/sik-sorulan-sorular page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const sikSorulanSorularExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Sorularınızı sormaktan çekinmeyin; küçük bulduğunuz bir soru bile doğru karar vermeniz için önemli olabilir. Bu sayfada yanıtını bulamadığınız her şeyi bize sorabilirsiniz.",
  note: "Aradığınız yanıtı bulamadıysanız, bizimle iletişime geçebilirsiniz.",
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
