// Technology teaser grid for the Widex brand page (/markalar/widex) —
// short, 6-item overview. Renders through the shared BrandPageTechnology
// component.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const widexTechnology: BrandPageTechnologyContent = {
  badge: "WIDEX TEKNOLOJİLERİ",
  heading: "Widex'i Farklı Kılan Teknolojiler",
  intro: "Widex'in işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "SOUND",
      title: "PureSound™",
      description: "Sesi olabildiğince az işleyerek daha doğal bir dinleme deneyimi hedefler.",
    },
    {
      label: "SPEED",
      title: "ZeroDelay İşleme",
      description: "Ses işleme gecikmesini büyük ölçüde azaltarak yapay/metalik ses hissini azaltmaya çalışır.",
    },
    {
      label: "AI",
      title: "SoundSense Learn",
      description: "Uygulama üzerinden yaptığınız karşılaştırmalı geri bildirimlerle ses tercihlerinizi öğrenir.",
    },
    {
      label: "APP",
      title: "Widex Moment Uygulaması",
      description: "Ses ayarlarını, programları ve bağlantı durumunu akıllı telefondan yönetmenizi sağlar.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      label: "TINNITUS",
      title: "Widex Zen & SoundRelax",
      description: "Uygun modellerde, kulak çınlamasını (tinnitus) rahatlatmaya yönelik ek ses terapisi özellikleri sunar.",
    },
  ],
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorHoverBorder: "rgb(20 184 166 / 0.5)",
};
