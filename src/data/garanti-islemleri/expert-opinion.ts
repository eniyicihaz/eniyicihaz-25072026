// "Uzman Yorumu" section for the /servis-bakim/garanti-islemleri page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const garantiIslemleriExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Garanti kapsamı hakkında net olmak, kullanıcılarımızın en çok değer verdiği konulardan biri. Bu yüzden neyin kapsandığını ve kapsanmadığını baştan, açıkça anlatıyoruz.",
  note: "Garanti durumunuz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
