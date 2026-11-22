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
      description: "Mevcut cihazının 5 yıllık süresinin dolup dolmadığını merak eden kullanıcılar için önemlidir.",
      suggestedFamilies: ["5 Yıllık Süre"],
    },
    {
      icon: Wrench,
      title: "Cihazı Arızalanan Kullanıcılar",
      description: "Cihazı kullanıcı kusuru olmadan arızalanıp onarılamayan kullanıcılar için, sağlık raporuyla süre dolmadan yenileme değerlendirilebilir.",
      suggestedFamilies: ["Süre Dolmadan Yenileme"],
    },
    {
      icon: TrendingUp,
      title: "İşitme Kaybı İlerleyen Kullanıcılar",
      description: "İşitme kaybının ilerlemesi tek başına süre dolmadan yenileme sağlamaz; cihazınızın ayarlarını merkezimizde birlikte değerlendirebiliriz.",
      suggestedFamilies: ["Süre Dolmadan Yenileme Yok"],
    },
    {
      icon: Baby,
      title: "Çocuk Hastaların Aileleri",
      description: "5 yıllık süre çocuklar için de geçerlidir; çocuğun büyümesi nedeniyle cihaz kullanılamıyorsa sağlık raporuyla süre dolmadan yenileme değerlendirilebilir.",
      suggestedFamilies: ["Çocuklarda SGK"],
    },
    {
      icon: RefreshCcw,
      title: "İki Kulağında Cihaz Kullananlar",
      description: "Sağ ve sol kulak cihazlarının MEDULA kayıt tarihleri farklıysa her kulağın süresi ayrı hesaplanır.",
      suggestedFamilies: ["Kulak Bazında Süre"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
};
