// Advantages / conversion synthesis for the Phonak brand page
// (/markalar/phonak) — see PHONAK MASTER BLUEPRINT §6.10. Renders through
// the shared BrandPageAdvantages component (bento layout). Not new
// information — synthesizes facts already established in hero.ts/
// overview.ts/ecosystem.ts/models.ts.

import { Bluetooth, Radio, Layers, BatteryCharging, Baby, Volume2 } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const phonakAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN PHONAK?",
  heading: "Kullanıcılar Neden Phonak Tercih Ediyor?",
  intro: "Phonak'ı farklı kılan bağlantı yaklaşımını ve ürün çeşitliliğini bir arada sunuyoruz.",
  hero: {
    icon: Bluetooth,
    category: "Marka Felsefesi",
    title: "Evrensel Bağlantı",
    description:
      "Marka veya işletim sistemi fark etmeksizin, ayrı bir aksesuara ihtiyaç duymadan telefonunuzla doğrudan bağlantı kurar.",
  },
  items: [
    {
      icon: Radio,
      category: "Ekosistem",
      title: "Roger Ekosistemi ile Genişleyebilir Çözüm",
      description: "Kalabalık ve gürültülü ortamlarda konuşmayı takip etmeyi kolaylaştıran uzaktan mikrofon sistemiyle genişletilebilir.",
    },
    {
      icon: Layers,
      category: "Ürün Yelpazesi",
      title: "Geniş Ürün Ailesi",
      description: "Audéo'dan CROS'a kadar farklı ihtiyaçlara uygun çözümler sunar.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı ve Pilli Seçenekler",
      description: "Kullanım alışkanlıklarına göre farklı alternatifler sunar.",
    },
    {
      icon: Baby,
      category: "Pediatrik",
      title: "Çocuklar İçin Özel Çözümler",
      description: "Sky ailesi, çocuk kullanıcıların ihtiyaçlarına göre geliştirilmiştir.",
    },
    {
      icon: Volume2,
      category: "Güçlü Kayıplar",
      title: "İleri Derece Kayıplar İçin Güçlü Modeller",
      description: "Naída ailesi güçlü amplifikasyon ihtiyacı olan kullanıcılar için geliştirilmiştir.",
    },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorIconBg: "rgb(14 165 233 / 0.1)",
  accentColorHoverBorder: "rgb(14 165 233 / 0.45)",
};
