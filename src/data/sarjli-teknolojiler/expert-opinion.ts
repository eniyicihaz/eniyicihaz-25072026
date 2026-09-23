// "Uzman Yorumu" section for the /teknolojiler/sarjli-teknolojiler page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every /isitme-cihazlari/* and /teknolojiler/*
// feature page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const sarjliTeknolojilerExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Gelişmiş şarj yönetim teknolojisi; pil güvenliğini ve uzun vadeli pil sağlığını önceliklendiren kullanıcılarda sunduğu ek güvence nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir konudur.",
  note: "Ancak şarj teknolojisi tek başına yeterli değildir; cihaz tipi, işitme kaybınızın derecesi ve günlük kullanım alışkanlıklarınız birlikte değerlendirilmelidir.",
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
