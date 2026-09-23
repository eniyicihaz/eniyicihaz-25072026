// "Kimler İçin Uygundur?" profile grid for the /teknolojiler/
// yapay-zeka-destekli page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Brain, Users, SlidersHorizontal, Zap, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yapayZekaDestekliIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Yapay Zeka Destekli Cihazlar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Brain,
      title: "Sürekli Değişen Ortamlarda Bulunanlar",
      description: "Ev, ofis, kalabalık ortam gibi farklı ses ortamları arasında sık geçiş yapan kullanıcılar için otomatik ayar büyük kolaylık sağlar.",
      suggestedFamilies: ["Yapay Zeka Destekli RIC / BTE Modelleri"],
    },
    {
      icon: Users,
      title: "Kalabalık ve Gürültülü Ortamda Bulunanlar",
      description: "Restoran, toplantı gibi kalabalık ortamlarda konuşmayı öne çıkarma konusunda yapay zeka destekli modeller sıkça tercih edilir.",
      suggestedFamilies: ["Gelişmiş Sahne Sınıflandırmalı Modeller"],
    },
    {
      icon: SlidersHorizontal,
      title: "Manuel Ayar Yapmak İstemeyenler",
      description: "Program değiştirmek veya ses seviyesini elle ayarlamakla uğraşmak istemeyen kullanıcılar için otomatik optimizasyon uygundur.",
      suggestedFamilies: ["Tam Otomatik Modeller"],
    },
    {
      icon: Zap,
      title: "İlk Kez Cihaz Kullanacak Yetişkinler",
      description: "Karmaşık ayarlarla uğraşmadan doğal bir dinleme deneyimi isteyen yeni kullanıcılar için değerlendirilir.",
      suggestedFamilies: ["Otomatik Optimizasyonlu Modeller"],
    },
    {
      icon: Gauge,
      title: "Teknolojinin En Güncelini Önceliklendirenler",
      description: "En son nesil ses işleme teknolojisini deneyimlemek isteyen kullanıcılar için sıkça değerlendirilir.",
      suggestedFamilies: ["Üst Segment Yapay Zeka Modelleri"],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorIconBg: "rgb(79 70 229 / 0.1)",
};
