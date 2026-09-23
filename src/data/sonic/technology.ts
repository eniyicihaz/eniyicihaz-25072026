// Technology teaser grid for the Sonic brand page (/markalar/sonic).
// Renders through the shared BrandPageTechnology component. "SoundDNA",
// "Enchant" and "Radiant" are real, documented Sonic product/technology
// names — verified via audiologyonline.com and hearingreview.com.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const sonicTechnology: BrandPageTechnologyContent = {
  badge: "SONIC TEKNOLOJİLERİ",
  heading: "Sonic'i Farklı Kılan Teknolojiler",
  intro: "Sonic'in işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "SOUNDDNA",
      title: "SoundDNA Platformu",
      description: "Ortamı analiz ederek sesi otomatik optimize etmeye yardımcı olan adaptif ses işleme platformu.",
    },
    {
      label: "SPIN",
      title: "Speech in Noise (SPiN) Teknolojileri",
      description: "Gürültülü ortamlarda konuşma anlaşılırlığını desteklemeye yardımcı olan bir dizi yaklaşım.",
    },
    {
      label: "RADIO",
      title: "Dual-Radio Sistemi",
      description: "2.4 GHz teknolojisi ve NFMI ile kulaklar arası daha hızlı iletişim sağlar.",
    },
    {
      label: "RADIANT",
      title: "Radiant Amplifikasyon Sistemi",
      description: "Farklı dinleme ortamlarında daha net ve anlaşılır bir ses deneyimi sunar.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Sistemler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      label: "USA",
      title: "Amerikan Mühendisliği",
      description: "1998'den bu yana Salt Lake City, Utah kökenli bir mühendislik geleneği.",
    },
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
  accentColorHoverBorder: "rgb(61 76 89 / 0.5)",
};
