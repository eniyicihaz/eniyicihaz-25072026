// "Avantajları" bento section for the /neden-orijinal/orijinal-aksesuar
// page — framed as the advantages of choosing original accessories
// rather than a generic device-feature list. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows.

import { CheckCircle, Sparkles, Volume2, BatteryCharging, ShieldCheck, Truck } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const orijinalAksesuarAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Orijinal Aksesuar Kullanmanın Avantajları",
  intro: "Doğru uyumu ve hijyeni ön planda tutan bir yaklaşımı sıkça önerilen hâle getiren nedenler.",
  hero: {
    icon: CheckCircle,
    category: "Doğru Uyum",
    title: "Cihazınızla Tam Uyumlu Aksesuarlar",
    description: "Orijinal aksesuarlar, cihazınızın modeline özel tasarlanır ve tam performans sağlar.",
  },
  items: [
    {
      icon: Sparkles,
      category: "Hijyen",
      title: "Hijyenik Kullanım Desteği",
      description: "Düzenli değiştirilen orijinal filtreler ve kulak uçları, hijyenik bir kullanım sağlamaya yardımcı olur.",
    },
    {
      icon: Volume2,
      category: "Ses Kalitesi",
      title: "Kesintisiz Ses Kalitesi",
      description: "Orijinal aksesuarlar, cihazın tasarlandığı ses kalitesini korumaya yardımcı olur.",
    },
    {
      icon: BatteryCharging,
      category: "Pil ve Şarj",
      title: "Güvenli Pil ve Şarj Aksesuarları",
      description: "Orijinal piller ve şarj aksesuarları, cihazınıza uygun güç desteği sağlar.",
    },
    {
      icon: ShieldCheck,
      category: "Garanti Uyumu",
      title: "Garantinizi Riske Atmaz",
      description: "Orijinal aksesuar kullanımı, cihazınızın garantisini etkilemez.",
    },
    {
      icon: Truck,
      category: "Kolay Temin",
      title: "Kolay ve Hızlı Temin",
      description: "İhtiyaç duyduğunuz orijinal aksesuarları hızlı bir şekilde temin edebiliyoruz.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorIconBg: "rgb(124 58 237 / 0.1)",
  accentColorHoverBorder: "rgb(124 58 237 / 0.45)",
};
