// "Uzman Yorumu" section for the /rehberler/isitme-kaybi-nedir page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const isitmeKaybiNedirExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "İşitme kaybı hakkında doğru bilgiye sahip olmak, doğru adımı zamanında atmanın ilk şartıdır. Bu yüzden herkesin anlayabileceği, abartısız ve dürüst bir dille bilgilendirmeyi önemsiyoruz.",
  note: "İşitme sağlığınız hakkında bilgi almak veya ücretsiz işitme testi için bizimle iletişime geçebilirsiniz.",
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
