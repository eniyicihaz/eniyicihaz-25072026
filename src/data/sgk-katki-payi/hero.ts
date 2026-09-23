// Hero content for the "SGK Katkı Payı" page (/sgk/katki-payi).
// Renders through the shared BrandPageHero component — same component
// every content page this session uses. First page of the new "SGK &
// Haklar" series (see header.data.ts's knowledgeMega third column).
//
// CRITICAL accuracy note: the real SGK pillar page
// (/sgk-isitme-cihazi-odemesi, via src/data/sgk/payments.ts) already
// publishes specific, date-stamped 2026 TL figures for SGK support
// amounts. This page deliberately does NOT restate any of those
// specific amounts — duplicating dated financial figures across two
// pages risks them going stale independently and contradicting each
// other. Instead, this page explains the katkı payı CONCEPT and
// CALCULATION MECHANISM in general terms, and every section that would
// naturally need a number instead points to the pillar page for the
// current, authoritative figures. See considerations.ts for the
// explicit disclaimer.
//
// accentColor: yeşil / green-600 (#16a34a) — first color in a fresh
// accent rotation opened for the "SGK & Haklar" column; reused from
// elsewhere on the site since those pages live in a different
// mega-menu column. Green evokes financial support fittingly for a
// katkı payı (contribution/subsidy) topic.
//
// Hero image: A&M XTM P12, a fresh model not yet used by any prior
// page this session (verified in public/images/am/models/
// xtm-p12.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const sgkKatkiPayiHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · SGK & HAKLAR · SGK KATKI PAYI",
  headingLines: ["SGK Katkı Payı", "Nasıl Hesaplanır?"],
  paragraphs: [
    "SGK katkı payı, SGK'nın işitme cihazınız için sağladığı destek tutarı ile cihazın fiyatı arasındaki farkı ifade eder.",
    "Avrasya İşitme'de, katkı payının nasıl hesaplandığını ve hangi faktörlere göre değiştiğini anlaşılır bir şekilde anlatıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YAŞ VE DURUMA GÖRE",
      accent: "#16a34a",
      title: "Destek Tutarı Kategoriye Göre Değişir",
      description: "Yaş grubunuz ve çalışan veya emekli olmanız, SGK destek tutarınızı belirler.",
    },
    {
      label: "GÜNCEL TUTARLAR",
      accent: "#15803d",
      title: "Güncel Rakamlar SGK Rehberimizde",
      description: "Katkı payı hesaplamasında kullanılan güncel SGK tutarlarını ana SGK rehberimizde bulabilirsiniz.",
    },
    {
      label: "ŞEFFAF HESAPLAMA",
      accent: "#166534",
      title: "Hesaplamayı Sizinle Birlikte Yaparız",
      description: "Size özel katkı payı tutarını randevunuzda net bir şekilde paylaşırız.",
    },
  ],
  image: {
    src: "/images/am/models/xtm-p12.webp",
    alt: "SGK desteğiyle değerlendirilebilecek A&M XTM P12 işitme cihazı görseli",
  },
  floatingCard: {
    title: "A&M XTM P12",
    description: "SGK destekli alım kapsamında değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#16a34a",
  accentColorHover: "#15803d",
  accentColorSoft: "rgb(22 163 74 / 0.12)",
  accentColorBorder: "rgb(22 163 74 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(22,163,74,0.35) 0%, rgba(22,163,74,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a2015 60%, #166534 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#15803d",
  heroWaveOpacity: "0.18",
};
