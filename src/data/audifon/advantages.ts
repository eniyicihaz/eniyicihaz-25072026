// Advantages / conversion synthesis for the Audifon brand page
// (/markalar/audifon). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { HeartPulse, Cpu, Factory, Layers, Palette } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const audifonAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN AUDIFON?",
  heading: "Kullanıcılar Neden Audifon Tercih Ediyor?",
  intro: "Audifon'u farklı kılan tinnitus'a özel çözümünü ve Alman aile şirketi mirasını bir arada sunuyoruz.",
  hero: {
    icon: HeartPulse,
    category: "Marka Felsefesi",
    title: "Sueno Pro ile Tinnitus'a Özel Çözüm",
    description:
      "İşitme kaybı ile tinnitus'u aynı cihazda birlikte ele alan, kişiselleştirilebilir maskeleme çözümü sunar.",
  },
  items: [
    {
      icon: Cpu,
      category: "Teknoloji",
      title: "Cosma Chip Technology",
      description: "Çok kanallı ses işleme ve 10k HD Sound sunan güncel nesil çip teknolojisi.",
    },
    {
      icon: Factory,
      category: "Üretim",
      title: "%100 Almanya Üretimi",
      description: "Ar-Ge'den seri üretime kadar Kölleda/Thüringen'de geliştirilir ve üretilir.",
    },
    {
      icon: Layers,
      category: "Ürün Yelpazesi",
      title: "rega ve sino Aileleri",
      description: "Farklı ihtiyaç ve bütçelere uygun, geniş bir ürün yelpazesi sunar.",
    },
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Kulak İçi Seçenekler",
      description: "sino S ile kulak içi, kişiye özel bir yerleşim seçeneği sunar.",
    },
    {
      icon: HeartPulse,
      category: "Miras",
      title: "KIND-Grubu Güvencesi",
      description: "Almanya'nın işitme akustiği alanındaki en büyük aile işletmesine bağlıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
  accentColorIconBg: "rgb(226 0 26 / 0.1)",
  accentColorHoverBorder: "rgb(226 0 26 / 0.45)",
};
