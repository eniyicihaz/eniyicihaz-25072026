// Hero content for the "Gürültü Engelleme" product page
// (/teknolojiler/gurultu-engelleme). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/* and
// /teknolojiler/* page uses. Second page of the "Teknolojilere Göre"
// product-page series (see header.data.ts's devicesMega -> second
// column), following Yapay Zeka Destekli.
//
// accentColor: eflatun / fuchsia (#c026d3) — a category accent distinct
// from every prior page's accent across both series (BTE'nin mavisi
// #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in yeşili #059669,
// Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü #e11d48,
// Görünmez'in grafiti #475569, Suya Dayanıklı'nın deniz mavisi-yeşili
// #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5). heroBackground follows
// the same layered "Hero Background System" recipe as those pages, with
// the hue swapped for fuchsia.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const gurultuEngellemeHero: BrandPageHeroContent = {
  badge: "TEKNOLOJİLERE GÖRE · GÜRÜLTÜ ENGELLEME",
  headingLines: ["Gürültü Engelleme", "Teknolojisi"],
  paragraphs: [
    "Gürültü engelleme teknolojisi, rüzgar, trafik veya sabit arka plan gürültüsü gibi istenmeyen sesleri gerçek zamanlı olarak tespit edip azaltan, işitme cihazlarının temel ses işleme bileşenlerinden biridir.",
    "Gürültülü ortamlarda daha rahat bir dinleme deneyimi isteyen kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir teknolojidir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "SABİT GÜRÜLTÜ AZALTMA",
      accent: "#c026d3",
      title: "Sürekli Arka Plan Gürültüsünü Azaltır",
      description: "Klima uğultusu gibi sabit gürültü kaynaklarını tespit ederek seviyesini düşürür.",
    },
    {
      label: "RÜZGAR GÜRÜLTÜSÜ ENGELLEME",
      accent: "#a21caf",
      title: "Dış Mekânda Rüzgar Sesini Azaltır",
      description: "Mikrofonlara çarpan rüzgarın oluşturduğu rahatsız edici sesi algılayıp bastırır.",
    },
    {
      label: "ANİ SES BASKILAMA",
      accent: "#86198f",
      title: "Ani ve Yüksek Sesleri Yumuşatır",
      description: "Tabak sesi gibi ani ve yüksek sesleri konfor için anlık olarak yumuşatır.",
    },
  ],
  image: {
    src: "/images/phonak/models/audeo.webp",
    alt: "Gelişmiş gürültü engelleme teknolojisine sahip işitme cihazı görseli",
  },
  floatingCard: {
    title: "Anlık Gürültü Azaltma",
    description: "Rahatsız edici sesleri saniyeler içinde algılayıp azaltır.",
  },
  accentColor: "#c026d3",
  accentColorHover: "#a21caf",
  accentColorSoft: "rgb(192 38 211 / 0.12)",
  accentColorBorder: "rgb(192 38 211 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(192,38,211,0.35) 0%, rgba(192,38,211,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #24072a 60%, #3b0f45 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#a21caf",
  heroWaveOpacity: "0.18",
};
