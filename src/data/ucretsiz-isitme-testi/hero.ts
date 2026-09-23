// Hero content for the "Ücretsiz İşitme Testi" page
// (/degerlendirme/ucretsiz-isitme-testi). Renders through the shared
// BrandPageHero component — same component every content page this
// session uses. First page of the "Değerlendirme" series (see
// header.data.ts's servicesMega first column) — a new content genre
// within the site: a clinical SERVICE page rather than a product,
// trust, or tier page. Unlike Neden Orijinal (trust) and Segmentler
// (product tiers), this series is about the testing/assessment services
// themselves, so the health-content safety discipline used throughout
// the İhtiyacınıza Göre series (self-diagnosis disclaimers, urgent-care
// flags, hedged language) returns here in full force, since this page's
// subject is a diagnostic procedure, not a product category.
//
// This page's own scope is the overall free-test service and
// appointment experience; the more specific technical procedures
// (Odyometri, Timpanometri, Çocuk İşitme Testi, Tinnitus Değerlendirme)
// get their own future pages in this series and are cross-referenced
// from this page's own Ecosystem section rather than re-explained here.
//
// accentColor: camgöbeği / cyan-600 (#0891b2) — opens a fresh accent
// rotation for the servicesMega "Değerlendirme" column (independent of
// devicesMega's, "Neden Orijinal"'s and "Segmentler"'s rotations, since
// Değerlendirme pages live in yet another top-nav mega — Hizmetlerimiz —
// and won't appear alongside any of those in the same dropdown).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const ucretsizIsitmeTestiHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · DEĞERLENDİRME · ÜCRETSİZ İŞİTME TESTİ",
  headingLines: ["Ücretsiz İşitme Testi", "Nasıl Yapılır?"],
  paragraphs: [
    "Ücretsiz işitme testi, işitme durumunuzu bir odyometrist eşliğinde profesyonel olarak değerlendirmenizi sağlayan, herhangi bir ücret talep edilmeden sunulan bir hizmettir.",
    "Avrasya İşitme'de, işitme sağlığınızı öğrenmenin ilk adımı olan ücretsiz işitme testini deneyimli odyometrist kadromuzla gerçekleştiriyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "UZMAN EŞLİĞİNDE",
      accent: "#0891b2",
      title: "Deneyimli Odyometrist Eşliğinde Değerlendirme",
      description: "Testiniz, alanında deneyimli bir odyometrist tarafından gerçekleştirilir.",
    },
    {
      label: "ÜCRETSİZ",
      accent: "#0e7490",
      title: "Herhangi Bir Ücret Talep Edilmez",
      description: "İşitme testi, herhangi bir ücret veya taahhüt gerektirmeden sunulur.",
    },
    {
      label: "HIZLI SONUÇ",
      accent: "#155e75",
      title: "Sonuçlarınızı Aynı Gün Öğrenirsiniz",
      description: "Test sonuçlarınız, görüşme sonunda sizinle birlikte değerlendirilir.",
    },
  ],
  image: {
    src: "/images/pages/ucretsiz-isitme-testi-hero.webp",
    alt: "Bir odyometrist, odyometri cihazı ve işitme cihazı modelleri eşliğinde hastasına ücretsiz işitme testi uyguluyor",
  },
  floatingCard: {
    title: "Beltone Envision",
    description: "Test sonrasında değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#0891b2",
  accentColorHover: "#0e7490",
  accentColorSoft: "rgb(8 145 178 / 0.12)",
  accentColorBorder: "rgb(8 145 178 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(8,145,178,0.35) 0%, rgba(8,145,178,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #062730 60%, #155e75 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0e7490",
  heroWaveOpacity: "0.18",
  // Photographic hero visual (see BrandPageHero's heroImage* fields): the
  // photo's own dark-navy left side already does the "empty space for
  // text" work, so no extra dimming is layered on top of it — only a
  // larger display size (this page's photo is the main visual, not a
  // small product cutout), a soft left-edge mask so the photo's own edge
  // fades into the Hero's dark bg instead of reading as a pasted
  // rectangle, and a blurred ambient glow reusing accentColor (no new
  // color introduced).
  heroImageMaxWidth: "640px",
  heroImageMask: "linear-gradient(to right, transparent 0%, rgb(0 0 0 / 0.55) 10%, black 24%)",
  heroImageGlow: "radial-gradient(closest-side, rgb(8 145 178 / 0.30) 0%, rgb(8 145 178 / 0.12) 45%, transparent 75%)",
  // The photo's own bottom-right already shows real hearing aids on a
  // stand — the floating card's default bottom-right dock would sit
  // directly on top of them, so it moves to the photo's empty upper-left
  // (wave/glow area, no subject content) instead. Narrower too, so it
  // stays clear of the audiometer/audiologist that start further right.
  heroFloatingCardInset: "6% auto auto 0",
  heroFloatingCardWidth: "260px",
};
