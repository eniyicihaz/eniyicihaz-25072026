// "Ücretsiz İşitme Testinde Neler Değerlendirilir?" teaser grid for the
// /degerlendirme/ucretsiz-isitme-testi page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete components of the test itself.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const ucretsizIsitmeTestiUseCases: BrandPageTechnologyContent = {
  badge: "TESTTE NELER DEĞERLENDİRİLİR",
  heading: "Ücretsiz İşitme Testinde Neler Değerlendirilir?",
  intro: "Test sürecinde değerlendirilen bileşenlere daha yakından bakalım.",
  items: [
    {
      label: "SAF SES TESTİ",
      title: "Farklı Frekanslarda İşitme Eşiği",
      description: "Farklı frekanslardaki sesleri duyabildiğiniz en düşük şiddet seviyesi ölçülür.",
    },
    {
      label: "KONUŞMA TESTİ",
      title: "Konuşmayı Anlama Düzeyi",
      description: "Farklı ses seviyelerinde konuşmayı ne kadar net anladığınız değerlendirilir.",
    },
    {
      label: "KULAK MUAYENESİ",
      title: "Dış Kulak Yolu Kontrolü",
      description: "Kulak zarı ve dış kulak yolu, otoskop ile görsel olarak kontrol edilir.",
    },
    {
      label: "GEÇMİŞ DEĞERLENDİRME",
      title: "Şikayet ve Sağlık Geçmişi",
      description: "Şikayetleriniz ve genel sağlık geçmişiniz değerlendirmeye dahil edilir.",
    },
    {
      label: "ODYOGRAM",
      title: "Sonuçların Görsel Kaydı",
      description: "Tüm ölçümler, kolay anlaşılır bir odyogram üzerinde kaydedilir.",
    },
    {
      label: "YÖNLENDİRME",
      title: "Sonuca Göre Öneri",
      description: "Sonuçlara göre cihaz önerisi veya uzman yönlendirmesi yapılabilir.",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorHoverBorder: "rgb(8 145 178 / 0.5)",
};
