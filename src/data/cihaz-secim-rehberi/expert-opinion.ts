// "Uzman Yorumu" section for the /rehberler/cihaz-secim-rehberi page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const cihazSecimRehberiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "En iyi cihaz, katalogdaki en pahalı model değil; sizin işitme profilinize ve yaşam tarzınıza en uygun olanıdır. Bu yüzden seçim sürecinde satış değil, doğru eşleşme odaklı ilerliyoruz.",
  note: "Size uygun cihazı birlikte bulmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
