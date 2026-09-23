// "Avantajları" bento section for the /neden-orijinal/
// uzun-omurlu-cihazlar page — framed as the advantages of the
// components/maintenance/parts approach that keeps original devices
// running longer, rather than a generic device-feature list. Renders
// through the shared BrandPageAdvantages component — items must be
// exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Gem, Wrench, PackageCheck, RefreshCw, PiggyBank, Users } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const uzunOmurluCihazlarAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Uzun Ömürlü Bir Cihaza Sahip Olmanın Avantajları",
  intro: "Kaliteli bileşenleri ve düzenli bakımı ön planda tutan bir yaklaşımı sıkça önerilen hâle getiren nedenler.",
  hero: {
    icon: Gem,
    category: "Kaliteli Bileşenler",
    title: "Orijinal Bileşenlerle Uzun Ömür",
    description: "Sertifikalı ve test edilmiş bileşenler, cihazın uzun yıllar güvenilir çalışmasına katkı sağlar.",
  },
  items: [
    {
      icon: Wrench,
      category: "Düzenli Bakım",
      title: "Periyodik Bakımla Performans Korunur",
      description: "Düzenli temizlik ve kontrol, cihazın ömrünü uzatmaya yardımcı olur.",
    },
    {
      icon: PackageCheck,
      category: "Yedek Parça",
      title: "Orijinal Yedek Parçaya Uzun Vadeli Erişim",
      description: "Yetkili kanaldan alınan cihazlarda orijinal yedek parçalara yıllarca erişim sağlanabilir.",
    },
    {
      icon: RefreshCw,
      category: "Güncel Yazılım",
      title: "Yazılım Güncellemeleriyle Güncel Kalır",
      description: "Düzenli yazılım güncellemeleri, cihazın uzun süre güncel ve performanslı kalmasına yardımcı olur.",
    },
    {
      icon: PiggyBank,
      category: "Uzun Vadeli Tasarruf",
      title: "Daha Az Sıklıkla Yenileme İhtiyacı",
      description: "Uzun ömürlü bir cihaz, daha az sıklıkla yenileme ihtiyacı doğurarak uzun vadede tasarruf sağlayabilir.",
    },
    {
      icon: Users,
      category: "Uzman Takibi",
      title: "Düzenli Uzman Takibiyle Erken Müdahale",
      description: "Periyodik kontroller, olası sorunların erken fark edilmesine ve cihaz ömrünün korunmasına yardımcı olur.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
  accentColorHoverBorder: "rgb(5 150 105 / 0.45)",
};
