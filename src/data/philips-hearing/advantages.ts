// Advantages / conversion synthesis for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared
// BrandPageAdvantages component (bento layout — requires exactly 5
// supporting items alongside the hero card). Not new information —
// synthesizes facts already established in
// hero.ts/overview.ts/ecosystem.ts/models.ts.

import { ShieldCheck, Cpu, Layers, Palette, BatteryCharging } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const philipsHearingAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN PHILIPS HEARLINK?",
  heading: "Kullanıcılar Neden Philips HearLink Tercih Ediyor?",
  intro: "Philips HearLink'i farklı kılan, tanıdık marka güvenini ve anlaşılır kademelendirmesini bir arada sunuyoruz.",
  hero: {
    icon: ShieldCheck,
    category: "Marka Felsefesi",
    title: "Tanıdık Markadan Güvenilir Teknoloji",
    description:
      "Dünyaca tanınan Philips markasının güvenilirliğini, Demant'ın işitme teknolojisi mühendisliğiyle bir araya getirir.",
  },
  items: [
    {
      icon: Cpu,
      category: "Teknoloji",
      title: "Velox-S Platformu",
      description: "Demant'ın güncel nesil ses işleme platformu üzerinde geliştirilir.",
    },
    {
      icon: Layers,
      category: "Kademelendirme",
      title: "50 / 40 / 30 Kademe Sistemi",
      description: "İhtiyaç ve bütçeye göre net ve anlaşılır bir seçim sunar.",
    },
    {
      icon: Palette,
      category: "Kişiselleştirme",
      title: "Geniş Yerleşim Yelpazesi",
      description: "RIC, BTE, ITC, CIC ve IIC gibi çeşitli yerleşim seçenekleri sunar.",
    },
    {
      icon: BatteryCharging,
      category: "Kullanım",
      title: "Şarjlı Seçenekler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      icon: ShieldCheck,
      category: "Miras",
      title: "Demant Lisans Güvencesi",
      description: "Demant ile yapılan lisans anlaşması sayesinde köklü bir mühendislik altyapısından yararlanır.",
    },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
  accentColorIconBg: "rgb(11 95 206 / 0.1)",
  accentColorHoverBorder: "rgb(11 95 206 / 0.45)",
};
