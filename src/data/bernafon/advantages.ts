// Advantages / conversion synthesis for the Bernafon brand page
// (/markalar/bernafon). Renders through the shared BrandPageAdvantages
// component (bento layout — requires exactly 5 supporting items alongside
// the hero card). Not new information — synthesizes facts already
// established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Radar, Cpu, Users, BatteryCharging, Layers } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const bernafonAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN BERNAFON?",
  heading: "Kullanıcılar Neden Bernafon Tercih Ediyor?",
  intro: "Bernafon'u farklı kılan hareket algılayan yaklaşımını ve İsviçre mühendisliği mirasını bir arada sunuyoruz.",
  hero: {
    icon: Radar,
    category: "Marka Felsefesi",
    title: "Smart Sensor ile Otomatik Uyum",
    description:
      "Hareketlerinizi algılayarak yönlülük ve gürültü azaltma ayarlarını otomatik olarak uyarlamaya yardımcı olur.",
  },
  items: [
    {
      icon: Cpu,
      category: "Teknoloji",
      title: "Machine Learning 2.0",
      description: "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olan makine öğrenmesi destekli yaklaşım.",
    },
    {
      icon: Users,
      category: "Konuşma Anlaşılırlığı",
      title: "Smart Directionality",
      description: "Grup konuşmalarında konuşmayı takip etmeye yardımcı olan yönlü mikrofon yaklaşımı.",
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
      description: "Encanta'dan Zerena'ya kadar farklı ihtiyaçlara uygun çözümler sunar.",
    },
    {
      icon: Radar,
      category: "Miras",
      title: "İsviçre Mühendisliği",
      description: "1946'dan bu yana süregelen, dijital işitme teknolojisinde öncü bir geçmiş.",
    },
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
  accentColorIconBg: "rgb(218 41 28 / 0.1)",
  accentColorHoverBorder: "rgb(218 41 28 / 0.45)",
};
