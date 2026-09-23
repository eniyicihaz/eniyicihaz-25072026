// "Onarım Takibinde Neler Sunulur?" teaser grid for the
// /servis-bakim/onarim-takibi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete
// features of the tracking experience.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const onarimTakibiUseCases: BrandPageTechnologyContent = {
  badge: "ONARIM TAKİBİNDE NELER SUNULUR",
  heading: "Onarım Takibinde Neler Sunulur?",
  intro: "Takip sürecinde sizin için sunduğumuz bileşenlere daha yakından bakalım.",
  items: [
    {
      label: "DURUM BİLDİRİMLERİ",
      title: "Aşama Değişikliği Bildirimleri",
      description: "Cihazınızın durumu değiştiğinde bilgilendirilirsiniz.",
    },
    {
      label: "SMS / WHATSAPP",
      title: "SMS veya WhatsApp Üzerinden Güncelleme",
      description: "Tercih ettiğiniz kanaldan güncel durumu öğrenebilirsiniz.",
    },
    {
      label: "TAHMİNİ SÜRE",
      title: "Tahmini Teslim Süresi",
      description: "Sürecin ne kadar süreceğine dair genel bir tahmin sizinle paylaşılır.",
    },
    {
      label: "GECİKME BİLDİRİMİ",
      title: "Beklenmedik Gecikme Durumunda Bilgilendirme",
      description: "Süreçte beklenmedik bir gecikme olursa, bu durum sizinle paylaşılır.",
    },
    {
      label: "TESLİM SEÇENEKLERİ",
      title: "Teslim Alma Seçenekleri",
      description: "Cihazınız hazır olduğunda, size uygun bir teslim alma yöntemi belirlenir.",
    },
    {
      label: "SORU SORMA KANALI",
      title: "Doğrudan Soru Sorma İmkânı",
      description: "Sürecin herhangi bir aşamasında bizi arayarak soru sorabilirsiniz.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorHoverBorder: "rgb(192 38 211 / 0.5)",
};
