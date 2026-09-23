// Hero content for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared BrandPageHero
// component.
//
// Positioning axis: global tüketici elektroniği güveni + basit,
// anlaşılır kademelendirme — Philips HearLink'in gerçek, doğrulanabilir
// konumu, Demant ile yapılan bir lisans anlaşması kapsamında, Demant'ın
// Velox-S/Velox platformu üzerinde üretilen, ancak dünyaca tanınan
// Philips markası altında sunulan bir işitme cihazı hattı olmasıdır.
// Diğer Demant ailesi markalarından (Oticon'un BrainHearing'i, Bernafon'un
// Smart Sensor'ü, Sonic'in SoundDNA'sı, MAICO'nun ölçüm bilimi mirası)
// farklı olarak, Philips'in ekseni burada "herkesin tanıdığı bir
// tüketici elektroniği markasından, HearLink 30/40/50 gibi anlaşılır
// kademelerle sunulan bir işitme cihazı" — ilk kez cihaz alacak
// kullanıcılar için özellikle anlamlı, gerçek bir farklılaşma noktası.
//
// accentColor: mavi (#0B5FCE), bu projenin kendi gerçek Philips
// logosundan (/images/brands/philips-logo-seffaf.webp — mavi "PHILIPS"
// yazısı) doğrudan görsel olarak okunarak belirlendi. Bu markanın dünya
// çapında tanınan "Philips mavisi" kurumsal kimliğine sadık kalınarak,
// bu settteki diğer mavi tonlu markalardan (Audio Service'in daha koyu
// lacivert-mavisi, Coselgi'nin daha turkuvaza yakın mavisi) net şekilde
// ayrıştırıldı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const philipsHearingHero: BrandPageHeroContent = {
  badge: "PHILIPS HEARLINK · DEMANT LİSANSIYLA",
  headingLines: ["Philips HearLink ile Tanıdık", "Bir Markadan İşitme Çözümü"],
  paragraphs: [
    "Philips HearLink, dünyaca tanınan Philips markası altında, Demant ile yapılan lisans anlaşması kapsamında Velox-S platformu üzerinde geliştirilen bir işitme cihazı hattıdır.",
    "HearLink 50, 40, 30 ve diğer Philips modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "TIER",
      accent: "#0B5FCE",
      title: "Anlaşılır Kademelendirme",
      description: "HearLink 50, 40 ve 30 ile ihtiyacınıza uygun net bir seçim sunar.",
    },
    {
      label: "VELOX",
      accent: "#4A8CE0",
      title: "Velox-S Platformu",
      description: "Demant'ın Velox-S platformu üzerinde geliştirilen ses işleme teknolojisi.",
    },
    {
      label: "TRUST",
      accent: "#0848A3",
      title: "Global Marka Güveni",
      description: "Dünyaca tanınan Philips markasının güvenilirliğini işitme cihazına taşır.",
    },
  ],
  image: {
    src: "/images/pages/philips-hearing-hero.webp",
    alt: "Philips HearLink 50 işitme cihazı",
  },
  floatingCard: {
    title: "HearLink Ailesi",
    description: "50, 40 ve 30 kademeleriyle ihtiyacınıza uygun net bir seçim.",
  },
  accentColor: "#0B5FCE",
  accentColorHover: "#0848A3",
  accentColorSoft: "rgb(11 95 206 / 0.12)",
  accentColorBorder: "rgb(11 95 206 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Philips's own
  // already-researched accent (#0B5FCE). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(11,95,206,0.35) 0%, rgba(11,95,206,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #071527 60%, #0A1F3D 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0848A3",
  heroWaveOpacity: "0.18",
};
