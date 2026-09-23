// Hero content for the "Çocuk İşitme Testi" page
// (/degerlendirme/cocuk-isitme-testi). Renders through the shared
// BrandPageHero component — same component every content page this
// session uses. Fourth page of the "Değerlendirme" series (see
// header.data.ts's servicesMega first column), following Ücretsiz
// İşitme Testi, Odyometri and Timpanometri. Same clinical service-page
// genre and health-content safety discipline, with extra care given the
// pediatric subject: developmental-milestone language is hedged
// throughout (every child develops differently), and the page never
// implies a parent should self-diagnose based on a checklist.
//
// Hero image: unlike every other Değerlendirme page (which used a
// general-purpose device since assessment topics aren't age- or
// segment-specific), this page's own subject genuinely IS
// child-specific, so it uses one of the site's real pediatric model
// photos (Oticon Play PX, tagged "Çocuk" in its own models.ts) instead
// of a generic model — the one Değerlendirme page where a themed image
// is actually accurate rather than just illustrative.
//
// accentColor: turuncu / orange-500 (#f97316) — fourth color in the
// fresh accent rotation opened for this series on Ücretsiz İşitme
// Testi's hero.ts (cyan), continued on Odyometri (indigo) and
// Timpanometri (purple). Orange was chosen for its warm, child-friendly
// association, kept a full step away from the sitewide warning-amber
// token (#d97706) to avoid any collision.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const cocukIsitmeTestiHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · DEĞERLENDİRME · ÇOCUK İŞİTME TESTİ",
  headingLines: ["Çocuk İşitme Testi", "Nasıl Yapılır?"],
  paragraphs: [
    "Çocuklarda işitme testi, yaşa uygun yöntemlerle uygulanan ve erken tespitin dil ile konuşma gelişimini desteklemeye yardımcı olabileceği önemli bir değerlendirmedir.",
    "Avrasya İşitme'de, yenidoğan taramasından okul öncesi döneme kadar farklı yaş gruplarına uygun test yöntemleriyle çocuğunuzun işitme durumunu değerlendiriyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YAŞA UYGUN YÖNTEM",
      accent: "#f97316",
      title: "Her Yaş Grubuna Özel Test Yöntemi",
      description: "Bebeklerden okul çağı çocuklara kadar her yaş grubu için farklı test yöntemleri uygulanır.",
    },
    {
      label: "ERKEN TESPİT",
      accent: "#ea580c",
      title: "Erken Tespit Gelişimi Desteklemeye Yardımcı Olabilir",
      description: "İşitme kaybının erken tespiti, dil ve konuşma gelişimini desteklemeye yardımcı olabilir.",
    },
    {
      label: "AİLE KATILIMI",
      accent: "#c2410c",
      title: "Süreç Boyunca Aile Bilgilendirilir",
      description: "Test süreci, aile ile birlikte ve çocuğun konforu gözetilerek yürütülür.",
    },
  ],
  image: {
    src: "/images/oticon/models/play-px.webp",
    alt: "Çocuk işitme testi sonrası değerlendirilebilecek Oticon Play PX işitme cihazı görseli",
  },
  floatingCard: {
    title: "Oticon Play PX",
    description: "Çocuklar için geliştirilmiş, test sonrası değerlendirilebilecek bir model.",
  },
  accentColor: "#f97316",
  accentColorHover: "#ea580c",
  accentColorSoft: "rgb(249 115 22 / 0.12)",
  accentColorBorder: "rgb(249 115 22 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2c1206 60%, #c2410c 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#ea580c",
  heroWaveOpacity: "0.18",
};
