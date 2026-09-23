// "Dikkat Edilmesi Gerekenler" section for the /ihtiyaciniza-gore/
// yaslilar-icin-cihazlar page. Reuses the shared BrandPageIdealUser
// component, same technique every prior feature/need page uses —
// visually differentiated from the "Günlük Yaşamdaki Belirtiler" section
// above by using the design system's own --color-warning token (#d97706)
// instead of the page's yellow accent. Item 1 is the most important on
// this page: sudden-onset loss is a different, urgent scenario from the
// gradual, age-related change this page otherwise covers.

import { AlertTriangle, Stethoscope, Hand, Users, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yaslilarIcinCihazlarConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Yaşlı Kullanıcılar İçin Cihaz Değerlendirilirken Dikkat Edilmesi Gereken Noktalar",
  intro: "Doğru değerlendirme faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Ani Başlayan Kayıp Rutin Değerlendirilmemelidir",
      description: "Ani gelişen işitme kaybı, kademeli yaşa bağlı kayıptan farklıdır ve vakit kaybetmeden bir kulak burun boğaz uzmanına başvurulmalıdır.",
      suggestedFamilies: ["Acil KBB Değerlendirmesi"],
    },
    {
      icon: Stethoscope,
      title: "Eşlik Eden Sağlık Durumları Değerlendirmeye Dahil Edilmelidir",
      description: "Diyabet veya kalp-damar hastalıkları gibi durumlar işitme sağlığını etkileyebilir; genel sağlık durumunun da göz önünde bulundurulması önemlidir.",
      suggestedFamilies: ["Kapsamlı Değerlendirme"],
    },
    {
      icon: Hand,
      title: "El Becerisi Cihaz Seçimini Etkileyebilir",
      description: "Artrit gibi durumlarda küçük parçaları tutmak zorlaşabilir; bu durumda daha kolay kullanılabilir modeller tercih edilebilir.",
      suggestedFamilies: ["Kolay Kullanımlı Modeller"],
    },
    {
      icon: Users,
      title: "Aile Bireylerinin Sürece Dahil Olması Faydalı Olabilir",
      description: "Cihaza uyum sürecinde aile desteği, kullanım alışkanlığının yerleşmesine yardımcı olabilir.",
      suggestedFamilies: ["Aile Destekli Sistemler"],
    },
    {
      icon: RefreshCcw,
      title: "Düzenli Kontrol ve Bakım Önemlidir",
      description: "İşitme durumu zamanla değişebilir; periyodik kontroller cihazın doğru ayarlı kalmasını sağlamaya yardımcı olur.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
