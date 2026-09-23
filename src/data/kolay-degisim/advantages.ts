// "Avantajları" bento section for the /neden-orijinal/kolay-degisim
// page — framed as the advantages of a transparent exchange process
// rather than a generic device-feature list. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows.

import { RefreshCcw, Headphones, TrendingUp, ShieldCheck, FileCheck, Users } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const kolayDegisimAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Kolay Değişim Güvencesinin Avantajları",
  intro: "Şeffaflığı ve öngörülebilirliği ön planda tutan bir yaklaşımı sıkça önerilen hâle getiren nedenler.",
  hero: {
    icon: RefreshCcw,
    category: "Net Değişim Koşulları",
    title: "Şeffaf ve Öngörülebilir Değişim Süreci",
    description: "Değişim hakkının kapsamı ve süresi, satın alma öncesinde açıkça paylaşılır.",
  },
  items: [
    {
      icon: Headphones,
      category: "Deneme Sonrası Değerlendirme",
      title: "Demo Sonrası Karar Değiştirme İmkânı",
      description: "Deneme sürecinde beklentilerinizi karşılamayan bir cihaz için değişim değerlendirilebilir.",
    },
    {
      icon: TrendingUp,
      category: "İhtiyaç Değişikliği",
      title: "İşitme Durumunuz Değiştiğinde Model Geçişi",
      description: "İşitme kaybınız ilerlediğinde veya ihtiyaçlarınız değiştiğinde, uygun bir model geçişi değerlendirilebilir.",
    },
    {
      icon: ShieldCheck,
      category: "Üretim Hatası Güvencesi",
      title: "Üretim Kaynaklı Sorunlarda Hızlı Çözüm",
      description: "Üretim kaynaklı bir sorun tespit edildiğinde, yetkili kanaldan hızlı bir değişim süreci işletilir.",
    },
    {
      icon: Users,
      category: "Uzman Rehberliği",
      title: "Değişim Sürecinde Uzman Desteği",
      description: "Değişim sürecinde size en uygun alternatifi belirlemenize yardımcı oluyoruz.",
    },
    {
      icon: FileCheck,
      category: "Belgeli Süreç",
      title: "Her Adımı Belgelenen Değişim Süreci",
      description: "Değişim süreci, her adımda belgelenerek şeffaf bir şekilde yürütülür.",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
  accentColorIconBg: "rgb(225 29 72 / 0.1)",
  accentColorHoverBorder: "rgb(225 29 72 / 0.45)",
};
