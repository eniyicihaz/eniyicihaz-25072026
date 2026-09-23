// "Yenileme Hakkı Kimler İçin Önemlidir?" section for the
// /sgk/yenileme-hakki page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { Clock, Wrench, TrendingUp, Baby, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const yenilemeHakkiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Yenileme Hakkı Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, yenileme hakkının sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Clock,
      title: "Cihazını Uzun Süredir Kullananlar",
      description: "Mevcut cihazını uzun süredir kullanan ve yenileme zamanının gelip gelmediğini merak eden kullanıcılar için önemlidir.",
      suggestedFamilies: ["Standart Yenileme"],
    },
    {
      icon: Wrench,
      title: "Cihazı Arızalanan Kullanıcılar",
      description: "Cihazı onarılamaz şekilde arızalanan kullanıcılar için erken yenileme süreci önem taşır.",
      suggestedFamilies: ["Erken Yenileme"],
    },
    {
      icon: TrendingUp,
      title: "İşitme Kaybı İlerleyen Kullanıcılar",
      description: "İşitme kaybı zamanla ilerleyen kullanıcılar için mevcut cihazın yeterliliği yeniden değerlendirilmelidir.",
      suggestedFamilies: ["İşitme Kaybının İlerlemesi"],
    },
    {
      icon: Baby,
      title: "Çocuk Hastaların Aileleri",
      description: "Çocuklarda büyüme ve gelişim nedeniyle cihaz ihtiyacı zamanla değişebilir.",
      suggestedFamilies: ["Çocuklarda SGK"],
    },
    {
      icon: RefreshCcw,
      title: "Yenileme Sürecini Merak Edenler",
      description: "Yenileme hakkının ne zaman doğduğunu ve nasıl işlediğini önceden öğrenmek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Genel Bilgi"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
};
