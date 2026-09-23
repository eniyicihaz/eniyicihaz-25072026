// Hero content for the "Uyum Süreci" page (/rehberler/uyum-sureci).
// Renders through the shared BrandPageHero component — same component
// every content page this session uses. Fourth and final page of the
// "Rehberler" series (see header.data.ts's knowledgeMega first
// column), following İşitme Kaybı Nedir?, Cihaz Seçim Rehberi and İlk
// Kullanım Rehberi. Every one of those three prior siblings explicitly
// cross-referenced this page for the longer adaptation journey — this
// page delivers on that promise.
//
// Distinct from İlk Kullanım Rehberi: that page covers the practical,
// operational first-days basics (physical handling, controls, initial
// wearing schedule). This page covers the longer, weeks-to-months
// NEUROLOGICAL/PSYCHOLOGICAL adaptation process — how the brain
// relearns to process sound — genuinely different timescale and
// subject matter, not a repeat of the same ground.
//
// accentColor: mor / violet-600 (#7c3aed) — fourth and final color in
// the fresh accent rotation opened for the "Rehberler" column; reused
// from elsewhere on the site since those pages live in different
// mega-menu columns and never co-appear with this one. Violet evokes a
// calm, reflective, "growth over time" tone fitting an adaptation
// journey.
//
// Hero image: Coselgi Effect, a fresh model not yet used by any prior
// page this session (verified in public/images/coselgi/models/
// effect.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const uyumSureciHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · REHBERLER · UYUM SÜRECİ",
  headingLines: ["Uyum Süreci", "Cihazınıza Zamanla Nasıl Alışırsınız?"],
  paragraphs: [
    "Uyum süreci, beyninizin yeniden duymaya başladığı sesleri anlamlandırmayı öğrenmesi için gereken, genellikle haftalar veya aylar süren doğal bir süreçtir.",
    "Avrasya İşitme'de, bu sürecin ne kadar süreceğini ve neler beklemeniz gerektiğini gerçekçi bir şekilde anlatmayı amaçlıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DOĞAL BİR SÜREÇ",
      accent: "#7c3aed",
      title: "Beyniniz Yeniden Öğreniyor",
      description: "Sesleri anlamlandırmayı yeniden öğrenmek, beyniniz için zaman gerektiren doğal bir süreçtir.",
    },
    {
      label: "KİŞİDEN KİŞİYE DEĞİŞİR",
      accent: "#6d28d9",
      title: "Herkesin Uyum Hızı Farklıdır",
      description: "Uyum süresi, işitme geçmişinize ve kişisel özelliklerinize göre değişebilir.",
    },
    {
      label: "DESTEKLİ SÜREÇ",
      accent: "#5b21b6",
      title: "Bu Yolculukta Yalnız Değilsiniz",
      description: "Uyum süreci boyunca takip randevularıyla sizi destekliyoruz.",
    },
  ],
  image: {
    src: "/images/coselgi/models/effect.webp",
    alt: "Uyum sürecinde kullanılabilecek Coselgi Effect işitme cihazı görseli",
  },
  floatingCard: {
    title: "Coselgi Effect",
    description: "Uyum sürecinde örnek alınan modellerden biri.",
  },
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorSoft: "rgb(124 58 237 / 0.12)",
  accentColorBorder: "rgb(124 58 237 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1a0f2e 60%, #5b21b6 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#6d28d9",
  heroWaveOpacity: "0.18",
};
