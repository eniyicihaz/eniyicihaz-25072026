// "Uzman Yorumu" section for the /degerlendirme/cocuk-isitme-testi page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial
// and never a diagnostic claim — same safe pattern used on every prior
// page, foregrounded here given the pediatric subject.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const cocukIsitmeTestiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Çocuklarda işitme kaybının erken tespiti, dil ve konuşma gelişimini desteklemeye yardımcı olabilir; bu nedenle yaşa uygun test yöntemleriyle düzenli değerlendirmeyi önemsiyoruz.",
  note: "Çocuğunuzun işitme testi hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
