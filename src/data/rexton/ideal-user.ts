// "Kimler İçin Uygun" profile grid for the Rexton brand page
// (/markalar/rexton). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Bluetooth, Waves, Wallet, Palette } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const rextonIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Rexton Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Bluetooth,
      title: "Güncel Bağlantı Özelliklerini Arayanlar",
      description: "Reach ailesinin bağlantı teknolojisi önceliğiniz ise sıkça değerlendirilen bir seçimdir.",
      suggestedFamilies: ["Reach"],
    },
    {
      icon: Waves,
      title: "Dengeli Bir Çözüm Arayanlar",
      description: "BiCore'un dengeli ses işleme deneyimi için sıkça önerilir.",
      suggestedFamilies: ["BiCore"],
    },
    {
      icon: Wallet,
      title: "Giriş Seviyesi Arayanlar",
      description: "MCore'un sade işleme yaklaşımı, temel ihtiyaçlar için sıkça değerlendirilir.",
      suggestedFamilies: ["MCore"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi bir yerleşim tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["BiCore ITE"],
    },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
  accentColorIconBg: "rgb(199 151 18 / 0.1)",
};
