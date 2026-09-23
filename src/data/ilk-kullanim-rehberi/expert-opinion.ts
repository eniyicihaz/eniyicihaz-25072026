// "Uzman Yorumu" section for the /rehberler/ilk-kullanim-rehberi page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const ilkKullanimRehberiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "İlk günler, cihazınızla kuracağınız ilişkinin temelini oluşturur. Temel işlemleri baştan doğru öğrenmek, hem özgüveninizi hem de alışma sürecinizi olumlu etkileyebilir.",
  note: "İlk kullanımınızla ilgili sorularınız için bizimle iletişime geçebilirsiniz.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
