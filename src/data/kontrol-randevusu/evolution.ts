// "Kontrol Randevusu Nasıl İşler?" section for the /uygulama-ayar/
// kontrol-randevusu page. Reuses the shared BrandPageTechEvolution
// component in its original "stage" sense (era / what it brought / who
// it's for / tags) — repurposed here as an ordered set of check-up
// steps, same technique used throughout this session's service pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const kontrolRandevusuEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜREÇ ADIMLARI",
  heading: "Kontrol Randevusu Nasıl İşler?",
  intro: "Randevu hatırlatmasından sonraki kontrol planlamasına kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Randevu Hatırlatması",
      whatItBrought: "Kontrol zamanınız yaklaştığında, size uygun bir randevu saati için iletişime geçilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Randevu Hatırlatması"],
    },
    {
      era: "İşitme Durumu Kontrolü",
      whatItBrought: "Kısa bir yeniden test ile işitme durumunuzda bir değişiklik olup olmadığı değerlendirilir.",
      bestFor: "İşitme takibi",
      families: ["İşitme Yeniden Değerlendirmesi"],
    },
    {
      era: "Cihaz Performans Kontrolü",
      whatItBrought: "Cihazınızın teknik performansı ve mevcut ayarların uygunluğu gözden geçirilir.",
      bestFor: "Cihaz takibi",
      families: ["Performans Kontrolü"],
    },
    {
      era: "Fiziksel Muayene ve Kalıp Kontrolü",
      whatItBrought: "Kulak kanalınız ve varsa kulak kalıbınızın uyumu fiziksel olarak kontrol edilir.",
      bestFor: "Fiziksel değerlendirme",
      families: ["Fiziksel Muayene"],
    },
    {
      era: "Sonuç Değerlendirmesi ve Planlama",
      whatItBrought: "Bulgular sizinle birlikte gözden geçirilir; gerekirse ek bir randevu veya sonraki kontrol tarihi planlanır.",
      bestFor: "Sürecin tamamlanması",
      families: ["Sonraki Kontrol Planlaması"],
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
