// "Uzman Yorumu" section for the /teknolojiler/uzaktan-kontrol page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every /isitme-cihazlari/* and /teknolojiler/*
// feature page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const uzaktanKontrolExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Uzaktan kontrol ve uzaktan destek özellikleri; kliniğe sık gelmekte zorlanan veya kolay ayar yapmak isteyen kullanıcılarda sunduğu erişim kolaylığı nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir teknolojidir.",
  note: "Ancak uzaktan destek her ayarı kapsamaz; ilk programlama ve karmaşık ayarlamalar için yüz yüze bir randevu her zaman gerekli olabilir.",
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
