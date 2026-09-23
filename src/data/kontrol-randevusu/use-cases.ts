// "Kontrol Randevusunda Neler Değerlendirilir?" teaser grid for the
// /uygulama-ayar/kontrol-randevusu page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete
// components reviewed during the visit.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const kontrolRandevusuUseCases: BrandPageTechnologyContent = {
  badge: "KONTROL RANDEVUSUNDA NELER DEĞERLENDİRİLİR",
  heading: "Kontrol Randevusunda Neler Değerlendirilir?",
  intro: "Randevu sırasında gözden geçirilen bileşenlere daha yakından bakalım.",
  items: [
    {
      label: "İŞİTME YENİDEN TESTİ",
      title: "Kısa İşitme Yeniden Değerlendirmesi",
      description: "İşitme durumunuzda bir değişiklik olup olmadığı kısa bir testle değerlendirilir.",
    },
    {
      label: "CİHAZ PERFORMANSI",
      title: "Cihaz Performans Kontrolü",
      description: "Cihazınızın teknik performansı ve ayarların uygunluğu gözden geçirilir.",
    },
    {
      label: "KULAK MUAYENESİ",
      title: "Kulak Kanalı Muayenesi",
      description: "Kulak kanalınız, genel sağlık ve cihazın uyumu açısından kontrol edilir.",
    },
    {
      label: "KALIP / KULAK UCU",
      title: "Kalıp veya Kulak Ucu Uyumu",
      description: "Kullandığınız kalıp veya kulak ucunun hâlâ iyi oturup oturmadığı değerlendirilir.",
    },
    {
      label: "YAZILIM VE PİL",
      title: "Yazılım Güncellemesi ve Pil/Şarj Kontrolü",
      description: "Cihazınızın yazılımı ve pil veya şarj performansı kontrol edilir.",
    },
    {
      label: "SONRAKİ ADIM",
      title: "Sonraki Adımın Planlanması",
      description: "Gerekirse ek bir randevu veya bir sonraki kontrol tarihi birlikte planlanır.",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
  accentColorHoverBorder: "rgb(71 85 105 / 0.5)",
};
