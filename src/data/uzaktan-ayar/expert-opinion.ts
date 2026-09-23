// "Uzman Yorumu" section for the /uygulama-ayar/uzaktan-ayar page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const uzaktanAyarExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Uzaktan ayar, kliniğe gelmenin bir alternatifi değil; küçük ihtiyaçlar için pratik bir tamamlayıcıdır. Kapsamlı bir değerlendirme gerektiğinde bunu sizinle açıkça paylaşıyoruz.",
  note: "Uzaktan ayar hizmetimiz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
