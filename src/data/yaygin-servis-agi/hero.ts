// Hero content for the "Yaygın Servis Ağı" page
// (/neden-orijinal/yaygin-servis-agi). Renders through the shared
// BrandPageHero component — same component every /isitme-cihazlari/*,
// /teknolojiler/*, /ihtiyaciniza-gore/* and /neden-orijinal/* page uses.
// Third page of the "Neden Orijinal" series (see header.data.ts's
// brandsMega second column), following Güvenilir Teknoloji and Uzun
// Ömürlü Cihazlar. Same trust/authenticity content genre — the
// authorized service network's reach and quality as a direct consequence
// of buying original, authorized-channel products.
//
// accentColor: turuncu / orange-600 (#ea580c) — third color in the fresh
// accent rotation opened for this series on Güvenilir Teknoloji's
// hero.ts; see that file for the full rationale. Chosen for its warm,
// approachable "support network" association, distinct from the prior
// two siblings' trust-blue (#1d4ed8) and durability-emerald (#059669).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const yayginServisAgiHero: BrandPageHeroContent = {
  badge: "MARKALAR · NEDEN ORİJİNAL · YAYGIN SERVİS AĞI",
  headingLines: ["Yaygın Servis Ağı", "Nasıl Bir Güven Verir?"],
  paragraphs: [
    "Orijinal ve yetkili kanaldan alınan işitme cihazları, geniş ve yetkili bir teknik servis ağı tarafından desteklenir; bu da uzun vadeli kullanımda önemli bir güvence sağlar.",
    "Avrasya İşitme olarak, sunduğumuz markaların yetkili servis ağı sayesinde cihazınızın bakım ve onarım ihtiyaçlarına hızlı ve güvenilir bir şekilde yanıt verebiliyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "YETKİLİ SERVİS AĞI",
      accent: "#ea580c",
      title: "Geniş Bir Yetkili Servis Ağına Erişim",
      description: "Sunduğumuz markaların yetkili servis ağı, cihazınızın bakım ve onarım ihtiyaçlarını karşılamaya yardımcı olur.",
    },
    {
      label: "HIZLI YANIT SÜRESİ",
      accent: "#c2410c",
      title: "Arıza Durumunda Hızlı Destek",
      description: "Yetkili servis ağı, arıza durumlarında daha hızlı çözüm süreçleri sunabilir.",
    },
    {
      label: "TUTARLI HİZMET KALİTESİ",
      accent: "#9a3412",
      title: "Her Noktada Aynı Kalite Standardı",
      description: "Yetkili servis ağındaki her nokta, üreticinin belirlediği aynı kalite standartlarına göre hizmet verir.",
    },
  ],
  image: {
    src: "/images/signia/models/silk.webp",
    alt: "Yaygın yetkili servis ağı desteğiyle sunulan orijinal Signia Silk işitme cihazı görseli",
  },
  floatingCard: {
    title: "Signia Silk",
    description: "Yaygın yetkili servis ağıyla desteklenir.",
  },
  accentColor: "#ea580c",
  accentColorHover: "#c2410c",
  accentColorSoft: "rgb(234 88 12 / 0.12)",
  accentColorBorder: "rgb(234 88 12 / 0.4)",
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(234,88,12,0.35) 0%, rgba(234,88,12,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #2a1206 60%, #7c2d12 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#c2410c",
  heroWaveOpacity: "0.18",
};
