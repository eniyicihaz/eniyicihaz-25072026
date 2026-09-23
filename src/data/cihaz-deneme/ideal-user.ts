// "Cihaz Deneme Kimler İçin Uygundur?" section for the /uygulama-ayar/
// cihaz-deneme page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense.

import { HandCoins, Scale, Building2, Users, Repeat2 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazDenemeIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Cihaz Deneme Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, cihaz deneme sürecinin sıkça tercih edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: HandCoins,
      title: "Karar Vermeden Önce Emin Olmak İsteyenler",
      description: "Satın almadan önce cihazın kendisine uygun olduğundan emin olmak isteyen kullanıcılar için deneme süreci önerilir.",
      suggestedFamilies: ["Karar Destek Denemesi"],
    },
    {
      icon: Scale,
      title: "Birden Fazla Modeli Karşılaştırmak İsteyenler",
      description: "Farklı modeller arasında karar vermekte zorlanan kullanıcılar için karşılaştırmalı deneme değerlendirilebilir.",
      suggestedFamilies: ["Model Karşılaştırma Denemesi"],
    },
    {
      icon: Building2,
      title: "İş veya Sosyal Ortamda Test Etmek İsteyenler",
      description: "Cihazın kendi iş veya sosyal ortamında nasıl performans göstereceğini merak eden kullanıcılar için deneme faydalıdır.",
      suggestedFamilies: ["Ortam Bazlı Deneme"],
    },
    {
      icon: Users,
      title: "Ailesi Adına Karar Sürecine Destek Olanlar",
      description: "Yaşlı bir aile bireyinin cihaz seçim sürecine destek olan kullanıcılar için deneme süreci karar vermeyi kolaylaştırabilir.",
      suggestedFamilies: ["Aile Destekli Karar Süreci"],
    },
    {
      icon: Repeat2,
      title: "Önceki Cihazından Memnun Olmayanlar",
      description: "Daha önce kullandığı cihazdan memnun kalmayan ve yeni bir modeli denemeden karar vermek istemeyen kullanıcılar için deneme önerilir.",
      suggestedFamilies: ["Yeniden Deneme"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
};
