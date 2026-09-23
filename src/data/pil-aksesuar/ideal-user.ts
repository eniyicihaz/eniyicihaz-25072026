// "Pil ve Aksesuar Seçenekleri Kimler İçin Uygundur?" section for the
// /servis-bakim/pil-aksesuar page. Reuses the shared
// BrandPageIdealUser component in its original candidacy sense.

import { Battery, BatteryCharging, Package, Plane, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const pilAksesuarIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUNDUR?",
  heading: "Pil ve Aksesuar Seçenekleri Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller, pil ve aksesuar ihtiyaçlarının sıkça ortaya çıktığı kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Battery,
      title: "Çinko-Hava Pil Kullanan Kullanıcılar",
      description: "Cihazının doğru pil boyutunu ve düzenli tedarikini merak eden kullanıcılar için pil seçenekleri anlatılır.",
      suggestedFamilies: ["Çinko-Hava Pil"],
    },
    {
      icon: BatteryCharging,
      title: "Şarjlı Sisteme Geçmek İsteyenler",
      description: "Pil değiştirme zahmetinden kurtulmak isteyen kullanıcılar için şarjlı sistem seçeneği değerlendirilebilir.",
      suggestedFamilies: ["Şarjlı Sistem"],
    },
    {
      icon: Package,
      title: "Yedek Parça İhtiyacı Olanlar",
      description: "Kulak ucu, filtre veya tutucu klips gibi küçük parçalara ihtiyaç duyan kullanıcılar için yedek stok bulunur.",
      suggestedFamilies: ["Yedek Parça"],
    },
    {
      icon: Plane,
      title: "Sık Seyahat Edenler",
      description: "Taşınabilir şarj kutusu veya yedek pil ihtiyacı olan, sık seyahat eden kullanıcılar için pratik seçenekler sunulur.",
      suggestedFamilies: ["Seyahat Aksesuarları"],
    },
    {
      icon: RefreshCcw,
      title: "Mevcut Aksesuarını Yenilemek İsteyenler",
      description: "Saklama kutusu veya temizlik kiti eskiyen kullanıcılar için yenileme seçenekleri değerlendirilebilir.",
      suggestedFamilies: ["Aksesuar Yenileme"],
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorIconBg: "rgb(202 138 4 / 0.1)",
};
