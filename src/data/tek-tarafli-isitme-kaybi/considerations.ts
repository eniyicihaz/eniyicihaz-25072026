// "Dikkat Edilmesi Gerekenler" section for the /ihtiyaciniza-gore/
// tek-tarafli-isitme-kaybi page. Reuses the shared BrandPageIdealUser
// component, same technique every prior feature/need page uses —
// visually differentiated from the "Günlük Yaşamdaki Belirtiler" section
// above by using the design system's own --color-warning token (#d97706)
// instead of the page's zinc accent. Item 1 is the most important on
// this page: sudden-onset unilateral loss needs urgent ENT attention,
// not routine scheduling.

import { AlertTriangle, Stethoscope, Gauge, TrendingDown, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const tekTarafliIsitmeKaybiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Tek Taraflı İşitme Kaybı Değerlendirilirken Dikkat Edilmesi Gereken Noktalar",
  intro: "Doğru değerlendirme faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Ani Başlayan Kayıp Acil Değerlendirme Gerektirebilir",
      description: "Ani gelişen tek taraflı işitme kaybı, vakit kaybetmeden bir kulak burun boğaz uzmanına başvurmayı gerektirebilir.",
      suggestedFamilies: ["Acil KBB Değerlendirmesi"],
    },
    {
      icon: Stethoscope,
      title: "Altta Yatan Nedenin Araştırılması Önemlidir",
      description: "Tek taraflı işitme kaybının birçok farklı nedeni olabilir; kapsamlı bir KBB değerlendirmesi önerilir.",
      suggestedFamilies: ["KBB Değerlendirmesi"],
    },
    {
      icon: Gauge,
      title: "Sistem Seçimi Kayıp Derecesine Göre Değişir",
      description: "CROS mu, BiCROS mu yoksa başka bir seçenek mi uygun olduğu, iyi duyan kulağınızın durumuna göre değişir.",
      suggestedFamilies: ["Kişiye Özel Sistem Seçimi"],
    },
    {
      icon: TrendingDown,
      title: "İyi Duyan Kulakta da Zamanla Değişim Olabilir",
      description: "İyi duyan kulağın işitme durumu da zamanla değişebilir; düzenli takip her iki kulak için önemlidir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
    {
      icon: Users,
      title: "Uyum Süreci Zaman Alabilir",
      description: "Kablosuz aktarım sistemlerine alışmak, bazı kullanıcılar için belirli bir uyum süreci gerektirebilir.",
      suggestedFamilies: ["Kademeli Uyum Süreci"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
