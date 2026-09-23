// Hero content for the "Tinnitus Değerlendirme" page (/degerlendirme/
// tinnitus-degerlendirme). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// Fifth page of the "Değerlendirme" series (see header.data.ts's
// servicesMega first column), following Ücretsiz İşitme Testi,
// Odyometri, Timpanometri and Çocuk İşitme Testi. Same clinical
// service-page genre and health-content safety discipline.
//
// Distinct from the existing /teknolojiler/tinnitus-cozumleri page: that
// page covers the device-side sound-generator/fractal-tone technology
// used to support tinnitus once it's already been assessed; this page
// covers the assessment/evaluation process itself (history, audiometric
// testing, pitch/loudness matching, THI questionnaire) that comes
// first. related-content.ts links the two together explicitly.
//
// accentColor: zümrüt yeşili / emerald-600 (#059669) — fifth color in
// the fresh accent rotation opened for this series on Ücretsiz İşitme
// Testi's hero.ts (cyan #0891b2), continued on Odyometri's (indigo
// #4f46e5), Timpanometri's (purple #9333ea) and Çocuk İşitme Testi's
// (orange #f97316); emerald is a full hue-family away from all four and
// from the sitewide --color-warning token (#d97706) used in every
// page's "Dikkat Edilmesi Gerekenler" section.
//
// Hero image: Audifon Rega-R, a fresh secondary-brand model not yet
// used by any prior page this session (verified in public/images/
// audifon/models/rega-r.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const tinnitusDegerlendirmeHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · DEĞERLENDİRME · TİNNİTUS DEĞERLENDİRME",
  headingLines: ["Tinnitus (Kulak Çınlaması)", "Değerlendirmesi Nasıl Yapılır?"],
  paragraphs: [
    "Tinnitus değerlendirmesi, kulak çınlaması şikayetinizin olası nedenlerini ve işitme durumunuzla ilişkisini anlamaya yönelik kapsamlı bir işitme muayenesidir.",
    "Avrasya İşitme'de, öykünüzü dinleyerek başlayıp odyometrik testler ve tinnitus eşleştirme yöntemleriyle devam eden bir değerlendirme süreci sunuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "KAPSAMLI ÖYKÜ",
      accent: "#059669",
      title: "Şikayetinizi Anlamakla Başlar",
      description: "Tinnitus'un ne zaman başladığı, tetikleyicileri ve şiddeti hakkında detaylı bir öykü alınır.",
    },
    {
      label: "ODYOMETRİK DEĞERLENDİRME",
      accent: "#047857",
      title: "İşitme Kaybı Birlikteliği Araştırılır",
      description: "Tinnitus çoğu zaman işitme kaybıyla birlikte görülür; bu nedenle işitme testi süreç dahilindedir.",
    },
    {
      label: "TİNNİTUS EŞLEŞTİRME",
      accent: "#065f46",
      title: "Perde ve Şiddet Ölçümü Yapılır",
      description: "Duyduğunuz çınlamanın perdesi ve şiddeti, size özel bir referans olarak ölçülür.",
    },
  ],
  image: {
    src: "/images/audifon/models/rega-r.webp",
    alt: "Tinnitus değerlendirmesi sonrası önerilebilecek Audifon Rega-R işitme cihazı görseli",
  },
  floatingCard: {
    title: "Audifon Rega-R",
    description: "Değerlendirme sonucuna göre önerilebilecek modellerden biri.",
  },
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorSoft: "rgb(5 150 105 / 0.12)",
  accentColorBorder: "rgb(5 150 105 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(5,150,105,0.35) 0%, rgba(5,150,105,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a2019 60%, #065f46 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#047857",
  heroWaveOpacity: "0.18",
};
