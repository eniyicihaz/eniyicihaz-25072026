// Technology teaser grid for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared
// BrandPageTechnology component. "HearLink", "Velox-S" and the
// 50/40/30 tier system are real, documented names — verified via
// Demant's own press materials and independent hearing-aid review
// sources.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const philipsHearingTechnology: BrandPageTechnologyContent = {
  badge: "PHILIPS HEARLINK TEKNOLOJİLERİ",
  heading: "Philips HearLink'i Farklı Kılan Yaklaşımlar",
  intro: "Philips HearLink'in işitme cihazlarında kullandığı temel teknoloji ve kademelendirme yaklaşımları.",
  items: [
    {
      label: "TIER",
      title: "50 / 40 / 30 Kademe Sistemi",
      description: "İhtiyaç ve bütçeye göre net bir seçim sunan, anlaşılır bir kademelendirme.",
    },
    {
      label: "VELOX",
      title: "Velox-S Platformu",
      description: "Demant'ın güncel nesil ses işleme platformlarından biri üzerinde geliştirilir.",
    },
    {
      label: "FIT",
      title: "Geniş Yerleşim Yelpazesi",
      description: "RIC, BTE, ITC, CIC ve IIC gibi çeşitli yerleşim tiplerinde sunulur.",
    },
    {
      label: "CHARGE",
      title: "Şarjlı Seçenekler",
      description: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik çözümler sunar.",
    },
    {
      label: "TRUST",
      title: "Tanıdık Marka Güveni",
      description: "Dünyaca tanınan Philips markasının güvenilirliğini işitme cihazına taşır.",
    },
    {
      label: "LICENSE",
      title: "Demant Mühendisliği",
      description: "Demant ile yapılan lisans anlaşması sayesinde köklü bir mühendislik altyapısından yararlanır.",
    },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
  accentColorHoverBorder: "rgb(11 95 206 / 0.5)",
};
