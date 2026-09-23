// Hero content for the "Ekonomik Seri" page (/segmentler/ekonomik-seri).
// Renders through the shared BrandPageHero component — same component
// every /isitme-cihazlari/*, /teknolojiler/*, /ihtiyaciniza-gore/*,
// /neden-orijinal/* and /segmentler/* page uses. Third and final page of
// the "Segmentler" series (see header.data.ts's brandsMega third
// column) — completing the brandsMega mega menu's "Segmentler" column
// entirely (three genuinely new pages plus three menu items already
// wired to existing devicesMega content on Premium Seri). Same
// candidacy-based content genre as Premium Seri and Standart Seri.
//
// Hero image: Oticon Ruby is the one clean match reserved for this page
// during Premium Seri's research — its own category tag is literally
// "Ekonomik Seri" with a description ("temel işitme ihtiyaçları için
// daha uygun fiyatlı bir seçenek") that matches this page's subject
// exactly.
//
// accentColor: yeşil / green-600 (#16a34a) — third and final color in
// the fresh accent rotation opened for this series on Premium Seri's
// hero.ts (gold) and continued on Standart Seri's (sky blue); see
// Premium Seri's hero.ts for the full rationale. Green was chosen for
// its "value/savings" association, distinct from the two prior
// siblings.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const ekonomikSeriHero: BrandPageHeroContent = {
  badge: "MARKALAR · SEGMENTLER · EKONOMİK SERİ",
  headingLines: ["Ekonomik Seri", "İşitme Cihazları"],
  paragraphs: [
    "Ekonomik seri işitme cihazları; temel işitme ihtiyaçlarını karşılayan, sade ve uygun fiyatlı bir teknoloji seviyesi sunar.",
    "Avrasya İşitme'de, dünyaca tanınan markaların ekonomik seri modellerini; orijinal ürün güvencesi ve tam garanti ile sunuyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "TEMEL İHTİYAÇLAR",
      accent: "#16a34a",
      title: "Günlük Temel İşitme İhtiyaçlarını Karşılar",
      description: "Ekonomik seri modeller, günlük konuşmaları takip etmek için gerekli temel işlevleri sunar.",
    },
    {
      label: "UYGUN FİYAT",
      accent: "#15803d",
      title: "Sınırlı Bütçeye Uygun Bir Seçenek",
      description: "Ekonomik seri, standart ve premium serilere göre daha uygun bir fiyat aralığında sunulur.",
    },
    {
      label: "SADE KULLANIM",
      accent: "#166534",
      title: "Basit ve Anlaşılır Kullanım Deneyimi",
      description: "Az sayıda ayar seçeneği, ekonomik seriyi kullanımı kolay bir hâle getirir.",
    },
  ],
  image: {
    src: "/images/oticon/models/ruby.webp",
    alt: "Uygun fiyatlı ve pratik yapısıyla ekonomik seriyi temsil eden Oticon Ruby işitme cihazı görseli",
  },
  floatingCard: {
    title: "Oticon Ruby",
    description: "Uygun fiyatlı ve pratik, ekonomik serinin bir örneği.",
  },
  accentColor: "#16a34a",
  accentColorHover: "#15803d",
  accentColorSoft: "rgb(22 163 74 / 0.12)",
  accentColorBorder: "rgb(22 163 74 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(22,163,74,0.35) 0%, rgba(22,163,74,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #08210f 60%, #166534 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#15803d",
  heroWaveOpacity: "0.18",
};
