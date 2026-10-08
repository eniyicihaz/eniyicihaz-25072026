// Hero content for the Vista brand page (/markalar/vista). Renders
// through the shared BrandPageHero component.
//
// Positioning axis: Sonova'nın erişilebilir fiyat noktasındaki değer
// markası — Vista'nın gerçek, doğrulanabilir konumu, dünyanın en büyük
// işitme cihazı üreticisi Sonova'nın (Phonak ve Unitron'un da içinde
// bulunduğu grup) Soundsuite OS teknolojisini, Vista V ve Vista B gibi
// kademelerle daha erişilebilir bir fiyat noktasında sunan markası
// olmasıdır. Aynı Sonova ailesindeki Phonak'ın Roger/bağlantı ekosistemi
// ve Unitron'un AutoFocus 360'ından farklı olarak, Vista'nın ekseni
// burada "Sonova teknolojisi + erişilebilir fiyat" olarak konumlandırıldı
// — NuEar'ın (Starkey'nin değer markası) eksenine benzer bir mantık,
// ancak farklı bir gruba (Sonova) bağlı, gerçek ve ayrı bir konumlandırma.
//
// accentColor: turuncu-kırmızı (#E85D0A), bu projenin kendi gerçek Vista
// logosundan (/images/brands/vista-logo-seffaf.webp — turuncu "Vista"
// yazısı) doğrudan görsel olarak okunarak belirlendi. Bu settteki ikinci
// turuncu tonlu marka (A&M ile birlikte) — burada A&M'in daha parlak/
// doygun turuncusundan farklı olarak, daha kırmızıya yakın, klasik bir
// turuncu ton tercih edilerek net bir ayrışma sağlandı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const vistaHero: BrandPageHeroContent = {
  badge: "VISTA · ERİŞİLEBİLİR FİYAT",
  headingLines: ["Vista ile Güncel Ses İşlemeye", "Erişilebilir Bir Fiyat Noktası"],
  paragraphs: [
    "Vista, Soundsuite OS teknolojisini erişilebilir bir fiyat noktasında sunan bir işitme cihazı markasıdır.",
    "Vista V, Vista B ve diğer Vista modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "OS",
      accent: "#E85D0A",
      title: "Soundsuite OS Teknolojisi",
      description: "Soundsuite OS ses işleme teknolojisini taşır.",
    },
    {
      label: "SERVİS",
      accent: "#F08745",
      title: "Merkezimizde Teknik Servis",
      description: "Vista cihazları için Darıca'daki merkezimizde teknik servis veriyoruz.",
    },
    {
      label: "VALUE",
      accent: "#B94708",
      title: "Erişilebilir Fiyat Noktası",
      description: "Güncel ses işleme teknolojisini daha uygun bir fiyat seviyesinde sunmayı hedefler.",
    },
  ],
  image: {
    src: "/images/pages/vista-hero.webp",
    alt: "Vista V Bluetooth'lu işitme cihazı",
  },
  floatingCard: {
    title: "Soundsuite OS",
    description: "Soundsuite OS teknolojisini erişilebilir bir fiyat noktasında sunar.",
  },
  accentColor: "#E85D0A",
  accentColorHover: "#B94708",
  accentColorSoft: "rgb(232 93 10 / 0.12)",
  accentColorBorder: "rgb(232 93 10 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Vista's own
  // already-researched accent (#E85D0A). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(232,93,10,0.35) 0%, rgba(232,93,10,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1D0D05 60%, #2E1508 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#B94708",
  heroWaveOpacity: "0.18",
};
