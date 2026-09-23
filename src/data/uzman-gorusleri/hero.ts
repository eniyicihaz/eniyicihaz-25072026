// Hero content for the "Uzman Görüşleri" page (/blog/uzman-gorusleri).
// Renders through the shared BrandPageHero component. Second page of
// the "Blog & Haberler" series (see header.data.ts's knowledgeMega
// second column), following /blog/yeni-teknolojiler.
//
// Content angle: a myth-vs-fact educational page correcting common
// misconceptions about hearing loss and hearing aids. Framed as the
// clinic's own general professional perspective (same safe pattern as
// every ExpertOpinion section this session) — NOT as named/personal
// testimonials from specific doctors, since no real named expert
// quotes exist to draw from. Health-safety discipline applies: general
// audiological consensus only, hedged language, no diagnosis, urgent
// sudden-hearing-loss flag preserved where relevant (see
// considerations.ts).
//
// accentColor: mor / violet-600 (#7c3aed) — second color in the "Blog &
// Haberler" column's own accent rotation (blue for yeni-teknolojiler
// before this). Reused from elsewhere on the site (Uyum Süreci in the
// Rehberler column) since these pages live in different mega-menu
// columns; violet evokes authority/insight, fitting for an
// expert-perspective topic.
//
// Hero image: Bernafon Encanta Alpha XT, a fresh model not yet used by
// any prior page this session (verified in
// public/images/bernafon/models/encanta-alpha-xt.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const uzmanGorusleriHero: BrandPageHeroContent = {
  badge: "BLOG & HABERLER · UZMAN GÖRÜŞLERİ",
  headingLines: ["Uzman Görüşleri:", "Doğrular ve Yanlışlar"],
  paragraphs: [
    "İşitme kaybı ve işitme cihazları hakkında toplumda yaygın birçok yanlış bilgi dolaşıyor.",
    "Avrasya İşitme uzman ekibi olarak, en sık karşılaştığımız yanlış bilgileri ve bunların yerine bilinmesi gerekenleri sizinle paylaşıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YAYGIN YANLIŞ BİLGİLER",
      accent: "#7c3aed",
      title: "En Sık Duyduğumuz Yanlış Bilgileri Düzeltiyoruz",
      description: "İşitme sağlığı hakkında sık karşılaşılan yanlış inanışları uzman bakış açısıyla ele alıyoruz.",
    },
    {
      label: "GENEL BİLGİLENDİRME",
      accent: "#6d28d9",
      title: "Kişisel Tanının Yerini Tutmaz",
      description: "Bu sayfadaki bilgiler geneldir; kişisel durumunuz için uzman değerlendirmesi gerekir.",
    },
    {
      label: "SORULARINIZI YANITLIYORUZ",
      accent: "#5b21b6",
      title: "Merak Ettiklerinizi Bizimle Paylaşın",
      description: "Duyduğunuz bir bilginin doğruluğundan emin değilseniz, bize sorabilirsiniz.",
    },
  ],
  image: {
    src: "/images/bernafon/models/encanta-alpha-xt.webp",
    alt: "Uzman görüşleriyle desteklenen doğru bilgiye örnek olarak Bernafon Encanta Alpha XT işitme cihazı görseli",
  },
  floatingCard: {
    title: "Bernafon Encanta Alpha XT",
    description: "Doğru bilgiyle doğru cihaz seçimine örnek modellerden biri.",
  },
  accentColor: "#7c3aed",
  accentColorHover: "#6d28d9",
  accentColorSoft: "rgb(124 58 237 / 0.12)",
  accentColorBorder: "rgb(124 58 237 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1c1030 60%, #5b21b6 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#6d28d9",
  heroWaveOpacity: "0.18",
};
