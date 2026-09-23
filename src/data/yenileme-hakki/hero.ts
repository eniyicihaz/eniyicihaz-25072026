// Hero content for the "Yenileme Hakkı" page (/sgk/yenileme-hakki).
// Renders through the shared BrandPageHero component. Fifth and final
// page of the "SGK & Haklar" series (see header.data.ts's knowledgeMega
// third column), following /sgk/katki-payi, /sgk/rapor-sureci,
// /sgk/gerekli-belgeler and /sgk/cocuklarda-sgk.
//
// CRITICAL accuracy note: the specific renewal PERIOD (how many years
// must pass before SGK supports a new device) is exactly the kind of
// SGK mevzuatı detail that changes over time — same category of risk
// as the TL figures in src/data/sgk/payments.ts. This page deliberately
// does NOT state a specific renewal period as a hard number; it
// explains the renewal CONCEPT and the circumstances that can justify
// early renewal in general terms, and defers to the pillar page and
// the clinic for the current period. See considerations.ts for the
// explicit disclaimer.
//
// accentColor: turkuaz / teal-600 (#0d9488) — fifth color in the "SGK &
// Haklar" column's own accent rotation (green, cyan, indigo, pink
// before this). Reused from elsewhere on the site since those pages
// live in different mega-menu columns.
//
// Hero image: MAICO Kulak Arkası Serisi, a fresh model not yet used by
// any prior page this session (verified in public/images/maico/models/
// kulak-arkasi-serisi.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const yenilemeHakkiHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · SGK & HAKLAR · YENİLEME HAKKI",
  headingLines: ["SGK İşitme Cihazı", "Yenileme Hakkı"],
  paragraphs: [
    "SGK, belirli bir süre kullanılan işitme cihazlarının yeniden destek kapsamında yenilenmesine imkân tanır.",
    "Avrasya İşitme'de, yenileme hakkının nasıl işlediğini ve hangi durumlarda erken yenileme talep edilebileceğini anlatıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "PERİYODİK YENİLEME HAKKI",
      accent: "#0d9488",
      title: "Cihazınızı Yeniden SGK Desteğiyle Alabilirsiniz",
      description: "Belirli bir süre sonunda yeni bir cihaz için tekrar SGK desteğinden yararlanabilirsiniz.",
    },
    {
      label: "ÖZEL DURUMLARDA ERKEN YENİLEME",
      accent: "#0f766e",
      title: "Bazı Durumlarda Süre Beklemeden Yenileme Mümkün",
      description: "Cihaz arızası veya işitme kaybının ilerlemesi gibi durumlarda erken yenileme değerlendirilebilir.",
    },
    {
      label: "GÜNCEL SÜRE İÇİN YANINIZDAYIZ",
      accent: "#115e59",
      title: "Yenileme Zamanınızı Sizinle Birlikte Kontrol Ederiz",
      description: "Cihazınızın yenileme zamanı geldiğinde size hatırlatır, süreci birlikte planlarız.",
    },
  ],
  image: {
    src: "/images/maico/models/kulak-arkasi-serisi.webp",
    alt: "SGK yenileme hakkı kapsamında değerlendirilebilecek MAICO Kulak Arkası Serisi işitme cihazı görseli",
  },
  floatingCard: {
    title: "MAICO Kulak Arkası Serisi",
    description: "Yenileme hakkınız doğduğunda değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorSoft: "rgb(13 148 136 / 0.12)",
  accentColorBorder: "rgb(13 148 136 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(13,148,136,0.35) 0%, rgba(13,148,136,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a201c 60%, #115e59 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0f766e",
  heroWaveOpacity: "0.18",
};
