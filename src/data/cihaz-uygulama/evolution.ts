// "Cihaz Uygulama Randevusu Nasıl İşler?" section for the
// /uygulama-ayar/cihaz-uygulama page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as an
// ordered set of appointment steps, same technique the Değerlendirme
// series' evolution.ts files use for their own process pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const cihazUygulamaEvolution: BrandPageTechEvolutionContent = {
  badge: "RANDEVU ADIMLARI",
  heading: "Cihaz Uygulama Randevusu Nasıl İşler?",
  intro: "Fiziksel kontrolden kullanım eğitimine kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Fiziksel Yerleştirme Kontrolü",
      whatItBrought: "Cihazın veya kulak kalıbının kulağınıza uygun oturup oturmadığı kontrol edilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Fiziksel Kontrol"],
    },
    {
      era: "Odyograma Dayalı İlk Programlama",
      whatItBrought: "Cihaz, işitme test sonuçlarınıza göre ilk kez programlanır.",
      bestFor: "Kişiye özel başlangıç",
      families: ["İlk Programlama"],
    },
    {
      era: "Doğrulama Ölçümü",
      whatItBrought: "Gerekli görüldüğünde, ayarların hedeflenen seviyeleri karşıladığı bir ölçümle doğrulanır.",
      bestFor: "Kalite kontrolü",
      families: ["Doğrulama Ölçümü"],
    },
    {
      era: "Ortam Senaryoları Üzerinde Deneme",
      whatItBrought: "Sessiz ve gürültülü ortam gibi farklı senaryolarda cihazın verdiği tepki birlikte değerlendirilir.",
      bestFor: "Gerçek kullanım simülasyonu",
      families: ["Senaryo Testi"],
    },
    {
      era: "Kullanım Eğitimi ve Takip Planlaması",
      whatItBrought: "Takma, çıkarma, temizlik ve bakım konusunda bilgilendirilir; ihtiyaca göre takip randevusu planlanır.",
      bestFor: "Sürecin tamamlanması",
      families: ["Kullanım Eğitimi"],
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
