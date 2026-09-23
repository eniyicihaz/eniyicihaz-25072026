// Hero content for the Sonic brand page (/markalar/sonic). Renders
// through the shared BrandPageHero component.
//
// Positioning axis: Amerikan mühendisliği + SoundDNA platformunun
// otomatik/adaptif ses işlemesi — Sonic'in gerçek, doğrulanabilir konumu,
// 1998'de Salt Lake City, Utah'ta kurulan ve bugün Oticon, Bernafon ve
// MAICO ile aynı çatı olan Demant Grubu'na bağlı olmasıdır. Aynı grup
// içindeki Bernafon'un Smart Sensor hareket algılamasından ve MAICO'nun
// ölçüm bilimi mirasından farklı olarak, Sonic'in ekseni burada Enchant
// ailesinin SoundDNA platformu ve markanın kendi "Everyday Sounds
// Better" sloganı (kendi logosunda yer alan gerçek bir ifade) üzerinden
// konumlandırıldı.
//
// accentColor: koyu gri-mavi (#3D4C59), bu projenin kendi gerçek Sonic
// logosundan (/images/brands/sonic-logo-seffaf.webp — koyu gri-mavi
// "SONIC" yazısı ve ses dalgası simgesi, "Everyday Sounds Better"
// sloganı) doğrudan görsel olarak okunarak belirlendi. Bu settteki tek
// gri-mavi tonlu marka — diğer markalardan net şekilde ayrışan, sade ve
// teknik bir ton.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const sonicHero: BrandPageHeroContent = {
  badge: "SONIC · EVERYDAY SOUNDS BETTER",
  headingLines: ["Sonic ile Günlük Sesler", "Daha İyi Duyulsun"],
  paragraphs: [
    "Sonic, 1998'de Salt Lake City, Utah'ta kurulan ve bugün Oticon ile Bernafon'un da içinde bulunduğu Demant Grubu'na bağlı bir markadır.",
    "SoundDNA platformu üzerine kurulu Enchant, Radiant ve diğer Sonic modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "SOUNDDNA",
      accent: "#3D4C59",
      title: "SoundDNA Platformu",
      description: "Ortamı analiz ederek sesi otomatik optimize etmeye yardımcı olan, Sonic'in en güncel platformu.",
    },
    {
      label: "ENCHANT",
      accent: "#5C6E7D",
      title: "Enchant Ailesi",
      description: "SoundDNA platformu üzerine kurulu olan, markanın en güncel model ailesi.",
    },
    {
      label: "USA",
      accent: "#2C3841",
      title: "Amerikan Mühendisliği",
      description: "1998'den bu yana Salt Lake City, Utah kökenli bir mühendislik geleneği.",
    },
  ],
  image: {
    src: "/images/pages/sonic-hero.webp",
    alt: "Sonic Enchant işitme cihazı",
  },
  floatingCard: {
    title: "SoundDNA",
    description: "Karmaşık ses ortamlarında uyum sağlamaya yardımcı olan adaptif platform.",
  },
  accentColor: "#3D4C59",
  accentColorHover: "#2C3841",
  accentColorSoft: "rgb(61 76 89 / 0.12)",
  accentColorBorder: "rgb(61 76 89 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Sonic's own
  // already-researched accent (#3D4C59). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(61,76,89,0.35) 0%, rgba(61,76,89,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0D1114 60%, #151B1F 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#2C3841",
  heroWaveOpacity: "0.18",
};
