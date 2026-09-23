// Hero content for the "Rapor Süreci" page (/sgk/rapor-sureci).
// Renders through the shared BrandPageHero component. Second page of
// the "SGK & Haklar" series (see header.data.ts's knowledgeMega third
// column), following /sgk/katki-payi.
//
// Accuracy discipline (same as sgk-katki-payi): this page explains the
// sağlık kurulu (heyet) raporu PROCESS and MECHANISM in general terms.
// It avoids stating specific report validity durations or processing
// timeframes as hard figures, since those can vary by hospital and
// change with SGK mevzuatı; where a duration matters it's phrased
// qualitatively and readers are pointed to the pillar page or to
// contacting the clinic for current specifics.
//
// accentColor: camgöbeği / cyan-600 (#0891b2) — second color in the
// "SGK & Haklar" column's own accent rotation (first was katkı payı's
// green #16a34a). Cyan evokes clinical/medical documentation, fitting
// for a health-board-report topic.
//
// Hero image: Rexton Bicore, a fresh model not yet used by any prior
// page this session (verified in public/images/rexton/models/
// bicore.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const raporSureciHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · SGK & HAKLAR · RAPOR SÜRECİ",
  headingLines: ["SGK İşitme Cihazı", "Rapor Süreci"],
  paragraphs: [
    "SGK desteğinden yararlanabilmek için işitme kaybınızı gösteren bir sağlık kurulu (heyet) raporuna ve uzman hekim reçetesine sahip olmanız gerekir.",
    "Avrasya İşitme'de, rapor sürecinin nasıl işlediğini ve hangi aşamalardan geçtiğini adım adım anlatıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "SAĞLIK KURULU RAPORU",
      accent: "#0891b2",
      title: "İşitme Kaybınızı Belgeler",
      description: "Tam teşekküllü bir hastanenin sağlık kurulu tarafından düzenlenir.",
    },
    {
      label: "UZMAN HEKİM REÇETESİ",
      accent: "#0e7490",
      title: "Rapora Ek Olarak Gereklidir",
      description: "Raporun yanı sıra, cihaz kullanımını öneren bir reçete de düzenlenir.",
    },
    {
      label: "SÜREÇTE YANINIZDAYIZ",
      accent: "#155e75",
      title: "Randevunuzda Yol Gösteriyoruz",
      description: "Hangi hastaneye başvurmanız gerektiği konusunda size rehberlik ederiz.",
    },
  ],
  image: {
    src: "/images/rexton/models/bicore.webp",
    alt: "SGK rapor süreci sonrasında değerlendirilebilecek Rexton Bicore işitme cihazı görseli",
  },
  floatingCard: {
    title: "Rexton Bicore",
    description: "Rapor süreciniz tamamlandıktan sonra değerlendirilebilecek modellerden biri.",
  },
  accentColor: "#0891b2",
  accentColorHover: "#0e7490",
  accentColorSoft: "rgb(8 145 178 / 0.12)",
  accentColorBorder: "rgb(8 145 178 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(8,145,178,0.35) 0%, rgba(8,145,178,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a1a20 60%, #155e75 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0e7490",
  heroWaveOpacity: "0.18",
};
