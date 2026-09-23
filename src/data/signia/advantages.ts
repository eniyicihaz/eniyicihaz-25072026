// Advantages / conversion synthesis for the Signia brand page
// (/markalar/signia) — see SIGNIA MASTER BLUEPRINT §9.10. Renders through
// the shared BrandPageAdvantages component (bento layout). Not new
// information — synthesizes facts already established in hero.ts/
// overview.ts/ecosystem.ts/models.ts.

import { Waves, Cpu, Sparkles, BatteryCharging, Ear, Volume2 } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const signiaAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN SIGNIA?",
  heading: "Kullanıcılar Neden Signia Tercih Ediyor?",
  intro: "Signia'yı farklı kılan yapay zekâ destekli yaklaşımı ve tasarım anlayışını bir arada sunuyoruz.",
  hero: {
    icon: Waves,
    category: "Marka Felsefesi",
    title: "Own Voice Processing",
    description:
      "Kendi sesinizi doğal ve rahatsız etmeyen şekilde duymanızı sağlayan, Signia'ya özgü bir yaklaşım.",
  },
  items: [
    {
      icon: Cpu,
      category: "Teknoloji",
      title: "Yapay Zekâ Destekli Kişiselleştirme",
      description: "Signia Assistant ile ses deneyiminizi zaman içinde kişiselleştirebilirsiniz.",
    },
    {
      icon: Sparkles,
      category: "Tasarım",
      title: "Modern ve Moda Odaklı Tasarım",
      description: "Styletto ailesi, ince ve estetik bir görünüm sunar.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı ve Pratik Seçenekler",
      description: "Kullanım alışkanlıklarına göre farklı alternatifler sunar.",
    },
    {
      icon: Ear,
      category: "Kulak Sağlığı",
      title: "Kulak Çınlaması Desteği",
      description: "Uygun modellerde, kulak çınlamasını rahatlatmaya yönelik ek özellikler sunar.",
    },
    {
      icon: Volume2,
      category: "Ürün Yelpazesi",
      title: "Geniş Ürün Ailesi",
      description: "Styletto'dan Motion'a kadar farklı ihtiyaçlara uygun çözümler sunar.",
    },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B).
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
  accentColorIconBg: "rgb(178 31 75 / 0.1)",
  accentColorHoverBorder: "rgb(178 31 75 / 0.45)",
};
