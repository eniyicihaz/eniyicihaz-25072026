// "Dikkat Edilmesi Gerekenler" section for the /teknolojiler/
// konusma-odakli page. Reuses the shared BrandPageIdealUser component,
// same technique every /isitme-cihazlari/* and /teknolojiler/* feature
// page uses — visually differentiated from the "Kimler İçin Uygun"
// section above by using the design system's own --color-warning token
// (#d97706) instead of the page's orange accent, so the two sections read
// as distinct despite sharing markup.

import { AlertTriangle, Battery, Gauge, Wrench, Car } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const konusmaOdakliConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Konuşma Odaklı Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Konuşma odaklanması, sohbet netliği açısından güçlü bir seçenektir; yine de göz önünde bulundurulması gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Yan ve Arka Sesler Azalabilir",
      description: "Yönlü odaklanma aktifken, önden gelmeyen sesler (örneğin arkadan seslenen biri) daha az duyulabilir.",
      suggestedFamilies: ["Otomatik Geçişli Modeller"],
    },
    {
      icon: Battery,
      title: "Pil Tüketimini Artırabilir",
      description: "Çoklu mikrofon işleme ve binaural senkronizasyon, bazı modellerde pil tüketimini artırabilir.",
      suggestedFamilies: ["Verimli İşlemcili Modeller"],
    },
    {
      icon: Gauge,
      title: "Etkinlik Ortama Göre Değişir",
      description: "Yönlü odaklanmanın faydası, gürültü seviyesine ve konuşmacının konumuna göre değişebilir.",
      suggestedFamilies: ["Adaptif Yönlü Modeller"],
    },
    {
      icon: Wrench,
      title: "Kişiye Özel Ayar Gerektirir",
      description: "Odaklanma yoğunluğunun işitme profilinize göre bir odyometrist tarafından ayarlanması önemlidir.",
      suggestedFamilies: ["Profesyonel Ayar"],
    },
    {
      icon: Car,
      title: "Araç Kullanırken Dikkat Gerektirir",
      description: "Yönlü odaklanma araç içi ortamlarda çevresel farkındalığı azaltabilir; sürüş sırasında dikkatli olunmalıdır.",
      suggestedFamilies: ["Ortam Farkındalıklı Modeller"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
