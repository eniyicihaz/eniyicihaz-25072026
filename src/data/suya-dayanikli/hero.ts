// Hero content for the "Suya Dayanıklı" product page
// (/isitme-cihazlari/suya-dayanikli). Renders through the shared
// BrandPageHero component — same component the Kulak Arkası (BTE), Kulak
// İçi (ITE), Şarj Edilebilir, Bluetooth Özellikli, Çocuklara Özel and
// Görünmez (CIC) master pages use. Seventh and final page of the "İşitme
// Cihazları" product-page series (see header.data.ts's devicesMega ->
// "İşitme Cihazı Çeşitleri" column).
//
// accentColor: deniz mavisi-yeşili / teal (#0d9488) — chosen for its
// direct thematic tie to water, distinct from BTE's mavi (#2563eb), ITE's
// mor (#7c3aed), Şarj Edilebilir's zümrüt yeşili (#059669), Bluetooth's
// camgöbeği (#0891b2), Çocuklara Özel's gül kırmızısı (#e11d48) and
// Görünmez'in grafit (#475569). heroBackground follows the same layered
// "Hero Background System" recipe as the other six pages, with the hue
// swapped for teal.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const suyaDayankliHero: BrandPageHeroContent = {
  badge: "İŞİTME CİHAZI ÇEŞİTLERİ · SUYA DAYANIKLI",
  headingLines: ["Suya Dayanıklı", "İşitme Cihazları"],
  paragraphs: [
    "Suya dayanıklı işitme cihazları, ter, nem ve hafif su temasına karşı özel kaplama ve conta sistemleriyle korunan, IP koruma sınıfına sahip modellerdir.",
    "Aktif yaşam tarzına sahip, sporla uğraşan veya nemli iklimlerde yaşayan kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir özelliktir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "IP KORUMA SINIFI",
      accent: "#0d9488",
      title: "Uluslararası Standartlarla Test Edilir",
      description: "IP68 gibi uluslararası koruma sınıflandırmalarına göre toz ve suya karşı test edilir.",
    },
    {
      label: "NANO KAPLAMA",
      accent: "#0f766e",
      title: "Nem ve Tere Karşı Koruyucu Kaplama",
      description: "Elektronik bileşenler, nem ve ter hasarına karşı özel bir nano kaplamayla korunur.",
    },
    {
      label: "AKTİF KULLANIM",
      accent: "#115e59",
      title: "Spor ve Yoğun Terlemeye Uygun",
      description: "Egzersiz ve aktif yaşam sırasında oluşan tere karşı günlük kullanım için tasarlanır.",
    },
  ],
  image: {
    src: "/images/signia/models/active.webp",
    alt: "Suya ve tere dayanıklı, aktif kullanım için tasarlanmış işitme cihazı görseli",
  },
  floatingCard: {
    title: "IP68 Koruma",
    description: "Toz ve suya karşı üst düzey koruma sınıfı.",
  },
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorSoft: "rgb(13 148 136 / 0.12)",
  accentColorBorder: "rgb(13 148 136 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(13,148,136,0.35) 0%, rgba(13,148,136,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #062420 60%, #0a3833 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0f766e",
  heroWaveOpacity: "0.18",
};
