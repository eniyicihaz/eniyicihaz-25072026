// Advantages / conversion synthesis for the Maico brand page
// (/markalar/maico). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Landmark, Globe2, Bluetooth, Volume2, Palette } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const maicoAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN MAICO?",
  heading: "Kullanıcılar Neden MAICO Tercih Ediyor?",
  intro: "MAICO'yu farklı kılan özellikleri ve ürün serilerini bir arada sunuyoruz.",
  hero: {
    icon: Landmark,
    category: "Ürün Serileri",
    title: "Farklı Yerleşim Seçenekleri",
    description:
      "Bluetooth'lu, kulak arkası ve kulak içi seçenekleri bulunan serilere sahiptir.",
  },
  items: [
    {
      icon: Globe2,
      category: "Servis",
      title: "Merkezimizde Teknik Servis",
      description: "MAICO cihazları için Darıca'daki merkezimizde teknik servis veriyoruz.",
    },
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Bluetooth Bağlantısı",
      description: "Akıllı telefonlarla kablosuz bağlantı kurabilen model seçenekleri sunar.",
    },
    {
      icon: Volume2,
      category: "Ürün Yelpazesi",
      title: "Geniş Güç Aralığı",
      description: "Kulak arkası serisiyle farklı işitme kaybı derecelerine uygun seçenekler sunar.",
    },
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Kulak İçi Seçenekler",
      description: "Kulak kanalına özel üretilen, sade bir görünüm sunan model seçenekleri sunar.",
    },
    {
      icon: Landmark,
      category: "Miras",
      title: "Berlin Mühendisliği",
      description: "MAICO Diagnostics GmbH, 2005'ten bu yana Berlin merkezli olarak faaliyet gösterir.",
    },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
  accentColorIconBg: "rgb(16 35 63 / 0.1)",
  accentColorHoverBorder: "rgb(16 35 63 / 0.45)",
};
