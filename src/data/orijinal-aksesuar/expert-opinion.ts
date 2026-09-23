// "Uzman Yorumu" section for the /neden-orijinal/orijinal-aksesuar page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial
// — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const orijinalAksesuarExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Doğru aksesuar seçimi, cihazın performansı kadar hijyen ve konfor açısından da önemlidir; bu nedenle müşterilerimize her zaman cihaz modeline özel orijinal aksesuarları tercih etmelerini öneriyoruz.",
  note: "Cihazınıza uygun orijinal aksesuarlar hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
