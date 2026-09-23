// Hero content for the "Cihaz Seçim Rehberi" page (/rehberler/
// cihaz-secim-rehberi). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// Second page of the "Rehberler" series (see header.data.ts's
// knowledgeMega first column), following İşitme Kaybı Nedir?.
//
// This is the META decision-guide page — it doesn't introduce a new
// product category or degree; it ties together the many choices
// already covered elsewhere on the site (degree pages, form-factor
// pages like BTE/ITE, the Segmentler tier series, lifestyle pages) into
// a single "how to decide" framework, cross-linking to each rather than
// re-explaining their content.
//
// accentColor: turuncu / orange-600 (#ea580c) — second color in the
// fresh accent rotation opened for the "Rehberler" column on İşitme
// Kaybı Nedir?'s hero.ts (blue); reused from elsewhere on the site
// since those pages live in different mega-menu columns.
//
// Hero image: Philips HearLink 50, a fresh top-tier model not yet used
// by any prior page this session, fitting for a comprehensive buyer's
// guide (verified in public/images/philips-hearing/models/
// hearlink-50.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const cihazSecimRehberiHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · REHBERLER · CİHAZ SEÇİM REHBERİ",
  headingLines: ["Cihaz Seçim Rehberi", "Size Uygun Modeli Nasıl Seçersiniz?"],
  paragraphs: [
    "Doğru işitme cihazı, tek bir özelliğe değil; işitme kaybınızın derecesine, yaşam tarzınıza, bütçenize ve tercihlerinize birlikte bakılarak belirlenir.",
    "Avrasya İşitme'de, bu rehberle seçim sürecinde göz önünde bulundurmanız gereken temel faktörleri anlaşılır bir şekilde bir araya getiriyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "TEK BİR EN İYİ YOKTUR",
      accent: "#ea580c",
      title: "Size Uygun Olan Cihaz Aranır",
      description: "En pahalı veya en yeni model, her zaman size en uygun olan anlamına gelmez.",
    },
    {
      label: "ÇOK YÖNLÜ DEĞERLENDİRME",
      accent: "#c2410c",
      title: "Birden Fazla Faktör Birlikte Değerlendirilir",
      description: "İşitme kaybınız, yaşam tarzınız ve bütçeniz birlikte ele alınır.",
    },
    {
      label: "UZMAN REHBERLİĞİ",
      accent: "#9a3412",
      title: "Kararı Sizinle Birlikte Veririz",
      description: "Seçim sürecinde size baskısız bir şekilde rehberlik ediyoruz.",
    },
  ],
  image: {
    src: "/images/philips-hearing/models/hearlink-50.webp",
    alt: "Cihaz seçim sürecinde değerlendirilebilecek Philips HearLink 50 işitme cihazı görseli",
  },
  floatingCard: {
    title: "Philips HearLink 50",
    description: "Seçim sürecinde karşılaştırılabilecek üst segment modellerden biri.",
  },
  accentColor: "#ea580c",
  accentColorHover: "#c2410c",
  accentColorSoft: "rgb(234 88 12 / 0.12)",
  accentColorBorder: "rgb(234 88 12 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(234,88,12,0.35) 0%, rgba(234,88,12,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2a1508 60%, #9a3412 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#c2410c",
  heroWaveOpacity: "0.18",
};
