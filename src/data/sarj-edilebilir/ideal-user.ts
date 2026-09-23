// "Kimler İçin Uygundur?" profile grid for the /isitme-cihazlari/
// sarj-edilebilir page. Renders through the shared BrandPageIdealUser
// component. Descriptions stay in "sıkça değerlendirilir" tone, never
// "kesin sizin içindir".

import { Hand, Baby, Clock, Leaf, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sarjEdilebilirIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Şarj Edilebilir Cihazlar Kimler İçin Uygundur?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Hand,
      title: "El Becerisi Sınırlı Kullanıcılar",
      description: "Küçük pilleri değiştirmekte zorlanan kullanıcılar için günlük kullanımı belirgin şekilde kolaylaştırır.",
      suggestedFamilies: ["Şarjlı BTE / RIC", "Şarjlı ITE"],
    },
    {
      icon: Baby,
      title: "Çocuk Kullanıcılar",
      description: "Küçük pillerin yutulma riskini ortadan kaldırdığından çocuklarda sıkça tercih edilir.",
      suggestedFamilies: ["Şarjlı BTE"],
    },
    {
      icon: Clock,
      title: "Yoğun Tempolu Yaşam Sürenler",
      description: "Pil stoku taşıma ve değiştirme zahmeti olmadan gün boyu kesintisiz kullanım sağlar.",
      suggestedFamilies: ["Şarjlı RIC"],
    },
    {
      icon: Leaf,
      title: "Çevre Bilinci Yüksek Kullanıcılar",
      description: "Tek kullanımlık pillere kıyasla daha az atık üretir.",
      suggestedFamilies: ["Şarjlı Modeller"],
    },
    {
      icon: Users,
      title: "Yaşlı Kullanıcılar ve Bakım Verenler",
      description: "Pil değişimi takibi gerektirmediğinden bakım veren yakınlar için de günlük rutini kolaylaştırır.",
      suggestedFamilies: ["Şarjlı BTE", "Şarjlı ITE"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
};
