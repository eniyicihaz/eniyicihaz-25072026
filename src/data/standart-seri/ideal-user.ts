// "Standart Seri Kimler İçin Uygun?" section for the /segmentler/
// standart-seri page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense (like Premium Seri and every devicesMega
// page), not the red-flag/risk-list repurposing used throughout the
// "Neden Orijinal" series.

import { Home, Wallet, Ear, Users, Smartphone } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const standartSeriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN?",
  heading: "Standart Seri Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller, standart serinin sıkça değerlendirildiği kullanıcı gruplarını yansıtır; size en uygun seri her zaman bir ihtiyaç değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Home,
      title: "Günlük Yaşamda Genellikle Sakin Ortamlarda Bulunanlar",
      description: "Ev, ofis gibi görece sakin ortamlarda vakit geçiren kullanıcılar için standart seri sıkça yeterli olabilir.",
      suggestedFamilies: ["Günlük Kullanım Modelleri"],
    },
    {
      icon: Wallet,
      title: "Dengeli Bir Yatırım Arayanlar",
      description: "Fiyat-performans dengesini önceliklendiren kullanıcılar için standart seri uygun bir seçenek olabilir.",
      suggestedFamilies: ["Fiyat-Performans Modelleri"],
    },
    {
      icon: Ear,
      title: "İlk Kez İşitme Cihazı Kullanacaklar",
      description: "İşitme cihazı deneyimine yeni başlayan kullanıcılar için standart seri, dengeli bir başlangıç noktası olabilir.",
      suggestedFamilies: ["Kolay Kullanımlı Modeller"],
    },
    {
      icon: Users,
      title: "Ara Sıra Kalabalık Ortamlarda Bulunanlar",
      description: "Zaman zaman kalabalık ortamlarda bulunan ancak bunun günlük rutinin büyük bölümünü oluşturmadığı kullanıcılar için standart seri değerlendirilebilir.",
      suggestedFamilies: ["Temel Yönlü Mikrofon Desteği"],
    },
    {
      icon: Smartphone,
      title: "Temel Bağlantı Özellikleri Yeterli Olan Kullanıcılar",
      description: "Telefon görüşmeleri gibi temel bağlantı ihtiyaçları olan kullanıcılar için standart seri yeterli olabilir.",
      suggestedFamilies: ["Temel Kablosuz Bağlantı"],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorIconBg: "rgb(2 132 199 / 0.1)",
};
