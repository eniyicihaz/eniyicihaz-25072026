// Hero content for the "Yapay Zeka Destekli" product page
// (/teknolojiler/yapay-zeka-destekli). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*
// page uses. First page of the "Teknolojilere Göre" product-page series
// (see header.data.ts's devicesMega -> second column) — a new series,
// distinct from "İşitme Cihazı Çeşitleri" (which is now fully built), so
// it gets its own /teknolojiler/ route prefix rather than nesting under
// /isitme-cihazlari/.
//
// accentColor: çivit / indigo (#4f46e5) — a category accent distinct
// from every "İşitme Cihazı Çeşitleri" page's accent (BTE'nin mavisi
// #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in yeşili #059669,
// Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü #e11d48,
// Görünmez'in grafiti #475569, Suya Dayanıklı'nın deniz mavisi-yeşili
// #0d9488). heroBackground follows the same layered "Hero Background
// System" recipe as those pages, with the hue swapped for indigo.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const yapayZekaDestekliHero: BrandPageHeroContent = {
  badge: "TEKNOLOJİLERE GÖRE · YAPAY ZEKA DESTEKLİ",
  headingLines: ["Yapay Zeka Destekli", "İşitme Cihazları"],
  paragraphs: [
    "Yapay zeka destekli işitme cihazları, çevresel sesleri gerçek zamanlı olarak analiz ederek ortama göre otomatik ayar yapan, derin öğrenme tabanlı ses işleme teknolojisine sahip modellerdir.",
    "Sürekli değişen ortamlarda manuel ayar yapmadan doğal bir dinleme deneyimi isteyen kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir teknolojidir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "OTOMATİK ORTAM ALGILAMA",
      accent: "#4f46e5",
      title: "Ortamı Saniyeler İçinde Tanır",
      description: "Yapay zeka, bulunduğunuz ortamı analiz ederek sesi otomatik olarak optimize eder.",
    },
    {
      label: "DERİN ÖĞRENME",
      accent: "#4338ca",
      title: "Milyonlarca Ses Sahnesinden Öğrenir",
      description: "Derin sinir ağı, gerçek dünya ses sahneleriyle eğitilerek daha doğal bir dinleme deneyimi sunar.",
    },
    {
      label: "SÜREKLİ İYİLEŞME",
      accent: "#3730a3",
      title: "Kullanım Alışkanlıklarınıza Uyum Sağlar",
      description: "Bazı modeller, zaman içinde tercihlerinizi öğrenerek ayarlarını buna göre günceller.",
    },
  ],
  image: {
    src: "/images/oticon/models/intent.webp",
    alt: "Derin sinir ağı tabanlı yapay zeka teknolojisine sahip işitme cihazı görseli",
  },
  floatingCard: {
    title: "Gerçek Zamanlı Analiz",
    description: "Ortamı saniyeler içinde tanıyıp ayarları otomatik optimize eder.",
  },
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorSoft: "rgb(79 70 229 / 0.12)",
  accentColorBorder: "rgb(79 70 229 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(79,70,229,0.35) 0%, rgba(79,70,229,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #12123a 60%, #1e1b4b 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#4338ca",
  heroWaveOpacity: "0.18",
};
