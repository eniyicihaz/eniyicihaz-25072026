// Technology teaser grid for the Audio Service brand page
// (/markalar/audio-service). Renders through the shared
// BrandPageTechnology component.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const audioServiceTechnology: BrandPageTechnologyContent = {
  badge: "AUDIO SERVICE TEKNOLOJİLERİ",
  heading: "Audio Service'i Farklı Kılan Yaklaşımlar",
  intro: "Audio Service'in işitme cihazlarında kullandığı temel teknoloji ve üretim yaklaşımları.",
  items: [
    {
      label: "ITE",
      title: "Kulak İçi Uzmanlığı",
      description: "40 yılı aşkın süredir kulak içi (ITE) işitme sistemleri konusunda uzmanlaşmıştır.",
    },
    {
      label: "CUSTOM",
      title: "Kişiye Özel Üretim",
      description: "Kulak kalıbınıza özel üretilen, kulak kanalı içinde neredeyse görünmez modeller sunar.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      label: "MOOD",
      title: "Mood Serisi",
      description: "Günlük kullanım için tasarlanmış, dengeli bir ürün ailesi.",
    },
    {
      label: "QUIX",
      title: "Quix Serisi",
      description: "Pratik ve erişilebilir bir işitme çözümü sunan ürün ailesi.",
    },
    {
      label: "STILINE",
      title: "Stiline Serisi",
      description: "Markanın stil odaklı, öne çıkan ürün ailelerinden biri.",
    },
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
  accentColorHoverBorder: "rgb(18 64 160 / 0.5)",
};
