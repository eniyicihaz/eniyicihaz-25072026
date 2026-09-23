// Hero content for the "Çocuklarda SGK" page (/sgk/cocuklarda-sgk).
// Renders through the shared BrandPageHero component. Fourth page of
// the "SGK & Haklar" series (see header.data.ts's knowledgeMega third
// column), following /sgk/katki-payi, /sgk/rapor-sureci and
// /sgk/gerekli-belgeler.
//
// Accuracy discipline (same as the rest of the series): this page
// explains WHY and HOW children are treated as a distinct SGK category
// (erken müdahale, ayrı yaş grupları, veli/vasi belgeleri) in general
// terms. It deliberately does not restate the specific TL support
// figures already published in src/data/sgk/payments.ts, and points
// readers to the pillar page for those.
//
// accentColor: pembe / pink-600 (#db2777) — fourth color in the "SGK &
// Haklar" column's own accent rotation (green, cyan, indigo before
// this). Pink/warm tone fits a pediatric-focused topic without
// resorting to a literal baby-blue cliché; reused from elsewhere on
// the site since those pages live in different mega-menu columns.
//
// Hero image: Oticon Xceed Play, Oticon's own pediatric hearing aid
// line (the "Play" family), a genuinely fitting and verified real
// product for a children's SGK page — fresh, not yet used by any prior
// page this session (verified in public/images/oticon/models/
// xceed-play.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const cocuklardaSgkHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · SGK & HAKLAR · ÇOCUKLARDA SGK",
  headingLines: ["Çocuklarda SGK", "İşitme Cihazı Desteği"],
  paragraphs: [
    "SGK, çocuklarda erken müdahalenin önemi nedeniyle işitme cihazı desteğinde çocukları ayrı bir kategori olarak değerlendirir.",
    "Avrasya İşitme'de, çocuklarda SGK sürecinin yetişkinlerden farklarını ve pediatrik değerlendirmenin nasıl işlediğini anlatıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "ERKEN MÜDAHALE ÖNCELİĞİ",
      accent: "#db2777",
      title: "Çocuklarda Süreç Önceliklendirilir",
      description: "Dil ve konuşma gelişimi için erken tanı ve müdahale büyük önem taşır.",
    },
    {
      label: "YAŞ GRUBUNA GÖRE DEĞERLENDİRME",
      accent: "#be185d",
      title: "Pediatrik Odyoloji ile Değerlendirilir",
      description: "Çocuğun yaşına uygun özel test yöntemleriyle işitme kaybı değerlendirilir.",
    },
    {
      label: "AİLENİZLE BİRLİKTE",
      accent: "#9d174d",
      title: "Süreç Boyunca Aileye Rehberlik Ederiz",
      description: "Veli/vasi belgelerinden cihaz uygulamasına kadar aileyle birlikte ilerleriz.",
    },
  ],
  image: {
    src: "/images/oticon/models/xceed-play.webp",
    alt: "Çocuklarda SGK desteği kapsamında değerlendirilebilecek Oticon Xceed Play işitme cihazı görseli",
  },
  floatingCard: {
    title: "Oticon Xceed Play",
    description: "Oticon'un çocuklara özel Play serisinden, SGK destekli alımda değerlendirilebilecek bir model.",
  },
  accentColor: "#db2777",
  accentColorHover: "#be185d",
  accentColorSoft: "rgb(219 39 119 / 0.12)",
  accentColorBorder: "rgb(219 39 119 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(219,39,119,0.35) 0%, rgba(219,39,119,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2a0a1a 60%, #9d174d 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#be185d",
  heroWaveOpacity: "0.18",
};
