// "Uzman Yorumu" section for the /uygulama-ayar/cihaz-deneme page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const cihazDenemeExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Bir işitme cihazı, klinikte birkaç dakikada anlaşılamayacak kadar kişisel bir deneyimdir. Bu yüzden gerçek karar için gerçek yaşamda deneme fırsatını önemsiyoruz.",
  note: "Cihaz deneme sürecimiz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
