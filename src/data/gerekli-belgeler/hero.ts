// Hero content for the "Gerekli Belgeler" page (/sgk/gerekli-belgeler).
// Renders through the shared BrandPageHero component. Third page of the
// "SGK & Haklar" series (see header.data.ts's knowledgeMega third
// column), following /sgk/katki-payi and /sgk/rapor-sureci.
//
// Accuracy discipline (same as sgk-katki-payi and rapor-sureci): this
// page explains the DOCUMENT CATEGORIES needed for an SGK application
// in general terms. Document requirements can be updated by SGK
// mevzuatı, so the page avoids presenting itself as the final,
// exhaustive checklist and instead points readers to the clinic and to
// Rapor Süreci for the current, complete list before their application.
//
// accentColor: çivit / indigo-600 (#4f46e5) — third color in the "SGK &
// Haklar" column's own accent rotation (green for katkı payı, cyan for
// rapor süreci). Indigo evokes formality/documentation, fitting for a
// belgeler (paperwork) topic; reused from elsewhere on the site since
// that page lives in a different mega-menu column.
//
// Hero image: Audio Service Stiline, a fresh model not yet used by any
// prior page this session (verified in public/images/audio-service/
// models/stiline.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const gerekliBelgelerHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · SGK & HAKLAR · GEREKLİ BELGELER",
  headingLines: ["SGK Başvurusu İçin", "Gerekli Belgeler"],
  paragraphs: [
    "SGK işitme cihazı desteğinden yararlanabilmek için sağlık kurulu raporu ve reçetenin yanı sıra birkaç temel belgeye daha ihtiyaç duyulur.",
    "Avrasya İşitme'de, başvurunuz için hangi belgeleri hazırlamanız gerektiğini kategoriler halinde anlatıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "TEMEL BELGELER",
      accent: "#4f46e5",
      title: "Rapor, Reçete ve Kimlik Belgeleri",
      description: "Başvurunun temelini sağlık kurulu raporu, reçete ve kimlik belgeleriniz oluşturur.",
    },
    {
      label: "DURUMA ÖZEL BELGELER",
      accent: "#4338ca",
      title: "Bazı Durumlarda Ek Belge Gerekebilir",
      description: "Çocuklar veya emekliler gibi bazı gruplar için ek belgeler istenebilir.",
    },
    {
      label: "GÜNCEL LİSTE İÇİN YANINIZDAYIZ",
      accent: "#3730a3",
      title: "Belge Listenizi Birlikte Hazırlarız",
      description: "Randevunuzda, size özel güncel belge listesini birlikte gözden geçiririz.",
    },
  ],
  image: {
    src: "/images/audio-service/models/stiline.webp",
    alt: "SGK başvurusu tamamlandıktan sonra değerlendirilebilecek Audio Service Stiline işitme cihazı görseli",
  },
  floatingCard: {
    title: "Audio Service Stiline",
    description: "Belgeleriniz tamamlandıktan sonra değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#4f46e5",
  accentColorHover: "#4338ca",
  accentColorSoft: "rgb(79 70 229 / 0.12)",
  accentColorBorder: "rgb(79 70 229 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(79,70,229,0.35) 0%, rgba(79,70,229,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #14123a 60%, #3730a3 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#4338ca",
  heroWaveOpacity: "0.18",
};
