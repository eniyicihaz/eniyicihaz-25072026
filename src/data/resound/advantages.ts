// Advantages / conversion synthesis for the ReSound brand page
// (/markalar/resound). Renders through the shared BrandPageAdvantages
// component (bento layout). Not new information — synthesizes facts
// already established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Waves, Bluetooth, Smartphone, BatteryCharging, Layers, Volume2 } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const resoundAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN RESOUND?",
  heading: "Kullanıcılar Neden ReSound Tercih Ediyor?",
  intro: "ReSound'u farklı kılan bağlantı öncüsü yaklaşımını ve ürün çeşitliliğini bir arada sunuyoruz.",
  hero: {
    icon: Waves,
    category: "Marka Felsefesi",
    title: "M&RIE ile Doğal Mekansal İşitme",
    description:
      "Kulak kanalına yerleştirilen ek bir mikrofonla, ses kaynağının yönünü ve mesafesini daha doğal algılamayı hedefler.",
  },
  items: [
    {
      icon: Bluetooth,
      category: "Bağlantı",
      title: "Auracast (Bluetooth LE Audio) Desteği",
      description: "Uygun kamuya açık ortamlarda yayın sesine doğrudan bağlanma imkânı sunar.",
    },
    {
      icon: Smartphone,
      category: "Uzaktan Bakım",
      title: "ReSound Assist ile Uzaktan Destek",
      description: "Kliniğe gitmeden ince ayar ve destek almanızı sağlar.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı Sistemler",
      description: "Günlük kullanım için pratik ve sürdürülebilir şarj çözümleri sunar.",
    },
    {
      icon: Layers,
      category: "Ürün Yelpazesi",
      title: "Geniş Ürün Ailesi",
      description: "Vivia'dan Key'e kadar farklı ihtiyaçlara ve bütçelere uygun çözümler sunar.",
    },
    {
      icon: Volume2,
      category: "Güçlü Kayıplar",
      title: "İleri Derece Kayıplar İçin Çözümler",
      description: "ENZO Q ailesi güçlü amplifikasyon ihtiyacı olan kullanıcılar için değerlendirilebilir.",
    },
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
  accentColorIconBg: "rgb(170 24 53 / 0.1)",
  accentColorHoverBorder: "rgb(170 24 53 / 0.45)",
};
