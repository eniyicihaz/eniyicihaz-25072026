// Advantages / conversion synthesis for the A&M brand page (/markalar/am).
// Renders through the shared BrandPageAdvantages component (bento layout
// — requires exactly 5 supporting items alongside the hero card). Not new
// information — synthesizes facts already established in
// hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Globe2, Gauge, Wallet, Palette, Factory } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const amAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN A&M?",
  heading: "Kullanıcılar Neden A&M Tercih Ediyor?",
  intro: "A&M'i farklı kılan, WS Audiology grubunun altyapısını erişilebilir bir fiyat noktasında sunmasıdır.",
  hero: {
    icon: Globe2,
    category: "Marka Felsefesi",
    title: "Grup Teknolojisi, Erişilebilir Fiyat",
    description:
      "WS Audiology grubunun (Signia, Widex, Rexton) global üretim altyapısından beslenen, erişilebilir fiyat noktasında bir işitme çözümü sunar.",
  },
  items: [
    {
      icon: Gauge,
      category: "Ürün Yelpazesi",
      title: "Geniş Güç Aralığı",
      description: "P4'ten P12'ye kadar farklı işitme kaybı derecelerine uygun seçenekler sunar.",
    },
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Kulak İçi Kişiye Özel Üretim",
      description: "XTM A4 ile kulak kanalınıza özel üretilen bir yerleşim seçeneği sunar.",
    },
    {
      icon: Wallet,
      category: "Fiyat",
      title: "Erişilebilir Fiyat Noktası",
      description: "Grup teknolojisini daha uygun bir fiyat seviyesinde sunmayı hedefler.",
    },
    {
      icon: Factory,
      category: "Üretim",
      title: "Bengaluru Üretim Merkezi",
      description: "Sivantos India Private Limited tarafından, grup standartlarında üretilir.",
    },
    {
      icon: Globe2,
      category: "Grup",
      title: "WS Audiology Güvencesi",
      description: "Signia, Widex ve Rexton ile aynı global grubun bir parçasıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
  accentColorIconBg: "rgb(243 112 26 / 0.1)",
  accentColorHoverBorder: "rgb(243 112 26 / 0.45)",
};
