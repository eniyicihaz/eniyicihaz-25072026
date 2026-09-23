// "Uzman Yorumu" section for the /teknolojiler/konusma-odakli page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every /isitme-cihazlari/* and /teknolojiler/*
// feature page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const konusmaOdakliExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Konuşma odaklı teknolojiler; kalabalık sohbetlerde ve gürültülü sosyal ortamlarda karşısındaki kişiyi takip etmekte zorlanan kullanıcılarda sunduğu konuşma netliği nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir teknolojidir.",
  note: "Ancak yönlü odaklanma çevresel farkındalığı bir miktar azaltabilir; bu nedenle ilk ayar ve periyodik kontrol her zaman bir odyometrist tarafından yapılmalıdır.",
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
