// "Cihaz Deneme Süreci Nasıl İşler?" section for the /uygulama-ayar/
// cihaz-deneme page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — repurposed here as an ordered set of trial-process steps,
// same technique used throughout this session's service pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const cihazDenemeEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜREÇ ADIMLARI",
  heading: "Cihaz Deneme Süreci Nasıl İşler?",
  intro: "İhtiyaç görüşmesinden karar değerlendirmesine kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "İhtiyaç ve Bütçe Görüşmesi",
      whatItBrought: "İhtiyaçlarınız ve bütçeniz doğrultusunda deneme için uygun model veya modeller birlikte belirlenir.",
      bestFor: "Sürecin ilk adımı",
      families: ["İhtiyaç Görüşmesi"],
    },
    {
      era: "Deneme İçin İlk Programlama",
      whatItBrought: "Seçilen cihaz, odyogramınıza göre deneme sürecine uygun şekilde programlanır.",
      bestFor: "Deneme başlangıcı",
      families: ["İlk Programlama"],
    },
    {
      era: "Günlük Yaşamda Kullanım",
      whatItBrought: "Cihazı belirlenen süre boyunca ev, iş ve sosyal ortamlarınızda kullanırsınız.",
      bestFor: "Gerçek yaşam deneyimi",
      families: ["Deneme Süresi"],
    },
    {
      era: "Ara Kontrol Seansı",
      whatItBrought: "Deneme süresinin ortasında, deneyiminiz değerlendirilir ve gerekirse küçük ayarlar yapılır.",
      bestFor: "Süreç desteği",
      families: ["Ara Kontrol"],
    },
    {
      era: "Karar Değerlendirmesi",
      whatItBrought: "Deneme süresi sonunda, deneyiminize göre satın alma kararınızı birlikte değerlendirirsiniz.",
      bestFor: "Sürecin tamamlanması",
      families: ["Karar Değerlendirmesi"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
