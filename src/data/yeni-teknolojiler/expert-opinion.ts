// "Uzman Yorumu" section for the /blog/yeni-teknolojiler page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const yeniTeknolojilerExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Yeni teknolojiler heyecan verici, ancak en gelişmiş özellik her zaman herkes için en doğru seçim anlamına gelmez. Önceliğimiz, sizin gerçek ihtiyacınıza uygun teknolojiyi birlikte bulmak.",
  note: "Hangi teknolojilerin size uygun olduğunu öğrenmek için bizimle iletişime geçebilirsiniz.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
