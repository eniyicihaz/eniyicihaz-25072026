// Hero content for the "Kablosuz Bağlantı" product page
// (/teknolojiler/kablosuz-baglanti). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/* and
// /teknolojiler/* page uses. Fourth page of the "Teknolojilere Göre"
// product-page series (see header.data.ts's devicesMega -> second
// column), following Yapay Zeka Destekli, Gürültü Engelleme and Konuşma
// Odaklı. Deliberately scoped apart from the already-built Bluetooth
// Özellikli Cihazlar page (/isitme-cihazlari/bluetooth-ozellikli), which
// owns consumer phone/TV Bluetooth streaming; this page instead covers
// the wider wireless protocol landscape — telecoil loop systems, Roger/FM
// remote microphones and ear-to-ear (NFMI) synchronization — that
// Bluetooth Özellikli doesn't touch.
//
// accentColor: misket limonu / lime (#65a30d) — a category accent
// distinct from every prior page's accent across all three series (BTE'nin
// mavisi #2563eb, ITE'nin moru #7c3aed, Şarj Edilebilir'in yeşili
// #059669, Bluetooth'un camgöbeği #0891b2, Çocuklara Özel'in gülü
// #e11d48, Görünmez'in grafiti #475569, Suya Dayanıklı'nın deniz
// mavisi-yeşili #0d9488, Yapay Zeka Destekli'nin çividi #4f46e5, Gürültü
// Engelleme'nin eflatunu #c026d3, Konuşma Odaklı'nın turuncusu #ea580c).
// heroBackground follows the same layered "Hero Background System"
// recipe as those pages, with the hue swapped for lime.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const kablosuzBaglantiHero: BrandPageHeroContent = {
  badge: "TEKNOLOJİLERE GÖRE · KABLOSUZ BAĞLANTI",
  headingLines: ["Kablosuz Bağlantı", "Özellikleri"],
  paragraphs: [
    "Kablosuz bağlantı özellikleri; telefon ve TV ile doğrudan Bluetooth bağlantısının ötesinde, telesarmal (telecoil) sistemler, Roger/FM uzaktan mikrofonlar ve kulaktan kulağa senkronizasyon gibi farklı kablosuz protokollerin tümünü kapsayan geniş bir teknoloji ailesidir.",
    "Bluetooth dışındaki kablosuz seçenekleri de değerlendirmek isteyen, toplu alan sistemleri veya uzaktan mikrofon ihtiyacı olan kullanıcılar için Avrasya İşitme'de sıkça değerlendirdiğimiz bir konudur.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "TELESARMAL (TELECOIL)",
      accent: "#65a30d",
      title: "Toplu Alan Döngü Sistemleriyle Bağlanır",
      description: "Tiyatro, cami ve toplantı salonu gibi telesarmal döngü sistemi bulunan mekanlarda doğrudan ses alımı sağlar.",
    },
    {
      label: "ROGER / FM UZAKTAN MİKROFON",
      accent: "#4d7c0f",
      title: "Uzak Mesafeden Net Ses Aktarımı",
      description: "Öğretmen veya konuşmacının taktığı verici mikrofon, sesi doğrudan cihaza kablosuz olarak aktarır.",
    },
    {
      label: "KULAKTAN KULAĞA BAĞLANTI",
      accent: "#3f6212",
      title: "İki Cihaz Arasında Kesintisiz İletişim",
      description: "Sağ ve sol cihaz, düşük güçlü manyetik indüksiyon bağlantısıyla sürekli veri paylaşır.",
    },
  ],
  image: {
    src: "/images/phonak/models/cros.webp",
    alt: "Tek taraflı işitme kaybında sesi kablosuz olarak aktaran CROS sistemine sahip işitme cihazı görseli",
  },
  floatingCard: {
    title: "Çoklu Protokol Desteği",
    description: "Telesarmal, Roger/FM ve kulaktan kulağa bağlantıyı bir arada sunar.",
  },
  accentColor: "#65a30d",
  accentColorHover: "#4d7c0f",
  accentColorSoft: "rgb(101 163 13 / 0.12)",
  accentColorBorder: "rgb(101 163 13 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(101,163,13,0.35) 0%, rgba(101,163,13,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #14200a 60%, #1f3410 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#4d7c0f",
  heroWaveOpacity: "0.18",
};
