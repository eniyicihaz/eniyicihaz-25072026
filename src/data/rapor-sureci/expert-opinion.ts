// "Uzman Yorumu" section for the /sgk/rapor-sureci page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const raporSureciExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Rapor sürecinde en sık karşılaşılan gecikmeler, yanlış hastaneye başvurulması veya eksik belgeyle süreç başlatılmasından kaynaklanır. Bu yüzden randevunuzda size hangi adımları izlemeniz gerektiğini net bir şekilde anlatıyoruz.",
  note: "Rapor süreciniz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
