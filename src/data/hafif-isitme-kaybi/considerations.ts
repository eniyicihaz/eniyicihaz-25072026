// "Dikkat Edilmesi Gerekenler" section for the /ihtiyaciniza-gore/
// hafif-isitme-kaybi page. Reuses the shared BrandPageIdealUser
// component, same technique every /isitme-cihazlari/* and /teknolojiler/*
// feature page uses — visually differentiated from the "Günlük Yaşamdaki
// Belirtiler" section above by using the design system's own
// --color-warning token (#d97706) instead of the page's pink accent. The
// first item is the most important on this page: an explicit statement
// that self-diagnosis is not appropriate.

import { AlertTriangle, TrendingDown, Stethoscope, Clock, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const hafifIsitmeKaybiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Hafif İşitme Kaybı Değerlendirilirken Dikkat Edilmesi Gereken Noktalar",
  intro: "Erken değerlendirme faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Kendi Kendine Tanı Konulmamalıdır",
      description: "Belirtileriniz hafif işitme kaybına işaret etse de, kesin tanı yalnızca bir odyometri testiyle konulabilir.",
      suggestedFamilies: ["Profesyonel İşitme Testi"],
    },
    {
      icon: TrendingDown,
      title: "Zamanla İlerleyebilir",
      description: "İşitme kaybı, düzenli takip edilmediğinde zamanla ilerleyebilir; periyodik kontrol önemlidir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
    {
      icon: Stethoscope,
      title: "Altta Yatan Nedenin Araştırılması Gerekebilir",
      description: "Bazı işitme kayıplarının altında değerlendirilmesi gereken nedenler olabilir; KBB değerlendirmesi önerilir.",
      suggestedFamilies: ["KBB Değerlendirmesi"],
    },
    {
      icon: Clock,
      title: "Erteleme Uyum Sürecini Zorlaştırabilir",
      description: "Cihazlandırmanın geciktirilmesi, beynin sese uyum sürecini zamanla zorlaştırabilir.",
      suggestedFamilies: ["Erken Değerlendirme"],
    },
    {
      icon: Gauge,
      title: "Cihaz İhtiyacı Zamanla Değişebilir",
      description: "İşitme kaybı ilerledikçe, seçilen cihazın gücü ve özellikleri yeniden değerlendirilebilir.",
      suggestedFamilies: ["Düzenli Cihaz Kontrolü"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
