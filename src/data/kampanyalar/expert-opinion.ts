// "Uzman Yorumu" section for the /blog/kampanyalar page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const kampanyalarExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Kampanyalarımızı hazırlarken önceliğimiz, kullanıcılarımızın ihtiyacına uygun, gerçek bir avantaj sunmaktır. Size uygun bir fırsat olup olmadığını öğrenmek için bizi aramanızı öneririz.",
  note: "Güncel kampanyalarımız hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
