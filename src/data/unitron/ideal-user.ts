// "Kimler İçin Uygun" profile grid for the Unitron brand page
// (/markalar/unitron). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Sparkles, Bluetooth, Volume2, Wallet, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const unitronIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Unitron Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Users,
      title: "Grup Konuşmalarında Zorlananlar",
      description: "AutoFocus 360'ın konuşma yönünü belirlemeye yardımcı olan yaklaşımı nedeniyle sıkça önerilir.",
      suggestedFamilies: ["Blu", "Smile"],
    },
    {
      icon: Sparkles,
      title: "Güncel Teknolojiye Değer Verenler",
      description: "Smile platformunun en gelişmiş özellik setini önceliklendirenler için sıkça değerlendirilir.",
      suggestedFamilies: ["Smile"],
    },
    {
      icon: Bluetooth,
      title: "Bağlantı Özelliklerini Önceliklendirenler",
      description: "Sonova PRISM çipinin sunduğu geniş bağlantı özellikleri için sıkça önerilir.",
      suggestedFamilies: ["Blu"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Stride'ın geniş güç aralığı, daha güçlü amplifikasyon ihtiyacı olanlar için sıkça değerlendirilir.",
      suggestedFamilies: ["Stride"],
    },
    {
      icon: Wallet,
      title: "Giriş Seviyesi Arayanlar",
      description: "Insera'nın temel işleme yaklaşımı, giriş seviyesi bir çözüm arayanlar için sıkça önerilir.",
      suggestedFamilies: ["Insera"],
    },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
  accentColorIconBg: "rgb(28 76 135 / 0.1)",
};
