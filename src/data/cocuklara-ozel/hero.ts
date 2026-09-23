// Hero content for the "Çocuklara Özel" product page
// (/isitme-cihazlari/cocuklara-ozel). Renders through the shared
// BrandPageHero component — same component the Kulak Arkası (BTE), Kulak
// İçi (ITE), Şarj Edilebilir and Bluetooth Özellikli master pages use.
// Fifth page of the "İşitme Cihazları" product-page series (see
// header.data.ts's devicesMega -> "İşitme Cihazı Çeşitleri" column).
//
// accentColor: gül kırmızısı / rose (#e11d48) — a category accent distinct
// from BTE's mavi (#2563eb), ITE's mor (#7c3aed), Şarj Edilebilir's
// zümrüt yeşili (#059669) and Bluetooth's camgöbeği (#0891b2), scoped
// entirely to this page's own data. heroBackground follows the same
// layered "Hero Background System" recipe as the other four pages, with
// the hue swapped for rose.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const cocuklaraOzelHero: BrandPageHeroContent = {
  badge: "İŞİTME CİHAZI ÇEŞİTLERİ · ÇOCUKLARA ÖZEL",
  headingLines: ["Çocuklara Özel", "İşitme Cihazları"],
  paragraphs: [
    "Çocuklara özel işitme cihazları, standart yetişkin modellerine kıyasla ek güvenlik önlemleri, dayanıklı gövde yapısı ve büyüyen kulağa uyum sağlayan özellikleriyle tasarlanır.",
    "Yenidoğan işitme taraması sonrası erken tanı alan bebeklerden okul çağındaki çocuklara kadar geniş bir yaş aralığında Avrasya İşitme'de sıkça değerlendirdiğimiz bir kategoridir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "GÜVENLİK",
      accent: "#e11d48",
      title: "Kilitli Pil Kapağı Tasarımı",
      description: "Küçük pillerin kazara yutulmasını önlemeye yardımcı olan özel kilit mekanizması.",
    },
    {
      label: "DAYANIKLILIK",
      accent: "#be123c",
      title: "Oyuna ve Harekete Dayanıklı Gövde",
      description: "Aktif çocuk kullanımına uygun, sağlam ve dayanıklı bir yapı sunar.",
    },
    {
      label: "BÜYÜME UYUMU",
      accent: "#9f1239",
      title: "Büyüyen Kulağa Kolayca Uyarlanır",
      description: "Yumuşak silikon kulak kalıpları, çocuğun büyümesine göre kolayca yenilenebilir.",
    },
  ],
  image: {
    src: "/images/phonak/models/sky.webp",
    alt: "Çocuklara özel, renkli ve dayanıklı tasarımlı kulak arkası işitme cihazı görseli",
  },
  floatingCard: {
    title: "Kilitli Pil Kapağı",
    description: "Küçük pillerin kazara yutulmasını önleyen özel tasarım.",
  },
  accentColor: "#e11d48",
  accentColorHover: "#be123c",
  accentColorSoft: "rgb(225 29 72 / 0.12)",
  accentColorBorder: "rgb(225 29 72 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(225,29,72,0.35) 0%, rgba(225,29,72,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #200a14 60%, #3f0f22 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#be123c",
  heroWaveOpacity: "0.18",
};
