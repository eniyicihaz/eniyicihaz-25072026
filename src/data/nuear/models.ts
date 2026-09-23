// Product family showcase for the NuEar brand page (/markalar/nuear).
// Renders through the shared BrandPageModels component, including its
// feature-badge system. All 6 names are real NuEar product families
// (NXG AI, NE Series, Circa, Savant AI, NOW iQ, Miniscopic Synergy iQ) —
// verified via NuEar's own site, product manuals and Starkey-network
// documentation.
//
// Gerçek NuEar ürün fotoğrafları eklendi (bkz. public/images/nuear/models/) —
// yalnızca Circa ve Miniscopic Synergy iQ için model-özel fotoğraf mevcuttu
// (kategori adıyla eşleşen "şarjlı" ve "kulak içi" jenerik çekimler). NXG AI,
// NE Series, Savant AI ve NOW iQ için henüz sağlanmış fotoğraf yok; bu
// alanlar geçici olarak marka logosuna işaret etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const nuearModels: BrandPageModelsContent = {
  badge: "NUEAR MODELLERİ",
  heading: "NuEar Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun NuEar modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "nxg-ai",
      category: "Güncel Nesil",
      name: "NuEar NXG AI",
      description: "Güncellenmiş ses işleme yaklaşımını Hear Circle uygulamasıyla birleştiren en güncel model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/brands/nuear-logo-seffaf.webp",
    },
    {
      slug: "ne-series",
      category: "Önceki Nesil",
      name: "NuEar NE Series",
      description: "Bağlantı özellikleriyle öne çıkan, kanıtlanmış önceki nesil model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/brands/nuear-logo-seffaf.webp",
    },
    {
      slug: "circa",
      category: "Şarjlı Seri",
      name: "NuEar Circa",
      description: "Günlük kullanım için pratik, şarjlı bir model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/nuear/models/circa.webp",
    },
    {
      slug: "savant-ai",
      category: "Geniş Ürün Yelpazesi",
      name: "NuEar Savant AI",
      description: "RIC, BTE ve kulak içi seçenekleriyle geniş bir yelpaze sunan model ailesi.",
      tags: ["RIC", "BTE", "Bluetooth"],
      image: "/images/brands/nuear-logo-seffaf.webp",
    },
    {
      slug: "now-iq",
      category: "Orta Segment",
      name: "NuEar NOW iQ",
      description: "Dengeli bir bağlantı ve ses deneyimi sunan, uygun bir model ailesi.",
      tags: ["RIC", "Bluetooth", "Şarjlı"],
      image: "/images/brands/nuear-logo-seffaf.webp",
    },
    {
      slug: "miniscopic-synergy-iq",
      category: "Kulak İçi",
      name: "NuEar Miniscopic Synergy iQ",
      description: "Kişiye özel üretilen, kulak içi yerleşimli kompakt model ailesi.",
      tags: ["Kulak İçi", "Bluetooth"],
      image: "/images/nuear/models/miniscopic-synergy-iq.webp",
    },
  ],
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
  accentColorHoverBorder: "rgb(228 0 43 / 0.5)",
  accentColorGlow: "rgb(228 0 43 / 0.14)",
  accentColorFocus: "rgb(228 0 43 / 0.35)",
};
