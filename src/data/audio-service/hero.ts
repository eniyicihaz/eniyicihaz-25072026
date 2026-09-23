// Hero content for the Audio Service brand page (/markalar/audio-service).
// Renders through the shared BrandPageHero component.
//
// Positioning axis: kulak içi (ITE) uzmanlığı + 1977'den bu yana Alman
// zanaatkârlığı — Audio Service'in gerçek, doğrulanabilir konumu, 1977'de
// Löhne, Almanya'da Horst Peter Hühne tarafından, kulak içi işitme
// sistemlerinin faydalarını Amerika'da fark etmesi üzerine kurulmuş
// olmasıdır. Bugün WS Audiology grubuna (Signia, Widex, Rexton'ın da
// içinde bulunduğu grup) bağlı olsa da, çekirdek uzmanlığı hâlâ kulak içi
// (ITE) modellerdir. Audifon'un tinnitus ekseninden, Rexton'ın çekirdek
// işlemci ekseninden farklı olarak, buradaki eksen "kulak içinde neredeyse
// görünmez, kişiye özel üretim" — bu setteki hiçbir markanın birincil
// ekseni olarak kullanılmamış, gerçek bir uzmanlık alanı.
//
// accentColor: lacivert-mavi (#1240A0), bu projenin kendi gerçek Audio
// Service logosundan (/images/brands/audio-service-logo-seffaf.webp —
// koyu lacivert "Audio Service" yazısı ve stilize kulak/ses simgesi)
// doğrudan görsel olarak okunarak belirlendi. Bu settteki dört lacivert
// tonlu markadan biri (Beltone, Maico, Unitron ile birlikte) — gerçekten
// öyle, çünkü hepsi kendi gerçek kurumsal kimliklerinde lacivert/mavi
// kullanıyor; burada en canlı/doygun mavi tonu tercih edilerek diğer
// üçünden (daha koyu/klasik lacivert tonları) ayrıştırıldı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const audioServiceHero: BrandPageHeroContent = {
  badge: "AUDIO SERVICE · KULAK İÇİ UZMANI",
  headingLines: ["Audio Service ile Kulak İçinde", "Neredeyse Görünmez Çözümler"],
  paragraphs: [
    "Audio Service, 1977'den bu yana Löhne, Almanya'da, kulak içi (ITE) işitme sistemleri konusunda uzmanlaşmış bir markadır.",
    "Mood, Quix, Stiline ve diğer Audio Service modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "ITE",
      accent: "#1240A0",
      title: "Kulak İçi Uzmanlığı",
      description: "Kulak kanalı içinde neredeyse görünmez, kişiye özel üretilen modeller konusunda uzmanlaşmıştır.",
    },
    {
      label: "1977",
      accent: "#3D63C4",
      title: "Alman Zanaatkârlığı",
      description: "1977'den bu yana Löhne, Almanya'da süregelen bir üretim geleneği.",
    },
    {
      label: "WSA",
      accent: "#0C2E7A",
      title: "WS Audiology Grubu",
      description: "Signia, Widex ve Rexton ile aynı global grubun bir parçasıdır.",
    },
  ],
  image: {
    src: "/images/pages/audio-service-hero.webp",
    alt: "Audio Service Stiline işitme cihazı",
  },
  floatingCard: {
    title: "Kulak İçi Uzmanı",
    description: "1977'den bu yana kulak içi işitme sistemlerinde uzmanlaşmıştır.",
  },
  accentColor: "#1240A0",
  accentColorHover: "#0C2E7A",
  accentColorSoft: "rgb(18 64 160 / 0.12)",
  accentColorBorder: "rgb(18 64 160 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Audio Service's own
  // already-researched accent (#1240A0). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(18,64,160,0.35) 0%, rgba(18,64,160,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #070E1F 60%, #0A1630 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0C2E7A",
  heroWaveOpacity: "0.18",
};
