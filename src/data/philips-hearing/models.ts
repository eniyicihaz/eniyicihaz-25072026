// Product family showcase for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared
// BrandPageModels component, including its feature-badge system.
// "HearLink 50/40/30" tier names are real, documented Philips product
// names — verified via Demant's own press materials.
//
// Gerçek Philips HearLink ürün fotoğrafları eklendi (bkz.
// public/images/philips-hearing/models/) — beş model için de kaynakta
// fotoğraf mevcuttu; hiçbir slug placeholder'da kalmadı.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const philipsHearingModels: BrandPageModelsContent = {
  badge: "PHILIPS HEARLINK MODELLERİ",
  heading: "Philips HearLink Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun Philips HearLink modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "hearlink-50",
      category: "Üst Kademe",
      name: "Philips HearLink 50",
      description: "Velox-S platformunun sunduğu en kapsamlı özellik setini taşıyan üst kademe model.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/philips-hearing/models/hearlink-50.webp",
    },
    {
      slug: "hearlink-40",
      category: "Orta Kademe",
      name: "Philips HearLink 40",
      description: "Dengeli bir teknoloji seviyesi ve fiyat-performans sunan orta kademe model.",
      tags: ["RIC", "Bluetooth"],
      image: "/images/philips-hearing/models/hearlink-40.webp",
    },
    {
      slug: "hearlink-30",
      category: "Giriş Kademesi",
      name: "Philips HearLink 30",
      description: "Temel işitme ihtiyaçları için sade ve anlaşılır bir çözüm sunan giriş kademesi model.",
      tags: ["RIC"],
      image: "/images/philips-hearing/models/hearlink-30.webp",
    },
    {
      slug: "hearlink-ite",
      category: "Kulak İçi (ITC/CIC/IIC)",
      name: "Philips HearLink Kulak İçi",
      description: "Kulak kanalına özel üretilen, ITC, CIC ve IIC gibi kulak içi yerleşim seçenekleri sunar.",
      tags: ["Kulak İçi", "Kişiye Özel"],
      image: "/images/philips-hearing/models/hearlink-ite.webp",
    },
    {
      slug: "hearlink-sarjli",
      category: "Şarjlı Seri",
      name: "Philips HearLink Şarjlı",
      description: "Lityum-iyon şarjlı sistemle günlük kullanım için pratik bir çözüm sunar.",
      tags: ["Şarjlı", "RIC"],
      image: "/images/philips-hearing/models/hearlink-sarjli.webp",
    },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
  accentColorHoverBorder: "rgb(11 95 206 / 0.5)",
  accentColorGlow: "rgb(11 95 206 / 0.14)",
  accentColorFocus: "rgb(11 95 206 / 0.35)",
};
