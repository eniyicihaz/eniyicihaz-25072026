// Hero content for the "Standart Seri" page (/segmentler/standart-seri).
// Renders through the shared BrandPageHero component — same component
// every /isitme-cihazlari/*, /teknolojiler/*, /ihtiyaciniza-gore/*,
// /neden-orijinal/* and /segmentler/* page uses. Second page of the
// "Segmentler" series (see header.data.ts's brandsMega third column),
// following Premium Seri. Same candidacy-based content genre as Premium
// Seri (not the trust genre used in "Neden Orijinal") — this page's own
// angle is the balanced, everyday tier rather than the top-of-line one.
//
// Hero image note: every photographed "genel kullanım" model across the
// six primary brands (Oticon/Phonak/Signia/Widex/ReSound/NuEar) is
// already used as a hero image elsewhere this session, and the only
// unused Oticon photos left are children's models (Opn Play, Play PX,
// Xceed Play) or the économique Ruby (reserved for the future Ekonomik
// Seri page). Rather than force a mismatched image, this page uses Vista
// B — a real, photographed model from the site's wider brand catalog
// (see src/pages/markalar/vista.astro) whose own category tag is
// literally "Orta Kademe" (mid-tier) with a description ("dengeli bir
// teknoloji seviyesi ve fiyat-performans") that is a near-verbatim match
// for this page's subject. recommended-brands.ts below still lists the
// same six primary brands as every prior page, for consistency.
//
// accentColor: gök mavisi / sky-600 (#0284c7) — second color in a fresh
// accent rotation opened for the brandsMega "Segmentler" column on
// Premium Seri's hero.ts (gold, #eab308); see that file for why this
// rotation is independent of both devicesMega's and "Neden Orijinal"'s.
// Sky blue was chosen for its "clear, reliable, everyday" association,
// distinct from Premium Seri's gold.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const standartSeriHero: BrandPageHeroContent = {
  badge: "MARKALAR · SEGMENTLER · STANDART SERİ",
  headingLines: ["Standart Seri", "İşitme Cihazları"],
  paragraphs: [
    "Standart seri işitme cihazları; günlük kullanım ihtiyaçlarını karşılayan dengeli bir teknoloji seviyesini, uygun bir fiyat-performans oranıyla bir araya getirir.",
    "Avrasya İşitme'de, dünyaca tanınan markaların standart seri modellerini; güvenilir performans ve tam garanti güvencesiyle sunuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "DENGELİ PERFORMANS",
      accent: "#0284c7",
      title: "Günlük İhtiyaçlara Uygun Dengeli Teknoloji",
      description: "Standart seri modeller, günlük kullanım için gerekli temel ve orta düzey özellikleri bir arada sunar.",
    },
    {
      label: "FİYAT-PERFORMANS",
      accent: "#0369a1",
      title: "Uygun Fiyat-Performans Dengesi",
      description: "Standart seri, premium serinin sunduğu bazı ileri özellikler olmadan dengeli bir yatırım imkânı sunar.",
    },
    {
      label: "GÜVENİLİR TEKNOLOJİ",
      accent: "#075985",
      title: "Kanıtlanmış ve Güvenilir Bir Teknoloji Seviyesi",
      description: "Standart seri modeller, geniş kullanıcı kitlesi tarafından tercih edilen kanıtlanmış bir teknoloji seviyesi sunar.",
    },
  ],
  image: {
    src: "/images/vista/models/vista-b.webp",
    alt: "Dengeli teknoloji seviyesiyle standart seriyi temsil eden Vista B işitme cihazı görseli",
  },
  floatingCard: {
    title: "Vista B",
    description: "Dengeli teknoloji seviyesi, standart serinin bir örneği.",
  },
  accentColor: "#0284c7",
  accentColorHover: "#0369a1",
  accentColorSoft: "rgb(2 132 199 / 0.12)",
  accentColorBorder: "rgb(2 132 199 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(2,132,199,0.35) 0%, rgba(2,132,199,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #062233 60%, #075985 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0369a1",
  heroWaveOpacity: "0.18",
};
