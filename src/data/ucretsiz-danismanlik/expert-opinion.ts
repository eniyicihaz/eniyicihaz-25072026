// "Uzman Yorumu" section for the /neden-orijinal/ucretsiz-danismanlik
// page. Renders through the shared BrandPageExpertOpinion component.
// Framed as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const ucretsizDanismanlikExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Doğru işitme cihazı kararı, yalnızca teknik özelliklere değil; kişinin yaşam tarzına, bütçesine ve önceliklerine de bağlıdır; bu nedenle her danışmanlık sürecini kişiye özel bir değerlendirme olarak ele alıyoruz.",
  note: "Ücretsiz danışmanlık sürecimiz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
