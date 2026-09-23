// Advantages / conversion synthesis for the Beltone brand page
// (/markalar/beltone). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Brain, Bluetooth, Layers, Wallet, Landmark } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const beltoneAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN BELTONE?",
  heading: "Kullanıcılar Neden Beltone Tercih Ediyor?",
  intro: "Beltone'u farklı kılan, 85 yılı aşkın Amerikan mirasını ve güncel yapay zekâ teknolojisini bir arada sunuyoruz.",
  hero: {
    icon: Brain,
    category: "Marka Felsefesi",
    title: "Envision ile Yapay Zekâ Destekli İşleme",
    description:
      "Ortamı sürekli izleyen ve değişen ses ortamlarına otomatik uyum sağlayan DNN tabanlı işleme sunar.",
  },
  items: [
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Bluetooth LE Audio / Auracast",
      description: "Boost Max S ile desteklenen, uyumlu yayın kaynaklarına doğrudan bağlanma imkânı sunar.",
    },
    {
      icon: Layers,
      category: "Ürün Yelpazesi",
      title: "Envision'dan Boost Max S'e",
      description: "Farklı ihtiyaç ve işitme kaybı derecelerine uygun geniş bir ürün ailesi sunar.",
    },
    {
      icon: Wallet,
      category: "Fiyat",
      title: "Commence ile Erişilebilirlik",
      description: "Güncel teknolojiyi daha uygun bir fiyat noktasında sunmayı hedefler.",
    },
    {
      icon: Landmark,
      category: "Miras",
      title: "1940'tan Bu Yana Amerikan Mirası",
      description: "Sektörün en köklü Amerikan işitme cihazı markalarından biridir.",
    },
    {
      icon: Brain,
      category: "Grup",
      title: "GN Grubu Güvencesi",
      description: "2000 yılından bu yana ReSound ile aynı global grubun bir parçasıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
  accentColorIconBg: "rgb(27 56 100 / 0.1)",
  accentColorHoverBorder: "rgb(27 56 100 / 0.45)",
};
