// "Uzman Yorumu" section for the /servis-bakim/cihaz-temizligi page.
// Renders through the shared BrandPageExpertOpinion component. Framed
// as the clinic's own general assessment, not a named/personal
// testimonial — same safe pattern used on every prior page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const cihazTemizligiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Günlük birkaç dakikalık basit bir temizlik alışkanlığı, cihazınızın ömrü ve performansı üzerinde şaşırtıcı derecede büyük bir fark yaratabilir. Bu yüzden her yeni kullanıcıya doğru yöntemi baştan gösteriyoruz.",
  note: "Cihaz temizliği hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.",
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
};
