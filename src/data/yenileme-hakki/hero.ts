// Hero content for the "Yenileme Hakkı" page (/sgk/yenileme-hakki).
// Renders through the shared BrandPageHero component. Fifth and final
// page of the "SGK & Haklar" series (see header.data.ts's knowledgeMega
// third column), following /sgk/katki-payi, /sgk/rapor-sureci,
// /sgk/gerekli-belgeler and /sgk/cocuklarda-sgk.
//
// Accuracy note (updated after the owner's MEDULA confirmation): the
// renewal PERIOD is now stated as a hard number — 5 years for every age
// group including children, counted from the date the previous device
// was recorded in MEDULA, with the right and left ear calculated
// separately. That period rests on the centre's MEDULA process
// information, NOT on a mevzuat text, and the page says so (see
// renewal-guide.ts). Early renewal is limited to the two SUT exceptions
// (growing child; fault without user fault + no repair, both with a
// health report); "hearing loss progression" is NOT a reason and must
// not be reintroduced. No e-Devlet claim beyond the two service names.
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
  textOnly: true, // Hero Visual Paketi: görselsiz kısa hero
  badge: "BİLGİ MERKEZİ · SGK & HAKLAR · YENİLEME HAKKI",
  headingLines: ["SGK İşitme Cihazı", "Yenileme Hakkı"],
  paragraphs: [
    "SGK kapsamındaki işitme cihazı, çocuklar dâhil bütün yaş gruplarında 5 yılda bir yenilenebilir. Süre, önceki cihazın MEDULA sistemine kaydedildiği tarihten itibaren hesaplanır; sağ ve sol kulak ayrı ayrı değerlendirilir.",
    "Avrasya İşitme'de, yenileme süresinin nasıl hesaplandığını ve süre dolmadan hangi durumlarda yenileme yapılabildiğini anlatıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "PERİYODİK YENİLEME HAKKI",
      accent: "#0d9488",
      title: "Cihazınızı Yeniden SGK Desteğiyle Alabilirsiniz",
      description: "5 yıllık süre dolduğunda yeni bir cihaz için tekrar SGK desteğinden yararlanabilirsiniz.",
    },
    {
      label: "ÖZEL DURUMLARDA ERKEN YENİLEME",
      accent: "#0f766e",
      title: "Bazı Durumlarda Süre Beklemeden Yenileme Mümkün",
      description: "Çocuğun büyümesi nedeniyle cihazın kullanılamaması veya kullanıcı kusuru olmadan oluşan, onarılamayan arıza hâlinde, sağlık raporuyla süre dolmadan yenileme değerlendirilir.",
    },
    {
      label: "SÜRE TAKİBİ İÇİN YANINIZDAYIZ",
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
