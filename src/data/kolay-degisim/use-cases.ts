// "Kolay Değişim Sürecinde Sunduğumuz Güvenceler" teaser grid for the
// /neden-orijinal/kolay-degisim page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete exchange assurances Avrasya İşitme provides instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const kolayDegisimUseCases: BrandPageTechnologyContent = {
  badge: "DEĞİŞİM GÜVENCELERİMİZ",
  heading: "Kolay Değişim Sürecinde Sunduğumuz Güvenceler",
  intro: "Değişim sürecinde sunduğumuz somut güvencelere daha yakından bakalım.",
  items: [
    {
      label: "NET KOŞULLAR",
      title: "Satın Alma Öncesi Netleştirilen Koşullar",
      description: "Değişim hakkının kapsamı ve süresi, satın alma öncesinde açıkça paylaşılır.",
    },
    {
      label: "DEMO SONRASI DEĞERLENDİRME",
      title: "Deneme Sonrası Karar Değiştirme İmkânı",
      description: "Deneme sürecinde beklentilerinizi karşılamayan cihazlar için değişim değerlendirilir.",
    },
    {
      label: "İHTİYAÇ DEĞİŞİKLİĞİ",
      title: "İşitme Durumu Değiştiğinde Model Geçişi",
      description: "İhtiyacınız değiştiğinde uygun bir model geçişini birlikte değerlendiririz.",
    },
    {
      label: "ÜRETİM HATASI",
      title: "Üretim Kaynaklı Sorunlarda Hızlı Çözüm",
      description: "Üretim kaynaklı bir sorun tespit edildiğinde hızlı bir değişim süreci işletilir.",
    },
    {
      label: "UZMAN DESTEĞİ",
      title: "Değişim Sürecinde Uzman Rehberliği",
      description: "Size en uygun alternatifi belirlemenize yardımcı oluyoruz.",
    },
    {
      label: "ŞEFFAF SÜREÇ",
      title: "Belgeli ve Şeffaf Değişim Süreci",
      description: "Değişim süreci, her adımda belgelenerek şeffaf bir şekilde yürütülür.",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
  accentColorHoverBorder: "rgb(225 29 72 / 0.5)",
};
