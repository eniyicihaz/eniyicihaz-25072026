// Advantages / conversion synthesis for the Widex brand page
// (/markalar/widex). Renders through the shared BrandPageAdvantages
// component (bento layout). Not new information — synthesizes facts
// already established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Activity, Cpu, Layers, BatteryCharging, Radio, Volume2 } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const widexAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN WIDEX?",
  heading: "Kullanıcılar Neden Widex Tercih Ediyor?",
  intro: "Widex'i farklı kılan doğal ses yaklaşımını ve ürün çeşitliliğini bir arada sunuyoruz.",
  hero: {
    icon: Activity,
    category: "Marka Felsefesi",
    title: "PureSound™ ile Doğal Ses",
    description:
      "Sesi olabildiğince az işleyerek, beynin sesi daha doğal ve detaylı algılamasını hedefleyen bir yaklaşım benimser.",
  },
  items: [
    {
      icon: Cpu,
      category: "Teknoloji",
      title: "SoundSense Learn ile Kişiselleştirme",
      description: "Uygulama üzerinden verdiğiniz geri bildirimlerle ses deneyiminizi zaman içinde kişiselleştirir.",
    },
    {
      icon: Layers,
      category: "Ürün Yelpazesi",
      title: "Geniş Ürün Ailesi",
      description: "Allure'dan Unique'e kadar farklı ihtiyaçlara uygun çözümler sunar.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı ve Pilli Seçenekler",
      description: "Kullanım alışkanlıklarına göre farklı alternatifler sunar.",
    },
    {
      icon: Radio,
      category: "Kulak Sağlığı",
      title: "Kulak Çınlaması Desteği",
      description: "Widex Zen ve SoundRelax ile kulak çınlamasını rahatlatmaya yönelik ek özellikler sunar.",
    },
    {
      icon: Volume2,
      category: "Güçlü Kayıplar",
      title: "İleri Derece Kayıplar İçin Çözümler",
      description: "Beyond ailesi güçlü amplifikasyon ihtiyacı olan kullanıcılar için değerlendirilebilir.",
    },
  ],
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(20 184 166 / 0.1)",
  accentColorHoverBorder: "rgb(20 184 166 / 0.45)",
};
