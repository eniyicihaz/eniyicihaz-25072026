// Hero content for the Rexton brand page (/markalar/rexton). Renders
// through the shared BrandPageHero component.
//
// Positioning axis: 1955'ten bu yana Alman mühendislik mirası + Reach
// ailesinin güncel bağlantı teknolojisi — Rexton'ın gerçek, doğrulanabilir
// konumu, 1955'te Almanya'da kurulan, 1994'te Siemens Hearing
// Instruments tarafından devralınan ve 2015'te Sivantos (bugünkü WS
// Audiology) çatısına geçen bir marka olmasıdır. Aynı WS Audiology
// grubundaki Signia'nın Own Voice Processing/konuşma yapay zekâsı ve
// Audio Service'in kulak içi uzmanlığından farklı olarak, Rexton'ın
// ekseni burada "BiCore/MCore işlemci aileleri + Reach'in güncel
// bağlantı teknolojisi" olarak konumlandırıldı — gerçek ürün adlarına
// dayanan, kardeş markalardan ayrışan bir eksen.
//
// accentColor: sarı-altın (#F0BC1D), bu projenin kendi gerçek Rexton
// logosundan (/images/brands/rexton-logo-seffaf.webp — sarı "REXTON"
// yazısı) doğrudan görsel olarak okunarak belirlendi. Açık tonlu bir
// renk olduğu için (BrandExtended bileşeninin CSS yorumunda da belirtildi
// — açık sarı logolar gri tonlamada neredeyse beyaza döner), badge metni
// ve koyu varyantlar okunabilirlik için belirgin şekilde koyulaştırıldı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const rextonHero: BrandPageHeroContent = {
  badge: "REXTON · 1955'TEN BU YANA",
  headingLines: ["Rexton ile Güvenilir", "Alman Mühendisliği"],
  paragraphs: [
    "Rexton, 1955'ten bu yana süregelen bir Alman mühendislik mirasına ve BiCore, MCore işlemci ailelerine sahip, bugün WS Audiology grubuna (Signia ile aynı çatı) bağlı bir markadır.",
    "Reach, BiCore, MCore ve diğer Rexton modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "REACH",
      accent: "#C79712",
      title: "Reach Bağlantı Teknolojisi",
      description: "Markanın en güncel bağlantı özelliklerini taşıyan ürün ailesi.",
    },
    {
      label: "CORE",
      accent: "#8A6A0E",
      title: "BiCore / MCore İşlemciler",
      description: "Farklı ihtiyaç seviyelerine uygun işlemci aileleri sunar.",
    },
    {
      label: "1955",
      accent: "#5C4709",
      title: "Alman Mirası",
      description: "1955'ten bu yana süregelen bir Alman işitme cihazı mühendisliği geleneği.",
    },
  ],
  image: {
    src: "/images/pages/rexton-hero.webp",
    alt: "Rexton Reach işitme cihazı",
  },
  floatingCard: {
    title: "Reach Ailesi",
    description: "Rexton'ın en güncel bağlantı teknolojisini taşıyan model ailesi.",
  },
  accentColor: "#C79712",
  accentColorHover: "#8A6A0E",
  accentColorSoft: "rgb(199 151 18 / 0.12)",
  accentColorBorder: "rgb(199 151 18 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Rexton's own
  // already-researched accent (#C79712). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(199,151,18,0.35) 0%, rgba(199,151,18,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1A1508 60%, #2A220C 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#8A6A0E",
  heroWaveOpacity: "0.18",
};
