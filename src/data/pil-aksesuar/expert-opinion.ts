// "Uzman Yorumu" section for the /servis-bakim/pil-aksesuar page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const pilAksesuarExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Doğru pil veya aksesuar seçimi, cihazınızdan aldığınız günlük deneyimi doğrudan etkiler. Bu yüzden ihtiyacınızı dinleyip size gerçekten uygun seçeneği öneriyoruz.",
  note: "Pil ve aksesuar seçenekleriniz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
