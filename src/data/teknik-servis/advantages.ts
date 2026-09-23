// "Avantajları" bento section for the /servis-bakim/teknik-servis
// page — framed as the genuine advantages of the clinic's repair
// service. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { Wrench, PackageSearch, ShieldCheck, Truck, Send, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const teknikServisAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Teknik Servisimizin Sunduğu Avantajlar",
  intro: "Yetkili bir teknik servis sürecini tercih etmenin nedenleri.",
  hero: {
    icon: Wrench,
    category: "Yerinde İlk Değerlendirme",
    title: "Sorununuz Önce Kliniğimizde Teşhis Edilir",
    description: "Birçok basit sorun, cihazınızı üreticiye göndermeden önce kliniğimizde teşhis edilip çözülebilir.",
  },
  items: [
    {
      icon: PackageSearch,
      category: "Şeffaf Teşhis",
      title: "Sorununuz Açıkça Sizinle Paylaşılır",
      description: "Teşhis sonrası, sorunun ne olduğu ve önerilen çözüm sizinle açıkça paylaşılır.",
    },
    {
      icon: ShieldCheck,
      category: "Orijinal Parça",
      title: "Onarımlarda Orijinal Yedek Parça Kullanılır",
      description: "Kapsamlı onarımlar, yetkili servis ağı üzerinden orijinal yedek parçalarla yapılır.",
    },
    {
      icon: Truck,
      category: "Yetkili Servis Ağı",
      title: "Gerektiğinde Üretici Servisine Yönlendirme",
      description: "Yerinde çözülemeyen sorunlar için cihazınız güvenilir bir yetkili servis ağına yönlendirilir.",
    },
    {
      icon: Send,
      category: "Takip Edilebilirlik",
      title: "Onarım Sürecinizi Takip Edebilirsiniz",
      description: "Cihazınızın onarım sürecindeki durumu hakkında bilgi alabilirsiniz.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Teşhis",
      title: "İlk Teşhis Herhangi Bir Ücret Talep Etmez",
      description: "Kliniğimizdeki ilk teşhis değerlendirmesi, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorIconBg: "rgb(220 38 38 / 0.1)",
  accentColorHoverBorder: "rgb(220 38 38 / 0.45)",
};
