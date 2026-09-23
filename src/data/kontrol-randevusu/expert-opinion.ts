// "Uzman Yorumu" section for the /uygulama-ayar/kontrol-randevusu
// page. Renders through the shared BrandPageExpertOpinion component.
// Framed as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const kontrolRandevusuExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "En iyi sonuçlar, yalnızca bir sorun ortaya çıktığında değil; düzenli olarak takip edildiğinde elde edilir. Bu yüzden kontrol randevularını, cihaz uygulaması kadar önemli görüyoruz.",
  note: "Kontrol randevunuz hakkında bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
