// "Uzman Yorumu" section for the /blog/etkinlikler page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const etkinliklerExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Toplum sağlığı etkinliklerine katılım göstermek, işitme sağlığı farkındalığını artırmanın en etkili yollarından biri. Okulunuz veya kurumunuz için bir işbirliği düşünüyorsanız, bizimle iletişime geçmenizi öneririz.",
  note: "Etkinlik veya işbirliği talepleriniz için bizimle iletişime geçebilirsiniz.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
