// "Uzman Yorumu" section for the /teknolojiler/kablosuz-baglanti page.
// Renders through the shared BrandPageExpertOpinion component. Framed as
// the clinic's own general assessment, not a named/personal testimonial —
// same safe pattern used on every /isitme-cihazlari/* and /teknolojiler/*
// feature page.

import type { BrandPageExpertOpinionContent } from "../../components/brand-page/BrandPageExpertOpinion/BrandPageExpertOpinion.astro";

export const kablosuzBaglantiExpertOpinion: BrandPageExpertOpinionContent = {
  badge: "UZMAN YORUMU",
  heading: "Avrasya İşitme Uzman Ekibinin Değerlendirmesi",
  quote:
    "Telesarmal, Roger/FM ve kulaktan kulağa bağlantı gibi kablosuz protokoller; okul, toplantı veya ibadethane gibi özel ortamlarda ek destek arayan kullanıcılarda sunduğu geniş erişim nedeniyle klinik pratiğimizde sıkça değerlendirdiğimiz bir konudur.",
  note: "Ancak her protokol her ortamda çalışmaz; hangi protokole ihtiyaç duyduğunuz günlük yaşadığınız ortamlara göre bir odyometrist ile birlikte belirlenmelidir.",
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
