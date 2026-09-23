// Hero content for the "Görünmez (CIC)" product page
// (/isitme-cihazlari/gorunmez-cic). Renders through the shared
// BrandPageHero component — same component the Kulak Arkası (BTE), Kulak
// İçi (ITE), Şarj Edilebilir, Bluetooth Özellikli and Çocuklara Özel
// master pages use. Sixth page of the "İşitme Cihazları" product-page
// series (see header.data.ts's devicesMega -> "İşitme Cihazı Çeşitleri"
// column).
//
// accentColor: grafit / slate (#475569) — a deliberately muted, low-key
// accent (unlike the five prior pages' saturated hues) chosen to echo the
// page's own subject: discretion. Distinct from BTE's mavi (#2563eb),
// ITE's mor (#7c3aed), Şarj Edilebilir's zümrüt yeşili (#059669),
// Bluetooth's camgöbeği (#0891b2) and Çocuklara Özel's gül kırmızısı
// (#e11d48). heroBackground follows the same layered "Hero Background
// System" recipe as the other five pages, with the hue swapped for slate.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const gorunmezCicHero: BrandPageHeroContent = {
  badge: "İŞİTME CİHAZI ÇEŞİTLERİ · GÖRÜNMEZ (CIC)",
  headingLines: ["Görünmez (CIC)", "İşitme Cihazları"],
  paragraphs: [
    "Görünmez (CIC) işitme cihazları, kulak kanalının derinlerine yerleşerek dışarıdan neredeyse hiç fark edilmeyen, kulak içi (ITE) ailesinin en küçük ve en diskret alt tipleridir.",
    "Görünürlüğü en üst düzeyde önceliklendiren, hafif ile orta-ileri derece işitme kayıplarına sahip yetişkin kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir cihaz tipidir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "GÖRÜNÜRLÜK",
      accent: "#475569",
      title: "Neredeyse Görünmez Yerleşim",
      description: "Kulak kanalının derinlerine yerleştiğinden dışarıdan fark edilmesi oldukça zordur.",
    },
    {
      label: "KİŞİYE ÖZEL KALIP",
      accent: "#334155",
      title: "Kulak Kanalınıza Özel Üretilir",
      description: "Kulak izinize göre şekillendirilen tek parça kabuk, kanalınıza özel bir yerleşim sağlar.",
    },
    {
      label: "ÇIKARMA İPİ",
      accent: "#1e293b",
      title: "Kolay Çıkarma İçin İpçik / Sap",
      description: "Neredeyse görünmeyen ince bir çıkarma ipi veya sapıyla birlikte gelir.",
    },
  ],
  image: {
    src: "/images/signia/models/insio.webp",
    alt: "Görünmez (CIC) tipi, kulak kanalının derinlerine yerleşen, kişiye özel üretilmiş işitme cihazı görseli",
  },
  floatingCard: {
    title: "İpçikle Kolay Çıkarma",
    description: "Neredeyse görünmeyen ince bir sap ile kolayca çıkarılabilir.",
  },
  accentColor: "#475569",
  accentColorHover: "#334155",
  accentColorSoft: "rgb(71 85 105 / 0.12)",
  accentColorBorder: "rgb(71 85 105 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(71,85,105,0.35) 0%, rgba(71,85,105,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #12161d 60%, #1e293b 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#334155",
  heroWaveOpacity: "0.18",
};
