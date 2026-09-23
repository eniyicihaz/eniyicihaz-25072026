// "Uzman Yorumu" section for the /degerlendirme/ucretsiz-isitme-testi
// page. Renders through the shared BrandPageExpertOpinion component.
// Framed as the clinic's own general assessment, not a named/personal
// testimonial and never a diagnostic claim — same safe pattern used on
// every prior page, foregrounded here given the clinical subject.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const ucretsizIsitmeTestiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "İşitme sağlığınız hakkında güvenilir bilgi edinmenin tek yolu, bir odyometrist eşliğinde yapılan profesyonel bir işitme testidir; bu nedenle şikayeti olan veya olmayan herkese düzenli aralıklarla test yaptırmalarını öneriyoruz.",
  note: "Ücretsiz işitme testimiz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
