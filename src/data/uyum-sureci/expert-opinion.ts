// "Uzman Yorumu" section for the /rehberler/uyum-sureci page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const uyumSureciExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Uyum süreci, işitme cihazı deneyiminin en çok göz ardı edilen ama en önemli parçalarından biridir. Bu yüzden takip randevularımızı, ilk uygulama kadar önemli görüyoruz.",
  note: "Uyum süreciniz hakkında bilgi almak veya bir takip randevusu planlamak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
