// Hero content for the "Bluetooth Özellikli" product page
// (/isitme-cihazlari/bluetooth-ozellikli). Renders through the shared
// BrandPageHero component — same component the Kulak Arkası (BTE), Kulak
// İçi (ITE) and Şarj Edilebilir master pages use. Fourth page of the
// "İşitme Cihazları" product-page series (see header.data.ts's
// devicesMega -> "İşitme Cihazı Çeşitleri" column).
//
// accentColor: camgöbeği / cyan (#0891b2) — a category accent distinct
// from BTE's mavi (#2563eb), ITE's mor (#7c3aed) and Şarj Edilebilir's
// zümrüt yeşili (#059669), scoped entirely to this page's own data.
// heroBackground follows the same layered "Hero Background System" recipe
// as the other three pages, with the hue swapped for cyan/teal.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const bluetoothHero: BrandPageHeroContent = {
  badge: "İŞİTME CİHAZI ÇEŞİTLERİ · BLUETOOTH ÖZELLİKLİ",
  headingLines: ["Bluetooth Özellikli", "İşitme Cihazları"],
  paragraphs: [
    "Bluetooth özellikli işitme cihazları, akıllı telefon, TV ve tablet gibi cihazlarla kablosuz bağlantı kurarak sesi doğrudan cihazınıza aktarır.",
    "Telefon görüşmelerini, müzik ve video seslerini net bir şekilde dinlemek isteyen, teknolojiye yatkın kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir özelliktir.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DOĞRUDAN BAĞLANTI",
      accent: "#0891b2",
      title: "Telefon ve TV'ye Doğrudan Bağlanır",
      description: "Ayrı bir aracı cihaza gerek kalmadan sesi doğrudan cihazınıza aktarır.",
    },
    {
      label: "ÇOKLU CİHAZ",
      accent: "#0e7490",
      title: "Aynı Anda Birden Fazla Cihazla Eşleşme",
      description: "Telefon, tablet ve bilgisayar gibi kaynaklar arasında pratik geçiş sağlar.",
    },
    {
      label: "UZAKTAN KONTROL",
      accent: "#155e75",
      title: "Uygulama Üzerinden Kişisel Ayar",
      description: "Ses seviyesi ve dinleme programları, akıllı telefon uygulaması üzerinden kolayca yönetilebilir.",
    },
  ],
  image: {
    src: "/images/resound/models/omnia.webp",
    alt: "Bluetooth özellikli, telefon ile doğrudan bağlantı kuran işitme cihazı görseli",
  },
  floatingCard: {
    title: "Doğrudan Bağlantı",
    description: "Aracı cihaz olmadan telefon ve TV'ye bağlanır.",
  },
  accentColor: "#0891b2",
  accentColorHover: "#0e7490",
  accentColorSoft: "rgb(8 145 178 / 0.12)",
  accentColorBorder: "rgb(8 145 178 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(8,145,178,0.35) 0%, rgba(8,145,178,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #062024 60%, #083344 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0e7490",
  heroWaveOpacity: "0.18",
};
