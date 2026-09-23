// "Uzman Yorumu" section for the /sgk/yenileme-hakki page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const yenilemeHakkiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Yenileme hakkınızın ne zaman doğacağını bilmek, hem bütçenizi hem de cihaz seçiminizi önceden planlamanızı sağlar. Bu yüzden kayıtlı kullanıcılarımızın yenileme zamanını takip ederek kendilerine hatırlatıyoruz.",
  note: "Cihazınızın yenileme durumu hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
