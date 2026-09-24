// "Baskısız, Profesyonel Bir Değerlendirme" — redesign plan §2, Bölüm
// 3+7 (deliberately merged: both said the same thing — "this isn't a
// sales process" and "no pressure after the result" — keeping them
// separate would have read as padding). Renders through the existing
// BrandPageExpertOpinion component (quote + note), unchanged.
import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const ucretsizIsitmeTestiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "PROFESYONEL YAKLAŞIM",
  heading: "Baskısız, Profesyonel Bir Değerlendirme",
  quote:
    "Ücretsiz işitme testi, yalnızca cihaz satışı için yapılan bir işlem değildir; öncelik işitme durumunuzun değerlendirilmesi ve ihtiyacınızın doğru anlaşılmasıdır. Uygun bir çözüm varsa, bunu size hiçbir baskı hissettirmeden birlikte görüşürüz.",
  note: "Test sonucunuz ne olursa olsun, karar vermeden önce seçenekleri birlikte değerlendirebilirsiniz.",
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
