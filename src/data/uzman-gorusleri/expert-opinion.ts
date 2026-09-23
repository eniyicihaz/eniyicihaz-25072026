// "Uzman Yorumu" section for the /blog/uzman-gorusleri page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const uzmanGorusleriExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Kliniğimize gelen birçok kişinin, cihaz almadan önce yanlış bilgiler nedeniyle tereddüt yaşadığını görüyoruz. Doğru bilgiyle desteklenen bir karar, hem daha rahat hem de daha isabetli oluyor.",
  note: "Duyduğunuz bir bilginin doğruluğundan emin değilseniz, bizimle iletişime geçebilirsiniz.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
