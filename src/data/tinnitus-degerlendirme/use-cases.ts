// "Tinnitus Değerlendirmesinde Neler İncelenir?" teaser grid for the
// /degerlendirme/tinnitus-degerlendirme page. Renders through the
// shared BrandPageTechnology component (6-card grid), same technique
// every prior Değerlendirme page's use-cases.ts uses, here scoped to
// the concrete components examined during the evaluation.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const tinnitusDegerlendirmeUseCases: BrandPageTechnologyContent = {
  badge: "TİNNİTUS DEĞERLENDİRMESİNDE NELER İNCELENİR",
  heading: "Tinnitus Değerlendirmesinde Neler İncelenir?",
  intro: "Değerlendirme sırasında incelenen bileşenlere daha yakından bakalım.",
  items: [
    {
      label: "ÖYKÜ VE TETİKLEYİCİLER",
      title: "Şikayetin Öyküsü ve Tetikleyicileri",
      description: "Çınlamanın ne zaman başladığı ve onu artıran veya azaltan etkenler değerlendirilir.",
    },
    {
      label: "İŞİTME DURUMU",
      title: "İşitme Kaybı Birlikteliği",
      description: "Odyometrik test ile işitme kaybının eşlik edip etmediği araştırılır.",
    },
    {
      label: "PERDE EŞLEŞTİRMESİ",
      title: "Çınlamanın Perdesi (Frekansı)",
      description: "Duyduğunuz çınlamaya en yakın frekans, size özel bir referansla belirlenir.",
    },
    {
      label: "ŞİDDET EŞLEŞTİRMESİ",
      title: "Çınlamanın Şiddeti",
      description: "Çınlamanın algılanan yüksekliği, bir referans sesle karşılaştırılarak ölçülür.",
    },
    {
      label: "MASKELEME EŞİĞİ",
      title: "Maskeleme Eşiği",
      description: "Çınlamayı hafifçe örtebilecek en düşük ses seviyesi araştırılabilir.",
    },
    {
      label: "ANKET SONUCU",
      title: "THI (Tinnitus Handicap Inventory) Skoru",
      description: "Tinnitus'un günlük yaşama etkisi, standart bir anketle sayısal olarak ölçülür.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorHoverBorder: "rgb(5 150 105 / 0.5)",
};
