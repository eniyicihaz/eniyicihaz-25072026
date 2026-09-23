// "Dikkat Edilmesi Gerekenler" section for the /rehberler/
// cihaz-secim-rehberi page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). The first item is this page's key
// honesty flag: price and popularity are not reliable substitutes for
// a proper hearing test.

import { AlertTriangle, Star, ClipboardCheck, Users, Repeat } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazSecimRehberiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Doğru seçim faydalı bir süreçtir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: ClipboardCheck,
      title: "Seçimden Önce Mutlaka İşitme Testi Yaptırın",
      description: "Cihaz seçimi, ancak işitme kaybınızın derecesi ve türü netleştikten sonra sağlıklı bir şekilde yapılabilir.",
      suggestedFamilies: ["Önce Değerlendirme"],
    },
    {
      icon: AlertTriangle,
      title: "En Pahalı Cihaz Her Zaman En Uygun Değildir",
      description: "Fiyat, cihazın size uygunluğunun tek göstergesi değildir; ihtiyacınızı karşılayan model, bütçenizdeki en gelişmiş model olmayabilir.",
      suggestedFamilies: ["Gerçekçi Beklenti"],
    },
    {
      icon: Star,
      title: "Yorumlar Yerine Kendi İhtiyacınıza Odaklanın",
      description: "Başka bir kullanıcı için uygun olan bir model, sizin işitme profilinize veya yaşam tarzınıza uygun olmayabilir.",
      suggestedFamilies: ["Kişiye Özel Değerlendirme"],
    },
    {
      icon: Repeat,
      title: "Deneme Fırsatından Yararlanın",
      description: "Karar vermeden önce cihazı gerçek yaşam koşullarında deneme fırsatı, doğru seçim yapmanıza yardımcı olabilir.",
      suggestedFamilies: ["Deneme Süreci"],
    },
    {
      icon: Users,
      title: "Yakın Çevrenizin Görüşü Faydalı Olsa da Son Karar Sizindir",
      description: "Aile ve yakın çevrenizin görüşü değerli olsa da, günlük kullanıcı siz olduğunuz için son kararı sizin vermeniz önemlidir.",
      suggestedFamilies: ["Kullanıcı Odaklı Karar"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
