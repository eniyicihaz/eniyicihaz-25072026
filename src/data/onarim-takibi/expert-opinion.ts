// "Uzman Yorumu" section for the /servis-bakim/onarim-takibi page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const onarimTakibiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Cihazsız kalmak, kullanıcılarımız için gerçekten stresli bir dönem olabilir. Bu yüzden onarım sürecinde onları karanlıkta bırakmamayı, her aşamada bilgilendirmeyi önemsiyoruz.",
  note: "Onarımdaki cihazınızın güncel durumu hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
