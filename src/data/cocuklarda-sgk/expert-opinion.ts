// "Uzman Yorumu" section for the /sgk/cocuklarda-sgk page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const cocuklardaSgkExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Çocuklarda zaman, yetişkinlere göre çok daha kritik bir faktördür. Bu yüzden şüpheli bir tarama sonucuyla geldiğinizde süreci hızlandırmak ve aileyi her adımda bilgilendirmek önceliğimiz oluyor.",
  note: "Çocuğunuzun süreci hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
