// Advantages / conversion synthesis for the NuEar brand page
// (/markalar/nuear). Renders through the shared BrandPageAdvantages
// component (bento layout). Not new information — synthesizes facts
// already established in hero.ts/overview.ts/ecosystem.ts/models.ts.

import { Activity, ShieldCheck, Smartphone, BatteryCharging, Layers, Cpu } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const nuearAdvantages: BrandPageAdvantagesContent = {
  badge: "NEDEN NUEAR?",
  heading: "Kullanıcılar Neden NuEar Tercih Ediyor?",
  intro: "NuEar'ı farklı kılan sağlık odaklı yaklaşımını ve Amerikan mühendisliği mirasını bir arada sunuyoruz.",
  hero: {
    icon: Activity,
    category: "Marka Felsefesi",
    title: "Hear Circle ile Sağlık ve İşitmeyi Bir Arada Takip Edin",
    description:
      "İşitme cihazı ayarlarının yanı sıra günlük aktivite ve sağlık verilerinizi de tek bir uygulamadan izlemenizi sağlar.",
  },
  items: [
    {
      icon: ShieldCheck,
      category: "Güvenlik",
      title: "Düşme Anında Bildirim",
      description: "Uygun modellerde, bir düşme meydana geldiğinde seçtiğiniz kişilere bildirim gönderilebilir.",
    },
    {
      icon: Smartphone,
      category: "Uzaktan Bakım",
      title: "Uzaktan Profesyonel Ayar",
      description: "Kliniğe gitmeden ince ayar talep etmenizi sağlar.",
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
      description: "NXG AI'dan Miniscopic Synergy iQ'ya kadar farklı ihtiyaçlara uygun çözümler sunar.",
    },
    {
      icon: Cpu,
      category: "Teknoloji",
      title: "NXG AI Ses İşleme",
      description: "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olan güncel nesil ses işleme yaklaşımı.",
    },
  ],
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
  accentColorIconBg: "rgb(228 0 43 / 0.1)",
  accentColorHoverBorder: "rgb(228 0 43 / 0.45)",
};
