// Hero content for the Beltone brand page (/markalar/beltone). Renders
// through the shared BrandPageHero component.
//
// Positioning axis: 1940'tan bu yana Amerikan işitme cihazı öncüsü +
// yapay zekâ destekli güncel nesil işleme — Beltone'un gerçek,
// doğrulanabilir konumu, 1940'ta Chicago'da Sam Posen tarafından kurulan
// ve sektörün en köklü Amerikan markalarından biri olmasıdır (85. yıl,
// 2025). Bugün GN Grubu'na (ReSound ile aynı çatı, 2000'den bu yana)
// bağlı olsa da, ReSound'un bu projede zaten işlenen M&RIE/Auracast
// eksenini tekrar etmemek için, Beltone'un ekseni burada "uzun soluklu
// Amerikan mirası + Şubat 2025'te tanıtılan Envision ailesinin yapay
// zekâ/DNN destekli işlemesi" olarak konumlandırıldı — gerçek ve GN
// içindeki kardeş markadan ayrışan bir eksen.
//
// accentColor: lacivert (#1B3864), bu projenin kendi gerçek Beltone
// logosundan (/images/brands/beltone-logo-seffaf.webp — koyu lacivert
// "Beltone" yazısı ve stilize küre simgesi) doğrudan görsel olarak
// okunarak belirlendi. Bu settteki lacivert tonlu dört markadan biri
// (Audio Service, Maico, Unitron ile birlikte) — burada klasik, biraz
// daha koyu bir kurumsal lacivert tercih edilerek diğerlerinden
// ayrıştırıldı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const beltoneHero: BrandPageHeroContent = {
  badge: "BELTONE · 1940'TAN BU YANA",
  headingLines: ["Beltone ile 85 Yıllık", "Amerikan İşitme Mirası"],
  paragraphs: [
    "Beltone, 1940'ta Chicago'da kurulan ve bugün Şubat 2025'te tanıtılan Envision ailesinin yapay zekâ destekli DNN ses işlemesini sunan, köklü bir Amerikan markasıdır.",
    "Envision, Serene, Commence ve diğer Beltone modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "AI",
      accent: "#1B3864",
      title: "Envision DNN İşleme",
      description: "Ortamı sürekli izleyen ve değişen ses ortamlarına uyum sağlayan yapay zekâ destekli işleme.",
    },
    {
      label: "1940",
      accent: "#3E5A88",
      title: "Amerikan Mirası",
      description: "Chicago'da Sam Posen tarafından kurulan, 85 yılı aşkın bir işitme cihazı geleneği.",
    },
    {
      label: "GN",
      accent: "#12274A",
      title: "GN Grubu Güvencesi",
      description: "2000 yılından bu yana ReSound ile aynı global grubun bir parçasıdır.",
    },
  ],
  image: {
    src: "/images/pages/beltone-hero.webp",
    alt: "Beltone Envision Bluetooth işitme cihazı",
  },
  floatingCard: {
    title: "Envision AI",
    description: "Yapay zekâ destekli DNN işleme ile ortamınıza otomatik uyum.",
  },
  accentColor: "#1B3864",
  accentColorHover: "#12274A",
  accentColorSoft: "rgb(27 56 100 / 0.12)",
  accentColorBorder: "rgb(27 56 100 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Beltone's own
  // already-researched accent (#1B3864). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(27,56,100,0.35) 0%, rgba(27,56,100,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #080F1C 60%, #0C182C 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#12274A",
  heroWaveOpacity: "0.18",
};
