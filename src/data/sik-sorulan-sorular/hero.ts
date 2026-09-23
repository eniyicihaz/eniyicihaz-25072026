// Hero content for the "Sık Sorulan Sorular" page
// (/blog/sik-sorulan-sorular). Renders through the shared
// BrandPageHero component. Fourth page of the "Blog & Haberler" series
// (see header.data.ts's knowledgeMega second column), following
// /blog/yeni-teknolojiler, /blog/uzman-gorusleri and
// /blog/basari-hikayeleri.
//
// Content angle: unlike the other Blog & Haberler pages, this one is a
// genuine cross-cutting FAQ DIRECTORY — general, practical questions
// about the clinic and process that aren't "owned" by any single topic
// page (appointment booking, service area, what to bring), plus
// signposting to the many topic-specific FAQ sections already built
// this session (SGK, Rapor Süreci, brand pages, etc.) rather than
// duplicating their content. See faq.ts for the core content and
// considerations.ts for the "go deeper elsewhere" disclaimer.
//
// accentColor: gök mavisi / sky-600 (#0284c7) — fourth color in the
// "Blog & Haberler" column's own accent rotation (blue, violet, orange
// before this). Reused from elsewhere on the site since these pages
// live in different mega-menu columns.
//
// Hero image: A&M XTM P4, a fresh model not yet used by any prior page
// this session (verified in public/images/am/models/xtm-p4.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const sikSorulanSorularHero: BrandPageHeroContent = {
  badge: "BLOG & HABERLER · SIK SORULAN SORULAR",
  headingLines: ["Sık Sorulan", "Sorular"],
  paragraphs: [
    "Randevu almadan cihaz seçimine kadar, kliniğimizle ilgili en çok merak edilen genel soruları bir araya getirdik.",
    "Belirli bir konuda daha derinlemesine bilgi arıyorsanız, ilgili rehber ve hizmet sayfalarımıza yönlendiriyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "GENEL SORULAR",
      accent: "#0284c7",
      title: "Randevu, Süreç ve Hizmetler Hakkında",
      description: "Kliniğimizle ilgili en sık sorulan genel soruları tek sayfada topladık.",
    },
    {
      label: "KONUYA ÖZEL DERİNLEMESİNE BİLGİ",
      accent: "#0369a1",
      title: "Detaylı Sorularınız İçin Yönlendiriyoruz",
      description: "SGK, cihaz seçimi veya servis gibi konularda derinlemesine bilgi için ilgili sayfalarımıza yönlendiriyoruz.",
    },
    {
      label: "SORUNUZU BULAMADIYSANIZ",
      accent: "#075985",
      title: "Bize Doğrudan Sorabilirsiniz",
      description: "Aradığınız yanıtı bulamazsanız, telefon veya WhatsApp üzerinden bize ulaşabilirsiniz.",
    },
  ],
  image: {
    src: "/images/am/models/xtm-p4.webp",
    alt: "Sık sorulan sorular sayfasında örnek olarak yer alan A&M XTM P4 işitme cihazı görseli",
  },
  floatingCard: {
    title: "A&M XTM P4",
    description: "Sorularınızı yanıtladıktan sonra değerlendirebileceğiniz modellerden biri.",
  },
  accentColor: "#0284c7",
  accentColorHover: "#0369a1",
  accentColorSoft: "rgb(2 132 199 / 0.12)",
  accentColorBorder: "rgb(2 132 199 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(2,132,199,0.35) 0%, rgba(2,132,199,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #08202f 60%, #075985 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0369a1",
  heroWaveOpacity: "0.18",
};
