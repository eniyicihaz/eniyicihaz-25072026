// "Cihaz Ömrünü Kısaltan Sıkça Görülen Nedenler" section for the
// /neden-orijinal/uzun-omurlu-cihazlar page. Reuses the shared
// BrandPageIdealUser component, same technique used on Güvenilir
// Teknoloji — repurposed into risk factors that shorten device lifespan
// rather than hearing-loss symptoms or authenticity red flags.

import { Droplets, CalendarX, PackageX, Box, BatteryWarning } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uzunOmurluCihazlarIdealUser: BrandPageIdealUserContent = {
  badge: "CİHAZ ÖMRÜNÜ KISALTAN NEDENLER",
  heading: "Cihaz Ömrünü Kısaltan Sıkça Görülen Nedenler",
  intro: "Aşağıdaki alışkanlıklar, bir işitme cihazının kullanım ömrünü sıkça kısaltan etkenler arasında yer alır.",
  profiles: [
    {
      icon: Droplets,
      title: "Nem ve Ter Birikimine Karşı Yetersiz Bakım",
      description: "Düzenli temizlenmeyen cihazlarda nem birikimi, bileşenlerin ömrünü kısaltabilir.",
      suggestedFamilies: ["Düzenli Temizlik"],
    },
    {
      icon: CalendarX,
      title: "Periyodik Kontrollerin Atlanması",
      description: "Düzenli kontrole gelinmeyen cihazlarda küçük sorunlar fark edilmeden büyüyebilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
    {
      icon: PackageX,
      title: "Orijinal Olmayan Yedek Parça Kullanımı",
      description: "Taklit veya uyumsuz yedek parçalar, cihazın performansını ve ömrünü olumsuz etkileyebilir.",
      suggestedFamilies: ["Orijinal Yedek Parça"],
    },
    {
      icon: Box,
      title: "Uygun Olmayan Saklama Koşulları",
      description: "Nemli veya sıcak ortamlarda saklanan cihazlar, zamanla performans kaybı yaşayabilir.",
      suggestedFamilies: ["Doğru Saklama Koşulları"],
    },
    {
      icon: BatteryWarning,
      title: "Pil veya Şarj Sisteminin Yanlış Kullanımı",
      description: "Uygunsuz şarj alışkanlıkları, pilin ve cihazın ömrünü kısaltabilir.",
      suggestedFamilies: ["Doğru Şarj Alışkanlıkları"],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
};
