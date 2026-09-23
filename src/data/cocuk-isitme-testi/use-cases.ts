// "Çocuk İşitme Testinde Kullanılan Yöntemler" teaser grid for the
// /degerlendirme/cocuk-isitme-testi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete methods used across pediatric testing.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const cocukIsitmeTestiUseCases: BrandPageTechnologyContent = {
  badge: "TEST YÖNTEMLERİ",
  heading: "Çocuk İşitme Testinde Kullanılan Yöntemler",
  intro: "Yaş ve gelişim düzeyine göre kullanılan test yöntemlerine daha yakından bakalım.",
  items: [
    {
      label: "OAE",
      title: "Otoakustik Emisyon Testi",
      description: "İç kulağın seslere verdiği tepkiyi ölçen, yenidoğanlarda sıkça kullanılan objektif bir testtir.",
    },
    {
      label: "ABR",
      title: "İşitsel Beyin Sapı Yanıtı Testi",
      description: "İşitsel sinir yolunun tepkisini ölçen, uyku sırasında uygulanabilen objektif bir testtir.",
    },
    {
      label: "GÖRSEL PEKİŞTİRME",
      title: "Görsel Pekiştirmeli Odyometri",
      description: "Bebeğin ses yönüne dönmesi, oyuncak veya ışıkla ödüllendirilerek değerlendirilir.",
    },
    {
      label: "OYUN ODYOMETRİSİ",
      title: "Oyun Tabanlı Odyometri",
      description: "Çocuk, ses duyduğunda bir oyuna katılmaya teşvik edilerek işitme eşiği belirlenir.",
    },
    {
      label: "TİMPANOMETRİ",
      title: "Orta Kulak Değerlendirmesi",
      description: "Orta kulak fonksiyonu, timpanometri ile objektif olarak değerlendirilir.",
    },
    {
      label: "AİLE GÖRÜŞMESİ",
      title: "Gelişim ve Şikayet Değerlendirmesi",
      description: "Ailenin gözlemleri ve çocuğun gelişim geçmişi değerlendirmeye dahil edilir.",
    },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorHoverBorder: "rgb(249 115 22 / 0.5)",
};
