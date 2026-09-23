// "Kişiye Özel Programlama Süreci Nasıl İşler?" section for the
// /uygulama-ayar/kisiye-ozel-programlama page. Reuses the shared
// BrandPageTechEvolution component in its original "stage" sense (era /
// what it brought / who it's for / tags) — repurposed here as an
// ordered set of fine-tuning-session steps, same technique used
// throughout this session's service and process pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const kisiyeOzelProgramlamaEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜREÇ ADIMLARI",
  heading: "Kişiye Özel Programlama Süreci Nasıl İşler?",
  intro: "Geri bildirim görüşmesinden yeni takip planına kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Geri Bildirim Görüşmesi",
      whatItBrought: "Hangi ortamlarda memnun kaldığınız, hangilerinde zorlandığınız detaylı olarak dinlenir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Geri Bildirim Görüşmesi"],
    },
    {
      era: "Kullanım Verisi İncelemesi",
      whatItBrought: "Cihaz destekliyorsa, günlük kullanım verileri geri bildiriminizle birlikte değerlendirilir.",
      bestFor: "Objektif destekleyici veri",
      families: ["Veri Kaydı İncelemesi"],
    },
    {
      era: "Kazanç ve Sıkıştırma İnce Ayarı",
      whatItBrought: "Farklı frekans bantlarındaki ses seviyeleri, geri bildiriminize göre hassas şekilde ayarlanır.",
      bestFor: "Temel ses kalitesi ayarı",
      families: ["Kazanç İnce Ayarı"],
    },
    {
      era: "Ortam Programlarının Özelleştirilmesi",
      whatItBrought: "Gerekiyorsa, sessiz, gürültülü veya müzik gibi ortamlar için ayrı programlar oluşturulur veya düzenlenir.",
      bestFor: "Ortama özel deneyim",
      families: ["Ortam Programı Özelleştirmesi"],
    },
    {
      era: "Sonuç Değerlendirmesi ve Yeni Takip Planı",
      whatItBrought: "Yapılan değişikliklerin etkisi birlikte değerlendirilir; gerekiyorsa yeni bir takip randevusu planlanır.",
      bestFor: "Sürecin devamlılığı",
      families: ["Takip Planlaması"],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
