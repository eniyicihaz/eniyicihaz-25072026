// Hero content for the "Kalıp Alımı" page (/uygulama-ayar/
// kalip-alimi). Renders through the shared BrandPageHero component —
// same component every content page this session uses. Fourth page of
// the "Uygulama & Ayar" series (see header.data.ts's servicesMega
// second column), following Cihaz Uygulama, Kişiye Özel Programlama and
// Cihaz Deneme. A new physical/practical process within this series —
// distinct from the software-programming focus of the prior two
// siblings and from Cihaz Deneme's decision-support framing: this page
// covers the physical ear-impression and custom-mold fabrication
// process itself.
//
// accentColor: pembe / pink-600 (#db2777) — fourth color in the fresh
// accent rotation opened for the "Uygulama & Ayar" column; reused from
// the Hafif Derece İşitme Kaybı page's own pink since that page lives
// in a different mega-menu column (brandsMega's "İhtiyacınıza Göre"
// grouping) and never co-appears with this one.
//
// Hero image: Audio Service Kulak İçi Serisi (Custom ITE), a fresh
// model not yet used by any prior page this session and thematically
// exact — its own description explicitly states it's built from the
// user's own ear impression (verified in public/images/audio-service/
// models/custom-ite.webp and src/data/audio-service/models.ts).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const kalipAlimiHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · UYGULAMA & AYAR · KALIP ALIMI",
  headingLines: ["Kulak Kalıbı Alımı", "Süreci Nasıl İşler?"],
  paragraphs: [
    "Kalıp alımı, kulak kanalınızın şekline birebir uyan, kişiye özel bir kulak kalıbı veya kulak içi kabuk üretimi için gereken ilk ve en önemli adımdır.",
    "Avrasya İşitme'de, kulak muayenesinden başlayıp laboratuvar üretimine kadar uzanan kalıp alımı sürecini özenle yürütüyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "KİŞİYE ÖZEL UYUM",
      accent: "#db2777",
      title: "Kulak Kanalınıza Birebir Uyar",
      description: "Kalıbınız, yalnızca sizin kulak kanalınızın şekline göre üretilir.",
    },
    {
      label: "GÜVENLİ İŞLEM",
      accent: "#be185d",
      title: "Kulak Muayenesiyle Başlar",
      description: "İşlem öncesinde kulak kanalınız, uygunluk açısından kontrol edilir.",
    },
    {
      label: "LABORATUVAR ÜRETİMİ",
      accent: "#9d174d",
      title: "Birkaç İş Günü İçinde Hazırlanır",
      description: "Alınan kalıp, üretim için uzman bir laboratuvara gönderilir.",
    },
  ],
  image: {
    src: "/images/audio-service/models/custom-ite.webp",
    alt: "Kulak kalıbınıza özel üretilen Audio Service Kulak İçi Serisi işitme cihazı görseli",
  },
  floatingCard: {
    title: "Audio Service Kulak İçi Serisi",
    description: "Kulak kalıbınıza özel üretilen modellerden biri.",
  },
  accentColor: "#db2777",
  accentColorHover: "#be185d",
  accentColorSoft: "rgb(219 39 119 / 0.12)",
  accentColorBorder: "rgb(219 39 119 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(219,39,119,0.35) 0%, rgba(219,39,119,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2a0a1c 60%, #9d174d 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#be185d",
  heroWaveOpacity: "0.18",
};
