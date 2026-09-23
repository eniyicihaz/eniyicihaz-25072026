// "Dikkat Edilmesi Gerekenler" section for the /teknolojiler/
// gurultu-engelleme page. Reuses the shared BrandPageIdealUser component,
// same technique every /isitme-cihazlari/* and /teknolojiler/* feature
// page uses — visually differentiated from the "Kimler İçin Uygun"
// section above by using the design system's own --color-warning token
// (#d97706) instead of the page's fuchsia accent, so the two sections
// read as distinct despite sharing markup.

import { AlertTriangle, Battery, Gauge, Wrench, SlidersHorizontal } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const gurultuEngellemeConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Gürültü Engellemeli Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Gürültü engelleme, dinleme konforu açısından güçlü bir seçenektir; yine de göz önünde bulundurulması gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Konuşma Sesi de Hafifçe Etkilenebilir",
      description: "Gürültü azaltma bazı durumlarda konuşma sesinin bir kısmını da hafifçe etkileyebilir; ayar dengesi önemlidir.",
      suggestedFamilies: ["Dengeli Ayarlanmış Modeller"],
    },
    {
      icon: Battery,
      title: "Pil Tüketimini Artırabilir",
      description: "Sürekli sinyal analizi, bazı modellerde pil tüketimini bir miktar artırabilir.",
      suggestedFamilies: ["Verimli İşlemcili Modeller"],
    },
    {
      icon: Gauge,
      title: "Etkinlik Gürültü Türüne Göre Değişir",
      description: "Sabit gürültülerde daha etkili olabilirken, değişken veya konuşma benzeri gürültülerde etkinlik azalabilir.",
      suggestedFamilies: ["Gelişmiş Sınıflandırmalı Modeller"],
    },
    {
      icon: Wrench,
      title: "Kişiye Özel Ayar Gerektirir",
      description: "Gürültü engelleme seviyesinin işitme profilinize göre bir odyometrist tarafından ayarlanması önemlidir.",
      suggestedFamilies: ["Profesyonel Ayar"],
    },
    {
      icon: SlidersHorizontal,
      title: "Aşırı Azaltma Doğallığı Etkileyebilir",
      description: "Çok yüksek seviyede gürültü azaltma, ses doğallığını bir miktar etkileyebilir; dengeli bir ayar önerilir.",
      suggestedFamilies: ["Dengeli Program Ayarları"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
