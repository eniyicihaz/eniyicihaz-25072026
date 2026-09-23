// Hero content for the "Timpanometri" page (/degerlendirme/timpanometri).
// Renders through the shared BrandPageHero component — same component
// every content page this session uses. Third page of the
// "Değerlendirme" series (see header.data.ts's servicesMega first
// column), following Ücretsiz İşitme Testi and Odyometri. Same clinical
// service-page genre and health-content safety discipline — this page's
// own scope is the specific timpanometri procedure (an objective,
// response-free middle-ear test) rather than the subjective threshold
// test already covered on Odyometri, which this page's own comparison
// section explicitly contrasts against.
//
// accentColor: mor / purple-600 (#9333ea) — third color in the fresh
// accent rotation opened for this series on Ücretsiz İşitme Testi's
// hero.ts (cyan) and continued on Odyometri's (indigo); see that file
// for the full rationale.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const timpanometriHero: BrandPageHeroContent = {
  badge: "HİZMETLERİMİZ · DEĞERLENDİRME · TİMPANOMETRİ",
  headingLines: ["Timpanometri", "Nedir ve Ne İçin Yapılır?"],
  paragraphs: [
    "Timpanometri, orta kulaktaki basıncı ve kulak zarının hareketliliğini ölçen, işitme değerlendirmesini tamamlayan objektif bir testtir.",
    "Avrasya İşitme'de, timpanometri testinizi odyometri ile birlikte değerlendirerek işitme durumunuzun daha kapsamlı bir resmini oluşturuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "OBJEKTİF ÖLÇÜM",
      accent: "#9333ea",
      title: "Yanıt Vermeden Yapılan Bir Test",
      description: "Timpanometri, sizin aktif katılımınızı gerektirmeden orta kulak fonksiyonunu ölçer.",
    },
    {
      label: "HIZLI UYGULAMA",
      accent: "#7e22ce",
      title: "Birkaç Saniyede Tamamlanır",
      description: "Test, kulak kanalına yerleştirilen küçük bir prob ile hızlıca uygulanır.",
    },
    {
      label: "TAMAMLAYICI DEĞERLENDİRME",
      accent: "#6b21a8",
      title: "Odyometriyi Tamamlayan Bir Test",
      description: "Timpanometri, odyometri sonuçlarının yorumlanmasına ek bir bakış açısı katar.",
    },
  ],
  image: {
    src: "/images/bernafon/models/encanta.webp",
    alt: "Timpanometri sonrası kapsamlı değerlendirmede önerilebilecek Bernafon Encanta işitme cihazı görseli",
  },
  floatingCard: {
    title: "Bernafon Encanta",
    description: "Kapsamlı değerlendirme sonrası önerilebilecek modellerden biri.",
  },
  accentColor: "#9333ea",
  accentColorHover: "#7e22ce",
  accentColorSoft: "rgb(147 51 234 / 0.12)",
  accentColorBorder: "rgb(147 51 234 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(147,51,234,0.35) 0%, rgba(147,51,234,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1e0a2e 60%, #6b21a8 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#7e22ce",
  heroWaveOpacity: "0.18",
};
