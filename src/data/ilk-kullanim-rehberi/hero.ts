// Hero content for the "İlk Kullanım Rehberi" page (/rehberler/
// ilk-kullanim-rehberi). Renders through the shared BrandPageHero
// component — same component every content page this session uses.
// Third page of the "Rehberler" series (see header.data.ts's
// knowledgeMega first column), following İşitme Kaybı Nedir? and Cihaz
// Seçim Rehberi.
//
// Distinct from two other pages that might sound similar: Cihaz
// Uygulama (Uygulama & Ayar) covers the professional FITTING
// APPOINTMENT itself — what the audiologist does; this page covers the
// practical, day-to-day operating basics a new user needs (physical
// handling, controls, first-day wearing schedule). Also distinct from
// the still-unbuilt "Uyum Süreci" sibling, which will cover the
// longer, weeks-to-months psychological/auditory ADAPTATION process —
// this page is the quick-start operational guide, not the adaptation
// journey.
//
// accentColor: zümrüt yeşili / emerald-600 (#059669) — third color in
// the fresh accent rotation opened for the "Rehberler" column; a
// positive, "fresh start" tone fitting a first-days quick-start guide.
//
// Hero image: Sonic Radiant, a fresh model not yet used by any prior
// page this session (verified in public/images/sonic/models/
// radiant.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const ilkKullanimRehberiHero: BrandPageHeroContent = {
  badge: "BİLGİ MERKEZİ · REHBERLER · İLK KULLANIM REHBERİ",
  headingLines: ["İlk Kullanım Rehberi", "Cihazınızla İlk Günler"],
  paragraphs: [
    "İlk kullanım rehberi, yeni cihazınızı takma, çıkarma, temel kontrolleri kullanma ve ilk günlerde nasıl bir kullanım süresi izleyeceğiniz konusunda size pratik bir başlangıç noktası sunar.",
    "Avrasya İşitme'de, cihazınızla geçirdiğiniz ilk günlerde kendinizi güvende hissetmeniz için size adım adım rehberlik ediyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "TEMEL KONTROLLER",
      accent: "#059669",
      title: "Takma, Çıkarma ve Ses Ayarını Öğrenirsiniz",
      description: "Cihazınızı günlük hayatta güvenle kullanmanız için temel işlemleri anlatıyoruz.",
    },
    {
      label: "KADEMELİ BAŞLANGIÇ",
      accent: "#047857",
      title: "İlk Günlerde Ne Kadar Takmalısınız?",
      description: "İlk hafta için önerilen kullanım süresi hakkında pratik bir çerçeve sunuyoruz.",
    },
    {
      label: "BASİT SORUN GİDERME",
      accent: "#065f46",
      title: "Küçük Sorunları Kendiniz Çözebilirsiniz",
      description: "Ses gelmemesi gibi basit durumlarda ilk kontrol edebileceğiniz adımları paylaşıyoruz.",
    },
  ],
  image: {
    src: "/images/sonic/models/radiant.webp",
    alt: "İlk kullanım rehberinde ele alınan Sonic Radiant işitme cihazı görseli",
  },
  floatingCard: {
    title: "Sonic Radiant",
    description: "İlk kullanım rehberinde örnek alınan modellerden biri.",
  },
  accentColor: "#059669",
  accentColorHover: "#047857",
  accentColorSoft: "rgb(5 150 105 / 0.12)",
  accentColorBorder: "rgb(5 150 105 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(5,150,105,0.35) 0%, rgba(5,150,105,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a2019 60%, #065f46 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#047857",
  heroWaveOpacity: "0.18",
};
