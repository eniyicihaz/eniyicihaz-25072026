// Hero content for the "Başarı Hikayeleri" page (/blog/basari-hikayeleri).
// Renders through the shared BrandPageHero component. Third page of the
// "Blog & Haberler" series (see header.data.ts's knowledgeMega second
// column), following /blog/yeni-teknolojiler and /blog/uzman-gorusleri.
//
// CRITICAL content-integrity note: this page deliberately contains NO
// fabricated named/dated patient testimonials, quotes, or case studies
// — we have no real patient data to draw from, and inventing specific
// "hastamız X şunu yaşadı" anecdotes would be presenting fiction as
// fact. Instead, every section describes GENERAL, AGGREGATE CATEGORIES
// of positive outcomes patients commonly report (family communication,
// work confidence, social life, safety, mental wellbeing), framed the
// same safe way every ExpertOpinion section on this site already is:
// the clinic's own general observation, not a personal testimonial.
// See considerations.ts for the explicit disclaimer.
//
// accentColor: turuncu / orange-600 (#ea580c) — third color in the
// "Blog & Haberler" column's own accent rotation (blue, violet before
// this). Reused from elsewhere on the site (Cihaz Seçim Rehberi in the
// Rehberler column) since these pages live in different mega-menu
// columns; warm orange evokes optimism/human connection, fitting for
// this topic.
//
// Hero image: Sonic Enchant BTE, a fresh model variant not yet used by
// any prior page this session (verified in public/images/sonic/models/
// enchant-bte.webp).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const basariHikayeleriHero: BrandPageHeroContent = {
  badge: "BLOG & HABERLER · BAŞARI HİKAYELERİ",
  headingLines: ["İşitme Cihazının", "Hayata Kattıkları"],
  paragraphs: [
    "İşitme cihazı kullanan birçok kişi, aile iletişiminden iş hayatına kadar günlük yaşamlarında olumlu değişimler yaşadığını paylaşıyor.",
    "Bu sayfada, kliniğimizde sıkça gözlemlediğimiz genel deneyim kategorilerini sizinle paylaşıyoruz — gizlilik nedeniyle kişisel isim veya vaka paylaşmıyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "AİLE İLETİŞİMİ",
      accent: "#ea580c",
      title: "Yakınlarınızla Daha Rahat İletişim",
      description: "Birçok kullanıcımız, aile içi sohbetleri daha rahat takip edebildiğini paylaşıyor.",
    },
    {
      label: "SOSYAL HAYAT",
      accent: "#c2410c",
      title: "Sosyal Ortamlara Yeniden Katılım",
      description: "Kalabalık ortamlarda konuşmayı takip etmek, sosyal hayata katılımı kolaylaştırabiliyor.",
    },
    {
      label: "GİZLİLİĞE SAYGILIYIZ",
      accent: "#9a3412",
      title: "Genel Deneyimleri Paylaşıyoruz, Kişisel Bilgi Değil",
      description: "Bu sayfa, hastalarımızın kişisel bilgilerini değil, genel deneyim kategorilerini yansıtır.",
    },
  ],
  image: {
    src: "/images/sonic/models/enchant-bte.webp",
    alt: "Kullanıcıların günlük hayatında olumlu değişim yaşamasına katkı sağlayabilecek Sonic Enchant BTE işitme cihazı görseli",
  },
  floatingCard: {
    title: "Sonic Enchant BTE",
    description: "Günlük yaşamda pratik kullanım sunan modellerden biri.",
  },
  accentColor: "#ea580c",
  accentColorHover: "#c2410c",
  accentColorSoft: "rgb(234 88 12 / 0.12)",
  accentColorBorder: "rgb(234 88 12 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(234,88,12,0.35) 0%, rgba(234,88,12,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2a1608 60%, #9a3412 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#c2410c",
  heroWaveOpacity: "0.18",
};
