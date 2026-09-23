// "Premium Seri Kimler İçin Uygun?" section for the /segmentler/
// premium-seri page. Reuses the shared BrandPageIdealUser component in
// its original candidacy sense (like every devicesMega page), not the
// red-flag/risk-list repurposing used throughout the "Neden Orijinal"
// series — this page's subject is tier fit, not trust/authenticity.

import { Users, Smartphone, Sparkles, Briefcase, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const premiumSeriIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN?",
  heading: "Premium Seri Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller, premium serinin sıkça değerlendirildiği kullanıcı gruplarını yansıtır; size en uygun seri her zaman bir ihtiyaç değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Users,
      title: "Kalabalık ve Karmaşık Ortamlarda Çok Vakit Geçirenler",
      description: "Restoran, toplantı gibi zorlu dinleme ortamlarında sıkça bulunan kullanıcılar için gelişmiş ses ayrımı önemli olabilir.",
      suggestedFamilies: ["Gelişmiş Ortam Algılama"],
    },
    {
      icon: Smartphone,
      title: "Çoklu Cihaz Bağlantısı İsteyenler",
      description: "Telefon, bilgisayar ve TV gibi birden fazla cihazla kesintisiz bağlantı önceliklendirenler için premium seri değerlendirilebilir.",
      suggestedFamilies: ["Tam Kablosuz Bağlantı"],
    },
    {
      icon: Sparkles,
      title: "En Güncel Teknolojiyi Önceliklendirenler",
      description: "Piyasadaki en güncel ses işleme teknolojisini deneyimlemek isteyen kullanıcılar için uygun bir seçenektir.",
      suggestedFamilies: ["Yapay Zeka Destekli Ses İşleme"],
    },
    {
      icon: Briefcase,
      title: "Aktif Sosyal ve İş Yaşamı Olanlar",
      description: "Yoğun sosyal etkileşim gerektiren bir yaşam tarzı sürdüren kullanıcılar için ek performans avantajı sağlayabilir.",
      suggestedFamilies: ["Yüksek Performans Modelleri"],
    },
    {
      icon: Gauge,
      title: "En Yüksek Kişiselleştirme İsteyenler",
      description: "Cihazının her yönünü ihtiyacına göre ince ayar yapmak isteyen kullanıcılar için premium seri daha fazla seçenek sunar.",
      suggestedFamilies: ["Kişiselleştirilebilir Modeller"],
    },
  ],
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorIconBg: "rgb(234 179 8 / 0.1)",
};
