// "Uzman Yorumu" section for the /segmentler/premium-seri page. Renders
// through the shared BrandPageExpertOpinion component. Framed as the
// clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every prior page, here reinforcing that
// premium isn't universally necessary.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const premiumSeriExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Premium seri, en gelişmiş teknolojiyi arayan ve karmaşık dinleme ortamlarında ek performans ihtiyacı duyan kullanıcılar için değerli bir seçenektir; ancak her kullanıcı için premium serinin gerekli olmadığını da göz önünde bulundurarak değerlendirme yapıyoruz.",
  note: "Size uygun serinin premium olup olmadığını belirlemek için ücretsiz işitme testimizden faydalanabilirsiniz.",
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
};
