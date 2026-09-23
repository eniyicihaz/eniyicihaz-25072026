// "Kimler İçin Uygundur?" profile grid for the /teknolojiler/
// konusma-odakli page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Users, Utensils, Presentation, MessageCircle, Ear } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const konusmaOdakliIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Konuşma Odaklı Cihazlar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Users,
      title: "Kalabalık Sohbetlerde Zorlananlar",
      description: "Birden fazla kişinin konuştuğu ortamlarda karşısındaki kişiyi takip etmekte zorlanan kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["Yönlü Mikrofonlu Modeller"],
    },
    {
      icon: Utensils,
      title: "Restoran ve Kafe Ortamında Sosyalleşenler",
      description: "Gürültülü restoran ve kafe ortamlarında karşılıklı sohbeti takip etmeyi kolaylaştırır.",
      suggestedFamilies: ["Otomatik Adaptif Yönlü Modeller"],
    },
    {
      icon: Presentation,
      title: "Toplantı ve Sunumlara Sık Katılanlar",
      description: "Belirli bir konuşmacıya odaklanmak isteyen iş ortamındaki kullanıcılar için uygundur.",
      suggestedFamilies: ["Sabit Yönlü Odaklanmalı Modeller"],
    },
    {
      icon: MessageCircle,
      title: "Karşılıklı Sohbeti Önceliklendirenler",
      description: "Bire bir sohbetlerde karşısındaki kişinin sesini net duymayı önceliklendiren kullanıcılar için değerlendirilir.",
      suggestedFamilies: ["Binaural Senkronize Modeller"],
    },
    {
      icon: Ear,
      title: "Çift Taraflı Cihaz Kullanan Kullanıcılar",
      description: "İki kulakta da cihaz kullanan kişilerde binaural senkronizasyon avantajı daha belirgin şekilde hissedilir.",
      suggestedFamilies: ["Binaural Senkronize Modeller"],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
};
