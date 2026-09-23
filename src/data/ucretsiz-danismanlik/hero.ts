// Hero content for the "Ücretsiz Danışmanlık" page
// (/neden-orijinal/ucretsiz-danismanlik). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*,
// /teknolojiler/*, /ihtiyaciniza-gore/* and /neden-orijinal/* page uses.
// Fifth page of the "Neden Orijinal" series (see header.data.ts's
// brandsMega second column), following Güvenilir Teknoloji, Uzun Ömürlü
// Cihazlar, Yaygın Servis Ağı and Orijinal Aksesuar. Same trust/
// authenticity content genre — this page's own angle is the free
// expert-guidance process itself (hearing test, needs analysis, demo
// trial, SGK guidance) rather than the product or its support
// infrastructure.
//
// accentColor: deniz mavisi-yeşili / teal-600 (#0d9488) — fifth color in
// the fresh accent rotation opened for this series on Güvenilir
// Teknoloji's hero.ts; see that file for the full rationale. Chosen for
// its calm, healthcare-consultation association, distinct from the four
// prior siblings' trust-blue, durability-emerald, support-orange and
// accessory-violet.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const ucretsizDanismanlikHero: BrandPageHeroContent = {
  badge: "MARKALAR · NEDEN ORİJİNAL · ÜCRETSİZ DANIŞMANLIK",
  headingLines: ["Ücretsiz Danışmanlık", "Nasıl Bir Fark Yaratır?"],
  paragraphs: [
    "Doğru işitme cihazını seçmek, işitme testinden bütçenize kadar birçok faktörü bir arada değerlendirmeyi gerektirir; bu süreçte uzman bir danışmanlıktan faydalanmak kararınızı kolaylaştırabilir.",
    "Avrasya İşitme olarak, ücretsiz işitme testi ve uzman danışmanlığımızla size en uygun cihazı satış baskısı olmadan birlikte belirliyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "ÜCRETSİZ İŞİTME TESTİ",
      accent: "#0d9488",
      title: "İhtiyacınız Objektif Bir Değerlendirmeyle Belirlenir",
      description: "Ücretsiz işitme testi, size uygun cihaz seçiminin temelini oluşturur.",
    },
    {
      label: "SATIŞ BASKISI YOK",
      accent: "#0f766e",
      title: "Kararınızı Kendi Hızınızda Verirsiniz",
      description: "Danışmanlık sürecimiz, sizi belirli bir ürüne yönlendirmek yerine ihtiyacınıza odaklanır.",
    },
    {
      label: "SGK DANIŞMANLIĞI",
      accent: "#115e59",
      title: "SGK Süreciyle İlgili de Bilgilendirilirsiniz",
      description: "SGK desteği ve uygunluk kriterleri hakkında da danışmanlık alabilirsiniz.",
    },
  ],
  image: {
    src: "/images/oticon/models/zeal.webp",
    alt: "Ücretsiz danışmanlık sürecinde önerilebilecek Oticon Zeal işitme cihazı görseli",
  },
  floatingCard: {
    title: "Oticon Zeal",
    description: "Size en uygun modeli birlikte belirleriz.",
  },
  accentColor: "#0d9488",
  accentColorHover: "#0f766e",
  accentColorSoft: "rgb(13 148 136 / 0.12)",
  accentColorBorder: "rgb(13 148 136 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(13,148,136,0.35) 0%, rgba(13,148,136,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0a2523 60%, #115e59 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0f766e",
  heroWaveOpacity: "0.18",
};
