// Advantages / conversion synthesis for the Sonic brand page
// (/markalar/sonic). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Dna, Radio, Volume2, Palette, Landmark } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const sonicAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN SONIC?",
  heading: "Kullanıcılar Neden Sonic Tercih Ediyor?",
  intro: "Sonic'i farklı kılan, SoundDNA platformunu ve 1998'den bu yana süregelen Amerikan mühendisliğini bir arada sunuyoruz.",
  hero: {
    icon: Dna,
    category: "Marka Felsefesi",
    title: "SoundDNA ile Otomatik Uyum",
    description:
      "Ortamı analiz ederek sesi otomatik optimize etmeye yardımcı olan adaptif ses işleme platformu sunar.",
  },
  items: [
    {
      icon: Radio,
      category: "Bağlantı",
      title: "Dual-Radio Sistemi",
      description: "2.4 GHz teknolojisi ve NFMI ile kulaklar arası daha hızlı iletişim sağlar.",
    },
    {
      icon: Volume2,
      category: "Ürün Yelpazesi",
      title: "Enchant'tan Radiant'a",
      description: "Farklı ihtiyaç ve işitme kaybı derecelerine uygun geniş bir ürün ailesi sunar.",
    },
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Kulak İçi Seçenekler",
      description: "Enchant ITE ile kulak içi, kişiye özel bir yerleşim seçeneği sunar.",
    },
    {
      icon: Landmark,
      category: "Miras",
      title: "Amerikan Mühendisliği",
      description: "1998'den bu yana Salt Lake City, Utah kökenli bir mühendislik geleneği.",
    },
    {
      icon: Dna,
      category: "Grup",
      title: "Demant Grubu Güvencesi",
      description: "Oticon ve Bernafon ile aynı global grubun mühendislik altyapısından yararlanır.",
    },
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
  accentColorIconBg: "rgb(61 76 89 / 0.1)",
  accentColorHoverBorder: "rgb(61 76 89 / 0.45)",
};
