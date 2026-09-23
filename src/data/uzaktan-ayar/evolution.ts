// "Uzaktan Ayar Süreci Nasıl İşler?" section for the /uygulama-ayar/
// uzaktan-ayar page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags) — repurposed here as an ordered set of remote-session steps,
// same technique used throughout this session's service pages.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const uzaktanAyarEvolution: BrandPageTechEvolutionContent = {
  badge: "SÜREÇ ADIMLARI",
  heading: "Uzaktan Ayar Süreci Nasıl İşler?",
  intro: "Uygunluk kontrolünden sonuç değerlendirmesine kadar izlenen beş adımlık süreci bir araya getirdik.",
  stages: [
    {
      era: "Uygunluk Kontrolü",
      whatItBrought: "Cihazınızın ve akıllı telefonunuzun uzaktan ayara uygun olup olmadığı kontrol edilir.",
      bestFor: "Sürecin ilk adımı",
      families: ["Uygunluk Kontrolü"],
    },
    {
      era: "Randevu Planlama",
      whatItBrought: "Size uygun bir video görüşme saati belirlenir ve gerekli uygulama bilgileri paylaşılır.",
      bestFor: "Oturum planlaması",
      families: ["Randevu Planlama"],
    },
    {
      era: "Video Görüşme Bağlantısı",
      whatItBrought: "Belirlenen saatte, cihazınız uygulama üzerinden odyometristinizin ekranına güvenli şekilde bağlanır.",
      bestFor: "Oturumun başlangıcı",
      families: ["Video Görüşme"],
    },
    {
      era: "Ayar Güncellemesi",
      whatItBrought: "Geri bildiriminize göre, cihazınızın ayarlarında uzaktan küçük güncellemeler yapılır.",
      bestFor: "Temel amaç",
      families: ["Ayar Güncellemesi"],
    },
    {
      era: "Sonuç Değerlendirmesi",
      whatItBrought: "Yapılan değişikliğin etkisi birlikte değerlendirilir; gerekirse yüz yüze bir randevu önerilir.",
      bestFor: "Sürecin tamamlanması",
      families: ["Sonuç Değerlendirmesi"],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
