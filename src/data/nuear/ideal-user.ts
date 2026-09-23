// "Kimler İçin Uygun" profile grid for the NuEar brand page
// (/markalar/nuear). Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça önerilir" tone, never "kesin
// sizin içindir" (PRINCIPLES.md §4).

import { Activity, ShieldCheck, Smartphone, Cpu, Palette } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const nuearIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "NuEar Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Activity,
      title: "Sağlığını ve Aktivitesini Takip Etmek İsteyenler",
      description: "Hear Circle'ın adım ve aktivite takibi özellikleri nedeniyle sıkça önerilir.",
      suggestedFamilies: ["NXG AI"],
    },
    {
      icon: ShieldCheck,
      title: "Düşme Riski Olan Kullanıcılar ve Aileleri",
      description: "Düşme anında bildirim gönderebilen özellik nedeniyle sıkça değerlendirilir.",
      suggestedFamilies: ["NXG AI", "NE Series"],
    },
    {
      icon: Smartphone,
      title: "Uzaktan Destek İsteyenler",
      description: "Kliniğe gitmeden uzaktan ince ayar almak isteyen kullanıcılar için sıkça önerilir.",
      suggestedFamilies: ["NXG AI", "Circa"],
    },
    {
      icon: Cpu,
      title: "Uygun Fiyatlı Bağlantı Arayanlar",
      description: "Temel bağlantı özelliklerini daha uygun bir seviyede isteyenler için sıkça değerlendirilir.",
      suggestedFamilies: ["NOW iQ"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi yerleşimi tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Miniscopic Synergy iQ"],
    },
  ],
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
  accentColorIconBg: "rgb(228 0 43 / 0.1)",
};
