// "Uzman Yorumu" section for the /servis-bakim/periyodik-bakim page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const periyodikBakimExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Birçok 'arıza' şikayeti, aslında basit bir filtre veya tüp aşınmasından kaynaklanır. Düzenli periyodik bakım, bu tür sorunları daha ortaya çıkmadan önlemenin en kolay yoludur.",
  note: "Periyodik bakım randevunuz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
