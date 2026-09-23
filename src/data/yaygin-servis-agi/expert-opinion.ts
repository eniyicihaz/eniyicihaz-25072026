// "Uzman Yorumu" section for the /neden-orijinal/yaygin-servis-agi page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial
// — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const yayginServisAgiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Bir işitme cihazının uzun vadeli performansı, yalnızca ürünün kalitesine değil, arıza anında ulaşabileceğiniz yetkili servis desteğinin varlığına da bağlıdır; bu nedenle müşterilerimize her zaman yetkili servis noktalarını tercih etmelerini öneriyoruz.",
  note: "Size en yakın yetkili servis noktası hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
