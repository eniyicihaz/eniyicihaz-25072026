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
  textOnly: true, // Hero Visual Paketi: görselsiz kısa hero
  badge: "MARKALAR · NEDEN ORİJİNAL · SERVİS DESTEĞİ",
  headingLines: ["Servis Desteği", "Nasıl Bir Güven Verir?"],
  paragraphs: [
    "Bir işitme cihazının uzun vadeli kullanımında, bakım ve onarım ihtiyacında ulaşabileceğiniz teknik servis desteği önemli bir güvencedir.",
    "Avrasya İşitme olarak sattığımız 18 markanın tamamında Darıca'daki merkezimizde teknik servis veriyoruz; garanti kapsamındaki cihazları gerektiğinde dış servise gönderiyoruz.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "18 MARKADA SERVİS",
      accent: "#ea580c",
      title: "Sattığımız Tüm Markalarda Teknik Servis",
      description: "Sattığımız 18 markanın tamamında teknik servis desteği veriyoruz.",
    },
    {
      label: "TESLİM SÜRESİ",
      accent: "#c2410c",
      title: "Teknik Serviste 3 Gün İçinde Teslim",
      description: "Teknik servis işlemlerinde cihaz 3 gün içinde teslim edilir; ücret cihazın durumuna göre belirlenir.",
    },
    {
      label: "GARANTİ İŞLEMLERİ",
      accent: "#9a3412",
      title: "Garanti İşlemlerinde Ücretsiz Destek",
      description: "Garanti işlemleri ücretsizdir; süre cihaza göre 1–5 gün arasında değişebilir.",
    },
  ],
  image: {
    src: "/images/signia/models/silk.webp",
    alt: "Signia Silk işitme cihazı",
  },
  floatingCard: {
    title: "Signia Silk",
    description: "Teknik servis desteği sunduğumuz markalardan biri.",
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
